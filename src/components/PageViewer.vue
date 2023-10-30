<template>
    <div v-if="page" id="content" class="container">
        <h1 class="emphasize">{{page.pageTitle}}</h1>
        <p>{{ page?.content }}</p>
        <p>{{ $route.params?.index }}</p>
    </div>
</template>

<script>
export default {
    props:['index'],
    created(){
        this.page=this.$pages.getSinglePage(this.index)
        
        // this.$watch(()=> this.$route.params, (newParams)=>{
        //     this.page=this.$pages.getSinglePage(newParams.index)
        // })
    },
    data(){
        return{
            page:null
        }
    },
    watch:{
        index(newIndex){
            this.page=this.$pages.getSinglePage(newIndex)
        }
    }

}
</script>