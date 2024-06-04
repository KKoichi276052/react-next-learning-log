import CourseGoal from './CourseGoal';
import { type CourseGoal as CGoal } from '../App';

type CourseGoalListProps = {
  goals: CGoal[];
  onDelete: (id: string) => void;
};

export default function CourseGoalList({
  goals,
  onDelete,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
