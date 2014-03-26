$(document).ready(function() {
  
  $('body').on('click', 'a', function(e) {
    if (e.shiftKey) {
      e.preventDefault();
      chrome.runtime.sendMessage({method: "sendURL",
                                  sentUrl: e.target.href }, 
        function (response) {
          if (response.status === 200) {
            debugger
            $(e.target).css("color", "green");
          }
        });
    }
  });
});