import { LightBtnStyled } from "./ButtonStyled";

const LightBtn = ({ onClick, text, width }) => {
  return (
    <>
      <LightBtnStyled type="button" onClick={onClick} width={width}>
        {text}
      </LightBtnStyled>
    </>
  );
};

export default LightBtn;
