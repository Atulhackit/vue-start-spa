<template>
    <app-nav-bar 
        :pages="pages" 
        :activePage="activePage" 
        :navlink-click="(index) => activePage = index">
    </app-nav-bar>

    <page-viewer 
    v-if="pages.length>0"
    :page="pages[activePage]">
    </page-viewer>
    <div v-show="flase"></div>
</template>
<script>
import AppNavBar from './components/AppNavBar.vue';
import PageViewer from './components/PageViewer.vue';

export default {
    created(){
        this.getData()
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
        }
    },
    components: { AppNavBar,PageViewer }
}

</script>