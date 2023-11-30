import { DarkBtnStyled } from "./ButtonStyled";

const DarkBtn = ({ onClick, text }) => {
  return (
    <>
      <DarkBtnStyled type="button" onClick={onClick}>
        {text}
      </DarkBtnStyled>
    </>
  );
};

export default DarkBtn;
