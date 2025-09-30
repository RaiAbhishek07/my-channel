
import { Hand, CircuitBoard, Power } from "lucide-react";

export default function CapacitiveTouchSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Capacitive Touch Sensor (TTP223)
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Hand className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">A capacitive touch sensor, like the TTP223 module, works by detecting changes in capacitance. The sensor has a conductive plate that holds a certain amount of charge. When a conductive object, like a human finger, comes close, it changes the capacitance of this plate. The sensor detects this change and outputs a signal.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Power className="text-accent" />
                            Key Features
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Sensing Method:</strong> Detects touch without requiring physical pressure.</li>
                            <li><strong>Output:</strong> Provides a simple digital output (HIGH on touch, LOW otherwise).</li>
                            <li><strong>Low Power:</strong> Consumes very little power, making it great for battery-operated devices.</li>
                            <li><strong>Durability:</strong> No moving parts, so it's very durable.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <CircuitBoard className="text-accent" />
                            Arduino Integration
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>It's very easy to use with an Arduino:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong className="text-foreground">VCC:</strong> Connect to 3.3V or 5V.</li>
                                <li><strong className="text-foreground">GND:</strong> Connect to GND.</li>
                                <li><strong className="text-foreground">SIG (or I/O):</strong> Connect the output pin to a digital input on the Arduino.</li>
                            </ul>
                            <p className="mt-2">Read the pin with `digitalRead()` to check for a touch.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Hand className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Touch Buttons:</strong> Replacing mechanical buttons on appliances and electronics.</li>
                            <li><strong>Smart Switches:</strong> For home automation lighting control.</li>
                            <li><strong>Interactive Projects:</strong> Creating touch-sensitive surfaces for art installations or toys.</li>
                            <li><strong>Proximity Sensing:</strong> Can be used to detect the presence of a hand without direct contact.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
