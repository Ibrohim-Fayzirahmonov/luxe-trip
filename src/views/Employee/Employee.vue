<template>
    <div>
  
      <!-- modal window -->
  
      <div>
        <a-modal cancelText="Bekor qilish" okText="Qo'shish" v-model:open="open" width="1000px" title="Xodim qo'shish"
          @ok="handleOk">
          <div class="grid">
            <Input required placeholder="Xodimning ismi" label="To'liq ism" class="mb-4" />
            <Select v-model="selected" :options="countries" placeholder="Xodimning lavozimi" label="Lavozimni tanlang"
              class="mb-4" />
            <Input type="tel" required placeholder="Login yoki telefon raqamni kiriting" label="Login yoki telefon raqam"
              class="mb-4" />
            <Input type="password" required placeholder="Parol kiriting" label="Parol kiriting" class="mb-4" />
          </div>
        </a-modal>
      </div>
  
      <!-- modal window -->
  
      <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div class="w-full md:w-1/2">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <input type="text" id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Izlash" required="" />
              </div>
            </form>
          </div>
  
          <div
            class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <button @click="showModal" type="button"
              class="flex items-center justify-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
              <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
              </svg>
              Xodim qo'shish
            </button>
  
            <div class="flex items-center space-x-3 w-full md:w-auto">
              <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown"
                class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button">
                <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
                Saralash
              </button>
  
              <div id="actionsDropdown"
                class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                  <li>
                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass
                      Edit</a>
                  </li>
                </ul>
                <div class="py-1">
                  <a href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete
                    all</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <Table striped hoverable class="mt-4">
        <table-head>
          <table-head-cell>Xodimning I.F.SH.</table-head-cell>
          <table-head-cell>Lavozimi</table-head-cell>
          <table-head-cell>Holat</table-head-cell>
          <table-head-cell>Tahrirlash</table-head-cell>
          <table-head-cell>O'chirish</table-head-cell>
        </table-head>
  
        <table-body>
          <table-row v-for="el in 10" :key="el">
            <table-cell>Sardorbek Sultonov</table-cell>
            <table-cell>Admin</table-cell>
            <table-cell>
              <Badge type="green">Active</Badge>
            </table-cell>
            <table-cell>
              <Button gradient="blue">Tahrirlash</Button>
            </table-cell>
            <table-cell>
              <Button gradient="red" class="relative lg:-left-24">O'chirish</Button>
            </table-cell>
          </table-row>
        </table-body>
      </Table>
  
      <div class="my-5">
        <a-pagination v-model:current="current" :total="20" show-less-items />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import {
    Table,
    TableHead,
    TableBody,
    TableHeadCell,
    TableRow,
    TableCell,
    Badge,
    Button,
    Input,
    Select
  } from "flowbite-vue";
  
  
  let selected = ref('')
  
  const countries = [
    { value: '1', name: 'Super admin' },
    { value: '2', name: 'Admin' },
    { value: '3', name: 'Operator' },
  ]
  
  const open = ref(false);
  
  const showModal = (e) => {
    console.log(e)
    open.value = true;
  
    console.log(open.value)
  };
  
  const handleOk = () => {
    open.value = false;
    console.log(open.value)
  };
  
  
  
  
  
  
  
  </script>
  
  <style lang="scss" scoped></style>
  