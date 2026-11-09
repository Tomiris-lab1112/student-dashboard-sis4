<script setup>
import { ref } from 'vue'

const courses = ref([
  {
    id: 1,
    name: 'JavaScript Framework Vue',
    teacher: 'Aruzhan Bazarbay'
  },
  {
    id: 2,
    name: 'Web Development',
    teacher: 'Course Instructor'
  },
  {
    id: 3,
    name: 'Database Systems',
    teacher: 'Course Instructor'
  }
])

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Course Name', dataIndex: 'name', key: 'name' },
  { title: 'Teacher', dataIndex: 'teacher', key: 'teacher' }
]
</script>

<template>
  <div>
    <h1>Courses</h1>
    <p>Available courses (demo data)</p>

    <a-card title="Course List">
      <a-table
        :columns="columns"
        :data-source="courses"
        :row-key="record => record.id"
        :scroll="{ x: 500 }"
      />
    </a-card>
  </div>
</template>
