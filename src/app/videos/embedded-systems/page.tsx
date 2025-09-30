
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Cpu, MemoryStick, ToyBrick, Waypoints, Rocket, Home, Car, HeartPulse, Factory, Camera, ArrowRight, ArrowLeft, ArrowDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";


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

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Zap className="text-accent" />
                            What is an Embedded System?
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>An embedded system is a specialized computer system designed for a specific function within a larger mechanical or electrical system. It's a combination of computer hardware and software that performs dedicated tasks.</p>
                            <p className="border-l-4 border-accent pl-4 text-foreground"><strong>Example:</strong> The controller in a washing machine is an embedded system. It only manages washing cycles; you can't browse the internet on it.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Rocket className="text-accent" />
                            Why Embedded Systems?
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>Small size and low cost</li>
                            <li>Fast, real-time response</li>
                            <li>Low power consumption</li>
                            <li>Highly reliable and efficient</li>
                            <li>Runs silently in the background</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <ToyBrick className="text-accent" />
                            Main Components
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-4 font-headline">A) Hardware</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-muted/20 rounded-lg">
                                        <h4 className="font-bold flex items-center gap-2"><Cpu className="w-5 h-5"/>Processor (The Brain)</h4>
                                        <p className="text-sm text-muted-foreground">Microcontroller or Microprocessor that decides what action to take (e.g., Arduino, ARM Cortex).</p>
                                    </div>
                                    <div className="p-4 bg-muted/20 rounded-lg">
                                        <h4 className="font-bold flex items-center gap-2"><MemoryStick className="w-5 h-5"/>Memory</h4>
                                        <p className="text-sm text-muted-foreground">Stores the program (firmware) and data. Includes ROM and RAM.</p>
                                    </div>
                                    <div className="p-4 bg-muted/20 rounded-lg">
                                        <h4 className="font-bold flex items-center gap-2">Input Devices</h4>
                                        <p className="text-sm text-muted-foreground">Collect data from the environment (e.g., sensors, buttons, switches).</p>
                                    </div>
                                    <div className="p-4 bg-muted/20 rounded-lg">
                                        <h4 className="font-bold flex items-center gap-2">Output Devices</h4>
                                        <p className="text-sm text-muted-foreground">Give results or perform actions (e.g., display screen, motor, LED, alarm).</p>
                                    </div>
                                </div>
                            </div>
                             <div>
                                <h3 className="text-xl font-bold mb-4 font-headline">B) Software (Firmware)</h3>
                                <p className="text-muted-foreground">A program permanently stored in memory, often written in C, C++, or Python, that directly controls the hardware.</p>
                            </div>
                        </div>
                    </div>

                     <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Waypoints className="text-accent" />
                            How Does It Work? (Simple Flow)
                        </h2>
                        <div className="space-y-4">
                            <p className="text-muted-foreground mb-4">Example: <strong>Smart Temperature Control Fan</strong></p>
                            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Input:</strong> A sensor reads the current room temperature.</li>
                                <li><strong>Processing:</strong> The microcontroller checks if the temperature is greater than 30°C.</li>
                                <li><strong>Decision:</strong> If yes, turn the fan ON. If no, keep the fan OFF.</li>
                                <li><strong>Output:</strong> The fan motor rotates (the action).</li>
                            </ol>
                            <p className="pt-4 text-sm text-foreground">This loop runs continuously, making the system automatic and responsive.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-headline font-bold mb-4">General Block Diagram</h2>
                         <div className="flex justify-center items-center p-6 md:p-12 bg-muted/20 rounded-lg">
                            <div className="w-full max-w-3xl">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
                                    <div className="text-center p-4 border rounded-lg shadow-sm bg-card min-w-[150px] flex-shrink-0">
                                        <p className="font-semibold">Input</p>
                                        <p className="text-xs text-muted-foreground">(Sensors, Switch)</p>
                                    </div>

                                    <ArrowRight className="hidden md:block text-accent" />
                                    <ArrowDown className="md:hidden text-accent" />

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <div className="text-center p-4 border rounded-lg shadow-sm bg-card min-w-[150px] flex-shrink-0 cursor-pointer">
                                                <Cpu className="mx-auto mb-1 text-accent" />
                                                <p className="font-semibold">Processor</p>
                                                <p className="text-xs text-muted-foreground">(Microcontroller / SoC)</p>
                                            </div>
                                        </PopoverTrigger>
                                        <PopoverContent side="bottom" className="w-auto">
                                            <div className="text-center p-4 border rounded-lg shadow-sm bg-card min-w-[150px]">
                                                <MemoryStick className="mx-auto mb-1 text-accent" />
                                                <p className="font-semibold">Memory</p>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                    
                                    <ArrowRight className="hidden md:block text-accent" />
                                    <ArrowDown className="md:hidden text-accent" />

                                    <div className="text-center p-4 border rounded-lg shadow-sm bg-card min-w-[150px] flex-shrink-0">
                                        <p className="font-semibold">Output</p>
                                        <p className="text-xs text-muted-foreground">(Motors, LEDs)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-headline font-bold mb-4">Microcontroller vs. Microprocessor</h2>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Feature</TableHead>
                                        <TableHead>Microcontroller (MCU)</TableHead>
                                        <TableHead>Microprocessor (MPU)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-semibold">Core Components</TableCell>
                                        <TableCell>CPU, Memory, I/O ports, peripherals all on a single chip.</TableCell>
                                        <TableCell>Mainly just the CPU. Other components like memory and I/O must be added separately.</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-semibold">Best For</TableCell>
                                        <TableCell>Small, dedicated tasks (e.g., washing machine, remote control, sensors).</TableCell>
                                        <TableCell>Powerful, complex systems (e.g., smartphones, laptops, industrial control).</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-semibold">Commonality</TableCell>
                                        <TableCell>Most common choice for typical embedded systems.</TableCell>
                                        <TableCell>Used in more complex, high-performance embedded systems.</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-headline font-bold mb-4">Frequently Asked Questions</h2>
                         <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>"Is an embedded system the same as a computer?"</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                No. A computer (like a laptop/PC) is general-purpose and can do many tasks. An embedded system is task-specific and designed to do only one or a few jobs.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>"Can I install Windows or games on an embedded system?"</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                Usually, no. Embedded systems run special programs called firmware, not large operating systems like Windows. Some advanced systems might run a tiny OS (like RTOS or a minimal Linux).
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>"Why not just use a normal computer instead of embedded?"</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                Because normal computers are big, expensive, and consume more power. Embedded systems are small, cheap, and efficient, which makes them perfect for appliances and other devices.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>"If it’s inside a washing machine, can I see it?"</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                No, it’s a tiny chip hidden inside the control board. It works silently in the background without you ever seeing it.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>"Is Arduino or Raspberry Pi an embedded system?"</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                Yes. An Arduino is a classic example of a microcontroller-based embedded system board. A Raspberry Pi is a more powerful mini-computer (based on a microprocessor) that can be used for more complex embedded system projects.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div>
                        <h2 className="text-2xl font-headline font-bold mb-4">Applications in Real Life</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                            <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                                <Home className="w-8 h-8 text-accent"/>
                                <span className="font-semibold">Home</span>
                                <p className="text-xs text-muted-foreground">Microwave, Smart TV, AC</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                                <Car className="w-8 h-8 text-accent"/>
                                <span className="font-semibold">Automobile</span>
                                 <p className="text-xs text-muted-foreground">Airbags, ABS, ECU</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                                <HeartPulse className="w-8 h-8 text-accent"/>
                                <span className="font-semibold">Medical</span>
                                 <p className="text-xs text-muted-foreground">Pacemakers, Monitors</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                                <Factory className="w-8 h-8 text-accent"/>
                                <span className="font-semibold">Industry</span>
                                 <p className="text-xs text-muted-foreground">Robots, CNC Machines</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                                <Camera className="w-8 h-8 text-accent"/>
                                <span className="font-semibold">Electronics</span>
                                 <p className="text-xs text-muted-foreground">Cameras, Game Consoles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}
