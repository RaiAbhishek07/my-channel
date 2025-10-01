
import { Waypoints, Bot } from "lucide-react";

export default function LineTrackingSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Line Tracking Sensor (TCRT5000)
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        This is the sensor that gives a line-following robot its 'eyes.' It's a simple, reliable component specifically designed for one purpose: to distinguish a dark line on a light surface.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Waypoints className="text-accent" />
                             How It Works: Reflecting Infrared Light
                        </h2>
                         <div className="text-muted-foreground space-y-4">
                            <p>The TCRT5000 module is a specialized version of a basic IR transmitter/receiver pair.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The module contains an infrared (IR) LED and an IR phototransistor, placed side-by-side. The IR LED constantly emits a beam of infrared light downwards.</li>
                                <li><strong>Conversion:</strong>
                                    <ul className="list-disc list-inside pl-4 mt-2">
                                        <li>When the sensor is over a **white or light-colored surface**, the infrared light is reflected back up and hits the phototransistor. This allows current to flow through the phototransistor.</li>
                                        <li>When the sensor is over a **black or dark-colored line**, the infrared light is absorbed by the surface. Little to no light is reflected back, so the phototransistor does not conduct current.</li>
                                    </ul>
                                </li>
                                <li><strong>Output:</strong> The sensor module has a built-in comparator circuit. It reads the state of the phototransistor and outputs a clean digital signal. Typically, the output is LOW when it sees a white surface (reflection) and HIGH when it sees a black line (no reflection). An onboard potentiometer often allows you to adjust the sensitivity to work with different surfaces and lighting conditions.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Bot className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Line-Following Robots:</strong> This is the primary application. Robots use an array of these sensors (typically 2 to 8) to detect their position relative to the line and adjust their motors to stay on course.</li>
                            <li><strong>Edge Detection:</strong> A robot can use these sensors to avoid driving off the edge of a table or platform.</li>
                            <li><strong>Simple Encoders:</strong> By pointing the sensor at a spinning disk with black and white stripes, it can be used to measure the speed and direction of rotation.</li>
                            <li><strong>Object Detection:</strong> Can be used as a very short-range reflective sensor to detect the presence of an object directly in front of it.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
