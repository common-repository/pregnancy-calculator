var d = new Date();
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	document.getElementById("lmpDay").innerHTML = days[d.getDay()] + ',' + ' ';
	document.getElementById("pregDay").innerHTML = days[d.getDay()] + ',' + ' ';
	var month = d.getMonth();
	
	document.getElementById("lmpMonth").selectedIndex = month;
	document.getElementById("pregMonth").selectedIndex = month;
	var date = d.getDate();
	date = date - 1;
	document.getElementById("lmpDate").selectedIndex = date;
	document.getElementById("pregDate").selectedIndex = date;
	var year = d.getFullYear();
	if(year == 2017){
		document.getElementById("lmpYear").selectedIndex = 0;
	} else if(year == 2018){
		document.getElementById("lmpYear").selectedIndex = 1;
		document.getElementById("pregYear").selectedIndex = 0;
	} else if(year == 2019){
		document.getElementById("lmpYear").selectedIndex = 2;
		document.getElementById("pregYear").selectedIndex = 1;
	} else if(year == 2020){
		document.getElementById("lmpYear").selectedIndex = 3;
		document.getElementById("pregYear").selectedIndex = 2;
	} else if(year == 2021){
		document.getElementById("lmpYear").selectedIndex = 4;
		document.getElementById("pregYear").selectedIndex = 3;
	} else if(year == 2022){
		document.getElementById("lmpYear").selectedIndex = 5;
		document.getElementById("pregYear").selectedIndex = 4;
	}


	var month1 =  document.getElementById("lmpMonth").options[document.getElementById("lmpMonth").selectedIndex].text;
		if (month1 == "April" || month1 =="May" || month1 =="June" || month1 =="September" || month1 =="November") {
			document.getElementById("lmp31").style.display = "none";
		} else if(month1 == "February"){
			document.getElementById("lmp29").style.display = "none";
			document.getElementById("lmp30").style.display = "none";
			document.getElementById("lmp31").style.display = "none";
		}

		var month2 =  document.getElementById("coMonth").options[document.getElementById("coMonth").selectedIndex].text;
		if (month2 == "April" || month2 =="May" || month2 =="June" || month2 =="September" || month2 =="November") {
			document.getElementById("co31").style.display = "none";
		} else if(month2 == "February"){
			document.getElementById("co29").style.display = "none";
			document.getElementById("co30").style.display = "none";
			document.getElementById("co31").style.display = "none";
		}

		var month3 =  document.getElementById("eddMonth").options[document.getElementById("eddMonth").selectedIndex].text;
		if (month3 == "April" || month3 =="May" || month3 =="June" || month3 =="September" || month3 =="November") {
			document.getElementById("edd31").style.display = "none";
		} else if(month3 == "February"){
			document.getElementById("edd29").style.display = "none";
			document.getElementById("edd30").style.display = "none";
			document.getElementById("edd31").style.display = "none";
		}

		var month4 =  document.getElementById("pregMonth").options[document.getElementById("pregMonth").selectedIndex].text;
		if (month4 == "April" || month4 =="May" || month4 =="June" || month4 =="September" || month4 =="November") {
			document.getElementById("preg31").style.display = "none";
		} else if(month4 == "February"){
			document.getElementById("preg29").style.display = "none";
			document.getElementById("preg30").style.display = "none";
			document.getElementById("preg31").style.display = "none";
		}
	function lmpChange(){
		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		
		var d = new Date();

		document.getElementById("pregDay").innerHTML = days[d.getDay()] + ',' + ' ';
		var month = d.getMonth();

		document.getElementById("pregMonth").selectedIndex = month;
		var date = d.getDate();
		date = date - 1;

		document.getElementById("pregDate").selectedIndex = date;
		var year = d.getFullYear();
		if(year == 2018){
			document.getElementById("pregYear").selectedIndex = 0;
		} else if(year == 2019){
			document.getElementById("pregYear").selectedIndex = 1;
		} else if(year == 2020){
			document.getElementById("pregYear").selectedIndex = 2;
		} else if(year == 2021){
			document.getElementById("pregYear").selectedIndex = 3;
		} else if(year == 2022){
			document.getElementById("pregYear").selectedIndex = 4;
		}
		

		var lmpsMonth = document.getElementById("lmpMonth").selectedIndex;
		var lmpsDate = document.getElementById("lmpDate").selectedIndex;
		lmpsDate = lmpsDate + 1;
		var lmpsYear = document.getElementById("lmpYear");
		var lmpsYearText= lmpsYear.options[lmpsYear.selectedIndex].text;

		var lmpd = new Date();
		lmpd.setFullYear(lmpsYearText, lmpsMonth, lmpsDate);

		document.getElementById("lmpDay").innerHTML = days[lmpd.getDay()] + ',' + ' ';
		
		var co = new Date(lmpd.getTime()+(14*24*60*60*1000));
		
		document.getElementById("coDay").innerHTML = days[co.getDay()] + ',' + ' ';
		var month = co.getMonth();
		document.getElementById("coMonth").selectedIndex = month;
		var date = co.getDate();
		date = date - 1;
		document.getElementById("coDate").selectedIndex = date;
		var year = co.getFullYear();
		if(year == 2017){
			document.getElementById("coYear").selectedIndex = 0;
		} else if(year == 2018){
			document.getElementById("coYear").selectedIndex = 1;
		} else if(year == 2019){
			document.getElementById("coYear").selectedIndex = 2;
		} else if(year == 2020){
			document.getElementById("coYear").selectedIndex = 3;
		} else if(year == 2021){
			document.getElementById("coYear").selectedIndex = 4;
		} else if(year == 2022){
			document.getElementById("coYear").selectedIndex = 5;
		}
		

		var nt = new Date(lmpd.getTime()+(87*24*60*60*1000));
		
		document.getElementById("ntDay").innerHTML = 'From' + ' ' + days[nt.getDay()] + ',' + ' ';
		document.getElementById("ntMonth").innerHTML = months[nt.getMonth()] + ' ';
		document.getElementById("ntDate").innerHTML = nt.getDate() + ',' + ' ';
		document.getElementById("ntYear").innerHTML = nt.getFullYear() + ' ' + 'To';

		var nt1 = new Date(lmpd.getTime()+(94*24*60*60*1000));
		
		document.getElementById("nt1Day").innerHTML = days[nt1.getDay()] + ',' + ' ';
		document.getElementById("nt1Month").innerHTML = months[nt1.getMonth()] + ' ';
		document.getElementById("nt1Date").innerHTML = nt1.getDate() + ',' + ' ';
		document.getElementById("nt1Year").innerHTML = nt1.getFullYear();

		var mc = new Date(lmpd.getTime()+(133*24*60*60*1000));
		
		document.getElementById("mcDay").innerHTML = days[mc.getDay()] + ',' + ' ';
		document.getElementById("mcMonth").innerHTML = months[mc.getMonth()] + ' ';
		document.getElementById("mcDate").innerHTML = mc.getDate() + ',' + ' ';
		document.getElementById("mcYear").innerHTML = mc.getFullYear();

		var edd = new Date(lmpd.getTime()+(280*24*60*60*1000));
		
		document.getElementById("eddDay").innerHTML = days[edd.getDay()] + ',' + ' ';
		var month = edd.getMonth();
		document.getElementById("eddMonth").selectedIndex = month;
		var date = edd.getDate();
		date = date - 1;
		document.getElementById("eddDate").selectedIndex = date;
		var year = edd.getFullYear();
		if(year == 2017){
			document.getElementById("eddYear").selectedIndex = 0;
		} else if(year == 2018){
			document.getElementById("eddYear").selectedIndex = 1;
		} else if(year == 2019){
			document.getElementById("eddYear").selectedIndex = 2;
		} else if(year == 2020){
			document.getElementById("eddYear").selectedIndex = 3;
		} else if(year == 2021){
			document.getElementById("eddYear").selectedIndex = 4;
		} else if(year == 2022){
			document.getElementById("eddYear").selectedIndex = 5;
		}

		var pregsMonth = document.getElementById("pregMonth").selectedIndex;
		var pregsDate = document.getElementById("pregDate").selectedIndex;
		pregsDate = pregsDate + 1;
		var pregsYear = document.getElementById("pregYear");
		var pregsYearText= pregsYear.options[pregsYear.selectedIndex].text;

		var pregd = new Date();
		pregd.setFullYear(pregsYearText, pregsMonth, pregsDate);

		//document.getElementById("lmpDay").innerHTML = days[lmpd.getDay()] + ',' + ' ';

		var diff =  Math.floor(( pregd - lmpd ) / 86400000);
		var diffWeek = Math.floor(diff / 7);
		var diffDay = Math.floor(diff % 7);
		if (diffWeek > 40) {
			document.getElementById('pregWeek').value = '0';
			document.getElementById('pregwDay').value = '0';
			document.getElementById('foWeek').value = '0';
			document.getElementById('foDay').value = '0';
			document.getElementById('foetalError').innerHTML = 'foetal age is more than 40 weeks';
		} else if (diffWeek < 0) {
			document.getElementById('pregWeek').value = '0';
			document.getElementById('pregwDay').value = '0';
			document.getElementById('foWeek').value = '0';
			document.getElementById('foDay').value = '0';
			document.getElementById('foetalError').innerHTML = 'menstrual date is in future';
		} else {
			document.getElementById('foetalError').innerHTML = ' ';
			document.getElementById('pregWeek').value = diffWeek;
			document.getElementById('pregwDay').value = diffDay;
			document.getElementById('foWeek').value = diffWeek;
			document.getElementById('foDay').value = diffDay;
		}
		

		/*document.getElementById('foWeek1').value = diffWeek;
		document.getElementById('foDay1').value = diffDay;

		var d3 = new Date();
		document.getElementById("foTodayDay").innerHTML = days[d3.getDay()] + ',' + ' ';
		var month3 = d3.getMonth();
		document.getElementById("foTodayMonth").selectedIndex = month3;
		var date3 = d3.getDate();
		date3 = date3 - 1;
		document.getElementById("foTodayDate").selectedIndex = date3;
		var year3 = d3.getFullYear();
		if(year3 == 2017){
			document.getElementById("foTodayYear").selectedIndex = 0;
		} else if(year3 == 2018){
			document.getElementById("foTodayYear").selectedIndex = 1;
		} else if(year3 == 2019){
			document.getElementById("foTodayYear").selectedIndex = 1;
		}*/
		var month1 =  document.getElementById("lmpMonth").options[document.getElementById("lmpMonth").selectedIndex].text;
		if (month1 == "April" || month1 =="May" || month1 =="June" || month1 =="September" || month1 =="November") {
			document.getElementById("lmp31").style.display = "none";
		} else if(month1 == "February"){
			document.getElementById("lmp29").style.display = "none";
			document.getElementById("lmp30").style.display = "none";
			document.getElementById("lmp31").style.display = "none";
		}

		var month2 =  document.getElementById("coMonth").options[document.getElementById("coMonth").selectedIndex].text;
		if (month2 == "April" || month2 =="May" || month2 =="June" || month2 =="September" || month2 =="November") {
			document.getElementById("co31").style.display = "none";
		} else if(month2 == "February"){
			document.getElementById("co29").style.display = "none";
			document.getElementById("co30").style.display = "none";
			document.getElementById("co31").style.display = "none";
		}

		var month3 =  document.getElementById("eddMonth").options[document.getElementById("eddMonth").selectedIndex].text;
		if (month3 == "April" || month3 =="May" || month3 =="June" || month3 =="September" || month3 =="November") {
			document.getElementById("edd31").style.display = "none";
		} else if(month3 == "February"){
			document.getElementById("edd29").style.display = "none";
			document.getElementById("edd30").style.display = "none";
			document.getElementById("edd31").style.display = "none";
		}

		var month4 =  document.getElementById("pregMonth").options[document.getElementById("pregMonth").selectedIndex].text;
		if (month4 == "April" || month4 =="May" || month4 =="June" || month4 =="September" || month4 =="November") {
			document.getElementById("preg31").style.display = "none";
		} else if(month4 == "February"){
			document.getElementById("preg29").style.display = "none";
			document.getElementById("preg30").style.display = "none";
			document.getElementById("preg31").style.display = "none";
		}
	}

	function coChange(){
		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

		var d = new Date();

		document.getElementById("pregDay").innerHTML = days[d.getDay()] + ',' + ' ';
		var month = d.getMonth();

		document.getElementById("pregMonth").selectedIndex = month;
		var date = d.getDate();
		date = date - 1;

		document.getElementById("pregDate").selectedIndex = date;
		var year = d.getFullYear();
		if(year == 2018){
			document.getElementById("pregYear").selectedIndex = 0;
		} else if(year == 2019){
			document.getElementById("pregYear").selectedIndex = 1;
		} else if(year == 2020){
			document.getElementById("pregYear").selectedIndex = 2;
		} else if(year == 2021){
			document.getElementById("pregYear").selectedIndex = 3;
		} else if(year == 2022){
			document.getElementById("pregYear").selectedIndex = 4;
		}

		var cosMonth = document.getElementById("coMonth").selectedIndex;
		var cosDate = document.getElementById("coDate").selectedIndex;
		cosDate = cosDate + 1;
		var cosYear = document.getElementById("coYear");
		var cosYearText= cosYear.options[cosYear.selectedIndex].text;


		var cod = new Date();
		cod.setFullYear(cosYearText, cosMonth, cosDate);

		document.getElementById("coDay").innerHTML = days[cod.getDay()] + ',' + ' ';
		
		var lmp = new Date(cod.getTime()-(14*24*60*60*1000));
		
		document.getElementById("lmpDay").innerHTML = days[lmp.getDay()] + ',' + ' ';
		var month = lmp.getMonth();
		document.getElementById("lmpMonth").selectedIndex = month;
		var date = lmp.getDate();
		date = date - 1;
		document.getElementById("lmpDate").selectedIndex = date;
		var year = lmp.getFullYear();
		if(year == 2017){
			document.getElementById("lmpYear").selectedIndex = 0;
		} else if(year == 2018){
			document.getElementById("lmpYear").selectedIndex = 1;
		} else if(year == 2019){
			document.getElementById("lmpYear").selectedIndex = 2;
		} else if(year == 2020){
			document.getElementById("lmpYear").selectedIndex = 3;
		} else if(year == 2021){
			document.getElementById("lmpYear").selectedIndex = 4;
		} else if(year == 2022){
			document.getElementById("lmpYear").selectedIndex = 5;
		}
		

		var nt = new Date(lmp.getTime()+(87*24*60*60*1000));
		
		document.getElementById("ntDay").innerHTML = 'From' + ' ' + days[nt.getDay()] + ',' + ' ';
		document.getElementById("ntMonth").innerHTML = months[nt.getMonth()] + ' ';
		document.getElementById("ntDate").innerHTML = nt.getDate() + ',' + ' ';
		document.getElementById("ntYear").innerHTML = nt.getFullYear() + ' ' + 'To';

		var nt1 = new Date(lmp.getTime()+(94*24*60*60*1000));
		
		document.getElementById("nt1Day").innerHTML = days[nt1.getDay()] + ',' + ' ';
		document.getElementById("nt1Month").innerHTML = months[nt1.getMonth()] + ' ';
		document.getElementById("nt1Date").innerHTML = nt1.getDate() + ',' + ' ';
		document.getElementById("nt1Year").innerHTML = nt1.getFullYear();

		var mc = new Date(lmp.getTime()+(133*24*60*60*1000));
		
		document.getElementById("mcDay").innerHTML = days[mc.getDay()] + ',' + ' ';
		document.getElementById("mcMonth").innerHTML = months[mc.getMonth()] + ' ';
		document.getElementById("mcDate").innerHTML = mc.getDate() + ',' + ' ';
		document.getElementById("mcYear").innerHTML = mc.getFullYear();

		var edd = new Date(lmp.getTime()+(280*24*60*60*1000));
		
		document.getElementById("eddDay").innerHTML = days[edd.getDay()] + ',' + ' ';
		var month = edd.getMonth();
		document.getElementById("eddMonth").selectedIndex = month;
		var date = edd.getDate();
		date = date - 1;
		document.getElementById("eddDate").selectedIndex = date;
		var year = edd.getFullYear();
		if(year == 2017){
			document.getElementById("eddYear").selectedIndex = 0;
		} else if(year == 2018){
			document.getElementById("eddYear").selectedIndex = 1;
		} else if(year == 2019){
			document.getElementById("eddYear").selectedIndex = 2;
		} else if(year == 2020){
			document.getElementById("eddYear").selectedIndex = 3;
		} else if(year == 2021){
			document.getElementById("eddYear").selectedIndex = 4;
		} else if(year == 2022){
			document.getElementById("eddYear").selectedIndex = 5;
		}

		var pregsMonth = document.getElementById("pregMonth").selectedIndex;
		var pregsDate = document.getElementById("pregDate").selectedIndex;
		pregsDate = pregsDate + 1;
		var pregsYear = document.getElementById("pregYear");
		var pregsYearText= pregsYear.options[pregsYear.selectedIndex].text;

		var pregd = new Date();
		pregd.setFullYear(pregsYearText, pregsMonth, pregsDate);

		//document.getElementById("lmpDay").innerHTML = days[lmpd.getDay()] + ',' + ' ';

		var diff =  Math.floor(( pregd - lmp ) / 86400000);
		var diffWeek = Math.floor(diff / 7);
		var diffDay = Math.floor(diff % 7);
		if (diffWeek > 40) {
			document.getElementById('pregWeek').value = '0';
			document.getElementById('pregwDay').value = '0';
			document.getElementById('foWeek').value = '0';
			document.getElementById('foDay').value = '0';
			document.getElementById('foetalError').innerHTML = 'foetal age is more than 40 weeks';
		} else if (diffWeek < 0) {
			document.getElementById('pregWeek').value = '0';
			document.getElementById('pregwDay').value = '0';
			document.getElementById('foWeek').value = '0';
			document.getElementById('foDay').value = '0';
			document.getElementById('foetalError').innerHTML = 'menstrual date is in future';
		} else {
			document.getElementById('foetalError').innerHTML = ' ';
			document.getElementById('pregWeek').value = diffWeek;
			document.getElementById('pregwDay').value = diffDay;
			document.getElementById('foWeek').value = diffWeek;
			document.getElementById('foDay').value = diffDay;
		}

		/*document.getElementById('foWeek1').value = diffWeek;
		document.getElementById('foDay1').value = diffDay;

		var d3 = new Date();
		document.getElementById("foTodayDay").innerHTML = days[d3.getDay()] + ',' + ' ';
		var month3 = d3.getMonth();
		document.getElementById("foTodayMonth").selectedIndex = month3;
		var date3 = d3.getDate();
		date3 = date3 - 1;
		document.getElementById("foTodayDate").selectedIndex = date3;
		var year3 = d3.getFullYear();
		if(year3 == 2017){
			document.getElementById("foTodayYear").selectedIndex = 0;
		} else if(year3 == 2018){
			document.getElementById("foTodayYear").selectedIndex = 1;
		} else if(year3 == 2019){
			document.getElementById("foTodayYear").selectedIndex = 1;
		}*/
		var month1 =  document.getElementById("lmpMonth").options[document.getElementById("lmpMonth").selectedIndex].text;
		if (month1 == "April" || month1 =="May" || month1 =="June" || month1 =="September" || month1 =="November") {
			document.getElementById("lmp31").style.display = "none";
		} else if(month1 == "February"){
			document.getElementById("lmp29").style.display = "none";
			document.getElementById("lmp30").style.display = "none";
			document.getElementById("lmp31").style.display = "none";
		}

		var month2 =  document.getElementById("coMonth").options[document.getElementById("coMonth").selectedIndex].text;
		if (month2 == "April" || month2 =="May" || month2 =="June" || month2 =="September" || month2 =="November") {
			document.getElementById("co31").style.display = "none";
		} else if(month2 == "February"){
			document.getElementById("co29").style.display = "none";
			document.getElementById("co30").style.display = "none";
			document.getElementById("co31").style.display = "none";
		}

		var month3 =  document.getElementById("eddMonth").options[document.getElementById("eddMonth").selectedIndex].text;
		if (month3 == "April" || month3 =="May" || month3 =="June" || month3 =="September" || month3 =="November") {
			document.getElementById("edd31").style.display = "none";
		} else if(month3 == "February"){
			document.getElementById("edd29").style.display = "none";
			document.getElementById("edd30").style.display = "none";
			document.getElementById("edd31").style.display = "none";
		}

		var month4 =  document.getElementById("pregMonth").options[document.getElementById("pregMonth").selectedIndex].text;
		if (month4 == "April" || month4 =="May" || month4 =="June" || month4 =="September" || month4 =="November") {
			document.getElementById("preg31").style.display = "none";
		} else if(month4 == "February"){
			document.getElementById("preg29").style.display = "none";
			document.getElementById("preg30").style.display = "none";
			document.getElementById("preg31").style.display = "none";
		}
	}

	function foChange(){
		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

		var d = new Date();

		document.getElementById("pregDay").innerHTML = days[d.getDay()] + ',' + ' ';
		var month = d.getMonth();

		document.getElementById("pregMonth").selectedIndex = month;
		var date = d.getDate();
		date = date - 1;

		document.getElementById("pregDate").selectedIndex = date;
		var year = d.getFullYear();
		if(year == 2018){
			document.getElementById("pregYear").selectedIndex = 0;
		} else if(year == 2019){
			document.getElementById("pregYear").selectedIndex = 1;
		} else if(year == 2020){
			document.getElementById("pregYear").selectedIndex = 2;
		} else if(year == 2021){
			document.getElementById("pregYear").selectedIndex = 3;
		} else if(year == 2022){
			document.getElementById("pregYear").selectedIndex = 4;
		}

		var fosWeek = document.getElementById("foWeek");
		var fosWeekText= fosWeek.options[fosWeek.selectedIndex].text;
		fosWeekText = fosWeekText * 7;
		var fosDay = document.getElementById("foDay");
		var fosDayText= fosDay.options[fosDay.selectedIndex].text;
		fosWeekText = fosWeekText * 1;


		var totalFos = Number(fosWeekText) + Number(fosDayText);
		
		var lmp = new Date();
		lmp.setDate(lmp.getDate() - totalFos);
		
		document.getElementById("lmpDay").innerHTML = days[lmp.getDay()] + ',' + ' ';
		var month = lmp.getMonth();
		document.getElementById("lmpMonth").selectedIndex = month;
		var date = lmp.getDate();
		date = date - 1;
		document.getElementById("lmpDate").selectedIndex = date;
		var year = lmp.getFullYear();
		if(year == 2017){
			document.getElementById("lmpYear").selectedIndex = 0;
		} else if(year == 2018){
			document.getElementById("lmpYear").selectedIndex = 1;
		} else if(year == 2019){
			document.getElementById("lmpYear").selectedIndex = 2;
		} else if(year == 2020){
			document.getElementById("lmpYear").selectedIndex = 3;
		} else if(year == 2021){
			document.getElementById("lmpYear").selectedIndex = 4;
		} else if(year == 2022){
			document.getElementById("lmpYear").selectedIndex = 5;
		}

		var co = new Date(lmp.getTime()+(14*24*60*60*1000));
		
		document.getElementById("coDay").innerHTML = days[co.getDay()] + ',' + ' ';
		var month = co.getMonth();
		document.getElementById("coMonth").selectedIndex = month;
		var date = co.getDate();
		date = date - 1;
		document.getElementById("coDate").selectedIndex = date;
		var year = co.getFullYear();
		if(year == 2017){
			document.getElementById("coYear").selectedIndex = 0;
		} else if(year == 2018){
			document.getElementById("coYear").selectedIndex = 1;
		} else if(year == 2019){
			document.getElementById("coYear").selectedIndex = 2;
		} else if(year == 2020){
			document.getElementById("coYear").selectedIndex = 3;
		} else if(year == 2021){
			document.getElementById("coYear").selectedIndex = 4;
		} else if(year == 2022){
			document.getElementById("coYear").selectedIndex = 5;
		}
		

		var nt = new Date(lmp.getTime()+(87*24*60*60*1000));
		
		document.getElementById("ntDay").innerHTML = 'From' + ' ' + days[nt.getDay()] + ',' + ' ';
		document.getElementById("ntMonth").innerHTML = months[nt.getMonth()] + ' ';
		document.getElementById("ntDate").innerHTML = nt.getDate() + ',' + ' ';
		document.getElementById("ntYear").innerHTML = nt.getFullYear() + ' ' + 'To';

		var nt1 = new Date(lmp.getTime()+(94*24*60*60*1000));
		
		document.getElementById("nt1Day").innerHTML = days[nt1.getDay()] + ',' + ' ';
		document.getElementById("nt1Month").innerHTML = months[nt1.getMonth()] + ' ';
		document.getElementById("nt1Date").innerHTML = nt1.getDate() + ',' + ' ';
		document.getElementById("nt1Year").innerHTML = nt1.getFullYear();

		var mc = new Date(lmp.getTime()+(133*24*60*60*1000));
		
		document.getElementById("mcDay").innerHTML = days[mc.getDay()] + ',' + ' ';
		document.getElementById("mcMonth").innerHTML = months[mc.getMonth()] + ' ';
		document.getElementById("mcDate").innerHTML = mc.getDate() + ',' + ' ';
		document.getElementById("mcYear").innerHTML = mc.getFullYear();

		var edd = new Date(lmp.getTime()+(280*24*60*60*1000));
		
		document.getElementById("eddDay").innerHTML = days[edd.getDay()] + ',' + ' ';
		var month = edd.getMonth();
		document.getElementById("eddMonth").selectedIndex = month;
		var date = edd.getDate();
		date = date - 1;
		document.getElementById("eddDate").selectedIndex = date;
		var year = edd.getFullYear();
		if(year == 2017){
			document.getElementById("eddYear").selectedIndex = 0;
		} else if(year == 2018){
			document.getElementById("eddYear").selectedIndex = 1;
		} else if(year == 2019){
			document.getElementById("eddYear").selectedIndex = 2;
		} else if(year == 2020){
			document.getElementById("eddYear").selectedIndex = 3;
		} else if(year == 2021){
			document.getElementById("eddYear").selectedIndex = 4;
		} else if(year == 2022){
			document.getElementById("eddYear").selectedIndex = 5;
		}

		var pregsMonth = document.getElementById("pregMonth").selectedIndex;
		var pregsDate = document.getElementById("pregDate").selectedIndex;
		pregsDate = pregsDate + 1;
		var pregsYear = document.getElementById("pregYear");
		var pregsYearText= pregsYear.options[pregsYear.selectedIndex].text;

		var pregd = new Date();
		pregd.setFullYear(pregsYearText, pregsMonth, pregsDate);

		//document.getElementById("lmpDay").innerHTML = days[lmpd.getDay()] + ',' + ' ';

		var diff =  Math.floor(( pregd - lmp ) / 86400000);
		var diffWeek = Math.floor(diff / 7);
		var diffDay = Math.floor(diff % 7);
		document.getElementById('pregWeek').value = diffWeek;
		document.getElementById('pregwDay').value = diffDay;
		

		/*document.getElementById('foWeek1').value = diffWeek;
		document.getElementById('foDay1').value = diffDay;

		var d3 = new Date();
		document.getElementById("foTodayDay").innerHTML = days[d3.getDay()] + ',' + ' ';
		var month3 = d3.getMonth();
		document.getElementById("foTodayMonth").selectedIndex = month3;
		var date3 = d3.getDate();
		date3 = date3 - 1;
		document.getElementById("foTodayDate").selectedIndex = date3;
		var year3 = d3.getFullYear();
		if(year3 == 2017){
			document.getElementById("foTodayYear").selectedIndex = 0;
		} else if(year3 == 2018){
			document.getElementById("foTodayYear").selectedIndex = 1;
		} else if(year3 == 2019){
			document.getElementById("foTodayYear").selectedIndex = 1;
		}*/
		var month1 =  document.getElementById("lmpMonth").options[document.getElementById("lmpMonth").selectedIndex].text;
		if (month1 == "April" || month1 =="May" || month1 =="June" || month1 =="September" || month1 =="November") {
			document.getElementById("lmp31").style.display = "none";
		} else if(month1 == "February"){
			document.getElementById("lmp29").style.display = "none";
			document.getElementById("lmp30").style.display = "none";
			document.getElementById("lmp31").style.display = "none";
		}

		var month2 =  document.getElementById("coMonth").options[document.getElementById("coMonth").selectedIndex].text;
		if (month2 == "April" || month2 =="May" || month2 =="June" || month2 =="September" || month2 =="November") {
			document.getElementById("co31").style.display = "none";
		} else if(month2 == "February"){
			document.getElementById("co29").style.display = "none";
			document.getElementById("co30").style.display = "none";
			document.getElementById("co31").style.display = "none";
		}

		var month3 =  document.getElementById("eddMonth").options[document.getElementById("eddMonth").selectedIndex].text;
		if (month3 == "April" || month3 =="May" || month3 =="June" || month3 =="September" || month3 =="November") {
			document.getElementById("edd31").style.display = "none";
		} else if(month3 == "February"){
			document.getElementById("edd29").style.display = "none";
			document.getElementById("edd30").style.display = "none";
			document.getElementById("edd31").style.display = "none";
		}

		var month4 =  document.getElementById("pregMonth").options[document.getElementById("pregMonth").selectedIndex].text;
		if (month4 == "April" || month4 =="May" || month4 =="June" || month4 =="September" || month4 =="November") {
			document.getElementById("preg31").style.display = "none";
		} else if(month4 == "February"){
			document.getElementById("preg29").style.display = "none";
			document.getElementById("preg30").style.display = "none";
			document.getElementById("preg31").style.display = "none";
		}
	}

	function eddChange(){
		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

		var d = new Date();

		document.getElementById("pregDay").innerHTML = days[d.getDay()] + ',' + ' ';
		var month = d.getMonth();

		document.getElementById("pregMonth").selectedIndex = month;
		var date = d.getDate();
		date = date - 1;

		document.getElementById("pregDate").selectedIndex = date;
		var year = d.getFullYear();
		if(year == 2018){
			document.getElementById("pregYear").selectedIndex = 0;
		} else if(year == 2019){
			document.getElementById("pregYear").selectedIndex = 1;
		} else if(year == 2020){
			document.getElementById("pregYear").selectedIndex = 2;
		} else if(year == 2021){
			document.getElementById("pregYear").selectedIndex = 3;
		} else if(year == 2022){
			document.getElementById("pregYear").selectedIndex = 4;
		}

		var eddsMonth = document.getElementById("eddMonth").selectedIndex;
		var eddsDate = document.getElementById("eddDate").selectedIndex;
		eddsDate = eddsDate + 1;
		var eddsYear = document.getElementById("eddYear");
		var eddsYearText= eddsYear.options[eddsYear.selectedIndex].text;

		var eddd = new Date();
		eddd.setFullYear(eddsYearText, eddsMonth, eddsDate);

		document.getElementById("eddDay").innerHTML = days[eddd.getDay()] + ',' + ' ';
		
		var lmp = new Date();
		lmp.setFullYear(eddsYearText, eddsMonth, eddsDate);
		lmp.setDate(lmp.getDate() - 280);
		
		document.getElementById("lmpDay").innerHTML = days[lmp.getDay()] + ',' + ' ';
		var month = lmp.getMonth();
		document.getElementById("lmpMonth").selectedIndex = month;
		var date = lmp.getDate();
		date = date - 1;
		document.getElementById("lmpDate").selectedIndex = date;
		var year = lmp.getFullYear();
		if(year == 2017){
			document.getElementById("lmpYear").selectedIndex = 0;
		} else if(year == 2018){
			document.getElementById("lmpYear").selectedIndex = 1;
		} else if(year == 2019){
			document.getElementById("lmpYear").selectedIndex = 2;
		} else if(year == 2020){
			document.getElementById("lmpYear").selectedIndex = 3;
		} else if(year == 2021){
			document.getElementById("lmpYear").selectedIndex = 4;
		} else if(year == 2022){
			document.getElementById("lmpYear").selectedIndex = 5;
		}

		var co = new Date(lmp.getTime()+(14*24*60*60*1000));
		
		document.getElementById("coDay").innerHTML = days[co.getDay()] + ',' + ' ';
		var month = co.getMonth();
		document.getElementById("coMonth").selectedIndex = month;
		var date = co.getDate();
		date = date - 1;
		document.getElementById("coDate").selectedIndex = date;
		var year = co.getFullYear();
		if(year == 2017){
			document.getElementById("coYear").selectedIndex = 0;
		} else if(year == 2018){
			document.getElementById("coYear").selectedIndex = 1;
		} else if(year == 2019){
			document.getElementById("coYear").selectedIndex = 2;
		} else if(year == 2020){
			document.getElementById("coYear").selectedIndex = 3;
		} else if(year == 2021){
			document.getElementById("coYear").selectedIndex = 4;
		} else if(year == 2022){
			document.getElementById("coYear").selectedIndex = 5;
		}

		var nt = new Date(lmp.getTime()+(87*24*60*60*1000));
		
		document.getElementById("ntDay").innerHTML = 'From' + ' ' + days[nt.getDay()] + ',' + ' ';
		document.getElementById("ntMonth").innerHTML = months[nt.getMonth()] + ' ';
		document.getElementById("ntDate").innerHTML = nt.getDate() + ',' + ' ';
		document.getElementById("ntYear").innerHTML = nt.getFullYear() + ' ' + 'To';

		var nt1 = new Date(lmp.getTime()+(94*24*60*60*1000));
		
		document.getElementById("nt1Day").innerHTML = days[nt1.getDay()] + ',' + ' ';
		document.getElementById("nt1Month").innerHTML = months[nt1.getMonth()] + ' ';
		document.getElementById("nt1Date").innerHTML = nt1.getDate() + ',' + ' ';
		document.getElementById("nt1Year").innerHTML = nt1.getFullYear();

		var mc = new Date(lmp.getTime()+(133*24*60*60*1000));
		
		document.getElementById("mcDay").innerHTML = days[mc.getDay()] + ',' + ' ';
		document.getElementById("mcMonth").innerHTML = months[mc.getMonth()] + ' ';
		document.getElementById("mcDate").innerHTML = mc.getDate() + ',' + ' ';
		document.getElementById("mcYear").innerHTML = mc.getFullYear();


		var pregsMonth = document.getElementById("pregMonth").selectedIndex;
		var pregsDate = document.getElementById("pregDate").selectedIndex;
		pregsDate = pregsDate + 1;
		var pregsYear = document.getElementById("pregYear");
		var pregsYearText= pregsYear.options[pregsYear.selectedIndex].text;

		var pregd = new Date();
		pregd.setFullYear(pregsYearText, pregsMonth, pregsDate);

		//document.getElementById("lmpDay").innerHTML = days[lmpd.getDay()] + ',' + ' ';

		var diff =  Math.floor(( pregd - lmp ) / 86400000);
		var diffWeek = Math.floor(diff / 7);
		var diffDay = Math.floor(diff % 7);
		if (diffWeek > 40) {
			document.getElementById('pregWeek').value = '0';
			document.getElementById('pregwDay').value = '0';
			document.getElementById('foWeek').value = '0';
			document.getElementById('foDay').value = '0';
			document.getElementById('foetalError').innerHTML = 'foetal age is more than 40 weeks';
		} else if (diffWeek < 0) {
			document.getElementById('pregWeek').value = '0';
			document.getElementById('pregwDay').value = '0';
			document.getElementById('foWeek').value = '0';
			document.getElementById('foDay').value = '0';
			document.getElementById('foetalError').innerHTML = 'menstrual date is in future';
		} else {
			document.getElementById('foetalError').innerHTML = ' ';
			document.getElementById('pregWeek').value = diffWeek;
			document.getElementById('pregwDay').value = diffDay;
			document.getElementById('foWeek').value = diffWeek;
			document.getElementById('foDay').value = diffDay;
		}
		/*document.getElementById('foWeek1').value = diffWeek;
		document.getElementById('foDay1').value = diffDay;

		var d3 = new Date();
		document.getElementById("foTodayDay").innerHTML = days[d3.getDay()] + ',' + ' ';
		var month3 = d3.getMonth();
		document.getElementById("foTodayMonth").selectedIndex = month3;
		var date3 = d3.getDate();
		date3 = date3 - 1;
		document.getElementById("foTodayDate").selectedIndex = date3;
		var year3 = d3.getFullYear();
		if(year3 == 2017){
			document.getElementById("foTodayYear").selectedIndex = 0;
		} else if(year3 == 2018){
			document.getElementById("foTodayYear").selectedIndex = 1;
		} else if(year3 == 2019){
			document.getElementById("foTodayYear").selectedIndex = 1;
		}*/
		var month1 =  document.getElementById("lmpMonth").options[document.getElementById("lmpMonth").selectedIndex].text;
		if (month1 == "April" || month1 =="May" || month1 =="June" || month1 =="September" || month1 =="November") {
			document.getElementById("lmp31").style.display = "none";
		} else if(month1 == "February"){
			document.getElementById("lmp29").style.display = "none";
			document.getElementById("lmp30").style.display = "none";
			document.getElementById("lmp31").style.display = "none";
		}

		var month2 =  document.getElementById("coMonth").options[document.getElementById("coMonth").selectedIndex].text;
		if (month2 == "April" || month2 =="May" || month2 =="June" || month2 =="September" || month2 =="November") {
			document.getElementById("co31").style.display = "none";
		} else if(month2 == "February"){
			document.getElementById("co29").style.display = "none";
			document.getElementById("co30").style.display = "none";
			document.getElementById("co31").style.display = "none";
		}

		var month3 =  document.getElementById("eddMonth").options[document.getElementById("eddMonth").selectedIndex].text;
		if (month3 == "April" || month3 =="May" || month3 =="June" || month3 =="September" || month3 =="November") {
			document.getElementById("edd31").style.display = "none";
		} else if(month3 == "February"){
			document.getElementById("edd29").style.display = "none";
			document.getElementById("edd30").style.display = "none";
			document.getElementById("edd31").style.display = "none";
		}

		var month4 =  document.getElementById("pregMonth").options[document.getElementById("pregMonth").selectedIndex].text;
		if (month4 == "April" || month4 =="May" || month4 =="June" || month4 =="September" || month4 =="November") {
			document.getElementById("preg31").style.display = "none";
		} else if(month4 == "February"){
			document.getElementById("preg29").style.display = "none";
			document.getElementById("preg30").style.display = "none";
			document.getElementById("preg31").style.display = "none";
		}
		
	}
	function pregChange(){
		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];



		var lmpsMonth = document.getElementById("lmpMonth").selectedIndex;
		var lmpsDate = document.getElementById("lmpDate").selectedIndex;
		lmpsDate = lmpsDate + 1;
		var lmpsYear = document.getElementById("lmpYear");
		var lmpsYearText= lmpsYear.options[lmpsYear.selectedIndex].text;


		var lmpd = new Date();
		lmpd.setFullYear(lmpsYearText, lmpsMonth, lmpsDate);

		document.getElementById("lmpDay").innerHTML = days[lmpd.getDay()] + ',' + ' ';
		
		var co = new Date(lmpd.getTime()+(14*24*60*60*1000));
		
		document.getElementById("coDay").innerHTML = days[co.getDay()] + ',' + ' ';
		var month = co.getMonth();
		document.getElementById("coMonth").selectedIndex = month;
		var date = co.getDate();
		document.getElementById("coDate").selectedIndex = date;
		var year = co.getFullYear();
		if(year == 2018){
			document.getElementById("pregYear").selectedIndex = 0;
		} else if(year == 2019){
			document.getElementById("pregYear").selectedIndex = 1;
		} else if(year == 2020){
			document.getElementById("pregYear").selectedIndex = 2;
		} else if(year == 2021){
			document.getElementById("pregYear").selectedIndex = 3;
		} else if(year == 2022){
			document.getElementById("pregYear").selectedIndex = 4;
		}
		

		var nt = new Date(lmpd.getTime()+(87*24*60*60*1000));
		
		document.getElementById("ntDay").innerHTML = 'From' + ' ' + days[nt.getDay()] + ',' + ' ';
		document.getElementById("ntMonth").innerHTML = months[nt.getMonth()] + ' ';
		document.getElementById("ntDate").innerHTML = nt.getDate() + ',' + ' ';
		document.getElementById("ntYear").innerHTML = nt.getFullYear() + ' ' + 'To';

		var nt1 = new Date(lmpd.getTime()+(94*24*60*60*1000));
		
		document.getElementById("nt1Day").innerHTML = days[nt1.getDay()] + ',' + ' ';
		document.getElementById("nt1Month").innerHTML = months[nt1.getMonth()] + ' ';
		document.getElementById("nt1Date").innerHTML = nt1.getDate() + ',' + ' ';
		document.getElementById("nt1Year").innerHTML = nt1.getFullYear();

		var mc = new Date(lmpd.getTime()+(133*24*60*60*1000));
		
		document.getElementById("mcDay").innerHTML = days[mc.getDay()] + ',' + ' ';
		document.getElementById("mcMonth").innerHTML = months[mc.getMonth()] + ' ';
		document.getElementById("mcDate").innerHTML = mc.getDate() + ',' + ' ';
		document.getElementById("mcYear").innerHTML = mc.getFullYear();

		var edd = new Date(lmpd.getTime()+(280*24*60*60*1000));
		
		document.getElementById("eddDay").innerHTML = days[edd.getDay()] + ',' + ' ';
		var month = edd.getMonth();
		document.getElementById("eddMonth").selectedIndex = month;
		var date = edd.getDate();
		date = date - 1;
		document.getElementById("eddDate").selectedIndex = date;
		var year = edd.getFullYear();
		if(year == 2017){
			document.getElementById("eddYear").selectedIndex = 0;
		} else if(year == 2018){
			document.getElementById("eddYear").selectedIndex = 1;
		} else if(year == 2019){
			document.getElementById("eddYear").selectedIndex = 2;
		} else if(year == 2020){
			document.getElementById("eddYear").selectedIndex = 3;
		} else if(year == 2021){
			document.getElementById("eddYear").selectedIndex = 4;
		} else if(year == 2022){
			document.getElementById("eddYear").selectedIndex = 5;
		}

		var pregsMonth = document.getElementById("pregMonth").selectedIndex;
		var pregsDate = document.getElementById("pregDate").selectedIndex;
		pregsDate = pregsDate + 1;
		var pregsYear = document.getElementById("pregYear");
		var pregsYearText= pregsYear.options[pregsYear.selectedIndex].text;

		var pregd = new Date();
		pregd.setFullYear(pregsYearText, pregsMonth, pregsDate);

		//document.getElementById("lmpDay").innerHTML = days[lmpd.getDay()] + ',' + ' ';

		var diff =  Math.floor(( pregd - lmpd ) / 86400000);
		var diffWeek = Math.floor(diff / 7);
		var diffDay = Math.floor(diff % 7);
		if (diffWeek > 40) {
			document.getElementById('pregWeek').value = '0';
			document.getElementById('pregwDay').value = '0';
			document.getElementById('foWeek').value = '0';
			document.getElementById('foDay').value = '0';
			document.getElementById('foetalError').innerHTML = 'foetal age is more than 40 weeks';
			document.getElementById('pregError').innerHTML = 'Pregnency week is more than 40 weeks, please change the menstrual date';
		} else if (diffWeek < 0) {
			document.getElementById('pregWeek').value = '0';
			document.getElementById('pregwDay').value = '0';
			document.getElementById('foWeek').value = '0';
			document.getElementById('foDay').value = '0';
			document.getElementById('foetalError').innerHTML = 'menstrual date is in future';
			document.getElementById('pregError').innerHTML = 'Menstrual date is in future, please change the menstrual date ';
		} else {
			document.getElementById('pregError').innerHTML = ' ';
			document.getElementById('foetalError').innerHTML = ' ';
			document.getElementById('pregWeek').value = diffWeek;
			document.getElementById('pregwDay').value = diffDay;
		}
		/*document.getElementById('foWeek1').value = diffWeek;
		document.getElementById('foDay1').value = diffDay;

		var d3 = new Date();
		document.getElementById("foTodayDay").innerHTML = days[d3.getDay()] + ',' + ' ';
		var month3 = d3.getMonth();
		document.getElementById("foTodayMonth").selectedIndex = month3;
		var date3 = d3.getDate();
		date3 = date3 - 1;
		document.getElementById("foTodayDate").selectedIndex = date3;
		var year3 = d3.getFullYear();
		if(year3 == 2017){
			document.getElementById("foTodayYear").selectedIndex = 0;
		} else if(year3 == 2018){
			document.getElementById("foTodayYear").selectedIndex = 1;
		} else if(year3 == 2019){
			document.getElementById("foTodayYear").selectedIndex = 1;
		}*/
		var month1 =  document.getElementById("lmpMonth").options[document.getElementById("lmpMonth").selectedIndex].text;
		if (month1 == "April" || month1 =="May" || month1 =="June" || month1 =="September" || month1 =="November") {
			document.getElementById("lmp31").style.display = "none";
		} else if(month1 == "February"){
			document.getElementById("lmp29").style.display = "none";
			document.getElementById("lmp30").style.display = "none";
			document.getElementById("lmp31").style.display = "none";
		}

		var month2 =  document.getElementById("coMonth").options[document.getElementById("coMonth").selectedIndex].text;
		if (month2 == "April" || month2 =="May" || month2 =="June" || month2 =="September" || month2 =="November") {
			document.getElementById("co31").style.display = "none";
		} else if(month2 == "February"){
			document.getElementById("co29").style.display = "none";
			document.getElementById("co30").style.display = "none";
			document.getElementById("co31").style.display = "none";
		}

		var month3 =  document.getElementById("eddMonth").options[document.getElementById("eddMonth").selectedIndex].text;
		if (month3 == "April" || month3 =="May" || month3 =="June" || month3 =="September" || month3 =="November") {
			document.getElementById("edd31").style.display = "none";
		} else if(month3 == "February"){
			document.getElementById("edd29").style.display = "none";
			document.getElementById("edd30").style.display = "none";
			document.getElementById("edd31").style.display = "none";
		}

		var month4 =  document.getElementById("pregMonth").options[document.getElementById("pregMonth").selectedIndex].text;
		if (month4 == "April" || month4 =="May" || month4 =="June" || month4 =="September" || month4 =="November") {
			document.getElementById("preg31").style.display = "none";
		} else if(month4 == "February"){
			document.getElementById("preg29").style.display = "none";
			document.getElementById("preg30").style.display = "none";
			document.getElementById("preg31").style.display = "none";
		}
	}
	function foTodayChange(){
		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

		var d = new Date();

		document.getElementById("pregDay").innerHTML = days[d.getDay()] + ',' + ' ';
		var month = d.getMonth();

		document.getElementById("pregMonth").selectedIndex = month;
		var date = d.getDate();
		date = date - 1;

		document.getElementById("pregDate").selectedIndex = date;
		var year = d.getFullYear();
		if(year == 2018){
			document.getElementById("pregYear").selectedIndex = 0;
		} else if(year == 2019){
			document.getElementById("pregYear").selectedIndex = 1;
		} else if(year == 2020){
			document.getElementById("pregYear").selectedIndex = 2;
		} else if(year == 2021){
			document.getElementById("pregYear").selectedIndex = 3;
		} else if(year == 2022){
			document.getElementById("pregYear").selectedIndex = 4;
		}

		var foTodaysMonth = document.getElementById("foTodayMonth").selectedIndex;
		var foTodaysDate = document.getElementById("foTodayDate").selectedIndex;
		foTodaysDate = foTodaysDate + 1;
		var foTodaysYear = document.getElementById("foTodayYear");
		var foTodaysYearText= foTodaysYear.options[foTodaysYear.selectedIndex].text;


		var fosWeek1 = document.getElementById("foWeek1");
		var fosWeekText1= fosWeek1.options[fosWeek1.selectedIndex].text;
		fosWeekText1 = fosWeekText1 * 7;
		var fosDay1 = document.getElementById("foDay1");
		var fosDayText1= fosDay1.options[fosDay1.selectedIndex].text;
		fosWeekText1 = fosWeekText1 * 1;


		var totalFos = Number(fosWeekText1) + Number(fosDayText1);

		var lmpd = new Date();
		lmpd.setFullYear(foTodaysYearText, foTodaysMonth, foTodaysDate);

		document.getElementById("foTodayDay").innerHTML = days[lmpd.getDay()] + ',' + ' ';

		var lmp = new Date(lmpd.getTime()-(totalFos*24*60*60*1000));
		//lmp.setDate(lmpd.getDate() - totalFos);

		document.getElementById("lmpDay").innerHTML = days[lmp.getDay()] + ',' + ' ';
		var month = lmp.getMonth();
		document.getElementById("lmpMonth").selectedIndex = month;
		var date = lmp.getDate();
		date = date - 1;
		document.getElementById("lmpDate").selectedIndex = date;
		var year = lmp.getFullYear();
		if(year == 2017){
			document.getElementById("lmpYear").selectedIndex = 0;
		} else if(year == 2018){
			document.getElementById("lmpYear").selectedIndex = 1;
		} else if(year == 2019){
			document.getElementById("lmpYear").selectedIndex = 2;
		} else if(year == 2020){
			document.getElementById("lmpYear").selectedIndex = 3;
		} else if(year == 2021){
			document.getElementById("lmpYear").selectedIndex = 4;
		} else if(year == 2022){
			document.getElementById("lmpYear").selectedIndex = 5;
		}
		
		var co = new Date(lmp.getTime()+(14*24*60*60*1000));
		
		document.getElementById("coDay").innerHTML = days[co.getDay()] + ',' + ' ';
		var month = co.getMonth();
		document.getElementById("coMonth").selectedIndex = month;
		var date = co.getDate();
		date = date - 1;
		document.getElementById("coDate").selectedIndex = date;
		var year = co.getFullYear();
		if(year == 2017){
			document.getElementById("coYear").selectedIndex = 0;
		} else if(year == 2018){
			document.getElementById("coYear").selectedIndex = 1;
		} else if(year == 2019){
			document.getElementById("coYear").selectedIndex = 2;
		} else if(year == 2020){
			document.getElementById("coYear").selectedIndex = 3;
		} else if(year == 2021){
			document.getElementById("coYear").selectedIndex = 4;
		} else if(year == 2022){
			document.getElementById("coYear").selectedIndex = 5;
		}
		

		var nt = new Date(lmp.getTime()+(87*24*60*60*1000));
		
		document.getElementById("ntDay").innerHTML = 'From' + ' ' + days[nt.getDay()] + ',' + ' ';
		document.getElementById("ntMonth").innerHTML = months[nt.getMonth()] + ' ';
		document.getElementById("ntDate").innerHTML = nt.getDate() + ',' + ' ';
		document.getElementById("ntYear").innerHTML = nt.getFullYear() + ' ' + 'To';

		var nt1 = new Date(lmp.getTime()+(94*24*60*60*1000));
		
		document.getElementById("nt1Day").innerHTML = days[nt1.getDay()] + ',' + ' ';
		document.getElementById("nt1Month").innerHTML = months[nt1.getMonth()] + ' ';
		document.getElementById("nt1Date").innerHTML = nt1.getDate() + ',' + ' ';
		document.getElementById("nt1Year").innerHTML = nt1.getFullYear();

		var mc = new Date(lmp.getTime()+(133*24*60*60*1000));
		
		document.getElementById("mcDay").innerHTML = days[mc.getDay()] + ',' + ' ';
		document.getElementById("mcMonth").innerHTML = months[mc.getMonth()] + ' ';
		document.getElementById("mcDate").innerHTML = mc.getDate() + ',' + ' ';
		document.getElementById("mcYear").innerHTML = mc.getFullYear();

		var edd = new Date(lmp.getTime()+(280*24*60*60*1000));
		
		document.getElementById("eddDay").innerHTML = days[edd.getDay()] + ',' + ' ';
		var month = edd.getMonth();
		document.getElementById("eddMonth").selectedIndex = month;
		var date = edd.getDate();
		date = date - 1;
		document.getElementById("eddDate").selectedIndex = date;
		var year = edd.getFullYear();
		if(year == 2017){
			document.getElementById("eddYear").selectedIndex = 0;
		} else if(year == 2018){
			document.getElementById("eddYear").selectedIndex = 1;
		} else if(year == 2019){
			document.getElementById("eddYear").selectedIndex = 2;
		} else if(year == 2020){
			document.getElementById("eddYear").selectedIndex = 3;
		} else if(year == 2021){
			document.getElementById("eddYear").selectedIndex = 4;
		} else if(year == 2022){
			document.getElementById("eddYear").selectedIndex = 5;
		}

		var pregsMonth = document.getElementById("pregMonth").selectedIndex;
		var pregsDate = document.getElementById("pregDate").selectedIndex;
		pregsDate = pregsDate + 1;
		var pregsYear = document.getElementById("pregYear");
		var pregsYearText= pregsYear.options[pregsYear.selectedIndex].text;

		var pregd = new Date();
		pregd.setFullYear(pregsYearText, pregsMonth, pregsDate);

		//document.getElementById("lmpDay").innerHTML = days[lmpd.getDay()] + ',' + ' ';

		var diff =  Math.floor(( pregd - lmp ) / 86400000);
		var diffWeek = Math.floor(diff / 7);
		var diffDay = Math.floor(diff % 7);
		if (diffWeek > 40) {
			document.getElementById('pregWeek').value = '0';
			document.getElementById('pregwDay').value = '0';
			document.getElementById('foWeek').value = '0';
			document.getElementById('foDay').value = '0';
			document.getElementById('foetalError').innerHTML = 'foetal age is more than 40 weeks';
		} else if (diffWeek < 0) {
			document.getElementById('pregWeek').value = '0';
			document.getElementById('pregwDay').value = '0';
			document.getElementById('foWeek').value = '0';
			document.getElementById('foDay').value = '0';
			document.getElementById('foetalError').innerHTML = 'menstrual date is in future';
		} else {
			document.getElementById('foetalError').innerHTML = ' ';
			document.getElementById('pregWeek').value = diffWeek;
			document.getElementById('pregwDay').value = diffDay;
			document.getElementById('foWeek').value = diffWeek;
			document.getElementById('foDay').value = diffDay;
		}

		/*document.getElementById('foWeek1').value = diffWeek;
		document.getElementById('foDay1').value = diffDay;

		var d3 = new Date();
		document.getElementById("foTodayDay").innerHTML = days[d3.getDay()] + ',' + ' ';
		var month3 = d3.getMonth();
		document.getElementById("foTodayMonth").selectedIndex = month3;
		var date3 = d3.getDate();
		date3 = date3 - 1;
		document.getElementById("foTodayDate").selectedIndex = date3;
		var year3 = d3.getFullYear();
		if(year3 == 2017){
			document.getElementById("foTodayYear").selectedIndex = 0;
		} else if(year3 == 2018){
			document.getElementById("foTodayYear").selectedIndex = 1;
		} else if(year3 == 2019){
			document.getElementById("foTodayYear").selectedIndex = 1;
		}*/
		var month1 =  document.getElementById("lmpMonth").options[document.getElementById("lmpMonth").selectedIndex].text;
		if (month1 == "April" || month1 =="May" || month1 =="June" || month1 =="September" || month1 =="November") {
			document.getElementById("lmp31").style.display = "none";
		} else if(month1 == "February"){
			document.getElementById("lmp29").style.display = "none";
			document.getElementById("lmp30").style.display = "none";
			document.getElementById("lmp31").style.display = "none";
		}

		var month2 =  document.getElementById("coMonth").options[document.getElementById("coMonth").selectedIndex].text;
		if (month2 == "April" || month2 =="May" || month2 =="June" || month2 =="September" || month2 =="November") {
			document.getElementById("co31").style.display = "none";
		} else if(month2 == "February"){
			document.getElementById("co29").style.display = "none";
			document.getElementById("co30").style.display = "none";
			document.getElementById("co31").style.display = "none";
		}

		var month3 =  document.getElementById("eddMonth").options[document.getElementById("eddMonth").selectedIndex].text;
		if (month3 == "April" || month3 =="May" || month3 =="June" || month3 =="September" || month3 =="November") {
			document.getElementById("edd31").style.display = "none";
		} else if(month3 == "February"){
			document.getElementById("edd29").style.display = "none";
			document.getElementById("edd30").style.display = "none";
			document.getElementById("edd31").style.display = "none";
		}

		var month4 =  document.getElementById("pregMonth").options[document.getElementById("pregMonth").selectedIndex].text;
		if (month4 == "April" || month4 =="May" || month4 =="June" || month4 =="September" || month4 =="November") {
			document.getElementById("preg31").style.display = "none";
		} else if(month4 == "February"){
			document.getElementById("preg29").style.display = "none";
			document.getElementById("preg30").style.display = "none";
			document.getElementById("preg31").style.display = "none";
		}
		var month5 =  document.getElementById("foTodayMonth").options[document.getElementById("foTodayMonth").selectedIndex].text;
		if (month5 == "April" || month5 =="May" || month5 =="June" || month5 =="September" || month5 =="November") {
			document.getElementById("today31").style.display = "none";
		} else if(month5 == "February"){
			document.getElementById("today29").style.display = "none";
			document.getElementById("today30").style.display = "none";
			document.getElementById("today31").style.display = "none";
		}
	}
