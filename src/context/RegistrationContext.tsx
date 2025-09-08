import type { RegistrationState } from "./types";
import { isValidPassword } from "./validation";

const TOTAL_STEPS = 3 as const;


type Action =
  | { type: "UPDATE_FIELD"; field: "name" | "email" | "password"; value: string }
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "SUBMIT" }
  | { type: "RESET" };

  const initialState: RegistrationState = {
    name: "",
    email: "",
    password: "",
    step: 1,
    status: "idle"
  };

  function registrationReducer(state: RegistrationState, action: Action): RegistrationState {
    if(action.type === "UPDATE_FIELD") {
        return {...state, [action.field]: action.value};
    } else if(action.type === "NEXT") {
        return { ...state, step: Math.min(state.step + 1, TOTAL_STEPS) };
    } else if(action.type === "BACK") {
        return {...state, step: Math.max(state.step - 1, 1)};
    } else if(action.type === "SUBMIT") {
        if (state.step === TOTAL_STEPS && isValidPassword(state.password)) {
            return { ...state, status: "success" };
          }
          return state;
    } else if(action.type === "RESET") {
        return {...initialState};
    } else {
        return state;
    }
  }