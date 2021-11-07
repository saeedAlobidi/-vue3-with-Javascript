
async function api_interceptors_request_begin(req) {

  
}


async function api_interceptors_request_end(req) {

  
}

async function api_interceptors_response_begin(response) {

  
}

async function api_interceptors_response_end(response) {

  
}



async function route_before_each(routeTo, routeFrom, next, store) {

 
      next();

}


async function route_after_each(routeTo, routeFrom) {

}



export default { route_before_each, route_after_each, api_interceptors_request_begin, api_interceptors_request_end, api_interceptors_response_begin, api_interceptors_response_end }