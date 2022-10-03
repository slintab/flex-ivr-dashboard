import React from "react";
import { Text } from "@twilio-paste/core/text";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import ExecutionTableRowContentItem from "./ExecutionTableRowContentItem";

export default ({ data }) => {
  const steps = data.map((step) => {
    return (
      <Text
        as="p"
        fontSize="fontSize30"
        fontWeight="fontWeightNormal"
        key={step.step_sid}
      >
        {step.transitioned_to}
      </Text>
    );
  });

  const stepsWithIcons = [];

  steps.forEach((item, index) => {
    stepsWithIcons.push(item);
    if (steps[index + 1] !== undefined) {
      stepsWithIcons.push(
        <ArrowForwardIcon key={index} decorative={true} size="sizeIcon30" />
      );
    }
  });

  return (
    <ExecutionTableRowContentItem attribute={"Steps"} value={stepsWithIcons} />
  );
};
