import { listUsers, getUserById } from "../lib/users";
import { Users } from "../mock-data";

describe("Users functionality", () => {
  describe("listUsers", () => {
    it("should return all users when no limit is provided", () => {
      const result = listUsers();
      expect(result).toEqual(Users);
      expect(result).toHaveLength(Users.length);
    });

    it("should return all users when limit is 0", () => {
      const result = listUsers(0);
      expect(result).toEqual(Users);
      expect(result).toHaveLength(Users.length);
    });

    it("should return limited number of users when limit is provided", () => {
      const limit = 2;
      const result = listUsers(limit);
      expect(result).toHaveLength(limit);
      expect(result).toEqual(Users.slice(0, limit));
    });

    it("should return all users when limit exceeds total users", () => {
      const limit = Users.length + 10;
      const result = listUsers(limit);
      expect(result).toEqual(Users);
      expect(result).toHaveLength(Users.length);
    });
  });

  describe("getUserById", () => {
    it("should return user when valid ID is provided", () => {
      const userId = "test";
      const result = getUserById(userId);
      const expectedUser = Users.find((user) => user.id === userId);
      expect(result).toEqual(expectedUser);
    });

    it("should return undefined when user ID does not exist", () => {
      const userId = "non-existent-id";
      const result = getUserById(userId);
      expect(result).toBeUndefined();
    });

    it("should return correct user for each valid ID", () => {
      Users.forEach((user) => {
        const result = getUserById(user.id);
        expect(result).toEqual(user);
      });
    });
  });
});
