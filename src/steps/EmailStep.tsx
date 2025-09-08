import StepLayout from "../components/StepLayout";
import { useRegistration } from "../context/useRegistration";

export function EmailStep() {
  const { email, updateField, next, back, canMoveNext } = useRegistration();

  return (
    <StepLayout
      name="Step 2 — What's your email?"
      footer={
        <div className="flex justify-between">
          <button
            onClick={back}
            className="px-4 py-2 rounded-lg border border-gray-300"
          >
            Back
          </button>
          <button
            disabled={!canMoveNext}
            onClick={next}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-40"
          >
            Next
          </button>
        </div>
      }
    >
      <label className="block">
        <span className="text-sm text-gray-700">Email</span>
        <input
          autoFocus
          type="email"
          value={email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="you@example.com"
          className="mt-1 w-full rounded-lg border border-blue-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue"
        />
      </label>
      <p className="text-xs text-gray-500">
        We'll only use this to create your account.
      </p>
    </StepLayout>
  );
}
