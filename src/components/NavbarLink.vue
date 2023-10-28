<template>
    <a 
        :class="activeClasses" 
        :href="page?.link?.url" 
        :titile="`This is ${page?.link?.text} page.`"
        class="nav-link"
        arial-current="page">
        {{ page?.link?.text }}
    </a>
</template>

<script>
export default {
    props: ['page', 'isActive'],
    computed: {
        activeClasses() {
            return {
                active: this.isActive,
                emphasize: this.isActive,
            }
        },
    },
    data() {
        return {

        }
    }
}
</script>
<style>
.emphasize{
    text-decoration: underline;
}
</style>