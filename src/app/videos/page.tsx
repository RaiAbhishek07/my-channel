
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Video = {
  id: string;
  href: string;
  title: string;
  description: string;
  category: 'Core Concepts' | 'Sensors' | 'Actuators & Output' | 'Communication' | 'Health & Biometrics' | 'Location & Tracking';
};

const allVideos: Video[] = [
  {
    id: 'embedded-systems-video',
    href: '/videos/embedded-systems',
    title: 'Introduction to Embedded Systems',
    description: 'A beginner-friendly introduction to the world of embedded systems, covering the basics of microcontrollers, sensors, and real-world applications.',
    category: 'Core Concepts',
  },
  {
    id: 'ir-sensor-video',
    href: '/videos/sensors/ir-obstacle-avoidance',
    title: 'IR Obstacle Avoidance Sensor',
    description: 'Learn how this sensor emits and detects infrared light to avoid obstacles. Perfect for robotics and automation.',
    category: 'Sensors',
  },
  {
    id: 'ldr-sensor-video',
    href: '/videos/sensors/ldr',
    title: 'LDR (Light Dependent Resistor)',
    description: 'Discover how an LDR works by changing resistance based on light, ideal for automatic streetlights and solar trackers.',
    category: 'Sensors',
  },
  {
    id: 'touch-sensor-video',
    href: '/videos/sensors/capacitive-touch',
    title: 'Capacitive Touch Sensor (TTP223)',
    description: 'Explore how capacitive sensors detect human touch to create modern buttons and interactive devices.',
    category: 'Sensors',
  },
  {
    id: 'ultrasonic-sensor-video',
    href: '/videos/sensors/ultrasonic-distance',
    title: 'Ultrasonic Distance Sensor (HC-SR04)',
    description: 'Understand how ultrasonic waves measure distance with high accuracy, used in robotics and parking sensors.',
    category: 'Sensors',
  },
  {
    id: 'environmental-sensors-video',
    href: '/videos/sensors/environmental',
    title: 'Environmental Sensors',
    description: 'An overview of common sensors for measuring temperature, humidity, pressure, and air quality.',
    category: 'Sensors',
  },
  {
    id: 'mq-sensors-video',
    href: '/videos/sensors/mq-series',
    title: 'MQ Series Gas Sensors',
    description: 'An overview of MQ series gas sensors like MQ-2, MQ-3, MQ-7, and MQ-135 for detecting various gases.',
    category: 'Sensors',
  },
  {
    id: 'soil-moisture-sensor-video',
    href: '/videos/sensors/soil-moisture',
    title: 'Soil Moisture Sensor',
    description: 'Measures the moisture content of soil to enable smart irrigation and agricultural automation.',
    category: 'Sensors',
  },
  {
    id: 'rain-drop-sensor-video',
    href: '/videos/sensors/rain-drop',
    title: 'Rain Drop Sensor',
    description: 'Detects rain droplets, perfect for automatic wipers and weather monitoring systems.',
    category: 'Sensors',
  },
  {
    id: 'water-level-sensor-video',
    href: '/videos/sensors/water-level',
    title: 'Water Level Sensor',
    description: 'Detects the presence or height of water, ideal for tank monitoring and flood detection.',
    category: 'Sensors',
  },
  {
    id: 'ph-sensor-video',
    href: '/videos/sensors/ph',
    title: 'pH Sensor',
    description: 'Measures hydrogen ion concentration, used in agriculture, aquariums, and labs.',
    category: 'Sensors',
  },
  {
    id: 'tds-sensor-video',
    href: '/videos/sensors/tds',
    title: 'TDS Sensor',
    description: 'Measures Total Dissolved Solids to determine water quality and salinity.',
    category: 'Sensors',
  },
  {
    id: 'uv-sensor-video',
    href: '/videos/sensors/uv',
    title: 'UV Sensor (ML8511)',
    description: 'Outputs a voltage proportional to UV light intensity, perfect for sun exposure monitoring.',
    category: 'Sensors',
  },
  {
    id: 'sound-sensor-video',
    href: '/videos/sensors/sound',
    title: 'Sound Sensor (Microphone)',
    description: 'Detects sound and provides an amplified signal for projects like clap switches.',
    category: 'Sensors',
  },
  {
    id: 'dust-sensor-video',
    href: '/videos/sensors/dust',
    title: 'Dust Sensor (GP2Y1010AU0F)',
    description: 'Detects fine dust particles in the air, used in air purifiers and pollution monitors.',
    category: 'Sensors',
  },
  {
    id: 'flame-sensor-video',
    href: '/videos/sensors/flame',
    title: 'Flame Sensor',
    description: 'Detects flame light in the infrared spectrum for fire detection and safety systems.',
    category: 'Sensors',
  },
  {
    id: 'pir-motion-sensor-video',
    href: '/videos/sensors/pir-motion',
    title: 'PIR Motion Sensor',
    description: 'Detects human movement via changes in infrared radiation, ideal for security alarms and automatic lighting.',
    category: 'Sensors',
  },
  {
    id: 'vibration-sensor-video',
    href: '/videos/sensors/vibration',
    title: 'Vibration Sensor (SW-420)',
    description: 'A spring-based switch that detects vibration or shock, used in anti-theft alarms and earthquake detection.',
    category: 'Sensors',
  },
  {
    id: 'tilt-sensor-video',
    href: '/videos/sensors/tilt',
    title: 'Tilt Sensor',
    description: 'Uses a mercury or ball switch to detect the orientation of an object, often used in alarm systems.',
    category: 'Sensors',
  },
  {
    id: 'accelerometer-video',
    href: '/videos/sensors/accelerometer',
    title: 'Accelerometer (ADXL335)',
    description: 'Measures acceleration along the X, Y, and Z axes, essential for tilt detection and robotics.',
    category: 'Sensors',
  },
  {
    id: 'mpu-6050-video',
    href: '/videos/sensors/mpu-6050',
    title: 'MPU-6050 6-Axis IMU',
    description: 'A 6-axis Inertial Measurement Unit combining an accelerometer and a gyroscope for motion tracking.',
    category: 'Sensors',
  },
  {
    id: 'mpu-9250-video',
    href: '/videos/sensors/mpu-9250',
    title: 'MPU-9250 9-Axis IMU',
    description: 'A 9-axis Inertial Measurement Unit that adds a magnetometer to the accelerometer and gyroscope.',
    category: 'Sensors',
  },
  {
    id: 'compass-video',
    href: '/videos/sensors/compass',
    title: 'Compass (HMC5883L)',
    description: 'A digital magnetometer that provides directional data for navigation and robotics.',
    category: 'Sensors',
  },
  {
    id: 'pedometer-video',
    href: '/videos/sensors/pedometer',
    title: 'Pedometer / Step Counter',
    description: 'Learn how an accelerometer can be used to count steps and track activity.',
    category: 'Sensors',
  },
  {
    id: 'shock-sensor-video',
    href: '/videos/sensors/shock',
    title: 'Shock Sensor',
    description: 'Detects sudden, sharp impacts for applications like car alarms and package monitoring.',
    category: 'Sensors',
  },
  {
    id: 'ir-receiver-video',
    href: '/videos/sensors/ir-receiver',
    title: 'IR Receiver (TSOP1738)',
    description: 'Learn to decode signals from any remote control for your projects.',
    category: 'Communication',
  },
  {
    id: 'ir-transmitter-receiver-video',
    href: '/videos/sensors/ir-transmitter-receiver',
    title: 'IR Transmitter & Receiver Pair',
    description: 'Create line-following robots or custom remote controls with this fundamental pair.',
    category: 'Communication',
  },
  {
    id: 'laser-module-video',
    href: '/videos/sensors/laser-module',
    title: 'Laser Module Sensor',
    description: 'Use a focused beam of light for precise detection, tripwires, and alignment tasks.',
    category: 'Actuators & Output',
  },
  {
    id: 'color-sensor-video',
    href: '/videos/sensors/color-sensor',
    title: 'Color Sensor (TCS3200)',
    description: 'Enable your projects to see in color, perfect for sorting objects or identifying materials.',
    category: 'Sensors',
  },
  {
    id: 'gesture-sensor-video',
    href: '/videos/sensors/gesture-sensor',
    title: 'Gesture Sensor (APDS-9960)',
    description: 'Implement touchless controls by detecting gestures, proximity, and ambient light.',
    category: 'Sensors',
  },
  {
    id: 'camera-module-video',
    href: '/videos/sensors/camera-module',
    title: 'Camera Module (OV7670)',
    description: 'Add vision to your Arduino projects to capture images and video for processing.',
    category: 'Sensors',
  },
  {
    id: 'line-tracking-video',
    href: '/videos/sensors/line-tracking',
    title: 'Line Tracking Sensor (TCRT5000)',
    description: 'A key component for building line-following robots that can navigate a defined path.',
    category: 'Sensors',
  },
  {
    id: 'pulse-sensor-video',
    href: '/videos/sensors/pulse',
    title: 'Pulse Sensor',
    description: 'An optical sensor that measures your pulse by detecting blood flow.',
    category: 'Health & Biometrics',
  },
  {
    id: 'max30100-video',
    href: '/videos/sensors/max30100',
    title: 'MAX30100 Pulse Oximeter',
    description: 'A pulse oximeter and heart-rate sensor using red and IR LEDs.',
    category: 'Health & Biometrics',
  },
  {
    id: 'ecg-sensor-video',
    href: '/videos/sensors/ecg',
    title: 'ECG Sensor (AD8232)',
    description: 'Captures the electrical activity of the heart for ECG monitoring.',
    category: 'Health & Biometrics',
  },
  {
    id: 'ir-temp-sensor-video',
    href: '/videos/sensors/ir-temperature',
    title: 'IR Temperature Sensor (MLX90614)',
    description: 'Measures temperature without making contact.',
    category: 'Sensors',
  },
  {
    id: 'emg-sensor-video',
    href: '/videos/sensors/emg',
    title: 'EMG Sensor',
    description: 'Measures the electrical activity of muscles.',
    category: 'Health & Biometrics',
  },
  {
    id: 'rfid-reader-video',
    href: '/videos/sensors/rfid-reader',
    title: 'RFID Reader (RC522)',
    description: 'Reads RFID tags at 13.56 MHz for access control and identification systems.',
    category: 'Communication',
  },
  {
    id: 'fingerprint-sensor-video',
    href: '/videos/sensors/fingerprint',
    title: 'Fingerprint Sensor (R307/AS608)',
    description: 'Provides biometric authentication by reading fingerprints.',
    category: 'Health & Biometrics',
  },
  {
    id: 'gas-leakage-sensor-video',
    href: '/videos/sensors/gas-leakage',
    title: 'Gas Leakage Sensor',
    description: 'Detects the presence of combustible gases like LPG and propane.',
    category: 'Sensors',
  },
  {
    id: 'gps-module-video',
    href: '/videos/sensors/gps-module',
    title: 'GPS Module (NEO-6M)',
    description: 'Provides location data from satellites, used in tracking and navigation.',
    category: 'Location & Tracking',
  }
];

const categories = ['All', ...new Set(allVideos.map((video) => video.category))];

const VIDEOS_PER_PAGE = 5;

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos = allVideos.filter((video) => {
    const matchesCategory = activeCategory === 'All' || video.category === activeCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE);
  const paginatedVideos = filteredVideos.slice(
    (currentPage - 1) * VIDEOS_PER_PAGE,
    currentPage * VIDEOS_PER_PAGE
  );

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Videos
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse through videos on technology and engineering.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search videos..." 
                className="pl-10" 
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {paginatedVideos.map((video) => (
            <Link href={video.href} key={video.id} className="block">
              <Card className="group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary bg-card">
                <CardHeader className="flex-row items-start gap-4">
                  <Video className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="font-headline text-xl mb-1">
                      {video.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {video.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-end text-sm font-medium text-primary">
                        Watch Video
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={handlePreviousPage}
                  className={cn(currentPage === 1 ? "pointer-events-none opacity-50" : "", "cursor-pointer")}
                />
              </PaginationItem>
              <PaginationItem>
                <span className="p-2 text-sm font-medium">
                  Page {currentPage} of {totalPages}
                </span>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext 
                  onClick={handleNextPage} 
                  className={cn(currentPage === totalPages ? "pointer-events-none opacity-50" : "", "cursor-pointer")}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}

    