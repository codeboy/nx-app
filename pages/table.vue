<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      "Just start  <b-icon icon="rocket" size="is-large" />"
    </h2>
  
    <b-table
      :data="table.isEmpty ? [] : data"
      :bordered="table.isBordered"
      :striped="table.isStriped"
      :narrowed="table.isNarrowed"
      :hoverable="table.isHoverable"
      :loading="table.isLoading"
      :focusable="table.isFocusable"
      :mobile-cards="table.hasMobileCards"


      paginated
      backend-pagination
      :total="table.total"
      :per-page="table.perPage"
      @page-change="onPageChange"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"

      backend-sorting
      :default-sort-direction="table.defaultSortOrder"
      :default-sort="[table.sortField, table.sortOrder]"
      @sort="onSort"
    >
      
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>
          {{ props.row.id }}
        </b-table-column>
        
        <b-table-column field="first_name" label="First Name">
          {{ props.row.first_name }}
        </b-table-column>
        
        <b-table-column field="last_name" label="Last Name">
          {{ props.row.last_name }}
        </b-table-column>
        
        <b-table-column field="date" label="Date" centered>
                      <span class="tag is-success">
                          {{ new Date(props.row.date).toLocaleDateString() }}
                      </span>
        </b-table-column>
        
        <b-table-column label="Gender">
                      <span>
                          <b-icon pack="fas"
                                  :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                          </b-icon>
                          {{ props.row.gender }}
                      </span>
        </b-table-column>
      </template>
      
      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon
                icon="emoticon-sad"
                size="is-large">
              </b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
    
  </section>
  
</template>
<script>
    import { mapState } from 'vuex'
    
    export default {
        async asyncData({ $axios }) {
            const ip = await $axios.$get('http://icanhazip.com')
            console.log(`ip-${ip}`);
            return { ip }
        },
        
        data() {
            const data = [
                { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016/10/15 13:43:27', 'gender': 'Male' },
                { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016/12/15 06:00:53', 'gender': 'Male' },
                { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016/04/26 06:26:28', 'gender': 'Female' },
                { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016/04/10 10:28:46', 'gender': 'Male' },
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016/12/06 14:38:38', 'gender': 'Female' }
            ];

            return {
                data:data,
                apiKey: '91cdacc232f75adf9e2f4d7310983bdd',
                page: 1,
                table: {
                    sortField: 'vote_count',
                    sortOrder: 'desc',
                    defaultSortOrder: 'desc',
                    total: 0,
                    perPage: 20,
                    isEmpty: false,
                    isBordered: false,
                    isStriped: true,
                    isNarrowed: false,
                    isHoverable: true,
                    isFocusable: false,
                    isLoading: false,
                    hasMobileCards: true
                }
            }
        },
        
        head: {
            title: 'Table'
        },
        
        methods: {
            /*
            * Load async data
            */
            loadAsyncData() {
                const api_url='https://jsonplaceholder.typicode.com/todos/1';
                
                // let req = axios.get(api_url)
                //     .then((res) => {
                //         return { title: res.data.title }
                //     });
                // console.log(req);
            },
            
            loadAsyncData2() {
                const params = [
                    `api_key=${this.apiKey}`,
                    'language=en-US',
                    'include_adult=false',
                    'include_video=false',
                    `sort_by=${this.sortField}.${this.sortOrder}`,
                    `page=${this.page}`
                ].join('&');

                console.log(params);
                this.loading = true;
                this.axios.get(`https://api.themoviedb.org/3/discover/movie?${params}`)
                    .then(({ data }) => {
                        // api.themoviedb.org manage max 1000 pages
                        this.data = []
                        let currentTotal = data.total_results
                        if (data.total_results / this.perPage > 1000) {
                            currentTotal = this.perPage * 1000
                        }
                        this.total = currentTotal
                        data.results.forEach((item) => {
                            item.release_date = item.release_date ? item.release_date.replace(/-/g, '/') : null
                            this.data.push(item)
                        })
                        this.loading = false
                    })
                    .catch((error) => {
                        this.data = []
                        this.total = 0
                        this.loading = false
                        throw error
                    })
            },
            
            /*
            * Handle page-change event
            */
            onPageChange(page) {
                this.page = page
                this.loadAsyncData()
            },
            
            /*
            * Handle sort event
            */
            onSort(field, order) {
                this.sortField = field
                this.sortOrder = order
                this.loadAsyncData()
            },
            
            /*
            * Type style in relation to the value
            */
            type(value) {
                const number = parseFloat(value)
                if (number < 6) {
                    return 'is-danger'
                } else if (number >= 6 && number < 8) {
                    return 'is-warning'
                } else if (number >= 8) {
                    return 'is-success'
                }
            }
        },

        filters: {
            /**
             * Filter to truncate string, accepts a length parameter
             */
            truncate(value, length) {
                return value.length > length
                    ? value.substr(0, length) + '...'
                    : value
            }
        },
        mounted() {
            this.loadAsyncData()
        }
    }
</script>
