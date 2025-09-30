
import { Beaker, Fish } from "lucide-react";

export default function PhSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        pH Sensor
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How do we measure something we can't see, like the acidity of a liquid? The pH sensor gives our projects a "chemical sense," allowing them to measure the quality of water, soil, and other solutions.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Beaker className="text-accent" />
                             How It Works: The Three-Step Process
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>A typical pH sensor works by measuring a voltage difference created by hydrogen ion concentration.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor consists of a glass probe (the measuring electrode) and a reference electrode. The tip of the glass probe is made of a special glass that is permeable to hydrogen ions (H+).</li>
                                <li><strong>Conversion:</strong> A difference in the concentration of H+ ions between the inside of the probe and the liquid being tested creates a tiny voltage across the glass membrane. The reference electrode provides a stable, constant voltage.</li>
                                <li><strong>Output:</strong> The sensor's electronic module amplifies the very small voltage difference between the measuring electrode and the reference electrode. This final voltage is linearly proportional to the pH of the solution. An onboard circuit converts this to a signal that a microcontroller can read.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Fish className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Agriculture and Hydroponics:</strong> To monitor and maintain the optimal pH of soil and nutrient solutions for healthy plant growth.</li>
                            <li><strong>Aquariums and Aquaculture:</strong> Crucial for maintaining the proper water chemistry for the health of fish and other aquatic life.</li>
                            <li><strong>Water Quality Monitoring:</strong> Used in water treatment plants, swimming pools, and environmental testing to ensure water is safe and balanced.</li>
                            <li><strong>Scientific Laboratories:</strong> A fundamental tool for chemistry and biology experiments.</li>
                        </ul>
                         <p className="mt-4 text-muted-foreground border-l-4 border-accent pl-4"><strong>Important Note:</strong> pH sensors are sensitive instruments. They must be kept clean, stored in a proper storage solution when not in use, and regularly calibrated with buffer solutions of known pH values (e.g., pH 4.0, 7.0) to ensure accurate readings.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
