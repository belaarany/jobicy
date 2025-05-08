import { Card, Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";

import { Job } from "@/types/Job";

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card
      cover={
        <img
          alt={`${job.companyName || "Company"} logo`}
          src={job.companyLogo}
          style={{ height: 140, objectFit: "cover" }}
        />
      }
      actions={[
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          key="details"
        >
          <EyeOutlined /> Show Job
        </a>,
      ]}
    >
      <Card.Meta
        title={job.jobTitle}
        description={
          <>
            <Typography.Text type="secondary">
              {job.companyName}
            </Typography.Text>
            <Typography.Paragraph ellipsis={{ rows: 3 }}>
              {job.jobExcerpt}
            </Typography.Paragraph>
            <Typography.Text type="secondary">
              Type: {job.jobType} | Level: {job.jobLevel}
            </Typography.Text>
          </>
        }
      />
    </Card>
  );
}
