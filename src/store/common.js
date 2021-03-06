import { observable, computed, autorun, action} from 'mobx';
import { getSysSetting } from '../api';

class AppStore  {
  @observable value = '结衣'

  @observable setting = {};
  @action.bound getSysSetting() {
    getSysSetting({}).then(res => {
      this.setting = res.data.data;
    })
  }
}
let store = new AppStore();

export default store;