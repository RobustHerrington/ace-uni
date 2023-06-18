<template>
	<view class="ace-form">
		<view class="container">

			<view class="ace-input-container">
				<input class="ace-input" placeholder="Name">
			</view>

			<view class="ace-input-container">
				<input class="ace-input" type="safe-password" placeholder="Password">
			</view>


			<button class="login-button"><span class="login-font">Login</span></button>

		</view>

	</view>
</template>

<script setup>
	const title = '我是标题';
	const handle = () => {
		console.log('执行点击事件')
	};
</script>

<style lang="scss">
	.ace-form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 500rpx;
	}

	.ace-input-container {
		display: flex;
		align-items: center;
		width: 600rpx;
		height: 100rpx;
		border-radius: 20rpx;
		background-color: rgb(224, 224, 227);
		margin-top: 10rpx;
		box-sizing: border-box;

		&:hover {
			border: 5px solid;
			  border-image: linear-gradient(45deg, gold, deeppink) 1;
			  clip-path: inset(0px round 10px);
			  animation: huerotate 6s infinite linear;
			  filter: hue-rotate(360deg);
			  @keyframes huerotate {
			    0% {
			      filter: hue-rotate(0deg);
			    }
			    100% {
			      filter: hue-rorate(360deg);
			    }
			  }
			
		}
	}

	.ace-input {
		font-size: 30rpx;
		width: 100%;


	}

	.login-button {
		color: white;
		width: 100%;
		background-color: skyblue;
		height: 100rpx;
		border-radius: 20rpx;
		margin-top: 10rpx;
		&:hover{
			
		}

		.login-font {
			color: white;
			font-size: 30rpx;
			font-weight: bold;
			text-align: center;
		}
	}
</style>