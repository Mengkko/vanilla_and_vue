export default {
    data: [
      {keyword: '이탈리아'}, 
      {keyword: '세프의요리'}, 
      {keyword: '제철'}, 
      {keyword: '홈파티'}
    ],
  
    list() {
      return new Promise(res => {
        setTimeout(() => {
          res(this.data)
        }, 200)
      })
    }
    // timeout을 이용해서 200ms후에 데이터를 반환한다.
  }
  // 컬렉션형태로 데이터를 갖고있다. (추천 검색어)