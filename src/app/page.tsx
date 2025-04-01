import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CategorySection from './components/CategorySection';

const mockWorkouts = {
  trending: [
    {
      id: '1',
      title: 'HIIT Full Body',
      category: 'Cardio',
      duration: '30 min',
      image: '/workouts/hiit.jpg'
    },
    {
      id: '2',
      title: 'Yoga Flow',
      category: 'Yoga',
      duration: '45 min',
      image: '/workouts/yoga.jpg'
    },
    // ... ajoutez plus d'entraînements selon vos besoins
  ],
  recommended: [
    {
      id: '3',
      title: 'Force & Musculation',
      category: 'Musculation',
      duration: '50 min',
      image: '/workouts/strength.jpg'
    },
    {
      id: '4',
      title: 'Pilates Débutant',
      category: 'Pilates',
      duration: '40 min',
      image: '/workouts/pilates.jpg'
    },
    // ... ajoutez plus d'entraînements selon vos besoins
  ]
};

export default function Home() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      <Navbar />
      <Sidebar />
      <div className="pl-64 pt-16">
        <div className="p-8">
          <CategorySection
            title="Tendances"
            workouts={mockWorkouts.trending}
          />
          <CategorySection
            title="Recommandé pour vous"
            workouts={mockWorkouts.recommended}
          />
        </div>
      </div>
    </main>
  );
}
