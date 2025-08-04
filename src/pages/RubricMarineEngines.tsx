import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const RubricMarineEngines = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-primary-foreground mb-8">
        Rubrik Penilaian / Assessment Rubric
      </h1>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Segera Hadir / Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Halaman ini akan berisi rubrik penilaian terperinci untuk pengetahuan, keterampilan berbicara, dan pemahaman berdasarkan Taksonomi SOLO.
          </p>
          <p className="text-muted-foreground">
            This page will contain detailed assessment rubrics for knowledge, speaking skills, and comprehension based on the SOLO Taxonomy.
          </p>
        </CardContent>
      </Card>

      <div className="text-center mt-8">
        <Button asChild variant="outline">
            <Link to="/lesson-plan-marine-engines">Kembali ke RPP / Back to Lesson Plan</Link>
        </Button>
      </div>
    </div>
  );
};

export default RubricMarineEngines;