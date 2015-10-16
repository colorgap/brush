<!doctype html>
<html ng-app="lume">
<head>
    <meta charset="utf-8">
    <title>lume</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <link href="landingPage-ui/css/main.css" rel="stylesheet">
</head>
<body>
<!--[if lt IE 9]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<div ui-view></div>

<script src="landingPage-ui/dist/vendor.js"></script>
<script src="landingPage-ui/js/app.module.js"></script>
<script src="landingPage-ui/js/app.route.js"></script>
<script src="landingPage-ui/js/app.run.js"></script>
</body>
</html>