import { useEffect, useState } from "react";
import { useLiveCursor } from "../context/LiveCursorsContext";
import { TCursor } from "../types/types";
import { SocketEvents } from "../constants/event";

export const useOthers = () => {
  const liveCursor = useLiveCursor();
  const socket = liveCursor.getState().socket;
  const [others, setOthers] = useState<TCursor[]>([]);

  useEffect(() => {
    const handleOthers = (data: Record<string, TCursor>) => {
      console.log("Received others data:", data);
      console.log("Current socket ID:", socket.id);

      const normalizedData = Object.entries(data)
        .filter(([socketId, _]) => socketId !== socket.id)
        .map(([_, cursor]) => cursor);

      console.log("Filtered others:", normalizedData);
      setOthers(normalizedData);
    };

    socket.on(SocketEvents.CURSOR.OTHERS_CURSOR, handleOthers);

    return () => {
      socket.off(SocketEvents.CURSOR.OTHERS_CURSOR, handleOthers);
    };
  }, [socket]);

  return {
    others,
  };
};
