import type { GanttHorizon } from './GanttHorizon';
import { Task } from './Task';
import { getRandom } from './Utility';
import { GanttWorker } from './Worker';

export function generateWorkers(
	horizon: GanttHorizon,
	workDays: Array<number>,
	numWorkers = 100,
	withTasks = true,
) {
	const workers = [];

	for (let i = 1; i <= numWorkers; i++) {
		const worker = new GanttWorker(`worker-${i}`);

		if (withTasks) generateTasks(horizon,workDays, worker);

		workers.push(worker);
	}

	return workers;
}

function generateTasks(horizon: GanttHorizon, workDays:Array<number>, worker: GanttWorker) {
	for (let j = 1; j < getRandom(1, 20); j++) {
		let start = horizon.start.plus({
			hour: getRandom(1, horizon.hours()),
		});

		if (!workDays.includes(start.weekday)) {
			start = start.set({ weekNumber: start.weekNumber + 1, weekday: 1 });
		}

		const duration = getRandom(8, 48);
		let end = start.plus({ hour: duration });

		if (!workDays.includes(end.weekday)) {
			start = start.set({ weekday: 3 });
			end = start.plus({ hour: duration });
		}

		worker.addTask(new Task(j, `Task ${j}`, start, end, horizon.start));
	}
}
