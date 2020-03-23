import React from "react";
import { Accordion, AccordionPanel, Box, Header } from "grommet";
import { Metrics } from "../../Metrics";

const sprints = ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5", 'Sprint 6'];

export const AllSprintsB = () => {
  return (
    <div>
      <Box fill="horizontal">
        <Header background="#f5f5f5" direction="column" gap="none">
          <h2>Web Return User Experience</h2>
        </Header>
        <Accordion animate={true} multiple={true} margin="small">
          {sprints.map(sprint => {
            return (
              <AccordionPanel label={sprint} key={sprint}>
                <Metrics />
              </AccordionPanel>
            );
          })}
        </Accordion>
      </Box>
    </div>
  );
};
