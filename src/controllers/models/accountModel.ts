// import { ObjectId } from "mongodb";

export interface Account {
  _id: string;
  userId: string;
  accountNumber: string;
  profile: {
    address: string;
    fullName: string;
    gender: string;
    motherName: string;
    NIP: string | null;
    PESEL: string | null;
    isCompanyAccount: boolean;
  };
}
