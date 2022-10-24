<template>
    <div class="row h-100" id="home-bg">
        <div class="container align-self-end">
            <img src="https://static.vecteezy.com/system/resources/previews/001/200/758/original/music-note-png.png" width="100"/>
            <p class="text-white">myMusic</p>
        </div>
        <div class="container p-4">
            <div class="row">
                <div class="container mb-2">
                    <input type="text" class="form-control rounded rounded-5" placeholder="Artist / Album / Title" v-model="inputText">
                </div>
                <div class="container">
                    <button class="btn btn-primary rounded rounded-5 text-white" style="width: 100%;" @click="onSearchBtn()">Search</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputText: ''
            }
        },
        name: 'HomePage',
        methods: {
            onSearchBtn() {
               this.$router.push({ path: '/dashboard', query: { data: this.inputText}})
            }
        }
    }
</script>

<style>
    #home-bg {
        text-align: center;
        background: rgb(23,15,168);
        background: linear-gradient(180deg, rgba(23,15,168,1) 28%, rgba(45,25,210,1) 64%, rgba(87,0,255,1) 93%);
    }
    input[type='text']::placeholder
    {   
        text-align: center;      /* for Chrome, Firefox, Opera */
    }
    :-ms-input-placeholder
    { 
        text-align: center;      /* for IE 10-11 */
    }
    ::-webkit-input-placeholder
    { 
        text-align: center;      /* for IE Edge */
    }
</style>