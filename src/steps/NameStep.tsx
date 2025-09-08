import StepLayout from "../components/StepLayout";
import { useRegistration } from "../context/useRegistration";

export default function Stepname() {
  const { name, updateField, next, canMoveNext } = useRegistration();

  return (
    <StepLayout
      name="Step 1 - What's your name?"
      footer={
        <button
          disabled={!canMoveNext}
          onClick={next}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-40"
        >
          Next
        </button>
      }
    >
      <label className="block">
        <span className="text-sm text-gray-700">Name</span>
        <input
          autoFocus
          type="text"
          value={name}
          onChange={(e) => updateField("name", e.target.value)}
          placeholder="Your name..."
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
        />
      </label>
    </StepLayout>
  );
}
