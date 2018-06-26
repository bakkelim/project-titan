import { AppUserAuth } from "./auth-user";

export const LOGIN_MOCKS: AppUserAuth[] = [
  {
    userName: "marius",
    bearerToken: "abi393kdkd9393ikd",
    isAuthenticated: true,
    canAccessProducts: true,
    canAddProduct: true,
    canSaveProduct: true,
    canAccessCategories: true,
    canAddCategory: false
  },
  {
    userName: "user",
    bearerToken: "sd9f923k3kdmcjkhd",
    isAuthenticated: true,
    canAccessProducts: false,
    canAddProduct: false,
    canSaveProduct: false,
    canAccessCategories: true,
    canAddCategory: true
  }
];
