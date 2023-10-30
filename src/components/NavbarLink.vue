<template>
    <li>
        <router-link 
            :to="`/${index}`"
            class="nav-link" 
            :class="activeClasses" 
            :href="page?.link?.url"
            :titile="`This is ${page?.link?.linkText} page.`" arial-current="page"
            >
            {{ page?.link?.linkText }}
        </router-link>
    </li>
</template>

<script>
export default {
    props: ['page', 'index', 'isActive'],
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
.emphasize {
    text-decoration: underline !important;
}
</style>