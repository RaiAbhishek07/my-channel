
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import { Video, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function VideosPage() {
  const videos = placeholderImages.filter(p => p.id.includes('video'));

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Videos
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse through videos on technology and engineering.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search videos..." className="pl-10" />
            </div>
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
    </div>
  );
}
