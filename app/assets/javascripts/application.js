//= require jquery
//= require jquery_ujs
//= require_tree .
//= require_self

(function() {
  var working = false;

  $(document).on('click', "[data-retweeter-method]", function(event) {
    event.preventDefault();

    if(!working) {
      working = true;
      var ids = friendIds.slice(0);
      var isDelete = $(this).data("retweeterMethod") == 'delete';
      var errors = 0;

      var doTheNext = function() {
        $('#retweeter-count').html(isDelete ? ids.length : friendIds.length - ids.length);

        if(ids.length) {
          currentId = ids.pop();

          $.ajax('/retweets/' + currentId, {
            method: isDelete ? 'delete' : 'post',

            success: function() {
              doTheNext();
            },

            error: function($xhr, status) {
              errors += 1;

              if(errors >= 5) {
                alert("There has been 5 errors so far. I'm giving up.");
                working = false;
              } else {
                ids.unshift(currentId);
                doTheNext();
              }
            }
          });
        } else {
          working = false;
          alert("Thanks for playing.");
        }
      }

      doTheNext();
    }
  });
})();
