import { createFileRoute } from "@tanstack/react-router";
import { App } from "@/components/App";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="h-[100dvh] overflow-hidden">
      <App />
    </div>
  );
}
