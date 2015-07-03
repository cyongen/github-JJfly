(function(window, undefined){

	var	$win	= $(window),
		doc		= document,
		$doc	= $(doc),
		loc		= location,
		WS		= window.WS || (window.WS = {}),
		init	= {},							//启动时加载程序
		base	= WS.base || (WS.base = {});	//接口程序

	base.showpage = function(data, temp, amountType){
		var _show,
			$ul		= $('.J_x_showpage'),
			amount	= base.tbType == '0003' ? amountType[1] : amountType[0],
			pages	= (function(){
				var day,
					pages = {title: [], data: []};
				for(day in data){
					var d		= data[day].data,
						html	= '';
					for(var i = 0, len = d.length; i < len; i++){
						html += template(d[i], temp);
						if(!((i + 1) % amount) || i == len - 1){
							pages.title.push(day);
							pages.data.push(html);
							html = '';
						}
					}
				}
				return pages;
			})(),
			page	= 0,
			min		= 0,
			size	= pages.data.length;
		(_show = function(n){
			var j = n === undefined ? min : page + n;
			if(j < min || j >= size)return;
			$ul.html(pages.data[j]);
			page = j;
		})();
		$doc.on('keydown', function(e){
			e = e || event;
			switch(e.keyCode){
				case 33:
					_show(-1);
					break;
				case 34:
					_show(1);
					break;
			}
		});
		function template(d, temp){
			var name;
			for(name in d){
				temp = temp.replace('{$' + name + '}', d[name]);
			}
			return temp;
		}
	};

	$.extend(base, $.loader(init));

})(window);