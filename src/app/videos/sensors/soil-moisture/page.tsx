
import { Droplets, Leaf } from "lucide-react";

export default function SoilMoistureSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Soil Moisture Sensor
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Droplets className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">A soil moisture sensor works by measuring the electrical resistance or conductivity of the soil. The two probes of the sensor act as electrodes. When the soil is wet, it conducts electricity better, resulting in lower resistance. When the soil is dry, the resistance is higher. This change is used to determine the moisture level.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Leaf className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Smart Irrigation Systems:</strong> Automatically water plants only when the soil is dry.</li>
                            <li><strong>Agriculture Automation:</strong> Monitor soil moisture across large fields to optimize crop watering.</li>
                            <li><strong>Gardening:</strong> Helps gardeners prevent over- or under-watering their plants.</li>
                            <li><strong>Scientific Research:</strong> Used in environmental studies to monitor soil conditions.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
