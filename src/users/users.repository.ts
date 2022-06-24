import { PrismaClient, User } from "@prisma/client";
import {
  CreateUserRequest,
  UpdateUserRequest,
  UserResponse,
} from "./users.dto";

const _getConnection = async () => {
  const prisma = new PrismaClient();
  await prisma.$connect();
  return prisma;
};

export const getUsers = async (): Promise<User[]> => {
  const prisma = await _getConnection();
  return prisma.user.findMany();
};

export const createUser = async (dto: CreateUserRequest): Promise<User> => {
  const prisma = await _getConnection();
  return prisma.user.create({
    data: {
      firstName: dto.firstName,
      lastName: dto.lastName,
      note: dto.note,
    },
  });
};

export const updateUser = async (
  id: string,
  dto: UpdateUserRequest
): Promise<User> => {
  const prisma = await _getConnection();
  return prisma.user.update({
    where: { id },
    data: {
      firstName: dto.firstName,
      lastName: dto.lastName,
      note: dto.note,
    },
  });
};

export const deleteUser = async (id: string): Promise<User> => {
  const prisma = await _getConnection();
  return prisma.user.delete({
    where: { id },
  });
};
