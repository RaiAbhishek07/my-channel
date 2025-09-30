
import { Zap, Lightbulb, Bot, CircuitBoard } from "lucide-react";

export default function IRObstacleSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        IR Obstacle Avoidance Sensor
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Zap className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">An IR obstacle avoidance sensor works by emitting a beam of infrared (IR) light from an LED. If an object comes into the path of this beam, the light reflects off the object and is detected by a photodiode (the receiver). This detection signals the presence of an obstacle.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Lightbulb className="text-accent" />
                            Key Features
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Detection Range:</strong> Typically short-range, from 2 cm to 30 cm.</li>
                            <li><strong>Output:</strong> Provides a digital output (HIGH/LOW signal).</li>
                            <li><strong>Adjustable:</strong> Often includes a potentiometer to adjust detection distance.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <CircuitBoard className="text-accent" />
                            Arduino Integration
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>Connecting to an Arduino is straightforward:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong className="text-foreground">VCC:</strong> Connect to the 5V pin on the Arduino.</li>
                                <li><strong className="text-foreground">GND:</strong> Connect to the GND pin.</li>
                                <li><strong className="text-foreground">OUT:</strong> Connect to any digital input pin on the Arduino. You can then use `digitalRead()` to check if an obstacle is detected.</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Bot className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Line-Following Robots:</strong> To detect the line and stay on course.</li>
                            <li><strong>Collision Avoidance:</strong> In small robots to prevent them from bumping into walls or objects.</li>
                            <li><strong>Automation:</strong> Used in automatic hand sanitiser dispensers, faucets, and counters.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
