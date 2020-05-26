<template>
  <section class="section">
    <h3 class="title is-3 has-text-grey">
      "Counter stored in vuex"
    </h3>
    
    <p>
      Press -
      <button @click="increment">
        {{ counter }}
      </button>
    </p>
    <b-icon
      pack="fas"
      icon="user"
      size="is-small">
    </b-icon>
    
  </section>
  
</template>
<script>
    import { mapState } from 'vuex'
    
    export default {
        head: {
            title: 'Counter'
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
