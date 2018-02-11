'use strict';

/**
 * @ngdoc function
 * @name threadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the threadApp
 */
angular.module('threadApp')
  .controller('MainCtrl', function () {
    var controller = this;
    controller.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    controller.typeTaskValue = "";
    controller.upcomingTasks = [];
    controller.completedTasks = [];
    controller.addTask = function(task) {
      controller.upcomingTasks.push(task);
      controller.typeTaskValue = "";
    };
    controller.removeTask = function() {
      controller.completedTasks.push(controller.upcomingTasks.shift());
    };

  });
