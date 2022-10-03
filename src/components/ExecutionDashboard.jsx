import React from "react";
import CallFrequencyChart from "./charts/CallFrequencyChart";
import CallTimesChart from "./charts/CallTimesChart";
import CallerChart from "./charts/CallerChart";
import TerminationChart from "./charts/TerminationChart";
import { Grid, Column } from "@twilio-paste/core/grid";

export default ({ data }) => {
  return (
    <Grid gutter="space30" vertical>
      <Column>
        <Grid gutter="space30">
          <Column>
            <CallFrequencyChart data={data} />
          </Column>
          <Column>
            <CallerChart data={data} />
          </Column>
        </Grid>
      </Column>
      <Column>
        <Grid gutter="space30">
          <Column>
            <CallTimesChart data={data} />
          </Column>
          <Column>
            <TerminationChart data={data} />
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};
