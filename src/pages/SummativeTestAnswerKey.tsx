import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { summativeQuestions } from '@/data/summativeQuestions';
import { Home } from 'lucide-react';

const SummativeTestAnswerKey = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-center text-primary">
          Kunci Jawaban Ujian Sumatif
        </h1>
        <Button asChild variant="outline">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Kembali ke Home
          </Link>
        </Button>
      </div>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Daftar Jawaban</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {summativeQuestions.map((q) => (
              <div key={q.id} className="p-3 rounded-lg bg-muted text-center">
                <p className="font-bold text-lg">Soal {q.id}</p>
                <p className="text-2xl font-extrabold text-primary">{q.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card text-card-foreground shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Detail Jawaban</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {summativeQuestions.map((q) => (
            <div key={q.id}>
              <p className="font-semibold">
                {q.id}. {q.question}
              </p>
              <p className="text-green-600 dark:text-green-400">
                <strong>Jawaban: {q.answer}.</strong> {q.options[q.answer].text}
              </p>
              <p className="text-green-600 dark:text-green-400 italic text-sm">
                <em>Answer: {q.answer}. {q.options[q.answer].text_en}</em>
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default SummativeTestAnswerKey;