<!doctype html>
<!--[if lt IE 7]>      <html lang="<%= language  %>" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="<%= language  %>" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="<%= language  %>" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="<%= language  %>" class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <base href="/">
    <title><%- _.compact([title, appName]).join('|')  %></title>
    <meta name="description" content="<%= description %>">
    <meta name="viewport" content="width=device-width">

    <link rel="icon" href="images/icons/favicon.ico" type="image/x-icon">
    <!-- For third-generation iPad with high-resolution Retina display: -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/icons/apple-touch-icon-144x144-precomposed.png">
    <!-- For iPhone with high-resolution Retina display: -->
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/icons/apple-touch-icon-114x114-precomposed.png">
    <!-- For first- and second-generation iPad: -->
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/icons/apple-touch-icon-72x72-precomposed.png">
    <!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
    <link rel="apple-touch-icon-precomposed" href="images/icons/apple-touch-icon-precomposed.png">

    <!-- 
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300' rel='stylesheet' type='text/css'>
    -->
    <link rel="stylesheet" href="styles/styles.css">
    <!-- 
    <script type="text/javascript" src="/scripts/modernizr.js"></script>
    -->
  </head>
  <body>

    <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!--[if lt IE 9]>
      <script src="/bower_components/es5-shim/es5-shim.js"></script>
      <script src="/bower_components/json3/lib/json3.min.js"></script>
    <![endif]-->

    <div class="container">
      <div class="row">
        <div class="column large-9">
          <svg
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="680"
            height="450"
            id="svg2">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop stop-color="#0fffff" offset="0%"/>
                <stop stop-color="#eb1f87" offset="50%"/>
                <stop stop-color="#0fff10" offset="100%"/>
                <animate 
                  attributeName="x1"
                  repeatCount="indefinite"
                  values="20%;-50%;20%"
                  from="20%"
                  to="20%"
                  dur="2s" />
                <animate 
                  attributeName="x2"
                  repeatCount="indefinite"
                  values="80%;150%;80%"
                  from="80%"
                  to="80%"
                  dur="2s" />
                <animate 
                  attributeName="y1"
                  repeatCount="indefinite"
                  values="20%;-50%;20%"
                  from="20%"
                  to="20%"
                  dur="2s" />
                <animate 
                  attributeName="y2"
                  repeatCount="indefinite"
                  values="80%;150%;80%"
                  from="80%"
                  to="80%"
                  dur="2s" />
              </linearGradient>
            </defs>
            <rect
              width="100%"
              height="100%"
              style="fill:url(#gradient);fill-opacity:1;stroke:none;" />
            <path
              d="m 0,0 0,450 680,0 0,-450 -680,0 z m 261.90625,87.25 2.28125,0 58.65625,268.09375 59.28125,-268.09375 1.65625,0 59.28125,268.09375 59.28125,-268.09375 2.0625,0 -60.53125,274.09375 -1.625,0 -59.28125,-268.53125 -59.28125,268.53125 -1.25,0 -60.53125,-274.09375 z m -216.46875,0.40625 91.09375,0 0,1.65625 -89.4375,0 0,134.03125 89.4375,0 0,1.875 -89.4375,0 0,136.125 -1.65625,0 0,-136.125 0,-1.875 0,-135.6875 z m 108.25,0 91.09375,0 0,1.65625 -89.4375,0 0,134.03125 89.4375,0 0,1.875 -89.4375,0 0,136.125 -1.65625,0 0,-136.125 0,-1.875 0,-135.6875 z m 377.5625,0 43.1875,0 c 20.24258,2.6e-4 35.46598,6.03846 45.65625,18.15625 9.63927,11.56747 14.43738,29.2212 14.4375,52.90625 l 0,131.5625 c -1.2e-4,23.68534 -4.79823,41.30779 -14.4375,52.875 -10.19027,12.11805 -25.41367,18.1875 -45.65625,18.1875 l -43.1875,0 0,-273.6875 z m 1.65625,1.65625 0,270.375 41.53125,0 c 38.69507,0 58.03116,-23.13729 58.03125,-69.40625 l 0,-131.5625 c -9e-5,-46.2687 -19.33618,-69.40598 -58.03125,-69.40625 l -41.53125,0 z"
              style="fill:#ffffff;fill-opacity:1;stroke:none" />
          </svg>
        </div>
       

        <nav class="column large-3">
          <ul>
            <% _.each(navigation, function(link, linkPath) { %>
            <li>
              <a href="<%- linkPath %>"><%- link.title %></a>
              
              <% if (link.links) { %>
              <ul>
                <% _.each(link.links, function(subLink, subPath) { %>
                <li>
                  <a href="<%- subPath %>"><%- subLink.title %></a>
                </li>
                <% }); %>
              </ul>
              <% } %>
            </li>
            <% }); %>
          </ul>
        </nav>
      </div>


      <footer class="row page">
        <nav>
          <ul>
            
          </ul>
        </nav>
      </footer>
    </div>

    
    <% if (googleAnalyticsUA) { %>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', '<%- googleAnalyticsUA %>');
      ga('send', 'pageview');
    </script>
    <% } %>

    
    <script data-main="scripts/index.js" src="scripts/deps.js"></script>
    

    <!-- only relevant for this page -->
    <script>
      (function(root) {

var $gradient = $('#rect3779');
if ($gradient.length) {
  $gradient.css('transform-origin', 'center')
  var alpha = 0;
  setInterval(function() {
    alpha++;
    if (alpha === 360) {
      alpha = 0;
    }
    // console.info(alpha);
    $gradient.css('transform', 'rotate('+ alpha +'deg)');
  }, 1000 / 16);
}
      }(this));
    </script>
  </body>
</html>
