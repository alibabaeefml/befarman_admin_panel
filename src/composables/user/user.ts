import UserRepository from "@/abstraction/repositories/userRepository";
export function useUser() {
  const repository = new UserRepository();

  const searchUser = async (userData) => {
    const {data} =  await repository.index(userData);
    return data
  };

  return {searchUser}
}