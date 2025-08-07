import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';

const RubricElectricalElectronic = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 hide-on-print">
        <div>
          <h1 className="text-2xl font-bold">Rubrik Penilaian / Assessment Rubric</h1>
          <p className="text-muted-foreground">Modul 2.3: Sistem Elektrikal & Elektronik</p>
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
                <TableCell className="font-medium">Tugas 1: Menjodohkan Istilah</TableCell>
                <TableCell>Menjodohkan 4 istilah dengan benar.</TableCell>
                <TableCell>Menjodohkan 3 istilah dengan benar.</TableCell>
                <TableCell>Menjodohkan 2 istilah dengan benar.</TableCell>
                <TableCell>Menjodohkan 0-1 istilah dengan benar.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tugas 2: Identifikasi Sistem</TableCell>
                <TableCell>Mengidentifikasi 4 sistem dengan benar.</TableCell>
                <TableCell>Mengidentifikasi 3 sistem dengan benar.</TableCell>
                <TableCell>Mengidentifikasi 2 sistem dengan benar.</TableCell>
                <TableCell>Mengidentifikasi 0-1 sistem dengan benar.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tugas 3: Pertanyaan Singkat</TableCell>
                <TableCell>Penjelasan lengkap, menyebutkan blackout dan peralatan vital.</TableCell>
                <TableCell>Penjelasan benar, menyebutkan keselamatan tetapi kurang detail.</TableCell>
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

export default RubricElectricalElectronic;