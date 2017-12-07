<template>
	<div>
		<div id="welcome">
			<h1 class="">{{ title }}</h1>
			<p class="">{{ desc }}</p>
			<p>
				<router-link to="/" >Home</router-link> | 
				<router-link to="/note" >Note</router-link> | 
				<router-link to="/tool" >Weather</router-link> | 
				<router-link to="/stock" >Stock</router-link> |
				<router-link to="/info" >Discovery</router-link>
			</p>
			
			<footer class="page__ft">
				<a href="//hijiangtao.github.io/">
					<img src="../assets/logo.jpg">
					<p>@hijiangtao</p>
				</a>
			</footer>
		</div>
	</div>
</template>
<script>
export default {
	name: 'home',
	data() {
		return {
			title: 'octo-note',
			desc: 'Welcome to octo-note.'
		}
	},
	methods: {}
}
</script>
<style type="text/css">
#welcome {
	text-align: center;
	position: absolute;
    top: 5rem;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);
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