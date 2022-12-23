import UserRepository from "@/abstraction/repositories/userRepository.js";
import { useUserStore } from "@/store/user";
import type { dynamicObject } from "@/types/common";
import type { Paginate } from "@/types/paginate";
import type { User } from "@/types/user";
import { storeToRefs } from "pinia";
export function useUser() {
  const store = useUserStore();
  const { getUsers, getArchivedUsers, paginate } = storeToRefs(store);
  const repository = new UserRepository();

  const indexUser = async (paginate: Paginate) => {
    const { data, pagination } = await repository.index(paginate);
    store.$patch((state) => {
      state.paginate = pagination;
      state.users = getUsers.value.concat(data);
    });
    return data;
  };

  const indexArchivedUser = async (paginate: Paginate) => {
    const { data, pagination } = await repository.indexArchived(paginate);
    store.$patch((state) => {
      state.paginate = pagination;
      state.archivedUsers = getArchivedUsers.value.concat(data);
    });
    return data;
  };
  const updateUser = async (userId: number, userData: dynamicObject) => {
    const user = await repository.update(userId, userData);

    const index = store.users.findIndex((user) => user.id === userId);
    store.users[index] = user;

    return user;
  };

  const storeUser = async (userData: dynamicObject) => {
    const user = await repository.store(userData);
    store.users.push(user);
    return user;
  };

  const showUser = async (data: dynamicObject) => {
    return await repository.show(data);
  };
  const sms = async (form: dynamicObject) => {
    return await repository.sms(form);
  };

  const verifyUser = async (userId: number) => {
    return await repository.verify(userId);
  };
  const unverifyUser = async (userId: number) => {
    return await repository.unverify(userId);
  };
  const deleteUser = async (userId: number) => {
    await repository.delete(userId);
    store.users.map((e, i) => {
      if (e.id == userId) {
        store.users.splice(i, 1);
        store.archivedUsers.splice(0, 0, e);
      }
    });
  };
  const restoreUser = async (userId: number) => {
    await repository.restore(userId);
    store.archivedUsers.map((e, i) => {
      if (e.id == userId) {
        store.archivedUsers.splice(i, 1);
        store.users.splice(0, 0, e);
      }
    });
  };

  const searchUser = async (userData: dynamicObject) => {
    const { data } = await repository.index(userData);
    return data;
  };

  return {
    indexUser,
    indexArchivedUser,
    getUsers,
    getArchivedUsers,
    paginate,
    updateUser,
    storeUser,
    showUser,
    sms,
    verifyUser,
    unverifyUser,
    deleteUser,
    restoreUser,
    searchUser,
  };
}
