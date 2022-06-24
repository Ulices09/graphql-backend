import * as service from "../users.service";
import * as repository from "../users.repository";
import { User } from "@prisma/client";
import {
  CreateUserRequest,
  UpdateUserRequest,
  UserResponse,
} from "../users.dto";

describe("UsersService", () => {
  describe("getUsers", () => {
    let getUsersSpy: jest.SpyInstance<Promise<User[]>>, retrievedUser: User[];
    beforeAll(() => {
      retrievedUser = [
        { id: "asdasd", firstName: "John", lastName: "Doe", note: "note" },
        { id: "zxczxc", firstName: "Juan", lastName: "Oed", note: "random n" },
      ];
      getUsersSpy = jest.spyOn(repository, "getUsers");
    });

    afterEach(() => {
      getUsersSpy.mockClear();
    });

    it("should return empty array", async () => {
      getUsersSpy.mockImplementationOnce(() => Promise.resolve([]));
      expect(await service.getUsers()).toEqual([]);
      expect(getUsersSpy).toHaveBeenCalledTimes(1);
    });

    it("should return users", async () => {
      getUsersSpy.mockImplementationOnce(() => Promise.resolve(retrievedUser));
      const result = await service.getUsers();
      expect(result).toEqual(retrievedUser);
      expect(result[0]).toBeInstanceOf(UserResponse);
      expect(result.length).toEqual(2);
      expect(getUsersSpy).toHaveBeenCalledTimes(1);
    });

    it("should throw error", async () => {
      getUsersSpy.mockImplementationOnce(() => Promise.reject(new Error()));

      try {
        await service.getUsers();
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
      }
    });
  });

  describe("createUser", () => {
    let createUserSpy: jest.SpyInstance<Promise<User>>,
      userDto: CreateUserRequest,
      createdUser: User;

    beforeAll(() => {
      userDto = {
        firstName: "John",
        lastName: "Doe",
        note: "note",
      };

      createdUser = {
        id: "asdasd",
        firstName: "John",
        lastName: "Doe",
        note: "note",
      };
      createUserSpy = jest.spyOn(repository, "createUser");
    });

    it("should return user after create", async () => {
      createUserSpy.mockImplementationOnce(() => Promise.resolve(createdUser));
      const result = await service.createUser(userDto);
      expect(result).toEqual(createdUser);
      expect(result).toBeInstanceOf(UserResponse);
      expect(createUserSpy).toHaveBeenCalledTimes(1);
    });

    it("should throw error", async () => {
      createUserSpy.mockImplementationOnce(() => Promise.reject(new Error()));

      try {
        await service.createUser(userDto);
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
      }
    });
  });

  describe("updateUser", () => {
    let updateUserSpy: jest.SpyInstance<Promise<User>>,
      userDto: UpdateUserRequest,
      updatedUser: User;

    beforeAll(() => {
      userDto = {
        firstName: "John",
        lastName: "Doe",
        note: "note",
      };

      updatedUser = {
        id: "asdasd",
        firstName: "John",
        lastName: "Doe",
        note: "note",
      };
      updateUserSpy = jest.spyOn(repository, "updateUser");
    });

    it("should return user after update", async () => {
      updateUserSpy.mockImplementationOnce(() => Promise.resolve(updatedUser));
      const result = await service.updateUser("asdasd", userDto);
      expect(result).toEqual(updatedUser);
      expect(result).toBeInstanceOf(UserResponse);
      expect(updateUserSpy).toHaveBeenCalledTimes(1);
    });

    it("should throw error", async () => {
      updateUserSpy.mockImplementationOnce(() => Promise.reject(new Error()));

      try {
        await service.updateUser("asdasd", userDto);
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
      }
    });
  });

  describe("deleteUser", () => {
    let deleteUserSpy: jest.SpyInstance<Promise<User>>, deletedUser: User;

    beforeAll(() => {
      deletedUser = {
        id: "asdasd",
        firstName: "John",
        lastName: "Doe",
        note: "note",
      };
      deleteUserSpy = jest.spyOn(repository, "deleteUser");
    });

    it("should return user after update", async () => {
      deleteUserSpy.mockImplementationOnce(() => Promise.resolve(deletedUser));
      const result = await service.deleteUser("asdasd");
      expect(result).toEqual(deletedUser);
      expect(result).toBeInstanceOf(UserResponse);
      expect(deleteUserSpy).toHaveBeenCalledTimes(1);
    });

    it("should throw error", async () => {
      deleteUserSpy.mockImplementationOnce(() => Promise.reject(new Error()));

      try {
        await service.deleteUser("asdasd");
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
      }
    });
  });
});
