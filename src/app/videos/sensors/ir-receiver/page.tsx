
import { RadioReceiver, Tv } from "lucide-react";

export default function IrReceiverPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        IR Receiver (TSOP1738)
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How can you use any household remote to control your Arduino project? The IR receiver is the key, acting as an 'ear' that listens for the specific infrared signals sent by remote controls.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <RadioReceiver className="text-accent" />
                            How It Works: Decoding Modulated Light
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>An IR receiver isn't just a simple light detector; it's a smart device designed to filter out noise and decode a specific type of signal.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor contains a photodiode optimized to detect infrared light. However, to avoid being triggered by ambient IR from sunlight or light bulbs, it only looks for light that is blinking (modulated) at a very specific frequency, typically 38 kHz.</li>
                                <li><strong>Conversion:</strong> When the receiver sees IR light modulated at 38 kHz, its internal circuitry demodulates the signal. This process removes the 38 kHz carrier wave, leaving behind just the digital code (the sequence of on/off pulses) that represents the button you pressed.</li>
                                <li><strong>Output:</strong> The sensor outputs this clean, digital code as a series of LOW and HIGH signals on its output pin. A microcontroller can then read this sequence and, using a library (like `IRremote`), decode it to identify which button was pressed on which remote.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Tv className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Remote Control Extenders:</strong> To receive an IR signal in one room and re-transmit it to a device in another.</li>
                            <li><strong>DIY Universal Remotes:</strong> Building a project that can learn and control multiple devices like TVs, stereos, and air conditioners.</li>
                            <li><strong>Robot Control:</strong> Using a simple TV remote to steer a robot, trigger actions, or change its mode.</li>
                            <li><strong>Home Automation:</strong> Integrating existing remote controls to trigger custom actions in a smart home setup.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
