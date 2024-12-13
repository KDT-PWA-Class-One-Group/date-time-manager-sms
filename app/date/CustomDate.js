class CustomDate {
  #date
  // ? 어떤 인자도 받을 수 있도록 한다.
  constructor(...args) {
    this.maker = args
  }

  set maker(value) {
    const KOREAN_TIME_OFFSET = 9 * 3600000
    let utcDate

    if (value.length === 0) {
      // * 1번 케이스: 아무 인자도 전달되지 않은 경우
      utcDate = new Date()
    } else if (value.length === 1 && typeof value[0] === "string") {
      // * 2번 케이스: 하나의 문자열 형식의 인자가 전달된 경우
      const sanitizedString = value[0].replace(/[!@#$%^&*(),\.\/]/g, "-") // ? 특수문자를 '-'로 대체
      utcDate = new Date(sanitizedString)
    } else {
      // * 3번 케이스: 숫자형 인자가 전달된 경우 (연도, 월, 일 등)
      // ! 인자 길이 체크 (연도, 월, 일, 시, 분, 초 -> 최대 6개 인자)
      if (value.length > 6) {
        throw new Error("최대 6개의 인자(연도, 월, 일, 시, 분, 초)만 사용 가능합니다.")
      }

      // ! 모든 인자가 숫자 타입이어야 함
      if (!value.every(item => typeof item === "number")) {
        throw new Error("모든 인자는 숫자여야 합니다.")
      }

      // ? 월은 0부터 시작하므로 1 감소
      const dateFilters = value.map((item, idx) => (idx === 1 ? Number(item) - 1 : Number(item))) 
      utcDate = new Date(...dateFilters)
    }

    // ? UTC 기준 시간을 KST로 변환
    this.#date = new Date(utcDate.getTime() + KOREAN_TIME_OFFSET)
  }

  get maker() {
    return this.#date // * KST 변환된 날짜 반환
  }

  

}

const date = new Date(2023, 12, 11)

const cd = new CustomDate(2024, 12, 11)
console.log(cd.maker)
