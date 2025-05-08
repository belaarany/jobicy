export type Job = {
  id: string;
  url: string;
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  jobIndustry: string;
  jobType: "full-time" | "contract" | "part-time" | "internship";
  jobGeo: string | "Anywhere";
  jobLevel: string | "Any";
  jobExcerpt: string;
  jobDescription: string;
  pubDate: string;
  annualSalaryMin?: number;
  annualSalaryMax?: number;
  salaryCurrency?: string;
};
