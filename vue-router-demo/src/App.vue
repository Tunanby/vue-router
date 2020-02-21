<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p> 现在位置 {{ $route.name }} </p>
    <div> 导航 : 
				<router-link to="/"> 首页 </router-link> |
        <router-link to="/hello"> hello </router-link> |
				<router-link :to="{ name: 'hi1', params: { username: 'by'} }"> hi1 </router-link> |
				<router-link to="/hello/hi2"> hi2 </router-link> | 
				<router-link to='/twohi'>单路由多页面</router-link> |
        <router-link to='/hook'> hook </router-link>
		</div>
    <router-view/>
    <router-view name="left"></router-view>
    <router-view name="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a { 
  margin: 0 3px;
  text-align: center;
}
</style>
