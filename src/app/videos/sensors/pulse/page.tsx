
import { HeartPulse, Activity } from "lucide-react";

export default function PulseSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Pulse Sensor
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        How can a simple wearable device see your heartbeat? The pulse sensor gives our projects the ability to measure heart rate using a surprisingly simple optical trick.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <HeartPulse className="text-accent" />
                             How It Works: Seeing Blood Flow
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>A pulse sensor is a type of photoplethysmography (PPG) sensor. It works by shining a light through your skin and measuring how that light reflects back.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor has a light-emitting diode (LED) that shines light into a capillary tissue (like your fingertip or earlobe). Opposite the LED is a light detector (a photodiode or phototransistor).</li>
                                <li><strong>Conversion:</strong> With each heartbeat, blood is pumped through your capillaries, causing their volume to swell. This momentary increase in blood volume causes more light to be absorbed, so less light reaches the detector. Between heartbeats, the blood volume decreases, and more light is reflected back to the detector.</li>
                                <li><strong>Output:</strong> This rhythmic change in the reflected light level creates a fluctuating electrical signal. The sensor's circuitry cleans up and amplifies this signal, providing an analog waveform that corresponds to the user's pulse. A microcontroller can then analyze this waveform to calculate the beats per minute (BPM).</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Activity className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Fitness Trackers & Smartwatches:</strong> The core technology used in most wearable devices for continuous heart rate monitoring.</li>
                            <li><strong>DIY Health Gadgets:</strong> Building devices that can visualize heart rate in real-time or log it for fitness analysis.</li>
                            <li><strong>Art and Bio-feedback Projects:</strong> Creating interactive experiences where lights or sounds change in sync with a person's heartbeat.</li>
                            <li><strong>Medical Training Devices:</strong> Used in simple simulators for learning how to measure and interpret heart rate.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

    