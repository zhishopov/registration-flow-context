import { useRegistration } from "./context/useRegistration";
import { EmailStep } from "./steps/EmailStep";
import NameStep from "./steps/NameStep";
import PasswordStep from "./steps/PasswordStep";

function App() {
  const { step, status, name, email } = useRegistration();

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center space-y-4">
          <h1 className="text-xl font-semibold">Registration complete!</h1>
          <div className="text-sm text-gray-700">
            <p>
              <span className="font-medium">Name:</span> {name || "—"}
            </p>
            <p>
              <span className="font-medium">Email:</span> {email || "—"}
            </p>
            <p className="text-gray-500 text-xs">(Password hidden)</p>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) return <NameStep></NameStep>;
  if (step === 2) return <EmailStep></EmailStep>;
  if (step === 3) return <PasswordStep></PasswordStep>;
}

export default App;
