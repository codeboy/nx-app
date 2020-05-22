<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      "Counter"
    </h2>
  
    <button @click="increment">
      {{ counter }}
    </button>
    
  </section>
  
</template>
<script>
    import { mapState } from 'vuex'
    
    export default {
        head: {
            title: 'Table'
        },
        // fetch ({ store }) {
            // store.commit('increment')
        // },
        computed: mapState([
            'counter'
        ]),
        
        methods: {
            increment () {
                this.$store.commit('increment')
            },
            
            
        },

    }
</script>
