import React from "react";
import {
  Header,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Grommet,
  Box,
  Text
} from "grommet";
import theme from "grommet/themes";

export const CurrentSprintA = () => {
  return (
    <div>
      <Grommet theme={theme}>
        <Header background="#f5f5f5" direction="column" gap="none">
          <h2>Realtor New Homes</h2>
          <h3>Current Sprint - 3/12 - 3/25 Jalebi</h3>
        </Header>
        <Box direction="row" gap="small" width="stretch" responsive={true}>
          <Box
            width="100%"
            margin={{ horizontal: "10%", vertical: "10%" }}
            responsive={true}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Overall Health</TableCell>
                  <TableCell>Amber</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Started On</TableCell>
                  <TableCell>12 Mar 2020</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Ends On</TableCell>
                  <TableCell>25 Mar 2020</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Number of Tickets</TableCell>
                  <TableCell>21</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Stories in Backlog</TableCell>
                  <TableCell>42</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Number of future sprints</TableCell>
                  <TableCell>4</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>

          <Box
            width="100%"
            gap="small"
            direction="column"
            margin={{ vertical: "10%", right: "5%" }}
            responsive={true}
          >
            <Box gap="small" direction="row" responsive={true}>
              <Box
                pad="medium"
                background="#089626"
                width="stretch"
                responsive={true}
              >
                <Text alignSelf="center" color="white" weight="bold">
                  Committed
                </Text>
                <Text alignSelf="center" color="white" weight="bold">
                  45
                </Text>
              </Box>
              <Box
                pad="medium"
                background="#089626"
                width="stretch"
                responsive={true}
              >
                <Text alignSelf="center" color="white" weight="bold">
                  Delivered
                </Text>
                <Text alignSelf="center" color="white" weight="bold">
                  42
                </Text>
              </Box>
            </Box>
            <Box gap="small" direction="row" responsive={true}>
              <Box
                pad="medium"
                background="#ced907"
                width="stretch"
                responsive={true}
              >
                <Text alignSelf="center" color="white" weight="bold">
                  Velocity
                </Text>
                <Text alignSelf="center" color="white" weight="bold">
                  35
                </Text>
              </Box>
              <Box
                pad="medium"
                background="#089626"
                width="stretch"
                responsive={true}
              >
                <Text alignSelf="center" color="white" weight="bold">
                  Cycle Time
                </Text>
                <Text alignSelf="center" color="white" weight="bold">
                  4d 6h
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grommet>
    </div>
  );
};
