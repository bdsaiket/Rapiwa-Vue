import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Guest Router
  {
    path: '/',
    redirect: '/',
    component: () => import('@/layouts/GuestLayout.vue'),
    children: [
      /* ====================== Start Guest Routing ====================== */
      {
        path: '/',
        name: 'login',
        component: () => import('@/views/auth/Login.vue'),
      },
      {
        path: '/otp',
        name: 'otp',
        component: () => import('@/views/auth/OTP.vue'),
      },

      /* ====================== End Guest Routing ====================== */
    ],
  },

  // protected router
  {
    path: '/dashboard',
    redirect: '/dashboard',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      /* ====================== Start Admin Dashboard Routing ====================== */
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Home.vue'),
        meta: {
          title: 'Backend Dashboard',
        },
      },
      // Device Routing Start
      {
        path: '/device',
        name: 'device',
        component: () => import('@/views/dashboard/device/Device.vue'),
        meta: {
          title: 'Devices',
        },
      },
      {
        path: '/create-device',
        name: 'create-device',
        component: () => import('@/views/dashboard/device/CreateDevice.vue'),
        meta: {
          title: 'Create Devices',
        },
      },
      // Agent Routing Start
      {
        path: '/ai-agent',
        name: 'ai-agent',
        component: () => import('@/views/dashboard/ai/AiAgent.vue'),
        meta: {
          title: 'Ai Agent',
        },
      },
      {
        path: '/create-ai-agent',
        name: 'create-ai-agent',
        component: () => import('@/views/dashboard/ai/CreateAiAgent.vue'),
        meta: {
          breadcrumbTitle: 'Create Ai Agent',
        },
      },
      {
        path: '/train-fine-tuning',
        name: 'train-fine-tuning',
        component: () => import('@/views/dashboard/ai/component/TrainFineTuning.vue'),
        meta: {
          breadcrumb: 'Train & Fine-Tuning',
        },
      },

      {
        path: '/train-ai-agent',
        redirect: '/train-ai-agent',
        component: () => import('@/views/dashboard/ai/TrainAiAgent.vue'),
        meta: {
          breadcrumbTitle: 'Train Ai Agent',
        },
        children: [
          {
            path: '/train-ai-agent', // Note: No leading slash for child paths
            name: 'train-ai-agent',
            component: () => import('@/views/dashboard/ai/component/Dashboard.vue'),
            meta: {
              breadcrumbTitle: 'Ai Dashboard',
            },
          },
          // PDf Routing Start
          {
            path: '/train-ai-agent/pdf', // Note: No leading slash for child paths
            name: 'train-ai-agent-pdf',
            component: () => import('@/views/dashboard/ai/component/Pdf.vue'),
            meta: {
              breadcrumbTitle: 'PDF',
            },
          },
          {
            path: '/train-ai-agent/pdf/add-pdf', // Note: No leading slash for child paths
            name: 'train-ai-agent-add-pdf',
            component: () => import('@/views/dashboard/ai/component/pdf/AddPdf.vue'),
            meta: {
              breadcrumbTitle: 'Add PDF',
            },
          },
          {
            path: '/train-ai-agent/pdf/edit-pdf', // Note: No leading slash for child paths
            name: 'train-ai-agent-edit-pdf',
            component: () => import('@/views/dashboard/ai/component/pdf/EditPdf.vue'),
            meta: {
              breadcrumbTitle: 'edit PDF File ',
            },
          },
          // Text Routing Start
          {
            path: '/train-ai-agent/text-file', // Note: No leading slash for child paths
            name: 'train-ai-agent-text-file',
            component: () => import('@/views/dashboard/ai/component/TextFile.vue'),
            meta: {
              breadcrumbTitle: 'Text File',
            },
          },
          {
            path: '/train-ai-agent/text-file/add-text', // Note: No leading slash for child paths
            name: 'train-ai-agent-add-text-file',
            component: () => import('@/views/dashboard/ai/component/text-file/AddTextFile.vue'),
            meta: {
              breadcrumbTitle: 'Add Text File',
            },
          },
          {
            path: '/train-ai-agent/text-file/edit-text', // Note: No leading slash for child paths
            name: 'train-ai-agent-edit-text-file',
            component: () => import('@/views/dashboard/ai/component/text-file/EditTextFile.vue'),
            meta: {
              breadcrumbTitle: 'Edit Text File ',
            },
          },
          // Product Routing Start
          {
            path: '/train-ai-agent/product', // Note: No leading slash for child paths
            name: 'product',
            component: () => import('@/views/dashboard/ai/component/Product.vue'),
            meta: {
              breadcrumbTitle: 'Products',
            },
          },
          {
            path: '/train-ai-agent/add-product', // Note: No leading slash for child paths
            name: 'add-product',
            component: () => import('@/views/dashboard/ai/component/product/AddProduct.vue'),
            meta: {
              breadcrumbTitle: 'Add Product',
            },
          },
          {
            path: '/train-ai-agent/view-product', // Note: No leading slash for child paths
            name: 'view-product',
            component: () => import('@/views/dashboard/ai/component/product/ViewProduct.vue'),
            meta: {
              breadcrumbTitle: 'View Product',
            },
          },
          // Service Routing Start
          {
            path: '/train-ai-agent/service', // Note: No leading slash for child paths
            name: 'service',
            component: () => import('@/views/dashboard/ai/component/Services.vue'),
            meta: {
              breadcrumbTitle: 'Services',
            },
          },
          {
            path: '/train-ai-agent/add-service', // Note: No leading slash for child paths
            name: 'add-service',
            component: () => import('@/views/dashboard/ai/component/service/AddService.vue'),
            meta: {
              breadcrumbTitle: 'Add Service',
            },
          },
          {
            path: '/train-ai-agent/view-service', // Note: No leading slash for child paths
            name: 'view-service',
            component: () => import('@/views/dashboard/ai/component/service/ViewService.vue'),
            meta: {
              breadcrumbTitle: 'View Service',
            },
          },
          // Company Info Routing Start
          {
            path: '/train-ai-agent/company-info', // Note: No leading slash for child paths
            name: 'company-info',
            component: () => import('@/views/dashboard/ai/component/CompanyInfo.vue'),
            meta: {
              breadcrumbTitle: 'Company Info',
            },
          },
          // OPen Ai Configure Routing Start
          {
            path: '/train-ai-agent/openai-configure', // Note: No leading slash for child paths
            name: 'open-ai-configure',
            component: () => import('@/views/dashboard/ai/component/OpenAiConfigure.vue'),
            meta: {
              breadcrumbTitle: 'Open AI Configure',
            },
          },
          // FAQ Routing Start
          {
            path: '/train-ai-agent/faq', // Note: No leading slash for child paths
            name: 'train-ai-agent-faq',
            component: () => import('@/views/dashboard/ai/component/Faq.vue'),
            meta: {
              breadcrumbTitle: 'FAQ',
            },
          },
          {
            path: '/train-ai-agent/faq/add-faq', // Note: No leading slash for child paths
            name: 'train-ai-agent-add-faq',
            component: () => import('@/views/dashboard/ai/component/faq/AddFaq.vue'),
            meta: {
              breadcrumbTitle: 'Add FAQ',
            },
          },
          {
            path: '/train-ai-agent/faq/edit-faq', // Note: No leading slash for child paths
            name: 'train-ai-agent-edit-faq',
            component: () => import('@/views/dashboard/ai/component/faq/EditFaq.vue'),
            meta: {
              breadcrumbTitle: 'Edit FAQ',
            },
          },
          {
            path: '/train-ai-agent/faq/view-faq', // Note: No leading slash for child paths
            name: 'train-ai-agent-view-faq',
            component: () => import('@/views/dashboard/ai/component/faq/ViewFaq.vue'),
            meta: {
              breadcrumbTitle: 'View FAQ',
            },
          },
          // Knowledge Base Routing Start
          {
            path: '/train-ai-agent/knowledge-base', // Note: No leading slash for child paths
            name: 'train-ai-agent-knowledge-base',
            component: () => import('@/views/dashboard/ai/component/KnowledgeBase.vue'),
            meta: {
              breadcrumbTitle: 'Knowledge Base',
            },
          },
          {
            path: '/train-ai-agent/knowledge-base/add-knowledge-base', // Note: No leading slash for child paths
            name: 'train-ai-agent-add-knowledge-base',
            component: () =>
              import('@/views/dashboard/ai/component/knowledge-base/AddKnowledgeBase.vue'),
            meta: {
              breadcrumbTitle: 'Add Knowledge Base',
            },
          },
          {
            path: '/train-ai-agent/knowledge-base/edit-knowledge-base', // Note: No leading slash for child paths
            name: 'train-ai-agent-edit-knowledge-base',
            component: () =>
              import('@/views/dashboard/ai/component/knowledge-base/EditKnowledgeBase.vue'),
            meta: {
              breadcrumbTitle: 'Edit Knowledge Base',
            },
          },
          {
            path: '/train-ai-agent/knowledge-base/view-knowledge-base', // Note: No leading slash for child paths
            name: 'train-ai-agent-view-knowledge-base',
            component: () =>
              import('@/views/dashboard/ai/component/knowledge-base/ViewKnowledgeBase.vue'),
            meta: {
              breadcrumbTitle: 'View Knowledge Base',
            },
          },
          // Company Info
          {
            path: '/train-ai-agent/company-info', // Note: No leading slash for child paths
            name: 'train-ai-agent-company-info',
            component: () => import('@/views/dashboard/ai/component/CompanyInfo.vue'),
            meta: {
              breadcrumbTitle: 'Company Info',
            },
          },
          {
            path: '/train-ai-agent/company-info/add-company-info', // Note: No leading slash for child paths
            name: 'train-ai-agent-add-company-info',
            component: () =>
              import('@/views/dashboard/ai/component/company-info/AddCompanyInfo.vue'),
            meta: {
              breadcrumbTitle: 'Add Company Info',
            },
          },
          {
            path: '/train-ai-agent/company-info/add-company-info/add-team', // Note: No leading slash for child paths
            name: 'train-ai-agent-add-team',
            component: () => import('@/views/dashboard/ai/component/company-info/AddTeam.vue'),
            meta: {
              breadcrumbTitle: 'Teams',
            },
          },
          {
            path: '/train-ai-agent/company-info/add-company-info/view-team', // Note: No leading slash for child paths
            name: 'train-ai-agent-view-team',
            component: () => import('@/views/dashboard/ai/component/company-info/ViewTeam.vue'),
            meta: {
              breadcrumbTitle: 'View Team',
            },
          },
          {
            path: '/train-ai-agent/company-info/add-company-info/add-achievements', // Note: No leading slash for child paths
            name: 'train-ai-agent-add-achievements',
            component: () =>
              import('@/views/dashboard/ai/component/company-info/AddAchievements.vue'),
            meta: {
              breadcrumbTitle: 'Achievements',
            },
          },
          {
            path: '/train-ai-agent/company-info/add-company-info/view-achievements', // Note: No leading slash for child paths
            name: 'train-ai-agent-view-achievements',
            component: () =>
              import('@/views/dashboard/ai/component/company-info/ViewAchievements.vue'),
            meta: {
              breadcrumbTitle: 'View Achievements',
            },
          },
          {
            path: '/train-ai-agent/company-info/add-company-info/add-award', // Note: No leading slash for child paths
            name: 'train-ai-agent-add-award',
            component: () => import('@/views/dashboard/ai/component/company-info/AddAward.vue'),
            meta: {
              breadcrumbTitle: 'Awards',
            },
          },
          {
            path: '/train-ai-agent/company-info/add-company-info/view-award', // Note: No leading slash for child paths
            name: 'train-ai-agent-view-award',
            component: () => import('@/views/dashboard/ai/component/company-info/ViewAward.vue'),
            meta: {
              breadcrumbTitle: 'View Awards',
            },
          },
        ],
      },

      // Subscription Routing Start
      {
        path: '/subscription', // Note: No leading slash for child paths
        name: 'subscription',
        component: () => import('@/views/dashboard/subscription/Subscription.vue'),
        meta: {
          breadcrumbTitle: 'Subscription',
        },
      },
      // Team Routing Start
      {
        path: '/team',
        name: 'team',
        component: () => import('@/views/dashboard/team/Team.vue'),
        meta: {
          title: 'Team Page',
        },
      },
      {
        path: '/add-team',
        name: 'add-team',
        component: () => import('@/views/dashboard/team/AddTeam.vue'),
        meta: {
          title: 'Add Team Page',
        },
      },
      {
        path: '/edit-team',
        name: 'edit-team',
        component: () => import('@/views/dashboard/team/EditTeam.vue'),
        meta: {
          title: 'Edit Team Page',
        },
      },
      // Ticket Routing Start
      {
        path: '/ticket',
        name: 'ticket',
        component: () => import('@/views/dashboard/ticket/Ticket.vue'),
        meta: {
          title: 'Ticket Page',
        },
      },
      {
        path: '/manage-ticket',
        name: 'manage-ticket',
        component: () => import('@/views/dashboard/ticket/ManageTicket.vue'),
        meta: {
          title: 'Manage Ticket Page',
        },
      },
      {
        path: '/add-new-ticket',
        name: 'add-new-ticket',
        component: () => import('@/views/dashboard/ticket/AddNewTicket.vue'),
        meta: {
          title: 'Add New Ticket Page',
        },
      },
      // Setting Routing Start
      {
        path: '/setting',
        name: 'setting',
        component: () => import('@/views/dashboard/Setting.vue'),
        meta: {
          title: 'Setting Page',
        },
      },
      /* ====================== End Admin Dashboard Routing ====================== */
    ],
  },
]

// Scroll behavior function
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { top: 0 }
  }
}

// Route initialization
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
})

export default router
