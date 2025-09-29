import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Video, PenSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { placeholderImages } from "@/lib/placeholder-images";

const featuredTopics = [
  {
    icon: <Video className="h-8 w-8 text-accent" />,
    title: "Video Content",
    description: "Engaging video tutorials and streams on various topics.",
    imageId: 'home-video-content',
  },
  {
    icon: <Mic className="h-8 w-8 text-accent" />,
    title: "Podcasts",
    description: "In-depth discussions and interviews with industry experts.",
    imageId: 'home-podcasts',
  },
  {
    icon: <PenSquare className="h-8 w-8 text-accent" />,
    title: "Blog Posts",
    description: "Well-researched articles and guides to boost your knowledge.",
    imageId: 'home-blog-posts',
  },
];

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === 'home-hero');

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-center text-primary-foreground overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container mx-auto px-4 md:px-6 z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
              Welcome to OmniChannel Hub
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Your central source for insightful content across multiple platforms. Explore, learn, and grow with us.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/about">Learn More</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="#topics">Explore Topics</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="topics" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Featured Topics</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We cover a wide range of subjects. Here are some of our favorites.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTopics.map((topic) => {
                const topicImage = placeholderImages.find(p => p.id === topic.imageId);
                return (
                  <Card key={topic.title} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    {topicImage && (
                        <div className="relative h-48 w-full">
                            <Image
                                src={topicImage.imageUrl}
                                alt={topicImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={topicImage.imageHint}
                            />
                        </div>
                    )}
                    <CardHeader className="flex-row items-center gap-4">
                      {topic.icon}
                      <CardTitle className="font-headline">{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{topic.description}</p>
                    </CardContent>
                  </Card>
                );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
