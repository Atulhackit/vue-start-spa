<template>
    <app-nav-bar 
        :pages="pages" 
        :activePage="activePage" >
    </app-nav-bar>
    <router-view></router-view>

    <!-- <page-viewer 
        v-if="pages.length>0"
        :page="pages[activePage]">
    </page-viewer>
    <create-page
        @page-created="pageCreated"
    >
    </create-page> -->
    
</template>
<script>
import AppNavBar from './components/AppNavBar.vue';
// import CreatePage from './components/CreatePage.vue';
// import PageViewer from './components/PageViewer.vue';

export default {
    created(){
        this.getData()
        this.$bus.$on("navbarLinkActivated",(index)=>{
            this.activePage=index;
        })
    },

    data() {
        return {
            activePage: 0,
            pages:[] 
        };
    },
    methods:{
        async getData(){
            let res=await fetch("pages.json")
            let data= await res.json()
            this.pages=data
            // console.log(pages)
        },
        pageCreated(pageObj){
            console.log(pageObj)
            this.pages.push(pageObj)
        }
    },
    components: { AppNavBar }
}

</script>