import { DarkBtnStyled } from "./ButtonStyled";

const DarkBtn = ({ onClick, text, width }) => {
  return (
    <>
      <DarkBtnStyled type="button" onClick={onClick} width={width}>
        {text}
      </DarkBtnStyled>
    </>
  );
};

export default DarkBtn;
