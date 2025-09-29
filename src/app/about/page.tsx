import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  const creatorImage = placeholderImages.find(p => p.id === 'about-creator');
  const missionImage = placeholderImages.find(p => p.id === 'about-mission');

  const values = [
    "Quality Content",
    "Diverse Perspectives",
    "Actionable Insights",
    "Community Engagement",
  ];

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">About Abhishek Rai</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are dedicated to providing high-quality, insightful content across various platforms to help you learn, grow, and succeed.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-headline font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              Our mission is to be a trusted source of knowledge and inspiration. We believe in the power of sharing information and fostering a community of learners and creators. We strive to deliver content that is not only informative but also engaging and accessible to everyone, regardless of their preferred medium.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {values.map(value => (
                <div key={value} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary"/>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
          {missionImage && (
            <div className="order-1 md:order-2">
              <Card className="overflow-hidden shadow-lg">
                <div className="relative aspect-video">
                  <Image
                    src={missionImage.imageUrl}
                    alt={missionImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={missionImage.imageHint}
                  />
                </div>
              </Card>
            </div>
          )}
        </section>

        <section className="bg-muted/50 rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
                {creatorImage && (
                    <div className="md:col-span-1 flex justify-center">
                        <Image
                        src={creatorImage.imageUrl}
                        alt={creatorImage.description}
                        width={250}
                        height={250}
                        className="rounded-full object-cover border-4 border-card shadow-md"
                        data-ai-hint={creatorImage.imageHint}
                        />
                    </div>
                )}
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-headline font-bold mb-2">Meet the Creator</h2>
                    <p className="text-lg font-medium text-primary mb-4">Abhishek Rai</p>
                    <p className="text-muted-foreground">
                        Abhishek is a passionate content creator with over a decade of experience in digital media. With a background in marketing and technology, Abhishek started this channel to create a single point of reference for high-quality content that spans across different formats like videos, podcasts, and articles. When not creating content, Abhishek enjoys hiking and exploring new technologies.
                    </p>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
