angular
  .module('myApp')
  .factory('service1', () => {
    return {
      getSomething: getSomething
    };

    function getSomething() {
      return 'something';
    }
  });
