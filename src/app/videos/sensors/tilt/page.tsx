
import { Rotate3d, Bell } from "lucide-react";

export default function TiltSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md-text-5xl font-headline font-bold mb-4">
                        Tilt Sensor
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Rotate3d className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">A tilt sensor, often using a mercury switch or a ball-in-tube mechanism, is designed to detect orientation or inclination. Inside the sensor, a conductive element (like a drop of mercury or a metal ball) moves to bridge two contacts when the sensor is tilted to a certain angle. This completes an electrical circuit, providing a simple on/off signal that indicates the tilt status.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Bell className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Alarm Systems:</strong> To detect if an object, like a window or a piece of art, has been tilted or moved.</li>
                            <li><strong>Robot Balancing:</strong> As a simple way to determine if a robot is level or has fallen over.</li>
                            <li><strong>Smart Devices:</strong> To change screen orientation or trigger actions based on how the device is held.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
