
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Droplets, Gauge, Waves, Wind, FlaskConical, Microscope, HeartPulse, Fingerprint, MapPin, RadioTower, Lightbulb, Camera, Move3d } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sensorCategories = [
    {
        title: "Proximity & Distance Sensors",
        icon: <Move3d className="w-6 h-6 text-accent" />,
        sensors: [
            "IR Obstacle Avoidance Sensor",
            "LDR (Light Dependent Resistor) Sensor",
            "Capacitive Touch Sensor (TTP223)",
            "Ultrasonic Distance Sensor (HC-SR04)",
        ]
    },
    {
        title: "Environmental Sensors",
        icon: <Wind className="w-6 h-6 text-accent" />,
        sensors: [
            "DHT11 (Temperature & Humidity)",
            "DHT22 (Temperature & Humidity – higher accuracy)",
            "BMP180 (Barometric Pressure & Temperature)",
            "BMP280 (Pressure, Temperature, Altitude)",
            "BME280 (Temp + Humidity + Pressure)",
            "DS18B20 (Digital Temperature Sensor)",
            "LM35 (Analog Temperature Sensor)",
            "MQ-2 (Smoke & Gas Sensor)",
            "MQ-3 (Alcohol Sensor)",
            "MQ-7 (Carbon Monoxide Sensor)",
            "MQ-135 (Air Quality Sensor)",
            "Soil Moisture Sensor",
            "Rain Drop Sensor",
            "Water Level Sensor",
            "pH Sensor",
            "TDS (Water Quality) Sensor",
            "UV Sensor (ML8511)",
            "Sound Sensor (Microphone Module)",
            "Dust Sensor (GP2Y1010AU0F)",
            "Flame Sensor",
        ]
    },
    {
        title: "Motion & Position Sensors",
        icon: <Gauge className="w-6 h-6 text-accent" />,
        sensors: [
            "PIR Motion Sensor",
            "Vibration Sensor (SW-420)",
            "Tilt Sensor",
            "Accelerometer (ADXL335)",
            "Accelerometer + Gyroscope (MPU-6050)",
            "MPU-9250 (Accelerometer + Gyro + Magnetometer)",
            "Compass Module (HMC5883L)",
            "Step Counter / Pedometer Sensor",
            "Shock Sensor",
        ]
    },
    {
        title: "Imaging & Optical Sensors",
        icon: <Camera className="w-6 h-6 text-accent" />,
        sensors: [
            "IR Receiver (TSOP1738)",
            "IR Transmitter + Receiver Pair",
            "Laser Module Sensor",
            "Color Sensor (TCS3200)",
            "Gesture Sensor (APDS-9960)",
            "Camera Module (OV7670 for Arduino)",
            "Line Tracking Sensor (TCRT5000)",
        ]
    },
    {
        title: "Biomedical Sensors",
        icon: <HeartPulse className="w-6 h-6 text-accent" />,
        sensors: [
            "Pulse Sensor (Heart Rate)",
            "MAX30100 (Pulse Oximeter + Heart Rate)",
            "ECG Sensor (AD8232)",
            "Body Temperature Sensor (MLX90614 – Infrared)",
            "EMG Sensor (Muscle Activity)",
        ]
    },
    {
        title: "Specialized / Advanced Sensors",
        icon: <FlaskConical className="w-6 h-6 text-accent" />,
        sensors: [
            "RFID Reader Module (RC522)",
            "Fingerprint Sensor (R307/AS608)",
            "Gas Leakage Sensor (LPG/Propane)",
            "GPS Module (NEO-6M)",
        ]
    }
];

export default function SensorsPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Electronics Sensors
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive list of sensors for your electronics and embedded systems projects.
            </p>
          </div>

          <Accordion type="multiple" className="w-full space-y-4">
            {sensorCategories.map((category) => (
              <AccordionItem value={category.title} key={category.title} className="border-b-0">
                <Card>
                    <AccordionTrigger className="p-6 hover:no-underline">
                        <div className="flex items-center gap-4">
                            {category.icon}
                            <h2 className="text-xl font-headline font-semibold">
                                {category.title}
                            </h2>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="p-6 pt-0">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-muted-foreground">
                                {category.sensors.map((sensor) => (
                                    <li key={sensor} className="p-3 bg-muted/30 rounded-md text-sm">{sensor}</li>
                                ))}
                            </ul>
                        </div>
                    </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>

        </section>
      </div>
    </div>
  );
}
