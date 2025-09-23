import { useEffect, useRef } from "react";
import { v4 as useUuid } from "uuid";
import { TCursor } from "../types/types";
import { useCursorConfigStore } from "@/store/store";
export const Cursor = ({ cursor }: { cursor: TCursor }) => {
  const uuidRef = useRef(useUuid());
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const { color, name } = useCursorConfigStore((state) => state);

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
      <div ref={cursorRef} id={cursorId} className="absolute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          style={{
            stroke: `color-mix(in srgb, ${color} 80%, transparent)`,
            fill: `color-mix(in srgb, ${color} 30%, transparent)`,
          }}
          className="-rotate-12 "
        >
          <path
            stroke-width="2"
            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
          ></path>
        </svg>
        <div
          style={{
            color,
            backgroundColor: `color-mix(in srgb, ${color} 30%, transparent)`,
            borderColor: `color-mix(in srgb, ${color} 80%, transparent)`,
          }}
          className={`absolute left-5 top-5  border whitespace-nowrap rounded-lg max-w-[150px] h-fit px-2 tracking-tight leading-5 pb-0.5 text-sm text-pink-500_ font-medium truncate`}
        >
          {name}
        </div>
      </div>
    </>
  );
};
