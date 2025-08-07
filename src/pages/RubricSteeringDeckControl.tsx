import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';

const RubricSteeringDeckControl = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 hide-on-print">
        <div>
          <h1 className="text-2xl font-bold">Rubrik Penilaian / Assessment Rubric</h1>
          <p className="text-muted-foreground">Modul 2.1: Sistem Kemudi, Geladak & Kontrol</p>
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
                <TableCell className="font-medium">Tugas 1: Identifikasi Komponen</TableCell>
                <TableCell>Menjawab 5 komponen dengan benar.</TableCell>
                <TableCell>Menjawab 3-4 komponen dengan benar.</TableCell>
                <TableCell>Menjawab 2 komponen dengan benar.</TableCell>
                <TableCell>Menjawab 0-1 komponen dengan benar.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tugas 2: Menjodohkan</TableCell>
                <TableCell>Menjodohkan 3 istilah dengan benar.</TableCell>
                <TableCell>Menjodohkan 2 istilah dengan benar.</TableCell>
                <TableCell>Menjodohkan 1 istilah dengan benar.</TableCell>
                <TableCell>Tidak ada yang benar.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tugas 3: Melengkapi Kalimat</TableCell>
                <TableCell>Melengkapi 4 kalimat dengan benar.</TableCell>
                <TableCell>Melengkapi 2-3 kalimat dengan benar.</TableCell>
                <TableCell>Melengkapi 1 kalimat dengan benar.</TableCell>
                <TableCell>Tidak ada yang benar.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="mt-4 text-sm text-muted-foreground">
            <p><strong>Perhitungan Skor Akhir:</strong> (Total Skor Perolehan / Total Skor Maksimal) x 100</p>
            <p><strong>Total Skor Maksimal:</strong> 12 (5 + 3 + 4)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RubricSteeringDeckControl;