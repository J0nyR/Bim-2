export interface TeachingModule {
  id: string;
  title: string;
  englishTitle: string;
  entryPath: string;
  status: 'available' | 'coming-soon';
}

export const teachingModules: TeachingModule[] = [
  {
    id: 'marine-engines',
    title: '1.1 Mesin Kapal (Diesel, Uap, Gas)',
    englishTitle: 'Marine Engines (Diesel, Steam, Gas)',
    entryPath: '/lesson-plan-marine-engines',
    status: 'available',
  },
  {
    id: 'marine-boiler',
    title: '1.2 Ketel Uap Kapal',
    englishTitle: 'Marine Boiler',
    entryPath: '/lesson-plan-marine-boiler',
    status: 'coming-soon',
  },
  {
    id: 'shafting-installations',
    title: '1.3 Instalasi Poros & Baling-baling',
    englishTitle: 'Shafting Installations & Propeller',
    entryPath: '#',
    status: 'coming-soon',
  },
  {
    id: 'other-auxiliaries',
    title: '1.4 Mesin Bantu Lainnya',
    englishTitle: 'Other Auxiliaries',
    entryPath: '#',
    status: 'coming-soon',
  },
];