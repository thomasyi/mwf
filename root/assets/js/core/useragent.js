mwf.userAgent=new function(a){this.cookieName=mwf.site.cookie.prefix+"user_agent";var b=a?a:navigator.userAgent;var d=b.toLowerCase();var c=function(e){return d.indexOf(e)!=-1};this.getOS=function(){if(d.match(/(iphone)|(ipad)|(ipod)/)!=null){return"iphone_os"}var f=0,e=["android","blackberry","windows phone os","symbian","webos","mac os x","windows nt","linux"];for(;f<e.length;f++){if(c(e[f])){return e[f].replace(/ /g,"_")}}return""};this.getOSVersion=function(){var f=d,g,h="",e;switch(this.getOS()){case"iphone_os":e=f.match(/(iphone|cpu) os ([\d_]+)/);if(e!=null){h=e[2]}break;case"blackberry":e=f.match(/^mozilla\/5\.0 \(blackberry;.* version\/([\d\.]+)/);if(e!=null){h=e[1];break}else{if(f.substring(0,10)=="blackberry"){g=f.indexOf("/")+1;h=f.substring(g,f.indexOf(" ",g))}}break;case"android":if((g=f.indexOf("android "))!=-1){g+=8;h=f.substring(g,Math.min(f.indexOf(" ",g),f.indexOf(";",g),f.indexOf("-",g)))}break;case"windows_phone_os":if((g=f.indexOf("windows phone os "))!=-1){g+=17;h=f.substring(g,f.indexOf(";",g))}break;case"symbian":e=f.match(/symbianos\/([\d\.]+)/);if(e!=null){h=e[1]}break;case"webos":if((g=f.indexOf("webos/"))!=-1){g+=6;h=f.substring(g,Math.min(f.indexOf(";",g)))}break}return h.replace(/\_/g,".")};this.getBrowser=function(){if(c("safari")){return this.getOS()=="android"?"android_webkit":"safari"}var e,f=["chrome","iemobile","camino","seamonkey","firefox","opera mobi","opera mini"];for(e=0;e<f.length;e++){if(c(f[e])){return f[e].replace(/ /g,"_")}}return""};this.getBrowserEngine=function(){if(c("applewebkit")){return"webkit"}var f=0,e=["trident","gecko","presto"];for(;f<e.length;f++){if(c(e[f])){return e[f]}}return""};this.getBrowserEngineVersion=function(){var f=new RegExp(this.getBrowserEngine()+"/([\\d\\.]+)");var e=f.exec(d);return e!=null?e[1]:""};this.isNative=function(){return/ mwf\-native\-[a-z]*\/[\d\.]*$/.test(d)};this.generateCookieContent=function(){var e="{";e+='"s":"'+b+'"';if(t=this.getOS()){e+=',"os":"'+t+'"'}if(t=this.getOSVersion()){e+=',"osv":"'+t+'"'}if(t=this.getBrowser()){e+=',"b":"'+t+'"'}if(t=this.getBrowserEngine()){e+=',"be":"'+t+'"'}if(t=this.getBrowserEngineVersion()){e+=',"bev":"'+t+'"'}e+="}";return e}};