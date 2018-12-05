var eventdayinsert, _eventdayinsert = (function() {
	var __ = this;

	var getQueryString = function() {
		var query, params, i, element, name, value;
		var result = {};
		if (document.location.search.length === 0) return result;
		query = document.location.search.substring(1);
		params = query.split('&');
		for (i = 0; i < params.length; i++) {
			element = params[i].split('=');
			name = decodeURIComponent(element[0]);
			value = decodeURIComponent(element[1]);
			result[name] = decodeURIComponent(value);
		};
		return result;
	};
	this.queryId = getQueryString().entryid;
	this.pageKind = location.pathname.indexOf('/event_entry/') != -1 ? 'event' : 'intern';

	var getWhileDay  = function(_s,_e){
		var data = []
		var s = moment(_s).format("YYYY-MM-DD");
		var e = moment(_e).format("YYYY-MM-DD");
		var diff = moment(e).diff(moment(s), "days");
		for(var i=0;i<=diff;i++){
			var t = moment(s).add("days", i).format("YYYY-MM-DD");
			var y = moment(s).add("days", i).day();
			var yy = '';
			switch(y){
	            case 0: yy = '日';break;
	            case 1: yy = '月';break;
	            case 2: yy = '火';break;
	            case 3: yy = '水';break;
	            case 4: yy = '木';break;
	            case 5: yy = '金';break;
	            case 6: yy = '土';break;
	        }
			data.push({date:t,yobi:y,yobikana:yy});
	    }
		return data;
	};

	var setEventTitle = function() {
		var src = '<option value="">選択してください</option>';
		var isNoList = false;
		var i = 0;

		function setTitle(i) {
			if(__.queryId != undefined && __.jsonObj[i].id == __.queryId) {
				console.log(__.jsonObj[i]);
				src += '<option value="'+ __.jsonObj[i].title +'" id="'+ __.jsonObj[i].id +'" selected>'+ __.jsonObj[i].title +'</option>';
			}else{
				console.log(__.jsonObj[i]);
				src += '<option value="'+ __.jsonObj[i].title +'" id="'+ __.jsonObj[i].id +'">'+ __.jsonObj[i].title +'</option>';
			}
		}

		while(i < __.jsonLength){
			if(__.pageKind == 'event' && __.jsonObj[i].category[0] == 'イベント') {
				setTitle(i);
				isNoList = true;
			}else if(__.pageKind == 'intern' && __.jsonObj[i].category[0] == 'インターンシップ') {
				setTitle(i);
				isNoList = true;
			}
			i = (i + 1) | 0;
		}

		if(isNoList) {
			console.log('リストあり', isNoList)	
		}else{
			console.log('リストなし', isNoList);
			// location.href = (eventdayinsert.pageKind == 'event' ? '/event/' : '/intern/');
		}
		

		$('#select1').empty().append(src);
		setEventDate(__.queryId);
	};


	var setEventDate = function(id) {
		var src = '<option value="">選択してください</option>';
		function setDays(s, e) {
			var whiledays = getWhileDay(s, e);
			var i = 0;
			if(whiledays.length > 0) {
				while(i < whiledays.length){
					src += '<option value="'+ whiledays[i].date +'">'+ whiledays[i].date + '('+ whiledays[i].yobikana +')</option>';
					i = (i + 1) | 0;
				}
			}
			$('select[name="eventdate"]').empty().append(src);
		}

		if(id == undefined) {
			$('select[name="eventdate"]').empty().append(src);
		}else{
			var i = 0;
			while(i < __.jsonLength){
				if(__.jsonObj[i].id == id) {
					setDays(__.jsonObj[i].event_start, __.jsonObj[i].event_end);
					i = __.jsonLength;
				}
				i = (i + 1) | 0;
			}
		}
	};

	var init = function(res) {
		__.jsonObj = res;
		__.jsonLength = __.jsonObj.length;
		setEventTitle();

		$('#select1').on('change', function() {
			setEventDate($('#select1 option:selected').attr('id'))
		});

	};

	$.getJSON('/event/eventlist.json').then(function(res){
		init(res);
	});

});

eventdayinsert = new _eventdayinsert();






