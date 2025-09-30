
import { Zap, Bot, CircuitBoard } from "lucide-react";

export default function IRObstacleSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        IR Obstacle Avoidance Sensor
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        How do robots and other automated machines see the world and avoid crashing into things? Often, the answer is a simple but clever device: the IR Obstacle Avoidance Sensor.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Zap className="text-accent" />
                            How It Works: The Three-Step Process
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>This sensor works by using light that is invisible to the human eye. It constantly emits a beam of infrared (IR) light and waits for it to bounce back.</p>
                            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> An IR LED (transmitter) sends out a pulse of infrared light.</li>
                                <li><strong>Conversion:</strong> If an object is in front of the sensor, the light reflects off it. This reflected light is picked up by a photodiode (receiver), which converts the light energy into a small electrical signal.</li>
                                <li><strong>Output:</strong> An onboard circuit (a comparator) checks if the signal from the receiver is strong enough. If it is, the sensor's output pin goes LOW, signaling that an obstacle has been detected. If no light is reflected, the pin stays HIGH.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Bot className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Robotics:</strong> The primary use is for collision avoidance in small autonomous robots.</li>
                            <li><strong>Automated Systems:</strong> Used in automatic hand sanitizer dispensers, faucets, and trash cans to detect the presence of a hand.</li>
                            <li><strong>Assembly Lines:</strong> To detect if an object is present at a certain point on a conveyor belt.</li>
                            <li><strong>Security Systems:</strong> As simple tripwires to detect when an object or person crosses a path.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <CircuitBoard className="text-accent" />
                            Arduino Integration
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>Connecting this sensor to an Arduino is very straightforward, making it great for beginners.</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong className="text-foreground">VCC:</strong> Connect to 5V on the Arduino.</li>
                                <li><strong className="text-foreground">GND:</strong> Connect to GND.</li>
                                <li><strong className="text-foreground">OUT:</strong> Connect to any digital input pin. A `digitalRead()` will return `LOW` when an obstacle is detected and `HIGH` otherwise.</li>
                            </ul>
                            <p className="border-l-4 border-accent pl-4 text-foreground">Many modules also have a small potentiometer that allows you to adjust the detection distance, typically from 2 cm to 30 cm.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
