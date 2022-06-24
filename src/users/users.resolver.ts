import * as service from "./users.service";
import {
  CreateUserArgs,
  UpdateUserArgs,
  DeleteUserArgs,
  UserResponse,
} from "./users.dto";

export const getUsers = (): Promise<UserResponse[]> => {
  return service.getUsers();
};

export const createUser = (_, args: CreateUserArgs): Promise<UserResponse> => {
  return service.createUser(args.input);
};

export const updateUser = (_, args: UpdateUserArgs): Promise<UserResponse> => {
  return service.updateUser(args.id, args.input);
};

export const deleteUser = (_, args: DeleteUserArgs): Promise<UserResponse> => {
  return service.deleteUser(args.id);
};
