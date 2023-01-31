import { auth_request } from './fetch_wrapper'

export default class Queue {
  i = 0
  temporary_array = []
  complite_array = []
  constructor(array, size) {
    this.data = array
    this.size = size
    this.array_chank()
  }

  array_chank() {
    this.temporary_array = this.data.reduce((acc, item) => {
      acc[acc.length - 1].length === this.size && acc.push([])
      acc[acc.length - 1].push(item)
      return acc
    }, [[]])
    this.request_handler()
  }
  
  async request_handler() {
    const promises = []
    for(let x of this.temporary_array[this.i]) {
      promises.push(await auth_request(x.id, { method: 'get', initialCahce: false}))
    }
    await Promise.all(promises).then(value => {
      this.complite_array.push(value)
      if(this.temporary_array.length - 1 !== this.i) {
        this.i +=1
        this.request_handler()
      } else {
        console.log(this.complite_array)
        return this.complite_array
      }
    })
  }
}