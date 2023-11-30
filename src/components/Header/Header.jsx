import { HeaderWrap } from "./Header.styled";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Searchbar from "../Searchbar/Searchbar";
import LightBtn from "../Button/LightBtn";
import DarkBtn from "../Button/DarkBtn";
import HeaderIconsList from "../HeaderIconsList/HeaderIconsList";
import Select from "react-select";

const Header = () => {
  return (
    <HeaderWrap>
      <Logo />
      <LightBtn text={"Категорії"} width={"104px"} />
      <Searchbar />
      <DarkBtn text={"Створити оголошення"} width={208} />
      <HeaderIconsList />
      <Select
        options={[
          { value: "УКР", label: "УКР" },
          { value: "ENG", label: "ENG" },
        ]}
        styles={{
          control: (styles) => ({
            ...styles,
            padding: 0,
            margin: 0,
            height: "20px",
            border: "none",
            fontSize: "16px",
            appearance: "none",
            fontWeight: 700,
            lineHeight: "normal",
            fontStyle: "normal",
          }),
          option: (styles, { isFocused }) => {
            return {
              ...styles,
              color: isFocused ? "#171717" : "rgba(18, 20, 23, 0.2)",
            };
          },

          placeholder: (styles) => ({
            ...styles,
            color: "#171717",
          }),
        }}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </HeaderWrap>
  );
};

export default Header;
