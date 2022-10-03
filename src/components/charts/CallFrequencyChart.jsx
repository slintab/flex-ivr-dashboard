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

function getCallFrequency(data) {
  let callMap = new Map();
  let result = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const fmtD = d.toISOString().slice(5, 10).replace("-", "/");

    callMap.set(fmtD, 0);
  }

  const callsByDate = _.groupBy(Array.from(data.values()), (i) => {
    return new Date(i.start.date_created)
      .toISOString()
      .slice(5, 10)
      .replace("-", "/");
  });

  console.log("CALLSBYDATE");
  console.log(callsByDate);

  for (const [date, executions] of Object.entries(callsByDate)) {
    if (!callMap.has(date)) {
      continue;
    }

    callMap.set(date, executions.length);
  }

  callMap.forEach((value, key) => {
    result.push({ date: key, cnt: value });
  });

  return result.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
}

export default ({ data }) => {
  return (
    <Card padding="space70">
      <Heading as="h4" variant="heading30">
        Call frequency by day
      </Heading>
      <ResponsiveContainer height={200} width="100%">
        <BarChart data={getCallFrequency(data)}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="date" interval={0} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="cnt" fill="#06033a" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
