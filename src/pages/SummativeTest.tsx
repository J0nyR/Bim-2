import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { summativeQuestions, Question } from '@/data/summativeQuestions';

const SummativeTest = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showAnswers, setShowAnswers] = useState(false);

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const getQuestionResultClass = (question: Question) => {
    if (!showAnswers) return "";
    return answers[question.id] === question.answer ? "border-green-500" : "border-red-500";
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-center text-primary">
          Ujian Sumatif
        </h1>
        <Button asChild variant="outline">
          <Link to="/">
            Kembali ke Home
          </Link>
        </Button>
      </div>

      <div className="space-y-6">
        {summativeQuestions.map((q, index) => (
          <Card key={q.id} className={`bg-card text-card-foreground shadow-lg transition-all ${getQuestionResultClass(q)}`}>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Pertanyaan {index + 1}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-1 font-medium">{q.question}</p>
              <p className="text-muted-foreground mb-4 italic">{q.question_en}</p>
              <RadioGroup onValueChange={(value) => handleAnswerChange(q.id, value)} value={answers[q.id] || ""}>
                {Object.entries(q.options).map(([key, option]) => (
                  <div key={key} className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent">
                    <RadioGroupItem value={key} id={`${q.id}-${key}`} />
                    <Label htmlFor={`${q.id}-${key}`} className="flex-1 cursor-pointer">
                      {key}. {option.text} <em className="text-muted-foreground">({option.text_en})</em>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {showAnswers && (
                <div className="mt-4 p-3 rounded-lg bg-muted">
                  <p className="font-bold">
                    Jawaban Benar: {q.answer}. {q.options[q.answer].text}
                  </p>
                  <p className="font-bold text-muted-foreground">
                    <em>Correct Answer: {q.answer}. {q.options[q.answer].text_en}</em>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8 space-x-4">
        <Button onClick={() => setShowAnswers(true)} size="lg">
          Lihat Kunci Jawaban
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link to="/summative-test-answer-key">
            Buka Halaman Kunci Jawaban
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SummativeTest;