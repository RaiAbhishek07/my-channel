
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
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <TestTube className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">A TDS sensor measures the electrical conductivity of water to estimate the total dissolved solids (TDS). It works by applying a voltage between two electrodes. Pure water is a poor conductor of electricity, but dissolved salts and minerals increase its conductivity. The sensor measures this conductivity to infer the TDS level, usually expressed in parts-per-million (PPM).</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <GlassWater className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Water Quality Testing:</strong> To check the purity of drinking water, pools, and spas.</li>
                            <li><strong>Aquariums and Hydroponics:</strong> To monitor the nutrient and salt levels in the water.</li>
                            <li><strong>Industrial Water Treatment:</strong> Ensuring water quality for manufacturing processes.</li>
                            <li><strong>Environmental Monitoring:</strong> To assess the pollution levels in rivers and lakes.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
