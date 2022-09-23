export const getJson = (data) => ({
    token: data.user.token,
    user: getUserJson(data.user)
})

export const getUserJson = (data) => ({
    id: data.id,
    first_name: data.first_name,
    last_name: data.last_name,
    phone: data.phone,
    is_admin: data.is_admin,
    thumbnail: data.thumbnail,
})