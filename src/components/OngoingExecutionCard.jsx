import React from "react";
import { Text } from "@twilio-paste/core/text";
import { Card } from "@twilio-paste/core/card";

function getOngoingCalls(data) {
  let ongoingCalls = 0;

  for (const [sid, execution] of data.entries()) {
    ongoingCalls += 1;
    ongoingCalls -= execution.end !== null ? 1 : 0;
  }

  return ongoingCalls;
}

export default ({ data }) => {
  return (
    <Card padding="space70">
      <Text
        as="p"
        fontWeight="fontWeightMedium"
        fontSize="fontSize70"
        textAlign="center"
        padding="space20"
      >
        {getOngoingCalls(data)}
      </Text>
      <Text
        as="p"
        fontWeight="fontWeightMedium"
        fontSize="fontSize40"
        textAlign="center"
        color={"colorTextWeak"}
      >
        Ongoing calls
      </Text>
    </Card>
  );
};
