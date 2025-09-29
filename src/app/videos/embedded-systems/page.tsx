import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Cpu, MemoryStick, ToyBrick, Waypoints, Rocket, Home, Car, HeartPulse, Factory, Camera } from "lucide-react";

export default function EmbeddedSystemsPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Introduction to Embedded Systems
                    </h1>
                </div>

                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                                <Zap className="text-accent" />
                                What is an Embedded System?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground space-y-4">
                            <p>An embedded system is a specialized computer system designed for a specific function within a larger mechanical or electrical system. It's a combination of computer hardware and software that performs dedicated tasks.</p>
                            <p className="border-l-4 border-accent pl-4"><strong>Example:</strong> The controller in a washing machine is an embedded system. It only manages washing cycles; you can't browse the internet on it.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                                <Rocket className="text-accent" />
                                Why Embedded Systems?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Small size and low cost</li>
                                <li>Fast, real-time response</li>
                                <li>Low power consumption</li>
                                <li>Highly reliable and efficient</li>
                                <li>Runs silently in the background</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                                <ToyBrick className="text-accent" />
                                Main Components
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-4 font-headline">A) Hardware</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-muted/30 rounded-lg">
                                        <h4 className="font-bold flex items-center gap-2"><Cpu className="w-5 h-5"/>Processor (The Brain)</h4>
                                        <p className="text-sm text-muted-foreground">Microcontroller or Microprocessor that decides what action to take (e.g., Arduino, ARM Cortex).</p>
                                    </div>
                                    <div className="p-4 bg-muted/30 rounded-lg">
                                        <h4 className="font-bold flex items-center gap-2"><MemoryStick className="w-5 h-5"/>Memory</h4>
                                        <p className="text-sm text-muted-foreground">Stores the program (firmware) and data. Includes ROM and RAM.</p>
                                    </div>
                                    <div className="p-4 bg-muted/30 rounded-lg">
                                        <h4 className="font-bold flex items-center gap-2">Input Devices</h4>
                                        <p className="text-sm text-muted-foreground">Collect data from the environment (e.g., sensors, buttons, switches).</p>
                                    </div>
                                    <div className="p-4 bg-muted/30 rounded-lg">
                                        <h4 className="font-bold flex items-center gap-2">Output Devices</h4>
                                        <p className="text-sm text-muted-foreground">Give results or perform actions (e.g., display screen, motor, LED, alarm).</p>
                                    </div>
                                </div>
                            </div>
                             <div>
                                <h3 className="text-xl font-bold mb-4 font-headline">B) Software (Firmware)</h3>
                                <p className="text-muted-foreground">A program permanently stored in memory, often written in C, C++, or Python, that directly controls the hardware.</p>
                            </div>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                                <Waypoints className="text-accent" />
                                How Does It Work? (Simple Flow)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground mb-4">Example: <strong>Smart Temperature Control Fan</strong></p>
                            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Input:</strong> A sensor reads the current room temperature.</li>
                                <li><strong>Processing:</strong> The microcontroller checks if the temperature is greater than 30°C.</li>
                                <li><strong>Decision:</strong> If yes, turn the fan ON. If no, keep the fan OFF.</li>
                                <li><strong>Output:</strong> The fan motor rotates (the action).</li>
                            </ol>
                            <p className="pt-4 text-sm text-foreground">This loop runs continuously, making the system automatic and responsive.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline">General Block Diagram</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <pre className="bg-muted/30 p-4 rounded-lg text-sm text-center text-foreground font-code overflow-x-auto">
{`
    ┌─────────────────┐
    │                 │
┌───┴───┐           ┌─┴──┐
│ Input │           │    │
│(Sensor)├─►┌────────┴──┐ │
└───────┘  │ Processor │ │ Output
           │  (MCU)    ├─►(Motor)
┌───┬───┐  └────────┬──┘ │
│Memory │           │    │
│(ROM/RAM)◄───┤    │
└───────┘           └──┬─┘
    │                 │
    └─────────────────┘
`}
                            </pre>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline">Applications in Real Life</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                                <div className="flex flex-col items-center gap-2 p-4 bg-muted/30 rounded-lg">
                                    <Home className="w-8 h-8 text-accent"/>
                                    <span className="font-semibold">Home</span>
                                    <p className="text-xs text-muted-foreground">Microwave, Smart TV, AC</p>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-4 bg-muted/30 rounded-lg">
                                    <Car className="w-8 h-8 text-accent"/>
                                    <span className="font-semibold">Automobile</span>
                                     <p className="text-xs text-muted-foreground">Airbags, ABS, ECU</p>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-4 bg-muted/30 rounded-lg">
                                    <HeartPulse className="w-8 h-8 text-accent"/>
                                    <span className="font-semibold">Medical</span>
                                     <p className="text-xs text-muted-foreground">Pacemakers, Monitors</p>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-4 bg-muted/30 rounded-lg">
                                    <Factory className="w-8 h-8 text-accent"/>
                                    <span className="font-semibold">Industry</span>
                                     <p className="text-xs text-muted-foreground">Robots, CNC Machines</p>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-4 bg-muted/30 rounded-lg">
                                    <Camera className="w-8 h-8 text-accent"/>
                                    <span className="font-semibold">Electronics</span>
                                     <p className="text-xs text-muted-foreground">Cameras, Game Consoles</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    </div>
  );
}
