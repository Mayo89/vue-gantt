<script setup
				lang="ts">
				import type { DateTime } from 'luxon';
				import type { GanttRowData } from '../classes/GanttRowData';
				import GanttItem from './GanttItem.vue';

				const props = defineProps<{ data: GanttRowData, horizonStart: DateTime }>();
</script>

<template>
	<div class="gantt-row flex border-b z-10">
		<label class="w-32 py-1 border-r">{{ props.data.worker?.name }}</label>
		<GanttItem v-for="(data, i) in props.data.items"
							 :data="data"
							 :horizon-start="props.horizonStart"
							 :key="i"></GanttItem>
	</div>
</template>

<style scoped>
.gantt-row {
	align-items: center;

	&.hover {
		background-color: rgb(10 126 194 /0.8);
	}
}
</style>