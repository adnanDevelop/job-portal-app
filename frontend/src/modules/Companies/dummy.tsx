import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaAmazon,
  FaLinkedin,
  FaApple,
  FaMicrosoft,
  FaSalesforce,
  FaUber,
} from "react-icons/fa";
import React from "react";

export const companyData: {
  logo: React.ReactElement;
  title: string;
  content: string;
  location: string;
  totalJobs: string;
}[] = [
  {
    logo: <FaFacebook />,
    title: "Facebook",
    content: "The  social media platform connecting billions worldwide.",
    location: "Menlo Park, CA",
    totalJobs: "120 jobs",
  },
  {
    logo: <FaInstagram />,
    title: "Instagram",
    content: "A popular photo and video sharing social networking service.",
    location: "Menlo Park, CA",
    totalJobs: "80 jobs",
  },
  {
    logo: <FaAmazon />,
    title: "Amazon",
    content: "A global leader in e-commerce and cloud computing services.",
    location: "Seattle, WA",
    totalJobs: "150 jobs",
  },
  {
    logo: <FaTwitter />,
    title: "Twitter",
    content: "A platform for real-time  social networking.",
    location: "San Francisco, CA",
    totalJobs: "90 jobs",
  },
  {
    logo: <FaLinkedin />,
    title: "LinkedIn",
    content: "A professional networking platform for career development.",
    location: "Sunnyvale, CA",
    totalJobs: "110 jobs",
  },
  {
    logo: <FaApple />,
    title: "Apple",
    content: "A company known for its electronics and software.",
    location: "Cupertino, CA",
    totalJobs: "200 jobs",
  },
  {
    logo: <FaMicrosoft />,
    title: "Microsoft",
    content: "A global leader in software, hardware, and cloud solutions.",
    location: "Redmond, WA",
    totalJobs: "180 jobs",
  },
  {
    logo: <FaSalesforce />,
    title: "Salesforce",
    content: "Providing cloud-based solutions for businesses.",
    location: "San Francisco, CA",
    totalJobs: "100 jobs",
  },
];
