export interface IRegisterUser {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
  profilePhoto?: string;
}

export interface ILoginUser {
  email: string;
  password: string;
  role: string;
}
