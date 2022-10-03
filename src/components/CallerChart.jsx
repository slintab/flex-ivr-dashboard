import React from "react";
import * as _ from "lodash";
import { Heading } from "@twilio-paste/core/heading";
import { Card } from "@twilio-paste/core/card";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function getTopCallers(data) {
  let result = [];
  const callers = _.groupBy(
    Array.from(data.values()),
    (i) => i.start.contact_channel_address
  );

  for (const [caller, executions] of Object.entries(callers)) {
    result.push({ caller: caller, cnt: executions.length });
  }

  return result.sort((a, b) => b.cnt - a.cnt).slice(0, 5);
}

export default ({ data }) => {
  return (
    <Card padding="space70">
      <Heading as="h4" variant="heading30">
        Top callers
      </Heading>
      <ResponsiveContainer height={200} width="100%">
        <BarChart data={getTopCallers(data)}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="caller" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="cnt" fill="#06033a" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
