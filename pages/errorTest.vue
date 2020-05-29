<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Just error test
    </h2>
    </section>
  
</template>
<script>
    export default {
        /**
         * Add for test error page
         */
        // validate ({ params }) {
        //     return /^\d+$/.test(params.id)
        // }
        asyncData ({ params, error }) {
            error({ statusCode: 404, message: 'Post not found' })
        }
    }
</script>
