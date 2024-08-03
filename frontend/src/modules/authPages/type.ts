export interface IRegisterUser {
  fullName: string;
  email: string;
  phoneNumber: number;
  password: string;
  role: string;
  profilePhoto?: string;
}

export interface ILoginUser {
  email: string;
  password: string;
  role: string;
}
