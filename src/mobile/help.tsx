import React from "react";
import styled from "styled-components";

interface ExpandProp {
  expand: boolean;
}
const ExpandIcon = styled.div<ExpandProp>`
  box-sizing: border-box;
  position: relative;
  display: inline-block;

  background-color: white;
  cursor: pointer;

  width: 22px;
  height: 22px;
  border: 2px solid;
  border-radius: 100px;
  top: -5px;
  color: rgb(77, 104, 206);
  margin-right: 5px;
  transform: ${(props) => (props.expand ? "rotate(90deg)" : "rotate(0deg)")};
  &::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    transform: rotate(-45deg);
    left: 5px;
    top: 6px;
  }
`;

const HelpContainer = styled.div`
  position: relative;
  top: -20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const HelpContent = styled.div<ExpandProp>`
  font-family: Avenir;
  color: rgb(53, 116, 230);
  white-space: wrap;
  font-size: 12px;
  display: ${(props) => (props.expand ? "inline" : "none")};
  @media only screen and (min-width: 500px) {
    font-size: 14px;
  }
`;

interface Props {
  expandId: string;
  expand: string;
  setExpand: (expand: string) => void;
  children?: React.ReactNode;
}
export const Help: React.FC<Props> = ({
  children,
  expandId,
  expand,
  setExpand,
}) => {
  const isExpanded = expand === expandId;
  const toggle = () => setExpand(isExpanded ? "" : expandId);
  return (
    <HelpContainer>
      <ExpandIcon expand={isExpanded} onClick={toggle} />
      <HelpContent expand={isExpanded}>{children}</HelpContent>
    </HelpContainer>
  );
};
