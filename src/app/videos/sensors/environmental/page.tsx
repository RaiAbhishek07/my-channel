
import { Thermometer, Droplets, Wind, Mountain, Sun } from "lucide-react";

export default function EnvironmentalSensorsPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Environmental Sensors
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How does a smart thermostat know when to turn on the AC? How does a weather app get its data? The answer lies in a family of sensors that measure the invisible conditions of the world around us.
                    </p>
                </div>

                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold">
                            <Thermometer className="text-accent" />
                            DHT11 & DHT22 (Temperature & Humidity)
                        </h2>
                        <p className="text-muted-foreground">These are the most common beginner sensors for measuring ambient temperature and humidity. The DHT22 is a more accurate and capable version of the DHT11.</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                           <li><strong>Working Principle:</strong> They use a capacitive humidity sensor and a thermistor (a resistor that changes resistance with temperature) to take readings. An internal chip converts these readings into a digital signal.</li>
                           <li><strong>Arduino Use:</strong> Requires a special library (like the 'DHT sensor library') and communicates over a single digital pin.</li>
                           <li><strong>Applications:</strong> Perfect for basic weather stations, greenhouse monitoring, and indoor climate control systems.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold">
                            <Wind className="text-accent" />
                            BMP180 & BMP280 (Barometric Pressure & Temperature)
                        </h2>
                         <p className="text-muted-foreground">These sensors are designed to measure atmospheric pressure. Because pressure changes with altitude, they can also be used as altimeters. The BMP280 is a newer, more accurate version.</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                           <li><strong>Working Principle:</strong> Based on piezo-resistive technology, where a flexible diaphragm deforms with pressure changes, altering the resistance of an internal circuit.</li>
                           <li><strong>Arduino Use:</strong> They communicate using the I²C protocol, which only requires two pins (SDA and SCL), allowing multiple I²C devices on the same bus.</li>
                           <li><strong>Applications:</strong> Used in drones for altitude hold, in mobile devices for faster GPS lock-on, and in weather stations for forecasting.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold">
                            <Droplets className="text-accent" />
                            BME280 (All-in-One Environmental Sensor)
                        </h2>
                        <p className="text-muted-foreground">This popular sensor is a powerful combination of the BMP280 with an added humidity sensor. It provides temperature, pressure, and humidity readings all from a single component.</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                           <li><strong>Why it's great:</strong> It consolidates three sensors into one, making it ideal for compact IoT devices, wearables, and all-in-one weather stations.</li>
                           <li><strong>Arduino Use:</strong> Communicates over I²C, just like the BMP series.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold">
                            <Mountain className="text-accent" />
                            DS18B20 (Digital Temperature Sensor)
                        </h2>
                       <p className="text-muted-foreground">This is a high-precision digital temperature sensor, often found in a waterproof probe form factor.</p>
                       <ul className="list-disc list-inside text-muted-foreground space-y-2">
                           <li><strong>Working Principle:</strong> Each sensor has a unique 64-bit serial code, allowing multiple sensors to be connected to the same data line.</li>
                           <li><strong>Arduino Use:</strong> It uses the "One-Wire" communication protocol. You can connect many DS18B20 sensors to a single digital pin on your Arduino.</li>
                           <li><strong>Applications:</strong> Excellent for measuring the temperature of liquids, soil, or in outdoor environments where waterproofing is needed.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold">
                            <Sun className="text-accent" />
                            LM35 (Analog Temperature Sensor)
                        </h2>
                        <p className="text-muted-foreground">A classic, simple, and reliable analog temperature sensor.</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Working Principle:</strong> It's incredibly straightforward. Its output voltage is directly and linearly proportional to the temperature in Celsius. For every degree Celsius, the output voltage increases by 10mV.</li>
                            <li><strong>Arduino Use:</strong> Connect its output pin directly to an analog input on the Arduino and use `analogRead()` to get a value.</li>
                            <li><strong>Applications:</strong> Great for basic projects where you need a quick and easy temperature reading without dealing with digital communication protocols.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
