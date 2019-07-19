'use strict';

const api = function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/cody-julian';
  
  const getItems = function (){
    return fetch(BASE_URL+'/items');
 
		
  };
	
  const createItem = function (name) {
    const newItem = JSON.stringify({name:name});
    
		
    const fetchOptions = {
      method : 'POST',
      headers : new Headers({
        'Content-Type' : 'application/json',
      }),
      body : newItem
    };

    return fetch(BASE_URL+'/items', fetchOptions);

  };
	

  return {
    getItems,
    createItem
  };

}();