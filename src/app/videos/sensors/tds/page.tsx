
import { TestTube, GlassWater } from "lucide-react";

export default function TdsSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        TDS (Total Dissolved Solids) Sensor
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        Is your tap water pure? How do you know if a hydroponics solution has the right amount of nutrients? A TDS sensor measures the "Total Dissolved Solids" in a liquid, giving us a key indicator of its quality and composition.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <TestTube className="text-accent" />
                             How It Works: The Three-Step Process
                        </h2>
                         <div className="text-muted-foreground space-y-4">
                            <p>A TDS sensor doesn't measure solids directly; instead, it measures the electrical conductivity of the water and uses that to estimate the TDS level.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor has two electrodes that are submerged in the water. An AC voltage is applied across these electrodes.</li>
                                <li><strong>Conversion:</strong> Pure water is a poor conductor of electricity. However, dissolved solids like salts, minerals, and metals break down into ions, which allows the water to conduct electricity. The more dissolved solids, the higher the conductivity. The sensor measures how easily current flows between the electrodes.</li>
                                <li><strong>Output:</strong> The sensor's circuit converts the conductivity measurement into an analog voltage. This voltage is proportional to the TDS level, which is typically expressed in parts-per-million (PPM).</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <GlassWater className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Water Quality Testing:</strong> To check the purity of drinking water from taps, filters, and bottled sources.</li>
                            <li><strong>Aquariums and Hydroponics:</strong> Essential for monitoring the concentration of nutrients and salts in the water to ensure a healthy environment for plants and fish.</li>
                            <li><strong>Swimming Pools and Spas:</strong> To monitor the level of dissolved salts and chemicals.</li>
                            <li><strong>Environmental Monitoring:</strong> To assess water quality and pollution levels in rivers, lakes, and streams.</li>
                        </ul>
                         <p className="mt-4 text-muted-foreground border-l-4 border-accent pl-4"><strong>Note on Accuracy:</strong> TDS readings are affected by temperature. Better quality TDS sensor modules include a built-in temperature sensor to automatically compensate for this and provide a more accurate reading.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
