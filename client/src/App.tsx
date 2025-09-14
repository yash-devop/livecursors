import { useRef } from "react";
import { v4 as useUuid } from "uuid";
import { Cursor } from "./components/Cursor";
import { useOthers } from "./hooks/useOthers";
import { useUpdatePosition } from "./hooks/useUpdatePosition";

function App() {
  const { others } = useOthers();
  const { updatePosition } = useUpdatePosition();

  const uuidRef = useRef(useUuid());
  const id = uuidRef.current;
  const userId = `cursor-${id}`;
  return (
    <>
      <div
        onPointerMove={(e) => {
          updatePosition({
            x: Math.floor(e.clientX),
            y: Math.floor(e.clientY),
            userId,
          });
        }}
        className="w-full min-w-dvh min-h-dvh h-full bg-red-400 overflow-hidden shrink-0 relative"
      >
        {others
          ? others.map((cursor) => (
              <Cursor key={cursor.userId} cursor={cursor} /> // showing other's cursors.
            ))
          : null}
      </div>
    </>
  );
}

export default App;
