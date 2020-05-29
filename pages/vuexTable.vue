<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Table load by async axios and store it by vuex.
    </h2>
<!--    <p>Sortable and paginate by server</p>-->
  
    <b-collapse :open="false" aria-id="contentIdForA11y1">
      <button
        class="button is-primary"
        slot="trigger"
        aria-controls="contentIdForA11y1">Show raw data</button>
      <div class="notification">
        <div class="content">
          <h3>
            Db data
          </h3>
          <p class="container">
            data - {{ m_data }}
          </p>
        </div>
      </div>
    </b-collapse>
  
    <section>
      <b-table
        :data="tableData.t_rows"
        :loading="table.loading"
      
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
        @sort="onSort">
      
        <template slot-scope="props">
          <b-table-column field="original_title" label="Title" sortable>
            {{ props.row.original_title }}
          </b-table-column>
        
          <b-table-column field="vote_average" label="Vote Average" numeric sortable>
                    <span class="tag" :class="type(props.row.vote_average)">
                        {{ props.row.vote_average }}
                    </span>
          </b-table-column>
        
          <b-table-column field="vote_count" label="Vote Count" numeric sortable>
            {{ props.row.vote_count }}
          </b-table-column>
        
          <b-table-column field="release_date" label="Release Date" sortable centered>
            {{ props.row.release_date }}
          </b-table-column>
        
          <b-table-column label="Overview" width="500">
            {{ props.row.overview | truncate(80) }}
          </b-table-column>
        </template>
      </b-table>
    </section>
    
    
  </section>
  
</template>
<script>
    import { mapState, mapGetters, mapMutations } from 'vuex'
    import table from "./table";
    
    export default {
        data (){
            return {
                ip: 0,
                m_data: '...',
                apiKey: '91cdacc232f75adf9e2f4d7310983bdd',
                isFullPage:true,
                tableLoading:true,
                url: 'https://api.themoviedb.org/3/discover/movie',
                table: {
                    data: [],
                    page: this.m_page,
                    loading: true,
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
            title: 'Vuex table'
        },
        computed: {
            ...mapGetters({
                m_rows: 'vuexTable/rows',
                m_page: 'vuexTable/page'
            }),
            tableData: function () {
                const data = {
                    t_rows: this.m_rows
                };
                return data;
            },
        },
        methods: {
            async getToken () {
                //
            },
            async callapi () {
                this.table.loading = true;
                const params = [
                    `api_key=${this.apiKey}`,
                    'language=en-US',
                    'include_adult=true',
                    'include_video=false',
                    `sort_by=${this.table.sortField}.${this.table.sortOrder}`,
                    `page=${this.table.page}`
                ].join('&');

                // console.log(params);
                // console.log('this.tableData -', this.tableData);

                let custom_data;
                try {
                    custom_data = await this.$axios
                        .$get(`${this.url}?${params}`);
                    this.m_data = custom_data;

                    let currentTotal = custom_data.total_results;
                    if (custom_data.total_results / this.table.perPage > 1000) {
                        currentTotal = this.table.perPage * 1000
                    }
                    this.table.total = currentTotal;
                    
                    custom_data.results.forEach((item) => {
                        this.pushRow(item);
                    })

                } catch(err) {
                    console.error('ERROR! ' + err);
                    this.msgDanger();
                }
                this.table.loading = false;
            },
            pushRow (row) {
                this.$store.commit('vuexTable/pushRow',  row)
            },
            onPageChange(page) {
                this.table.page = page;
                this.callapi()
            },
            onSort(field, order) {
                this.table.sortField = field;
                this.table.sortOrder = order;
                this.callapi()
            },
            type(value) {
                const number = parseFloat(value)
                if (number < 6) {
                    return 'is-danger'
                } else if (number >= 6 && number < 8) {
                    return 'is-warning'
                } else if (number >= 8) {
                    return 'is-success'
                }
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
            this.callapi();
        }

    }
</script>
