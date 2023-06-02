<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <event-hub></event-hub>
    <side-bar :sidebarLinks="sidebarLinks">
      <mobile-menu slot="content"></mobile-menu>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <div class="content">
        <dashboard-content></dashboard-content>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardContent from './Content.vue'
import TopNavbar from './TopNavbar.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    DashboardContent,
    TopNavbar,
    MobileMenu
  },
  data() {
    return {
      sidebarLinks: [
        {
          title: 'global.dashboard',
          icon: 'dashboard',
          path: { name: 'dashboard' }
        },
        {
          title: 'cruds.agent.title',
          icon: 'table_view',
          path: { name: 'agents.index' },
          gate: 'agent_access'
        },
        {
          title: 'cruds.client.title',
          icon: 'table_view',
          path: { name: 'clients.index' },
          gate: 'client_access'
        },
        {
          title: 'cruds.board.title',
          icon: 'table_view',
          path: { name: 'boards.index' },
          gate: 'board_access'
        },
        {
          title: 'cruds.userManagement.title',
          icon: 'person',
          path: { name: 'user_management' },
          gate: 'user_management_access',
          children: [
            {
              title: 'cruds.user.title',
              icon: 'person',
              path: { name: 'users.index' },
              gate: 'user_access'
            },
            {
              title: 'cruds.permission.title',
              icon: 'perm_data_setting',
              path: { name: 'permissions.index' },
              gate: 'permission_access'
            },
            {
              title: 'cruds.role.title',
              icon: 'group',
              path: { name: 'roles.index' },
              gate: 'role_access'
            }
          ]
        },
        {
          title: 'cruds.blog.title',
          icon: 'table_view',
          path: { name: 'blog' },
          gate: 'blog_access',
          children: [
            {
              title: 'cruds.post.title',
              icon: 'table_view',
              path: { name: 'posts.index' },
              gate: 'post_access'
            }
          ]
        },
        {
          title: 'cruds.developerSetting.title',
          icon: 'table_view',
          path: { name: 'developer_setting' },
          gate: 'developer_setting_access',
          children: [
            {
              title: 'cruds.state.title',
              icon: 'table_view',
              path: { name: 'states.index' },
              gate: 'state_access'
            },
            {
              title: 'cruds.sourceStatusType.title',
              icon: 'table_view',
              path: { name: 'source_status_types.index' },
              gate: 'source_status_type_access'
            }
          ]
        }
      ]
    }
  }
}
</script>
