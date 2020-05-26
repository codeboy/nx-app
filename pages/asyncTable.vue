<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Table work by async axios.
    </h2>

    
  
    <b-collapse :open="false" aria-id="contentIdForA11y1">
      <button
        class="button is-primary"
        slot="trigger"
        aria-controls="contentIdForA11y1">Show data</button>
      <div class="notification">
        <div class="content">
          <h3>
            Subtitle
          </h3>
          <p class="container">
            data - {{ m_data }}
            <b-loading :is-full-page="true" :active.sync="tableLoading" :can-cancel="true"></b-loading>
          </p>
        </div>
      </div>
    </b-collapse>
    
    
  </section>
  
</template>
<script>
    import { mapState } from 'vuex'
    
    export default {
        data (){
            return {
                ip: 0,
                m_data: '...',
                apiKey: '91cdacc232f75adf9e2f4d7310983bdd',
                isFullPage:false,
                ipLoading:true,
                tableLoading:true,
            }
        },
        head: {
            title: 'Ip'
        },
        methods: {
            async getToken () {
                //
            },
            async callapi () {
                const params = [
                    `api_key=${this.apiKey}`,
                    'language=en-US',
                    'include_adult=true',
                    'include_video=false',
                    // `sort_by=${this.sortField}.${this.sortOrder}`,
                    // `page=${this.page}`
                ].join('&');

                console.log(params);
                // this.loading = true;
                // this.axios.get(`https://api.themoviedb.org/3/discover/movie?${params}`)

                const custom_data = await this.$axios.$get(`https://api.themoviedb.org/3/discover/movie?${params}`);
                this.m_data = custom_data;
                this.tableLoading = false;
            }
        },
        mounted() {
            this.callapi();
        }

    }
</script>
