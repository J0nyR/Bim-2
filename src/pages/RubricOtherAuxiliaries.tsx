import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const RubricOtherAuxiliaries = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Rubrik Penilaian - Mesin Bantu Lainnya / Assessment Rubric - Other Auxiliaries
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
                    Menyebutkan fungsi satu mesin bantu (mis. "pompa memindahkan cairan").
                    <br />
                    <em className="text-muted-foreground">States the function of one auxiliary (e.g., "pump moves liquid").</em>
                  </TableCell>
                  <TableCell>
                    Menyebutkan beberapa mesin bantu dan fungsinya (mis. pemurni membersihkan oli, kompresor membuat udara).
                    <br />
                    <em className="text-muted-foreground">Lists several auxiliaries and their functions (e.g., purifier cleans oil, compressor makes air).</em>
                  </TableCell>
                  <TableCell>
                    Menjelaskan hubungan antar mesin bantu (mis. bagaimana pendingin menggunakan air laut untuk mendinginkan air tawar).
                    <br />
                    <em className="text-muted-foreground">Explains relationships between auxiliaries (e.g., how a cooler uses sea water to cool fresh water).</em>
                  </TableCell>
                  <TableCell>
                    Menganalisis masalah (mis. "apa jika pemurni gagal?") dan memprediksi dampaknya pada mesin utama.
                    <br />
                    <em className="text-muted-foreground">Analyzes a problem (e.g., "what if the purifier fails?") and predicts the impact on the main engine.</em>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Keterampilan Komunikasi
                    <br />
                    <em className="text-muted-foreground">Communication Skills</em>
                  </TableCell>
                  <TableCell>
                    Menggunakan 1-2 istilah teknis dengan benar (mis. "compressor").
                    <br />
                    <em className="text-muted-foreground">Uses 1-2 technical terms correctly (e.g., "compressor").</em>
                  </TableCell>
                  <TableCell>
                    Menggunakan beberapa istilah dalam kalimat sederhana (mis. "Check the pump pressure").
                    <br />
                    <em className="text-muted-foreground">Uses several terms in simple sentences (e.g., "Check the pump pressure").</em>
                  </TableCell>
                  <TableCell>
                    Berpartisipasi dalam dialog tentang suatu proses (mis. memulai pemurni atau menyinkronkan generator).
                    <br />
                    <em className="text-muted-foreground">Participates in a dialogue about a process (e.g., starting a purifier or synchronizing a generator).</em>
                  </TableCell>
                  <TableCell>
                    Memulai diskusi tentang topik kompleks seperti pemecahan masalah sistem refrigerasi atau syarat sinkronisasi.
                    <br />
                    <em className="text-muted-foreground">Initiates discussion on complex topics like troubleshooting a refrigeration system or synchronization conditions.</em>
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
                    Menunjukkan kesadaran akan pentingnya perawatan preventif dan keselamatan operasional.
                    <br />
                    <em className="text-muted-foreground">Shows awareness of the importance of preventive maintenance and operational safety.</em>
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

export default RubricOtherAuxiliaries;