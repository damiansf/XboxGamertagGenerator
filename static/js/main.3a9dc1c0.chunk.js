(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),i=a.n(l),c=a(4),o=a(5),h=a(6),g=a(8),u=a(7),s=a(1),d=a(9),m=(a(16),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(g.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){0!=e.state.gamertag.length&&e.setState({gamertag:""}),e.setState({input:t.target.value})},e.handleClick=function(t){var a=0===e.state.gamertag.length||"1"===t.target.id?e.state.input:e.state.gamertag;a=a.toLowerCase();var n=["69","420"][Math.round(0+1*Math.random())];a="xxx"+n+a+n+"xxx";for(var r=1,l="";r<a.length;)l+=a[r-1]+a[r].toUpperCase(),r+=2;r===a.length&&(l+=a[r-1]),e.setState({gamertag:l})},e.handleClick=e.handleClick.bind(Object(s.a)(e)),e.handleChange=e.handleChange.bind(Object(s.a)(e)),e.state={gamertag:"",input:""},e}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e;return 0!=this.state.gamertag.length&&(e=r.a.createElement("button",{onClick:this.handleClick},"Make it more Xboxified!")),r.a.createElement("div",null,r.a.createElement("input",Object(c.a)({type:"text",onChange:this.handleChange,placeholder:"Enter Gamertag"},"type","text")),r.a.createElement("button",{id:"1",onClick:this.handleClick},"Xboxify!"),r.a.createElement("span",null,this.state.gamertag),e)}}]),t}(r.a.Component));a(17);var b=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"Header"},"Xbox Gamertag Generator"),r.a.createElement(m,null))};i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.3a9dc1c0.chunk.js.map