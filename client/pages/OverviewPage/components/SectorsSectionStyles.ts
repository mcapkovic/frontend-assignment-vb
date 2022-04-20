import styled from "styled-components";
import theme from "@client/theme";

export const SectionRow = styled.div`
  display: flex;
  & > * + * {
    margin-left: 17px;
  }
`;

export const SectionItem = styled.div`
  display: flex;
  padding: 36px 30px;
  align-items: center;
  flex: 1 1 0px;
  justify-content: space-between;
  background-color: ${theme.colors.black3};
  border-radius: ${theme.borderRadius};
  transition: background-color 200ms;
  cursor: pointer;
  
  &:hover {
    background-color: ${theme.colors.black6};
  }
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Count = styled.div`
  font-size: 38px;
  color: ${theme.colors.white};
  font-weight: ${theme.weight.bold};
`;

export const Name = styled.div`
  color: ${theme.colors.textGray};
  font-weight: ${theme.weight.semiBold};
`;

export const Icon = styled.div`
  width: 55px;
  height: 55px;
`;
