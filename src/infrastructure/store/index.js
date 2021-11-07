import Store from './store'
import user from './modules/user'
import service from '../services'


const _persistence = service.vxLocal((state) => ({
    user: state.user
}));
var _store = Store({ _modules: {user},persistence: _persistence});



export default _store;
