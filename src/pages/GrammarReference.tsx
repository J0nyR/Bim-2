import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Home, BookText } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Separator } from '@/components/ui/separator';

const GrammarReference = () => {
  return (
    <div className="relative">
        <div className="absolute top-6 right-6 z-50 hide-on-print">
            <ThemeToggle />
        </div>
        <div className="container mx-auto p-6 space-y-8">
            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                <h1 className="text-4xl font-bold text-primary flex items-center">
                    <BookText className="mr-4 h-10 w-10" />
                    Referensi Tata Bahasa
                </h1>
                <Button asChild variant="outline">
                <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Kembali ke Home
                </Link>
                </Button>
            </div>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader><CardTitle>Simple Present Tense</CardTitle></CardHeader>
                <CardContent>
                    <p className="mb-2">Digunakan untuk menjelaskan fungsi, fakta umum, dan kebiasaan. Sangat penting untuk mendeskripsikan cara kerja mesin.</p>
                    <p className="text-muted-foreground mb-4"><em>Used for functions, general facts, and routines. Essential for describing how machinery works.</em></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 bg-muted p-4 rounded-md">
                        <li>"A crankshaft <strong>converts</strong> linear motion into rotational motion."</li>
                        <li>"A centrifugal pump <strong>uses</strong> an impeller to move fluid."</li>
                        <li>"The governor <strong>controls</strong> the engine speed."</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader><CardTitle>Passive Voice</CardTitle></CardHeader>
                <CardContent>
                    <p className="mb-2">Digunakan ketika fokus kalimat adalah pada proses atau objek yang dikenai tindakan, bukan pada siapa yang melakukan. Strukturnya: Subject + to be + Verb 3.</p>
                    <p className="text-muted-foreground mb-4"><em>Used when the focus is on the process or the object of an action, not the doer. Structure: Subject + to be + Verb 3.</em></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 bg-muted p-4 rounded-md">
                        <li>"Air <strong>is compressed</strong> to a high temperature."</li>
                        <li>"The fuel <strong>is injected</strong> by the injector."</li>
                        <li>"High-pressure steam <strong>is generated</strong> by the boiler."</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader><CardTitle>Modal Verbs (must, should)</CardTitle></CardHeader>
                <CardContent>
                    <p className="mb-2">Digunakan untuk menyatakan kewajiban, peraturan, atau rekomendasi. Sangat penting dalam konteks keselamatan.</p>
                    <p className="text-muted-foreground mb-4"><em>Used to express obligation, rules, or recommendations. Crucial in a safety context.</em></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 bg-muted p-4 rounded-md">
                        <li>"You <strong>must</strong> wear PPE in the engine room." (Kewajiban mutlak)</li>
                        <li>"The safety valves <strong>must</strong> be tested regularly." (Peraturan)</li>
                        <li>"You <strong>should</strong> check the oil level before starting the engine." (Rekomendasi kuat)</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader><CardTitle>Cause and Effect Structures</CardTitle></CardHeader>
                <CardContent>
                    <p className="mb-2">Digunakan untuk menjelaskan hubungan sebab-akibat dalam proses teknis.</p>
                    <p className="text-muted-foreground mb-4"><em>Used to explain cause-and-effect relationships in technical processes.</em></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 bg-muted p-4 rounded-md">
                        <li>"<strong>If</strong> the alignment is poor, the ship <strong>will vibrate</strong>."</li>
                        <li>"Poor alignment <strong>causes</strong> premature bearing wear."</li>
                        <li>"A damaged propeller <strong>leads to</strong> a loss of efficiency."</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader><CardTitle>Comparative Adjectives</CardTitle></CardHeader>
                <CardContent>
                    <p className="mb-2">Digunakan untuk membandingkan dua hal atau lebih.</p>
                    <p className="text-muted-foreground mb-4"><em>Used to compare two or more things.</em></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 bg-muted p-4 rounded-md">
                        <li>"An FPP is <strong>simpler than</strong> a CPP."</li>
                        <li>"A CPP is <strong>more expensive than</strong> an FPP."</li>
                        <li>"A water-tube boiler is <strong>more efficient than</strong> a fire-tube boiler."</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader><CardTitle>Gerunds and Infinitives of Purpose</CardTitle></CardHeader>
                <CardContent>
                    <p className="mb-2"><strong>Gerunds (Verb-ing)</strong> dapat berfungsi sebagai subjek untuk menamai suatu proses. <strong>Infinitives (to + verb)</strong> digunakan untuk menyatakan tujuan.</p>
                    <p className="text-muted-foreground mb-4"><em><strong>Gerunds (Verb-ing)</strong> can act as subjects to name a process. <strong>Infinitives (to + verb)</strong> are used to state a purpose.</em></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 bg-muted p-4 rounded-md">
                        <li>"<strong>Pumping</strong> liquids is the function of a pump." (Gerund as subject)</li>
                        <li>"We use a heat exchanger <strong>to cool</strong> the oil." (Infinitive of purpose)</li>
                        <li>"<strong>Synchronizing</strong> generators requires great care." (Gerund as subject)</li>
                    </ul>
                </CardContent>
            </Card>

        </div>
    </div>
  );
};

export default GrammarReference;