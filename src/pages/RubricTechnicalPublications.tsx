import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';

const RubricTechnicalPublications = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 hide-on-print">
        <div>
          <h1 className="text-2xl font-bold">Rubrik Penilaian / Assessment Rubric</h1>
          <p className="text-muted-foreground">Modul 2.4: Penggunaan Publikasi Teknis</p>
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
                <TableCell className="font-medium">Tugas 1: Analisis Halaman Manual</TableCell>
                <TableCell>Menjawab 3 pertanyaan dengan benar.</TableCell>
                <TableCell>Menjawab 2 pertanyaan dengan benar.</TableCell>
                <TableCell>Menjawab 1 pertanyaan dengan benar.</TableCell>
                <TableCell>Tidak ada yang benar.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tugas 2: Menjodohkan Kode</TableCell>
                <TableCell>Menjodohkan 3 kode dengan benar.</TableCell>
                <TableCell>Menjodohkan 2 kode dengan benar.</TableCell>
                <TableCell>Menjodohkan 1 kode dengan benar.</TableCell>
                <TableCell>Tidak ada yang benar.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RubricTechnicalPublications;