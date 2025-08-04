import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const WorksheetHeader = () => {
  return (
    <Card className="mb-8 bg-card text-card-foreground shadow-lg print:shadow-none print:border">
      <CardContent className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-sm items-center">
          <div className="flex items-baseline col-span-2 md:col-span-1">
            <label className="font-semibold w-28 shrink-0">Nama / Name:</label>
            <div className="border-b-2 border-dotted border-current w-full"></div>
          </div>
          <div className="flex items-baseline">
            <label className="font-semibold w-28 shrink-0">Kelas / Class:</label>
            <div className="border-b-2 border-dotted border-current w-full"></div>
          </div>
          <div className="flex items-baseline">
            <label className="font-semibold w-28 shrink-0">Jurusan / Major:</label>
            <div className="border-b-2 border-dotted border-current w-full"></div>
          </div>
          <div className="flex items-baseline col-span-2 md:col-span-1">
            <label className="font-semibold w-28 shrink-0">Hari/Tgl / Date:</label>
            <div className="border-b-2 border-dotted border-current w-full"></div>
          </div>
          <div className="flex items-baseline">
            <label className="font-semibold w-28 shrink-0">Tahun / Year:</label>
            <div className="border-b-2 border-dotted border-current w-full"></div>
          </div>
          <div className="flex items-center justify-start md:justify-end row-start-1 md:row-start-auto col-start-2 md:col-start-3">
             <div className="border-2 rounded-lg p-2 w-40 text-center h-16 flex flex-col justify-center">
              <label className="font-bold text-lg leading-tight">SKOR</label>
              <label className="font-bold text-lg leading-tight">SCORE</label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorksheetHeader;