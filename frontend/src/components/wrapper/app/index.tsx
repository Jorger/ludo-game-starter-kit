import React from "react";
import { Container } from "..";

const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <Container>{children}</Container>
);

export default React.memo(AppWrapper);
