<?php
header('Content-type:text/html; charset="utf-8"');
$cpage = isset($_GET['cpage']) ? $_GET['cpage'] : 1;
$url = 'http://v.juhe.cn/toutiao/index?type=top&key=5c8f110a97dca3537dd1a1a6850441b5';
$content = file_get_contents($url);
$content = iconv('gbk', 'utf-8', $content);
echo $content;
?>