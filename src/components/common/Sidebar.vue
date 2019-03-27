<template>
    <sidebar-menu :menu="menu" />
</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                    },
                    {
                        href: '/',
                        title: 'Login',

                    },
                    {
                        href: '/list',
                        title: 'Requirements',

                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

    .v-sidebar-menu {
        left: 0;
        background-color: #ff6600;
    }


</style>



<!--


-->
