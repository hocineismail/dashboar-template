import React from "react";
import { StyledCard, StyledTitle } from "./StyledCard";
interface Children {
  children: React.ReactNode;
  title?: string;
}
function Card({ children, title }: Children) {
  return (
    <StyledCard>
      {title ? (
        <>
          <StyledTitle>{title}</StyledTitle> <hr />
        </>
      ) : null}
      {children}
    </StyledCard>
  );
}
export default Card;
