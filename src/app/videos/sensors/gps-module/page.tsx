
import { Globe, Satellite } from "lucide-react";

export default function GpsModulePage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        GPS Module (NEO-6M)
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        How does your phone know your exact location anywhere on Earth? It uses the Global Positioning System (GPS), and modules like the NEO-6M make this powerful technology accessible for any project.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Satellite className="text-accent" />
                             How It Works: Trilateration from Space
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>A GPS module doesn't calculate its own position; it receives signals from a constellation of satellites orbiting the Earth and uses them to determine its location.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection (Listening):</strong> The GPS module's antenna is constantly listening for signals from GPS satellites. Each satellite broadcasts a message that contains its precise location and the exact time the message was sent.</li>
                                <li><strong>Conversion (Calculating Distance):</strong> The module measures the time it took for the signal to travel from the satellite to the receiver. Since the signal travels at the speed of light, the module can calculate its distance from that satellite.</li>
                                <li><strong>Output (Determining Position):</strong> To find its 2D position (latitude and longitude), the module needs to receive signals from at least three satellites. To find its 3D position (including altitude), it needs a fourth. By knowing its distance from several different satellites, it can pinpoint its exact location on the globe through a process called trilateration. The module then outputs this data as text sentences (called NMEA sentences) via a serial/UART connection. A microcontroller can parse these sentences to get the latitude, longitude, altitude, time, speed, and other information.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Globe className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Vehicle Tracking Systems:</strong> To monitor the real-time location of cars, trucks, or ships.</li>
                            <li><strong>Navigation Devices:</strong> The core technology in all car navigation systems and handheld GPS units.</li>
                            <li><strong>Drones and Autonomous Vehicles:</strong> For waypoint navigation and returning to a "home" position.</li>
                            <li><strong>Geotagging:</strong> Automatically adding location data to photos or other data logs.</li>
                            <li><strong>Personal Locator Beacons:</strong> For hikers and adventurers to broadcast their location in an emergency.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

    