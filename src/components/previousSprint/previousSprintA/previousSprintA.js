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

export const PreviousSprintA = () => {
  return (
    <Grommet theme={theme}>
      <Header background="#f5f5f5" direction="column" gap="none">
        <h2>Realtor New Homes</h2>
        <h3>Previous Sprint - 2/27 - 3/11 Mysore pak</h3>
      </Header>
      <Box direction="row" gap="small" width="stretch">
        <Box width="100%" margin={{ horizontal: "10%", vertical: "10%" }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Overall Health</TableCell>
                <TableCell>Green</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Started On</TableCell>
                <TableCell>27 Feb 2020</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Ended On</TableCell>
                <TableCell>11 Mar 2020</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Number of Tickets</TableCell>
                <TableCell>16</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Stories in Backlog</TableCell>
                <TableCell>42</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Number of future sprints</TableCell>
                <TableCell>3</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
        <Box
          width="100%"
          gap="small"
          direction="column"
          margin={{ vertical: "10%", right: "5%" }}
        >
          <Box gap="small" direction="row">
            <Box pad="medium" background="#089626" width="stretch">
              <Text alignSelf="center" color="white" weight="bold">
              Committed
              </Text>
              <Text alignSelf="center" color="white" weight="bold">
                48
              </Text>
            </Box>
            <Box pad="medium" background="#089626" width="stretch">
              <Text alignSelf="center" color="white" weight="bold">
                Delivered
              </Text>
              <Text alignSelf="center" color="white" weight="bold">
                46
              </Text>
            </Box>
          </Box>
          <Box gap="small" direction="row">
            <Box pad="medium" background="#089626" width="stretch">
              <Text alignSelf="center" color="white" weight="bold">
              Velocity
              </Text>
              <Text alignSelf="center" color="white" weight="bold">
                45
              </Text>
            </Box>
            <Box pad="medium" background="#089626" width="stretch">
              <Text alignSelf="center" color="white" weight="bold">
                Cycle Time
              </Text>
              <Text alignSelf="center" color="white" weight="bold">
                5d 2h
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};
