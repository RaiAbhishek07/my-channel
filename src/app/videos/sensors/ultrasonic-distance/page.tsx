
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, CircuitBoard, Ruler, Bot } from "lucide-react";

export default function UltrasonicSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Ultrasonic Distance Sensor (HC-SR04)
                    </h1>
                </div>

                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                                <Waves className="text-accent" />
                                Working Principle
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground space-y-4">
                            <p>The HC-SR04 sensor works like sonar. It sends out a high-frequency sound pulse (ultrasonic wave) from its transmitter. This wave travels, hits an object, and reflects back to the sensor's receiver. The sensor measures the time it took for the wave to travel back and forth. Since the speed of sound is known, it can calculate the distance to the object.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                                <Ruler className="text-accent" />
                                Key Features
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li><strong>Range:</strong> Can measure distances from approximately 2 cm to 400 cm (4 meters).</li>
                                <li><strong>Accuracy:</strong> Provides a resolution of about 3 mm under ideal conditions.</li>
                                <li><strong>Non-Contact Measurement:</strong> Measures distance without touching the object.</li>
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
                           <p>Using the HC-SR04 with an Arduino requires two digital pins:</p>
                           <ul className="list-disc list-inside space-y-2">
                                <li><strong className="text-foreground">VCC:</strong> Connect to the 5V pin.</li>
                                <li><strong className="text-foreground">GND:</strong> Connect to the GND pin.</li>
                                <li><strong className="text-foreground">Trig (Trigger) Pin:</strong> Connect to a digital output pin. You send a short pulse to this pin to start the measurement.</li>
                                <li><strong className="text-foreground">Echo Pin:</strong> Connect to a digital input pin. This pin goes HIGH for the duration of the echo's travel time. You measure this duration using `pulseIn()`.</li>
                           </ul>
                           <p className="mt-2">Distance is calculated as: `(Duration * Speed of Sound) / 2`</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                                <Bot className="text-accent" />
                                Common Applications
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li><strong>Robotics:</strong> For navigation and obstacle avoidance.</li>
                                <li><strong>Parking Sensors:</strong> Used in cars to detect how close they are to other objects.</li>
                                <li><strong>Distance Measurement Tools:</strong> For quick and easy distance readings.</li>
                                <li><strong>Liquid Level Sensing:</strong> To measure the level of fluid in a tank without contact.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    </div>
  );
}
