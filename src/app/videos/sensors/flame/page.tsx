
import { Flame, ShieldAlert } from "lucide-react";

export default function FlameSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Flame Sensor
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Flame className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">A flame sensor is designed to detect the presence of fire or flame. It works by detecting specific wavelengths of light emitted by a flame, typically in the infrared (IR) spectrum around 760 nm to 1100 nm. The sensor uses a photodiode or phototransistor that is highly sensitive to this IR range. When it detects this specific light, it outputs a signal (either analog or digital) to indicate that a flame is present.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <ShieldAlert className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Fire Detection Systems:</strong> As a primary component in fire alarms for homes and industrial buildings.</li>
                            <li><strong>Robotics:</strong> Used in firefighting robots to help them locate the source of a fire.</li>
                            <li><strong>Safety Systems:</strong> To automatically shut off gas supplies or activate fire suppression systems.</li>
                            <li><strong>Industrial Furnaces:</strong> To monitor the flame in a furnace and ensure it is lit.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
