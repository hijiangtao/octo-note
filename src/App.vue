<template>
	<div id="app">
		<router-view></router-view>
		<footer class="page__ft">
			<a href="//hijiangtao.github.io/">
				<img src="./assets/logo.jpg">
				<p>@hijiangtao</p>
			</a>
			
		</footer>
	</div>
</template>
<script>
export default {
	name: 'app'
}
</script>
<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.page__ft {
	padding-top: 40px;
    padding-bottom: 10px;
    text-align: center;
}
.page__ft img {
	height: 25px;
	border-radius: 4px;
}
footer p {
	font-size: 0.6rem;
	color: gray;
}
</style>
