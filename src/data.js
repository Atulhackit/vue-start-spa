const pagesKey='pages';

let pageJson=localStorage.getItem(pagesKey)
let pagesStore=JSON.parse(pageJson)

export default {
    getAllpageS(){
        return pagesStore
    },
    getSinglePage(index){
        return pagesStore[index]
    }
}