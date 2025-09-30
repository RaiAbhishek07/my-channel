
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
                     <p className="text-lg text-muted-foreground">
                        How do cars know when they're getting too close to a wall while parking? They use the same technology as bats and submarines: echolocation. The HC-SR04 sensor brings this power to your projects.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Waves className="text-accent" />
                            How It Works: The Three-Step Process
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>This sensor measures distance by sending out a sound wave and listening for the echo.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection (Send):</strong> You send a short pulse to the "Trig" (Trigger) pin. This causes the sensor to transmit a burst of high-frequency ultrasonic sound waves.</li>
                                <li><strong>Conversion (Listen):</strong> The sensor then listens for the echo of these waves. When it detects the echo, its "Echo" pin goes HIGH. The Echo pin stays HIGH for the exact amount of time it took for the sound to travel to the object and back.</li>
                                <li><strong>Output (Calculate):</strong> Your microcontroller measures the duration of the HIGH signal on the Echo pin. Using the speed of sound (~343 meters per second), you can calculate the distance. Formula: `Distance = (Travel Time / 2) * Speed of Sound`.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Bot className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Robotics:</strong> Essential for navigation and obstacle avoidance in autonomous robots.</li>
                            <li><strong>Automotive:</strong> The core component in vehicle parking assist systems.</li>
                            <li><strong>Liquid Level Sensing:</strong> Can be mounted at the top of a tank to measure the distance to the liquid's surface without touching it.</li>
                            <li><strong>Security Systems:</strong> To detect if a person or object enters a specific area.</li>
                            <li><strong>Distance Measurement Tools:</strong> For creating DIY digital tape measures.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <CircuitBoard className="text-accent" />
                            Arduino Integration
                        </h2>
                       <div className="text-muted-foreground space-y-4">
                           <p>Using the HC-SR04 with Arduino is a classic beginner project.</p>
                           <ul className="list-disc list-inside space-y-2">
                                <li><strong className="text-foreground">VCC & GND:</strong> Connect to 5V and GND.</li>
                                <li><strong className="text-foreground">Trig Pin:</strong> Connect to a digital output pin on the Arduino.</li>
                                <li><strong className="text-foreground">Echo Pin:</strong> Connect to a digital input pin on the Arduino.</li>
                           </ul>
                           <p className="border-l-4 border-accent pl-4 text-foreground">In your code, you'll set the Trig pin LOW, then HIGH for 10 microseconds, then LOW again to start the process. Then, you use the `pulseIn()` function on the Echo pin to measure the travel time.</p>
                       </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
