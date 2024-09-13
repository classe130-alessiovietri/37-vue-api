import { reactive } from 'vue';

export const store = reactive({
    allCharacters: [],
    searchText: '',
    searchStatus: '',
});