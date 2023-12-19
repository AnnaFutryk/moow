import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useMemo, useRef, useState } from "react";
import PointAForm from "../PointAForm/PointAForm";
import RouteFormItem from "../RouteFormItem/RouteFormItem";
import LightBtn from "../Button/LightBtn";
import { Title, Wrapp } from "./Map.styled";
import { FormBlock } from "../Map/Map.styled";

const Map = () => {
  const [point, setPoint] = useState();
  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 43, lng: -80 }), []);
  const options = useMemo(
    () => ({
      mapId: "66ff9fe55881b8ee",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  return (
    <Wrapp>
      <FormBlock>
        <Title>Маршрут</Title>
        <PointAForm
          setPoint={(position) => {
            setPoint(position);
            mapRef.current?.panTo(position);
          }}
        />
        <RouteFormItem
          title={"Точка B"}
          setPoint={(position) => {
            setPoint(position);
            mapRef.current?.panTo(position);
          }}
        />
        <RouteFormItem
          title={"Точка C"}
          setPoint={(position) => {
            setPoint(position);
            mapRef.current?.panTo(position);
          }}
        />
        <LightBtn text={"Додати ще одну точку"} width={"211px"} />
      </FormBlock>

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={{ width: "480px", height: "433px" }}
        options={options}
        onLoad={onLoad}
      >
        {point && <Marker position={point} />}
      </GoogleMap>
    </Wrapp>
  );
};

export default Map;
