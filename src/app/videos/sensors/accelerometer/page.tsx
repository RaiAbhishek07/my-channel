
import { Move3d, Gamepad2 } from "lucide-react";

export default function AccelerometerPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Accelerometer (ADXL335)
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How does a gaming controller detect your swings? How does a smartphone switch its screen orientation? The answer is an accelerometer, a tiny chip that can feel motion and gravity.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Move3d className="text-accent" />
                             How It Works: A Mass on Springs
                        </h2>
                         <div className="text-muted-foreground space-y-4">
                            <p>An accelerometer measures "proper acceleration," which includes both motion and the constant pull of gravity. It does this using a micro-electro-mechanical system (MEMS).</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> Imagine a microscopic mass suspended by tiny, flexible springs inside the chip. When the sensor accelerates in a certain direction, inertia causes the mass to lag behind, slightly compressing or stretching the springs.</li>
                                <li><strong>Conversion:</strong> The chip measures this tiny displacement. In many sensors like the ADXL335, this is done by measuring the change in capacitance. The suspended mass acts as one plate of a capacitor, and fixed plates are nearby. As the mass moves, the distance between the plates changes, which changes the capacitance.</li>
                                <li><strong>Output:</strong> The sensor's internal circuitry converts this change in capacitance into an analog voltage. The ADXL335 provides three separate analog outputs: one for the X-axis, one for the Y-axis, and one for the Z-axis, each representing the acceleration on that dimension.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Gamepad2 className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Screen Orientation:</strong> In smartphones and tablets, the accelerometer detects the direction of gravity to determine which way is "down" and rotates the screen accordingly.</li>
                            <li><strong>Tilt Sensing:</strong> Because it can feel gravity, it can be used to measure the angle of tilt of any object, which is crucial for balancing robots or drones.</li>
                            <li><strong>Motion & Gesture Input:</strong> In gaming controllers (like the Nintendo Wii remote) and wearable fitness trackers to detect movement, gestures, and count steps.</li>
                            <li><strong>Vibration Analysis:</strong> Monitoring the vibration of industrial machinery to predict failures before they happen.</li>
                            <li><strong>Image Stabilization:</strong> In cameras to detect and compensate for handshake, resulting in sharper photos.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
