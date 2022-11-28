import type { dynamicObject } from "@/types/common";

export const getArrayRelatives = (data: []) =>
  data.map((relative: dynamicObject) => ({
    name: relative.name,
    address: relative.address,
    phone: relative.phone,
    relative: relative.relative,
  }));
