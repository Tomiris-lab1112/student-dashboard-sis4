<script setup>
import { ref, computed, onMounted } from 'vue'
import api from '../services/api'

const students = ref([])
const loading = ref(false)
const error = ref('')
const success = ref(false)
const search = ref('')

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Phone', dataIndex: 'phone', key: 'phone' }
]

const filteredStudents = computed(() => {
  return students.value.filter(student =>
    student.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

async function fetchStudents() {
  loading.value = true
  error.value = ''
  success.value = false

  try {
    const response = await api.get('/users')
    students.value = response.data
    success.value = true
  } catch (err) {
    error.value = 'Failed to load students.'
    students.value = []
  } finally {
    loading.value = false
  }
}

onMounted(fetchStudents)
</script>

<template>
  <div>
    <h1>Students</h1>
    <p>Student list from REST API</p>

    <a-space class="toolbar">
      <a-input
        v-model:value="search"
        placeholder="Search student"
        allow-clear
      />

      <a-button
        type="primary"
        :loading="loading"
        @click="fetchStudents"
      >
        Refresh
      </a-button>
    </a-space>

    <a-alert
      v-if="error"
      type="error"
      :message="error"
      show-icon
      class="notice"
    />

    <a-alert
      v-if="success && !loading"
      type="success"
      message="Students loaded successfully!"
      show-icon
      class="notice"
    />

    <a-table
      :columns="columns"
      :data-source="filteredStudents"
      :loading="loading"
      :row-key="record => record.id"
      :scroll="{ x: 700 }"
    />
  </div>
</template>
