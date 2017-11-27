<template>
	<div class="weui-tabbar">
		<router-link to="/note" class="weui-tabbar__item">
            <img src="../assets/img/icon_nav_layout.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">Note</p>
        </router-link>
        <router-link to="/tool" class="weui-tabbar__item">
            <img src="../assets/img/icon_nav_search.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">Tool</p>
        </router-link>
        <router-link to="/info" class="weui-tabbar__item">
            <img src="../assets/img/icon_nav_search.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">Discover</p>
        </router-link>
        <a href="javascript:;" class="weui-tabbar__item">
            <img src="../assets/img/icon_nav_nav.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">More</p>
        </a>
	</div>
</template>
<script>
export default {
	name: 'appNav',
	methods: {}
}
</script>