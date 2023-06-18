<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button type="default" @click="handle">测试点击事件</button>
	</view>
</template>

<script setup>
	const title = '我是标题';
	const handle = () => {
		console.log('执行点击事件')
	};
</script>