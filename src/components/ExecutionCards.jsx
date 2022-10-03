import React from "react";
import { Grid, Column } from "@twilio-paste/core/grid";
import OngoingExecutionCard from "./cards/OngoingExecutionCard";
import DailyExecutionCard from "./cards/DailyExecutionCard";
import WeeklyExecutionCard from "./cards/WeeklyExecutionCard";
import ExecutionDurationCard from "./cards/CallDurationCard";

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
