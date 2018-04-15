<img src="https://mntn-dev.github.io/kbd/kbd.gif" alt="$.kbd"/>
<img src="https://mntn-dev.github.io/kbd/kbd-w.png" alt="$.kbd"/>


# Usage


&lt;link <a href="https://raw.githubusercontent.com/mntn-dev/kbd/master/kbd.css" tyrget="_blank">kbd.css</a> rel="stylesheet"/&gt;
...
&lt;script src="<a href="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" target="_blank">jquery.js</a>"&gt;&lt;/script&gt;
&lt;script src="<a href="https://raw.githubusercontent.com/mntn-dev/kbd/master/kbd.js" target="_blank">kbd.js</a>"&gt;&lt;/script&gt;



```js
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

/*Vars:
-----*/

$.OK // Return/Enter
$.BS // Backspace

```

# Docs/demos
<a href="https://mntn-dev.github.io/kbd/" target="_blank">https://mntn-dev.github.io/kbd/</a><br/>
<a href="https://rawgit.com/mntn-dev/kbd/master/demo.htm" target="_blank">@demo.htm</a>


# License
MIT
