(this.webpackJsonpday4=this.webpackJsonpday4||[]).push([[0],{27:function(e,t,a){e.exports=a(60)},33:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(25),r=a.n(l),o=(a(32),a(10)),s=a(1),m=(a(33),a(9)),i=a(11),u=a.n(i),d=(a(51),n.a.memo((function(e){var t=e.movie,a=Object(s.f)();return n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card",style:{width:"18rem",margin:"auto"}},n.a.createElement("div",{className:"bd-placeholder-img card-img-top",style:{width:"18rem",height:"18rem",overflow:"hidden"}},n.a.createElement("img",{src:t.Poster,style:{width:"18rem"},alt:"Poster"})),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},t.Title),n.a.createElement("p",{className:"card-text"}," Year : ",t.Year," , Type: ",t.Type," "),n.a.createElement("button",{className:"btn btn-primary",style:{fontWeight:700,fontFamily:"roboto"},onClick:function(){a.push("/details/".concat(t.imdbID))}},"View"))),n.a.createElement("br",null))})));a(57);function E(e){var t=e.elements||[],a=e.component;return n.a.createElement("div",{className:"row"},t.map((function(e){return t=e,n.a.createElement(a,{movie:t,key:t.imdbID});var t})))}a(58);function f(e){var t=e.value;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"background"},n.a.createElement("input",{className:"search clear-margin-top",type:"text",placeholder:"Search for movies or web series ",value:t,onChange:function(t){return e.onChange(t.target.value)}}),n.a.createElement("button",{className:"btn btn-success clear-margin-top",onClick:function(){return e.onSubmit(t)}},"Search")),n.a.createElement("div",{class:"bg"}))}var h={headers:{"Access-Control-Allow-Origin":"*"}};function p(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(c.useState)([]),o=Object(m.a)(r,2),s=o[0],i=o[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{value:a,onChange:l,onSubmit:function(e){var t="".concat("/","omdb?title=").concat(e);u.a.get(t,h).then((function(e){return function(e){e&&e.data&&e.data.Search instanceof Array&&i(e.data.Search)}(e)})).catch((function(e){return console.error(e)}))}}),n.a.createElement("br",null),n.a.createElement(E,{elements:s,component:d}))}a(59);function b(){var e=Object(s.g)(),t=Object(c.useState)(""),a=Object(m.a)(t,2),l=a[0],r=a[1],o="".concat("/","omdb/imdb/").concat(e.imdbID);return Object(c.useEffect)((function(){u.a.get(o,h).then((function(e){console.log(e.data),r(e.data)})).catch((function(e){console.error(e)}))}),[o]),""!==l?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"main11"},n.a.createElement("section",{className:"row-alt"},n.a.createElement("div",{className:"lead container"},n.a.createElement("h1",null,l.Title),n.a.createElement("img",{src:l.Poster,alt:"poster"}),n.a.createElement("p",{className:"data"},l.Plot))),n.a.createElement("section",{className:"row"},n.a.createElement("div",{className:"container"},n.a.createElement("table",{className:"extra1"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Cast"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Actors),n.a.createElement("th",{scope:"row"},"Released"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Released)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Director"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Director),n.a.createElement("th",{scope:"row"},"IMDB Rating"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.imdbRating)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Genre"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Genre),n.a.createElement("th",{scope:"row"},"IMDB Votes"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.imdbVotes)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Language"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Language),n.a.createElement("th",{scope:"row"},"BoxOffice"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.BoxOffice)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Country"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Country),n.a.createElement("th",{scope:"row"},"Awards"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Awards)))),n.a.createElement("table",{className:"extra2"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Actors"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Actors)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Released"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Released)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Director"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Director)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"IMDB Rating"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.imdbRating)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Genre"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Genre)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"IMDB Votes"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.imdbVotes)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Language"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Language)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"BoxOffice"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.BoxOffice)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Country"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Country)),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"Awards"),n.a.createElement("td",{className:"schedule-offset",colSpan:"2"},l.Awards)))))))):n.a.createElement(n.a.Fragment,null)}var g=function(){return n.a.createElement("div",{className:"container-fluid remove-padding"},n.a.createElement(o.a,null,n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/search",component:p}),n.a.createElement(s.a,{path:"/details/:imdbID",component:b}),n.a.createElement(s.a,{path:"/*",component:p}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.19cad321.chunk.js.map