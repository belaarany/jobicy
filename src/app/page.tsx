"use client";

import { Card } from "antd";
import { useState } from "react";

import JobFilters from "./components/JobFilters";
import JobList from "./components/JobList";
import { Filters } from "./types/Filters";

export default function RootPage() {
  const [filters, setFilters] = useState<Filters>({
    location: null,
    industry: null,
  });

  const onFilterChange = (filters: Filters) => {
    setFilters(filters);
  };

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px" }}>
      <div
        style={{
          background: "#f0f2f5",
          padding: "16px",
          borderRadius: 8,
          marginBottom: "24px",
        }}
      >
        <Card title="Filters">
          <JobFilters filters={filters} onFiltersChange={onFilterChange} />
        </Card>
      </div>

      <div style={{ marginTop: 24 }}>
        <JobList filters={filters} />
      </div>
    </div>
  );
}
