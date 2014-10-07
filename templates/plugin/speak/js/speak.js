/*
 * 简单的判断dom是否在可视窗口内，需要配合绑定resize和scroll
 */
$.fn.visiable = function(){
	var me = $(this),
	    win = $(window),
	    width = me.width(),
	    height = me.height();

	if(me && me.length<1) return false;

	if(win.scrollLeft()>me.offset().left+width) {//left
		return false;
	} else if(win.scrollLeft() + win.width() < me.offset().left) {//right
		return false;
	} else if(win.scrollTop() > me.offset().top + height) {//top
		return false;
	} else if(win.scrollTop() + win.height() < me.offset().top) {//bottom
		return false;
	} else {
		return true;
	}
}

/*
 * 数字闪动，十次
 */
var numberSpark = function(obj, startEl, endEl, dot){
	var that = this;

	that.obj = obj,
	that.no = that.obj.data('spark');

	that.arr = [];

	if(isNaN(that.no)) {return false;}

	that.frag = '',
	that.intv = 0,
	that.flag = 0,
	that.sn = '';

	for(var l=that.no.toString().length,i=l-1;i>=0;i--) {
		that.sn = that.no.toString().charAt(i);
		that.arr.push(that.sn);
	}

	that.spark = function() {
		that.frag = '';
		if(that.flag>9) {
			clearTimeout(that.intv);
			that.obj.attr('spark-done', true);
			return;
		}
		for(var l=that.arr.length,i=l-1;i>=0;i--){
			that.arr[i] = Number(that.arr[i]);
			that.arr[i] = that.arr[i]+1>9?0:(that.arr[i]+1);
			that.frag += (startEl||'')+that.arr[i]+(endEl||'');
			if(dot && i%3==0 && i!=0) {
				that.frag += dot;
			}
		}
		that.obj.html();
		that.obj.html(that.frag);
		that.flag++;
		that.intv = setTimeout(that.spark, 50);
	}
}
/*
 * tips 轮动
*/
var tipsSlide = function(arr){
	var that = this;

	that.len = arr.length,
	that.flag = 0,
	that.sets = 0;
	
	that.arr = arr;

	that.slide = function(){
			
		that.arr.eq(that.flag).mouseenter();
		that.flag = that.flag++ == that.len ? 0 : that.flag; 		
		that.sets = setTimeout(that.slide, 2000);
	}
	
	that.stop = function(){
		
		clearTimeout(that.sets);
	
	}
		
}

var domContainer = domContainer || {
	semRegBottom: $('#tg-pank'),
	semRegData: $('#semM'),
	infoul: $('.tg-info-ul')
};

$(document).ready(function(){
	var me = $(this),
	    win = $(window),

	    domr = function(){

		var t = domContainer.semRegBottom,
		    ts = domContainer.semRegData.find('span'),
		    t1 = ts.eq(0),
		    t2 = ts.eq(1),
		    t3 = ts.eq(2),
		    t4 = ts.eq(3),
		    iul = domContainer.infoul;

		if(t.visiable()) {
			if(t.attr('spark-done')=='true' || t.attr('spark-done')=='ing') {
				return;
			} else {
				t.attr('spark-dong', 'ing');
			}
			new numberSpark(t, '<li><span>', '</span></li>', '<li><s></s></li>').spark();
		}
		if(t1.visiable()) {
			if(t1.attr('spark-done')=='true' || t1.attr('spark-done')=='ing') {
				return;
			} else {
				t1.attr('spark-dong', 'ing');
			}
			new numberSpark(t1, '', '', ',').spark();
		}
		if(t2.visiable()) {
			if(t2.attr('spark-done')=='true' || t2.attr('spark-done')=='ing') {
				return;
			} else {
				t2.attr('spark-dong', 'ing');
			}
			new numberSpark(t2, '', '', ',').spark();
		}
		if(t3.visiable()) {
			if(t3.attr('spark-done')=='true' || t3.attr('spark-done')=='ing') {
				return;
			} else {
				t3.attr('spark-dong', 'ing');
			}
			new numberSpark(t3, '', '', ',').spark();
		}
		if(t4.visiable()) {
			if(t4.attr('spark-done')=='true' || t4.attr('spark-done')=='ing') {
				return;
			} else {
				t4.attr('spark-dong', 'ing');
			}
			new numberSpark(t4, '', '', ',').spark();
		} 
		if(iul.visiable()) {
			if( iul.attr('slide-done')=='ing') {
				return;
			} else {
				iul.attr('slide-done', 'ing');
			}
			
			var arr = $('.tips'),
			
			    tsd = new tipsSlide(arr);

			setTimeout(tsd.slide, 0);
			
			arr.mouseover(function(){
				tsd.stop();
				arr.unbind('mouseleave');
	
			});
		}
	};

	
	//如果在可视窗口内，直接触发
	domr();

	me.bind('scroll', domr);
	win.bind('resize', domr);

});