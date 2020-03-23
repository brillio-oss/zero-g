import React from "react";
import { Box } from "grommet";

import { MetricBox } from "./MetricBox";

const val = () => {
  return Math.floor(Math.random() * 40) + 20
}

const rand = (items) => {
  return items[~~(items.length * Math.random())];
}

const yesNoArr = ['Yes', 'No'];

export const Metrics = () => {
  return (
    <Box direction="row" gap="small" width="stretch">
      <Box
        width="100%"
        gap="small"
        direction="column"
        margin={{ vertical: "5%", right: "5%" }}
      >
        <Box gap="small" direction="row">
          <MetricBox metric="Velocity" value={val()} />
          <MetricBox metric="Committed" value={val()} />
          <MetricBox metric="Delivered" value={val()} />
          <MetricBox metric="Cycle Time" value={val()} />
        </Box>
        <Box gap="small" direction="row">
          <MetricBox metric="Daily StandUp" value={rand(yesNoArr)} />
          <MetricBox metric="Code Quality" value={rand(['A+', 'A', 'B+', 'B', 'B-'])} />
          <MetricBox metric="Mid Sprint Changes" value={rand(yesNoArr)} />
          <MetricBox metric="Story Grooming" value={rand(yesNoArr)} />
        </Box>
      </Box>
    </Box>
  );
};
