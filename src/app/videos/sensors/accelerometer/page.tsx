
import { Move3d, Gamepad2 } from "lucide-react";

export default function AccelerometerPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md-text-5xl font-headline font-bold mb-4">
                        Accelerometer (ADXL335)
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Move3d className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">An accelerometer, like the ADXL335, measures acceleration by detecting the displacement of a small mass. This mass is attached to tiny springs, and when the sensor accelerates, the mass shifts. The sensor measures this shift and converts it into an analog voltage for each of the three axes (X, Y, and Z). It can also detect the constant force of gravity, which allows it to be used for tilt sensing.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Gamepad2 className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Tilt Detection:</strong> Determining the orientation of a device or robot.</li>
                            <li><strong>Motion Sensing:</strong> In gaming controllers and smartphones to detect movement and gestures.</li>
                            <li><strong>Vibration Measurement:</strong> Monitoring the vibration of machinery for predictive maintenance.</li>
                            <li><strong>Image Stabilization:</strong> In cameras to compensate for handshake.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
