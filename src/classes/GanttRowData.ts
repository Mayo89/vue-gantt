import { GanttItemData } from './GanttItemData';
import type { GanttWorker } from './Worker';

export class GanttRowData {
	id: string;
	items: Array<GanttItemData> = [];
	worker: GanttWorker|null = null;

	constructor(worker:GanttWorker) {
		this.id = crypto.randomUUID();
		this.worker = worker;
		this.items = worker.tasks.map(t => new GanttItemData(t.id, t.startDate, t.endDate, t.text, t.horizonStart))
	}
}