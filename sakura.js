(function(d,b,w){
	var q = d.createElement('div');
	q.id = "sakura";
	q.innerHTML = '<style>'+
	'html,body{overflow-x:hidden;}'+
	'.hana{'+
	'position:absolute;height:0;width:0;'+
	'border: 10px solid pink;'+
	'border-radius: 15px;'+
	'border-top-right-radius: 0;'+
	'border-bottom-left-radius: 0;}'+
	'.hana::after{'+
	'content:"";display:block;position:absolute;top:-7px;left:-7px;height:0;width:0;'+
	'border: 10px solid pink;'+
	'border-radius: 15px;'+
	'border-top-right-radius: 0;'+
	'border-bottom-left-radius: 0;'+
	'-webkit-transform: rotate(15deg);-ms-transform: rotate(15deg);transform: rotate(15deg);'+
	'}'+

	'.t1{border-color:#fff3f5;}'+
	'.t2{border-color:#ffe2e7;}'+
	'.t3{border-color:#ffd1d9;}'+
	'.t4{border-color:#ffc0cb;}'+
	'.t5{border-color:#ffafbd;}'+
	'.t6{border-color:#ffafbd;}'+
	'.t1::after{border-color:#fff3f5;}'+
	'.t2::after{border-color:#ffe2e7;}'+
	'.t3::after{border-color:#ffd1d9;}'+
	'.t4::after{border-color:#ffc0cb;}'+
	'.t5::after{border-color:#ffafbd;}'+
	'.t6::after{border-color:#ffafbd;}'+

	'.y1{-webkit-animation:v1 10s infinite;animation:v1 10s infinite;}'+
	'.y2{-webkit-animation:v2 10s infinite;animation:v2 10s infinite;}'+
	'.y3{-webkit-animation:v3 9s infinite;animation:v3 9s infinite;}'+
	'.y4{-webkit-animation:v4 9s infinite;animation:v4 9s infinite;}'+
	'.y5{-webkit-animation:v5 8s infinite;animation:v5 8s infinite;}'+
	'.y6{-webkit-animation:v6 8s infinite;animation:v6 8s infinite;}'+
	'@-webkit-keyframes v1{'+
		'from{-webkit-transform: rotate(0deg) scale(1);}'+
		'50%{-webkit-transform: rotate(270deg) scale(1);}'+
		'to{-webkit-transform: rotate(1deg) scale(1);}'+
	'}'+
	'@-webkit-keyframes v2{'+
		'from{-webkit-transform: rotate(-90deg) scale(.9);}'+
		'50%{-webkit-transform: rotate(-360deg) scale(.9);}'+
		'to{-webkit-transform: rotate(-89deg) scale(.9);}'+
	'}'+
	'@-webkit-keyframes v3{'+
		'from{-webkit-transform: rotate(30deg) scale(.8);}'+
		'50%{-webkit-transform: rotate(300deg) scale(.8);}'+
		'to{-webkit-transform: rotate(29deg) scale(.8);}'+
	'}'+
	'@-webkit-keyframes v4{'+
		'from{-webkit-transform: rotate(-120deg) scale(.7);}'+
		'50%{-webkit-transform: rotate(-390deg) scale(.7);}'+
		'to{-webkit-transform: rotate(-119deg) scale(.7);}'+
	'}'+
	'@-webkit-keyframes v5{'+
		'from{-webkit-transform: rotate(60deg) scale(.6);}'+
		'50%{-webkit-transform: rotate(330deg) scale(.6);}'+
		'to{-webkit-transform: rotate(59deg) scale(.6);}'+
	'}'+
	'@-webkit-keyframes v6{'+
		'from{-webkit-transform: rotate(-150deg) scale(.5);}'+
		'50%{-webkit-transform: rotate(-420deg) scale(.5);}'+
		'to{-webkit-transform: rotate(-149deg) scale(.5);}'+
	'}'+
	'@keyframes v1{'+
		'from{transform: rotate(0deg) scale(1);}'+
		'50%{transform: rotate(270deg) scale(1);}'+
		'to{transform: rotate(1deg) scale(1);}'+
	'}'+
	'@keyframes v2{'+
		'from{transform: rotate(-90deg) scale(.9);}'+
		'50%{transform: rotate(-360deg) scale(.9);}'+
		'to{transform: rotate(-89deg) scale(.9);}'+
	'}'+
	'@keyframes v3{'+
		'from{transform: rotate(30deg) scale(.8);}'+
		'50%{transform: rotate(300deg) scale(.8);}'+
		'to{transform: rotate(29deg) scale(.8);}'+
	'}'+
	'@keyframes v4{'+
		'from{transform: rotate(-120deg) scale(.7);}'+
		'50%{transform: rotate(-390deg) scale(.7);}'+
		'to{transform: rotate(-119deg) scale(.7);}'+
	'}'+
	'@keyframes v5{'+
		'from{transform: rotate(60deg) scale(.6);}'+
		'50%{transform: rotate(330deg) scale(.6);}'+
		'to{transform: rotate(59deg) scale(.6);}'+
	'}'+
	'@keyframes v6{'+
		'from{transform: rotate(-150deg) scale(.5);}'+
		'50%{transform: rotate(-420deg) scale(.5);}'+
		'to{transform: rotate(-149deg) scale(.5);}'+
	'}'+

	'</style>';
	b.appendChild(q);

	var h = w.innerHeight;
	var u = d.documentElement.scrollTop || b.scrollTop;
	var z = 9999;
	var t = new Array();
	var l = new Array();
	var y = new Array();
	var s = new Array();
	var g = new Array();
	var c = new Array();
	var k = 0;
	d.addEventListener('scroll',function(){u = d.documentElement.scrollTop || b.scrollTop;},false);
	for(var i=0;i<50;i++){
		var m = d.createElement('div');
		m.id = 'hanabira'+i;
		t[i] = Math.random()*-1000+u;
		l[i] = Math.random()*w.innerWidth;
		m.setAttribute('style','z-index:'+(z+i)+';top:'+t[i]+'px;left:'+l[i]+'px;');
		var clss = 'hana t'+(Math.floor(Math.random()*6)+1)+' y'+(Math.floor(Math.random()*6)+1);
		m.setAttribute('class',clss);
		q.appendChild(m);
		y[i] = Math.random()*40+5;
		s[i] = Math.random()*5+2;
		g[i] = d.getElementById('hanabira'+i);
		c[i] = 0;
	}
	setInterval(function(){
		for(var i=0;i<50;i++){
			if(t[i]<u+h-40){
				if(y[i]>=c[i]){
					l[i] = l[i]+0.5+Math.random()*0.5;
				}else{
					l[i] = l[i]-0.5-Math.random()*0.5;
				}
				if((y[i]*2)<=c[i]){
					c[i] = 0;
				}
			}else{
				t[i] = u-40;
				l[i] = Math.random()*w.innerWidth;
			}
			if(k>=100 && k<=110){l[i] = l[i]+1;}
			else if(k>=111 && k<=120){l[i] = l[i]+3;}
			else if(k>=121 && k<=129){l[i] = l[i]+5;}
			else if(k>=130 && k<=137){l[i] = l[i]+7;}
			else if(k>=138 && k<=144){l[i] = l[i]+9;}
			else if(k>=145 && k<=300){l[i] = l[i]+11;}
			else if(k>=301 && k<=311){l[i] = l[i]+9;}
			else if(k>=312 && k<=322){l[i] = l[i]+7;}
			else if(k>=323 && k<=335){l[i] = l[i]+5;}			
			else if(k>=336 && k<=349){l[i] = l[i]+3;}
			else if(k>=350 && k<=354){l[i] = l[i]+1;}

			else if(k>=500 && k<=510){l[i] = l[i]-1;}
			else if(k>=511 && k<=520){l[i] = l[i]-3;}
			else if(k>=521 && k<=529){l[i] = l[i]-5;}
			else if(k>=530 && k<=537){l[i] = l[i]-7;}
			else if(k>=538 && k<=544){l[i] = l[i]-9;}
			else if(k>=545 && k<=700){l[i] = l[i]-11;}
			else if(k>=701 && k<=711){l[i] = l[i]-9;}
			else if(k>=712 && k<=722){l[i] = l[i]-7;}
			else if(k>=723 && k<=735){l[i] = l[i]-5;}			
			else if(k>=736 && k<=749){l[i] = l[i]-3;}
			else if(k>=750 && k<=754){l[i] = l[i]-1;}

			else if(k>=900){k = 0;}

			t[i] = t[i]+s[i];
			g[i].style.top = t[i]+'px';
			g[i].style.left = l[i]+'px';
			c[i]++;
		}
		k++;
		/* console.log(k); */
	},45);
})(window.document,window.document.body,window);