(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),i=a(3),o=a(5),s=a(6),g=a(8),h=a(7),u=a(1),m=a(9),d=(a(16),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(g.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){0!=e.state.gamertag.length&&e.setState({gamertag:""}),e.setState({input:t.target.value})},e.handleClick=function(t){var a=0===e.state.gamertag.length||"1"===t.target.id?e.state.input:e.state.gamertag;a=a.toLowerCase();var n=["69","420"][Math.round(0+1*Math.random())];a="xxx"+n+a+n+"xxx";for(var r=1,l="";r<a.length;)l+=a[r-1]+a[r].toUpperCase(),r+=2;r===a.length&&(l+=a[r-1]),e.setState({gamertag:l})},e.handleClick=e.handleClick.bind(Object(u.a)(e)),e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.state={gamertag:"",input:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t;return 0!=this.state.gamertag.length&&(t=r.a.createElement("button",{onClick:this.handleClick,className:"xboxifyAgain"},"Make it more Xboxified!")),r.a.createElement("div",null,r.a.createElement("input",(e={type:"text",onChange:this.handleChange,placeholder:"Enter Gamertag"},Object(i.a)(e,"type","text"),Object(i.a)(e,"className","inputBox"),e)),r.a.createElement("button",{id:"1",onClick:this.handleClick,className:"xboxify"},"Xboxify!"),r.a.createElement("span",{className:"gamertag"},this.state.gamertag),t)}}]),t}(r.a.Component));a(17);var b=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"Header"},"Xbox Gamertag Generator"),r.a.createElement(d,null))};c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.3bb6a33b.chunk.js.map