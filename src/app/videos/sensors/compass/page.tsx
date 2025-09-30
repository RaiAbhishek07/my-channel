
import { Compass, Map } from "lucide-react";

export default function CompassSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Compass (HMC5883L)
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How does a robot or drone know which way is north? It uses a digital compass, or magnetometer, like the HMC5883L, which can sense the Earth's invisible magnetic field.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Compass className="text-accent" />
                             How It Works: Sensing Magnetic Fields
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>The HMC5883L is a 3-axis magnetometer. It works by using materials whose electrical resistance changes in the presence of a magnetic field.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor contains tiny magneto-resistive elements arranged along three perpendicular axes (X, Y, and Z).</li>
                                <li><strong>Conversion:</strong> When the sensor is placed within a magnetic field (like the Earth's), the resistance of these elements changes. The amount of change is proportional to the strength of the magnetic field component along each axis.</li>
                                <li><strong>Output:</strong> The sensor's internal electronics measure these resistance changes and convert them into digital values representing the magnetic field strength on the X, Y, and Z axes. A microcontroller can then read these values (typically via the I²C communication protocol).</li>
                            </ol>
                             <p className="border-l-4 border-accent pl-4 text-foreground">By using trigonometry (specifically the `atan2` function) on the X and Y values, you can calculate the heading angle relative to magnetic north.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Map className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Navigation:</strong> The primary component in digital compasses for robots, drones, and autonomous vehicles to determine their heading.</li>
                            <li><strong>Smartphones and Tablets:</strong> Used by map applications to show which direction you are facing.</li>
                            <li><strong>9-DOF IMUs:</strong> This type of sensor is the "M" in a 9-DOF IMU (like the MPU-9250), providing the absolute heading reference.</li>
                            <li><strong>Magnetic Field Detection:</strong> Can also be used to detect the presence of strong magnets or ferrous metals nearby.</li>
                        </ul>
                         <p className="mt-4 text-muted-foreground"><strong>Calibration is Key:</strong> Magnetometers are very sensitive to nearby magnetic fields from motors, wires carrying current, and metal objects. For accurate readings, they must be calibrated to compensate for this "hard iron" and "soft iron" interference.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
