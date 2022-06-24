import * as repository from "./users.repository";
import {
  CreateUserRequest,
  UpdateUserRequest,
  UserResponse,
} from "./users.dto";

export const getUsers = async (): Promise<UserResponse[]> => {
  const result = await repository.getUsers();
  return result.map((user) => new UserResponse(user));
};

export const createUser = async (
  dto: CreateUserRequest
): Promise<UserResponse> => {
  const result = await repository.createUser(dto);
  return new UserResponse(result);
};

export const updateUser = async (
  id: string,
  dto: UpdateUserRequest
): Promise<UserResponse> => {
  const result = await repository.updateUser(id, dto);
  return new UserResponse(result);
};

export const deleteUser = async (id: string): Promise<UserResponse> => {
  const result = await repository.deleteUser(id);
  return new UserResponse(result);
};
