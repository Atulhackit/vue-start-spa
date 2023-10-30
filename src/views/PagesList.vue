<template>
    <p>Pages list</p>
    <div class="text-end">
        <router-link
            to="/pages/create"
            class="btn btn-primary btn-sm"
        > New Page

        </router-link>
    </div>
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>Link Test</th>
                <th>Is Published</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(page,index) in $pages.getAllPages()" :key="index" @click.prevent="goToPage(index)">
                <td>{{ page.pageTitle }}</td>
                <td>{{ page.link.linkText }}</td>
                <td>{{ page.published? 'yes':'No' }}</td>
            </tr>
        </tbody>
    </table>

</template>

<script setup>
import { inject} from 'vue';
import {useRouter} from 'vue-router'
// let counter=ref(0)
const $pages=inject('$pages')
const router=useRouter()
// let data=reactive({counter:0})

function goToPage(index){
    router.push({path:`pages/${index}/edit`})
}

</script>

<style>
.table.table-hover tr:hover{
    cursor: pointer;
}
</style>