class CustomDate {

  constructor(...args) {
    this.maker = args
  }

  set maker (value) {
    if(value.length === 0) {
      console.log('1번 케이스')
      return this._date = new Date()
    }
  }

  get maker () {
    return this._date
  }
  
}

const cd = new CustomDate()
console.log(cd.maker)
