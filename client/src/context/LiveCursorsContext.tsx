import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { io, type Socket } from "socket.io-client";

import { createStore, StoreApi } from "zustand";

type TCursorContext = {
  socket: Socket;
};

export const CursorsContext = createContext<StoreApi<TCursorContext> | null>(
  null
);

const SERVER_URL = "localhost:8000";

export const LiveCursorsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const socket = useMemo(() => io(SERVER_URL), []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });
  }, [socket]);

  const [store] = useState(() =>
    createStore<TCursorContext>(() => {
      return {
        socket,
      };
    })
  );
  return (
    <CursorsContext.Provider value={store}>{children}</CursorsContext.Provider>
  );
};

export const useLiveCursor = () => {
  const context = useContext(CursorsContext);

  if (!context) {
    throw new Error("useLiveCursor must be wrapped inside LiveCursorsProvider");
  }
  return context;
};
