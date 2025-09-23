import { CursorEditor } from "./components/CursorEditor";
import { CursorPanel } from "./components/CursorPanel";

function App() {
  return (
    <>
      <div className="min-h-screen h-full lg:flex items-center">
        <CursorPanel />
        <CursorEditor />
      </div>
    </>
  );
}

export default App;
