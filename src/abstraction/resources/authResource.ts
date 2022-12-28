import type { dynamicObject } from "@/types/common";
export const getJson = (data: dynamicObject) => ({
  token: data.token,
  user: getUserJson(data.user),
});

export const getUserJson = (data: dynamicObject) => ({
  id: data.id,
  first_name: data.first_name,
  last_name: data.last_name,
  phone: data.phone,
  is_admin: data.is_admin,
  thumbnail: data.thumbnail,
});
