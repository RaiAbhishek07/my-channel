
import { Wifi, KeyRound } from "lucide-react";

export default function RfidReaderPage() {
  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        RFID Reader (RC522)
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        How does a key card open a door without even touching it? It uses RFID (Radio-Frequency Identification), a technology that allows for wireless identification with a simple tap.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <Wifi className="text-accent" />
                             How It Works: An Energetic Conversation
                        </h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>An RFID system consists of two parts: the reader (like the RC522 module) and a tag or card. The magic is that the tag doesn't need its own battery.</p>
                             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>Detection (Power Up):</strong> The RC522 reader module continuously emits a radio frequency (RF) field at 13.56 MHz. When an RFID tag enters this field, a coil inside the tag harvests energy from the field, powering up the tiny chip inside the tag.</li>
                                <li><strong>Conversion (Data Transfer):</strong> Once powered, the chip in the tag uses the reader's RF field to send its unique identification number (UID) and any other stored data back to the reader. It does this by modulating the reader's own RF field—a technique called load modulation.</li>
                                <li><strong>Output (Communication):</strong> The RC522 reader detects these tiny modulations in its field, decodes them, and makes the tag's data available to a microcontroller. Communication with the microcontroller is typically done over the SPI (Serial Peripheral Interface) protocol, which is fast and efficient.</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-2 text-2xl font-headline font-bold mb-4">
                            <KeyRound className="text-accent" />
                            Common Applications
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Access Control Systems:</strong> The most common use, for opening doors in offices, hotels, and apartment buildings.</li>
                            <li><strong>Inventory Management:</strong> Placing tags on products to quickly scan and track inventory in warehouses and retail.</li>
                            <li><strong>Contactless Payments:</strong> The technology behind "tap-to-pay" credit cards and mobile payment systems like Apple Pay and Google Pay.</li>
                            <li><strong>Public Transportation:</strong> Used in transit cards for automated fare collection.</li>
                            <li><strong>Animal Tracking:</strong> Microchips implanted in pets are a form of RFID.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

    