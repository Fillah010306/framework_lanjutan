export default function ActivityList({ activities }) {
  return (
    <ul className="space-y-3 text-sm">

      {activities.map((activity, index) => (
        <li key={index}>
          {activity}
        </li>
      ))}

    </ul>
  );
}