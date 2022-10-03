import React from "react";
import { Text } from "@twilio-paste/core/text";
import { Card } from "@twilio-paste/core/card";
import { getCallLength } from "../utils";

function getAvgCallLength(data) {
  let length = 0;
  let totallength = 0;
  let cnt = 0;

  for (const [sid, execution] of data.entries()) {
    length = getCallLength(execution);

    totallength += length !== -1 ? length : 0;
    cnt += 1;
  }

  const avg = Math.floor(totallength / cnt);

  return isNaN(avg) ? 0 : `${Math.floor(avg / 60)}m${Math.floor(avg % 60)}s`;
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
        {getAvgCallLength(data)}
      </Text>
      <Text
        as="p"
        fontWeight="fontWeightMedium"
        fontSize="fontSize40"
        textAlign="center"
        color={"colorTextWeak"}
      >
        Call duration
      </Text>
    </Card>
  );
};
