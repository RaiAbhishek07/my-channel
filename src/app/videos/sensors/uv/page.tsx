
import { Sun, AlertTriangle } from "lucide-react";

export default function UvSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        UV Sensor (ML8511)
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Sun className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">The ML8511 UV sensor uses a photodiode that is specifically sensitive to ultraviolet (UV-A and UV-B) light. When exposed to UV radiation, the sensor outputs an analog voltage that is linearly proportional to the UV intensity. This voltage can be read by a microcontroller's analog-to-digital converter (ADC) to determine the current UV level.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <AlertTriangle className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Sun Exposure Monitoring:</strong> Used in wearable devices to alert the user when UV levels are high and it's time to seek shade or apply sunscreen.</li>
                            <li><strong>Weather Stations:</strong> To measure the UV Index as part of a comprehensive weather report.</li>
                            <li><strong>Cosmetic Testers:</strong> To test the UV-blocking effectiveness of sunglasses and fabrics.</li>
                            <li><strong>Sterilization Equipment:</strong> To monitor the output of UV lamps used for sterilization.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
