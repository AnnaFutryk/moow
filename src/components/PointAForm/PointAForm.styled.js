import { Form, Field } from "formik";
import styled from "styled-components";
import { ReactComponent as LocationSVG } from "../../images/location.svg";
import { ReactComponent as ArrowSvg } from "../../images/arrow.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 290px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  padding: 5px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    width: 600px;
    padding: 15px;
  }
`;

export const Title = styled.h1`
  color: #262626;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 5px;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 290px;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;

    gap: 50px;
    row-gap: 15px;
    max-width: 630px;
  }
`;

export const Input = styled(Field)`
  position: relative;
  width: 261px;
  display: block;
  padding: 0;
  border: none;
  border-bottom: 2px solid #665cd1;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  color: #262626;
  background-color: transparent;
  transition: border 250ms linear;

  @media screen and (min-width: 1280px) {
    width: 247px;
    padding-bottom: 3px;
    font-size: 17px;
    line-height: 1.56;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  color: #5a5a5a;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (min-width: 1280px) {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const ErrorText = styled.p`
  position: ${({ absolute, select }) =>
    absolute === "true" || select === "true" ? "absolute" : "static"};
  left: ${({ select }) => (select === "true" ? "unset" : "25px")};
  right: ${({ select }) => (select === "true" ? "0" : "unset")};
  bottom: -24px;
  color: #da1414;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  margin-left: ${({ absolute, select }) =>
    absolute === "true" || select === "true" ? "0" : "25px"};
  margin-top: ${({ absolute, select }) =>
    absolute === "true" || select === "true" ? "0" : "8px"};
  /* width: ${({ select }) => (select === "true" ? "200px" : "100%")}; */
  white-space: nowrap;
  text-align: ${({ select }) => (select === "true" ? "right" : "left")};
`;

ErrorText.shouldForwardProp = (prop) => prop !== "error";

export const StyledLocationSvg = styled(LocationSVG)`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    bottom: 0;
    right: 6px;
  }
`;

export const SvgArrow = styled(ArrowSvg)`
  position: absolute;
  bottom: 0;
  right: 6px;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
