import React, { useEffect } from "react";
import { Box } from "@twilio-paste/core/box";
import { Flex } from "@twilio-paste/core/flex";
import { Grid, Column } from "@twilio-paste/core/grid";
import { Heading } from "@twilio-paste/core/heading";
import ExecutionCards from "./ExecutionCards";
import ExecutionDashboard from "./ExecutionDashboard";
import ExecutionTable from "./ExecutionTable";
import { Execution } from "../utils";

import sampleData from "../sampleData";

export default () => {
  const [executionMap, setExecutionMap] = React.useState(new Map());

  useEffect(() => {
    async function fetchDashboardData() {
      let executionData = [];
      executionData = sampleData; //REMOVE AFTER ADDING OWN DATA SOURCE

      //ADD YOUR DATA RETRIEVAL LOGIC HERE
      // Example for retrieving data via an API
      // const url = "https://your_url.com/api";
      // const sampleData = await axios.get(url);
      //see `sampleData.json` for the expected data shape

      // DO NOT EDIT AFTER THIS LINE
      executionData.forEach((item) => {
        const executionSid = item["data"]["execution_sid"];

        if (!executionMap.get(executionSid)) {
          setExecutionMap(
            new Map(executionMap.set(executionSid, new Execution()))
          );
        }

        const exec = executionMap.get(executionSid);

        switch (item.type) {
          case "com.twilio.studio.flow.execution.started":
            exec.start = item.data;
            break;

          case "com.twilio.studio.flow.step.ended":
            exec.steps.push(item.data);
            break;

          case "com.twilio.studio.flow.execution.ended":
            exec.end = item.data;
            break;
        }
      });
    }

    fetchDashboardData();
  }, []);
  return (
    <Flex hAlignContent="center" vertical minWidth="100%">
      <Box overflow="auto" width="100%">
        <Box margin="space20" padding="space50">
          <Grid gutter="space30" vertical>
            <Column span={12}>
              <ExecutionCards data={executionMap} />
            </Column>
            <Column span={12}>
              <Heading as="h3" variant="heading30">
                Dashboard
              </Heading>
              <ExecutionDashboard data={executionMap} />
            </Column>
            <Column span={12}>
              <Heading as="h3" variant="heading30">
                Executions
              </Heading>
              <ExecutionTable data={executionMap} />
            </Column>
          </Grid>
        </Box>
      </Box>
    </Flex>
  );
};
