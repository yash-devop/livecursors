export type TCursorsCoordinates = {
  x: number;
  y: number;
};
export type TCursor = {
  userId: string;
  x: TCursorsCoordinates["x"];
  y: TCursorsCoordinates["y"];
  socketId: string;
};
