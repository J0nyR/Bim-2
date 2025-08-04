import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LessonPlanMarineBoiler = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        RPP - Ketel Uap Kapal / Lesson Plan - Marine Boiler
      </h1>
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Segera Hadir / Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Konten untuk Rencana Pelaksanaan Pembelajaran (RPP) modul Ketel Uap Kapal akan ditambahkan di sini.</p>
          <p className="text-muted-foreground">Content for the Marine Boiler module's Lesson Plan will be added here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonPlanMarineBoiler;