export default {
    data: [
      { keyword: '검색기록2', date: '12.03' },
      { keyword: '검색기록1', date: '12.02'},
      { keyword: '검색기록0', date: '12.01' },
    ],

    // 검색 히스토리를 관장한다. 
    // 내부에 컬렉션형태로 데이터를 갖고있다.  
  
    list() {
      return Promise.resolve(this.data)
    },
    // 서버에서 비동기로 데이터를 가져오는경우나 쿠키로 데이터를 얻을수 있기때문에
    // 공통적으로 사용하기 위해 promise 패턴으로 비동기 데이터를 리턴한다 
    
    add(keyword = '') {
      keyword = keyword.trim()
      if (!keyword) return 
      if (this.data.some(item => item.keyword === keyword)) {
        this.remove(keyword)
      }
  
      
      const date = '12.31'
      this.data = [{keyword, date}, ...this.data]
    },
    // 추가된 검색어를 받아서 실제 데이터와 비교해서 기존데이터에 추가한다.
    
    remove(keyword) {
      this.data = this.data.filter(item => item.keyword !== keyword)
    }
    // 키워드를 받아서 키위드에 해당되는것을 삭제한다. 
  }

