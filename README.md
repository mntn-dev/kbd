<img src="https://mntn-dev.github.io/kbd/kbd.gif" alt="$.kbd"/>

# Usage

```js

/*

<link href="kbd.css" rel="stylesheet"/>
...
<script src="jquery.js"></script>
<script src="kbd.js"></script>

*/

$(function(){

 $.kbd({
  white:false, // keyboard theme (def.: false(=black))
  qwertz:false, // layout (def.: false(=qwerty))
  hidden:false, // just init, don't show
  input:function(char){[...]}, // input callback
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

```

<img src="https://mntn-dev.github.io/kbd/kbd-w.png" alt="$.kbd"/>


# Docs/demos
* <a href="https://mntn-dev.github.io/kbd/" target="_blank">https://mntn-dev.github.io/kbd/</a><br/>
* <a href="https://rawgit.com/mntn-dev/kbd/master/demo.htm" target="_blank">@demo.htm</a>
* <a href="https://rawgit.com/mntn-dev/kbd/master/demo-input-elm.htm" target="_blank">@demo-input-elm.htm</a>


# License
MIT
