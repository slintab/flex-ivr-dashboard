import React from "react";
import { Grid, Column } from "@twilio-paste/core/grid";
import OngoingExecutionCard from "./OngoingExecutionCard";
import DailyExecutionCard from "./DailyExecutionCard";
import WeeklyExecutionCard from "./WeeklyExecutionCard";
import ExecutionDurationCard from "./CallDurationCard";

export default ({ data }) => {
  return (
    <Grid gutter="space30">
      <Column>
        <OngoingExecutionCard data={data} />
      </Column>
      <Column>
        <DailyExecutionCard data={data} />
      </Column>
      <Column>
        <WeeklyExecutionCard data={data} />
      </Column>
      <Column>
        <ExecutionDurationCard data={data} />
      </Column>
    </Grid>
  );
};
