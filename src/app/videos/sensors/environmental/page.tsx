
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
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Thermometer className="text-accent" />
                            DHT11 (Temperature & Humidity)
                        </h2>
                        <div className="text-muted-foreground space-y-2">
                            <p><strong>Working:</strong> Uses a capacitive humidity sensor and a thermistor to measure the surrounding air.</p>
                            <p><strong>Features:</strong> Measures 20-90% relative humidity (with ±5% accuracy) and 0-50 °C temperature (with ±2 °C accuracy).</p>
                            <p><strong>Arduino Use:</strong> Very popular with Arduino. It requires the 'DHT' library and communicates over a single digital pin.</p>
                            <p><strong>Applications:</strong> Common in basic weather stations, greenhouse monitoring, and indoor climate control systems.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Thermometer className="text-accent" />
                            DHT22 (AM2302)
                        </h2>
                        <div className="text-muted-foreground space-y-2">
                            <p>An improved version of the DHT11, offering higher precision and a wider measurement range.</p>
                            <ul className="list-disc list-inside">
                                <li><strong>Temperature Range:</strong> -40 to 80 °C (±0.5 °C accuracy).</li>
                                <li><strong>Humidity Range:</strong> 0-100% RH (±2% accuracy).</li>
                            </ul>
                             <p>It's a bit more expensive but recommended for more serious projects.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Wind className="text-accent" />
                            BMP180 (Barometric Pressure & Temperature)
                        </h2>
                        <div className="text-muted-foreground space-y-2">
                            <p><strong>Working:</strong> Based on piezo-resistive technology to sense pressure.</p>
                            <p><strong>Features:</strong> Measures atmospheric pressure from 300 to 1100 hPa. This data can also be used to estimate altitude.</p>
                            <p><strong>Arduino Use:</strong> Communicates with Arduino using the I²C protocol, so it only needs two pins (SDA and SCL).</p>
                             <p><strong>Applications:</strong> Used in altimeters, weather forecasting devices, and drones to maintain altitude.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Wind className="text-accent" />
                            BMP280
                        </h2>
                        <p className="text-muted-foreground">An upgrade to the BMP180, this sensor offers higher accuracy, lower noise, and can be used over both I²C and SPI. It's a pressure and temperature sensor, but does not measure humidity.</p>
                    </div>
                    
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Droplets className="text-accent" />
                            BME280
                        </h2>
                        <p className="text-muted-foreground">This is a powerful all-in-one environmental sensor that combines a temperature sensor, humidity sensor, and a barometric pressure sensor in a single package. It's a go-to choice for compact IoT weather stations and smart home devices.</p>
                    </div>
                    
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Mountain className="text-accent" />
                            DS18B20 (Digital Temperature Sensor)
                        </h2>
                        <div className="text-muted-foreground space-y-2">
                           <p><strong>Features:</strong> Often comes in a waterproof probe, making it perfect for measuring liquid temperatures. It has a wide range of -55°C to +125°C.</p>
                           <p><strong>Arduino Use:</strong> It uses the "One-Wire" communication protocol, meaning multiple sensors can be connected to the same digital pin on an Arduino.</p>
                           <p><strong>Applications:</strong> Monitoring the temperature of aquariums, soil, or industrial liquids.</p>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Sun className="text-accent" />
                            LM35 (Analog Temperature Sensor)
                        </h2>
                        <div className="text-muted-foreground space-y-2">
                            <p><strong>Working:</strong> A classic and simple analog sensor. Its output voltage is linearly proportional to the temperature in Celsius (10 mV per degree Celsius).</p>
                            <p><strong>Applications:</strong> Great for basic projects where you need a quick and easy temperature reading without complex digital communication.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
