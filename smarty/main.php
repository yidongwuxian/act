<?php

define('$base', dirname ( __FILE__ ) );
include("./libs/Smarty.class.php"); 

$smarty = new Smarty;
$smarty->template_dir = "./templates"; //设置模板目录
$smarty->compile_dir = "./templates_c/"; //设置编译目录
$smarty->cache_dir = "./cache/"; //设置缓存目录
$smarty->cache_lifetime = 60 * 60 * 24;  //设置缓存时间
$smarty->caching = false;      //设置缓存方式

$smarty->debugging = false;  //smarty调试台开关
$smarty->left_delimiter = "<{"; 
$smarty->right_delimiter = "}>";

?>