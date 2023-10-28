<template>
    <a 
        :class="activeClasses" 
        :href="page?.link?.url" 
        :titile="`This is ${page?.link?.linkText} page.`"
        class="nav-link"
        arial-current="page">
        {{ page?.link?.linkText }}
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
    text-decoration: underline !important;
}
</style>