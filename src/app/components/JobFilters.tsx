"use client";

import { Col, Row, Select } from "antd";

import { useIndustriesQuery } from "@/hooks/useIndustriesQuery";
import { useLocationsQuery } from "@/hooks/useLocationsQuery";

import { useCallback, useMemo } from "react";
import { Filters } from "../types/Filters";
import { DefaultOptionType } from "antd/es/select";

type JobFiltersProps = {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
};

export default function JobFilters({
  filters,
  onFiltersChange,
}: JobFiltersProps) {
  const { data: locations, isLoading: isLocationsLoading } =
    useLocationsQuery();
  const { data: industries, isLoading: isIndustriesLoading } =
    useIndustriesQuery();

  const locationsOptions = useMemo<DefaultOptionType[]>(
    () =>
      locations?.map((location) => ({
        value: location.geoSlug,
        label: location.geoName,
      })) ?? [],
    [locations]
  );

  const industriesOptions = useMemo<DefaultOptionType[]>(
    () =>
      industries?.map((industry) => ({
        value: industry.industrySlug,
        label: industry.industryName,
      })) ?? [],
    [industries]
  );

  const handleFilterChange = useCallback(
    (key: keyof Filters, value: string | null) => {
      onFiltersChange({
        ...filters,
        [key]: value ?? null,
      });
    },
    [filters, onFiltersChange]
  );

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={12}>
        <Select
          showSearch
          allowClear
          style={{ width: "100%" }}
          placeholder="Location"
          loading={isLocationsLoading}
          options={locationsOptions}
          defaultValue={filters.location}
          onChange={(value) => handleFilterChange("location", value)}
        />
      </Col>

      <Col xs={24} md={12}>
        <Select
          showSearch
          allowClear
          style={{ width: "100%" }}
          placeholder="Industry"
          loading={isIndustriesLoading}
          options={industriesOptions}
          defaultValue={filters.industry}
          onChange={(value) => handleFilterChange("industry", value)}
        />
      </Col>
    </Row>
  );
}
