angular.module('pdf')
  .directive('pdfViewerToolbar', [
    'pdfDelegate',
    
  function(pdfDelegate) {
    return {
      restrict: 'E',
      template:
        '<div class="white left-0 right-0 fixed flex-wrap cls">' +
         '<div class="viewer">'+
          '<div class="">' +
            '<a href=""' +
              'ng-click="prev()"' +
              'class="button py2  button-nav-dark"><img src="/assets/img/arrow_back_left.png" alt="">' +
            '</a>' +
            '<a href=""' +
              'ng-click="next()"' +
              'class="button py2 m0 button-nav-dark"><img src="/assets/img/arrow_next_right.png" alt="">' +
            '</a>' +

             
            '<a href=""' +
              'ng-click="zoomOut()"' +
              'class="button py2 m0 button-nav-dark"><img src="/assets/img/zoom_out.png" alt="">' +
            '</a>' +
            '<a href=""' +
              'ng-click="zoomIn()"' +
              'class="button py2 m0 button-nav-dark"><img src="/assets/img/zoom_in.png" alt="">' +
            '</a>'
                  +
            '<a href=""' +
              'ng-click="rotate()"' +
              'class="button py2 m0 button-nav-dark"><img src="/assets/img/rotate_clockwise.png" alt="">' +
            '</a>' +
            '<span class="px1"><img src="/assets/img/document_file_paper_text.png" alt=""></span> ' +
            '<input type="text" class="field-dark" ' +
              'min=1 ng-model="currentPage" ng-change="goToPage()" ' +
               'style="width: 5%"> ' +
            ' / {{pageCount}}' +
          '</div>' +
          '</div>'+
        '</div>',
      scope: { pageCount: '=' },
      link: function(scope, element, attrs) {
        var id = attrs.delegateHandle;
        scope.currentPage = 1;

        scope.prev = function() {
          pdfDelegate
            .$getByHandle(id)
            .prev();
          updateCurrentPage();
        };
        scope.next = function() {
          pdfDelegate
            .$getByHandle(id)
            .next();
          updateCurrentPage();
        };
        scope.zoomIn = function() {
          pdfDelegate
            .$getByHandle(id)
            .zoomIn();
        };
        scope.zoomOut = function() {
          pdfDelegate
            .$getByHandle(id)
            .zoomOut();
        };
        scope.rotate = function() {
          pdfDelegate
            .$getByHandle(id)
            .rotate();
        };
        scope.goToPage = function() {
          pdfDelegate
            .$getByHandle(id)
            .goToPage(scope.currentPage);
        };

        



        var updateCurrentPage = function() {
          scope.currentPage = pdfDelegate
                                .$getByHandle(id)
                                .getCurrentPage();
        };
      }
    };
}]);
