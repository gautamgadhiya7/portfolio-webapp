import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-4">
      <Button>View Projects</Button>

      <Button variant="outline">
        Contact Me
      </Button>

      <Button variant="secondary">
        Download Resume
      </Button>
    </main>
  );
}