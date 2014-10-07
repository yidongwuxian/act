##专题页模板（php+Smarty）
####设计目的：为了把模块分成一个个小模块，每个小模块里都带有样式效果，方便以后组装调用，节省重复开发的时间。
1. 项目搭建环境win7+wampServer。
2. 运行需要先将项目复制到www目录下，访问localhost/具体项目名。

####1.1配置Smarty环境
- 下载Smarty,把libs文件夹复制到要开发的项目文件里。

- 新建cache,configs,templates,templates_c文件夹，用来存放缓存，配置文件，模板文件，模板缓存文件用的。

- Smarty文件夹下新建一个main.php文件

    	<?php
    	
	    	define('$base', dirname ( __FILE__ ) );
	    	include("./libs/Smarty.class.php"); 
	    	
	    	$smarty = new Smarty;
	    	$smarty->template_dir = "./templates";   //设置模板目录
	    	$smarty->compile_dir = "./templates_c/"; //设置编译目录
	    	$smarty->cache_dir = "./cache/";         //设置缓存目录
	    	$smarty->cache_lifetime = 60 * 60 * 24;  //设置缓存时间
	    	$smarty->caching = false;                //设置缓存方式
	    	
	    	$smarty->debugging = false;              //smarty调试台开关
	    	$smarty->left_delimiter = "<{"; 
	    	$smarty->right_delimiter = "}>";
    	
    	?>


- 入口文件是index.php
	
	    <?php
    		include("./smarty/main.php"); 
    		include("./data/data.php"); 
    		$smarty->display("index.tpl"); 
    	?>


- index.tpl里面定义了具体调用哪个模块。（templates/index.tpl）

    	<{include file="./layouts/header.tpl"}>
    	<div class="tg-itouzi-jiedai">
    		<div class="cn"  id="tabAnimate">
		    	<div class="tg-title-style">
		    		<h2>爱投资的优势</h2>
		    	</div>
	    		<{include file="./plugin/tab/tab.tpl"}>
	    	</div>					
    	</div>
    	<{include file="./plugin/speak/speak.tpl"}>
    	<{include file="./layouts/footer.tpl"}>


- 模块放在plugin文件夹下，具体可以参看LP-Smarty的源代码。



