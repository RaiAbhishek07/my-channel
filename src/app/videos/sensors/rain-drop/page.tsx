
import { CloudRain, Car } from "lucide-react";

export default function RainDropSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Rain Drop Sensor
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <CloudRain className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">The rain drop sensor has a sensing plate with exposed conductive traces. When water droplets fall on the plate, they create a conductive path between the traces, lowering the overall resistance. An electronic module reads this change in resistance and provides a digital or analog output to signal the presence of rain.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Car className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Automatic Windshield Wipers:</strong> Activates a car's wipers as soon as rain is detected.</li>
                            <li><strong>Weather Monitoring Stations:</strong> Provides data on rainfall for meteorological purposes.</li>
                            <li><strong>Smart Home Automation:</strong> Can be used to automatically close windows or retract awnings when it starts to rain.</li>
                            <li><strong>Agriculture:</strong> To monitor rainfall and control irrigation systems accordingly.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
