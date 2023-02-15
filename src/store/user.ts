import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { User } from "@/types/user";
import { defaultPaginate, type Paginate } from "@/types/paginate";
import UserRepository from "../abstraction/repositories/userRepository";
import { cloneDeep } from "lodash";
import type { dynamicObject } from "@/types/common";
export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);
  const archivedUsers = ref<User[]>([]);
  const paginate = ref<Paginate>(defaultPaginate);
  const getUsers = computed(() => users.value);
  const getArchivedUsers = computed(() => archivedUsers.value);
  const repository = new UserRepository();

  const defaultUserFilters = {
    name: {
      type: "like",
      val: null,
    },
    phone: {
      type: "like",
      val: null,
    },
    national_code: {
      type: "like",
      val: null,
    },
    city_id: {
      type: "like",
      val: null,
    },
    created_at: {
      type: "between",
      val1: null,
      val2:null
    },
  };
  const userFilters:any = ref<{}>(cloneDeep(defaultUserFilters));
  const resetFilter = () => {
     userFilters.value = cloneDeep(defaultUserFilters);
   };

  const indexUsers = async (paginate) => {
    const { data } = await repository.index(paginate);
    users.value = data;
  };
  const showUser = async (user:dynamicObject) => {
    const { data }:dynamicObject = await repository.show(user);
    return data;
  };
  return {
    users,
    archivedUsers,
    indexUsers,
    showUser,
    getUsers,
    paginate,
    getArchivedUsers,
    userFilters,
    resetFilter,
  };
});
