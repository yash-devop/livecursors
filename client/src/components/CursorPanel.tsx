import { useLiveUserCount } from "@/hooks/useLiveUserCount";
import { useOthers } from "@/hooks/useOthers";
import { useUpdatePosition } from "@/hooks/useUpdatePosition";
import { useCursorConfigStore } from "@/store/store";
import { useRef } from "react";
import { v4 as useUuid } from "uuid";
import { Cursor } from "./Cursor";

export const CursorPanel = () => {
  const { others } = useOthers();
  const { updatePosition } = useUpdatePosition();
  const liveUsersCount = useLiveUserCount();
  const { color, name } = useCursorConfigStore((state) => state);

  const uuidRef = useRef(useUuid());
  const id = uuidRef.current;
  const userId = `cursor-${id}`;

  console.log("others", others);
  return (
    <>
      <div
        onPointerMove={(e) => {
          updatePosition({
            x: Math.floor(e.clientX),
            y: Math.floor(e.clientY),
            userId,
            config: {
              color,
              name,
            },
          });
        }}
        className="w-3/4 min-w-dvh min-h-dvh h-full overflow-hidden shrink-0 relative"
      >
        <span>LIVE USERS {liveUsersCount.count}</span>
        {others
          ? others.map((cursor) => (
              <Cursor key={cursor.userId} cursor={cursor} /> // showing other's cursors.
            ))
          : null}
      </div>
    </>
  );
};
