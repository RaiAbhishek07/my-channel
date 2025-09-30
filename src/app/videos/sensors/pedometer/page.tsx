
import { Footprints, Smartphone } from "lucide-react";

export default function PedometerPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md-text-5xl font-headline font-bold mb-4">
                        Pedometer / Step Counter
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Footprints className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">A pedometer or step counter typically uses an accelerometer to detect the periodic motion of walking or running. It analyzes the accelerometer data to identify the distinct patterns and impacts that occur with each step. By filtering out other movements and focusing on these step patterns, it can count the number of steps taken by the user.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Smartphone className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Fitness Trackers:</strong> The core component of wearable devices that monitor daily activity.</li>
                            <li><strong>Smartphones:</strong> Health and fitness apps use the built-in accelerometer to count steps.</li>
                            <li><strong>Rehabilitation Devices:</strong> To track the activity levels of patients recovering from injuries.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
