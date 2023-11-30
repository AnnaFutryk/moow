import { styled } from "@mui/material/styles";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ReactComponent as CalendarSvg } from "../../images/calendar.svg";

import { useFormikContext } from "formik";

const StyledDesktopDatePicker = styled(DesktopDatePicker)(() => {
  return {
    "& .MuiInputBase-root": {
      width: "261px",
      borderRadius: 0,
      border: "none",
      borderBottom: "2px solid #665cd1",
      outline: "none",
      fontSize: "14px",
      lineHeight: "normal",
      color: "#262626",
      backgroundColor: "transparent",
    },

    "@media screen and (min-width: 1280px)": {
      "& .MuiInputBase-root": {
        width: "247px",
      },
    },

    "& .MuiInputBase-root:hover": {
      border: "none",
      borderBottom: "2px solid #665cd1",
    },

    "& .MuiOutlinedInput-root": {
      fontSize: "14px",
      lineHeight: "normal",
      color: "#262626",
      backgroundColor: "transparent",
      paddingRight: "18px",
    },

    "& .MuiInputBase-input": {
      padding: "0px",
      height: "2.12em",
    },

    "& .Mui-error": {
      border: "none",
      borderBottom: "2px solid #665cd1",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiButtonBase-root": {
      position: "absolute",
      top: "-2px",
      right: "-22px",
    },
  };
});
const PopperDateStyles = {
  "& .MuiPaper-root": {
    backgroundColor: "#F1F0FF",
    boxShadow: "0px 5px 6px 0px rgba(45, 33, 54, 0.10)",
    color: "#665CD1",
  },

  "& .MuiIconButton-root": {
    color: "#171717",
  },

  "& .MuiDayCalendar-weekDayLabel": {
    color: "#171717",
  },

  "& .MuiPickersDay-root.Mui-disabled.Mui-disabled": {
    color: "grey",
  },

  "& .MuiPickersDay-today.Mui-selected.MuiPickersDay-root": {
    backgroundColor: "#665CD1",
    color: "white",
  },
};

export default function DateInput() {
  const { setFieldValue, errors, values } = useFormikContext();

  return (
    <StyledDesktopDatePicker
      name="date"
      value={null}
      onChange={(value) => {
        const updatedValue = value ? value.format("DD MMM YYYY") : "";
        setFieldValue("date", updatedValue);
      }}
      disablePast
      showDaysOutsideCurrentMonth
      slots={{
        openPickerIcon: CalendarSvg,
      }}
      err={errors.date}
      curValue={values.date}
      slotProps={{
        textField: {
          fullWidth: true,
          placeholder: "",
          error: !!errors.date,
        },
        toolbar: {
          hidden: true,
        },
        popper: {
          sx: PopperDateStyles,
        },
      }}
      format="DD.MM.YYYY"
      defaultValue={"dd.mm.yyyy"}
    />
  );
}
