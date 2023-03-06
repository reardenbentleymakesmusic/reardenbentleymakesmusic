<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" type="image/x-icon" href="icon.png">
    <title>commission ordered.</title>
  </head>
  <body>
    <div class="content">
      <h1 class="text">commission ordered.</h1>
      <h3 class="text">thank you very much.</h3>
      <br>
      <p class="text">
        a confirmation email has been sent to you. if you have any concerns, reach out to comms@reardenbentleymakesmusic.com <br>
        otherwise, i'll get back to you shortly with more info and a quote. thank you again for your interest in my music.
      </p>  
    </div>
    <footer>
      <a href="index.html"><p class="text">home</p></a>
    </footer>
  </body>
  <php ?
       $name = $_POST['name'];
       $visitor_email = $_POST['email'];
       $details = $_POST['details'];
       
       $order_email_from = 'comms@reardenbentleymakesmusic.com';
       $order_email_subject = 'new commission from $name';
       $order_email_body = 'new commission from $name:\n\n$details';
       mail('comms@reardenbentleymakesmusic.com', $order_email_subject, $order_email_body, $order_email_from);
       
       $confirm_email_from = 'comms@reardenbentleymakesmusic.com';
       $confirm_email_subject = 'rearden bentley makes music: commission confirmation';
       $confirm_email_body = 'hello. \n\nthank you for your order. here are the details again, just to make sure: \n\n$details\n\n
                              if everything looks good, then good. if not, then email comms@reardenbentleymakesmusic.com, and we can sort everything out. \n\n
                              thanks again,\n\n
                              rearden bentley makes music';
       mail($visitor_email, $confirm_email_subject, $confirm_email_body, $confirm_email_from);
  ?>
</html>
