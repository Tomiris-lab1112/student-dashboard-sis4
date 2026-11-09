<script setup>
import { reactive } from 'vue'

const student = reactive({
  name: 'Tomiris Oraz',
  university: 'KBTU',
  major: 'IT Management',
  year: '2026'
})
</script>

<template>
  <div>
    <h1>My Profile</h1>
    <p>Student personal information</p>

    <a-card title="Student Information">
      <a-descriptions bordered :column="1">
        <a-descriptions-item label="Name">
          {{ student.name }}
        </a-descriptions-item>

        <a-descriptions-item label="University">
          {{ student.university }}
        </a-descriptions-item>

        <a-descriptions-item label="Major">
          {{ student.major }}
        </a-descriptions-item>

        <a-descriptions-item label="Year">
          {{ student.year }}
        </a-descriptions-item>
      </a-descriptions>
    </a-card>
  </div>
</template>
