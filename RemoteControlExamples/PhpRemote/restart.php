<?php
require("GbxRemote.inc.php");

$port = 5001;
$AuthLogin = "SuperAdmin";
$AuthPassword = "SuperAdmin";
 
$client = new IXR_Client_Gbx;
if (!$client->Init($port)) {
   trigger_error("[".$client->getErrorCode()."] ".$client->getErrorMessage());
}

if (!$client->query("Authenticate", $AuthLogin, $AuthPassword)) {
   trigger_error("[".$client->getErrorCode()."] ".$client->getErrorMessage());
}

$client->query("SetServerPlugin", true);
