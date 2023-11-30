import styled from "styled-components";

export const LightBtnStyled = styled.button`
  width: ${(props) => props.width};
  height: 40px;
  padding: 10px 15px 10px 15px;
  color: #665cd1;
  background-color: #f1f0ff;
  display: inline-block;
  border-radius: 35px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  box-shadow: 0px 5px 6px 0px rgba(45, 33, 54, 0.1);
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0px 7px 12px 2px rgba(45, 33, 54, 0.1);
  }
`;

export const DarkBtnStyled = styled.button`
  width: ${(props) => props.width};
  min-height: 40px;
  padding: 10px 15px 10px 15px;
  color: #ebebeb;
  background-color: #171717;
  display: inline-block;
  border-radius: 35px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  box-shadow: 0px 5px 8px 0px rgba(77, 76, 76, 0.4);
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0px 7px 12px 2px rgba(45, 33, 54, 0.1);
  }
`;
