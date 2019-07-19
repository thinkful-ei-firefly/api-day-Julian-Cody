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

  const updateItem = function(id, updateData){
    const fetchOptions = {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(updateData)
    };
    return fetch (BASE_URL + '/items/' + id, fetchOptions);
  };
  
  const deleteItem = function(id){
    const fetchOptions = {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };

    return fetch(BASE_URL + '/items/' + id, fetchOptions);
  };


  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };

}();