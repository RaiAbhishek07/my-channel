
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <section className="flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
              Abhishek Rai
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore videos on technology and engineering.
            </p>
            <Button asChild size="lg">
              <Link href="/videos">
                Browse Videos <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
