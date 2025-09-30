
import { Waves, BellRing } from "lucide-react";

export default function WaterLevelSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Water Level Sensor
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Waves className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">A common type of water level sensor has a series of parallel conductive traces. As the water level rises, it submerges more of these traces, which short them out. This changes the overall resistance of the sensor. The more traces are submerged, the lower the resistance, which can be read as an analog value to determine the water level.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <BellRing className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Water Tank Monitoring:</strong> To check the level of water in a tank and automate refilling.</li>
                            <li><strong>Flood Detection:</strong> Placed in basements or low-lying areas to provide an early warning of flooding.</li>
                            <li><strong>Sump Pump Control:</strong> Automatically activates a pump when water reaches a certain level.</li>
                            <li><strong>Fuel Level Gauges:</strong> Used in vehicles and storage tanks to indicate liquid levels.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
