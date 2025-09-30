
import { AlertCircle, Package } from "lucide-react";

export default function ShockSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md-text-5xl font-headline font-bold mb-4">
                        Shock Sensor
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <AlertCircle className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">A shock sensor is designed to detect sudden impacts or strong vibrations. It often works similarly to a vibration sensor, using a mechanical switch (like a spring and mass system) or a piezoelectric element. When a sharp impact occurs, it generates a brief electrical signal that is strong enough to be registered as a shock, distinct from normal, low-level vibrations.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Package className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Vehicle Alarms:</strong> To detect break-ins or collisions.</li>
                            <li><strong>Shipping and Logistics:</strong> Placed in packages to monitor if they have been dropped or mishandled.</li>
                            <li><strong>Industrial Machinery:</strong> To detect impacts that could indicate a malfunction.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
