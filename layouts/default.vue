<template>
  <div>
    <nav
      class="navbar header has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~assets/buefy.png" alt="Buefy" height="28">
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of menuItems"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        
        <nuxt />
        
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        // {
        //   title: 'Inspire',
        //   icon: 'lightbulb',
        //   to: { name: 'inspire' }
        // },
        {
            title: 'Counter',
            icon: 'counter  ',
            to: { name: 'counter' }
        },
        {
            title: 'Table',
            icon: 'table',
            to: { name: 'table' }
        },
        {
            title: 'Ip with axios',
            icon: 'ip',
            to: { name: 'async-ip' }
        },
        {
            title: 'Async Table',
            icon: 'view-dashboard-outline',
            to: { name: 'asyncTable' }
        },
        {
            title: 'Vuex Table',
            icon: 'view-dashboard',
            to: { name: 'vuexTable' }
        },
        {
            title: 'Error page',
            icon: 'alert',
            to: { name: 'errorTest' }
        }
      ]
    }
  }
}
</script>
