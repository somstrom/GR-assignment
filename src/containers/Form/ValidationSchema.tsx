import * as yup from "yup";

export const validationSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^$|^[+]?[()/0-9. -]{11}$/, "Nesprávny formát čísla"),
  firstname: yup
    .string()
    .matches(
      /^$|^[a-žA-Ž]+$/,
      "Meno nemôže obsahovať špeciálne znaky ani čísla"
    )
    .matches(
      /^$|[a-žA-Ž0-9]{2,20}$/,
      "Meno nemôže byť kratšie ako 2 a dlhšie ako 20 znakov"
    ),

  lastname: yup
    .string()
    .required("Priezvisko je povinné pole")
    .matches(
      /^$|^[a-žA-Ž]+$/,
      "Priezvisko nemôže obsahovať špeciálne znaky ani čísla"
    )
    .matches(
      /^$|[a-žA-Ž0-9]{3,30}$/,
      "Priezvisko nemôže byť kratšie ako 2 a dlhšie ako 20 znakov"
    ),
  email: yup
    .string()
    .required("E-mail je povinné pole")
    .email("Nesprávny formát e-mailu"),
});
