<template>
	<div class="page__bd page__bd_spacing">
		<div class="weui-tab" id="app">
			<div class="weui-tab__panel">
				<router-view></router-view>
			</div>

			<!-- <footer class="page__ft">
				<a href="//hijiangtao.github.io/">
					<img src="./assets/logo.jpg">
					<p>@hijiangtao</p>
				</a>
				
			</footer> -->
			<app-nav></app-nav>
		</div>
	</div>
</template>
<script>
import appNav from '@/components/Nav'

export default {
	name: 'app',
	components: {
		'app-nav': appNav
	}
}
</script>
<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.page,
body {
	background-color: #f8f8f8;
	height: 100vh;
}

.router-link-active p {
	color: #09bb07;
}

.page__hd {
	padding: 20px 15px;
}

.page__bd_spacing {
	height: 100%;
	padding: 0;
}
</style>
