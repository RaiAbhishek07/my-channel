
import { Wind, AirVent } from "lucide-react";

export default function DustSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Dust Sensor (GP2Y1010AU0F)
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How does an air purifier know when to ramp up its fan speed? It uses a "dust sensor" to see microscopic particles in the air that are invisible to our eyes.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Wind className="text-accent" />
                             How It Works: The Three-Step Process
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>The GP2Y1010AU0F works on the principle of optical light scattering.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor has a small chamber through which air can pass. Inside, an infrared (IR) LED and a phototransistor (a light detector) are positioned at an angle to each other. The LED emits a beam of light across the chamber.</li>
                                <li><strong>Conversion:</strong> In clean air, the light beam travels straight and does not hit the phototransistor. When dust or smoke particles enter the chamber, they cause the IR light to scatter in all directions. Some of this scattered light is then detected by the phototransistor.</li>
                                <li><strong>Output:</strong> The amount of light received by the phototransistor is proportional to the concentration of dust in the air. The sensor's circuitry converts this into an analog voltage. The higher the concentration of dust, the higher the output voltage.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <AirVent className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Air Purifiers & Cleaners:</strong> To automatically adjust fan speed based on the real-time level of particulate matter in the air.</li>
                            <li><strong>Indoor Air Quality Monitors:</strong> For smart home systems that track and display the level of dust and other particulates.</li>
                            <li><strong>Smart HVAC Systems:</strong> To control ventilation and filtration more efficiently based on actual air quality rather than a fixed schedule.</li>
                            <li><strong>Environmental Monitoring:</strong> Used in DIY projects to collect data on air pollution in different locations.</li>
                        </ul>
                         <p className="mt-4 text-muted-foreground border-l-4 border-accent pl-4"><strong>Usage Note:</strong> For this sensor to work correctly, the internal IR LED needs to be pulsed on and off, and the reading taken at a very specific time after the pulse. This requires a slightly more complex code sequence than a simple `analogRead()`.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
