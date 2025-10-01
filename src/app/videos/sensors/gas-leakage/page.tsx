
import { ShieldAlert, Flame } from "lucide-react";

export default function GasLeakageSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Gas Leakage Sensor
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        How can you build a device that warns you about a dangerous gas leak before it's too late? Gas leakage sensors are simple but critical components for detecting combustible gases like LPG and propane.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <ShieldAlert className="text-accent" />
                             How It Works: Chemiresistors
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>Most common gas leakage sensors are a type of chemiresistor, often part of the MQ sensor family (like the MQ-2 or MQ-6). Their electrical resistance changes when they come into contact with certain gases.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor contains a sensing element made of a metal-oxide semiconductor (like Tin Dioxide, SnO₂), which is kept at a high temperature by a small internal heater.</li>
                                <li><strong>Conversion:</strong> In clean air, the material has a high electrical resistance. When combustible gas molecules come into contact with the heated sensing element, a chemical reaction occurs that lowers the material's resistance. The more concentrated the gas, the lower the resistance becomes.</li>
                                <li><strong>Output:</strong> The sensor module has a simple circuit that converts this change in resistance into a voltage. It provides an analog output (AOUT) pin where the voltage increases with the gas concentration. Many modules also have a digital output (DOUT) that goes HIGH when the concentration crosses a threshold that can be adjusted with an onboard potentiometer.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Flame className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Home Safety Alarms:</strong> For detecting leaks from natural gas lines, propane tanks (for BBQs), or LPG cylinders in kitchens.</li>
                            <li><strong>Industrial Safety:</strong> Monitoring for combustible gas leaks in factories, processing plants, and storage facilities.</li>
                            <li><strong>Portable Gas Detectors:</strong> For use by utility workers and first responders to quickly identify gas leaks in the field.</li>
                            <li><strong>Smart Home Systems:</strong> Integrating with a home automation system to send alerts to a homeowner's phone and automatically shut off the gas supply.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

    