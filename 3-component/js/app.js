import SearchModel from './models/SearchModel.js'
import KeywordModel from'./models/KeywordModel.js'
import HistoryModel from'./models/HistoryModel.js'

new Vue ({
    el: '#app',
    data: {
        query: '',
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: '',
        keywords: [],
        history:[],
        searchResult: []
    },
    created() {
        this.selectedTab = this.tabs[0]
        this.fetchKeyword()
        this.fetchHistory()
    },
    methods: {
        onSubmit(e) {
            this.search();
        },
        onKeyup() {
          if(!this.query.length) this.resetForm()
        },
        onReset() {
            this.resetForm()
        },
        onClickTab(tabName) {
            this.selectedTab = tabName
        },
        onClickKeyword(keyword) {
            this.query = keyword
            this.search()
        },
        onClickRemoveHistory(keyword) {
            HistoryModel.remove(keyword)
            this.fetchHistory()
        },
        fetchKeyword() {
            KeywordModel.list().then(data => {
                this.keywords = data
            })
        },
        fetchHistory() {
            HistoryModel.list().then(data => {
                this.history = data
            })
        },
        search() {
            SearchModel.list().then(data => {
                this.searchResult = data
                this.submitted = true
            })
            HistoryModel.add(this.query)
            this.fetchHistory()
        },
        resetForm() {
            this.query = ''
            this.submitted = false
            this.searchResult = []
        }
    }
})