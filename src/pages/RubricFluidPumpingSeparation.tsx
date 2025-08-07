import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';

const RubricFluidPumpingSeparation = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 hide-on-print">
        <div>
          <h1 className="text-2xl font-bold">Rubrik Penilaian / Assessment Rubric</h1>
          <p className="text-muted-foreground">Modul 2.2: Sistem Fluida, Perpompaan & Separasi</p>
        </div>
        <Button onClick={handlePrint}>Cetak / Print</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rubrik Penilaian Lembar Kerja</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Kriteria</TableHead>
                <TableHead>Sangat Baik (86-100)</TableHead>
                <TableHead>Baik (71-85)</TableHead>
                <TableHead>Cukup (56-70)</TableHead>
                <TableHead>Kurang (&lt;55)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Tugas 1: Melengkapi Kalimat</TableCell>
                <TableCell>Menjawab 3 kalimat dengan benar.</TableCell>
                <TableCell>Menjawab 2 kalimat dengan benar.</TableCell>
                <TableCell>Menjawab 1 kalimat dengan benar.</TableCell>
                <TableCell>Tidak ada yang benar.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tugas 2: Klasifikasi Pompa</TableCell>
                <TableCell>Mengklasifikasikan 4 aplikasi dengan benar.</TableCell>
                <TableCell>Mengklasifikasikan 2-3 aplikasi dengan benar.</TableCell>
                <TableCell>Mengklasifikasikan 1 aplikasi dengan benar.</TableCell>
                <TableCell>Tidak ada yang benar.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tugas 3: Pertanyaan Singkat</TableCell>
                <TableCell>Penjelasan lengkap dan akurat, menyebutkan MARPOL dan pencegahan polusi.</TableCell>
                <TableCell>Penjelasan benar, menyebutkan pencegahan polusi tetapi tidak spesifik.</TableCell>
                <TableCell>Penjelasan kurang lengkap atau kurang akurat.</TableCell>
                <TableCell>Jawaban salah atau tidak menjawab.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RubricFluidPumpingSeparation;