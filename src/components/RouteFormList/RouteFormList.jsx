import PointAForm from "../PointAForm/PointAForm";
import RouteFormItem from "../RouteFormItem/RouteFormItem";
import { Title, Wrapp } from "./RouteFormList.styled";
import LightBtn from "../Button/LightBtn";
import { useRef, useState } from "react";

const RouteFormList = () => {
  const mapRef = useRef();
  const [point, setPoint] = useState();

  return (
    <Wrapp>
      <Title>Маршрут</Title>
      <PointAForm
        setPoint={(position) => {
          setPoint(position);
          mapRef.current?.panTo(position);
        }}
      />
      <RouteFormItem title={"Точка B"} />
      <RouteFormItem title={"Точка C"} />
      <LightBtn text={"Додати ще одну точку"} width={"211px"} />
    </Wrapp>
  );
};

export default RouteFormList;
