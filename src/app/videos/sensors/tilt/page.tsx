
import { Rotate3d, Bell } from "lucide-react";

export default function TiltSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Tilt Sensor
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How does your phone know to rotate its screen? While modern phones use complex accelerometers, the basic principle of detecting orientation can be achieved with a very simple device: the tilt sensor.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Rotate3d className="text-accent" />
                             How It Works: A Simple Switch
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>A basic tilt sensor is a mechanical switch that is activated by gravity.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> Inside the sensor's housing is a small, conductive element that is free to move, most commonly a metal ball or a drop of mercury (in older sensors).</li>
                                <li><strong>Conversion:</strong> The housing also contains two electrical contacts. When the sensor is held upright, the conductive element rests at the bottom and does not connect the contacts. When the sensor is tilted past a certain angle, gravity causes the element to roll or slide, bridging the gap between the two contacts.</li>
                                <li><strong>Output:</strong> When the contacts are bridged, the switch is "closed," completing a circuit. This provides a clear digital signal (like a button press) that indicates the sensor has been tilted.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Bell className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Simple Alarms:</strong> To detect if an object has been moved or tampered with, such as a sensor on a window that is opened, or on a piece of art that is moved.</li>
                            <li><strong>Toy and Game Activation:</strong> To trigger a sound or light in a toy when it is picked up or turned over.</li>
                            <li><strong>Robot Orientation:</strong> As a very simple way to determine if a robot has fallen over.</li>
                            <li><strong>Level Indication:</strong> Used in simple devices to indicate whether they are being held level or not.</li>
                        </ul>
                        <p className="mt-4 text-muted-foreground border-l-4 border-accent pl-4">While effective for simple on/off tilt detection, these sensors are being replaced in more complex devices (like smartphones) by solid-state accelerometers, which can provide much more detailed orientation data.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
