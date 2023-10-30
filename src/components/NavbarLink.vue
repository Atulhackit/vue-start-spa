<template>
    <li>
        <router-link 
            :to="`/${index}`"
            class="nav-link" 
            active-class="active"
            :href="page?.link?.url"
            :titile="`This is ${page?.link?.linkText} page.`" arial-current="page"
            >
            {{ page?.link?.linkText }}
        </router-link>
    </li>
</template>

<script>
export default {
    props: ['page', 'index'],
    
    data() {
        return {

        }
    }
}
</script>
