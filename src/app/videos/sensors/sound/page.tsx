
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
                     <p className="text-lg text-muted-foreground">
                        How can you make a light turn on with a simple clap? The sound sensor module acts as a machine's ear, allowing your projects to react to the noise in their environment.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Mic className="text-accent" />
                             How It Works: The Three-Step Process
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>A typical sound sensor module takes a raw microphone signal and makes it usable for a microcontroller.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> An electret microphone on the module has a diaphragm that vibrates when sound waves hit it. This vibration changes the capacitance between the diaphragm and a backplate, creating a very small electrical signal that mirrors the sound wave.</li>
                                <li><strong>Conversion (Amplification):</strong> This raw signal is far too weak for a microcontroller to read directly. The module passes it through an operational amplifier (op-amp, often an LM393) which boosts the signal strength significantly.</li>
                                <li><strong>Output:</strong> The module provides two outputs:
                                    <ul className="list-disc list-inside pl-4 mt-2">
                                        <li><strong>Analog (AOUT):</strong> An analog voltage that represents the amplitude (loudness) of the sound. You can read this for applications that need to measure sound levels.</li>
                                        <li><strong>Digital (DOUT):</strong> The amplified signal is also sent to a comparator, which checks if it exceeds a certain threshold (adjustable via a potentiometer). If it does, the DOUT pin goes HIGH, giving a simple "loud sound detected" signal.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Lightbulb className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Clap-Activated Switches:</strong> The classic project where a loud sound (like a clap) toggles a light, fan, or other appliance.</li>
                            <li><strong>Sound-Activated Animatronics:</strong> Used in toys and robots that react or perform an action when they hear a noise.</li>
                            <li><strong>Security Systems:</strong> To detect the sound of breaking glass or other loud, sudden noises as part of an alarm system.</li>
                            <li><strong>Audio Level Monitoring:</strong> Creating simple VU (Volume Unit) meters with LEDs to visualize the ambient noise level.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
