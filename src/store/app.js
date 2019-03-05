import { observable, computed, autorun, action} from 'mobx';

class AppStore  {
  @observable dataList = [];
  @observable defaultVal = 'abc'
  @observable checked = false
  
  constructor() {

  }
  
  @computed get defaultValAdd () {
    return this.defaultVal + 'bacg'
  }
  @computed get getInputLength () {
    return this.dataList.length
  }
  @action.bound handerToggleLeft () {
    this.defaultVal += 'dddd'
  }
  @action addValue () {
    this.defaultVal += '333'
  }
}
let store = new AppStore();

export default store;