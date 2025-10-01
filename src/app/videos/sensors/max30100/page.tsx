
import { HeartPulse, Droplets } from "lucide-react";

export default function Max30100Page() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        MAX30100 Pulse Oximeter
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Beyond just counting heartbeats, how can a sensor measure the oxygen level in your blood? The MAX30100 is a sophisticated medical sensor that does both, using two different colors of light.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <HeartPulse className="text-accent" />
                             How It Works: The Color of Blood
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>The MAX30100 is an integrated pulse oximetry and heart-rate monitor sensor. It leverages the fact that oxygenated and deoxygenated hemoglobin in your blood absorb different wavelengths of light.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor contains two LEDs—one that emits red light and another that emits infrared (IR) light—and a photodetector. It rapidly flashes these LEDs and measures the amount of light reflected back from your fingertip or earlobe.</li>
                                <li><strong>Conversion:</strong>
                                    <ul className="list-disc list-inside pl-4 mt-2">
                                        <li><strong>Oxygenated hemoglobin</strong> (HbO2) absorbs more IR light and allows more red light to pass through.</li>
                                        <li><strong>Deoxygenated hemoglobin</strong> (Hb) absorbs more red light and allows more IR light to pass through.</li>
                                    </ul>
                                </li>
                                <li><strong>Output:</strong> The sensor measures the fluctuating parts of both the red and IR light signals, which correspond to the pulse. By calculating the ratio of the absorbed red light to the absorbed infrared light, the sensor can estimate the blood oxygen saturation level (SpO2). It communicates all this raw data to a microcontroller via the I²C protocol for further processing.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Droplets className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Medical Devices:</strong> The core component in clinical-grade pulse oximeters used in hospitals and clinics.</li>
                            <li><strong>High-End Wearables:</strong> Found in advanced smartwatches and fitness trackers that offer SpO2 monitoring.</li>
                            <li><strong>Remote Patient Monitoring:</strong> For tracking the vital signs of patients at home.</li>
                            <li><strong>High-Altitude Training:</strong> Athletes use it to monitor their blood oxygen levels when training at high altitudes.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

    