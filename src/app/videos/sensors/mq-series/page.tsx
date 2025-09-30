
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
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Wind className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">MQ series sensors use a small heating element with a metal-oxide semiconductor (MOS). The resistance of the semiconductor changes depending on the concentration of certain gases in the air. By measuring this resistance, the sensor can detect the presence and concentration of a target gas.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Flame className="text-accent" />
                            Common MQ Sensors & Their Uses
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-4">
                            <li><strong>MQ-2:</strong> Sensitive to Methane, Butane, LPG, and Smoke. Commonly used in gas leak detectors and fire alarms.</li>
                            <li><strong>MQ-3:</strong> Highly sensitive to Alcohol. Ideal for building breathalyzers and alcohol detectors.</li>
                            <li><strong>MQ-7:</strong> Optimized for detecting Carbon Monoxide (CO). Used in CO alarms for homes and vehicles.</li>
                            <li><strong>MQ-135:</strong> An air quality sensor. Sensitive to Ammonia (NH3), Benzene, smoke, and CO₂. Often used for general air quality monitoring.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <CircuitBoard className="text-accent" />
                            Arduino Integration
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>Most MQ sensors have an analog output pin (and sometimes a digital one). To use with an Arduino:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong className="text-foreground">VCC:</strong> Connect to 5V.</li>
                                <li><strong className="text-foreground">GND:</strong> Connect to GND.</li>
                                <li><strong className="text-foreground">AOUT (Analog Output):</strong> Connect to an analog input pin on the Arduino (e.g., A0).</li>
                            </ul>
                            <p className="mt-2">Use `analogRead()` to get a value representing the gas concentration. This value usually needs to be calibrated to get a precise reading in parts-per-million (PPM).</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Wind className="text-accent" />
                            Key Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Safety Devices:</strong> Gas leak detectors for homes and industrial sites.</li>
                            <li><strong>Environmental Monitoring:</strong> Air quality measurement in cities and homes.</li>
                            <li><strong>Alcohol Detection:</strong> Personal and vehicle-based breathalyzers.</li>
                            <li><strong>Fire Alarms:</strong> Smoke and combustible gas detection.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
