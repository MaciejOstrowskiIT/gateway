// import { ObjectId } from "mongodb";

export interface User {
  username: string;
  password: string;
  email: string;
  accountId: null | string;
  status: 'ACTIVE' | 'PENDING';
}

export interface LoginUser {
  email: string;
  password: string;
}
