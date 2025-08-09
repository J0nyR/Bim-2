import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const RubricMarineBoiler = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Rubrik Penilaian - Ketel Uap Kapal / Assessment Rubric - Marine Boiler
      </h1>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Rubrik Penilaian Berbasis Taksonomi SOLO</CardTitle>
          <p className="text-muted-foreground">
            SOLO Taxonomy-Based Assessment Rubric
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Kriteria / Criteria</TableHead>
                  <TableHead>Uni-structural</TableHead>
                  <TableHead>Multi-structural</TableHead>
                  <TableHead>Relational</TableHead>
                  <TableHead>Extended Abstract</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Pengetahuan
                    <br />
                    <em className="text-muted-foreground">Knowledge</em>
                  </TableCell>
                  <TableCell>
                    Menyebutkan fungsi dasar boiler ("membuat uap").
                    <br />
                    <em className="text-muted-foreground">States the basic function of a boiler ("makes steam").</em>
                  </TableCell>
                  <TableCell>
                    Menyebutkan beberapa komponen (mis. drum, tungku) atau jenis boiler (pipa api/air).
                    <br />
                    <em className="text-muted-foreground">Lists several components (e.g., drum, furnace) or boiler types (fire/water-tube).</em>
                  </TableCell>
                  <TableCell>
                    Membandingkan boiler pipa api & pipa air; menjelaskan fungsi perlengkapan keselamatan.
                    <br />
                    <em className="text-muted-foreground">Compares fire-tube & water-tube boilers; explains the function of safety fittings.</em>
                  </TableCell>
                  <TableCell>
                    Menganalisis skenario (mis. level air rendah) dan menjelaskan konsekuensi serta tindakan yang diperlukan.
                    <br />
                    <em className="text-muted-foreground">Analyzes a scenario (e.g., low water level) and explains consequences and required actions.</em>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Keterampilan Komunikasi
                    <br />
                    <em className="text-muted-foreground">Communication Skills</em>
                  </TableCell>
                  <TableCell>
                    Menggunakan 1-2 istilah teknis boiler dengan benar (mis. "safety valve").
                    <br />
                    <em className="text-muted-foreground">Uses 1-2 boiler technical terms correctly (e.g., "safety valve").</em>
                  </TableCell>
                  <TableCell>
                    Menggunakan beberapa istilah teknis dalam kalimat sederhana (mis. "Check the gauge glass").
                    <br />
                    <em className="text-muted-foreground">Uses several technical terms in simple sentences (e.g., "Check the gauge glass").</em>
                  </TableCell>
                  <TableCell>
                    Berpartisipasi dalam dialog tentang operasi boiler, seperti prosedur blowdown.
                    <br />
                    <em className="text-muted-foreground">Participates in dialogue about boiler operation, such as blowdown procedures.</em>
                  </TableCell>
                  <TableCell>
                    Memulai diskusi, menjelaskan konsep kompleks seperti 'priming' atau 'carryover'.
                    <br />
                    <em className="text-muted-foreground">Initiates discussion, explains complex concepts like 'priming' or 'carryover'.</em>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Sikap
                    <br />
                    <em className="text-muted-foreground">Attitude</em>
                  </TableCell>
                  <TableCell>
                    Mendengarkan tetapi jarang berpartisipasi.
                    <br />
                    <em className="text-muted-foreground">Listens but rarely participates.</em>
                  </TableCell>
                  <TableCell>
                    Menjawab ketika ditanya secara langsung.
                    <br />
                    <em className="text-muted-foreground">Answers when directly asked.</em>
                  </TableCell>
                  <TableCell>
                    Berpartisipasi aktif dalam diskusi kelompok.
                    <br />
                    <em className="text-muted-foreground">Actively participates in group discussions.</em>
                  </TableCell>
                  <TableCell>
                    Menunjukkan kesadaran akan keselamatan dan mendorong diskusi tentang praktik terbaik.
                    <br />
                    <em className="text-muted-foreground">Shows safety awareness and encourages discussion on best practices.</em>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RubricMarineBoiler;