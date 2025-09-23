// types
export type TCursorsCoordinates = {
  x: number;
  y: number;
};
export type TCursor = {
  userId: string;
  x: TCursorsCoordinates["x"];
  y: TCursorsCoordinates["y"];
  socketId: string;
  config: TCursorConfig;
};

export type TCursorConfig = {
  name: string;
  color: string;
};

// Store Types:
type TCursorConfigState = TCursorConfig;

type TCursorConfigStateActions = {
  setColor: (color: string) => void;
  setName: (name: string) => void;
};

export type TCursorConfigStore = TCursorConfigState & TCursorConfigStateActions;
