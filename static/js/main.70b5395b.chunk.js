(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),i=a(4),o=a(5),h=a(6),u=a(8),d=a(7),m=a(1),s=a(9),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).handleChange=function(t){e.setState({gamertag:t.target.value})},e.handleClick=function(t){var a=e.state.gamertag;a="xxx"+a+["69","420"][Math.round(0+1*Math.random())]+"xxx";for(var n=1,r="";n<a.length;)r+=a[n-1]+a[n].toUpperCase(),n+=2;n===a.length&&(r+=a[n-1]),e.setState({gamertag:r})},e.handleClick=e.handleClick.bind(Object(m.a)(e)),e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.state={gamertag:""},e}return Object(s.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Enter a gamertag"),r.a.createElement("input",Object(i.a)({type:"text",onKeyDown:this.handleChange,placeholder:"Enter Gamertag"},"type","text")),r.a.createElement("button",{onclick:this.handleClick},"Xboxify!"),r.a.createElement("span",null,this.state.gamertag),r.a.createElement("button",{onclick:this.handleClick},"Make it more Xboxified!"))}}]),t}(r.a.Component);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))};c.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.70b5395b.chunk.js.map