<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Ip loaded by async axios.
    </h2>
    
    <p>
      Установлена задержка лоадера для теста
    </p>
    
    <p class="container">
      ip - {{ ip }}
      <b-loading :is-full-page="isFullPage" :active.sync="ipLoading" :can-cancel="true"></b-loading>
    </p>
   </section>
  
</template>
<script>
    import { mapState } from 'vuex'
    
    export default {
        data (){
            return {
                ip: "...",
                isFullPage:false,
                ipLoading:true,
            }
        },
        head: {
            title: 'Ip'
        },
        methods: {
            async getIp () {
                const ip = await this.$axios.$get('http://icanhazip.com');
                setTimeout(() => {
                    this.ipLoading = false;
                    this.ip = ip;
                }, 10 * 300)
            }
        },
        mounted() {
            this.getIp();
        },
    }
</script>
