import { useClientCarStatusStore } from "@/store/clientCarStatus";
import { storeToRefs } from "pinia/dist/pinia";

export function useClientCarStatus() {
  const store = useClientCarStatusStore();

  const { loadStatuses } = store;
  const { getClientCarStatuses } = storeToRefs(store);

  return { loadStatuses, getClientCarStatuses };
}
