import SampleMobxStore from './SampleMobx'

class Store {
  constructor() {
    this.sampleMobxStore = new SampleMobxStore(this)
  }
}

export default new Store()
