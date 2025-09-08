import { createContext } from "react";
import type { RegistrationState } from "./types";

export type Field = "name" | "email" | "password";

export type RegistrationContextSignature = RegistrationState & {
  TOTAL_STEPS: number;
  updateField: (field: Field, value: string) => void;
  canMoveNext: boolean;
  canSubmit: boolean;
  next: () => void;
  back: () => void;
  submit: () => void;
  reset: () => void;
};

export const RegistrationContext = createContext<
  RegistrationContextSignature | undefined
>(undefined);

export const TOTAL_STEPS = 3 as const;
