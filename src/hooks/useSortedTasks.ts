import { Todos } from "./useTodoos";

const useSortedTasks = (tasks: Todos[]) => {
  tasks.sort((a, b) => {
    const d1 = new Date(a.date);
    const d2 = new Date(b.date);
    return d1.getTime() - d2.getTime();
  });

  return tasks;
};

export default useSortedTasks;
