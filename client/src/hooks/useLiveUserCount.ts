import { useEffect, useState } from "react";
import { useLiveCursor } from "../context/LiveCursorsContext";

export const useLiveUserCount = () => {
  const liveCursor = useLiveCursor();
  const { socket } = liveCursor.getState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleCount = (count: number) => {
      console.log("Live users are: ", count);
      setCount(count);
    };
    socket.on("live_users_count", handleCount);

    return () => {
      socket.off("live_users_count", handleCount);
    };
  }, [socket]);

  return {
    count,
  };
};
