import { useState } from "react";
import { useRegistration } from "../context/useRegistration";
import StepLayout from "../components/StepLayout";

export default function PasswordStep() {
  const { password, updateField, back, submit, canSubmit } = useRegistration();

  const [show, setShow] = useState(false);

  return (
    <StepLayout
      name="Step 3 — Create a password"
      footer={
        <div className="flex justify-between">
          <button
            onClick={back}
            className="px-4 py-2 rounded-lg border border-gray-300"
          >
            Back
          </button>
          <button
            disabled={!canSubmit}
            onClick={submit}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-40"
          >
            Submit
          </button>
        </div>
      }
    >
      <label className="block">
        <span className="text-sm text-gray-700">Password</span>
        <div className="mt-1 flex">
          <input
            autoFocus
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => updateField("password", e.target.value)}
            placeholder="At least 8 characters"
            className="w-full rounded-l-lg border border-blue-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue"
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="rounded-r-lg border border-l-0 border-gray-300 px-3 text-sm"
            aria-label="Toggle password visibility"
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>
      </label>

      <ul className="text-xs text-gray-500 list-disc ml-5">
        <li>Use at least 6 characters</li>
      </ul>
    </StepLayout>
  );
}
