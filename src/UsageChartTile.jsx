import React from "react";
import { Card } from "@ui5/webcomponents-react";
import { LineChart, BarChart } from "@ui5/webcomponents-react-charts";
import { appsData } from "./demo-utils";

const CHART_LABELS = {
  1: "12am-4am",
  2: "4am-8am",
  3: "8am-12pm",
  4: "12pm-4pm",
  5: "4pm-8pm",
  6: "8pm-12am",
};

export const UsageChartTile = () => {
  const dataset = appsData[0].daily;
  return (
    <Card heading="Usage" subheading="Hits per 24h" className="SmallCard">
      <LineChart
        dataset={dataset}
        dimensions={[
          { accessor: "label", formatter: (val) => CHART_LABELS[val] },
        ]}
        measures={[{ accessor: "fourHourAvg", formatter: (val) => `${val}k` }]}
      />
    </Card>
  );
};
