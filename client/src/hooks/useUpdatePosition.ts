import { SocketEvents } from "../constants/event";
import { useLiveCursor } from "../context/LiveCursorsContext";
import { TCursor } from "../types/types";

export const useUpdatePosition = () => {
  const liveCursor = useLiveCursor();
  const socket = liveCursor.getState().socket;
  function updatePosition(coords: Omit<TCursor, "socketId">) {
    socket.emit(SocketEvents.CURSOR.MOVE, {
      ...coords,
      socketId: socket.id,
    });
  }

  return {
    updatePosition,
  };
};
