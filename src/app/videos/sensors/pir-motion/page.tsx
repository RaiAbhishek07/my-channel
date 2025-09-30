
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
                     <p className="text-lg text-muted-foreground">
                        How do automatic doors open when you approach, or security lights turn on at night? They use a PIR sensor, a clever device that detects the invisible heat signature of living things.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <UserCheck className="text-accent" />
                             Inside the Sensor: How It Works
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>PIR stands for "Passive Infrared." It's "passive" because it doesn't emit any energy; it only receives it.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>The Sensing Element:</strong> The heart of the sensor is a pyroelectric crystal. This special material generates a tiny electrical charge when exposed to a change in infrared (IR) radiation (i.e., heat). The sensor actually has two of these crystals side-by-side to detect *changes* in heat.</li>
                                <li><strong>The Fresnel Lens:</strong> The white, plastic dome over the sensor is a Fresnel lens. It's not just a cover; it focuses the infrared radiation from a wide area onto the small sensing element, increasing the sensor's range and sensitivity.</li>
                                <li><strong>The Signal Conditioner & Processor:</strong> When a warm body (like a person) moves into the sensor's field of view, it causes a change in the amount of IR hitting one of the crystals. This generates an electrical pulse. An onboard circuit amplifies this tiny pulse and, if it's significant enough, triggers the output. The circuit is designed to ignore slow changes (like the room warming up) and only react to rapid movement.</li>
                                <li><strong>The Output:</strong> When triggered, the sensor's output pin sends a clean, HIGH digital signal for a set period of time (often adjustable with a potentiometer).</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <ShieldAlert className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Security Systems:</strong> The most common application, used in alarm systems to detect intruders inside a building.</li>
                            <li><strong>Automatic Lighting:</strong> To turn on lights in a room, hallway, or outdoors when a person is present, and turn them off after they leave, saving energy.</li>
                            <li><strong>Automated Doors and Faucets:</strong> Used in public buildings to detect a person's presence and activate a mechanism.</li>
                            <li><strong>Animatronics & Interactive Displays:</strong> To trigger an action or display when a person approaches.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
