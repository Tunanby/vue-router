<template>
    <div class="hi">
        {{ msg }}
        <!-- <router-view ></router-view> -->
        <!-- <router-view name="left"></router-view>
        <router-view name="right"></router-view> -->
    </div>
</template>

<script>
export default {
    name: 'hi',
    data () {
        return {
            msg: "这里是单页面多路由操作"
        }
    }
}
</script>