<script setup
				lang="ts">
				import { labelWidth, pixelsPerHour } from '@/classes/Constants';
				import type { GanttItemData } from '@/classes/GanttItemData';
				import type { DateTime } from 'luxon';

				const props = defineProps<{ data: GanttItemData, horizonStart: DateTime }>();
				const start =
					labelWidth +
					Math.floor(
						props.data.startDate.diff(props.horizonStart, 'hours').hours * pixelsPerHour,
					);
				const length = Math.floor(
					props.data.endDate.diff(props.data.startDate, 'hours').hours *
					pixelsPerHour,
				);
</script>

<template>
	<div class="gantt-item absolute rounded my-1 text-slate-900 hover:cursor-move"
			 :style="{ marginLeft: `${start}px`, width: `${length}px` }">
		{{ props.data.text }}
	</div>
</template>

<style scoped>
.gantt-item {
	background-color: #588966;
	border-color: #3b4344;
	border-width: 1px;
	z-index: 1;

	&.selected {
		border-color: #f4f7f5;
		border-width: 2px;
	}
}
</style>