
import { Compass, Map } from "lucide-react";

export default function CompassSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md-text-5xl font-headline font-bold mb-4">
                        Compass (HMC5883L)
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Compass className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">The HMC5883L is a 3-axis digital magnetometer. It works by using magneto-resistive sensors to detect the Earth's magnetic field along three axes (X, Y, and Z). By measuring the strength of the magnetic field in each direction, it can determine its orientation relative to magnetic north, effectively acting as a digital compass.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Map className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Navigation:</strong> In robots, drones, and other vehicles to determine heading and direction.</li>
                            <li><strong>Smartphones:</strong> For map applications and compass functionalities.</li>
                            <li><strong>Satellite Pointing:</strong> To orient antennas and other equipment correctly.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
