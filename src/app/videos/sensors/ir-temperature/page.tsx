
import { Thermometer, Scan } from "lucide-react";

export default function IrTemperatureSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        IR Temperature Sensor (MLX90614)
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        How can you measure the temperature of an object without touching it? The MLX90614 is an infrared thermometer that can tell you the temperature of something from a distance.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Thermometer className="text-accent" />
                             How It Works: The Stefan-Boltzmann Law
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>This sensor works based on a fundamental principle of physics: every object with a temperature above absolute zero emits thermal radiation.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor contains a thermopile, which is an array of tiny thermocouples. This thermopile is pointed at the target object and absorbs the infrared (thermal) energy that the object is radiating.</li>
                                <li><strong>Conversion:</strong> The absorbed infrared energy heats up the thermopile, which in turn generates a small voltage. The amount of voltage generated is proportional to the amount of thermal energy received.</li>
                                <li><strong>Output:</strong> The MLX90614 chip is more than just a sensor; it's a complete system. It includes a low-noise amplifier, a 17-bit ADC, and a digital signal processor (DSP). This internal system measures the voltage from the thermopile, applies compensation calculations (using an onboard ambient temperature sensor for reference), and calculates the final object temperature. It then makes this temperature data available to a microcontroller via the I²C communication protocol.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Scan className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Non-Contact Thermometers:</strong> The core technology in forehead thermometers used for health screenings.</li>
                            <li><strong>Industrial Process Control:</strong> Monitoring the temperature of moving parts, hot liquids, or inaccessible machinery where a contact probe is impractical.</li>
                            <li><strong>Automotive Climate Control:</strong> Measuring passenger and cabin temperature to finely tune the HVAC system.</li>
                            <li><strong>Home Appliances:</strong> Used in high-end microwaves and ovens to measure food temperature without contact.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

    