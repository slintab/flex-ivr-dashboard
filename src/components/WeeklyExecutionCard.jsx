import React from "react";
import dayjs from "dayjs";
import { Text } from "@twilio-paste/core/text";
import { Card } from "@twilio-paste/core/card";

function getWeeksCalls(data) {
  let callCount = 0;

  for (const [sid, execution] of data.entries()) {
    let d = dayjs(execution.start.date_created);
    let now = dayjs();

    callCount += d.isoWeek === now.isoWeek ? 1 : 0;
  }

  return callCount;
}

export default ({ data }) => {
  return (
    <Card padding="space70">
      <Text
        as="p"
        fontWeight="fontWeightNormal"
        fontSize="fontSize70"
        textAlign="center"
        padding="space20"
      >
        {getWeeksCalls(data)}
      </Text>
      <Text
        as="p"
        fontWeight="fontWeightMedium"
        fontSize="fontSize40"
        textAlign="center"
        color={"colorTextWeak"}
      >
        Calls this week
      </Text>
    </Card>
  );
};
