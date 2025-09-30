
import { UserCheck, ShieldAlert } from "lucide-react";

export default function PirMotionSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        PIR Motion Sensor
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <UserCheck className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">A PIR (Passive Infrared) sensor detects motion by measuring changes in the infrared (heat) radiation emitted by objects in its field of view. It is particularly sensitive to the infrared energy given off by humans and animals. When a person moves into the sensor's range, it causes a change in the infrared levels, which triggers the sensor.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <ShieldAlert className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Security Alarms:</strong> A primary component in home and business security systems to detect intruders.</li>
                            <li><strong>Automatic Lighting:</strong> To turn on lights when someone enters a room and turn them off when the room is empty.</li>
                            <li><strong>Automated Doors:</strong> Used to open doors automatically in commercial buildings.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
