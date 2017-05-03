$(document).ready(function(){
	
	var array1=[{"from":"Abcdefgh","subject":"ijklmnopqrstuvwxyz","time":"8:40pm"},
		{"from":"Cross-Tab Marketing Serv.","subject":"Job|Walk-In for Trainee for Cross-tab Marketing Services - seytrdcujygbhkyudf hvutfyvkyhfvyjghfghit gjvursdcyjgtydyjgby tdcyjyhtydcyjgttdf7gujybtdcytgv","time":"8:07pm"},
		{"from":"Adecco India Private. Lim.","subject":"Job|Job Opportunity for Fresher for a MNC Work Location:Mumbai/Pune/Kolkatta","time":"12:49pm"},
		{"from":"Home Revise Education Pr.","subject":"Job|Sales Job Opportunity with E-learning Company For Attractive Career Growth","time":"12:28pm"},
		{"from":"e-Emphasys Systems Pvt.","subject":"Walk-in|We're Hiring...!!Support Analyst @ e-Emphasys, Mumbai","time":"12:12pm"},
		{"from":"Freshersworld","subject":"Interview Call Letter for eClinicalWorks on 20th April 2017(Thursday)","time":"11:39am"},
		{"from":"HDFC Life Support","subject":"Market Outlook","time":"Apr 18"},
		{"from":"me,dp.operations@axisbank.com","subject":"Complaint for charges applied and Request for closure","time":"Apr 18"},
		{"from":"MakeMyTrip","subject":"Your ticket 17545657676 has been marked resolved","time":"Apr 17"},
		{"from":"ILeverage","subject":"CCRS Dispute","time":"Apr 16"},
		{"from":"Naukri.com","subject":"You've created a job alert","time":"Apr 16"},
		{"from":"HR ANGEL JOBS","subject":"Hr(Recruiter) @ VASAI EAST OPP STATION","time":"Apr 15"},
		{"from":"Axis Bank Alerts","subject":"Notification from Axis Bank","time":"Apr 15"},
		{"from":"Dave Zohrob","subject":"Get hired, fasterApr 15","time":"Apr 15"},
		{"from":"dp.operations","subject":"Acknowledgement Mail","time":"Apr 14"},
		{"from":"dp.operations","subject":"Acknowledgement Mail","time":"Apr 13"},
		{"from":"dp.operations","subject":"Acknowledgement Mail","time":"Apr 13"},
		{"from":"dp.operations","subject":"Acknowledgement Mail","time":"Apr 13"},
		{"from":"dp.operations","subject":"Acknowledgement Mail","time":"Apr 13"},
		{"from":"dp.operations","subject":"Acknowledgement Mail","time":"Apr 11"},];

	var array3=[{"from":"Abcdefgh","subject":"ijklmnopqrstuvwxyz","time":"8:40pm"},
		{"from":"Cross-Tab Marketing Serv.","subject":"Job|Walk-In for Trainee for Cross-tab Marketing Services","time":"8:07pm"},
		{"from":"Adecco India Private. Lim.","subject":"Job|Job Opportunity for Fresher for a MNC Work Location:Mumbai/Pune/Kolkatta","time":"12:49pm"},
		{"from":"Home Revise Education Pr.","subject":"Job|Sales Job Opportunity with E-learning Company For Attractive Career Growth","time":"12:28pm"},
		{"from":"e-Emphasys Systems Pvt.","subject":"Walk-in|We're Hiring...!!Support Analyst @ e-Emphasys, Mumbai","time":"12:12pm"},
		{"from":"Freshersworld","subject":"Interview Call Letter for eClinicalWorks on 20th April 2017(Thursday)","time":"11:39am"},
		{"from":"HDFC Life Support","subject":"Market Outlook","time":"Apr 18"},
		{"from":"me,dp.operations@axisbank.com","subject":"Complaint for charges applied and Request for closure","time":"Apr 18"},];

	var array4=[{"from":"dp.operations","subject":"Acknowledgement Mail","time":"Apr 14"},
		{"from":"dp.operations","subject":"Acknowledgement Mail","time":"Apr 13"},
		{"from":"dp.operations","subject":"Acknowledgement Mail","time":"Apr 13"},
		{"from":"dp.operations","subject":"Acknowledgement Mail","time":"Apr 13"},
		{"from":"dp.operations","subject":"Acknowledgement Mail","time":"Apr 13"},
		{"from":"dp.operations","subject":"Acknowledgement Mail","time":"Apr 11"},];

	var active = "inbox";
	toggleActive();

	function toggleActive(){
		switch(active){
			case "inbox": setActive(array1); break;
			case "sent": setActive(array3); break;
			case "trash": setActive(array4); break;
		}
	}

	function setActive(contents){

		document.getElementById("all-mails").innerHTML="";

		for(var i=0;i<contents.length;i++)
		{
			maillist="<li class='li-mail'><input type='checkbox' class='star-icon'></input><i class='fa fa-star-o star-icon'></i>"+
			"<i class='material-icons star-icon' id='lbl'>label_outline</i><span class='from'>"+contents[i].from+"</span><span class='subject'>"+
			contents[i].subject+"</span><span class='time'>"+contents[i].time+"</span></li>";
			document.getElementById("all-mails").innerHTML+=maillist;
		}
	}

	$("#inbox").click(function(){

		active = "inbox";
		toggleActive();
	});


	$("#sent").click(function(){
		active = "sent";
		toggleActive();
	});

	$("#trash").click(function(){
		active = "trash";
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

	$(".to").click(function(){
		$(this).css("value","abcd");
	});

	$("#send-btn").click(function(){
		var to = document.getElementById("to").value;
		var subject = document.getElementById("subject").value;
		var content = document.getElementById("content").value;
		$("#new_window").css("display","none");
		array3.unshift({"from":"To:"+to,"subject":subject+"-"+content,"time":"Just Now"});
		setTimeout(function(){alert("Message sent successfully!!");},0);
	});

	$(".inbox-list li").click(function(){
		$(this).addClass("inboxSelected").siblings().removeClass("inboxSelected");
	});

});