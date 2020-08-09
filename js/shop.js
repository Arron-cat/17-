// 找到所有的 加 按钮
var jia = document.querySelectorAll('.jia');

// 找到所有的 减 按钮
var jian = document.querySelectorAll('.jian');

// 找到所有的 单价元素
var danjia = document.querySelectorAll('.danjia');

// 找到所有的 固定单价
var gddj = document.querySelectorAll('.gddj');

// 找到所有的 .pronum 元素（共几件商品）
var pronum = document.querySelectorAll('.pronum');

// 找到 总价 元素
var totalprice = document.querySelector('.heji span');

// 找到 总价 元素
var jiesuan = document.querySelector('.jiesuan span');

var shuliang = document.querySelectorAll('.shuliang');

for(let i = 0; i < jia.length; i++) {

	// 给每个加按钮 添加 单击事件
	jia[i].onclick = function() {
		shuliang[i].value = ++shuliang[i].value;
		jisuan();
	}

	// 给每个减按钮 添加 单击事件
	jian[i].onclick = function() {
		if(shuliang[i].value > 1) {
			shuliang[i].value = --shuliang[i].value;
			jisuan();
		}
	}

}

jisuan();

function jisuan() {

	// 找到所有的 加 按钮
	var jia = document.querySelectorAll('.jia');

	// 找到所有的 减 按钮
	var jian = document.querySelectorAll('.jian');

	// 找到所有的 单价元素
	var danjia = document.querySelectorAll('.danjia');

	// 找到所有的 固定单价
	var gddj = document.querySelectorAll('.gddj');

	// 找到所有的 .pronum 元素（共几件商品）
	var pronum = document.querySelectorAll('.pronum');

	// 找到 总价 元素
	var totalprice = document.querySelector('.heji span');

	// 找到 总价 元素
	var jiesuan = document.querySelector('.jiesuan span');

	var shuliang = document.querySelectorAll('.shuliang');

	var totalnum = 0;
	var jieSuanNum = 0;
	for(let i = 0; i < danjia.length; i++) {
		// 每一种商品的总价
		danjia[i].innerHTML = (shuliang[i].value * gddj[i].innerHTML).toFixed(2);

		// 每一种商品的数量
		pronum[i].innerHTML = shuliang[i].value;

		// 所有商品的总价
		totalnum += Number(danjia[i].innerHTML);

		// 所有商品的数量
		jieSuanNum += Number(shuliang[i].value);

	}
	totalprice.innerHTML = totalnum;
	jiesuan.innerHTML = jieSuanNum;
}

function del(obj) {
	var cartlist = document.querySelector('.cartlist');
	cartlist.removeChild(obj.parentNode.parentNode);
	jisuan();

}

var shopcart = document.querySelector('.shopcart');
var cartlist = document.querySelector('.cartlist');

shopcart.onmouseenter = function() {
	cartlist.style.display = 'block';
}
shopcart.onmouseleave = function() {
	cartlist.style.display = 'none';
}