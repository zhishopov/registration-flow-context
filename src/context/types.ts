export type RegistrationState = {
  name: string;
  email: string;
  password: string;
  step: number;
  status: "idle" | "success";
};
