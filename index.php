<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="./css/owl.carousel.css">
	<link rel="stylesheet" type="text/css" href="./css/splide.min.css">

	<link rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
	<link rel="stylesheet" type="text/css" href="./css/global.css">

</head>

<? require("./templates/header.php") ?>

<body>
	<div class="gray-bg">
		<? require("./components/calendarPlan/calendarPlan.php") ?>
	</div>

	<div class="gray-bg">
		<? require("./components/contactsMain/contactsMain.php") ?>
		<? require("./components/coachingsMain/coachingsMain.php") ?>

		<? require("./components/mainNew/mainNew.php") ?>
		<? require("./components/news/news.php") ?>
	</div>

	<? require("./components/mainSlider/mainSlider.php") ?>
	<div class="gray-bg">
		<? require("./components/groupTraining/groupTraining.php") ?>
		<? require("./components/ourEvents/ourEvents.php") ?>
		<? require("./components/coachings/coachings.php") ?>
		<? require("./components/freeClass/freeClass.php") ?>
	</div>
	<? require("./components/gallery/gallery.php") ?>
	<div class="gray-bg">
		<div class="lines-bg"></div>
		<? require("./components/aboutClub/aboutClub.php") ?>
		<? require("./components/questions/questions.php") ?>
	</div>

	<? require("./components/contacts/contacts.php") ?>
</body>
<? require("./templates/footer.php") ?>

<script src="https://api-maps.yandex.ru/v3/?apikey=dd438198-64bb-4b35-8d04-4bc6b6a155f8&lang=ru_RU"></script>
<script src="./lib/splide-extension-grid.min.js"></script>
<script src="./lib/jquery-3.7.1.min.js"></script>
<script src="./lib/owl.carousel.min.js"></script>
<script src="./lib/splide.min.js"></script>

<script src="./js/main.js"></script>

</html>