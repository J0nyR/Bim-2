import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LessonPlanNavigation = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        RPP - Navigasi / Lesson Plan - Navigation
      </h1>
      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Segera Hadir / Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Konten untuk Rencana Pelaksanaan Pembelajaran (RPP) modul Navigasi akan ditambahkan di sini.</p>
          <p className="text-muted-foreground">Content for the Navigation module's Lesson Plan will be added here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonPlanNavigation;