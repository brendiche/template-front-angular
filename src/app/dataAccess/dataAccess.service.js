(function() {
  'use strict';

  angular
    .module('dataAccess')
    .factory('dataAccess',dataAccess);

    /* @ngInject */
    function dataAccess($http){
    	var service = {
            getUser : getUser
    	}

    	return service;

        function getUser(){
            return $http.get('http://localhost:3000/');
        }
    }

})();
