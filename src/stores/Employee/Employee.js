import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEmployeeStore = defineStore('employee', () => {

    const employeeList = ref([]);
    const loading = ref(true);
    const errorMessage = ref(null)
    const employeeCount = computed(() => employeeList.value.length);


    function setEmployeeList(list) {
        employeeList.value = list
    }

    function setLoading() {
        loading.value = false
    }

    function setErrorMessage(message) {
        errorMessage.value = message
    }

    return { employeeList, employeeCount, loading, errorMessage, setEmployeeList, setLoading, setErrorMessage }
})
