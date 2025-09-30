
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import { Video, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

type Video = {
  id: string;
  href: string;
  title: string;
  description: string;
  image: {
    imageUrl: string;
    description: string;
    imageHint: string;
  };
};

export default function VideosPage() {
  const allVideos = placeholderImages.filter(p => p.id.includes('video'));

  const videos: Video[] = [
    {
      id: 'embedded-systems-video',
      href: '/videos/embedded-systems',
      title: 'Introduction to Embedded Systems',
      description: 'A beginner-friendly introduction to the world of embedded systems, covering the basics of microcontrollers, sensors, and real-world applications.',
      image: allVideos.find(v => v.id === 'embedded-systems-video')!,
    },
    {
      id: 'ir-sensor-video',
      href: '/videos/sensors/ir-obstacle-avoidance',
      title: 'IR Obstacle Avoidance Sensor',
      description: 'Learn how this sensor emits and detects infrared light to avoid obstacles. Perfect for robotics and automation.',
      image: allVideos.find(v => v.id === 'ir-sensor-video')!,
    },
    {
      id: 'ldr-sensor-video',
      href: '/videos/sensors/ldr',
      title: 'LDR (Light Dependent Resistor)',
      description: 'Discover how an LDR works by changing resistance based on light, ideal for automatic streetlights and solar trackers.',
      image: allVideos.find(v => v.id === 'ldr-sensor-video')!,
    },
    {
      id: 'touch-sensor-video',
      href: '/videos/sensors/capacitive-touch',
      title: 'Capacitive Touch Sensor (TTP223)',
      description: 'Explore how capacitive sensors detect human touch to create modern buttons and interactive devices.',
      image: allVideos.find(v => v.id === 'touch-sensor-video')!,
    },
    {
      id: 'ultrasonic-sensor-video',
      href: '/videos/sensors/ultrasonic-distance',
      title: 'Ultrasonic Distance Sensor (HC-SR04)',
      description: 'Understand how ultrasonic waves measure distance with high accuracy, used in robotics and parking sensors.',
      image: allVideos.find(v => v.id === 'ultrasonic-sensor-video')!,
    }
  ];

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
            <Link href={video.href} key={video.id} className="block">
              <Card className="group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary bg-card">
                <div className="grid md:grid-cols-3">
                  <div className="relative h-48 md:h-full w-full">
                      <Image
                          src={video.image.imageUrl}
                          alt={video.image.description}
                          fill
                          className="object-cover"
                          data-ai-hint={video.image.imageHint}
                      />
                  </div>
                  <div className="md:col-span-2">
                    <CardHeader className="flex-row items-start gap-4">
                      <Video className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <CardTitle className="font-headline text-xl mb-1">
                          {video.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {video.description}
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
