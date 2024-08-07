export interface IUpdateUser {
  fullName: string;
  email: string;
  studentName: string;
  bio: string;
  skills: [{ name: string; percentage: string }];
  experience: string;
  dateOfBirth: string;
  address: string;
  city: string;
  country: string;
  phoneNumber: string;
  resume: string;
  resumeOriginalName: string;
  profilePhoto: string;
}
