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

export const PreviousSprintB = () => {
  return (
    <Grommet theme={theme}>
      <Header background="#f5f5f5" direction="column" gap="none">
        <h2>Web Return User Experience</h2>
        <h3>Previous Sprint - Q3S2 - Basanth</h3>
      </Header>
      <Box direction="row" gap="small" width="stretch">
        <Box width="100%" margin={{ horizontal: "10%", vertical: "10%" }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Overall Health</TableCell>
                <TableCell>Amber</TableCell>
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
                <TableCell>8</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Stories in Backlog</TableCell>
                <TableCell>10</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Number of future sprints</TableCell>
                <TableCell>1</TableCell>
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
                Velocity
              </Text>
              <Text alignSelf="center" color="white" weight="bold">
                28
              </Text>
            </Box>
            <Box pad="medium" background="#ced907" width="stretch">
              <Text alignSelf="center" color="white" weight="bold">
                Delivered
              </Text>
              <Text alignSelf="center" color="white" weight="bold">
                22
              </Text>
            </Box>
          </Box>
          <Box gap="small" direction="row">
            <Box pad="medium" background="#089626" width="stretch">
              <Text alignSelf="center" color="white" weight="bold">
                Committed
              </Text>
              <Text alignSelf="center" color="white" weight="bold">
                28
              </Text>
            </Box>
            <Box pad="medium" background="#ced907" width="stretch">
              <Text alignSelf="center" color="white" weight="bold">
                Cycle Time
              </Text>
              <Text alignSelf="center" color="white" weight="bold">
                1w 6h
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};
