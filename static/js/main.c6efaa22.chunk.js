(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),i=a(4),o=a(5),g=a(6),h=a(8),u=a(7),s=a(1),m=a(9),d=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){0!=e.state.gamertag.length&&e.setState({gamertag:""}),e.setState({input:t.target.value})},e.handleClick=function(t){var a=0===e.state.gamertag.length?e.state.input:e.state.gamertag;a="xxx"+(a=a.toLowerCase())+["69","420"][Math.round(0+1*Math.random())]+"xxx";for(var n=1,r="";n<a.length;)r+=a[n-1]+a[n].toUpperCase(),n+=2;n===a.length&&(r+=a[n-1]),e.setState({gamertag:r,input:""})},e.handleClick=e.handleClick.bind(Object(s.a)(e)),e.handleChange=e.handleChange.bind(Object(s.a)(e)),e.state={gamertag:"",input:""},e}return Object(m.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e;return 0!=this.state.gamertag.length&&(e=r.a.createElement("button",{onClick:this.handleClick},"Make it more Xboxified!")),r.a.createElement("div",null,r.a.createElement("p",null,"Enter a gamertag"),r.a.createElement("input",Object(i.a)({type:"text",onKeyDown:this.handleChange,placeholder:"Enter Gamertag"},"type","text")),r.a.createElement("button",{onClick:this.handleClick},"Xboxify!"),r.a.createElement("span",null,this.state.gamertag),e)}}]),t}(r.a.Component);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};c.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c6efaa22.chunk.js.map