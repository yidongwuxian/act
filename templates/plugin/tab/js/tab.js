/*
*  tab自动切换
*/
function autoTab(){
	var oTab = document.getElementById('tabScoll');
	var tabLi = oTab.getElementsByTagName('li');
	var oItem = document.getElementById('tabBox');
	var itemDiv = oItem.getElementsByTagName('div');
	var tabAnimate = document.getElementById('tabAnimate');
	var iNum = 0; 
	var tabTimer = null;

	oTab.getElementsByTagName('li')[0].className = 'cur';
	itemDiv[0].className = 'itemCur';
	
	for(var i=0; i<tabLi.length; i++){
	
		tabLi[i].index = i;
		tabLi[i].onmouseover = function(){
			iNum = this.index; 			
			fnTab();			
		};	
	}

	function fnTab(){
		
		for(var i=0; i<tabLi.length; i++){
			tabLi[i].className = '';	
			itemDiv[i].className = '';
		}
		
		tabLi[iNum].className = 'cur';
		itemDiv[iNum].className = 'itemCur';
	}
	
	function autoPlay(){
		
		iNum++;
		iNum %= tabLi.length;
		fnTab()		
	}
 
	tabTimer = setInterval(autoPlay,3000);

	tabAnimate.onmouseover = function(){
		clearInterval(tabTimer);
	};
	
	tabAnimate.onmouseout = function(){
		tabTimer = setInterval(autoPlay,3000);		
	};

}