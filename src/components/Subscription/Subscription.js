import React, { useState, useEffect } from "react";
import {
  Grommet,
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  TextInput,
  Button,
  Box,
  Accordion,
  AccordionPanel
} from "grommet";
import theme from "../../utils/theme";

export const Subscription = () => {
  const [projects, setProjects] = useState([]);

  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    setProjects([
      {
        id: 1,
        key: "RNH",
        name: "Realtor New Homes",
        boards: [
          {
            b_id: "1.1",
            b_key: "RNH B1",
            b_name: "Board 1"
          },
          {
            b_id: "1.2",
            b_key: "RNH B2",
            b_name: "Board 2"
          }
        ]
      },
      {
        id: 2,
        key: "VWS",
        name: "Verizon Wireless Solutions",
        boards: [
          {
            b_id: "2.1",
            b_key: "VWS B1",
            b_name: "Board 1"
          },
          {
            b_id: "2.2",
            b_key: "VWS B2",
            b_name: "Board 2"
          }
        ]
      },
      {
        id: 3,
        key: "MCP",
        name: "Mastercard Cashless Payments",
        boards: [
          {
            b_id: "3.1",
            b_key: "MCP B1",
            b_name: "Board 1"
          },
          {
            b_id: "3.2",
            b_key: "MCP B2",
            b_name: "Board 2"
          }
        ]
      },
      {
        id: 4,
        key: "Z-G",
        name: "Zero-G",
        boards: [
          {
            b_id: "4.1",
            b_key: "Z-G B1",
            b_name: "Board 1"
          },
          {
            b_id: "4.2",
            b_key: "Z-G B2",
            b_name: "Board 2"
          }
        ]
      }
    ]);
    setSubscriptions([1, 3]);
  }, []);

  const [query, setQuery] = useState("");

  let dupSubscriptions = [...subscriptions];
  let data = [...projects];
  let search = query.trim().toLowerCase();
  if (search.length > 0) {
    search = search.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&");
    data = data.filter(item => {
      return (item.key + " " + item.name).toLowerCase().match(search);
    });
  }

  return (
    <Grommet theme={theme}>
      <Box justify="center" align="center" alignContent="center" gap="medium">
        <Box width="xlarge">
          <TextInput
            placeholder="start typing your project name"
            onChange={event => setQuery(event.target.value)}
            size="medium"
            autoFocus
          />
        </Box>

        <Box>
          <Table>
            <Accordion animate={true} multiple={false} margin="small">
              <TableHeader>
                <TableRow>
                  <TableCell scope="col" border="bottom">
                    Project ID
                  </TableCell>
                  <TableCell scope="col" border="bottom">
                    Project Name
                  </TableCell>
                </TableRow>
              </TableHeader>

              <TableBody>
                {data.map((item, _index) => {
                  return (
                    <Accordion animate={true} multiple={false} margin="small">
                      <AccordionPanel
                        alignSelf="start"
                        label={
                          <TableRow key={item.id}>
                            <TableCell scope="row">
                              <strong>{item.key}</strong>
                            </TableCell>

                            <TableCell>{item.name}</TableCell>
                          </TableRow>
                        }
                      >
                        <TableRow key={item.id}>
                          {item.boards.map((board, b_id) => {
                            return (
                              <div>
                                <TableCell scope="row">
                                  <strong>{board.b_key}</strong>
                                </TableCell>
                                <TableCell>{board.b_name}</TableCell>
                                <TableCell>
                                  <Button
                                    label={
                                      dupSubscriptions.indexOf(board.b_id) ===
                                      -1
                                        ? "Subscribe"
                                        : "Unsubscribe"
                                    }
                                    value={item.id}
                                    primary
                                    color={
                                      dupSubscriptions.indexOf(board.b_id) ===
                                      -1
                                        ? "#03fc98"
                                        : "#fcba03"
                                    }
                                    onClick={
                                      dupSubscriptions.indexOf(board.b_id) ===
                                      -1
                                        ? () => {
                                            dupSubscriptions.push(board.b_id);
                                            setSubscriptions(dupSubscriptions);
                                          }
                                        : () => {
                                            dupSubscriptions.splice(
                                              dupSubscriptions.indexOf(
                                                board.b_id
                                              ),
                                              1
                                            );
                                            setSubscriptions(dupSubscriptions);
                                          }
                                    }
                                  />
                                </TableCell>
                              </div>
                            );
                          })}
                        </TableRow>
                      </AccordionPanel>
                    </Accordion>
                  );
                })}
              </TableBody>
            </Accordion>
          </Table>
        </Box>
      </Box>
    </Grommet>
  );
};
