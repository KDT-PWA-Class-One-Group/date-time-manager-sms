class CustomDate {

  constructor(...args) {
    this.maker = args
  }

  set maker (value) {
    // ? 아무 값도 안넣은 경우
    if(value.length === 0) {
      console.log('1번 케이스')
      return this._date = new Date()
    }
    // ? string format 형태로 넣은 경우
    if(value.length === 1 && typeof value[0] === "string") {
      console.log('2번에 들어옴')
      const stringFilter = value[0].replace(/[!@#$%^&*(),\.\/]/g, "-")
      return this._date = new Date(stringFilter)
    }
  }

  get maker () {
    return this._date
  }
  
}
const date = new Date("2023-12-11")
console.log(date.toISOString())

const cd = new CustomDate("2023-12-11")
console.log(cd.maker)
