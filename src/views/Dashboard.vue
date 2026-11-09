<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const studentCount = ref(0)
const loading = ref(false)
const error = ref('')

async function loadDashboard() {
  loading.value = true
  error.value = ''

  try {
    const response = await api.get('/users')
    studentCount.value = response.data.length
  } catch (err) {
    error.value = 'Failed to load dashboard data.'
  } finally {
    loading.value = false
  }
}

onMounted(loadDashboard)
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to your student dashboard!</p>

    <a-spin :spinning="loading">
      <a-alert
        v-if="error"
        type="error"
        :message="error"
        show-icon
      />

      <a-button
        v-if="error"
        type="primary"
        @click="loadDashboard"
      >
        Try Again
      </a-button>

      <a-row v-if="!error" :gutter="[16, 16]">
        <a-col :xs="24" :md="8">
          <a-card title="Total Students">
            <a-statistic :value="studentCount" />
          </a-card>
        </a-col>

        <a-col :xs="24" :md="8">
          <a-card title="Available Courses">
            <a-statistic :value="3" />
          </a-card>
        </a-col>

        <a-col :xs="24" :md="8">
          <a-card title="Academic Year">
            <h2>2026–2027</h2>
          </a-card>
        </a-col>
      </a-row>
    </a-spin>
  </div>
</template>
