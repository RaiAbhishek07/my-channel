import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import { Video } from "lucide-react";

export default function Home() {
  const embeddedVideo = placeholderImages.find(p => p.id === 'embedded-systems-video');

  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
              Abhishek Rai
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Today's video on Embedded Systems is now live.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-3xl">
              {embeddedVideo && (
                <Card className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-96 w-full">
                      <Image
                          src={embeddedVideo.imageUrl}
                          alt={embeddedVideo.description}
                          fill
                          className="object-cover"
                          data-ai-hint={embeddedVideo.imageHint}
                      />
                  </div>
                  <CardHeader className="flex-row items-center gap-4">
                    <Video className="h-8 w-8 text-accent" />
                    <CardTitle className="font-headline">Introduction to Embedded Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A beginner-friendly introduction to the world of embedded systems, covering the basics of microcontrollers, sensors, and real-world applications.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
