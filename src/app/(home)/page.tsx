import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gamepad2 } from "lucide-react";

export default function Home() {
  return (
    <section className="md:p-18 flex h-screen flex-col items-center justify-center gap-8 p-6">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-extrabold sm:text-5xl lg:text-6xl">
          Tags Playground
        </h2>
        <p className="pt-4 uppercase">Stackoverflow</p>
        <Gamepad2 className="text-brand" size={56}  />
      </div>
      <Card className="w-[285px] sm:w-[350px]">
        <CardHeader className="gap-2">
          <CardTitle>
            Table of topics with the number of related questions.
          </CardTitle>
          <CardDescription>
            This method returns a list of tags. The sorts accepted by this
            method operate on the following fields of the tag object.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="default" asChild>
            <Link href="/tags">Get Tags</Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
