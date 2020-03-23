import React from "react";
import { Box, Text, Button } from "grommet";
import history from "../../utils/history";
export const Sidebar = () => {
  return (
    <div>
      <Box gridArea="nav" background="#f0f8ff">
        <Box pad="small" width="stretch" background="#4F4F4F">
          <Text alignSelf="center" color="custom1" weight="bold" size="large">
            Board A
          </Text>
        </Box>
        <Box size="medium" background="#f0f8ff">
          <Button
            margin={"small"}
            onClick={() => {
              history.push("/dashboard/boardA/currentSprint");
            }}
          >
            Current Sprint
          </Button>
          <Button
            margin={"small"}
            onClick={() => {
              history.push("/dashboard/boardA/previousSprint");
            }}
          >
            Previous Sprint
          </Button>
          <Button
            margin={"small"}
            onClick={() => {
              history.push("/dashboard/boardA/allSprints");
            }}
          >
            All Sprints
          </Button>
        </Box>
      </Box>
      <Box gridArea="nav" background="#f0f8ff">
        <Box pad="small" width="stretch" background="#4F4F4F">
          <Text alignSelf="center" color="custom1" weight="bold" size="large">
            Board B
          </Text>
        </Box>
        <Box>
          <Button
            margin={"small"}
            onClick={() => {
              history.push("/dashboard/boardB/currentSprint");
            }}
          >
            Current Sprint
          </Button>
          <Button
            margin={"small"}
            onClick={() => {
              history.push("/dashboard/boardB/previousSprint");
            }}
          >
            Previous Sprint
          </Button>
          <Button
            margin={"small"}
            onClick={() => {
              history.push("/dashboard/boardB/allSprints");
            }}
          >
            All Sprints
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
