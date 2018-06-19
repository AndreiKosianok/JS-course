<?php 

//  https://api.telegram.org/bot616661434:AAFvA-tHFZsKAvXxoaxGcZeLqxkvhdoLss0/getUpdates

$name = $_POST["user_name"];
$phone = $_POST["user_phone"];
$email = $_POST["user_email"];
$token = "616661434:AAFvA-tHFZsKAvXxoaxGcZeLqxkvhdoLss0";
$chat_id = "-305823088";
$arr = array(
	"Имя пользователя: " => $name,
	"Телефон: " => $phone,
	"Email: " => $email 
);
foreach($arr as $key => $value) {
	$txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&amp;parse_mode=html&amp;text={$txt}", "r");

 ?>