import { User as UserModel } from "@prisma/client";

export class UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  note?: string | null;

  constructor(data: UserModel) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.note = data.note;
  }
}

export type CreateUserRequest = {
  firstName: string;
  lastName: string;
  note?: string;
};

export type UpdateUserRequest = {
  firstName: string;
  lastName: string;
  note?: string;
};

export type CreateUserArgs = {
  input: CreateUserRequest;
};

export type UpdateUserArgs = {
  id: string;
  input: UpdateUserRequest;
};

export type DeleteUserArgs = {
  id: string;
};
