<template>
    <div class="row p-4">

        <div>
            <p>Search result for: <b>{{this.input}}</b></p>
        </div>

        <div class="card" v-for="data in result.results" :key="data.collectionId">
            <div class="row">
                <div class="col-4 align-self-center">
                    <img :src="data.artworkUrl100" class="card-img" alt="...">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">{{data.artistName}}</h5>
                        <p class="card-text">{{data.trackName}}</p>
                        <p class="card-text">
                            <small class="text-bg-success p-2 rounded-5 rounded">{{data.primaryGenreName}}</small>
                            <small class="p-2" style="position:absolute; right: 10px; bottom: 10px">
                                {{data.collectionPrice}}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                result: {}
            }
        },
        name: 'DashboardPage',
        methods: {
            async GetData() {
        		this.$http.get(`https://itunes.apple.com/search?term=${this.input}`).then((response) => {
                    this.result = response.data;
        			console.log(response.data);
        		})
        	},

        },
        mounted() {
            this.input = this.$route.query.data
            this.GetData()
        }
    }
</script>
