import { useEffect, useState } from "react";
import { useLiveCursor } from "../context/LiveCursorsContext";
import { TCursor } from "../types/types";
import { SocketEvents } from "../constants/event";

export const useOthers = () => {
  const liveCursor = useLiveCursor();

  const socket = liveCursor.getState().socket;
  const [others, setOthers] = useState<TCursor[]>([]);

  useEffect(() => {
    const handleOthers = (data: TCursor[]) => {
      setOthers(data);
    };
    socket.on(SocketEvents.CURSOR.OTHERS_CURSOR, handleOthers);
    return () => {
      socket.off(SocketEvents.CURSOR.OTHERS_CURSOR, handleOthers); // cleanup
    };
  }, [socket]);

  return {
    others,
  };
};
