const tag = '[View]'

export default {    // es6 모듈 패턴을 이용해서 export default로 객체를 export
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },
  // el을 주입받아서 자신의 프로퍼티로 갖게한다.

  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  }, 
  // 어떤 이벤트와 핸들러를 인자로 받아서 현재 갖고있는 el에서 특정 이벤트가 발생했을때 handler가 실행됨
  // 특정 이벤트에 대핸 행동을 정의
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },
  // 스스로 이벤트를 방출, (이벤트와 데이터를 인자로 받아서 이벤트를 커스텀이벤트로 만들고 방출한다.)

  hide() {
    this.el.style.display = 'none'
    return this
  },
  // css 수정

  show() {
    this.el.style.display = ''
    return this
  }
  // css 수정
}