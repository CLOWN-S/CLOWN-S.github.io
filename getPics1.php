<?php
header('Content-type:text/html; charset="utf-8"');
$url = 'http://www.wookmark.com/api/json/popular?page=1';
$content = file_get_contents($url);
echo $content;
?>