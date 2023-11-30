import styled from "styled-components";

export const SearchForm = styled.form`
  position: relative;
`;

export const Input = styled.input`
  width: 424px;
  height: 33px;
  font-size: 16px;
  outline: none;
  padding-left: 10px;
  border-radius: 6px;
  border: 1.5px solid var(--black-200, #c4c4c4);
`;

export const SearchButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 10px;
  top: 4px;
  width: 35px;
  height: 25px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
