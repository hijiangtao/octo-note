<template>
	<div class="page__bd page__bd_spacing">
		<div class="weui-tab" id="app">
			<router-view></router-view>

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
		appNav
	}
}
</script>
<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
/*.page__ft {
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
}*/

.page,
body {
	background-color: #f8f8f8;
	height: 100vh;
}

.page__hd {
	padding: 20px 40px;
}

.page__bd_spacing {
	height: 100%;
	padding: 0;
}
</style>
