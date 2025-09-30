
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Moon, CircuitBoard, Gauge } from "lucide-react";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

export default function LDRSensorPage() {
  const sensorImage = placeholderImages.find(p => p.id === 'ldr-sensor-video');

  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        LDR (Light Dependent Resistor)
                    </h1>
                </div>

                {sensorImage && (
                  <div className="relative h-96 w-full rounded-lg overflow-hidden mb-12">
                      <Image
                          src={sensorImage.imageUrl}
                          alt={sensorImage.description}
                          fill
                          className="object-cover"
                          data-ai-hint={sensorImage.imageHint}
                      />
                  </div>
                )}

                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                                <Sun className="text-accent" />
                                Working Principle
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground space-y-4">
                            <p>An LDR is a variable resistor whose resistance changes with the intensity of light that falls on it. Its resistance decreases when the light is stronger and increases when it's darker.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                                <Gauge className="text-accent" />
                                Key Features
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li><strong>Type:</strong> It is an analog sensor.</li>
                                <li><strong>Simplicity:</strong> Very simple to use and inexpensive.</li>
                                <li><strong>Sensitivity:</strong> Responds to a wide spectrum of light.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                                <CircuitBoard className="text-accent" />
                                Arduino Integration
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground space-y-4">
                           <p>To use an LDR with an Arduino, you typically create a voltage divider circuit with a fixed resistor. The changing voltage is then read by one of Arduino's analog pins.</p>
                           <ul className="list-disc list-inside space-y-2">
                               <li>Connect one leg of the LDR to 5V.</li>
                               <li>Connect the other leg to an analog pin (e.g., A0) and also to a fixed resistor (e.g., 10kΩ).</li>
                               <li>Connect the other end of the fixed resistor to GND.</li>
                               <li>Use `analogRead(A0)` to get a value representing the light level.</li>
                           </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                                <Moon className="text-accent" />
                                Common Applications
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li><strong>Automatic Streetlights:</strong> Turn on lights when it gets dark.</li>
                                <li><strong>Solar Trackers:</strong> To orient solar panels towards the brightest light source.</li>
                                <li><strong>Light Meters:</strong> To measure ambient light intensity.</li>
                                <li><strong>Camera Exposure Control:</strong> To automatically adjust shutter speed.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    </div>
  );
}
