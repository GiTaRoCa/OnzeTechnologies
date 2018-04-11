<?php
/*********************
Author: Diego Casallas
Date: 01/04/2018
Description: functions for validation and send of message of mail.
*****************************************************************/
if ( isset( $_POST[ "name" ] ) && isset( $_POST[ "email" ] ) && isset( $_POST[ "subject" ] ) && isset( $_POST[ "business" ] ) && isset( $_POST[ "position" ] ) && isset( $_POST[ "phone" ] ) && isset( $_POST[ "city" ] ) && isset( $_POST[ "message" ] ) ) {
	$name = $_POST[ "name" ];
    $email = $_POST[ "email" ];
    $business = $_POST[ "business" ];
    $position = $_POST[ "position" ];
    $phone = $_POST[ "phone" ];
    $city = $_POST[ "city" ];
	$subject = $_POST[ "subject" ];
	$message = $_POST[ "message" ];
	$to = 'onze@sinapsissoft.com';
	$messageHTML = '<html>
            <head>
                <title>Solicitud de Información</title>
            </head>
            <body>
                <p><b>Nombre:</b> ' . $name . '</p>
				<p><b>Correo:</b> ' . $email . '</p>
                <p><b>Asunto:</b> ' . $subject . '</p>
                <p><b>Empresa:</b> ' . $business . '</p>
				<p><b>Cargo:</b> ' . $position . '</p>
                <p><b>Teléfono:</b> ' . $phone . '</p>
                <p><b>Ciudad:</b> ' . $city . '</p>
				<p><b>Mensaje:</b> ' . $message . '</p>
            </body>
        </html>';
	$headers = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From:Consulta pagina <" . $email . ">\r\n";
	$headers .= "Reply-To: $email\r\n";
	$headers .= "Return-path: $email\r\n";
	$headers .= "Bcc: sinapsis.soft.developer@gmail.com\r\n";
	if (mail($to,$subject,$messageHTML,$headers) ) {
		echo json_encode( array( 'status' => 'success' ) );
	} else {
		echo json_encode( array( 'status' => 'No success' ) );
	}
}
?>

