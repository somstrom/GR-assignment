export const switchMoneyButtons = (value: number) => {
  return { type: "SWITCH_MONEY_BUTTON", playload: value };
};

export const switchActionButtons = (value: number) => {
  return { type: "SWITCH_ACTION_BUTTON", playload: value };
};

type formData = {
  firstname?: string;
  lastname: string;
  email?: string;
  number?: number;
};

export const fillUpFormData = (data: formData) => {
  return { type: "FILL_UP_FORM_DATA", playload: data };
};

type shelter = {
  id: number;
  name: string;
};

export const changeShelter = (data: shelter) => {
  return { type: "CHANGE_SHELTER", playload: data };
};

type flag = {
  src: string;
  prefix: string;
  alt: string;
};

export const setActiveFlag = (data: flag) => {
  return { type: "CHANGE_FLAG", playload: data };
};

export const SET_ACCESSIBLE_PAGES = (data: boolean[]) => {
  return { type: "SET_ACCESSIBLE_PAGES", playload: data };
};

export const RESET_ACTION = {
  type: "RESET"
}
