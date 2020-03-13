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
  Box
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
        name: "Realtor New Homes"
      },
      {
        id: 2,
        key: "VW",
        name: "Verizon Wireless"
      },
      {
        id: 3,
        key: "MCP",
        name: "Mastercard Cashless Payments"
      },
      {
        id: 4,
        key: "ZG",
        name: "Zero-G"
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
                  <TableRow key={item.id}>
                    <TableCell scope="row">
                      <strong>{item.key}</strong>
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <Button
                        label={
                          dupSubscriptions.indexOf(item.id) === -1
                            ? "Subscribe"
                            : "Unsubscribe"
                        }
                        value={item.id}
                        primary
                        color={
                          dupSubscriptions.indexOf(item.id) === -1
                            ? "#03fc98"
                            : "#fcba03"
                        }
                        onClick={
                          dupSubscriptions.indexOf(item.id) === -1
                            ? () => {
                                dupSubscriptions.push(item.id);
                                setSubscriptions(dupSubscriptions);
                              }
                            : () => {
                                dupSubscriptions.splice(
                                  dupSubscriptions.indexOf(item.id),
                                  1
                                );
                                setSubscriptions(dupSubscriptions);
                              }
                        }
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Grommet>
  );
};
