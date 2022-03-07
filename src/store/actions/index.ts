import { flag, shelter, formData } from "../../types.interface";

export const SWITCH_MONEY_BUTTON = (value: number) => {
  return { type: "SWITCH_MONEY_BUTTON", playload: value };
};

export const SWITCH_NUMBER_BUTTON = (value: number) => {
  return { type: "SWITCH_NUMBER_BUTTON", playload: value };
};

export const ACTIVATE_NUMBER_BUTTON = (value: number) => {
  return { type: "ACTIVATE_NUMBER_BUTTON", playload: value };
};

export const DEACTIVATE_NUMBER_BUTTON = (value: number) => {
  return { type: "DEACTIVATE_NUMBER_BUTTON", playload: value };
};

export const SET_NUMBER_VALUE = (value: number) => {
  return { type: "SET_NUMBER_VALUE", playload: value };
};

export const SWITCH_ACTION_BUTTON = (value: number) => {
  return { type: "SWITCH_ACTION_BUTTON", playload: value };
};

export const DEACTIVATE_BUTTONS = (value: number) => {
  return { type: "DEACTIVATE_BUTTONS", playload: value };
};

export const FILL_UP_FORMDATA = (data: formData) => {
  return { type: "FILL_UP_FORM_DATA", playload: data };
};

export const CHANGE_SHELTER = (data: shelter) => {
  return { type: "CHANGE_SHELTER", playload: data };
};

export const CHANGE_FLAG = (data: flag) => {
  return { type: "CHANGE_FLAG", playload: data };
};

export const SET_ACCESSIBLE_PAGES = (data: number) => {
  return { type: "SET_ACCESSIBLE_PAGES", playload: data };
};

export const SET_PREVIOUS_PAGE = (data: number) => {
  return { type: "SET_PREVIOUS_PAGE", playload: data };
};

export const SET_SLIDE_ACTION_TYPE = (data: string) => {
  return { type: "SET_SLIDE_ACTION_TYPE", playload: data };
};

export const RESET_ACTION = {
  type: "RESET",
};
