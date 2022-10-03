import React from "react";
import { Box } from "@twilio-paste/core/box";
import ExecutionTableRowContentItem from "./ExecutionTableRowContentItem";
import ExecutionTableRowContentStepItem from "./ExecutionTableRowContentStepItem";

export default ({ data }) => {
  const attributes = {
    "Execution SID": data.sid,
    "Start date": data.start,
    Duration: data.duration,
    Status: data.final === "" ? "active" : "ended",
    Caller: data.caller,
  };

  data.steps.sort((a, b) => {
    return new Date(a["date_created"]) - new Date(b["date_created"]);
  });

  const rowContent = Object.entries(attributes).map(([k, v]) => {
    return <ExecutionTableRowContentItem attribute={k} value={v} key={k} />;
  });

  rowContent.push(
    <ExecutionTableRowContentStepItem data={data.steps} key={"steps"} />
  );

  return (
    <Box padding="space30" margin="space10">
      {rowContent}
    </Box>
  );
};
