
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
                     <p className="text-lg text-muted-foreground">
                        How does your phone screen know exactly where you're touching it? The technology behind it, capacitive touch, is also available in tiny, simple modules that can replace physical buttons in any project.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Hand className="text-accent" />
                             How It Works: The Three-Step Process
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>This sensor works by constantly monitoring the capacitance of a metal plate (the touch pad).</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The human body is naturally conductive and has capacitance. When your finger gets close to the sensor pad, it changes the total capacitance of the sensor's circuit.</li>
                                <li><strong>Conversion:</strong> The TTP223 chip on the module is designed to detect this specific change in capacitance. It distinguishes a touch from other environmental noise.</li>
                                <li><strong>Output:</strong> When the chip confirms a touch, it drives its output pin to a HIGH state. When the finger is removed, the capacitance returns to normal, and the output pin goes LOW. This creates a clean digital signal.</li>
                            </ol>
                        </div>
                    </div>

                     <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Power className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Replacing Mechanical Buttons:</strong> Used in modern appliances, remote controls, and custom electronic panels for a sleek, no-moving-parts interface.</li>
                            <li><strong>Smart Home Switches:</strong> Creating touch-sensitive wall switches for lighting and other devices.</li>
                            <li><strong>Interactive Art & Toys:</strong> Making surfaces on an object or installation responsive to human touch.</li>
                            <li><strong>Hidden Controls:</strong> The sensor can often detect touch through thin layers of non-conductive material like plastic or glass, allowing for hidden or waterproof buttons.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <CircuitBoard className="text-accent" />
                            Arduino Integration
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>This is one of the simplest sensors to use with an Arduino.</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong className="text-foreground">VCC:</strong> Connect to 3.3V or 5V.</li>
                                <li><strong className="text-foreground">GND:</strong> Connect to GND.</li>
                                <li><strong className="text-foreground">SIG (or I/O):</strong> Connect this output pin to any digital input on your Arduino.</li>
                            </ul>
                            <p className="border-l-4 border-accent pl-4 text-foreground">In your code, a simple `digitalRead()` is all you need. The pin will be HIGH when touched and LOW when not touched, behaving just like a standard pushbutton.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
