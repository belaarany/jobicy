import { Col, Empty, Result, Row, Spin } from "antd";

import Center from "@/components/Center";
import { useJobsQuery } from "@/hooks/useJobsQuery";

import { Job } from "@/types/Job";

import { Filters } from "../types/Filters";
import JobCard from "./JobCard";

type JobListProps = {
  filters: Filters;
};

export default function JobList({ filters }: JobListProps) {
  const {
    data: jobs,
    isLoading: isJobsLoading,
    isError: isJobsError,
  } = useJobsQuery({
    filters,
  });

  if (isJobsLoading) {
    return (
      <Center>
        <Spin />
      </Center>
    );
  }

  if (isJobsError) {
    return (
      <Center>
        <Result
          status="error"
          title="Error"
          subTitle="Sorry, something went wrong."
        />
      </Center>
    );
  }

  if (!jobs?.length) {
    return (
      <Center>
        <Empty description="No jobs available" />
      </Center>
    );
  }

  return (
    <Row gutter={[16, 16]}>
      {jobs?.map((job: Job) => (
        <Col key={job.id} xs={24} md={8}>
          <JobCard job={job} />
        </Col>
      ))}
    </Row>
  );
}
