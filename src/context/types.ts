export type RegistrationState = {
    title: string;
    email: string;
    password: string;
    step: number;
    status: "idle" | "success"
}