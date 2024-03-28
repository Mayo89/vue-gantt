<script setup
				lang="ts">
				import { generateWorkers } from '@/classes/DataGen';
				import { GanttRowData } from '@/classes/GanttRowData';
				import { GanttHorizon } from '../classes/GanttHorizon';
				import { WorkHours } from '../classes/Workhours';
				import GanttDates from './GanttDates.vue';
				import GanttRow from './GanttRow.vue';

				const horizon = new GanttHorizon();
				const workhours = new WorkHours();
				const workDays = [1, 2, 3, 4, 5];

				const rowData = generateWorkers(horizon, workDays).map(w => new GanttRowData(w))

</script>

<template>
	<GanttDates :horizon="horizon"></GanttDates>
	<div class="flex flex-col flex-grow">
		<GanttRow v-for="(data, i) in rowData"
							:data="data"
							:horizon-start="horizon.start"
							:key="i"></GanttRow>
	</div>
</template>
