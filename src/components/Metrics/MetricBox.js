import React from "react";
import { Box, Text } from "grommet";

export const MetricBox = ({ metric, value }) => {
  return (
    <Box
      pad="medium"
      border={{ side: "all", color: "black", size: "medium" }}
      background="white"
      width="stretch"
    >
      <Text alignSelf="center" color="custom" weight="bold">
        {metric || 'Velocity'}
      </Text>
      <Text alignSelf="center" color="custom" weight="bold">
        {value || 'n/a'}
      </Text>
    </Box>
  );
};
