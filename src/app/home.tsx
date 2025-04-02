import { Button } from "@mui/material";

export function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-2xl font-bold mb-4">Next JS MUI Quickstack</h1>
      <div className="flex flex-col gap-4 w-fit">
        <Button>Hello World! 1</Button>
        <Button>Hello World! 2</Button>
      </div>
    </div>
  );
}
