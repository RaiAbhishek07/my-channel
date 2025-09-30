
import { Vibrate, Siren } from "lucide-react";

export default function VibrationSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Vibration Sensor (SW-420)
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Vibrate className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">The SW-420 is a vibration switch that contains a small spring mechanism. In its normal state, the spring makes contact to complete a circuit. When the sensor is subjected to vibration or a shock, the spring momentarily disconnects, breaking the circuit. This change can be detected by a microcontroller as a signal, indicating that a vibration has occurred.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Siren className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Anti-theft Alarms:</strong> For vehicles, safes, or doors to detect tampering or attempts to move them.</li>
                            <li><strong>Earthquake Detection:</strong> As a simple, low-cost way to detect seismic activity.</li>
                            <li><strong>Shock Detection:</strong> In smart packaging to monitor if a package has been dropped or handled roughly.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
