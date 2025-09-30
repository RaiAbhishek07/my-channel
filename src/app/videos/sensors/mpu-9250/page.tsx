
import { Braces, Bot } from "lucide-react";

export default function Mpu9250Page() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        MPU-9250 9-Axis IMU
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        While a 6-axis IMU knows how it's moving and tilting, it doesn't know which direction it's facing in the world. The MPU-9250 solves this by adding a third sensor, creating a full 9-axis "Absolute Orientation Sensor."
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Braces className="text-accent" />
                             What It Is: Three Sensors in One
                        </h2>
                         <div className="text-muted-foreground space-y-4">
                            <p>The MPU-9250 builds on the MPU-6050 by integrating a magnetometer into the same package, giving you three sensors and 9 degrees of freedom (9-DOF):</p>
                             <ul className="list-disc list-inside space-y-2">
                                <li><strong>A 3-Axis Accelerometer:</strong> Measures linear acceleration and gravity.</li>
                                <li><strong>A 3-Axis Gyroscope:</strong> Measures rotational velocity.</li>
                                <li><strong>A 3-Axis Magnetometer:</strong> Measures the strength and direction of the Earth's magnetic field, acting as a digital compass.</li>
                            </ul>
                            <p className="border-l-4 border-accent pl-4 text-foreground">
                                <strong>The "Heading" Axis:</strong> The magnetometer is the key addition. The accelerometer can tell you which way is "down" (gravity), but it can't distinguish north from south or east from west. The magnetometer provides this missing piece of information, allowing the sensor to determine its absolute heading relative to magnetic north.
                            </p>
                             <p>By fusing the data from all three sensors (accelerometer, gyroscope, and magnetometer), a system can get a very robust and accurate understanding of its orientation in 3D space that is not prone to drift and knows its absolute direction.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Bot className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Advanced Robotics & Drones:</strong> For true autonomous navigation where knowing the compass heading is critical, especially in GPS-denied environments.</li>
                            <li><strong>Virtual and Augmented Reality:</strong> For precise head and controller tracking without drift, ensuring the virtual world stays aligned with the real world.</li>
                            <li><strong>Personnel Navigation:</strong> In devices carried by firefighters or soldiers to track their movement and orientation inside buildings.</li>
                             <li><strong>Satellite and Antenna Pointing:</strong> To accurately orient communication equipment.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
