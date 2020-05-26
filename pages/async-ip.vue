<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Ip loaded by async axios.
    </h2>
    
    <p>
      Установлена задержка для теста лоадера
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
                ip: 0,
                m_data: '111',
                isFullPage:false,
                ipLoading:true,
            }
        },
        head: {
            title: 'Ip'
        },
        methods: {
            async getIp () {
                this.ip = '...';
                const ip = await this.$axios.$get('http://icanhazip.com');
                // this.ipLoading = false;
                setTimeout(() => {
                    this.ipLoading = false;
                    this.ip = ip;
                }, 10 * 300)
            }
        },
        mounted() {
            this.getIp();
        },
        validate ({ params }) {
            // Must be a number
            return /^\d+$/.test(params.id)
        }

    }
</script>
