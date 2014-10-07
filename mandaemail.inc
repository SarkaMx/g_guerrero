<?php
function MandaEmail($mailTo,$mailFrom,$mailSubject,$mailBody,$mailFormat) {
	if($mailFormat == 0) {
    	$headers  = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
    } else {
    	$headers = "";
    }
    
    $headers .= "From: ". $mailFrom . "\r\n";
    $headers .= "Reply-To: " . $mailFrom . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    mail($mailTo,$mailSubject,$mailBody,$headers); 
}
?>