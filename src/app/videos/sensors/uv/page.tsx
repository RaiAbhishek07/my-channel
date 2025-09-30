
import { Sun, AlertTriangle } from "lucide-react";

export default function UvSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        UV Sensor (ML8511)
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        The sun provides light and warmth, but it also emits invisible Ultraviolet (UV) radiation. The ML8511 sensor allows our projects to see this invisible light, enabling applications from health monitoring to scientific measurement.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Sun className="text-accent" />
                             How It Works: The Three-Step Process
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>The ML8511 is a specialized light sensor designed specifically for the UV spectrum.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor uses a photodiode made from a material (Silicon on Insulator, or SOI) that is particularly sensitive to UV-A (320-400 nm) and UV-B (280-320 nm) light.</li>
                                <li><strong>Conversion:</strong> When UV photons strike the photodiode, they generate a small electrical current. The internal circuitry of the sensor converts this current into a voltage.</li>
                                <li><strong>Output:</strong> The sensor outputs an analog voltage that is directly and linearly proportional to the intensity of the UV light it is detecting. A higher voltage means a higher UV intensity. This voltage can be read by a microcontroller's ADC.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <AlertTriangle className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Wearable Health Devices:</strong> To create a "sunburn alarm" that alerts the user when they have been exposed to a certain amount of UV radiation.</li>
                            <li><strong>DIY Weather Stations:</strong> To measure and report the current UV Index, providing a more complete weather picture.</li>
                            <li><strong>Material Testing:</strong> To test the UV-blocking effectiveness of fabrics, sunglasses, and plastics.</li>
                            <li><strong>Sterilization Equipment Monitoring:</strong> To verify that UV lamps used for disinfecting surfaces are outputting the correct intensity of UV light.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
