import { SocketEvents } from "../constants/event";
import { useLiveCursor } from "../context/LiveCursorsContext";
import { TCursor } from "../types/types";

export const useUpdatePosition = () => {
  const liveCursor = useLiveCursor();
  const socket = liveCursor.getState().socket;

  function updatePosition(coords: Omit<TCursor, "socketId">) {
    // Remove socketId from the emitted data since server knows it
    socket.emit(SocketEvents.CURSOR.MOVE, {
      userId: coords.userId,
      x: coords.x,
      y: coords.y,
      config: coords.config,
    });
  }

  return {
    updatePosition,
  };
};
