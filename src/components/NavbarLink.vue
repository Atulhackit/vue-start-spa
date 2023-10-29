<template>
    <li>
        <a 
        class="nav-link"
        :class="activeClasses" 
        :href="page?.link?.url" 
        :titile="`This is ${page?.link?.linkText} page.`"
        arial-current="page"
        @click.prevent="$bus.$emit('navbarLinkActivated',index)"
        >
        {{ page?.link?.linkText }}
    </a>
    </li>
</template>

<script>
export default {
    props: ['page', 'index','isActive'],
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