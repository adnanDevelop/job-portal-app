export interface IJobProp {
  _id: string;
  title: string;
  employmentType: string;
  requirements: string[];
  description: string;
  positions: number;
  category: string;
  location: string;
  address: string;
  jobType: string;
  experience: string;
  qualification: string;
  salary: number;
  company: {
    _id: string;
    companyName: string;
    bio: string;
    description: string;
    location: string;
    founded: number;
    founder: string;
    headQuater: string;
    websiteLink: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  createdBy: string;
  applications: string[]; // Adjust the type if you have a structure for applications
  createdAt: string;
  updatedAt: string;
  __v: number;
}
