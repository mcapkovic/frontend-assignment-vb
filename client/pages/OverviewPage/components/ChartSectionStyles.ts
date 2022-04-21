import styled from "styled-components";
import theme from "@client/theme";

export const SectionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 43px 0px;
  justify-content: space-around;
  background-color: ${theme.colors.black3};
  border-radius: ${theme.borderRadius};
`;

export const ChartWrapper = styled.div`
  height: 286px;
  flex-basis: 286px;
`;

export const Legends = styled.ul`
  flex-basis: 340px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  padding: 0;
  margin: 0;
  max-height: 140px;
  line-height: 2;
  list-style-type: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

export const Dot = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-right: 8px;
`;
