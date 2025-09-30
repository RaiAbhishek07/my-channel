
import { Flame, ShieldAlert } from "lucide-react";

export default function FlameSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Flame Sensor
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        How can a robot detect a fire, or an industrial system confirm a boiler is lit? The flame sensor is a specialized photodetector designed to "see" the specific kind of light that only a fire produces.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Flame className="text-accent" />
                            How It Works: The Three-Step Process
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>This sensor is not just a simple light detector; it's tuned to a very specific wavelength of light.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> Fire emits a broad spectrum of radiation, but it has a strong peak in the infrared (IR) range, typically between 760 nm and 1100 nm. The flame sensor uses a photodiode or phototransistor that is exclusively sensitive to this narrow band of IR light.</li>
                                <li><strong>Conversion:</strong> When IR radiation from a flame hits the sensor, it generates an electrical signal. It is designed to ignore other light sources like lightbulbs or sunlight, which have different spectral profiles.</li>
                                <li><strong>Output:</strong> The sensor module's onboard circuit processes this signal. It provides a digital output (DOUT) that goes HIGH when a flame is detected, and an analog output (AOUT) that gives a variable signal based on the intensity of the flame.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <ShieldAlert className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Fire Alarms:</strong> Used in high-risk areas where a fast response to open flame is more critical than detecting smoke.</li>
                            <li><strong>Firefighting Robots:</strong> Allows a robot to locate the source of a fire to extinguish it.</li>
                            <li><strong>Industrial Safety Systems:</strong> To monitor furnaces, boilers, and kilns to ensure a flame is present (or absent, when it should be) and to trigger safety shutoffs.</li>
                            <li><strong>Gas Stoves:</strong> As a safety feature to detect if the flame has gone out and automatically shut off the gas supply.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
