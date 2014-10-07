<link rel="stylesheet" type="text/css" href="./templates/plugin/tab/css/tab.css"/>
<ul id="tabScoll">
    <{foreach from=$tabModel item=items name=foo }>
        <li class="<{if $smarty.foreach.foo.index %4 == 0 }>cur<{else}><{/if}>"><span><{$items}></span></li>
    <{/foreach}>
</ul>
<div id="tabBox">
    <div class="itemCur">
        <p style="margin-top:50px">
            <span>爱投资上理财平均年收益<b>12.5</b>%，远超传统投资渠道。</span>
            <span>投资期限灵活，更可根据自己资金安排计划进行债权</span>
            <span>转让，保证资金流动性。</span>
        </p>
        <b class="itemTab1"></b>
    </div>
    <div>
        <p>
           <span>本息安全：第三方担保机构承担本息全额担保，投资人的本息安全有保障。</span>
           <span>法律保障：亚洲最大律师事务所金杜为爱投资提供法律咨询服务。</span>
           <span>交易透明：项目真实透明，资料公开规范，电子合同经CFCA认证。</span>
           <span>资金安全：交易资金有资产管理公司托管，商业银行监管，爱投资不自建资金池。</span>
        </p>
        <b class="itemTab2"></b>
    </div>
    <div>
        <p style="margin-top:63px">
            <span>爱投资秉承"专业机构做专业事"的理念，与全国各地多家融</span>
            <span>资性担保公司、融资租赁公司、保理公司等众多专业机构建立合作，</span>
            <span>目前已成为业内第三方担保机构最多、担保综合实力最强的P2C平台！</span>
            <span></span>
        </p>
        <b class="itemTab3"></b>
    </div>
    <div>
        <p style="margin-top:46px">
            <span>业内首创P2C借贷模式，开创投资理财靠谱的渠道。</span>
            <span>首家通过CFCA安全认证，为每一份电子合同都加上"安全锁"。</span>
            <span>多种金融创新产品丰富您的选择，合理配置您的投资。</span>
            <span>市场上最灵活的债权转让机制，自由定价，即时成交，可整可零。</span>
        </p>
        <b class="itemTab4"></b>
    </div>
</div>
<script src="./templates/plugin/tab/js/tab.js"></script>
<script type="text/javascript">
    window.onload = function(){
        autoTab();
    }
</script>