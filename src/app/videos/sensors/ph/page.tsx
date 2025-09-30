
import { Beaker, Fish } from "lucide-react";

export default function PhSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        pH Sensor
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Beaker className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">A pH sensor consists of a glass electrode that measures the concentration of hydrogen ions (H+) in a solution. It generates a small voltage that is proportional to the pH of the liquid. A reference electrode provides a stable voltage to compare against. The difference in voltage between the two electrodes is then converted into a pH value (typically from 0 to 14).</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Fish className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Agriculture and Hydroponics:</strong> To monitor the pH of soil and water to ensure optimal plant growth.</li>
                            <li><strong>Aquariums:</strong> To maintain the proper water pH for fish and other aquatic life.</li>
                            <li><strong>Laboratories:</strong> For scientific experiments and chemical analysis.</li>
                            <li><strong>Water Treatment Plants:</strong> To ensure the safety and quality of drinking water.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
