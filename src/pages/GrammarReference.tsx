import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Home, BookText } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import AppFooter from '@/components/AppFooter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GrammarReference = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
        <div className="absolute top-6 right-6 z-50 hide-on-print">
            <ThemeToggle />
        </div>
        <div className="container mx-auto p-6 space-y-8 flex-1">
            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                <h1 className="text-4xl font-bold text-primary flex items-center">
                    <BookText className="mr-4 h-10 w-10" />
                    Referensi Tata Bahasa Lanjutan
                </h1>
                <Button asChild variant="outline">
                <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Kembali ke Home
                </Link>
                </Button>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              
              {/* Advanced Passive Voice Section */}
              <AccordionItem value="item-1" className="border rounded-lg">
                <AccordionTrigger className="p-4 text-lg font-semibold">Advanced Passive Voice (Passive Lanjutan)</AccordionTrigger>
                <AccordionContent className="p-4 pt-0 space-y-4">
                  <p className="text-sm text-muted-foreground">Sangat umum dalam manual teknis dan laporan untuk fokus pada tindakan, bukan pelaku.</p>
                  <Card>
                    <CardHeader><CardTitle>Passive Voice with Different Tenses</CardTitle></CardHeader>
                    <CardContent>
                      <p className="mb-2"><strong>Penggunaan:</strong> Untuk menjelaskan proses atau tindakan yang telah atau akan dilakukan pada suatu objek.</p>
                      <ul className="list-disc list-inside ml-4 bg-muted p-3 rounded-md space-y-2">
                        <li><strong>Simple Past Passive:</strong> "The pump <strong>was overhauled</strong> last month." (Fokus pada pompa, bukan siapa yang melakukan overhaul).</li>
                        <li><strong>Present Perfect Passive:</strong> "The safety software <strong>has been updated</strong>." (Tindakan update sudah selesai dan relevan sekarang).</li>
                        <li><strong>Modal Passive:</strong> "The valve <strong>must be inspected</strong> before starting the engine." (Menyatakan kewajiban atau keharusan).</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

              {/* Advanced Conditionals Section */}
              <AccordionItem value="item-2" className="border rounded-lg">
                <AccordionTrigger className="p-4 text-lg font-semibold">Advanced Conditionals (Second & Third)</AccordionTrigger>
                <AccordionContent className="p-4 pt-0 space-y-4">
                  <Card>
                    <CardHeader><CardTitle>Second Conditional (Pengandaian Tipe 2)</CardTitle></CardHeader>
                    <CardContent>
                      <p className="mb-2"><strong>Penggunaan:</strong> Untuk situasi hipotetis atau tidak nyata di masa sekarang/depan.</p>
                      <p className="mb-2"><strong>Struktur:</strong> If + Simple Past, ... would + Verb 1.</p>
                      <p className="ml-4 bg-muted p-3 rounded-md">"If we <strong>had</strong> a spare part, we <strong>would fix</strong> the pump right now." (Kenyataannya: kita tidak punya suku cadang).</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader><CardTitle>Third Conditional (Pengandaian Tipe 3)</CardTitle></CardHeader>
                    <CardContent>
                      <p className="mb-2"><strong>Penggunaan:</strong> Untuk situasi hipotetis di masa lalu yang tidak terjadi (penyesalan atau analisis insiden).</p>
                      <p className="mb-2"><strong>Struktur:</strong> If + Past Perfect, ... would have + Verb 3.</p>
                      <p className="ml-4 bg-muted p-3 rounded-md">"If the engineer <strong>had noticed</strong> the leak earlier, the damage <strong>would not have been</strong> so severe." (Kenyataannya: kebocoran tidak disadari lebih awal).</p>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

              {/* Cause and Effect Section */}
              <AccordionItem value="item-3" className="border rounded-lg">
                <AccordionTrigger className="p-4 text-lg font-semibold">Expressing Cause and Effect (Sebab-Akibat)</AccordionTrigger>
                <AccordionContent className="p-4 pt-0">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="mb-2"><strong>Penggunaan:</strong> Penting untuk menjelaskan masalah, troubleshooting, dan menulis laporan.</p>
                      <ul className="list-disc list-inside ml-4 bg-muted p-3 rounded-md space-y-2">
                        <li><strong>Due to / Because of (Karena):</strong> "The engine shutdown was <strong>due to</strong> a cooling system failure."</li>
                        <li><strong>As a result of (Sebagai akibat dari):</strong> "<strong>As a result of</strong> the high vibration, the bearing was damaged."</li>
                        <li><strong>Therefore (Oleh karena itu):</strong> "The pressure dropped suddenly. <strong>Therefore</strong>, we activated the emergency stop."</li>
                        <li><strong>To result in (Mengakibatkan):</strong> "Ignoring the alarm can <strong>result in</strong> serious equipment damage."</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

              {/* Comparatives and Superlatives Section */}
              <AccordionItem value="item-4" className="border rounded-lg">
                <AccordionTrigger className="p-4 text-lg font-semibold">Comparatives and Superlatives (Perbandingan)</AccordionTrigger>
                <AccordionContent className="p-4 pt-0">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="mb-2"><strong>Penggunaan:</strong> Untuk membandingkan spesifikasi, performa, atau kondisi peralatan.</p>
                      <ul className="list-disc list-inside ml-4 bg-muted p-3 rounded-md space-y-2">
                        <li><strong>Comparative:</strong> "This new filter is <strong>more efficient than</strong> the old one."</li>
                        <li><strong>Superlative:</strong> "This is the <strong>most critical</strong> maintenance task for this month."</li>
                        <li><strong>As...as:</strong> "The new pump is not <strong>as noisy as</strong> the previous model."</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

              {/* Modals for Speculation Section */}
              <AccordionItem value="item-5" className="border rounded-lg">
                <AccordionTrigger className="p-4 text-lg font-semibold">Modal Verbs for Speculation (Modal untuk Spekulasi)</AccordionTrigger>
                <AccordionContent className="p-4 pt-0">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="mb-2"><strong>Penggunaan:</strong> Untuk membuat deduksi atau perkiraan saat melakukan troubleshooting.</p>
                      <ul className="list-disc list-inside ml-4 bg-muted p-3 rounded-md space-y-2">
                        <li><strong>Must be (pasti):</strong> "The oil pressure is zero. The pump <strong>must be</strong> broken." (Sangat yakin)</li>
                        <li><strong>Might be / Could be (mungkin):</strong> "The strange noise <strong>might be</strong> a loose bolt." (Kemungkinan)</li>
                        <li><strong>Can't be (tidak mungkin):</strong> "It <strong>can't be</strong> the power supply because the indicator light is on." (Sangat yakin itu bukan penyebabnya)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
        </div>
        <AppFooter />
    </div>
  );
};

export default GrammarReference;