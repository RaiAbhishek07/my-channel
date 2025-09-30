
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
                     <p className="text-lg text-muted-foreground">
                        How can you build a system to automatically refill a pet's water bowl or warn you about a basement flood? The water level sensor is a simple but effective tool for detecting the presence and height of water.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Waves className="text-accent" />
                             How It Works: The Three-Step Process
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>This sensor operates on the same principle as the rain sensor, measuring conductivity across a series of exposed traces.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor consists of a series of parallel conductive traces exposed on a PCB. These traces are not connected when dry.</li>
                                <li><strong>Conversion:</strong> As the sensor is submerged in water, the conductive nature of the water (due to dissolved impurities) creates short circuits across the traces. The higher the water level, the more traces are submerged, and the lower the overall electrical resistance of the sensor.</li>
                                <li><strong>Output:</strong> The sensor module reads this change in resistance and outputs an analog voltage. The analog signal is proportional to the water level—a higher water level results in a higher analog reading (as more of the sensor is conductive).</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <BellRing className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Water Tank Monitoring:</strong> To automatically measure the level of water in a tank and control a pump to refill it.</li>
                            <li><strong>Flood and Leak Detection:</strong> Placed in basements, laundry rooms, or under sinks to provide an early warning of a leak or flood.</li>
                            <li><strong>Sump Pump Control:</strong> To automatically activate a sump pump when groundwater reaches a certain level.</li>
                            <li><strong>Rainfall Measurement:</strong> Can be used in a collection vessel to measure the amount of rainfall over time.</li>
                        </ul>
                         <p className="mt-4 text-muted-foreground border-l-4 border-accent pl-4"><strong>Important Note:</strong> The exposed conductors will corrode over time with constant exposure to water and DC current. For long-term applications, it's better to only power the sensor briefly when taking a reading, or to use more robust non-contact sensors like ultrasonic sensors.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
