import React from "react";
import {
  Header,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableFooter,
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
          <h2>Realtor New Homes - Board A</h2>
          <h3>Description of Projects - Description of Boards</h3>
        </Header>
        <Box direction="row" gap="small" width="stretch" responsive={true}>
          <Box
            width="100%"
            margin={{ horizontal: "10%", vertical: "5%" }}
            responsive={true}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableFooter>
                    <TableCell>Overall Health</TableCell>
                    <TableCell>Green/Amber/Red</TableCell>
                  </TableFooter>
                </TableRow>

                <TableFooter>
                  <TableRow>
                    <TableCell>Started Since</TableCell>
                    <TableCell>10-10-20</TableCell>
                  </TableRow>
                </TableFooter>
                <TableFooter>
                  <TableRow>
                    <TableCell>Number of Sprints</TableCell>
                    <TableCell>N</TableCell>
                  </TableRow>
                </TableFooter>
                <TableFooter>
                  <TableRow>
                    <TableCell>Stories in Backlog</TableCell>
                    <TableCell>N</TableCell>
                  </TableRow>
                </TableFooter>
                <TableFooter>
                  <TableRow>
                    <TableCell>Number of future sprints</TableCell>
                    <TableCell>N</TableCell>
                  </TableRow>
                </TableFooter>
                <TableFooter></TableFooter>
              </TableBody>
            </Table>
          </Box>

          <Box
            width="100%"
            gap="small"
            direction="column"
            margin={{ vertical: "5%", right: "5%" }}
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
                  Velocity
                </Text>
                <Text alignSelf="center" color="white" weight="bold">
                  N
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
                  N
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
                  Committed
                </Text>
                <Text alignSelf="center" color="white" weight="bold">
                  N
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
                  N
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grommet>
    </div>
  );
};
