
import { Palette, Factory } from "lucide-react";

export default function ColorSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Color Sensor (TCS3200)
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How can a machine sort M&Ms by color, or a robot identify a specific colored object? It uses a color sensor like the TCS3200, which gives it the ability to "see" and quantify color.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Palette className="text-accent" />
                             How It Works: Seeing Through Filters
                        </h2>
                         <div className="text-muted-foreground space-y-4">
                            <p>The TCS3200 doesn't see color like a human eye. Instead, it measures the intensity of red, green, and blue light components separately and converts them into a digital signal.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor's chip is an array of photodiodes. Some of these are covered with a red filter, some with a green filter, some with a blue filter, and some have no filter (clear). You can programmatically choose which set of photodiodes you want to read from.</li>
                                <li><strong>Conversion:</strong> The sensor has an internal current-to-frequency converter. The amount of light hitting the selected photodiodes generates a current, which is then converted into a square wave (a digital signal) with a specific frequency. The brighter the light of that specific color, the higher the output frequency.</li>
                                <li><strong>Output:</strong> To measure a color, you would:
                                    <ul className="list-disc list-inside pl-4 mt-2">
                                        <li>Select the red-filtered photodiodes and measure the output frequency.</li>
                                        <li>Select the green-filtered photodiodes and measure the frequency.</li>
                                        <li>Select the blue-filtered photodiodes and measure the frequency.</li>
                                    </ul>
                                The microcontroller reads these frequencies (e.g., using the `pulseIn()` function) and the resulting RGB values represent the color of the object under the sensor.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Factory className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Industrial Automation:</strong> Sorting objects by color on an assembly line (e.g., separating ripe from unripe fruit).</li>
                            <li><strong>Robotics:</strong> Allowing a robot to identify and interact with objects of a specific color.</li>
                            <li><strong>Color Matching:</strong> In devices that can read a color from a surface and provide the corresponding RGB or HEX code.</li>
                            <li><strong>Ambient Light Sensing:</strong> Some high-end displays use color sensors to adjust the screen's color temperature to match the ambient lighting in the room.</li>
                        </ul>
                         <p className="mt-4 text-muted-foreground border-l-4 border-accent pl-4"><strong>Usage Note:</strong> Color sensors are very sensitive to the distance from the object and the ambient lighting conditions. For consistent results, they need to be used at a fixed distance and often require an onboard LED to provide consistent illumination.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
