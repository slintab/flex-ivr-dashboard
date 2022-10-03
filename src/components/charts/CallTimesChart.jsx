import React from "react";
import * as _ from "lodash";
import { Heading } from "@twilio-paste/core/heading";
import { Card } from "@twilio-paste/core/card";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

function getCallTimes(data) {
  let callMap = new Map();
  let result = [];

  for (let i = 0; i < 24; i++) {
    callMap.set(i.toString(), 0);
  }

  const callsByHour = _.groupBy(Array.from(data.values()), (i) => {
    return new Date(i.start.date_created).getHours();
  });

  for (const [hour, executions] of Object.entries(callsByHour)) {
    if (!callMap.has(hour)) {
      continue;
    }

    callMap.set(hour, executions.length);
  }

  callMap.forEach((value, key) => {
    result.push({ hour: key, cnt: value });
  });

  return result.sort();
}

export default ({ data }) => {
  return (
    <Card padding="space70">
      <Heading as="h4" variant="heading30">
        Call frequency by hour
      </Heading>
      <ResponsiveContainer height={200} width="100%">
        <LineChart data={getCallTimes(data)}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="hour" interval={0} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="linear" dataKey="cnt" stroke="#06033a" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
