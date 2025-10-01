
import { Fingerprint, Lock } from "lucide-react";

export default function FingerprintSensorPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Fingerprint Sensor (R307/AS608)
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        How does your smartphone or a secure door lock recognize you with just a touch? It uses a fingerprint sensor, a powerful biometric device that can capture and match the unique patterns on your fingertip.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Fingerprint className="text-accent" />
                             How It Works: Capturing the Ridges and Valleys
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>Most common fingerprint sensors for hobbyists (like the R307/AS608) are optical sensors. They work like a specialized digital camera.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection (Image Capture):</strong> When you place your finger on the sensor's window, an array of LEDs illuminates your fingerprint. A lens projects the image of your fingerprint onto a CMOS image sensor, which captures a high-resolution digital picture. The ridges of your fingerprint touch the sensor and appear dark, while the valleys don't touch and appear light.</li>
                                <li><strong>Conversion (Feature Extraction):</strong> The sensor doesn't store the full image. Instead, its powerful onboard Digital Signal Processor (DSP) analyzes the image and extracts key features, called "minutiae." These are the unique points where ridges end, split into two (bifurcation), or form other distinct patterns. This process creates a compact digital template—a unique map of your fingerprint.</li>
                                <li><strong>Output (Enrollment & Matching):</strong> The sensor can operate in two modes:
                                    <ul className="list-disc list-inside pl-4 mt-2">
                                        <li><strong>Enrollment:</strong> You scan your finger multiple times. The sensor creates a template and stores it in its internal flash memory with a specific ID.</li>
                                        <li><strong>Matching:</strong> When you scan your finger again, the sensor creates a new template and compares it against all the templates stored in its memory. If it finds a match, it sends a confirmation message to the microcontroller (usually via serial/UART communication).</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Lock className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Biometric Security:</strong> Building secure locks for doors, safes, or personal diaries.</li>
                            <li><strong>Time and Attendance Systems:</strong> For employees to clock in and out of work.</li>
                            <li><strong>User Authentication:</strong> Logging into a computer or a specific application with a touch instead of a password.</li>
                            <li><strong>Personalized Devices:</strong> Creating a device that loads different settings or profiles depending on who touches it.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

    