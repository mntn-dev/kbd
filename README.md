<img src="https://mntn-dev.github.io/kbd/kbd.gif" alt="$.kbd"/>


# Usage

<pre>
&lt;link href="kbd.css" rel="stylesheet"/&gt;
...
&lt;script src="jquery.js"&gt;&lt;/script&gt;
&lt;script src="kbd.(min.)js"&gt;&lt;/script&gt;
</pre>

<pre>
$.kbd({
 white:false, // keyboard theme (def.: false(=black))
 qwertz:false, // layout (def.: false(=qwerty))
 hidden:false, // just init, don't show
 input:function(char){[...]}, // input callback
 coffee:false // coffee splash? (white theme)
});


Methods:
--------

$.kbd.show()
$.kbd.hide() 

$.kbd.white([true]) // white theme
$.kbd.white(false) // black

$.kbd.caps(true) // permanent caps (triggers <em>longpress</em>)
$.kbd.caps(false) // unset caps
$.kbd.caps() // toggles caps

$.kbd.alt(true) // ABC->123 
$.kbd.alt(false) // 123->ABC
$.kbd.alt() // toggles ABC/123

Vars:
-----

$.OK // Return/Enter
$.BS // Backspace

</pre>

# Docs/demos
<a href="https://mntn-dev.github.io/kbd/" target="_blank">https://mntn-dev.github.io/kbd/</a><br/>
<a href="https://rawgit.com/mntn-dev/kbd/master/demo.htm" target="_blank">@demo.htm</a>


# License
MIT
