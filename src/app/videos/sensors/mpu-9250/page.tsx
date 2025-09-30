
import { Braces, Bot } from "lucide-react";

export default function Mpu9250Page() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md-text-5xl font-headline font-bold mb-4">
                        MPU-9250 9-Axis IMU
                    </h1>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Braces className="text-accent" />
                            Working Principle
                        </h2>
                        <p className="text-muted-foreground">The MPU-9250 is a 9-axis IMU that builds upon the MPU-6050 by adding a 3-axis magnetometer to the 3-axis accelerometer and 3-axis gyroscope. This combination allows the sensor to measure linear acceleration, rotational velocity, and its orientation relative to the Earth's magnetic field. This provides a more complete and accurate picture of the device's motion and orientation in 3D space.</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Bot className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Advanced Robotics:</strong> For precise navigation and orientation awareness.</li>
                            <li><strong>Virtual and Augmented Reality:</strong> For head tracking and motion control.</li>
                            <li><strong>Drones:</strong> For more accurate heading and navigation, especially in GPS-denied environments.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
