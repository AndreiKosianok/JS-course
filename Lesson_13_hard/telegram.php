<?php 

//  https://api.telegram.org/bot616661434:AAFvA-tHFZsKAvXxoaxGcZeLqxkvhdoLss0/getUpdates

$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST["mail"];
$message = $_POST["message"];
$token = "616661434:AAFvA-tHFZsKAvXxoaxGcZeLqxkvhdoLss0";
$chat_id = "-305823088";
$arr = array(
	"Имя: " => $name,
	"Телефон: " => $phone,
	"Email: " => $email,
	"Сообщение: " => $message
);
foreach($arr as $key => $value) {
	$txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&amp;parse_mode=html&amp;text={$txt}", "r");

 ?>