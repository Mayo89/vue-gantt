<script setup
				lang="ts">
				import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header class="left-0">
		<div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />
</template>
