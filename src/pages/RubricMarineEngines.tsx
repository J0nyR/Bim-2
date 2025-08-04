import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const RubricMarineEngines = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Rubrik Penilaian / Assessment Rubric
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
                    Menyebutkan satu fakta terisolasi.
                    <br />
                    <em className="text-muted-foreground">States one isolated fact.</em>
                  </TableCell>
                  <TableCell>
                    Menyebutkan beberapa fakta atau komponen tanpa menghubungkannya.
                    <br />
                    <em className="text-muted-foreground">Lists several facts or components without connecting them.</em>
                  </TableCell>
                  <TableCell>
                    Menjelaskan hubungan antar komponen dan membandingkan sistem.
                    <br />
                    <em className="text-muted-foreground">Explains relationships between components and compares systems.</em>
                  </TableCell>
                  <TableCell>
                    Menerapkan pengetahuan pada skenario baru dan membuat generalisasi.
                    <br />
                    <em className="text-muted-foreground">Applies knowledge to new scenarios and makes generalizations.</em>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Keterampilan Komunikasi
                    <br />
                    <em className="text-muted-foreground">Communication Skills</em>
                  </TableCell>
                  <TableCell>
                    Menggunakan 1-2 istilah teknis dengan benar.
                    <br />
                    <em className="text-muted-foreground">Uses 1-2 technical terms correctly.</em>
                  </TableCell>
                  <TableCell>
                    Menggunakan beberapa istilah teknis dalam kalimat sederhana.
                    <br />
                    <em className="text-muted-foreground">Uses several technical terms in simple sentences.</em>
                  </TableCell>
                  <TableCell>
                    Berpartisipasi dalam dialog, menanggapi pertanyaan, dan menghubungkan ide.
                    <br />
                    <em className="text-muted-foreground">Participates in dialogue, responds to questions, and links ideas.</em>
                  </TableCell>
                  <TableCell>
                    Memulai diskusi, mengajukan pertanyaan klarifikasi, dan menjelaskan konsep kompleks.
                    <br />
                    <em className="text-muted-foreground">Initiates discussion, asks clarifying questions, and explains complex concepts.</em>
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
                    Menunjukkan kepemimpinan, mendorong partisipasi orang lain, dan menunjukkan rasa ingin tahu.
                    <br />
                    <em className="text-muted-foreground">Shows leadership, encourages others' participation, and shows curiosity.</em>
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

export default RubricMarineEngines;