import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Card } from "@twilio-paste/core/card";
import ExecutionTableRowContent from "./table/ExecutionTableRowContent";
import { ExecutionTableRow } from "../utils";

export default ({ data }) => {
  function getTableRows(data) {
    let rows = [];

    for (const [sid, execution] of data.entries()) {
      rows.push(new ExecutionTableRow(execution));
    }

    return rows;
  }

  const columns = [
    {
      name: "Execution Sid",
      selector: (row) => row.sid,
    },
    {
      name: "Start date",
      selector: (row) => row.start,
    },
    {
      name: "Caller",
      selector: (row) => row.caller,
    },
    {
      name: "Final step",
      selector: (row) => row.final,
    },
    {
      name: "Steps",
      selector: (row) => row.steps,
      omit: true,
    },
  ];

  return (
    <Card padding="space70">
      <DataTable
        columns={columns}
        data={getTableRows(data)}
        pagination
        expandableRows
        expandableRowsComponent={ExecutionTableRowContent}
      />
    </Card>
  );
};
