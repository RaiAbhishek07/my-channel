import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import { Video, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const videos = placeholderImages.filter(p => p.id.includes('video'));

  return (
    <div className="flex flex-col bg-background text-foreground">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
              Abhishek Rai
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore videos on technology and engineering.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {videos.map((video) => (
              <Link href="/videos/embedded-systems" key={video.id} className="block">
                <Card className="group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary bg-card">
                  <div className="grid md:grid-cols-3">
                    <div className="relative h-48 md:h-full w-full">
                        <Image
                            src={video.imageUrl}
                            alt={video.description}
                            fill
                            className="object-cover"
                            data-ai-hint={video.imageHint}
                        />
                    </div>
                    <div className="md:col-span-2">
                      <CardHeader className="flex-row items-start gap-4">
                        <Video className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <CardTitle className="font-headline text-xl mb-1">
                            {video.id === 'embedded-systems-video' ? 'Introduction to Embedded Systems' : video.description}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm">
                            {video.id === 'embedded-systems-video' ? 'A beginner-friendly introduction to the world of embedded systems, covering the basics of microcontrollers, sensors, and real-world applications.' : ''}
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                          <div className="flex items-center justify-end text-sm font-medium text-primary">
                              Watch Video
                              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
