<template>
	<div class="Hello">
		<b> {{ msg }} </b>
		<p> router-link to="/" to：是我们的导航路径，要填写的是你在router/index.js文件里配置的path值</p>
		<p> router-link :to="{ name: 'hi1', params: { usernamae: 'xx'} }" 
						name 要对应 router 里的name 同理 path 也是
		</p>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: "Hello",
  data () {
		return {
			msg: "hi, by"
		}
	}
}
</script>

<style  scoped>
	b {
			font-size: 20px;
	}
	a { 
		margin: 0 3px;
		text-align: center;
	}
</style>