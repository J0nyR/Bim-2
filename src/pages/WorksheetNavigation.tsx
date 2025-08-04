import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WorksheetNavigation = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Lembar Kerja - Navigasi / Worksheet - Navigation
      </h1>
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Segera Hadir / Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Konten untuk Lembar Kerja Siswa modul Navigasi akan ditambahkan di sini.</p>
          <p className="text-muted-foreground">Content for the Navigation module's Student Worksheet will be added here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorksheetNavigation;