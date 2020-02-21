<template>
	<div class="hi1">
		<h1> {{ msg }} --{{ $route.params.username }} </h1>
        <router-link to="/hello"> 发返到父级 </router-link>
	</div>
</template>

<script>
export default {
  name: "hi1",
  data () {
		return {
			msg: "hi, 这里是hello 的子页面 我是hi1"
		}
	}
}
</script>

<style  scoped>

</style>