<?php /* Smarty version Smarty-3.1.19, created on 2014-10-07 04:34:19
         compiled from ".\templates\index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2917954336d4b5cd127-78184394%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c8e956e3851e7e230a4319499c1788c9a564e940' => 
    array (
      0 => '.\\templates\\index.tpl',
      1 => 1412655624,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2917954336d4b5cd127-78184394',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_54336d4b630405_74635596',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54336d4b630405_74635596')) {function content_54336d4b630405_74635596($_smarty_tpl) {?><?php echo $_smarty_tpl->getSubTemplate ("./layouts/header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<div class="tg-itouzi-jiedai">
    <div class="cn"  id="tabAnimate">
        <div class="tg-title-style">
            <h2>爱投资的优势</h2>
        </div>
        <?php echo $_smarty_tpl->getSubTemplate ("./plugin/tab/tab.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

    </div>
</div>
<?php echo $_smarty_tpl->getSubTemplate ("./plugin/speak/speak.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<?php echo $_smarty_tpl->getSubTemplate ("./layouts/footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>
<?php }} ?>
