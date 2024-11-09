import { Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Home() {
  return (
    <div>
      <Textarea className="text-slate-50" placeholder="Type your message here." />
      <Button className="mt-5 bg-gray-600">Send message</Button>
      <Alert className="bg-gray-300 mt-5">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>

    </div>

  );
}
