import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import BodyType from '@/types/bodyType'
import BodyTypeRepository from '@/abstraction/repositories/bodyTypeRepository'
export const useBodyTypeStore = defineStore('bodyType', () => {
    const bodyTypes = ref < BodyType[] > ([])
    const getBodyTypes = computed(() => bodyTypes.value)

    const loadBodyTypes = async() => {
        if (bodyTypes.value.length) {
            return bodyTypes.value;
        }
        const repository = new BodyTypeRepository();
        bodyTypes.value = await repository.index();
        return bodyTypes.value;
    }

    return { bodyTypes, getBodyTypes, loadBodyTypes }
})