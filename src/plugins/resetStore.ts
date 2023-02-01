import type { dynamicObject } from "@/types/common";
import cloneDeep from "lodash";

export default function resetStore({ store }: dynamicObject) {
  const initialState = cloneDeep(store.$state);
  store.$reset = () => store.$patch(cloneDeep(initialState));
}
