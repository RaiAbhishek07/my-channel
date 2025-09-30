
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
                     <p className="text-lg text-muted-foreground">
                        How can an alarm detect if a window is being broken or a machine is shaking abnormally? It uses a vibration sensor, which acts as a simple switch that is triggered by movement or shock.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Vibrate className="text-accent" />
                             How It Works: The Three-Step Process
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>The SW-420 is a normally-closed vibration switch. It's designed to be a completed circuit at rest and to break that circuit when shaken.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> Inside the sensor's metal canister is a conductive spring coiled around a central conductive pin. At rest, the spring is touching the pin, completing an electrical circuit.</li>
                                <li><strong>Conversion:</strong> When the sensor is subjected to a vibration, shock, or sudden movement, the inertia causes the spring to shake. This momentary shaking causes the spring to lose contact with the central pin, which briefly breaks the circuit.</li>
                                <li><strong>Output:</strong> The sensor module's circuit detects this brief interruption. An onboard comparator (like an LM393) cleans up this signal and provides a clean digital output. When a vibration is detected, the output pin goes HIGH. The sensitivity can be adjusted with a potentiometer on the module.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Siren className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Anti-Theft Alarms:</strong> Attached to vehicles, safes, doors, or windows to detect tampering or attempted movement.</li>
                            <li><strong>Shock Detection:</strong> Used in smart packaging to log if a package has been dropped or handled roughly during shipping.</li>
                            <li><strong>Machine Monitoring:</strong> To detect abnormal vibrations in machinery, which can be an early indicator of failure.</li>
                            <li><strong>Earthquake Detection:</strong> Can be used as a simple, low-cost trigger for DIY earthquake alarm systems.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
