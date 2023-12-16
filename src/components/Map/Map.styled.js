import styled from "styled-components";

export const Wrapp = styled.div`
  width: 270px;
  height: 270px;
  @media screen and (min-width: 1280px) {
    width: 480px;
    height: 433px;
  }
`;

export const FormBlock = styled.div`
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 20px;
  width: 280px;
  @media screen and (min-width: 1280px) {
    width: 632px;
  }
`;

export const Title = styled.h2`
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #665cd1;
  margin-bottom: 10px;
`;
