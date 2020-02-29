import React from "react";
import styled from "styled-components";

import loading from "./loading.svg";

const StyledLoading = styled.div`
  position: "absolute";
  display: "flex";
  justify-content: "center";
  height: "100vh";
  width: "100vw";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: "#333";
`;

export const Loading = () => {
  return (
    <StyledLoading>
      <img src={loading} alt="loading" />
    </StyledLoading>
  );
};
