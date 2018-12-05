var __top = (function() {
	// ヘッドライン情報
	var headline = function() {
		var template = _.template(
			'<div class="sec-headline_detail_date"><%= date %></div>'+
			'<div class="sec-headline_detail_text">'+
			'	<% if(link != "") { %>'+
			'	<a href="<%= link %>" target="_blank"><%= text %></a>'+
			'	<% } else { %>'+
			'	<%= text %>'+
			'	<% } %>'+
			'</div>'
		);
		var src = template({
			date: headlineObj.date,
			text: headlineObj.text,
			link: (headlineObj.link != '' ? headlineObj.link : '')
		});
		$('.sec-headline_detail').append(src);
	}();

	// イベント情報
	var event = function() {
		var appendLength = 3;
		var template = _.template(
			'<li class="localnav_list_items fade-child" data-postdate="2018-05-25">'+
			'	<a href="<%= url %>">'+
			'		<div class="list_items_img_wrap">'+
			'			<div class="list_items_img_block" style="background-image:url(<%= thumb %>);"></div>'+
			'		</div>'+
			'		<div class="list_items_txt_wrap">'+
			'			<p class="list_items_txt_kind"><span>SEMINAR</span></p>'+
			'			<% if(newicon){ %>'+
			'				<p class="list_items_txt_title is-new"><%= title %></p>'+
			'			<% }else{ %>'+
			'				<p class="list_items_txt_title"><%= title %></p>'+
			'			<% } %>'+
			'			<p class="list_items_txt_desc"><%= desc %></p>'+
			'		</div>'+
			'	</a>'+
			'</li>'
		);

		function isNew(date) {
			var getDate = date.replace(/\./g, '-');
			console.log(getDate)
			var conbertDate = moment(getDate).format('YYYY-MM-DD')
			var feature = Number(moment(conbertDate).add('days', 7).format('YYYYMMDD'));
			var today = Number(moment().format("YYYYMMDD"));
			if(today < feature) {
				return true;
			}else{
				return false;
			}
		}

		function makeElement(arr) {
			var i = 0;
			var src = '';
			while(i < appendLength) {
				console.log(isNew(arr[i].date) ? 'a' : 'b')
				src += template({
					title: arr[i].title,
					thumb: arr[i].thumb,
					kind : arr[i].category[0],
					desc : arr[i].description,
					url  : arr[i].url,
					newicon  : isNew(arr[i].date)
				});
				i = (i + 1) | 0;
			}
			$('.localnav_list').empty().append(src);
		}

		function init(res) {
			if(res.length > 0) {
				makeElement(res);
			}else{

			}
		}
		$.getJSON('/event/eventlist.json').then(function(res){
			init(res);
		});
	};
});

window.addEventListener('DOMContentLoaded', __top, false);
