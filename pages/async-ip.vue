<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      "Counter"
    </h2>
    
    <p>ip - {{ ip }}</p>
  </section>
  
</template>
<script>
    import { mapState } from 'vuex'
    
    export default {
        data (){
            return {
                ip: 0
            }
        },
        head: {
            title: 'Ip'
        },
        methods: {
            async getIp () {
                this.ip = '...';
                const ip = await this.$axios.$get('http://icanhazip.com')
                this.ip = ip
            },
            async callapi () {
                let apiKey = '91cdacc232f75adf9e2f4d7310983bdd';
                const params = [
                    `api_key=${apiKey}`,
                    'language=en-US',
                    'include_adult=false',
                    'include_video=false',
                    // `sort_by=${this.sortField}.${this.sortOrder}`,
                    // `page=${this.page}`
                ].join('&');

                console.log(params);
                // this.loading = true;
                // this.axios.get(`https://api.themoviedb.org/3/discover/movie?${params}`)

                const ip = await this.$axios.$get('http://icanhazip.com')
                this.ip = ip
            }
        },
        mounted() {
            this.getIp();
        }

    }
</script>
