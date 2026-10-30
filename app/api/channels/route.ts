import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { db } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const session = await getCurrentUser();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const channelId = new URL(req.url).searchParams.get('channelId') || 'ml-engineering';
    const messages = await db.channelMessage.findMany({
      where: { channelId },
      orderBy: { createdAt: 'asc' },
      take: 200,
    });

    return NextResponse.json({
      success: true,
      channelId,
      messages: messages.map((message) => ({
        ...message,
        createdAt: message.createdAt.toISOString(),
        isSelf: message.senderId === session.user.id,
      })),
    });
  } catch (error) {
    console.error('Channel GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch channel messages' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getCurrentUser();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const channelId = typeof body.channelId === 'string' ? body.channelId.trim() : '';
    const text = typeof body.text === 'string' ? body.text.trim() : '';
    if (!channelId || !text || channelId.length > 100 || text.length > 2000) {
      return NextResponse.json({ error: 'Invalid channel or message' }, { status: 400 });
    }

    const { user, profile } = session;
    const message = await db.channelMessage.create({
      data: {
        channelId,
        senderId: user.id,
        senderName: user.name,
        senderCollege: profile?.college || 'CareerX Peer',
        senderRole: profile?.careerGoal || profile?.preferredField || 'Student',
        senderPhoto: profile?.profilePhoto || null,
        text,
      },
    });

    return NextResponse.json({
      success: true,
      message: { ...message, createdAt: message.createdAt.toISOString(), isSelf: true },
    });
  } catch (error) {
    console.error('Channel POST error:', error);
    return NextResponse.json({ error: 'Failed to post message' }, { status: 500 });
  }
}
