
import log from '../services/log'
import progress from 'nprogress'

function asyncHandler(callback) {

    return async (object) => {
        try {
          return   callback(object);
        } catch (error) {
            log('Erorr--->',error)
            progress.isStarted() ? progress.done() : false 
            object != undefined ? object.handler != undefined ? object.handler() : false : false;
          
        }

    };

}
export default { asyncHandler };