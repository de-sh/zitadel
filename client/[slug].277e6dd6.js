import{S as e,i as s,s as t,j as l,N as a,k as c,l as n,d as r,O as o,m as i,w as h,a as u,y as f,P as d,o as v,r as g,Q as m,A as p,L as $,E as b,M as E,n as k,q as w,B as z,e as I,F as _,R as x,x as q,b as A,p as D,v as y,z as L,t as j,C,g as N,c as T,D as S,T as V,U as P,V as B,W as O,X as M,Y as U,Z,_ as R,I as F,K,$ as G}from"./client.f62cd179.js";import{L as H}from"./config.956733a8.js";function W(e){let s,t,v;return{c(){s=l("i"),t=a("use"),this.h()},l(e){s=c(e,"I",{class:!0,style:!0});var l=n(s);t=c(l,"use",{"xlink:href":!0},1),n(t).forEach(r),l.forEach(r),this.h()},h(){o(t,"xlink:href",v="#"+e[0]),i(s,"class",e[0]),h(s,"font-size",e[1]),h(s,"height",e[1])},m(e,l){u(e,s,l),f(s,t)},p(e,[l]){1&l&&v!==(v="#"+e[0])&&o(t,"xlink:href",v),1&l&&i(s,"class",e[0]),2&l&&h(s,"font-size",e[1]),2&l&&h(s,"height",e[1])},i:d,o:d,d(e){e&&r(s)}}}function Y(e,s,t){let{name:l}=s,{size:a="20px"}=s;return e.$$set=e=>{"name"in e&&t(0,l=e.name),"size"in e&&t(1,a=e.size)},[l,a]}class Q extends e{constructor(e){super(),s(this,e,Y,W,t,{name:0,size:1})}}function X(e,s,t){const l=e.slice();return l[4]=s[t],l}function J(e){let s,t,a,o,h,d="de"==e[4]?"Deutsch":"English";function $(...s){return e[2](e[4],...s)}return{c(){s=l("button"),t=v(d),this.h()},l(e){s=c(e,"BUTTON",{class:!0});var l=n(s);t=g(l,d),l.forEach(r),this.h()},h(){i(s,"class",a=m(e[4]==e[0]?"current":"")+" svelte-1o03ag4")},m(e,l){u(e,s,l),f(s,t),o||(h=p(s,"click",$),o=!0)},p(s,t){e=s},d(e){e&&r(s),o=!1,h()}}}function ee(e){let s,t=H,a=[];for(let s=0;s<t.length;s+=1)a[s]=J(X(e,t,s));return{c(){s=l("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){s=c(e,"DIV",{class:!0});var t=n(s);for(let e=0;e<a.length;e+=1)a[e].l(t);t.forEach(r),this.h()},h(){i(s,"class","language-switcher svelte-1o03ag4")},m(e,t){u(e,s,t);for(let e=0;e<a.length;e+=1)a[e].m(s,null)},p(e,[l]){if(3&l){let c;for(t=H,c=0;c<t.length;c+=1){const n=X(e,t,c);a[c]?a[c].p(n,l):(a[c]=J(n),a[c].c(),a[c].m(s,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=t.length}},i:d,o:d,d(e){e&&r(s),$(a,e)}}}function se(e,s,t){let l;function a(e){"undefined"!=typeof window&&(E.set(e),location.reload())}b(e,E,(e=>t(3,l=e)));return[l,a,e=>a(e)]}class te extends e{constructor(e){super(),s(this,e,se,ee,t,{})}}var le="ZITADEL Documentation";function ae(e){let s,t,a,o,h,d,p,$,b,E,I,_,x,q,A,D,y,L,j,C,N,T,S,V,P,B,O,M,U,Z,R,F=e[2]("startlink")+"",K=e[2]("integratelink")+"",G=e[2]("administratelink")+"",H=e[2]("developlink")+"",W=e[2]("docslink")+"",Y=e[2]("uselink")+"";return{c(){s=l("div"),t=l("ul"),a=l("li"),o=l("a"),h=v(F),p=k(),$=l("li"),b=l("a"),E=v(K),_=k(),x=l("li"),q=l("a"),A=v(G),y=k(),L=l("li"),j=l("a"),C=v(H),T=k(),S=l("li"),V=l("a"),P=v(W),O=k(),M=l("li"),U=l("a"),Z=v(Y),this.h()},l(e){s=c(e,"DIV",{id:!0,class:!0});var l=n(s);t=c(l,"UL",{class:!0});var i=n(t);a=c(i,"LI",{class:!0});var u=n(a);o=c(u,"A",{href:!0,class:!0});var f=n(o);h=g(f,F),f.forEach(r),u.forEach(r),p=w(i),$=c(i,"LI",{class:!0});var d=n($);b=c(d,"A",{href:!0,class:!0});var v=n(b);E=g(v,K),v.forEach(r),d.forEach(r),_=w(i),x=c(i,"LI",{class:!0});var m=n(x);q=c(m,"A",{href:!0,class:!0});var k=n(q);A=g(k,G),k.forEach(r),m.forEach(r),y=w(i),L=c(i,"LI",{class:!0});var z=n(L);j=c(z,"A",{href:!0,class:!0});var I=n(j);C=g(I,H),I.forEach(r),z.forEach(r),T=w(i),S=c(i,"LI",{class:!0});var D=n(S);V=c(D,"A",{href:!0,class:!0});var N=n(V);P=g(N,W),N.forEach(r),D.forEach(r),O=w(i),M=c(i,"LI",{class:!0});var B=n(M);U=c(B,"A",{href:!0,class:!0});var R=n(U);Z=g(R,Y),R.forEach(r),B.forEach(r),i.forEach(r),l.forEach(r),this.h()},h(){i(o,"href","/start"),i(o,"class","svelte-1ulbqkc"),i(a,"class",d=m("start"==e[0]?"active":"")+" svelte-1ulbqkc"),i(b,"href","/integrate"),i(b,"class","svelte-1ulbqkc"),i($,"class",I=m("integrate"==e[0]?"active":"")+" svelte-1ulbqkc"),i(q,"href","/administrate"),i(q,"class","svelte-1ulbqkc"),i(x,"class",D=m("administrate"==e[0]?"active":"")+" svelte-1ulbqkc"),i(j,"href","/develop"),i(j,"class","svelte-1ulbqkc"),i(L,"class",N=m("develop"==e[0]?"active":"")+" svelte-1ulbqkc"),i(V,"href","/documentation"),i(V,"class","svelte-1ulbqkc"),i(S,"class",B=m("documentation"==e[0]?"active":"")+" svelte-1ulbqkc"),i(U,"href","/use"),i(U,"class","svelte-1ulbqkc"),i(M,"class",R=m("use"==e[0]?"active":"")+" svelte-1ulbqkc"),i(t,"class","svelte-1ulbqkc"),i(s,"id","menu"),i(s,"class","svelte-1ulbqkc")},m(e,l){u(e,s,l),f(s,t),f(t,a),f(a,o),f(o,h),f(t,p),f(t,$),f($,b),f(b,E),f(t,_),f(t,x),f(x,q),f(q,A),f(t,y),f(t,L),f(L,j),f(j,C),f(t,T),f(t,S),f(S,V),f(V,P),f(t,O),f(t,M),f(M,U),f(U,Z)},p(e,s){4&s&&F!==(F=e[2]("startlink")+"")&&z(h,F),1&s&&d!==(d=m("start"==e[0]?"active":"")+" svelte-1ulbqkc")&&i(a,"class",d),4&s&&K!==(K=e[2]("integratelink")+"")&&z(E,K),1&s&&I!==(I=m("integrate"==e[0]?"active":"")+" svelte-1ulbqkc")&&i($,"class",I),4&s&&G!==(G=e[2]("administratelink")+"")&&z(A,G),1&s&&D!==(D=m("administrate"==e[0]?"active":"")+" svelte-1ulbqkc")&&i(x,"class",D),4&s&&H!==(H=e[2]("developlink")+"")&&z(C,H),1&s&&N!==(N=m("develop"==e[0]?"active":"")+" svelte-1ulbqkc")&&i(L,"class",N),4&s&&W!==(W=e[2]("docslink")+"")&&z(P,W),1&s&&B!==(B=m("documentation"==e[0]?"active":"")+" svelte-1ulbqkc")&&i(S,"class",B),4&s&&Y!==(Y=e[2]("uselink")+"")&&z(Z,Y),1&s&&R!==(R=m("use"==e[0]?"active":"")+" svelte-1ulbqkc")&&i(M,"class",R)},d(e){e&&r(s)}}}function ce(e){let s,t,a;return{c(){s=l("div"),this.h()},l(e){s=c(e,"DIV",{class:!0}),n(s).forEach(r),this.h()},h(){i(s,"class","modal-background svelte-1ulbqkc")},m(l,c){u(l,s,c),t||(a=p(s,"click",e[4]),t=!0)},p:d,d(e){e&&r(s),t=!1,a()}}}function ne(e){let s,t,a,o,h,m,$,b,E,_,x,q,A,D,y,L,j,C,N,T,S,V=e[2]("references")+"",P=e[1]&&ae(e),B=e[1]&&ce(e);return{c(){s=l("div"),t=l("a"),a=l("img"),h=k(),m=l("span"),$=k(),b=l("div"),E=l("button"),_=l("i"),x=l("span"),q=v(V),A=k(),D=l("div"),P&&P.c(),y=k(),L=l("a"),j=v("More about ZITADEL"),C=k(),B&&B.c(),N=I(),this.h()},l(e){s=c(e,"DIV",{class:!0});var l=n(s);t=c(l,"A",{class:!0,href:!0});var o=n(t);a=c(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(r),h=w(l),m=c(l,"SPAN",{class:!0}),n(m).forEach(r),$=w(l),b=c(l,"DIV",{class:!0});var i=n(b);E=c(i,"BUTTON",{class:!0});var u=n(E);_=c(u,"I",{class:!0}),n(_).forEach(r),x=c(u,"SPAN",{class:!0});var f=n(x);q=g(f,V),f.forEach(r),u.forEach(r),A=w(i),D=c(i,"DIV",{class:!0});var d=n(D);P&&P.l(d),d.forEach(r),i.forEach(r),y=w(l),L=c(l,"A",{class:!0,href:!0,target:!0});var v=n(L);j=g(v,"More about ZITADEL"),v.forEach(r),l.forEach(r),C=w(e),B&&B.l(e),N=I(),this.h()},h(){a.src!==(o="logos/zitadel-logo-solo-darkdesign.svg")&&i(a,"src","logos/zitadel-logo-solo-darkdesign.svg"),i(a,"alt","zitadel logo"),i(a,"class","svelte-1ulbqkc"),i(t,"class","home svelte-1ulbqkc"),i(t,"href","."),i(m,"class","fill-space svelte-1ulbqkc"),i(_,"class","las la-bars svelte-1ulbqkc"),i(x,"class","svelte-1ulbqkc"),i(E,"class","list-item svelte-1ulbqkc"),i(D,"class","wrapper svelte-1ulbqkc"),i(b,"class","btn-wrapper svelte-1ulbqkc"),i(L,"class","list-item svelte-1ulbqkc"),i(L,"href","https://zitadel.ch"),i(L,"target","_blank"),i(s,"class","content svelte-1ulbqkc")},m(l,c){u(l,s,c),f(s,t),f(t,a),f(s,h),f(s,m),f(s,$),f(s,b),f(b,E),f(E,_),f(E,x),f(x,q),f(b,A),f(b,D),P&&P.m(D,null),f(s,y),f(s,L),f(L,j),u(l,C,c),B&&B.m(l,c),u(l,N,c),T||(S=p(E,"click",e[3]),T=!0)},p(e,[s]){4&s&&V!==(V=e[2]("references")+"")&&z(q,V),e[1]?P?P.p(e,s):(P=ae(e),P.c(),P.m(D,null)):P&&(P.d(1),P=null),e[1]?B?B.p(e,s):(B=ce(e),B.c(),B.m(N.parentNode,N)):B&&(B.d(1),B=null)},i:d,o:d,d(e){e&&r(s),P&&P.d(),e&&r(C),B&&B.d(e),e&&r(N),T=!1,S()}}}function re(e,s,t){let l;b(e,_,(e=>t(2,l=e)));const{page:a}=x();let c=!1,{slug:n}=s;a.subscribe((()=>{t(1,c=!1)}));return e.$$set=e=>{"slug"in e&&t(0,n=e.slug)},[n,c,l,()=>t(1,c=!c),()=>t(1,c=!1)]}class oe extends e{constructor(e){super(),s(this,e,re,ne,t,{slug:0})}}function ie(e,s,t){const l=e.slice();return l[12]=s[t],l}function he(e,s,t){const l=e.slice();return l[9]=s[t],l}function ue(e){let s,t,a;return t=new Q({props:{name:"las la-arrow-right"}}),{c(){s=l("div"),D(t.$$.fragment),this.h()},l(e){s=c(e,"DIV",{class:!0});var l=n(s);y(t.$$.fragment,l),l.forEach(r),this.h()},h(){i(s,"class","icon-container svelte-1olew8p")},m(e,l){u(e,s,l),L(t,s,null),a=!0},i(e){a||(A(t.$$.fragment,e),a=!0)},o(e){j(t.$$.fragment,e),a=!1},d(e){e&&r(s),C(t)}}}function fe(e){let s,t,a;return t=new Q({props:{name:"las la-arrow-right"}}),{c(){s=l("div"),D(t.$$.fragment),this.h()},l(e){s=c(e,"DIV",{class:!0});var l=n(s);y(t.$$.fragment,l),l.forEach(r),this.h()},h(){i(s,"class","icon-container svelte-1olew8p")},m(e,l){u(e,s,l),L(t,s,null),a=!0},i(e){a||(A(t.$$.fragment,e),a=!0)},o(e){j(t.$$.fragment,e),a=!1},d(e){e&&r(s),C(t)}}}function de(e){let s,t,a,o,h,d,v=e[12].title+"",g=e[12].slug===e[3]&&fe();return{c(){s=l("a"),a=k(),g&&g.c(),this.h()},l(e){s=c(e,"A",{class:!0,href:!0,"data-level":!0});var t=n(s);a=w(t),g&&g.l(t),t.forEach(r),this.h()},h(){t=new P(a),i(s,"class","subsection svelte-1olew8p"),i(s,"href",o=e[1]+"#"+e[12].slug),i(s,"data-level",h=e[12].level),q(s,"active",e[12].slug===e[3])},m(e,l){u(e,s,l),t.m(v,s),f(s,a),g&&g.m(s,null),d=!0},p(e,l){(!d||4&l)&&v!==(v=e[12].title+"")&&t.p(v),e[12].slug===e[3]?g?12&l&&A(g,1):(g=fe(),g.c(),A(g,1),g.m(s,null)):g&&(N(),j(g,1,1,(()=>{g=null})),T()),(!d||6&l&&o!==(o=e[1]+"#"+e[12].slug))&&i(s,"href",o),(!d||4&l&&h!==(h=e[12].level))&&i(s,"data-level",h),12&l&&q(s,"active",e[12].slug===e[3])},i(e){d||(A(g),d=!0)},o(e){j(g),d=!1},d(e){e&&r(s),g&&g.d()}}}function ve(e){let s,t,a,o,h,d,v,g,m=e[9].metadata.title+"",p=e[9].slug===e[3]&&ue(),b=e[9].subsections,E=[];for(let s=0;s<b.length;s+=1)E[s]=de(ie(e,b,s));const z=e=>j(E[e],1,1,(()=>{E[e]=null}));return{c(){s=l("li"),t=l("a"),o=k(),p&&p.c(),d=k();for(let e=0;e<E.length;e+=1)E[e].c();v=k(),this.h()},l(e){s=c(e,"LI",{class:!0});var l=n(s);t=c(l,"A",{class:!0,href:!0});var a=n(t);o=w(a),p&&p.l(a),a.forEach(r),d=w(l);for(let e=0;e<E.length;e+=1)E[e].l(l);v=w(l),l.forEach(r),this.h()},h(){a=new P(o),i(t,"class","section svelte-1olew8p"),i(t,"href",h=e[1]+"#"+e[9].slug),q(t,"active",e[9].slug===e[3]),i(s,"class","svelte-1olew8p")},m(e,l){u(e,s,l),f(s,t),a.m(m,t),f(t,o),p&&p.m(t,null),f(s,d);for(let e=0;e<E.length;e+=1)E[e].m(s,null);f(s,v),g=!0},p(e,l){if((!g||4&l)&&m!==(m=e[9].metadata.title+"")&&a.p(m),e[9].slug===e[3]?p?12&l&&A(p,1):(p=ue(),p.c(),A(p,1),p.m(t,null)):p&&(N(),j(p,1,1,(()=>{p=null})),T()),(!g||6&l&&h!==(h=e[1]+"#"+e[9].slug))&&i(t,"href",h),12&l&&q(t,"active",e[9].slug===e[3]),14&l){let t;for(b=e[9].subsections,t=0;t<b.length;t+=1){const a=ie(e,b,t);E[t]?(E[t].p(a,l),A(E[t],1)):(E[t]=de(a),E[t].c(),A(E[t],1),E[t].m(s,v))}for(N(),t=b.length;t<E.length;t+=1)z(t);T()}},i(e){if(!g){A(p);for(let e=0;e<b.length;e+=1)A(E[e]);g=!0}},o(e){j(p),E=E.filter(Boolean);for(let e=0;e<E.length;e+=1)j(E[e]);g=!1},d(e){e&&r(s),p&&p.d(),$(E,e)}}}function ge(e){let s,t,a,o,h=e[2],f=[];for(let s=0;s<h.length;s+=1)f[s]=ve(he(e,h,s));const d=e=>j(f[e],1,1,(()=>{f[e]=null}));return{c(){s=l("ul");for(let e=0;e<f.length;e+=1)f[e].c();this.h()},l(e){s=c(e,"UL",{class:!0});var t=n(s);for(let e=0;e<f.length;e+=1)f[e].l(t);t.forEach(r),this.h()},h(){i(s,"class","reference-toc svelte-1olew8p")},m(l,c){u(l,s,c);for(let e=0;e<f.length;e+=1)f[e].m(s,null);e[6](s),t=!0,a||(o=[p(s,"mouseenter",e[7]),p(s,"mouseleave",e[8])],a=!0)},p(e,[t]){if(14&t){let l;for(h=e[2],l=0;l<h.length;l+=1){const a=he(e,h,l);f[l]?(f[l].p(a,t),A(f[l],1)):(f[l]=ve(a),f[l].c(),A(f[l],1),f[l].m(s,null))}for(N(),l=h.length;l<f.length;l+=1)d(l);T()}},i(e){if(!t){for(let e=0;e<h.length;e+=1)A(f[e]);t=!0}},o(e){f=f.filter(Boolean);for(let e=0;e<f.length;e+=1)j(f[e]);t=!1},d(t){t&&r(s),$(f,t),e[6](null),a=!1,S(o)}}}function me(e,s,t){let l,{dir:a=""}=s,{sections:c=[]}=s,{active_section:n=null}=s,{show_contents:r}=s,{prevent_sidebar_scroll:o=!1}=s;V((()=>{if(o||r&&window.innerWidth<832)return;const e=l.querySelector(".active");if(e){const{top:s,bottom:t}=e.getBoundingClientRect(),a=200,c=window.innerHeight-200;s>c?l.parentNode.scrollBy({top:s-c,left:0,behavior:"smooth"}):t<a&&l.parentNode.scrollBy({top:t-a,left:0,behavior:"smooth"})}}));return e.$$set=e=>{"dir"in e&&t(1,a=e.dir),"sections"in e&&t(2,c=e.sections),"active_section"in e&&t(3,n=e.active_section),"show_contents"in e&&t(5,r=e.show_contents),"prevent_sidebar_scroll"in e&&t(0,o=e.prevent_sidebar_scroll)},[o,a,c,n,l,r,function(e){B[e?"unshift":"push"]((()=>{l=e,t(4,l)}))},()=>t(0,o=!0),()=>t(0,o=!1)]}class pe extends e{constructor(e){super(),s(this,e,me,ge,t,{dir:1,sections:2,active_section:3,show_contents:5,prevent_sidebar_scroll:0})}}function $e(e,s,t){const l=e.slice();return l[11]=s[t],l[13]=t,l}function be(e){let s,t,a=e[11].slug+"";return{c(){s=l("p"),t=v(a),this.h()},l(e){s=c(e,"P",{class:!0});var l=n(s);t=g(l,a),l.forEach(r),this.h()},h(){i(s,"class","title svelte-1rbeejz")},m(e,l){u(e,s,l),f(s,t)},p(e,s){2&s&&a!==(a=e[11].slug+"")&&z(t,a)},d(e){e&&r(s)}}}function Ee(e){let s,t,a,o,h=e[11].title+"",d=e[11].parent+"";return{c(){s=l("p"),t=v(h),a=l("span"),o=v(d),this.h()},l(e){s=c(e,"P",{class:!0});var l=n(s);t=g(l,h),a=c(l,"SPAN",{class:!0});var i=n(a);o=g(i,d),i.forEach(r),l.forEach(r),this.h()},h(){i(a,"class","second-param svelte-1rbeejz"),i(s,"class","title svelte-1rbeejz")},m(e,l){u(e,s,l),f(s,t),f(s,a),f(a,o)},p(e,s){2&s&&h!==(h=e[11].title+"")&&z(t,h),2&s&&d!==(d=e[11].parent+"")&&z(o,d)},d(e){e&&r(s)}}}function ke(e){let s,t,a,o,d,m,$,b,E,I,_,x,q,A,D,y,L,j=e[11].slug+"",C=(e[11].html||e[11].slug)+"";function N(e,s){return e[11].level>2?Ee:be}let T=N(e),S=T(e);return{c(){s=l("a"),t=l("div"),S.c(),a=k(),o=l("p"),d=v(e[0]),m=v("#"),$=v(j),b=k(),E=l("p"),I=v(C),_=k(),x=l("i"),q=k(),this.h()},l(l){s=c(l,"A",{tabindex:!0,class:!0,href:!0,id:!0});var i=n(s);t=c(i,"DIV",{class:!0});var h=n(t);S.l(h),a=w(h),o=c(h,"P",{class:!0,style:!0});var u=n(o);d=g(u,e[0]),m=g(u,"#"),$=g(u,j),u.forEach(r),b=w(h),E=c(h,"P",{class:!0});var f=n(E);I=g(f,C),f.forEach(r),h.forEach(r),_=w(i),x=c(i,"I",{class:!0}),n(x).forEach(r),q=w(i),i.forEach(r),this.h()},h(){i(o,"class","desc svelte-1rbeejz"),h(o,"color","#85d996"),i(E,"class","desc svelte-1rbeejz"),i(t,"class","text svelte-1rbeejz"),i(x,"class","las la-link svelte-1rbeejz"),i(s,"tabindex","0"),i(s,"class","result-item svelte-1rbeejz"),i(s,"href",A=e[0]+"#"+e[11].slug),i(s,"id",D=e[13])},m(l,c){u(l,s,c),f(s,t),S.m(t,null),f(t,a),f(t,o),f(o,d),f(o,m),f(o,$),f(t,b),f(t,E),f(E,I),f(s,_),f(s,x),f(s,q),y||(L=p(s,"click",e[5]),y=!0)},p(e,l){T===(T=N(e))&&S?S.p(e,l):(S.d(1),S=T(e),S&&(S.c(),S.m(t,a))),1&l&&z(d,e[0]),2&l&&j!==(j=e[11].slug+"")&&z($,j),2&l&&C!==(C=(e[11].html||e[11].slug)+"")&&z(I,C),3&l&&A!==(A=e[0]+"#"+e[11].slug)&&i(s,"href",A)},d(e){e&&r(s),S.d(),y=!1,L()}}}function we(e){let s,t,a,o,h,m,b,E,I,_,x,q,A,D,y,L,j,C=e[3]("search_results")+"",N=e[1],T=[];for(let s=0;s<N.length;s+=1)T[s]=ke($e(e,N,s));return{c(){s=l("div"),t=k(),a=l("div"),o=l("div"),h=l("i"),m=k(),b=l("input"),_=k(),x=l("p"),q=v(C),A=v(":"),D=k(),y=l("div");for(let e=0;e<T.length;e+=1)T[e].c();this.h()},l(e){s=c(e,"DIV",{class:!0}),n(s).forEach(r),t=w(e),a=c(e,"DIV",{class:!0});var l=n(a);o=c(l,"DIV",{class:!0});var i=n(o);h=c(i,"I",{class:!0}),n(h).forEach(r),m=w(i),b=c(i,"INPUT",{placeholder:!0,class:!0}),i.forEach(r),_=w(l),x=c(l,"P",{class:!0});var u=n(x);q=g(u,C),A=g(u,":"),u.forEach(r),D=w(l),y=c(l,"DIV",{tabindex:!0,class:!0});var f=n(y);for(let e=0;e<T.length;e+=1)T[e].l(f);f.forEach(r),l.forEach(r),this.h()},h(){i(s,"class","overlay svelte-1rbeejz"),i(h,"class","las la-search svelte-1rbeejz"),i(b,"placeholder",E=e[3]("search_input_placeholder")),i(b,"class","svelte-1rbeejz"),i(o,"class","search-line svelte-1rbeejz"),i(x,"class","result-d svelte-1rbeejz"),i(y,"tabindex","-1"),i(y,"class","result-list svelte-1rbeejz"),i(a,"class","search-field svelte-1rbeejz")},m(l,c){u(l,s,c),u(l,t,c),u(l,a,c),f(a,o),f(o,h),f(o,m),f(o,b),O(b,e[2]),f(a,_),f(a,x),f(x,q),f(x,A),f(a,D),f(a,y);for(let e=0;e<T.length;e+=1)T[e].m(y,null);L||(j=[p(window,"keydown",e[4]),p(s,"click",e[5]),p(b,"input",e[7]),M(I=ze.call(null,b))],L=!0)},p(e,[s]){if(8&s&&E!==(E=e[3]("search_input_placeholder"))&&i(b,"placeholder",E),4&s&&b.value!==e[2]&&O(b,e[2]),8&s&&C!==(C=e[3]("search_results")+"")&&z(q,C),35&s){let t;for(N=e[1],t=0;t<N.length;t+=1){const l=$e(e,N,t);T[t]?T[t].p(l,s):(T[t]=ke(l),T[t].c(),T[t].m(y,null))}for(;t<T.length;t+=1)T[t].d(1);T.length=N.length}},i:d,o:d,d(e){e&&r(s),e&&r(t),e&&r(a),$(T,e),L=!1,S(j)}}}function ze(e){e.focus()}function Ie(e,s,t){let l;b(e,_,(e=>t(3,l=e)));let{sections:a}=s,{slug:c}=s,n=[],r=0;const o=U();let i="";return e.$$set=e=>{"sections"in e&&t(6,a=e.sections),"slug"in e&&t(0,c=e.slug)},e.$$.update=()=>{256&e.$$.dirty&&function(e){console.log(e);const s=document.getElementById(e);s&&(console.log("focus: "+s),s.focus())}(r),4&e.$$.dirty&&function(e){const s=e.toLowerCase(),l=a.filter((e=>{const t=e.slug.toLowerCase().includes(s),l=e.html.replace(/<[^>]*>?/gm,"").toLowerCase().includes(s);return t||l})).map((e=>({title:e.slug,slug:e.slug}))),c=a.map((e=>e.subsections.map((s=>({parent:e.slug,...s}))))).flat().filter((e=>{if(e.slug){const t=e.slug.toLowerCase().includes(s),l=e.title.toLowerCase().includes(s);return t||l}}));t(1,n=l.concat(c)),console.log(n)}(i)},[c,n,i,l,function(e){console.log(e),e&&(37==e.keyCode||38==e.keyCode?r>0&&(e.preventDefault(),t(8,r--,r)):39!=e.keyCode&&40!=e.keyCode||(e.preventDefault(),t(8,r++,r)))},function(){o("close",{closed:!0})},a,function(){i=this.value,t(2,i)}]}class _e extends e{constructor(e){super(),s(this,e,Ie,we,t,{sections:6,slug:0})}}function xe(e){let s,t,a,o,h,m,$,b,E,I,_,x,q,A=e[1]("search_button_holder")+"",D=(e[0]||"Ctrl")+"";return{c(){s=l("button"),t=l("i"),a=k(),o=l("span"),h=v(A),m=k(),$=l("span"),b=k(),E=l("span"),I=v(D),_=v(" F"),this.h()},l(e){s=c(e,"BUTTON",{class:!0});var l=n(s);t=c(l,"I",{class:!0}),n(t).forEach(r),a=w(l),o=c(l,"SPAN",{class:!0});var i=n(o);h=g(i,A),i.forEach(r),m=w(l),$=c(l,"SPAN",{class:!0}),n($).forEach(r),b=w(l),E=c(l,"SPAN",{class:!0});var u=n(E);I=g(u,D),_=g(u," F"),u.forEach(r),l.forEach(r),this.h()},h(){i(t,"class","las la-search svelte-5en90e"),i(o,"class","svelte-5en90e"),i($,"class","fill-space svelte-5en90e"),i(E,"class","strg svelte-5en90e"),i(s,"class","search-trigger svelte-5en90e")},m(l,c){u(l,s,c),f(s,t),f(s,a),f(s,o),f(o,h),f(s,m),f(s,$),f(s,b),f(s,E),f(E,I),f(E,_),x||(q=p(s,"click",e[2]),x=!0)},p(e,[s]){2&s&&A!==(A=e[1]("search_button_holder")+"")&&z(h,A),1&s&&D!==(D=(e[0]||"Ctrl")+"")&&z(I,D)},i:d,o:d,d(e){e&&r(s),x=!1,q()}}}function qe(e,s,t){let l;b(e,_,(e=>t(1,l=e)));let a="";return Z((()=>{t(0,a=navigator.platform.indexOf("Mac")>-1?"Cmd":"Ctrl")})),[a,l,function(s){R(e,s)}]}class Ae extends e{constructor(e){super(),s(this,e,qe,xe,t,{})}}const{window:De}=F;function ye(e,s,t){const l=e.slice();return l[17]=s[t],l}function Le(e){let s,t,a,o,h,d,v,g,m,p,$,b,E,z,I,_,x,q,N,T=e[17].metadata.title+"",S=e[17].html+"";return E=new Q({props:{name:"las la-external-link-alt",size:"24px"}}),{c(){s=l("section"),t=l("h2"),a=l("span"),h=k(),d=l("a"),g=k(),p=k(),$=l("small"),b=l("a"),D(E.$$.fragment),I=k(),x=k(),this.h()},l(e){s=c(e,"SECTION",{"data-id":!0,class:!0});var l=n(s);t=c(l,"H2",{class:!0});var o=n(t);a=c(o,"SPAN",{class:!0,id:!0}),n(a).forEach(r),h=w(o),d=c(o,"A",{href:!0,class:!0,"aria-hidden":!0}),n(d).forEach(r),g=w(o),p=w(o),$=c(o,"SMALL",{class:!0});var i=n($);b=c(i,"A",{href:!0,title:!0,class:!0});var u=n(b);y(E.$$.fragment,u),u.forEach(r),i.forEach(r),o.forEach(r),I=w(l),x=w(l),l.forEach(r),this.h()},h(){i(a,"class","offset-anchor"),i(a,"id",o=e[17].slug),i(d,"href",v=e[3]+"#"+e[17].slug),i(d,"class","anchor"),i(d,"aria-hidden",""),m=new P(p),i(b,"href",z="https://github.com/"+e[0]+"/"+e[2]+"/edit/master/site/"+e[1]+"/"+e[3]+"/"+e[17].file),i(b,"title",e[4]),i(b,"class","svelte-1x6e6fz"),i($,"class","svelte-1x6e6fz"),i(t,"class","svelte-1x6e6fz"),_=new P(x),i(s,"data-id",q=e[17].slug),i(s,"class","svelte-1x6e6fz")},m(e,l){u(e,s,l),f(s,t),f(t,a),f(t,h),f(t,d),f(t,g),m.m(T,t),f(t,p),f(t,$),f($,b),L(E,b,null),f(s,I),_.m(S,s),f(s,x),N=!0},p(e,t){(!N||32&t&&o!==(o=e[17].slug))&&i(a,"id",o),(!N||40&t&&v!==(v=e[3]+"#"+e[17].slug))&&i(d,"href",v),(!N||32&t)&&T!==(T=e[17].metadata.title+"")&&m.p(T),(!N||47&t&&z!==(z="https://github.com/"+e[0]+"/"+e[2]+"/edit/master/site/"+e[1]+"/"+e[3]+"/"+e[17].file))&&i(b,"href",z),(!N||16&t)&&i(b,"title",e[4]),(!N||32&t)&&S!==(S=e[17].html+"")&&_.p(S),(!N||32&t&&q!==(q=e[17].slug))&&i(s,"data-id",q)},i(e){N||(A(E.$$.fragment,e),N=!0)},o(e){j(E.$$.fragment,e),N=!1},d(e){e&&r(s),C(E)}}}function je(e){let s,t;return s=new _e({props:{sections:e[5],slug:e[3]}}),s.$on("close",e[11]),{c(){D(s.$$.fragment)},l(e){y(s.$$.fragment,e)},m(e,l){L(s,e,l),t=!0},p(e,t){const l={};32&t&&(l.sections=e[5]),8&t&&(l.slug=e[3]),s.$set(l)},i(e){t||(A(s.$$.fragment,e),t=!0)},o(e){j(s.$$.fragment,e),t=!1},d(e){C(s,e)}}}function Ce(e){let s,t,a,o,h,d,m,b,E,z,_,x,V,P,B,O,M,U,Z,R,F,K,G,H,W=e[5],Y=[];for(let s=0;s<W.length;s+=1)Y[s]=Le(ye(e,W,s));const X=e=>j(Y[e],1,1,(()=>{Y[e]=null}));x=new Ae({}),x.$on("click",e[11]),P=new pe({props:{dir:e[3],sections:e[5],active_section:e[7],show_contents:e[10]}}),O=new te({}),Z=new Q({props:{name:e[10]?"las la-times":"las la-bars"}});let J=1==e[6]&&je(e);return{c(){s=l("div");for(let e=0;e<Y.length;e+=1)Y[e].c();t=k(),a=l("aside"),o=l("div"),h=l("a"),d=l("img"),b=k(),E=l("span"),z=v("DOCS"),_=k(),D(x.$$.fragment),V=k(),D(P.$$.fragment),B=k(),D(O.$$.fragment),M=k(),U=l("button"),D(Z.$$.fragment),R=k(),J&&J.c(),F=I(),this.h()},l(e){s=c(e,"DIV",{class:!0});var l=n(s);for(let e=0;e<Y.length;e+=1)Y[e].l(l);l.forEach(r),t=w(e),a=c(e,"ASIDE",{class:!0});var i=n(a);o=c(i,"DIV",{class:!0});var u=n(o);h=c(u,"A",{rel:!0,href:!0,class:!0,title:!0});var f=n(h);d=c(f,"IMG",{src:!0,alt:!0,class:!0}),b=w(f),E=c(f,"SPAN",{class:!0});var v=n(E);z=g(v,"DOCS"),v.forEach(r),f.forEach(r),_=w(u),y(x.$$.fragment,u),V=w(u),y(P.$$.fragment,u),B=w(u),y(O.$$.fragment,u),u.forEach(r),M=w(i),U=c(i,"BUTTON",{class:!0});var m=n(U);y(Z.$$.fragment,m),m.forEach(r),i.forEach(r),R=w(e),J&&J.l(e),F=I(),this.h()},h(){i(s,"class","content listify svelte-1x6e6fz"),d.src!==(m="logos/zitadel-logo-light.svg")&&i(d,"src","logos/zitadel-logo-light.svg"),i(d,"alt","zitadel-logo"),i(d,"class","svelte-1x6e6fz"),i(E,"class","svelte-1x6e6fz"),i(h,"rel","prefetch"),i(h,"href","."),i(h,"class","home svelte-1x6e6fz"),i(h,"title","Zitadel Docs"),i(o,"class","sidebar svelte-1x6e6fz"),i(U,"class","svelte-1x6e6fz"),i(a,"class","sidebar-container svelte-1x6e6fz"),q(a,"open",e[10])},m(l,c){u(l,s,c);for(let e=0;e<Y.length;e+=1)Y[e].m(s,null);e[13](s),u(l,t,c),u(l,a,c),f(a,o),f(o,h),f(h,d),f(h,b),f(h,E),f(E,z),f(o,_),L(x,o,null),f(o,V),L(P,o,null),f(o,B),L(O,o,null),f(a,M),f(a,U),L(Z,U,null),e[16](a),u(l,R,c),J&&J.m(l,c),u(l,F,c),K=!0,G||(H=[p(De,"keydown",e[12]),p(o,"click",e[14]),p(U,"click",e[15])],G=!0)},p(e,[t]){if(63&t){let l;for(W=e[5],l=0;l<W.length;l+=1){const a=ye(e,W,l);Y[l]?(Y[l].p(a,t),A(Y[l],1)):(Y[l]=Le(a),Y[l].c(),A(Y[l],1),Y[l].m(s,null))}for(N(),l=W.length;l<Y.length;l+=1)X(l);T()}const l={};8&t&&(l.dir=e[3]),32&t&&(l.sections=e[5]),128&t&&(l.active_section=e[7]),1024&t&&(l.show_contents=e[10]),P.$set(l);const c={};1024&t&&(c.name=e[10]?"las la-times":"las la-bars"),Z.$set(c),1024&t&&q(a,"open",e[10]),1==e[6]?J?(J.p(e,t),64&t&&A(J,1)):(J=je(e),J.c(),A(J,1),J.m(F.parentNode,F)):J&&(N(),j(J,1,1,(()=>{J=null})),T())},i(e){if(!K){for(let e=0;e<W.length;e+=1)A(Y[e]);A(x.$$.fragment,e),A(P.$$.fragment,e),A(O.$$.fragment,e),A(Z.$$.fragment,e),A(J),K=!0}},o(e){Y=Y.filter(Boolean);for(let e=0;e<Y.length;e+=1)j(Y[e]);j(x.$$.fragment,e),j(P.$$.fragment,e),j(O.$$.fragment,e),j(Z.$$.fragment,e),j(J),K=!1},d(l){l&&r(s),$(Y,l),e[13](null),l&&r(t),l&&r(a),C(x),C(P),C(O),C(Z),e[16](null),l&&r(R),J&&J.d(l),l&&r(F),G=!1,S(H)}}}function Ne(e,s,t){let l,a,c,{owner:n="caos"}=s,{path:r="docs"}=s,{project:o="zitadel"}=s,{dir:i=""}=s,{edit_title:h="edit this section"}=s,{sections:u}=s,f=!1,d=!1;Z((()=>{const e=a.querySelectorAll("[id]:not([data-scrollignore])");let s;const c=()=>{const{top:t}=a.getBoundingClientRect();s=[].map.call(e,(e=>e.getBoundingClientRect().top-t))};let n=window.location.hash.slice(1);const r=()=>{const a=-window.scrollY;let c=e.length;for(;c--;)if(s[c]+a<40){const s=e[c],{id:a}=s;return void(a!==n&&(t(7,l=a),n=a))}};window.addEventListener("scroll",r,!0),window.addEventListener("resize",c,!0);const o=[setTimeout(c,1e3),setTimeout(r,5e3)];return c(),r(),()=>{window.removeEventListener("scroll",r,!0),window.removeEventListener("resize",c,!0),o.forEach((e=>clearTimeout(e)))}}));return e.$$set=e=>{"owner"in e&&t(0,n=e.owner),"path"in e&&t(1,r=e.path),"project"in e&&t(2,o=e.project),"dir"in e&&t(3,i=e.dir),"edit_title"in e&&t(4,h=e.edit_title),"sections"in e&&t(5,u=e.sections)},[n,r,o,i,h,u,f,l,a,c,d,function(e){t(6,f=!e.detail.closed)},function(e){const s=navigator.platform.indexOf("Mac")>-1?e.metaKey:e.ctrlKey;(114==e.keyCode||s&&70==e.keyCode)&&(e.preventDefault(),t(6,f=!f))},function(e){B[e?"unshift":"push"]((()=>{a=e,t(8,a)}))},()=>t(10,d=!1),()=>t(10,d=!d),function(e){B[e?"unshift":"push"]((()=>{c=e,t(9,c)}))}]}class Te extends e{constructor(e){super(),s(this,e,Ne,Ce,t,{owner:0,path:1,project:2,dir:3,edit_title:4,sections:5})}}function Se(e){let s,t;return{c(){t=I(),this.h()},l(e){t=I(),this.h()},h(){s=new P(t)},m(l,a){s.m(e[2],l,a),u(l,t,a)},p(e,t){4&t&&s.p(e[2])},d(e){e&&r(t),e&&s.d()}}}function Ve(e){let s,t,l,a,c,n,o;document.title=s=le+" • "+e[0];let i=e[2]&&Se(e);return a=new oe({props:{slug:e[0]}}),n=new Te({props:{sections:e[1],dir:e[0]}}),{c(){i&&i.c(),t=I(),l=k(),D(a.$$.fragment),c=k(),D(n.$$.fragment)},l(e){const s=K('[data-svelte="svelte-18bu559"]',document.head);i&&i.l(s),t=I(),s.forEach(r),l=w(e),y(a.$$.fragment,e),c=w(e),y(n.$$.fragment,e)},m(e,s){i&&i.m(document.head,null),f(document.head,t),u(e,l,s),L(a,e,s),u(e,c,s),L(n,e,s),o=!0},p(e,[l]){(!o||1&l)&&s!==(s=le+" • "+e[0])&&(document.title=s),e[2]?i?i.p(e,l):(i=Se(e),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null);const c={};1&l&&(c.slug=e[0]),a.$set(c);const r={};2&l&&(r.sections=e[1]),1&l&&(r.dir=e[0]),n.$set(r)},i(e){o||(A(a.$$.fragment,e),A(n.$$.fragment,e),o=!0)},o(e){j(a.$$.fragment,e),j(n.$$.fragment,e),o=!1},d(e){i&&i.d(e),r(t),e&&r(l),C(a,e),e&&r(c),C(n,e)}}}async function Pe({params:e}){const{lang:s,slug:t}=e,{docs:l,seo:a}=await this.fetch(t+".json").then((e=>e.json()));return{sections:l,seo:a,slug:t}}function Be(e,s,t){let{slug:l}=s,{sections:a}=s,{seo:c}=s;return Z((()=>{G(".zitadel-gallery")})),e.$$set=e=>{"slug"in e&&t(0,l=e.slug),"sections"in e&&t(1,a=e.sections),"seo"in e&&t(2,c=e.seo)},[l,a,c]}export default class extends e{constructor(e){super(),s(this,e,Be,Ve,t,{slug:0,sections:1,seo:2})}}export{Pe as preload};
