
import { Hand, Smartphone } from "lucide-react";

export default function GestureSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Gesture Sensor (APDS-9960)
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How can you control a device without even touching it? The APDS-9960 is a powerful, multi-talented sensor that can detect hand gestures, proximity, ambient light, and even color, opening up a world of touchless interfaces.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Hand className="text-accent" />
                             How It Works: An All-in-One Sensing Powerhouse
                        </h2>
                         <div className="text-muted-foreground space-y-4">
                            <p>The APDS-9960 combines several sensors and an intelligent processing engine into a single chip, communicating via the I²C protocol.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Gesture Sensing:</strong> This is its most impressive feature. The sensor has four directional photodiodes (sensing up, down, left, and right) and an integrated IR LED. It works by:
                                    <ul className="list-disc list-inside pl-4 mt-2">
                                        <li>Pulsing the IR LED.</li>
                                        <li>Measuring the reflected IR light that returns to each of the four photodiodes.</li>
                                        <li>Analyzing the sequence of reflections. For example, a left-to-right swipe will cause a spike in the left photodiode, followed by a spike in the right one.</li>
                                        <li>The sensor's internal engine processes this data and reports a detected gesture (e.g., `UP`, `DOWN`, `LEFT`, `RIGHT`).</li>
                                    </ul>
                                </li>
                                <li><strong>Proximity Sensing:</strong> It uses the same IR LED and a dedicated proximity photodiode. It measures the time it takes for the IR light to be reflected back from an object, which corresponds to the object's distance. This is how your phone turns its screen off when you hold it to your ear.</li>
                                <li><strong>Ambient Light & Color Sensing:</strong> It has Red, Green, Blue, and Clear (unfiltered) photodiodes that can measure the intensity of ambient light, allowing it to adjust screen brightness or detect the color of an object placed very close to it.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Smartphone className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Touchless Controls:</strong> Waving your hand to change music tracks, adjust volume, or scroll through pages on a device.</li>
                            <li><strong>Smartphones:</strong> Used for proximity sensing (disabling the screen during calls) and automatic screen brightness adjustment.</li>
                            <li><strong>Robotics:</strong> Allowing a robot to be controlled by simple hand gestures.</li>
                            <li><strong>Interactive Displays:</strong> Creating kiosks or installations that respond to user gestures without requiring physical contact.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
