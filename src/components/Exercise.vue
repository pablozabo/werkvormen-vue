<template>
	<div class="exercise">
		<header>
			<slot name="header">Info panel</slot>
		</header>
		<main>
			<slot></slot>
		</main>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.exercise {
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;

	& header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid;
		height: 100px;
		width: 100%;
	}

	& main {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	& footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-top: 1px solid;
		width: 100%;
		height: 100px;
	}
}
</style>
