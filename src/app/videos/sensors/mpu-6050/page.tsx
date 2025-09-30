
import { ToyBrick, Plane } from "lucide-react";

export default function Mpu6050Page() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        MPU-6050 6-Axis IMU
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How does a drone stay perfectly level in the air? How does a VR headset track your head movements? It uses an Inertial Measurement Unit (IMU) like the MPU-6050, which combines multiple sensors to understand its motion in 3D space.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <ToyBrick className="text-accent" />
                             What It Is: Two Sensors in One
                        </h2>
                         <div className="text-muted-foreground space-y-4">
                            <p>The MPU-6050 is a powerful chip that contains two different types of motion sensors (6 axes of measurement in total):</p>
                             <ul className="list-disc list-inside space-y-2">
                                <li><strong>A 3-Axis Accelerometer:</strong> This measures linear acceleration along the X, Y, and Z axes. It's great for detecting tilt and the direction of gravity, but it's "noisy" and can be fooled by sudden movements.</li>
                                <li><strong>A 3-Axis Gyroscope:</strong> This measures angular velocity (how fast the sensor is rotating) around the X, Y, and Z axes. It's excellent for detecting rotation quickly, but it suffers from "drift" over time, where small errors accumulate and cause it to lose its sense of absolute orientation.</li>
                            </ul>
                            <p className="border-l-4 border-accent pl-4 text-foreground">
                                <strong>Sensor Fusion:</strong> The real power of the MPU-6050 comes from combining the data from both sensors. By using a mathematical technique called "sensor fusion" (often with a Kalman filter or a complementary filter), you can use the gyroscope for short-term rotation data and the accelerometer to correct the gyroscope's drift over the long term. This gives you a stable and accurate measurement of the sensor's orientation.
                            </p>
                             <p>The MPU-6050 even includes an onboard Digital Motion Processor™ (DMP) that can perform this complex sensor fusion for you, offloading the work from your main microcontroller.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Plane className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Drones and UAVs:</strong> The absolute core component for flight stabilization and control, keeping the aircraft level.</li>
                            <li><strong>Self-Balancing Robots:</strong> To provide the fast and accurate tilt data needed to maintain balance.</li>
                            <li><strong>Gesture Control & Motion Tracking:</strong> In remote controls, gaming devices, and VR/AR headsets to track movement and orientation.</li>
                            <li><strong>Camera and Gimbal Stabilization:</strong> To keep a camera steady and level, even when the platform it's mounted on is moving.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
