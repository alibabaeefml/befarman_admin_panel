import { storeToRefs } from "pinia";
import { useClientCarRequestStore } from "@/store/clientCarRequest";
import ClientCarRequestRepository from "@/abstraction/repositories/clientCarRequestRepository";
import type { dynamicObject } from "@/types/common";
export function useClientCarRequest() {
  const store = useClientCarRequestStore();
  const repository = new ClientCarRequestRepository();
  const { getClientCarRequests, getArchivedClientCarRequests, paginate } =
    storeToRefs(store);
  // methods
  const indexClientCarRequest = async (paginate: {}) => {
    const { data, pagination }: any = await repository.index(paginate);
    store.$patch((state) => {
      state.paginate = pagination;
      state.clientCarRequests = getClientCarRequests.value.concat(data);
    });

    return data;
  };
  const indexArchivedClientCarRequest = async (paginate: {}) => {
    const { data, pagination }: any = await repository.index(paginate);
    store.$patch((state) => {
      state.paginate = pagination;
      state.archivedClientCarRequests =
        getArchivedClientCarRequests.value.concat(data);
    });

    return data;
  };
  const adminVerifyClientCarRequest = async (
    clientCarRequestId: number,
    formData: dynamicObject
  ) => await repository.adminVerify(clientCarRequestId, formData);
  return {
    indexClientCarRequest,
    indexArchivedClientCarRequest,
    getClientCarRequests,
    adminVerifyClientCarRequest,
    paginate,
  };
}
