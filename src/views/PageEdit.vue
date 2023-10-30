<template>
    <h4> {{ props.index }}</h4>
        <div class="container mb-3">
        <form action="">
            <div class="col ">
                <div class="mb-3 col">
                    <label for="pageTitle" class="form-label">
                        Page Title
                    </label>
                    <input type="text" class="form-control" v-model="page.pageTitle" />
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">
                        content
                    </label>
                    <textarea type="text" class="form-control" rows="5" v-model="page.content"></textarea>
                </div>
            </div>
            <div class="row mb-3">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" v-model="page.published">
                    <label class=" form-check-label" for="gridCheck1">Published</label>
                </div>
            </div>
            <div class="form-container">
                <div class="mb-3">
                    <button class=" btn btn-primary" :disabled="isFormInvalid" @click.prevent="submit()">
                        Save
                    </button>
                </div>
                <div class="mb-3">
                    <button class=" btn btn-secondary" :disabled="isFormInvalid" @click.prevent="goToPagesList()">
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { inject } from 'vue';

 const router = useRouter()
const props= defineProps(['index'])
const pages=inject('$pages')
const bus=inject('$bus')
let page=pages.getSinglePage(props?.index)

function submit(){
    pages.editPage(props.index,page)
    bus.$emit('page-updated',{
        index,
        page
    })
    goToPagesList()
}

function goToPagesList(){
    router.push({path:'/pages'})
}
</script>