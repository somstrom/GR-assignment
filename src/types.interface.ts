export type shelter = {
  id: number;
  name: string;
};

export type button = {
  value: number;
  isActive: boolean;
  type: string;
};

export type action = {
  paragraph: string;
  isActive: boolean;
  src: string;
  type: string;
  id: number;
};

export type flag = {
  src: string;
  prefix: string;
  alt: string;
};

export type formData = {
  firstname?: string;
  lastname: string;
  email: string;
  phone?: string;
};

export type actionButton = {
  paragraph: string;
  isActive: boolean;
  src: string;
  type: string;
  id: number;
};
