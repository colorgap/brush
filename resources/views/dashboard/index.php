<!doctype html>
<html ng-app="bowyer">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bowyer - app scaffolding for lumen and angular based projects</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <link rel="shortcut icon" href="images/favicon-32x32.png" type="image/x-icon" />
    <link href="bowyer-ui/dashboard/css/main.css" rel="stylesheet">
</head>
<body ng-cloak>
<!--[if lt IE 9]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->
<ui-view></ui-view>
<script src="bowyer-ui/dashboard/dist/vendor.js"></script>
<script src="bowyer-ui/dashboard/js/app.js"></script>
</body>
</html>