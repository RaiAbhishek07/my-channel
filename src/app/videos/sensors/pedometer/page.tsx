
import { Footprints, Smartphone } from "lucide-react";

export default function PedometerPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Pedometer / Step Counter
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How does your fitness tracker or smartphone know how many steps you've taken? It's not magic; it's a clever algorithm processing data from a sensor you already have: an accelerometer.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Footprints className="text-accent" />
                             How It Works: Finding a Pattern in Noise
                        </h2>
                         <div className="text-muted-foreground space-y-4">
                            <p>A pedometer isn't a single sensor, but an application of an accelerometer. It works by identifying the unique rhythmic pattern of walking.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> A 3-axis accelerometer continuously measures all the forces acting on it. This includes gravity, but also the sharp impacts and bounces that happen when you walk or run.</li>
                                <li><strong>Conversion (Filtering):</strong> The raw accelerometer data is very "noisy." The first job of a pedometer algorithm is to filter this data to remove noise and isolate the periodic signal associated with walking. It often calculates the combined magnitude of acceleration from all three axes.</li>
                                <li><strong>Output (Peak Detection):</strong> The algorithm then looks for distinct "peaks" in this filtered data. Each time your foot hits the ground, it creates a small spike in the acceleration magnitude. By setting a threshold, the algorithm can count how many times this spike occurs within a certain time frame. If the peaks are regular and frequent enough, it counts them as steps.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Smartphone className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Fitness Trackers & Smartwatches:</strong> The core function of nearly every wearable device is to track daily activity, with step counting as the primary metric.</li>
                            <li><strong>Smartphones:</strong> Most modern phones have a low-power accelerometer that is always on, allowing health and fitness apps to count your steps without draining the battery.</li>
                            <li><strong>Medical and Rehabilitation Devices:</strong> To track the activity levels of patients recovering from injuries or surgery, ensuring they are meeting mobility goals.</li>
                            <li><strong>Gaming:</strong> Used in games that incorporate real-world movement as part of the gameplay.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
