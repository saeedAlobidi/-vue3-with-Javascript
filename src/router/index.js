import routerEngin from './routerEngin'
import routes from './router'
import progress from 'nprogress'
import constraints from '@/constraints'

var baseUrl=constraints.environment.server.url;
 const _router=routerEngin({progress,routes,baseUrl})
 
 export default _router;