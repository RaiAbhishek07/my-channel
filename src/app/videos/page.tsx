
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

type Video = {
  id: string;
  href: string;
  title: string;
  description: string;
};

const allVideos: Video[] = [
  {
    id: 'embedded-systems-video',
    href: '/videos/embedded-systems',
    title: 'Introduction to Embedded Systems',
    description: 'A beginner-friendly introduction to the world of embedded systems, covering the basics of microcontrollers, sensors, and real-world applications.',
  },
  {
    id: 'ir-sensor-video',
    href: '/videos/sensors/ir-obstacle-avoidance',
    title: 'IR Obstacle Avoidance Sensor',
    description: 'Learn how this sensor emits and detects infrared light to avoid obstacles. Perfect for robotics and automation.',
  },
  {
    id: 'ldr-sensor-video',
    href: '/videos/sensors/ldr',
    title: 'LDR (Light Dependent Resistor)',
    description: 'Discover how an LDR works by changing resistance based on light, ideal for automatic streetlights and solar trackers.',
  },
  {
    id: 'touch-sensor-video',
    href: '/videos/sensors/capacitive-touch',
    title: 'Capacitive Touch Sensor (TTP223)',
    description: 'Explore how capacitive sensors detect human touch to create modern buttons and interactive devices.',
  },
  {
    id: 'ultrasonic-sensor-video',
    href: '/videos/sensors/ultrasonic-distance',
    title: 'Ultrasonic Distance Sensor (HC-SR04)',
    description: 'Understand how ultrasonic waves measure distance with high accuracy, used in robotics and parking sensors.',
  },
  {
    id: 'environmental-sensors-video',
    href: '/videos/sensors/environmental',
    title: 'Environmental Sensors',
    description: 'An overview of common sensors for measuring temperature, humidity, pressure, and air quality.',
  },
  {
    id: 'mq-sensors-video',
    href: '/videos/sensors/mq-series',
    title: 'MQ Series Gas Sensors',
    description: 'An overview of MQ series gas sensors like MQ-2, MQ-3, MQ-7, and MQ-135 for detecting various gases.',
  },
  {
    id: 'soil-moisture-sensor-video',
    href: '/videos/sensors/soil-moisture',
    title: 'Soil Moisture Sensor',
    description: 'Measures the moisture content of soil to enable smart irrigation and agricultural automation.',
  },
  {
    id: 'rain-drop-sensor-video',
    href: '/videos/sensors/rain-drop',
    title: 'Rain Drop Sensor',
    description: 'Detects rain droplets, perfect for automatic wipers and weather monitoring systems.',
  },
  {
    id: 'water-level-sensor-video',
    href: '/videos/sensors/water-level',
    title: 'Water Level Sensor',
    description: 'Detects the presence or height of water, ideal for tank monitoring and flood detection.',
  },
  {
    id: 'ph-sensor-video',
    href: '/videos/sensors/ph',
    title: 'pH Sensor',
    description: 'Measures hydrogen ion concentration, used in agriculture, aquariums, and labs.',
  },
  {
    id: 'tds-sensor-video',
    href: '/videos/sensors/tds',
    title: 'TDS Sensor',
    description: 'Measures Total Dissolved Solids to determine water quality and salinity.',
  },
  {
    id: 'uv-sensor-video',
    href: '/videos/sensors/uv',
    title: 'UV Sensor (ML8511)',
    description: 'Outputs a voltage proportional to UV light intensity, perfect for sun exposure monitoring.',
  },
  {
    id: 'sound-sensor-video',
    href: '/videos/sensors/sound',
    title: 'Sound Sensor (Microphone)',
    description: 'Detects sound and provides an amplified signal for projects like clap switches.',
  },
  {
    id: 'dust-sensor-video',
    href: '/videos/sensors/dust',
    title: 'Dust Sensor (GP2Y1010AU0F)',
    description: 'Detects fine dust particles in the air, used in air purifiers and pollution monitors.',
  },
  {
    id: 'flame-sensor-video',
    href: '/videos/sensors/flame',
    title: 'Flame Sensor',
    description: 'Detects flame light in the infrared spectrum for fire detection and safety systems.',
  },
  {
    id: 'pir-motion-sensor-video',
    href: '/videos/sensors/pir-motion',
    title: 'PIR Motion Sensor',
    description: 'Detects human movement via changes in infrared radiation, ideal for security alarms and automatic lighting.',
  },
  {
    id: 'vibration-sensor-video',
    href: '/videos/sensors/vibration',
    title: 'Vibration Sensor (SW-420)',
    description: 'A spring-based switch that detects vibration or shock, used in anti-theft alarms and earthquake detection.',
  },
  {
    id: 'tilt-sensor-video',
    href: '/videos/sensors/tilt',
    title: 'Tilt Sensor',
    description: 'Uses a mercury or ball switch to detect the orientation of an object, often used in alarm systems.',
  },
  {
    id: 'accelerometer-video',
    href: '/videos/sensors/accelerometer',
    title: 'Accelerometer (ADXL335)',
    description: 'Measures acceleration along the X, Y, and Z axes, essential for tilt detection and robotics.',
  },
  {
    id: 'mpu-6050-video',
    href: '/videos/sensors/mpu-6050',
    title: 'MPU-6050 6-Axis IMU',
    description: 'A 6-axis Inertial Measurement Unit combining an accelerometer and a gyroscope for motion tracking.',
  },
  {
    id: 'mpu-9250-video',
    href: '/videos/sensors/mpu-9250',
    title: 'MPU-9250 9-Axis IMU',
    description: 'A 9-axis Inertial Measurement Unit that adds a magnetometer to the accelerometer and gyroscope.',
  },
  {
    id: 'compass-video',
    href: '/videos/sensors/compass',
    title: 'Compass (HMC5883L)',
    description: 'A digital magnetometer that provides directional data for navigation and robotics.',
  },
];

const VIDEOS_PER_PAGE = 5;

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredVideos = allVideos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
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
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}
