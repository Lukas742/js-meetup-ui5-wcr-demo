import React from "react";
import {
  AnalyticalTable,
  Card,
  ObjectStatus,
  TableSelectionBehavior,
  TableSelectionMode,
  ValueState,
} from "@ui5/webcomponents-react";
import { appsData } from "./demo-utils";

const COLUMNS = [
  { accessor: "appName", Header: "Application Name" },
  { accessor: "appId", Header: "Application ID" },
  { accessor: "version", Header: "Version" },
  {
    accessor: "hits",
    Header: "Total Hits",
    Cell: ({ value }) => {
      let valueState = ValueState.Success;
      if (value < 350) {
        valueState = ValueState.Error;
      }
      return <ObjectStatus state={valueState}>{`${value}k`}</ObjectStatus>;
    },
  },
  { accessor: "ownerFirstName", Header: "PO Firstname" },
  { accessor: "ownerLastName", Header: "PO Lastname" },
  { accessor: "ownerEmail", Header: "PO Email" },
];

export const AllAppsTile = () => {
  const onRowSelected = (e) => {
    alert(`Selected ${e.detail.row.values.appName}!`);
  };
  return (
    <Card heading="All Applications" className="WideCard">
      <AnalyticalTable
        data={appsData}
        columns={COLUMNS}
        filterable
        groupable
        visibleRows={8}
        selectionMode={TableSelectionMode.SINGLE_SELECT}
        selectionBehavior={TableSelectionBehavior.ROW_ONLY}
        onRowSelected={onRowSelected}
      />
    </Card>
  );
};
