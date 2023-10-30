import { createRouter,createWebHashHistory } from "vue-router";
import PageViewer from "../src/views/PageViewer.vue"
import CreatePage from "../src/views/CreatePage.vue"
import PagesContainer from "../src/views/PagesContainer.vue"
import PagesList from "../src/views/PagesList.vue"
import PageEdit from "../src/views/PageEdit.vue"
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/:index?',component:PageViewer,props:true},
        {
            path:'/pages',
            component:PagesContainer,
            children:[
                {path:'/pages',component:PagesList},
                {path:'create',component:CreatePage},
                {path:':index/edit',component:PageEdit, props:true},

            ]
        },       
               
    ]
})

export default router;