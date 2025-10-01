
import { Camera, Bot } from "lucide-react";

export default function CameraModulePage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Camera Module (OV7670)
                    </h1>
                     <p className="text-lg text-muted-foreground">
                        How can you give your Arduino project the power of sight? The OV7670 camera module is a classic, low-cost way to start experimenting with image capture and basic computer vision on small microcontrollers.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Camera className="text-accent" />
                             How It Works: A Digital Eye
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>The OV7670 is a complete System-on-a-Chip (SoC) that includes the image sensor, image processing circuits, and data output interface.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection (Image Sensor):</strong> It uses a CMOS image sensor, which is a grid (or array) of light-sensitive pixels. When the lens focuses an image onto this grid, each pixel measures the intensity and color of the light hitting it.</li>
                                <li><strong>Conversion (Image Processing):</strong> The raw data from the sensor is processed by the chip's internal Image Signal Processor (ISP). The ISP handles tasks like color interpolation (Bayer filtering), white balance, exposure control, and formatting the data into a standard image format like RGB565 or YUV.</li>
                                <li><strong>Output (Data Interface):</strong> The processed pixel data is streamed out through a parallel data interface (typically 8 data pins), synchronized by a pixel clock (PCLK) and horizontal/vertical sync signals (HSYNC, VSYNC). A microcontroller needs to be fast enough to read this data in real-time as it's being sent from the camera.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Bot className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Basic Image Capture:</strong> Taking low-resolution photos and saving them to an SD card.</li>
                            <li><strong>Simple Computer Vision:</strong> Performing tasks like color tracking (finding a red ball in the frame), motion detection, or basic object detection.</li>
                            <li><strong>Robotics:</strong> Giving a robot a rudimentary form of vision to navigate or identify objects.</li>
                            <li><strong>Security:</strong> Building a simple motion-activated camera that captures an image when movement is detected.</li>
                        </ul>
                         <p className="mt-4 text-muted-foreground border-l-4 border-accent pl-4"><strong>Important Note:</strong> The OV7670 requires a significant number of I/O pins and a good amount of RAM to buffer the image data. It can be challenging to use with basic Arduinos (like the Uno) due to these limitations. More powerful boards like the ESP32 or Arduino Mega are better suited for camera projects.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
