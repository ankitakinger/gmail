$(document).ready(function(){
	
	var array1=[{"id":"i1","from":"Abcdefgh","subject":"ijklmnopqrstuvwxyz","mail":"Hello","time":"8:40pm"},
		{"id":"i2","from":"Cross-Tab Marketing Serv.","subject":"Job|Walk-In for Trainee for Cross-tab Marketing Services","mail":"Hi,<br>"+
		"I am interested in applying for Java Developer post as per the mail I received from Naukri.com. I wanted to know more details regarding the package that is going to be offered as well as a detailed job description. Please let me know."+
		"<br><br>"+"Thanks & Regards,"+"Ankita","time":"8:07pm"},
		{"id":"i3","from":"Adecco India Private. Lim.","subject":"Job|Job Opportunity for Fresher for a MNC Work Location:Mumbai/Pune/Kolkatta","mail":"Excuse Me","time":"12:49pm"},
		{"id":"i4","from":"Home Revise Education Pr.","subject":"Job|Sales Job Opportunity with E-learning Company For Attractive Career Growth","mail":"Hello","time":"12:28pm"},
		{"id":"i5","from":"e-Emphasys Systems Pvt.","subject":"Walk-in|We're Hiring...!!Support Analyst @ e-Emphasys, Mumbai","mail":"Excuse Me","time":"12:12pm"},
		{"id":"i6","from":"Freshersworld","subject":"Interview Call Letter for eClinicalWorks on 20th April 2017(Thursday)","mail":"Hello","time":"11:39am"},
		{"id":"i7","from":"HDFC Life Support","subject":"Market Outlook","mail":"Excuse Me","time":"Apr 18"},
		{"id":"i8","from":"me,dp.operations@axisbank.com","subject":"Complaint for charges applied and Request for closure","mail":"Hello","time":"Apr 18"},
		{"id":"i9","from":"MakeMyTrip","subject":"Your ticket 17545657676 has been marked resolved","mail":"Excuse Me","time":"Apr 17"},
		{"id":"i10","from":"ILeverage","subject":"CCRS Dispute","mail":"Hello","time":"Apr 16"},
		{"id":"i11","from":"Naukri.com","subject":"You've created a job alert","mail":"Excuse Me","time":"Apr 16"},
		{"id":"i12","from":"HR ANGEL JOBS","subject":"Hr(Recruiter) @ VASAI EAST OPP STATION","mail":"Hello","time":"Apr 15"},
		{"id":"i13","from":"Axis Bank Alerts","subject":"Notification from Axis Bank","mail":"Excuse Me","time":"Apr 15"},
		{"id":"i14","from":"Dave Zohrob","subject":"Get hired, fasterApr 15","mail":"Hello","time":"Apr 15"},
		{"id":"i15","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Excuse Me","time":"Apr 14"},
		{"id":"i16","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Hello","time":"Apr 13"},
		{"id":"i17","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Excuse Me","time":"Apr 13"},
		{"id":"i18","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Hello","time":"Apr 13"},
		{"id":"i19","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Excuse Me","time":"Apr 13"},
		{"id":"i20","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Hello","time":"Apr 11"},
		{"id":"i21","from":"Asdfghjkl","subject":"qwertyuiop","mail":"Hello","time":"8:40pm"},
		{"id":"i22","from":"ILeverage","subject":"CCRS Dispute","mail":"Hello","time":"Apr 16"},
		{"id":"i23","from":"Adecco India Private. Lim.","subject":"Job|Job Opportunity for Fresher for a MNC Work Location:Mumbai/Pune/Kolkatta","mail":"Excuse Me","time":"12:49pm"},
		{"id":"i24","from":"Naukri.com","subject":"You've created a job alert","mail":"Excuse Me","time":"Apr 16"},
		{"id":"i25","from":"Freshersworld","subject":"Interview Call Letter for eClinicalWorks on 20th April 2017(Thursday)","mail":"Hello","time":"11:39am"},
		{"id":"i26","from":"HR ANGEL JOBS","subject":"Hr(Recruiter) @ VASAI EAST OPP STATION","mail":"Hello","time":"Apr 15"},
		{"id":"i27","from":"HDFC Life Support","subject":"Market Outlook","mail":"Excuse Me","time":"Apr 18"},
		{"id":"i28","from":"Axis Bank Alerts","subject":"Notification from Axis Bank","mail":"Excuse Me","time":"Apr 15"},
		{"id":"i29","from":"me,dp.operations@axisbank.com","subject":"Complaint for charges applied and Request for closure","mail":"Hello","time":"Apr 18"},
		{"id":"i30","from":"Dave Zohrob","subject":"Get hired, fasterApr 15","mail":"Hello","time":"Apr 15"},
		{"id":"i31","from":"Cross-Tab Marketing Serv.","subject":"Job|Walk-In for Trainee for Cross-tab Marketing Services","mail":"Hi,<br>"+
		"I am interested in applying for Java Developer post as per the mail I received from Naukri.com. I wanted to know more details regarding the package that is going to be offered as well as a detailed job description. Please let me know."+
		"<br><br>"+"Thanks & Regards,"+"Ankita","time":"8:07pm"},
		{"id":"i32","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Excuse Me","time":"Apr 14"},
		{"id":"i33","from":"MakeMyTrip","subject":"Your ticket 17545657676 has been marked resolved","mail":"Excuse Me","time":"Apr 17"},
		{"id":"i34","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Hello","time":"Apr 13"},
		{"id":"i35","from":"Home Revise Education Pr.","subject":"Job|Sales Job Opportunity with E-learning Company For Attractive Career Growth","mail":"Hello","time":"12:28pm"},
		{"id":"i36","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Excuse Me","time":"Apr 13"},
		{"id":"i37","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Hello","time":"Apr 13"},
		{"id":"i38","from":"e-Emphasys Systems Pvt.","subject":"Walk-in|We're Hiring...!!Support Analyst @ e-Emphasys, Mumbai","mail":"Excuse Me","time":"12:12pm"},
		{"id":"i39","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Excuse Me","time":"Apr 13"},
		{"id":"i40","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Hello","time":"Apr 11"}];

	var array3=[{"id":"s1","from":"Abcdefgh","subject":"ijklmnopqrstuvwxyz","mail":"Hello","time":"8:40pm"},
		{"id":"s2","from":"Cross-Tab Marketing Serv.","subject":"Job|Walk-In for Trainee for Cross-tab Marketing Services","mail":"Excuse Me","time":"8:07pm"},
		{"id":"s3","from":"Adecco India Private. Lim.","subject":"Job|Job Opportunity for Fresher for a MNC Work Location:Mumbai/Pune/Kolkatta","mail":"Hello","time":"12:49pm"},
		{"id":"s4","from":"Home Revise Education Pr.","subject":"Job|Sales Job Opportunity with E-learning Company For Attractive Career Growth","mail":"Excuse Me","time":"12:28pm"},
		{"id":"s5","from":"e-Emphasys Systems Pvt.","subject":"Walk-in|We're Hiring...!!Support Analyst @ e-Emphasys, Mumbai","mail":"Hello","time":"12:12pm"},
		{"id":"s6","from":"Freshersworld","subject":"Interview Call Letter for eClinicalWorks on 20th April 2017(Thursday)","mail":"Excuse Me","time":"11:39am"},
		{"id":"s7","from":"HDFC Life Support","subject":"Market Outlook","mail":"Hello","time":"Apr 18"},
		{"id":"s8","from":"me,dp.operations@axisbank.com","subject":"Complaint for charges applied and Request for closure","mail":"Excuse Me","time":"Apr 18"}];

	var array4=[{"id":"t1","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Excuse Me","time":"Apr 14"},
		{"id":"t2","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Hello","time":"Apr 13"},
		{"id":"t3","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Excuse Me","time":"Apr 13"},
		{"id":"t4","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Hello","time":"Apr 13"},
		{"id":"t5","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Excuse Me","time":"Apr 13"},
		{"id":"t6","from":"dp.operations","subject":"Acknowledgement Mail","mail":"Hello","time":"Apr 11"}];
	var m=0;
	var size = 5;
	var noofpages = 0;
	var page = 1;
	var tempactive = "inbox";
	var active = "inbox";
	toggleActive();

	function toggleActive(){

		if(tempactive!=active){
		m=0;
		noofpages = 0;
		page = 1;
		}

		tempactive=active;

		switch(active){
			case "inbox": setActive(array1); break;
			case "sent": setActive(array3); break;
			case "trash": setActive(array4); break;
		}
	}

	
	//$("#less-than").css("visibility","hidden");
	$("#less-than").css("opacity","0.5");
	document.getElementById('less-than').style.pointerEvents = 'none';

	$("#size li").click(function(){
			$(this).parent(".ul-toggle").slideToggle('fast');
			size=parseInt(this.dataset.li);
			m=0;
			noofpages=1;
			toggleActive();
		});


	function setActive(contents){

		var i = 0;
		var k;
		
		noofpages = contents.length/size;
		document.getElementById("all-mails").innerHTML="";

		
		if((m+size)>contents.length){
			document.getElementById("noofmails").innerHTML=(m+1)+"-"+contents.length+" of "+contents.length;
			k=contents.length;
		}
		else{
			document.getElementById("noofmails").innerHTML=(m+1)+"-"+(m+size)+" of "+contents.length;
			k=(m+size);
		}
		
		
		if(m>=(contents.length-size)){
			$("#greater-than").css("opacity","0.5");
			document.getElementById('greater-than').style.pointerEvents = 'none';
		}
		else
		{
			$("#greater-than").css("opacity","1");
			document.getElementById('greater-than').style.pointerEvents = 'auto';
		}
		
		
		if(m<=0){
			$("#less-than").css("opacity","0.5");
			document.getElementById('less-than').style.pointerEvents = 'none';
		}
		else
		{
			$("#less-than").css("opacity","1");
			document.getElementById('less-than').style.pointerEvents = 'auto';
		}
		
		
		for(i+=m;i<k;i++)
		{

			maillist="<li class='li-mail' data-span='"+m+"'><span class='mailicons'><input type='checkbox' class='star-icon' data-myid='"+contents[i].id+"'><i class='fa fa-star-o star-icon'></i>"+
			"<i class='material-icons star-icon' id='lbl'>label_outline</i></span><span><span class='from'>"+contents[i].from+"</span><span class='subject'>"+
			contents[i].subject+" - "+contents[i].mail+"</span><span class='time'>"+contents[i].time+"</span></span></input></li>";
			document.getElementById("all-mails").innerHTML+=maillist;

		}
		
			$("[data-span]").click(function(){
				var selMail = this.dataset.span;
				//console.log("clicked");
				$("#back-btn").css("display","inline-block");
				document.getElementById("all-mails").innerHTML="";
				$(".mail-types").css("display","none");
				$("#bottom-line").css("display","none");
				//console.log(selMail);
				mailcontent="<div><b>"+contents[selMail].subject+"<hr></b>"+contents[selMail].from+"<hr>"+contents[selMail].mail;
				document.getElementById("all-mails").innerHTML+=mailcontent;
				
			});

			$(".mailicons").click(function(){
				event.stopPropagation();
			});
		
	}

		$("#back-btn").click(function(){
			//console.log("back clicked");
			$("#back-btn").css("display","none");
			$(".mail-types").css("display","inline-block");
			$("#bottom-line").css("display","inline-block");
			toggleActive();
		 });

		$("#goto-prompt").click(function(){
				page = parseInt(prompt("Which Page No. you would like to see from 1 to "+noofpages+"?"));
				if(page<1 || page>noofpages){
					alert("Invalid Page Number!");
				}
				m=((page-1)*size);
				toggleActive();
			});


		$("#greater-than").click(function(){
		var i = 0;
		m+=size;
		$("#less-than").css("opacity","1");
		document.getElementById('less-than').style.pointerEvents = 'auto';
		document.getElementById("all-mails").innerHTML="";
		toggleActive();
		});

		$("#less-than").click(function(){
		var i = 0;
		m-=size;
		$("#greater-than").css("opacity","1");
		document.getElementById('greater-than').style.pointerEvents = 'auto';
		document.getElementById("all-mails").innerHTML="";
		toggleActive();		
		});


	$("#inbox").click(function(){
		active = "inbox";
		//$(".mail-types").css("display","inline-block");
		toggleActive();
	});


	$("#sent").click(function(){
		active = "sent";
		//$(".mail-types").css("display","none");
		toggleActive();
	});

	$("#trash").click(function(){
		active = "trash";
		//$(".mail-types").css("display","none");
		toggleActive();
	});
	
	$(".i-toggle").click(function(){
		$(this).next(".ul-toggle").slideToggle('fast');
	});

	$("#a").click(function(){
		$(this).css("background-color","white");
		$(this).css("border-bottom","none");
		$(this).css("border-top-color","black");
		$(this).css("border-top-width","3px");
	});

	$("#b").click(function(){
		$(this).css("background-color","white");
		$(this).css("border-bottom","none");
		$(this).css("border-top-color","blue");
		$(this).css("border-top-width","3px");
	});

	$("#c").click(function(){
		$(this).css("background-color","white");
		$(this).css("border-bottom","none");
		$(this).css("border-top-color","green");
		$(this).css("border-top-width","3px");
	});

	$(".compose-btn").click(function(){
		$("#new_window").slideToggle('fast');
	});

	$(".close").click(function(){
			$("#new_window").css("display","none");
		});

	$(".expand").click(function(){
		$("#new_window").css("width","1000px");
		$("#new_window").css("height","450px");
		$("#new_window").css("right","150px");
		$("#new_window").css("top","80px");
	});


	$("#send-btn").click(function(){
		var to = document.getElementById("to").value;
		var subject = document.getElementById("subject").value;
		var content = document.getElementById("content").value;
		$("#new_window").css("display","none");
		if($.trim(to)!=''){
			array3.unshift({"from":"To:"+to,"subject":subject,"mail":content,"time":"Just Now"});
			setTimeout(function(){alert("Message sent successfully!!");},0);
		}
	});

	$("#inbox").addClass("inboxSelected");

	$(".inbox-list li").click(function(){
		$(this).addClass("inboxSelected").siblings().removeClass("inboxSelected");
	});

	var selarray=[];
	function selectedCB(id){
		for(var i=0;i<array1.length;i++)
		{
			if(array1[i].id==id)
				selarray.unshift(array1[i]);
		}
	}

	$("#del").click(function(){
		
		var j=[];
		var k=0;
		
		for(var i=0;i<array1.length;i++){
				
				if($("[data-myid]")[i].checked==true){
					selectedCB(array1[i].id);
					j[k]=i;
				 	k++;
				}
						
		}

		for(var i=0;i<selarray.length;i++){
			array4.unshift(selarray[i]);
		}

		selarray=[];
	
		for(var i=0;i<j.length;i++){
			array1.splice(j[i]-i,1);
		}

		j=[];

		active="inbox";
		toggleActive();

		});
	
});