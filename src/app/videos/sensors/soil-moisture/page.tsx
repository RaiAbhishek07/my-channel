
import { Droplets, Leaf } from "lucide-react";

export default function SoilMoistureSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Soil Moisture Sensor
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How do you build a system that knows exactly when your plants are thirsty? The soil moisture sensor gives your projects the ability to "feel" the water content in soil, enabling smart agriculture and gardening.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Droplets className="text-accent" />
                            How It Works: The Three-Step Process
                        </h2>
                         <div className="text-muted-foreground space-y-4">
                            <p>This sensor works by measuring the electrical conductivity of the soil, which is directly related to its moisture content.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor has two exposed probes that are inserted into the soil. These probes act like electrodes.</li>
                                <li><strong>Conversion:</strong> Pure water is not very conductive, but the water in soil contains dissolved salts and minerals, making it conductive. The more water there is, the better the soil conducts electricity, and the lower the electrical resistance between the probes. Dry soil has very high resistance.</li>
                                <li><strong>Output:</strong> The sensor module measures this resistance and converts it into a voltage. The analog output (AOUT) pin provides a voltage that is inversely proportional to the soil moisture. (Wet soil = Low resistance = High analog reading; Dry soil = High resistance = Low analog reading).</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Leaf className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Automated Irrigation Systems:</strong> The most common use. The system reads the sensor and only activates a water pump when the soil becomes too dry.</li>
                            <li><strong>Gardening Assistants:</strong> A device that alerts a gardener (e.g., with an LED or buzzer) when a specific plant needs watering.</li>
                            <li><strong>Agricultural Research:</strong> Scientists use networks of these sensors to study water usage in crops and optimize irrigation strategies.</li>
                            <li><strong>Flood and Leakage Detection:</strong> Can be used outside of soil to simply detect the presence of water in a specific area.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
