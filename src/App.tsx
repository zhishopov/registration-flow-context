import StepLayout from "./components/StepLayout"

function App() {


  return (
    <>
      <StepLayout title="Registration - Step 1" footer={
        <button className="px-4 py-2 rounded-lg bg-blue-400 text-white">
          Next
        </button>
      }
      >
         <p className="text-sm text-blue-500">Placeholder Text</p> 
         <label className="block">
        <span className="text-sm text-gray-700">Input</span>
        <input
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          placeholder="Type something…"
        />
      </label>
      </StepLayout>
    </>
  )
}

export default App
