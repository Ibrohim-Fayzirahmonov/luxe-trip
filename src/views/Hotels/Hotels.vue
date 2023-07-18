<template>
    <div>
  
      <!-- modal window -->
  
      <div>
        <a-modal cancelText="Bekor qilish" okText="Qo'shish" v-model:open="open" width="1000px" title="Mehmonxona qo'shish"
          @ok="handleOk">
          <div class="grid">
            <Input required placeholder="Mehmonxona nomini kiriting" label="Mehmonxona nomi" class="mb-4" />
            <h3>Mehmonxona haqida ma'lumot kiriting</h3>
            <editor v-model="description" api-key="45jkkmf5emo6viv1xj01gwn782pi2g1upr8n48fhscj8ih5n" :init="{
              menubar: false,
              plugins: 'lists link image emoticons',
              toolbar: 'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons'
            }" />
  
            <div class="clearfix my-3">
              <a-upload v-model:file-list="fileList" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                list-type="picture-card" @preview="handlePreview">
                <div v-if="fileList.length < 8">
                  <plus-outlined />
                  <div style="margin-top: 8px">Rasm yuklang</div>
                </div>
              </a-upload>
              <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </div>
            <Input type="text" required placeholder="Mehmonxona manzilini kiriting" label="Mehmonxona manzili"
              class="mb-4" />
              <div class="py-2">
              <h3>Mehmonxona yulduzlari sonini belgilang</h3>
              <a-rate v-model:value="value" />
            </div>
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
              Mehmonxona qo'shish
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
          <table-head-cell>Nomi</table-head-cell>
          <table-head-cell>Manzil</table-head-cell>
          <table-head-cell>Yulduzlar soni</table-head-cell>
          <table-head-cell>Tahrirlash</table-head-cell>
          <table-head-cell>O'chirish</table-head-cell>
        </table-head>
  
        <table-body>
          <table-row v-for="el in 10" :key="el">
            <table-cell>Hotel Skazka</table-cell>
            <table-cell>Toshkent, Olmazor</table-cell>
            <table-cell>
              <a-rate :value="5" disabled />
            </table-cell>
            <table-cell>
              <Button gradient="blue">Tahrirlash</Button>
            </table-cell>
            <table-cell>
              <Button gradient="red" class="relative lg:-left-16">O'chirish</Button>
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
  import { ref } from "vue";
  import Editor from '@tinymce/tinymce-vue';
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
  } from 'flowbite-vue'
  
  
  const description = ref('');
  
  const value = ref(2);
  
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
  
  
  // <!-- upload section-->
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  const previewVisible = ref(false);
  const previewImage = ref('');
  const previewTitle = ref('');
  const fileList = ref([]);
  const handleCancel = () => {
    previewVisible.value = false;
    previewTitle.value = '';
  };
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    previewImage.value = file.url || file.preview;
    previewVisible.value = true;
    previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
  };
  // <!--upload section-->
  
  
  </script>
  
  <style lang="scss" scoped>
  /* you can make up upload button and sample style by using stylesheets */
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }
  
  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  </style>
  