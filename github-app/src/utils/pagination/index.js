'use strict'

const offset = (total, activePage) => {
  if (total === activePage || activePage === 1) {
    return 3
  }
  return 2
}

export default ({total, activePage}) => {
  let arr = Array.from({length: total}, (_, i) => i + 1)
  let arrTemp = []
  arr.map((value) => {
    if (value === arr[0] || value === arr[arr.length - 1]) {
      arrTemp.push(value)
    } else {
      if (value <= activePage - offset(total, activePage)) {
        if (arrTemp[arrTemp.length - 1] !== '...') {
          arrTemp.push('...')
        }
      } else if (value >= activePage + offset(total, activePage)) {
        if (arrTemp[arrTemp.length - 1] !== '...') {
          arrTemp.push('...')
        }
      } else {
        arrTemp.push(value)
      }
    }
  }
  )
  return arrTemp
}
