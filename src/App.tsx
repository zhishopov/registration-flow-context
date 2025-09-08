import { useRegistration } from "./context/useRegistration";
import { EmailStep } from "./steps/EmailStep";
import NameStep from "./steps/NameStep";

function App() {
  const { step, status } = useRegistration();

  if (status === "success") {
    return <div className="p-10 text-center">Registration complete!</div>;
  }

  if (step === 1) return <NameStep></NameStep>;
  if (step === 2) return <EmailStep></EmailStep>;
}

export default App;
