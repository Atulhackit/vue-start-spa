import { createRouter,createWebHashHistory } from "vue-router";
import PageViewer from "../src/views/PageViewer.vue"
import CreatePage from "../src/views/CreatePage.vue"
import PagesContainer from "../src/views/PagesContainer.vue"
import PagesList from "../src/views/PagesList.vue"

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/:index?',component:PageViewer,props:true},
        {
            path:'/pages',
            component:PagesContainer,
            children:[
                {path:'/',component:PagesList},
                {path:'create',component:CreatePage}
            ]
        },       
               
    ]
})

export default router;