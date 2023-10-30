<template>
    <app-nav-bar></app-nav-bar>
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
    methods:{
        pageCreated(pageObj){
            console.log(pageObj)
            this.pages.push(pageObj)
        }
    },
    components: { AppNavBar }
}

</script>