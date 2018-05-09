/*$.kbd-0.5;(c)2018 - Mntn(r) <https://mn.tn/> c/o Benjamin Lips <g--[AT]--mn.tn>;MIT-Licensed <https://mit-license.org/>;For documentation, see <https://github.com/mntn-dev/kbd/>*/
;(function($){

$.kbd=function(_){

if($('#_kbd')[0]!==undefined)return($.kbd.show());

$('body').append('<div id="_kbd"><span id="_kbd_wrap"></span>'+(_.coffee?'<div id="_kbd_coffee"'+(_.white!==!1?'':' style="display:none;"')+'></div>':'')+'<div id="kbd-lock"></div></div>');
if(_.white===!!1)$('#_kbd').addClass('_kbd_white');

if(_.toggle_btn===!!1){
$('#_kbd_wrap').prepend('<button id="_kbd_btn">&#9000;</button>');
$('#_kbd_btn').click(function(){if($('#_kbd').offset().top>$(document).height()){$(this).css({position:'absolute',top:'-25%'});$('#_kbd').css({bottom:'-30%'});$.kbd.show();}else $.kbd.hide();});
}

var _kbd_t=!1,_kbd_t2=!1,q='',tc=function(_){c=_.data().c;cc=_.text();_.text(c);_.data('c',cc);},
Q=function(_){q=$('#__q').text();return((_===0)?q.toLowerCase():q);},T=function(){return(window.ontouchstart!==undefined);},
t_up=function(_){if(T())setTimeout(function(_){_.removeClass('_kbd-h'+($('#_kbd').hasClass('_kbd_white')?'-w':''));},1e2,_);}

_k='q1w2e3r4t5y6u7i8o9p0__a@s#d$f_g&h-j+k(l)__{{\u25b2|data-c="\u25bc" class="l _caps"}}z/x%c*v,b"n!m?{{\u25c4|class="l" data-k="8"}}__{{123|data-c="ABC" class="l _alt"}}{{&nbsp;|class="xl" data-k="32"}}{{OK|class="l" data-k="13"}}';
_e={};_e.q='1';_e.w='2';_e.r='4';_e.t='5';_e.y='6';_e.i='8';_e.p='0';_e.a='\u00e1\u00e0\u00e4';_e.e='\u00e9\u00e8\u00eb3';_e.o='\u00f3\u00f2\u00f69';_e.u='\u00fa\u00f9\u00fc7';_e.d='#\u00a5\u00a3\u20ac';_e.s='\u00df';_e.z='#\\';_e.k='#{[<';_e.l='#}]>';_e.v='#;:.';_e.b='#\'';
if(_.qwertz===!!1){_k=_k.replace('y','Z').replace('z','y').replace('Z','z');__=_e.z;_e.z=_e.y;_e.y=__;}

_k=_k.split('__');

for(j=0;j<_k.length;j++){
 __k=_k[j].match(/\{\{(.*?)\}\}|[\S]{2}/g);ii=__k.length;
 for(i=0;i<ii;i++){
  K=__k[i];if(K[0]=='{')K=K.replace(/[\{\}]/g,'').split('|');
  $('#_kbd_wrap').append('<button '+(((typeof(K))[0]!='o')?'data-a="'+(K[1]=='"'?'&quot;':K[1])+'"':K[1])+(K[0]=='q'?' id="__q"':'')+'>'+K[0]+'</button>');
  if(_e[K[0]]!==undefined)$('#_kbd_wrap button:last').wrap('<span class="_ext'+((_e[K[0]][0]!='#')?' _ext-'+((!$.isNumeric(_e[K[0]]))?'1':'0'):'')+'"></span>').parent().prepend('<span class="_ext-box" style="top:-'+(_e[K[0]]=_e[K[0]].replace('#','')).length+'00%;">'+_e[K[0]].replace(/([\S\s])/g,'<button>$1</button>')+'</span>');
 }
}




$('._caps').bind('mousedown touchstart',function(_){
 _.preventDefault();
 if((q=Q()).toLowerCase()!='q')return;
 if(T())$(this).trigger('mouseenter',!!1);
 _kbd_t=setTimeout(function(_){_.addClass('_ext-caps');_.trigger('mouseup');_kbd_t='%';},750,$(this));
 })
.bind('mouseup touchend',function(_){
 _.preventDefault();t_up($(this));
 if((q=Q()).toLowerCase()!='q'||_kbd_t=='%')return((_kbd_t=!1));if(_kbd_t)clearTimeout(_kbd_t);
 tc($(this));if(q=='Q'&&$(this).hasClass('_ext-caps'))$(this).removeClass('_ext-caps');
 C=(q=='Q')?!1:!!1;$('#_kbd button').each(function(){if($(this).data().a!==undefined||$(this).parent().hasClass('_ext-box')){$(this).text((C)?$(this).text().toUpperCase():(($(this).text()=='SS')?'\u00df':$(this).text().toLowerCase()));}});
});

$('._alt').click(function(){
 tc($(this));if(Q()=='Q'){tc($('._caps'));$('._caps').removeClass('_ext-caps');}if(T()){$(this).trigger('mouseenter',!!1);t_up($(this));}
 $('#_kbd button').each(function(){if((a=$(this).data().a)!==undefined){$(this).data('a',$(this).text().toLowerCase());$(this).text(a);}});
 $('._ext:not(._ext-0)').toggleClass('_ext-1');
}).bind('touchstart',function(){$(this).trigger('mouseenter',!!1);});

$(__='button[data-a],button[data-k],._ext-box button').bind('mouseup touchend',function(_$,r){
 _$.preventDefault();
 if(_kbd_t&&!r){clearTimeout(_kbd_t);clearInterval(_kbd_t);}
 if(T())if($(this).prev('._ext-box').is(':visible'))return;
 if((typeof(_.input))[0]=='f')_.input($(this).data().k?String.fromCharCode($(this).data().k):$(this).text());
 if(Q()=='Q'&&!$('._caps').hasClass('_ext-caps'))$('._caps').trigger('mouseup');t_up($(this));
}).bind('touchstart',function(){$(this).trigger('mouseenter',!!1);});

$(__+',._caps,._alt').
hover(
function(_,r){if(!T()||r!==undefined)$(this).addClass('_kbd-h'+($('#_kbd').hasClass('_kbd_white')?'-w':''));},
function(){if(!T())$(this).removeClass('_kbd-h'+($('#_kbd').hasClass('_kbd_white')?'-w':''));}
);


$('button[data-k]').bind('mousedown touchstart',function(_){_.preventDefault();_kbd_t=setTimeout(function(_){_kbd_t=setInterval(function(){_.trigger('mouseup',!!1);},50,_);},2e2,$(this));});

$('._ext')
.bind('mousedown touchstart',function(_){_.preventDefault();if($(this).hasClass('_ext-1')||($(this).hasClass('_ext-0')&&Q(0)=='q')){_kbd_t=setTimeout(function(_){_.find('._ext-box').show();},750,$(this));if(T())_kbd_t2=setTimeout(function(_){_.find('._ext-box').hide();t_up(_.children('button'))},3e3,$(this));}})
.bind('mouseup mouseleave',function(_){_.preventDefault();$(this).find('._ext-box:visible').hide();if(_kbd_t)clearTimeout(_kbd_t);});


$('._ext-box button').bind('touchend',function(){if(_kbd_t2)clearTimeout(_kbd_t2);$(this).parent().hide();t_up($(this).parent().parent().children('button'));});

if(_.hidden===!!1)return;$.kbd.show();

},


$.kbd.hide =function(){$('#_kbd').stop().animate({bottom:'-100%'},250);if($('#_kbd_btn')[0]!==undefined)$('#_kbd_btn').css({position:'fixed',top:'93%'});},
$.kbd.show =function(){if($('#_kbd_btn')[0]!==undefined&&parseInt($('#_kbd').css('bottom'))!==0){$('#_kbd_btn').css({position:'absolute',top:'-25%'});$('#_kbd').css({bottom:'-30%'});}$('#_kbd').stop().animate({bottom:0},250);},
$.kbd.white=function(_){if((_===!!1||_===undefined)&&!$('#_kbd').hasClass('_kbd_white')){$('#_kbd').addClass('_kbd_white');if($('#_kbd_coffee')[0]!==undefined)$('#_kbd_coffee').css({display:'block'});}else if(_===!1&&$('#_kbd').hasClass('_kbd_white')){$('#_kbd').removeClass('_kbd_white');if($('#_kbd_coffee')[0]!==undefined)$('#_kbd_coffee').css({display:'none'});}},
$.kbd.caps =function(_){q=$('#__q').text();if(_===!!1&&q=='q')$('._caps').addClass('_ext-caps').trigger('mouseup');else if(_===!1&&q=='Q')$('._caps').removeClass('_ext-caps').trigger('mouseup');else if(_===undefined)$('._caps').trigger('mouseup');},
$.kbd.alt  =function(_){q=$('#__q').text();if(_===!!1&&q.toLowerCase()=='q')$('._alt').trigger('click');else if(_===!1&&q=='1')$('._alt').trigger('click');else if(_===undefined)$('._alt').trigger('click');},
$.kbd.lock =function(_){if(_===!!1||_===undefined)$('#kbd-lock').show();else if(_===!1)$('#kbd-lock').hide();},
$.BS=String.fromCharCode(8),
$.OK=String.fromCharCode(13)


})(jQuery);
