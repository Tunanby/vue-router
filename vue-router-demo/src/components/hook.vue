<template>
    <div class="prams">
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: 'prams',
    data () {
        return {
            msg: 'I am hook'
        }
    },
    // beforeRouteEnter
    beforeRouteEnter: (to, from, next) => {
        console.log('准备进入 hook 文件');
        next();
    },
    beforeRouteLeave: (to, from , next) => {
        console.log('准备离开  hook 页面');
        next();
    }

}
</script>