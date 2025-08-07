export interface TeachingModule {
  id: string;
  title: string;
  englishTitle: string;
  entryPath: string;
  status: 'available' | 'coming-soon';
}

export const teachingModules: TeachingModule[] = [
  {
    id: 'steering-deck-control',
    title: '2.1 Sistem Kemudi, Geladak & Kontrol',
    englishTitle: 'Steering, Deck & Control Systems',
    entryPath: '/lesson-plan-steering-deck-control',
    status: 'available',
  },
  {
    id: 'fluid-pumping-separation',
    title: '2.2 Sistem Fluida, Perpompaan & Separasi',
    englishTitle: 'Fluid, Pumping & Separation Systems',
    entryPath: '/lesson-plan-fluid-pumping-separation',
    status: 'available',
  },
  {
    id: 'electrical-electronic',
    title: '2.3 Sistem Elektrikal & Elektronik',
    englishTitle: 'Electrical & Electronic Systems',
    entryPath: '/lesson-plan-electrical-electronic',
    status: 'available',
  },
  {
    id: 'technical-publications',
    title: '2.4 Penggunaan Publikasi Teknis',
    englishTitle: 'Using Technical Publications',
    entryPath: '/lesson-plan-technical-publications',
    status: 'available',
  },
];