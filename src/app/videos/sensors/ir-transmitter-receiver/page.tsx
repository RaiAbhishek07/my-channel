
import { ArrowLeftRight, Bot } from "lucide-react";

export default function IrTransmitterReceiverPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        IR Transmitter & Receiver Pair
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How does a line-following robot see the line? How can you create a simple wireless link between two points? The answer often lies in the fundamental partnership of an IR transmitter and receiver.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <ArrowLeftRight className="text-accent" />
                             How It Works: A Conversation in Light
                        </h2>
                         <div className="text-muted-foreground space-y-4">
                            <p>This pair works like a simple call and response system using invisible infrared light.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>The Transmitter (IR LED):</strong> This is a special type of LED that emits light in the infrared spectrum. To a microcontroller, it works just like a regular LED; you send a signal to its pin to turn it on.</li>
                                <li><strong>The Receiver (Photodiode/Phototransistor):</strong> This component is designed to detect infrared light. When IR light from the transmitter hits the receiver, it allows current to flow. The more IR light it sees, the more current it allows to pass.</li>
                                <li><strong>The Application:</strong> You can use this pair in two main ways:
                                    <ul className="list-disc list-inside pl-4 mt-2">
                                        <li><strong>Reflective Sensing:</strong> The transmitter and receiver are placed next to each other, pointing in the same direction. They detect an object when the IR light bounces off the object and into the receiver. This is the principle behind line-following sensors (black lines absorb IR, white lines reflect it).</li>
                                        <li><strong>Beam-Break Sensing:</strong> The transmitter and receiver are placed facing each other. The receiver continuously sees the transmitter's light. If an object passes between them, the beam is broken, and the receiver stops seeing the light. This is used for creating tripwires or counting objects on a conveyor belt.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Bot className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Line-Following Robots:</strong> The core component for detecting a black line on a white surface.</li>
                            <li><strong>Object/Person Counters:</strong> Creating a "beam-break" sensor across a doorway or path.</li>
                            <li><strong>Simple Data Transmission:</strong> Sending simple codes or signals wirelessly over a short distance.</li>
                            <li><strong>Custom TV Remotes:</strong> You can build your own remote control by pulsing the IR LED with the correct codes for your TV.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
