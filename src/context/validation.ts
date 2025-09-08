import type { RegistrationState } from "./types";

export function isValidName(name: string): boolean {
    return name.length > 0;
}

export function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPassword(password: string): boolean {
    return password.length >= 6; 
}

export function validateStep(step: number, state: RegistrationState): boolean {
    if(step === 1) return isValidName(state.name);
    if(step === 2) return isValidEmail(state.email);
    if(step === 1) return isValidPassword(state.password);

    return false;
}