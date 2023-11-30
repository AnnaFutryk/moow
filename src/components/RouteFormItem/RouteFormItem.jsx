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

function RouteFormItem({ title }) {
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
                <Input
                  type="text"
                  name="address"
                  error={errors.address && touched.address ? "true" : "false"}
                  success={values.address && !errors.address ? "true" : "false"}
                />
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
