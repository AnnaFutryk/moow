import { Formik, ErrorMessage } from "formik";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import {
  Container,
  Input,
  InputWrapper,
  Title,
  ErrorText,
  StyledForm,
  Label,
  StyledLocationSvg,
  SvgArrow,
} from "./RouteFormItem.styled";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { ComboboxInputStyled } from "../PointAForm/PointAForm.styled";

const initialValues = {
  address: "",
  workTime: "",
};

const schema = Yup.object().shape({
  address: Yup.string().required("Будь ласка, вкажіть адресу"),
  workTime: Yup.number()
    .positive("Неможливе відʼємне значення")
    .required("Вкажіть тривалість роботи (год)")
    .typeError("Введіть коректне числове значення"),
});

function RouteFormItem({ title, setPoint }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val) => {
    setValue(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    setPoint({ lat, lng });
  };

  return (
    <div>
      <Container>
        <ToastContainer transition={Slide} />
        <Title>{title}</Title>
        <Formik initialValues={initialValues} validationSchema={schema}>
          {({ values, errors, touched }) => (
            <StyledForm>
              <InputWrapper>
                <Label htmlFor="address">Адреса</Label>
                <Combobox onSelect={handleSelect}>
                  <ComboboxInputStyled
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    disabled={!ready}
                  />
                  <ComboboxPopover>
                    <ComboboxList>
                      {status === "OK" &&
                        data.map(({ place_id, description }) => (
                          <ComboboxOption key={place_id} value={description} />
                        ))}
                    </ComboboxList>
                  </ComboboxPopover>
                </Combobox>
                <StyledLocationSvg />
                <SvgArrow />
                <ErrorMessage
                  name="address"
                  render={(message) => <ErrorText>{message}</ErrorText>}
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="workTime">Час роботи (год)</Label>
                <Input
                  style={{ width: "114px" }}
                  type="text"
                  name="workTime"
                  error={errors.workTime && touched.workTime ? "true" : "false"}
                  success={
                    values.workTime && !errors.workTime ? "true" : "false"
                  }
                />
                <ErrorMessage
                  name="workTime"
                  render={(message) => <ErrorText>{message}</ErrorText>}
                />
              </InputWrapper>
            </StyledForm>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default RouteFormItem;
