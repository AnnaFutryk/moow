import PointAForm from "../PointAForm/PointAForm";
import RouteFormItem from "../RouteFormItem/RouteFormItem";
import { Title, Wrapp } from "./RouteFormList.styled";
import LightBtn from "../Button/LightBtn";

const RouteFormList = () => {
  return (
    <Wrapp>
      <Title>Маршрут</Title>
      <PointAForm />
      <RouteFormItem title={"Точка B"} />
      <RouteFormItem title={"Точка C"} />
      <LightBtn text={"Додати ще одну точку"} width={"211px"} />
    </Wrapp>
  );
};

export default RouteFormList;
