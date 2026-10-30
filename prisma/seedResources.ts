import { PrismaClient } from '@prisma/client';

export async function seedResources(prisma: PrismaClient) {
  const skillsData = [
    {
      name: 'Kubernetes',
      whyItMatters: 'Industry standard for orchestrating distributed ML workloads, autoscaling GPU node pools, and zero-downtime canary model rollouts.',
      estimatedHours: '6.5 hrs',
      resources: [
        {
          id: 'res_k8s_3',
          title: 'Kubernetes for Beginners (Hands-on Labs)',
          type: 'course',
          provider: 'KodeKloud',
          durationHrs: 4.0,
          durationText: '4 hrs',
          badge: 'Most Popular',
          url: 'https://kodekloud.com/courses/kubernetes-for-the-absolute-beginners-hands-on/',
        },
        {
          id: 'res_k8s_1',
          title: 'Kubernetes Core Concepts & Pod Architecture',
          type: 'doc',
          provider: 'Kubernetes Official',
          durationHrs: 1.5,
          durationText: '1.5 hrs',
          badge: null,
          url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
        },
        {
          id: 'res_k8s_2',
          title: 'Deploying Scalable ML Inference on K8s Cluster',
          type: 'article',
          provider: 'Towards Data Science',
          durationHrs: 1.0,
          durationText: '1 hr',
          badge: null,
          url: 'https://towardsdatascience.com/deploying-machine-learning-models-with-kubernetes-b28669c54e0b',
        },
      ]
    },
    {
      name: 'Docker',
      whyItMatters: 'Essential for containerizing ML inference microservices and guaranteeing reproducibility across dev, test, and GPU cloud environments.',
      estimatedHours: '4 hrs',
      resources: [
        {
          id: 'res_docker_2',
          title: 'Docker for Machine Learning & Python Crash Course',
          type: 'video',
          provider: 'freeCodeCamp',
          durationHrs: 2.5,
          durationText: '2.5 hrs',
          badge: 'Most Popular',
          url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo',
        },
        {
          id: 'res_docker_1',
          title: 'Official Docker Containerization Guide for ML Developers',
          type: 'doc',
          provider: 'Docker Docs',
          durationHrs: 0.75,
          durationText: '45 mins',
          badge: null,
          url: 'https://docs.docker.com/get-started/',
        },
        {
          id: 'res_docker_3',
          title: 'Production Multi-stage Docker Builds for PyTorch & CUDA',
          type: 'article',
          provider: 'Real Python',
          durationHrs: 1.0,
          durationText: '1 hr',
          badge: null,
          url: 'https://realpython.com/docker-continuous-integration/',
        },
      ]
    },
    {
      name: 'FastAPI',
      whyItMatters: 'The premier async Python framework for serving high-throughput LLMs and computer vision models with sub-10ms latency.',
      estimatedHours: '3 hrs',
      resources: [
        {
          id: 'res_fastapi_1',
          title: 'FastAPI Official Interactive Tutorial & Async Endpoints',
          type: 'doc',
          provider: 'FastAPI Docs',
          durationHrs: 1.0,
          durationText: '1 hr',
          badge: 'Most Popular',
          url: 'https://fastapi.tiangolo.com/tutorial/',
        },
        {
          id: 'res_fastapi_2',
          title: 'Serving PyTorch & HuggingFace Models with FastAPI',
          type: 'video',
          provider: 'freeCodeCamp',
          durationHrs: 2.0,
          durationText: '2 hrs',
          badge: null,
          url: 'https://www.youtube.com/watch?v=h5wZ283l58s',
        },
        {
          id: 'res_fastapi_3',
          title: 'Building High-Performance Async REST APIs in Python',
          type: 'article',
          provider: 'TestDriven.io',
          durationHrs: 1.5,
          durationText: '1.5 hrs',
          badge: null,
          url: 'https://testdriven.io/blog/fastapi-crud/',
        },
      ]
    },
    {
      name: 'MLOps',
      whyItMatters: 'Bridges prototype notebooks and production; covers experiment tracking, model registries, feature stores, and automated retraining.',
      estimatedHours: '8 hrs',
      resources: [
        {
          id: 'res_mlops_1',
          title: 'Made With ML: Production MLOps from Scratch',
          type: 'course',
          provider: 'MadeWithML (Goku Mohandas)',
          durationHrs: 6.0,
          durationText: '6 hrs',
          badge: 'Most Popular',
          url: 'https://madewithml.com/',
        },
        {
          id: 'res_mlops_2',
          title: 'MLflow Tracking, Registry & Model Packaging Tutorial',
          type: 'doc',
          provider: 'MLflow Official',
          durationHrs: 1.5,
          durationText: '1.5 hrs',
          badge: null,
          url: 'https://mlflow.org/docs/latest/tutorials-and-examples/index.html',
        },
        {
          id: 'res_mlops_3',
          title: 'Designing Enterprise Machine Learning Systems',
          type: 'article',
          provider: 'Chip Huyen (Stanford)',
          durationHrs: 2.0,
          durationText: '2 hrs',
          badge: null,
          url: 'https://chiphuyen.com/book-ml-systems-design/',
        },
      ]
    },
    {
      name: 'Vector DB',
      whyItMatters: 'Core architecture for Generative AI & RAG, enabling semantic search, dense embedding retrieval, and scalable knowledge indexing.',
      estimatedHours: '3 hrs',
      resources: [
        {
          id: 'res_vdb_2',
          title: 'Building Production RAG with LangChain & Vector Databases',
          type: 'course',
          provider: 'DeepLearning.AI',
          durationHrs: 2.0,
          durationText: '2 hrs',
          badge: 'Most Popular',
          url: 'https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/',
        },
        {
          id: 'res_vdb_1',
          title: 'Pinecone Vector Search & Dense Embeddings Masterclass',
          type: 'doc',
          provider: 'Pinecone Docs',
          durationHrs: 1.0,
          durationText: '1 hr',
          badge: null,
          url: 'https://docs.pinecone.io/guides/get-started/overview',
        },
        {
          id: 'res_vdb_3',
          title: 'Vector Indexing (HNSW vs IVF) for High-Scale Retrieval',
          type: 'article',
          provider: 'Towards Data Science',
          durationHrs: 1.0,
          durationText: '1 hr',
          badge: null,
          url: 'https://towardsdatascience.com/vector-search-hnsw-vs-ivf',
        },
      ]
    }
  ];

  for (const s of skillsData) {
    const skill = await prisma.skill.upsert({
      where: { name: s.name },
      update: {
        whyItMatters: s.whyItMatters,
        estimatedHours: s.estimatedHours,
      },
      create: {
        name: s.name,
        whyItMatters: s.whyItMatters,
        estimatedHours: s.estimatedHours,
      }
    });

    for (const r of s.resources) {
      await prisma.resource.upsert({
        where: { id: r.id },
        update: {
          title: r.title,
          type: r.type,
          provider: r.provider,
          durationHrs: r.durationHrs,
          durationText: r.durationText,
          badge: r.badge,
          url: r.url,
          skillId: skill.id,
        },
        create: {
          id: r.id,
          skillId: skill.id,
          title: r.title,
          type: r.type,
          provider: r.provider,
          durationHrs: r.durationHrs,
          durationText: r.durationText,
          badge: r.badge,
          url: r.url,
        }
      });
    }
  }
}
