import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstname: yup
    .string()
    .notRequired()
    .min(2, "Meno musí mať aspoň 2 znaky")
    .max(20, "Meno môže obsahovať najviac 20 znakov")
    .matches(/^[a-zA-Z]+$/, "Meno nemôže obsahovať čísla ani špeciálne znaky"),
  lastname: yup
    .string()
    .required("Priezvisko je povinné pole")
    .min(3, "Priezvisko musí mať aspoň 2 znaky")
    .max(30, "Priezvisko môže obsahovať najviac 30 znakov")
    .matches(
      /^[a-zA-Z]+$/,
      "Priezvisko nemôže obsahovať čísla ani špeciálne znaky"
    ),
  email: yup.string().email("Zle zadaný email"),
});
