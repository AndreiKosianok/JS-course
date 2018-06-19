<?php 

//  https://api.telegram.org/bot616661434:AAFvA-tHFZsKAvXxoaxGcZeLqxkvhdoLss0/getUpdates

$phone = $_POST["phone"];
$email = $_POST["email"];
$token = "616661434:AAFvA-tHFZsKAvXxoaxGcZeLqxkvhdoLss0";
$chat_id = "-305823088";
$arr = array(
	"Телефон: " => $phone,
	"Email: " => $email 
);
foreach($arr as $key => $value) {
	$txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&amp;parse_mode=html&amp;text={$txt}", "r");

 ?>