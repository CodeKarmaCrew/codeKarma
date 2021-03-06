angular.module('codeKarmaApp').controller('DevProjectsController', function($scope, $state, RequestService) {

    this.projectComplete = false;

    $scope.updateButton = function() {

      console.log("in updateButton");
      this.projectComplete = true;
      console.log(this.projectComplete);
      // $scope.$apply();

    };

    this.pullRequest = function() {
      $('.dev-projects-container').addClass('modal-up');
      this.showModal = true;
    };

    this.closeModal = function() {
      this.showModal = false;
      $('.dev-projects-container').removeClass('modal-up');
    };

    // get projects info

    this.getProjects = function() {
      RequestService.getDevProjects(function(response) {

          console.log(response);
          // $scope.projects = response;
          // console.log($scope.projects);
        });
    };

    // progress slider - will need to GET progress on page load

    $scope.progress = 0;

    // update and post progress

    // this.updateProgress = function(status) {
    //
    //     this.status = status;
    //
    //     // if progress < 100%, show "ask for help" button
    //     // if progress === 100%, show "submit project" and disable est. completion date
    //
    //     if (this.status !== "100") {
    //         this.complete = false;
    //     } else if (this.status === "100") {
    //         this.complete = true;
    //     }
    //
    //     // RequestService.setProgress(progress);
    //
    // };

    this.updateEstDate = function(date) {

        // RequestService.setEstDate(date);

    };



    // update and post est. completion date


    this.getProjects();

});
