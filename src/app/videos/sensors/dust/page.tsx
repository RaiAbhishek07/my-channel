
import { Wind, AirVent } from "lucide-react";

export default function DustSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Dust Sensor (GP2Y1010AU0F)
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Wind className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">The GP2Y1010AU0F dust sensor works on the principle of optical sensing. It has an infrared (IR) LED and a photodiode arranged at an angle. Air flows through a small chamber in the sensor. The IR LED emits a beam of light, and if dust particles are present in the air, they scatter the light. Some of this scattered light is detected by the photodiode. The amount of light detected is proportional to the concentration of dust in the air, which is then output as an analog voltage.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <AirVent className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Air Purifiers:</strong> To automatically adjust fan speed based on the detected level of dust.</li>
                            <li><strong>Air Quality Monitors:</strong> For indoor or outdoor systems that track particulate matter.</li>
                            <li><strong>Smart HVAC Systems:</strong> To control ventilation and filtration based on air quality.</li>
                            <li><strong>Environmental Monitoring Projects:</strong> To collect data on air pollution.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
