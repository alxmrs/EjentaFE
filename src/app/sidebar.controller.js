(function(){
  'use strict';

  angular.module('app')
    .controller('SidebarCtrl', SidebarCtrl);

  var ctrl;
  function SidebarCtrl(){
    ctrl = this;

    ctrl.team = ctrl.getCareTeam();

    ctrl.contact = {
      nonUrgent: '(703) 555-6789',
      urgent: 'Call 911'
    };

  }

  /**
   * Gets care team data for user.
   * Hardcoded for now, later can be replaced by rest service
   * @returns {*[]}
   */
  SidebarCtrl.prototype.getCareTeam = function(){
    return [
      {
        image: 'assets/images/doctor.jpg',
        name: 'Mathew Park',
        role: 'Cardiologist'
      },
      {
        image: 'assets/images/nurse.jpg',
        name: 'Emily Watkins',
        role: 'Nurse Practitioner'
      }
    ];
  };


})();