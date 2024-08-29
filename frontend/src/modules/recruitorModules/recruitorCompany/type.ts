export interface IRegisterCompany {
  logo: string;
  bio: string;
  founded: string;
  founder: string;
  address: string;
  city: string;
  websiteLink: string;
  companyName: string;
  description: string;
  headQuater: string;
}

export interface IUpdateCompany {
  bio: string;
  city: string;
  address: string;
  founder: string;
  founded: string;
  headQuater: string;
  websiteLink: string;
  companyName: string;
  description: string;
}
