import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
export default function Home() {
  return (
    <div>
      <Button variant="outline">Click me!</Button>
      <br></br>
      <br></br>
      <Button disabled>
        <Loader2 className="mr-2 h-4 animate-spin" />
        Please Wait...
      </Button>
    </div>
  );
}
