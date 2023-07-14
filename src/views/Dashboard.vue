<template>
  <div>

    <Header />

    <Sidebar />
    
    <MainLayout>

      <router-view />

    </MainLayout>


  </div>
</template>

<script setup>
import Header from "../components/Header/Header.vue"
import Sidebar from "../components/Sidebar/Sidebar.vue"
import MainLayout from "../components/Main/MainLayout.vue"

</script>

<style lang="scss" scoped></style>