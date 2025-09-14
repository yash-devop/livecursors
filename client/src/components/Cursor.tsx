import { useEffect, useRef } from "react";
import { v4 as useUuid } from "uuid";
import { TCursor } from "../types/types";
export const Cursor = ({ cursor }: { cursor: TCursor }) => {
  const uuidRef = useRef(useUuid());
  const cursorRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (cursorRef.current) {
      const node = cursorRef.current;
      node.style.top = cursor.y + "px";
      node.style.left = cursor.x + "px";
    }
  }, [cursor.x, cursor.y]);
  const id = uuidRef.current;
  const cursorId = `cursor-${id}`;

  return (
    <>
      <span ref={cursorRef} id={cursorId} className="absolute bg-blue-400">
        IM CURSOR {cursor.x} {cursor.y}
      </span>
    </>
  );
};
