
import { Sun, Moon, CircuitBoard } from "lucide-react";

export default function LDRSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        LDR (Light Dependent Resistor)
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How can a simple circuit know when to turn on the lights at dusk? The secret is often a tiny, inexpensive component that acts like a machine's eye: the LDR.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Sun className="text-accent" />
                            How It Works: The Three-Step Process
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>An LDR, or photoresistor, is a special type of resistor whose resistance changes based on the amount of light hitting it.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The surface of the LDR is made of a semiconductor material. When photons (light particles) strike this material, they give energy to electrons, allowing them to flow more freely.</li>
                                <li><strong>Conversion:</strong> This freer flow of electrons means the material's electrical resistance drops. In bright light, the resistance is low. In darkness, the resistance is very high.</li>
                                <li><strong>Output:</strong> This change in resistance is not a direct signal a microcontroller can read. So, we use it in a "voltage divider" circuit with a fixed resistor. This circuit converts the changing resistance into a changing voltage, which can be read by an analog input pin.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Moon className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Automatic Streetlights:</strong> To detect when ambient light is low and turn on the lights.</li>
                            <li><strong>Solar Trackers:</strong> Using two LDRs, a system can determine the brightest direction and pivot solar panels towards it.</li>
                            <li><strong>Light Meters:</strong> In cameras and other devices to measure the intensity of ambient light.</li>
                            <li><strong>Simple Alarms:</strong> A laser beam pointed at an LDR can create a tripwire; if the beam is broken, the resistance shoots up and triggers an alarm.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <CircuitBoard className="text-accent" />
                            Arduino Integration
                        </h2>
                       <div className="text-muted-foreground space-y-4">
                           <p>To use an LDR with an Arduino, you create a voltage divider. This allows you to read the light level as a value between 0 and 1023.</p>
                           <ul className="list-disc list-inside space-y-2">
                               <li>Connect one leg of the LDR to 5V.</li>
                               <li>Connect the other leg to an analog pin (e.g., A0) AND to one leg of a fixed resistor (e.g., 10kΩ).</li>
                               <li>Connect the other leg of the fixed resistor to GND.</li>
                               <li>Use `analogRead(A0)` in your code to get a value that corresponds to the light intensity.</li>
                           </ul>
                       </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
