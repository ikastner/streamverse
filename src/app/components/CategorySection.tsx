'use client';

import WorkoutCard from './WorkoutCard';

interface CategorySectionProps {
  title: string;
  workouts: Array<{
    id: string;
    title: string;
    category: string;
    duration: string;
    image: string;
  }>;
}

const CategorySection = ({ title, workouts }: CategorySectionProps) => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <button className="text-sm text-gray-400 hover:text-white transition">
          Voir tout
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            title={workout.title}
            category={workout.category}
            duration={workout.duration}
            image={workout.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection; 