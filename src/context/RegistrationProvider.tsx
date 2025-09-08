import React, { useState } from "react";
import type { RegistrationState } from "./types";
import { isValidPassword, validateStep } from "./validation";
import {
  RegistrationContext,
  TOTAL_STEPS,
  type Field,
  type RegistrationContextSignature,
} from "./RegistrationContext";

export function RegistrationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<RegistrationState>({
    name: "",
    email: "",
    password: "",
    step: 1,
    status: "idle",
  });

  const canMoveNext = validateStep(state.step, state);
  const isLastStep = state.step === TOTAL_STEPS;
  const canSubmit = isLastStep && isValidPassword(state.password);

  function updateField(field: Field, value: string) {
    setState({ ...state, [field]: value });
  }

  function next() {
    if (!canMoveNext) return;
    const newStep = state.step + 1;
    setState({ ...state, step: newStep > TOTAL_STEPS ? TOTAL_STEPS : newStep });
  }
  function back() {
    const newStep = state.step - 1;
    setState({ ...state, step: newStep < 1 ? 1 : newStep });
  }

  function submit() {
    if (!canSubmit) return;
    setState({ ...state, status: "success" });
  }

  function reset() {
    setState({
      name: "",
      email: "",
      password: "",
      step: 1,
      status: "idle",
    });
  }

  const value: RegistrationContextSignature = {
    ...state,
    TOTAL_STEPS,
    updateField,
    canMoveNext,
    canSubmit,
    next,
    back,
    submit,
    reset,
  };

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
}
