<template>
	<div>
		<div class="page__hd">
			<h1 class="page__title">{{ title }}</h1>
			<p class="page__desc">{{ desc }}</p>
		</div>

		<div class="page__bd">
			<article class="weui-article">
				<h1>大标题</h1>
				<section>
					<h2 class="title">章标题</h2>
					<section>
						<h3>1.1 节标题</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.
						</p>
						<p>
							<img src="../assets/logo.jpg" alt="">
							<img src="../assets/logo.jpg" alt="">
						</p>
					</section>
					<section>
						<h3>1.2 节标题</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</section>
				</section>
			</article>
		</div>
	</div>
</template>
<script>
export default {
	name: 'tool',
	data() {
		return {
			title: 'Tool',
			desc: 'test'
		}
	},
	methods: {}
}
</script>