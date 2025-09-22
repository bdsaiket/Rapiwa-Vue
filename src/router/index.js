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
          breadcrumb: 'Devices',
        },
      },
      {
        path: '/create-device',
        name: 'create-device',
        component: () => import('@/views/dashboard/device/CreateDevice.vue'),
        meta: {
          breadcrumb: 'Create Devices',
        },
      },
      {
        path: '/ai-agent',
        name: 'ai-agent',
        component: () => import('@/views/dashboard/ai/AiAgent.vue'),
        meta: {
          breadcrumb: 'Ai Agent',
        },
      },
      {
        path: '/create-ai-agent',
        name: 'create-ai-agent',
        component: () => import('@/views/dashboard/ai/CreateAiAgent.vue'),
        meta: {
          breadcrumb: 'Create Ai Agent',
        },
      },
      {
        path: '/train-ai-agent',
        name: 'train-ai-agent',
        component: () => import('@/views/dashboard/ai/TrainAiAgent.vue'),
        meta: {
          breadcrumb: 'Train Ai Agent',
        },
      },
      {
        path: '/subscription', // Note: No leading slash for child paths
        name: 'subscription',
        component: () => import('@/views/dashboard/Subscription.vue'),
        meta: {
          breadcrumb: 'Subscription',
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
    return savedPosition // back/forward এ আগের scroll position এ ফেরত যাবে
  } else {
    return { top: 0 } // নতুন রাউটে গেলে উপরে স্ক্রল হবে
  }
}

// Route initialization
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior, // <- এখানে যুক্ত করো
})

export default router
