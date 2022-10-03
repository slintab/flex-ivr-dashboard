import React from "react";
import CallFrequencyChart from "./CallFrequencyChart";
import CallTimesChart from "./CallTimesChart";
import CallerChart from "./CallerChart";
import TerminationChart from "./TerminationChart";
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
