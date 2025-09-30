
import { ToyBrick, Plane } from "lucide-react";

export default function Mpu6050Page() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md-text-5xl font-headline font-bold mb-4">
                        MPU-6050 6-Axis IMU
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <ToyBrick className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">The MPU-6050 is a 6-axis Inertial Measurement Unit (IMU) that combines a 3-axis accelerometer and a 3-axis gyroscope on a single chip. The accelerometer measures linear acceleration, while the gyroscope measures rotational velocity. It includes an onboard Digital Motion Processor (DMP) that can process complex motion data, offloading this task from the main microcontroller.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Plane className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Drones and UAVs:</strong> For flight stabilization and control.</li>
                            <li><strong>Gesture Control:</strong> In remote controls and gaming devices to recognize movements.</li>
                            <li><strong>Image Stabilization:</strong> For cameras and smartphones.</li>
                            <li><strong>Self-Balancing Robots:</strong> To maintain balance and stability.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
