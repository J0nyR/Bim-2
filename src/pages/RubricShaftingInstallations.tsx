import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const RubricShaftingInstallations = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Rubrik Penilaian - Instalasi Poros & Baling-baling
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
                    Menyebutkan satu komponen (mis. "baling-baling").
                    <br />
                    <em className="text-muted-foreground">States one component (e.g., "propeller").</em>
                  </TableCell>
                  <TableCell>
                    Menyebutkan beberapa komponen (poros, bantalan, baling-baling).
                    <br />
                    <em className="text-muted-foreground">Lists several components (shaft, bearing, propeller).</em>
                  </TableCell>
                  <TableCell>
                    Menjelaskan bagaimana torsi ditransmisikan dari mesin ke baling-baling.
                    <br />
                    <em className="text-muted-foreground">Explains how torque is transmitted from the engine to the propeller.</em>
                  </TableCell>
                  <TableCell>
                    Menganalisis masalah (mis. getaran) dan menghubungkannya dengan penyebab (mis. kelurusan buruk).
                    <br />
                    <em className="text-muted-foreground">Analyzes a problem (e.g., vibration) and links it to causes (e.g., misalignment).</em>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Keterampilan Komunikasi
                    <br />
                    <em className="text-muted-foreground">Communication Skills</em>
                  </TableCell>
                  <TableCell>
                    Menggunakan 1-2 istilah teknis (mis. "shaft").
                    <br />
                    <em className="text-muted-foreground">Uses 1-2 technical terms (e.g., "shaft").</em>
                  </TableCell>
                  <TableCell>
                    Menggunakan beberapa istilah dalam kalimat sederhana (mis. "Check the stern tube seal").
                    <br />
                    <em className="text-muted-foreground">Uses several terms in simple sentences (e.g., "Check the stern tube seal").</em>
                  </TableCell>
                  <TableCell>
                    Berpartisipasi dalam dialog tentang inspeksi rutin (mis. memeriksa suhu bantalan).
                    <br />
                    <em className="text-muted-foreground">Participates in a dialogue about routine inspection (e.g., checking bearing temperature).</em>
                  </TableCell>
                  <TableCell>
                    Memulai diskusi tentang topik kompleks seperti 'alignment' atau perbedaan FPP vs. CPP.
                    <br />
                    <em className="text-muted-foreground">Initiates discussion on complex topics like 'alignment' or FPP vs. CPP differences.</em>
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
                    Menunjukkan kesadaran akan pentingnya perawatan preventif dan keselamatan.
                    <br />
                    <em className="text-muted-foreground">Shows awareness of the importance of preventive maintenance and safety.</em>
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

export default RubricShaftingInstallations;