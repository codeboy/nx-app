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
                let ip;
                try {
                    ip = await this.$axios.$get('http://icanhazip.com');
                } catch (e) {
                    console.log(e);
                    this.msgDanger()
                }
                
                setTimeout(() => {
                    this.ipLoading = false;
                    this.ip = ip;
                }, 10 * 300)
            },
            msgDanger() {
                const notif = this.$buefy.notification.open({
                    duration: 1000,
                    message: `Error while loading`,
                    position: 'is-top-right',
                    type: 'is-danger',
                    hasIcon: true
                });
            }
        },
        mounted() {
            this.getIp();
        },
    }
</script>
