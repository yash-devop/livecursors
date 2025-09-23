import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useCursorConfigStore } from "@/store/store";
import { generateRandomColor } from "@/utils/utils";
import { Button } from "./ui/button";
export const CursorEditor = () => {
  const { color, setColor, setName } = useCursorConfigStore((state) => state);
  const presets = [
    { id: 1, color: "#FF6B6B" }, // Coral Red
    { id: 2, color: "#4ECDC4" }, // Aqua Mint
    { id: 3, color: "#FFD93D" }, // Sunny Yellow
    { id: 4, color: "#6A4C93" }, // Purple
    { id: 5, color: "#1A535C" }, // Deep Teal
    { id: 6, color: "#FF9F1C" }, // Orange
    { id: 7, color: "#2EC4B6" }, // Turquoise
    { id: 8, color: "#FF70A6" }, // Pink
    { id: 9, color: "#9B5DE5" }, // Violet
    { id: 10, color: "#00BBF9" }, // Sky Blue
    { id: 11, color: "#06D6A0" }, // Bright Mint
    { id: 12, color: "#EF476F" }, // Rose Red
    { id: 13, color: "#118AB2" }, // Ocean Blue
    { id: 14, color: "#FFD166" }, // Pastel Yellow
    { id: 15, color: "#8338EC" }, // Bright Purple
    { id: 16, color: "#FB5607" }, // Vivid Orange
    { id: 17, color: "#FFBE0B" }, // Warm Yellow
    { id: 18, color: "#3A86FF" }, // Bright Blue
    { id: 19, color: "#FF006E" }, // Hot Pink
  ];

  const handleRandomColor = () => {
    const randomColor = generateRandomColor();
    setColor(randomColor);
  };

  const handleBroadcast = () => {};

  return (
    <>
      <div className="border-l border-neutral-400 bg-neutral-200 w-1/4 h-full min-h-screen">
        <div className="w-full h-full p-3 tracking-tight">
          <h2 className="font-medium">Customize your cursor</h2>
          <div className="w-full h-[230px] border border-neutral-400 bg-white rounded-lg mt-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 24 24"
              style={{
                fill: color,
                strokeOpacity: "30%",
                stroke: color,
              }}
              className="-rotate-12"
            >
              <path
                stroke-width="2"
                d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
              ></path>
            </svg>
          </div>

          <div className="pt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="email">Your display name</Label>
              <Input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value.trim())}
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium">Presets</span>
              <div className="flex items-center justify-start flex-wrap w-full max-w-sm gap-1">
                {presets.map((preset) => {
                  const isActive = preset.color === color;
                  return (
                    <div
                      onClick={() => setColor(preset.color)}
                      className={cn(
                        `border border-transparent hover:border-neutral-500 rounded-md p-1 cursor-pointer `,
                        isActive && "border-neutral-500"
                      )}
                    >
                      <div
                        style={{ backgroundColor: preset.color }}
                        className="size-8 rounded-full relative flex items-center justify-center"
                      >
                        {isActive && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="absolute text-white"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium">Generate random color</span>
              <Button
                variant={"outline"}
                className="py-5 cursor-pointer"
                onClick={handleRandomColor}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
                  <path d="m14 7 3 3" />
                  <path d="M5 6v4" />
                  <path d="M19 14v4" />
                  <path d="M10 2v2" />
                  <path d="M7 8H3" />
                  <path d="M21 16h-4" />
                  <path d="M11 3H9" />
                </svg>
                <span className="mb-0.5">Generate</span>
              </Button>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium">Let's broadcast</span>
              <Button className="py-5 cursor-pointer" onClick={handleBroadcast}>
                Broadcast now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
