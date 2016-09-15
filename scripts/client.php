<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ESAP Calendar</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
</head>
<body>
  <h2>Response:</h2>
  <pre id="response"></pre>

  <script>
    //----------------------------------------------------------------------
    // Send a http request with ajax
    //----------------------------------------------------------------------
    $(function() {
      $.ajax({
        url: 'api.php',
        data: '',
        dataType: 'json',
        success: function(data) {
          $('#response').html(JSON.stringify(data, null, ' '));
        }
      });
    });
  </script>
</body>
</html>
