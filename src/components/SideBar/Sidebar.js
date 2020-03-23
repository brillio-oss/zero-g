import React from "react";
import { Box, Text, Button } from "grommet";
import history from "../../utils/history";

export const Sidebar = () => {
  return (
    <div>
      <Box gridArea="nav" background="#f0f8ff">
        <Box pad="small" width="stretch" background="#4F4F4F">
          <Text alignSelf="center" color="custom1" weight="bold">
            Realtor New Homes
          </Text>
        </Box>
        <Box size="medium" background="#f0f8ff">
          <Button
            margin={"small"}
            onClick={() => {
              history.push("/dashboard/boardA/currentSprint");
            }}
          >
            <Text size="small">Current Sprint - 3/12 - 3/25 Jalebi</Text>
          </Button>
          <Button
            margin={"small"}
            onClick={() => {
              history.push("/dashboard/boardA/previousSprint");
            }}
          >
            <Text size="small">Previous Sprint - 2/27 - 3/11 Mysore pak</Text>
          </Button>
          <Button
            margin={"small"}
            onClick={() => {
              history.push("/dashboard/boardA/allSprints");
            }}
          >
            <Text size="small">All Sprints</Text>
          </Button>
        </Box>
      </Box>
      <Box gridArea="nav" background="#f0f8ff">
        <Box pad="small" width="stretch" background="#4F4F4F">
          <Text alignSelf="center" color="custom1" weight="bold">
            Web Return User Experience
          </Text>
        </Box>
        <Box>
          <Button
            margin={"small"}
            onClick={() => {
              history.push("/dashboard/boardB/currentSprint");
            }}
          >
            <Text size="small">Current Sprint - Q3S3 - Clover</Text>
          </Button>
          <Button
            margin={"small"}
            onClick={() => {
              history.push("/dashboard/boardB/previousSprint");
            }}
          >
            <Text size="small">Previous Sprint - Q3S2 - Basanth</Text>
          </Button>
          <Button
            margin={"small"}
            onClick={() => {
              history.push("/dashboard/boardB/allSprints");
            }}
          >
            <Text size="small">All Sprints</Text>
          </Button>
        </Box>
      </Box>
      <Box margin="large">
        <Button
          margin={"small"}
          onClick={() => {
            history.push("/");
          }}
          alignSelf="center"
        >
          View All Projects
        </Button>
        <Button margin={"medium"} alignSelf="center">
          Settings
        </Button>
      </Box>
    </div>
  );
};
