import React from "react";
import * as _ from "lodash";
import { Heading } from "@twilio-paste/core/heading";
import { getTerminationStep } from "../utils";
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

function getTopTerminationSteps(data) {
  const termMap = new Map();
  const result = [];
  let finalStep = null;

  for (const [sid, execution] of data.entries()) {
    finalStep = getTerminationStep(execution);
    if (finalStep === null) {
      continue;
    } else if (!termMap.has(finalStep)) {
      termMap.set(finalStep, 1);
    } else {
      termMap.set(finalStep, termMap.get(finalStep) + 1);
    }
  }

  termMap.forEach((value, key) => {
    result.push({ step: key, cnt: value });
  });

  return result.sort((a, b) => b.cnt - a.cnt).slice(0, 5);
}

export default ({ data }) => {
  return (
    <Card padding="space70">
      <Heading as="h4" variant="heading30">
        Top termination steps
      </Heading>
      <ResponsiveContainer height={200} width="100%">
        <BarChart data={getTopTerminationSteps(data)}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="step" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="cnt" fill="#06033a" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
