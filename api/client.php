<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>API</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
</head>
<body>
  <h2>Response:</h2>
  <pre id="response"></pre>
  <pre id="dateResponse"></pre>

  <script>
    //----------------------------------------------------------------------
    // Send a http request with ajax
    //----------------------------------------------------------------------
    $(function() {
      $.ajax({
        url: 'dbSetup.php',
        data: '',
        dataType: 'json',
        success: function(data) {
          $('#response').html(JSON.stringify(data, null, ' '));
        }
      });
    });

  /*  $(function()
      {
        $.ajax(
          {
            url: 'datebSetup.php',
            data: '',
            dataType: 'json',
            success: function(data)
            {
              $('#dateResponse').html(JSON.stringify(data, null, ' '));
            }
          });
      });*/
  </script>
</body>
</html>
