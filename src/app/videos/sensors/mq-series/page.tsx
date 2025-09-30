
import { Wind, CircuitBoard, Flame } from "lucide-react";

export default function MqSeriesPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        MQ Series Gas Sensors
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        How can a machine "smell"? The MQ series of sensors are like an electronic nose, designed to detect the presence of different gases in the air, from smoke and alcohol to harmful pollutants.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Wind className="text-accent" />
                            How They Work: The Three-Step Process
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>All MQ sensors operate on a similar principle involving a heated sensing element.</p>
                            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> Inside the sensor is a small tube made of a ceramic material, coated with a metal-oxide semiconductor (like Tin Dioxide, SnO₂). A tiny heating coil runs through the tube. When heated, the semiconductor becomes sensitive to specific gas molecules.</li>
                                <li><strong>Conversion:</strong> In clean air, oxygen molecules bind to the semiconductor's surface, creating high electrical resistance. When target gas molecules are present, they react with the oxygen, freeing up electrons in the semiconductor. This reaction lowers the overall resistance.</li>
                                <li><strong>Output:</strong> This change in resistance is converted into a changing voltage. The sensor's analog output (AOUT) pin provides a voltage level that is proportional to the concentration of the detected gas.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Flame className="text-accent" />
                            Common MQ Sensors & Their Uses
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-4">
                            <li><strong>MQ-2:</strong> A general-purpose sensor sensitive to Methane, Butane, LPG, and Smoke. Ideal for building simple fire alarms or combustible gas leak detectors.</li>
                            <li><strong>MQ-3:</strong> Highly sensitive to Alcohol (ethanol). This is the go-to sensor for creating breathalyzer projects.</li>
                            <li><strong>MQ-7:</strong> Optimized for detecting Carbon Monoxide (CO), a dangerous and odorless gas. Used in CO alarms for homes, garages, and vehicles.</li>
                            <li><strong>MQ-135:</strong> An air quality sensor. It's sensitive to a range of gases including Ammonia (NH3), Benzene, smoke, and CO₂. It's often used for general-purpose indoor air quality monitoring.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <CircuitBoard className="text-accent" />
                            Arduino Integration
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>MQ sensors are typically sold on a module that provides power regulation and a simple interface.</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong className="text-foreground">VCC & GND:</strong> Connect to 5V and GND. Note: these sensors consume a fair amount of current for their heater.</li>
                                <li><strong className="text-foreground">AOUT (Analog Output):</strong> Connect to an analog input pin on the Arduino (e.g., A0). Use `analogRead()` to get a value from 0-1023 representing the gas concentration.</li>
                                <li><strong className="text-foreground">DOUT (Digital Output):</strong> Many modules also have a digital output that goes HIGH when the gas concentration crosses a threshold set by an onboard potentiometer.</li>
                            </ul>
                            <p className="border-l-4 border-accent pl-4 text-foreground">For accurate PPM (parts-per-million) readings, these sensors need to be calibrated. This involves taking a reading in clean air and using a formula from the sensor's datasheet to interpret the analog value.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
