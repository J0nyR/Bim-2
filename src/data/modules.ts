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
    title: 'Mesin Kapal',
    englishTitle: 'Marine Engines',
    entryPath: '/lesson-plan-marine-engines',
    status: 'available',
  },
  {
    id: 'navigation',
    title: 'Navigasi',
    englishTitle: 'Navigation',
    entryPath: '/lesson-plan-navigation',
    status: 'available',
  },
  // Anda bisa menambahkan modul baru di sini di masa depan
  // You can add new modules here in the future
];