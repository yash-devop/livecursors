export const SocketEvents = {
  CURSOR: {
    MOVE: "cursor_move",
    OTHERS_CURSOR: "cursor_others_move",
  },
} as const;

// right now , this is not built in turborepo... so please try to sync server socket events.ts and this one.
