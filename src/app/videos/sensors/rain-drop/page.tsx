
import { CloudRain, Car } from "lucide-react";

export default function RainDropSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Rain Drop Sensor
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How can a car automatically turn on its wipers when it starts to rain? This smart feature often relies on a simple principle embodied by the rain drop sensor.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <CloudRain className="text-accent" />
                             How It Works: The Three-Step Process
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>The sensor is essentially a circuit board that gets "completed" by water droplets.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection:</strong> The sensor has a sensing plate covered with a series of exposed, interlocking conductive traces. One set of traces is connected to a positive voltage, and the other is connected to the measurement circuit.</li>
                                <li><strong>Conversion:</strong> When the plate is dry, there is a large air gap between the traces, resulting in very high electrical resistance. When rain droplets fall on the plate, they create a conductive path between the traces. More rain means more conductive paths and a lower overall resistance.</li>
                                <li><strong>Output:</strong> A comparator circuit on the sensor's module reads this change in resistance. It provides a digital output (DOUT) that goes HIGH when enough water is detected, and an analog output (AOUT) that provides a variable voltage based on the amount of water on the plate.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Car className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Automotive Rain Sensors:</strong> To automatically control the speed and activation of windshield wipers.</li>
                            <li><strong>Smart Home Automation:</strong> Triggering actions like automatically closing smart windows or retracting motorized awnings when rain is detected.</li>
                            <li><strong>Agriculture:</strong> As part of a weather station to monitor rainfall and adjust automated irrigation schedules.</li>
                            <li><strong>Weather Monitoring Projects:</strong> A simple and effective way to add rain detection to a DIY weather station.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
