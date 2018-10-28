<img src="https://mntn-dev.github.io/kbd/kbd.gif" alt="$.kbd"/>

# Usage

```js

/*
.
.
<link href="kbd.css" rel="stylesheet"/>
.
.
<script src="jquery.js"></script>
<script src="kbd.js"></script>
.
.
*/

$(function(){

 $.kbd({
  white:false, // keyboard theme (def.: false(=black))
  qwertz:false, // layout (def.: false(=qwerty))
  toggle_btn:false, // adds button to show/hide keyboard  
  hidden:false, // just init, don't show
  input:function(char){[...]}, // input callback ($.OK/$.BS)
  coffee:false // coffee splash? (white theme)
 });

});



/*Methods:
--------*/

$.kbd.show()
$.kbd.hide() 

$.kbd.white([true]) // white theme
$.kbd.white(false) // black

$.kbd.caps(true) // permanent caps ('longpress')
$.kbd.caps(false) // unset caps
$.kbd.caps() // toggles caps

$.kbd.alt(true) // ABC->123 
$.kbd.alt(false) // 123->ABC
$.kbd.alt() // toggles ABC/123

$.kbd.lock([true]) // locks keyboard; no input
$.kbd.lock(false) // unlock


/*Vars:
-----*/

$.OK // Return/Enter
$.BS // Backspace


/*Callback example (#txt=<pre>)
-----------------------------*/

function input_cb(chr){
 if(chr==$.BS/*Backspace*/)return($('#txt').text($('#txt').text().slice(0,-1)));
 $('#txt').append((chr==$.OK/*Return/Enter*/)?'\n':chr);
}


/*Detect mobile device
--------------------*/

function is_md(){
 return(typeof window.orientation!=='undefined')||(navigator.userAgent.indexOf('IEMobile')!==-1);
}

```

<img src="https://mntn-dev.github.io/kbd/kbd-w.png" alt="$.kbd"/>


# Docs/demos
* <a href="https://mntn-dev.github.io/kbd/" target="_blank">@github.io</a>
* <a href="https://mntn-dev.github.io/kbd/demo.htm" target="_blank">@demo.htm</a> / <a href="https://mntn-dev.github.io/kbd/demo-input-elm.htm" target="_blank">@demo-input-elm.htm</a>


<br/><details><summary>CDN</summary><code>https://cdn.jsdelivr.net/gh/mntn-dev/kbd@0.5.1/kbd.min.js</code><br/>
<code>https://cdn.jsdelivr.net/gh/mntn-dev/kbd@0.5.1/kbd.css</code></details>
<details><summary>License</summary><strong>MIT</strong></details>
