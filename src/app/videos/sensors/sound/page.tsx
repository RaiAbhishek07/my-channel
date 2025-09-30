
import { Mic, Lightbulb } from "lucide-react";

export default function SoundSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Sound Sensor (Microphone Module)
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Mic className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">A sound sensor module is typically built around an electret microphone. The microphone converts sound waves into a small electrical signal. This weak signal is then fed into an amplifier (often an op-amp like the LM393) to boost it to a level that a microcontroller can easily read. The module provides both an analog output (proportional to sound amplitude) and a digital output (which goes high when the sound exceeds a set threshold).</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Lightbulb className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Clap Switch:</strong> A classic project where a clap or loud noise toggles a light or appliance.</li>
                            <li><strong>Sound-Activated Devices:</strong> For toys, robots, or installations that react to noise.</li>
                            <li><strong>Security Systems:</strong> Can be used to detect the sound of breaking glass or other loud noises.</li>
                            <li><strong>Audio Level Monitoring:</strong> To create simple VU meters or monitor ambient noise levels.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
