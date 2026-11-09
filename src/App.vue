<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const selectedKeys = computed(() => [route.path])

function navigate({ key }) {
  router.push(key)
}
</script>

<template>
  <a-layout class="app-layout">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      theme="dark"
    >
      <div class="logo">Student Portal</div>

      <a-menu
        theme="dark"
        mode="inline"
        :selected-keys="selectedKeys"
        @click="navigate"
      >
        <a-menu-item key="/">
          Dashboard
        </a-menu-item>

        <a-menu-item key="/students">
          Students
        </a-menu-item>

        <a-menu-item key="/courses">
          Courses
        </a-menu-item>

        <a-menu-item key="/profile">
          Profile
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="header">
        Student Dashboard
      </a-layout-header>

      <a-layout-content class="content">
        <router-view />
      </a-layout-content>

      <a-layout-footer class="footer">
        Student Dashboard
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
