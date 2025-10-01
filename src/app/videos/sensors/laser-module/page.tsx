
import { Crosshair, ShieldAlert } from "lucide-react";

export default function LaserModulePage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Laser Module Sensor
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How can you create a security tripwire that spans a long distance, or a system that needs to detect very small objects with pinpoint accuracy? The laser module provides a focused, high-intensity beam of light for these tasks.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Crosshair className="text-accent" />
                             How It Works: Focused Light
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>A laser module is essentially a specialized LED with a lens that focuses the light into a tight, coherent beam.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The laser module itself is a transmitter. It emits a concentrated beam of light when powered. It must be paired with a light detector, such as a photoresistor (LDR) or a photodiode, to become a complete sensor system.</li>
                                <li><strong>Conversion:</strong> The system works by detecting the presence or absence of the laser beam on the detector.
                                    <ul className="list-disc list-inside pl-4 mt-2">
                                        <li>In a **beam-break** setup, the detector is constantly illuminated by the laser. When an object passes through the beam, the light is blocked, causing a change in the detector's output (e.g., a sudden increase in the LDR's resistance).</li>
                                        <li>In a **reflective** setup, the laser and detector are side-by-side. They detect an object only when the laser beam bounces off the object at the correct angle to hit the detector.</li>
                                    </ul>
                                </li>
                                <li><strong>Output:</strong> The change in the light detector's state (e.g., voltage from a voltage divider circuit with an LDR) is read by a microcontroller, which then triggers an action based on the interruption or reception of the laser beam.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <ShieldAlert className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Security Systems:</strong> Creating long-distance, invisible (if using an IR laser) tripwires for perimeter security.</li>
                            <li><strong>Precision Object Detection:</strong> Detecting the presence of very small items on an assembly line where a wider IR beam might not be precise enough.</li>
                            <li><strong>Counting Systems:</strong> For accurately counting people passing through a doorway or items on a conveyor.</li>
                            <li><strong>Alignment and Pointing:</strong> Used as a visual guide for positioning and alignment in construction or workshops.</li>
                        </ul>
                         <p className="mt-4 text-muted-foreground border-l-4 border-accent pl-4"><strong>Safety Warning:</strong> Never look directly into a laser beam, even from a low-power module. It can cause permanent eye damage. Always point the laser away from people and reflective surfaces.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
