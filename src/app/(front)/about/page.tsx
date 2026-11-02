import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

// http://localhost:3000/about
export default function AboutPage() {
  return (
    <div>
      <p className="text-sky-500 mb-4">About Us</p>
      <p>API Key: {process.env.API_KEY}</p>
      <Spinner />
      <hr />
      <Button variant="outline">
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
}