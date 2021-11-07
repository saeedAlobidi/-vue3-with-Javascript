import Vue from 'vue'
import services from '@/infrastructure/services'
import event from '../infrastructure/core/globalEvent'
import store from '@/infrastructure/store'
import { createRouter, createWebHistory } from 'vue-router'

 
export default ({progress,routes,BASE_URL}) => {

  const router = createRouter({
    history: createWebHistory(BASE_URL),
    routes
  })
  

  router.beforeEach(async (routeTo, routeFrom, next) => 
  {
      progress.start();
    await  event.route_before_each(routeTo, routeFrom, next, store)

  });
  router.afterEach(async () => {
    await event.route_after_each()
    progress.done()

  });

  router.onError(error => {
    services.log('router error->>',error)
  });

  return router;

}
