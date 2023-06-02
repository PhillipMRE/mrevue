import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
      {
        path: 'agents',
        name: 'agents.index',
        component: () => import('@cruds/Agents/Index.vue'),
        meta: { title: 'cruds.agent.title' }
      },
      {
        path: 'agents/create',
        name: 'agents.create',
        component: () => import('@cruds/Agents/Create.vue'),
        meta: { title: 'cruds.agent.title' }
      },
      {
        path: 'agents/:id',
        name: 'agents.show',
        component: () => import('@cruds/Agents/Show.vue'),
        meta: { title: 'cruds.agent.title' }
      },
      {
        path: 'agents/:id/edit',
        name: 'agents.edit',
        component: () => import('@cruds/Agents/Edit.vue'),
        meta: { title: 'cruds.agent.title' }
      },
      {
        path: 'clients',
        name: 'clients.index',
        component: () => import('@cruds/Clients/Index.vue'),
        meta: { title: 'cruds.client.title' }
      },
      {
        path: 'clients/create',
        name: 'clients.create',
        component: () => import('@cruds/Clients/Create.vue'),
        meta: { title: 'cruds.client.title' }
      },
      {
        path: 'clients/:id',
        name: 'clients.show',
        component: () => import('@cruds/Clients/Show.vue'),
        meta: { title: 'cruds.client.title' }
      },
      {
        path: 'clients/:id/edit',
        name: 'clients.edit',
        component: () => import('@cruds/Clients/Edit.vue'),
        meta: { title: 'cruds.client.title' }
      },
      {
        path: 'boards',
        name: 'boards.index',
        component: () => import('@cruds/Boards/Index.vue'),
        meta: { title: 'cruds.board.title' }
      },
      {
        path: 'boards/create',
        name: 'boards.create',
        component: () => import('@cruds/Boards/Create.vue'),
        meta: { title: 'cruds.board.title' }
      },
      {
        path: 'boards/:id',
        name: 'boards.show',
        component: () => import('@cruds/Boards/Show.vue'),
        meta: { title: 'cruds.board.title' }
      },
      {
        path: 'boards/:id/edit',
        name: 'boards.edit',
        component: () => import('@cruds/Boards/Edit.vue'),
        meta: { title: 'cruds.board.title' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'users.index' },
        children: [
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          }
        ]
      },
      {
        path: 'blog',
        name: 'blog',
        component: View,
        redirect: { name: 'posts.index' },
        children: [
          {
            path: 'posts',
            name: 'posts.index',
            component: () => import('@cruds/Posts/Index.vue'),
            meta: { title: 'cruds.post.title' }
          },
          {
            path: 'posts/create',
            name: 'posts.create',
            component: () => import('@cruds/Posts/Create.vue'),
            meta: { title: 'cruds.post.title' }
          },
          {
            path: 'posts/:id',
            name: 'posts.show',
            component: () => import('@cruds/Posts/Show.vue'),
            meta: { title: 'cruds.post.title' }
          },
          {
            path: 'posts/:id/edit',
            name: 'posts.edit',
            component: () => import('@cruds/Posts/Edit.vue'),
            meta: { title: 'cruds.post.title' }
          }
        ]
      },
      {
        path: 'developer-setting',
        name: 'developer_setting',
        component: View,
        redirect: { name: 'states.index' },
        children: [
          {
            path: 'states',
            name: 'states.index',
            component: () => import('@cruds/States/Index.vue'),
            meta: { title: 'cruds.state.title' }
          },
          {
            path: 'states/create',
            name: 'states.create',
            component: () => import('@cruds/States/Create.vue'),
            meta: { title: 'cruds.state.title' }
          },
          {
            path: 'states/:id',
            name: 'states.show',
            component: () => import('@cruds/States/Show.vue'),
            meta: { title: 'cruds.state.title' }
          },
          {
            path: 'states/:id/edit',
            name: 'states.edit',
            component: () => import('@cruds/States/Edit.vue'),
            meta: { title: 'cruds.state.title' }
          },
          {
            path: 'source-status-types',
            name: 'source_status_types.index',
            component: () => import('@cruds/SourceStatusTypes/Index.vue'),
            meta: { title: 'cruds.sourceStatusType.title' }
          },
          {
            path: 'source-status-types/create',
            name: 'source_status_types.create',
            component: () => import('@cruds/SourceStatusTypes/Create.vue'),
            meta: { title: 'cruds.sourceStatusType.title' }
          },
          {
            path: 'source-status-types/:id',
            name: 'source_status_types.show',
            component: () => import('@cruds/SourceStatusTypes/Show.vue'),
            meta: { title: 'cruds.sourceStatusType.title' }
          },
          {
            path: 'source-status-types/:id/edit',
            name: 'source_status_types.edit',
            component: () => import('@cruds/SourceStatusTypes/Edit.vue'),
            meta: { title: 'cruds.sourceStatusType.title' }
          }
        ]
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
