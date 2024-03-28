<script setup
				lang="ts">
				import { pixelsPerHour } from '@/classes/Constants';
				import type { GanttHorizon } from '@/classes/GanttHorizon';

				const props = defineProps<{ horizon: GanttHorizon }>();
				const months = [];
				const weeks = [];
				const days = [];
				const hours = [];
				let previousDate = null;
				let dayWidth = pixelsPerHour;
				let weekWidth = pixelsPerHour;
				let monthWidth = pixelsPerHour;

				for (let i = 0; i < props.horizon.hours(); i++) {
					const newDate = props.horizon.start.plus({ hours: i });

					if (!previousDate) {
						previousDate = newDate;
						continue;
					}

					if (previousDate.month !== newDate.month) {
						months.push({
							innerText: `${previousDate.monthLong} ${previousDate.year}`,
							width: `${monthWidth}px`
						})

						monthWidth = 0;
					}

					if (previousDate.weekNumber !== newDate.weekNumber) {
						weeks.push({
							innerText: previousDate.weekNumber.toString(),
							width: `${weekWidth}px`
						})

						weekWidth = 0;
					}

					if (previousDate.day !== newDate.day) {

						days.push({
							innerText: previousDate.day.toString(),
							width: `${dayWidth}px`
						})

						dayWidth = 0;
					}

					if (pixelsPerHour >= 24) {
						hours.push({
							innerText: newDate.hour.toString(),
							width: `${pixelsPerHour}px`
						})
					}

					dayWidth += pixelsPerHour;
					weekWidth += pixelsPerHour;
					monthWidth += pixelsPerHour;
					previousDate = newDate;
				}
</script>

<template>
	<div class="dates ml-32 text-sm border-t">
		<div class="months flex flex-row border-b">
			<div class="py-1 border-l"
					 v-for="(month, i) in months"
					 :key="i"
					 :style="{ width: month.width }">{{ month.innerText }}</div>
		</div>
		<div class="weeks flex flex-row border-b">
			<div class="py-1 border-l"
					 v-for="(week, i) in weeks"
					 :key="i"
					 :style="{ width: week.width }">{{ week.innerText }}</div>
		</div>
		<div class="days flex flex-row border-b">
			<div class="py-1 border-l"
					 v-for="(day, i) in days"
					 :key="i"
					 :style="{ width: day.width }">{{ day.innerText }}</div>
		</div>
	</div>
</template>