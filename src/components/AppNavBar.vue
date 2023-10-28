<template>
    <nav class="navbar navbar-expand-lg" :class="[`bg-${theme}`, `navbar-${theme}`, 'navbar', 'navbar-expand-lg']">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li v-for="(page, index) in pages" class="nav-item" :key="index">
                    <navbar-link
                        :page="page" 
                        :isActive="activePage === index" 
                        @click.prevent="navlinkClick(index)">
                    </navbar-link>
                </li>

            </ul>
            <form class="d-flex">
                <button class="btn btn-primary" @click.prevent="changeTheme">
                </button>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue'
export default {
    props: ['pages', 'activePage', 'navlinkClick'],
    created(){
        this.getThemeSettings()
    },
    data() {
        return {
            theme: 'light',
        }
    },
    computed:{
        publishedPages(){
            console.log(this.pages)
            return this.pages.filter((page)=>page.published)
        }
        
    },
    methods: {
        changeTheme() {
            console.log(this.theme)
            // let theme="light"
            if (this.theme == "light") {
                this.theme = "dark"
            } else {
                this.theme = "light"
            }
            this.storeThemeSettings()
        },
        storeThemeSettings(){
            localStorage.setItem("theme",this.theme)
        },
        getThemeSettings(){
           let theme= localStorage.getItem("theme",this.theme)
           if(theme){
            this.theme=theme
           }
        },
    },
    components: {
        NavbarLink
    }
}

</script>