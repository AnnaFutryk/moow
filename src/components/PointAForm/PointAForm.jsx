import { Formik, ErrorMessage } from "formik";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
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
  ComboboxInputStyled,
} from "./PointAForm.styled";
import DateInput from "./DatePicker.styled";
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

const initialValues = {
  date: "",
  address: "",
  workTime: "",
  arrivedTime: "",
};

const schema = Yup.object().shape({
  date: Yup.date().required("Будь ласка, оберіть дату"),
  address: Yup.string().required("Будь ласка, вкажіть адресу"),
  workTime: Yup.number()
    .positive("Неможливе відʼємне значення")
    .required("Вкажіть тривалість роботи (год)")
    .typeError("Введіть коректне числове значення"),
  arrivedTime: Yup.string()
    .trim()
    .required("Вкажіть час початку роботи")
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Неправильний формат часу"),
});

function PointAForm({ setPoint }) {
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
        <Title>Точка А</Title>
        <Formik
          initialValues={initialValues}
          onSelect={handleSelect}
          validationSchema={schema}
        >
          {({ values, errors, touched }) => (
            <StyledForm>
              <div>
                <InputWrapper>
                  <Label htmlFor="date">Дата</Label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateInput />
                  </LocalizationProvider>

                  <ErrorMessage
                    name="date"
                    render={(message) => <ErrorText>{message}</ErrorText>}
                  />
                </InputWrapper>
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
                            <ComboboxOption
                              key={place_id}
                              value={description}
                            />
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
              </div>
              <div>
                <InputWrapper>
                  <Label htmlFor="workTime">Час роботи (год)</Label>
                  <Input
                    style={{ width: "114px" }}
                    type="text"
                    name="workTime"
                    error={
                      errors.workTime && touched.workTime ? "true" : "false"
                    }
                    success={
                      values.workTime && !errors.workTime ? "true" : "false"
                    }
                  />
                  <ErrorMessage
                    name="workTime"
                    render={(message) => <ErrorText>{message}</ErrorText>}
                  />
                </InputWrapper>
                <InputWrapper>
                  <Label htmlFor="arrivedTime">Час прибуття</Label>
                  <Input
                    style={{ width: "92px" }}
                    type={"text"}
                    value={values.arrivedTime}
                    name="arrivedTime"
                    error={
                      errors.arrivedTime && touched.arrivedTime
                        ? "true"
                        : "false"
                    }
                    success={
                      values.arrivedTime && !errors.arrivedTime
                        ? "true"
                        : "false"
                    }
                  />
                  <ErrorMessage
                    name="arrivedTime"
                    render={(message) => <ErrorText>{message}</ErrorText>}
                  />
                </InputWrapper>
              </div>
            </StyledForm>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default PointAForm;
