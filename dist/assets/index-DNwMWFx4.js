(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function V_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Qf={exports:{}},Io={};var Cg;function Ly(){if(Cg)return Io;Cg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var Dg;function Oy(){return Dg||(Dg=1,Qf.exports=Ly()),Qf.exports}var ge=Oy(),Jf={exports:{}},lt={};var Ug;function Iy(){if(Ug)return lt;Ug=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,b={};function x(P,ae,_e){this.props=P,this.context=ae,this.refs=b,this.updater=_e||T}x.prototype.isReactComponent={},x.prototype.setState=function(P,ae){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ae,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function U(){}U.prototype=x.prototype;function L(P,ae,_e){this.props=P,this.context=ae,this.refs=b,this.updater=_e||T}var N=L.prototype=new U;N.constructor=L,C(N,x.prototype),N.isPureReactComponent=!0;var I=Array.isArray;function O(){}var z={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function E(P,ae,_e){var we=_e.ref;return{$$typeof:o,type:P,key:ae,ref:we!==void 0?we:null,props:_e}}function R(P,ae){return E(P.type,ae,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function Z(P){var ae={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(_e){return ae[_e]})}var $=/\/+/g;function ce(P,ae){return typeof P=="object"&&P!==null&&P.key!=null?Z(""+P.key):ae.toString(36)}function he(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(O,O):(P.status="pending",P.then(function(ae){P.status==="pending"&&(P.status="fulfilled",P.value=ae)},function(ae){P.status==="pending"&&(P.status="rejected",P.reason=ae)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function F(P,ae,_e,we,Ge){var ne=typeof P;(ne==="undefined"||ne==="boolean")&&(P=null);var de=!1;if(P===null)de=!0;else switch(ne){case"bigint":case"string":case"number":de=!0;break;case"object":switch(P.$$typeof){case o:case t:de=!0;break;case _:return de=P._init,F(de(P._payload),ae,_e,we,Ge)}}if(de)return Ge=Ge(P),de=we===""?"."+ce(P,0):we,I(Ge)?(_e="",de!=null&&(_e=de.replace($,"$&/")+"/"),F(Ge,ae,_e,"",function(Ve){return Ve})):Ge!=null&&(H(Ge)&&(Ge=R(Ge,_e+(Ge.key==null||P&&P.key===Ge.key?"":(""+Ge.key).replace($,"$&/")+"/")+de)),ae.push(Ge)),1;de=0;var De=we===""?".":we+":";if(I(P))for(var Xe=0;Xe<P.length;Xe++)we=P[Xe],ne=De+ce(we,Xe),de+=F(we,ae,_e,ne,Ge);else if(Xe=M(P),typeof Xe=="function")for(P=Xe.call(P),Xe=0;!(we=P.next()).done;)we=we.value,ne=De+ce(we,Xe++),de+=F(we,ae,_e,ne,Ge);else if(ne==="object"){if(typeof P.then=="function")return F(he(P),ae,_e,we,Ge);throw ae=String(P),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return de}function k(P,ae,_e){if(P==null)return P;var we=[],Ge=0;return F(P,we,"","",function(ne){return ae.call(_e,ne,Ge++)}),we}function ie(P){if(P._status===-1){var ae=P._result;ae=ae(),ae.then(function(_e){(P._status===0||P._status===-1)&&(P._status=1,P._result=_e)},function(_e){(P._status===0||P._status===-1)&&(P._status=2,P._result=_e)}),P._status===-1&&(P._status=0,P._result=ae)}if(P._status===1)return P._result.default;throw P._result}var Ee=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Se={map:k,forEach:function(P,ae,_e){k(P,function(){ae.apply(this,arguments)},_e)},count:function(P){var ae=0;return k(P,function(){ae++}),ae},toArray:function(P){return k(P,function(ae){return ae})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return lt.Activity=g,lt.Children=Se,lt.Component=x,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=L,lt.StrictMode=s,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,lt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},lt.cache=function(P){return function(){return P.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(P,ae,_e){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var we=C({},P.props),Ge=P.key;if(ae!=null)for(ne in ae.key!==void 0&&(Ge=""+ae.key),ae)!W.call(ae,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&ae.ref===void 0||(we[ne]=ae[ne]);var ne=arguments.length-2;if(ne===1)we.children=_e;else if(1<ne){for(var de=Array(ne),De=0;De<ne;De++)de[De]=arguments[De+2];we.children=de}return E(P.type,Ge,we)},lt.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},lt.createElement=function(P,ae,_e){var we,Ge={},ne=null;if(ae!=null)for(we in ae.key!==void 0&&(ne=""+ae.key),ae)W.call(ae,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(Ge[we]=ae[we]);var de=arguments.length-2;if(de===1)Ge.children=_e;else if(1<de){for(var De=Array(de),Xe=0;Xe<de;Xe++)De[Xe]=arguments[Xe+2];Ge.children=De}if(P&&P.defaultProps)for(we in de=P.defaultProps,de)Ge[we]===void 0&&(Ge[we]=de[we]);return E(P,ne,Ge)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(P){return{$$typeof:d,render:P}},lt.isValidElement=H,lt.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:ie}},lt.memo=function(P,ae){return{$$typeof:p,type:P,compare:ae===void 0?null:ae}},lt.startTransition=function(P){var ae=z.T,_e={};z.T=_e;try{var we=P(),Ge=z.S;Ge!==null&&Ge(_e,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(O,Ee)}catch(ne){Ee(ne)}finally{ae!==null&&_e.types!==null&&(ae.types=_e.types),z.T=ae}},lt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},lt.use=function(P){return z.H.use(P)},lt.useActionState=function(P,ae,_e){return z.H.useActionState(P,ae,_e)},lt.useCallback=function(P,ae){return z.H.useCallback(P,ae)},lt.useContext=function(P){return z.H.useContext(P)},lt.useDebugValue=function(){},lt.useDeferredValue=function(P,ae){return z.H.useDeferredValue(P,ae)},lt.useEffect=function(P,ae){return z.H.useEffect(P,ae)},lt.useEffectEvent=function(P){return z.H.useEffectEvent(P)},lt.useId=function(){return z.H.useId()},lt.useImperativeHandle=function(P,ae,_e){return z.H.useImperativeHandle(P,ae,_e)},lt.useInsertionEffect=function(P,ae){return z.H.useInsertionEffect(P,ae)},lt.useLayoutEffect=function(P,ae){return z.H.useLayoutEffect(P,ae)},lt.useMemo=function(P,ae){return z.H.useMemo(P,ae)},lt.useOptimistic=function(P,ae){return z.H.useOptimistic(P,ae)},lt.useReducer=function(P,ae,_e){return z.H.useReducer(P,ae,_e)},lt.useRef=function(P){return z.H.useRef(P)},lt.useState=function(P){return z.H.useState(P)},lt.useSyncExternalStore=function(P,ae,_e){return z.H.useSyncExternalStore(P,ae,_e)},lt.useTransition=function(){return z.H.useTransition()},lt.version="19.2.3",lt}var Ng;function Dd(){return Ng||(Ng=1,Jf.exports=Iy()),Jf.exports}var $t=Dd();const Py=V_($t);var $f={exports:{}},Po={},eh={exports:{}},th={};var Lg;function zy(){return Lg||(Lg=1,(function(o){function t(F,k){var ie=F.length;F.push(k);e:for(;0<ie;){var Ee=ie-1>>>1,Se=F[Ee];if(0<l(Se,k))F[Ee]=k,F[ie]=Se,ie=Ee;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var k=F[0],ie=F.pop();if(ie!==k){F[0]=ie;e:for(var Ee=0,Se=F.length,P=Se>>>1;Ee<P;){var ae=2*(Ee+1)-1,_e=F[ae],we=ae+1,Ge=F[we];if(0>l(_e,ie))we<Se&&0>l(Ge,_e)?(F[Ee]=Ge,F[we]=ie,Ee=we):(F[Ee]=_e,F[ae]=ie,Ee=ae);else if(we<Se&&0>l(Ge,ie))F[Ee]=Ge,F[we]=ie,Ee=we;else break e}}return k}function l(F,k){var ie=F.sortIndex-k.sortIndex;return ie!==0?ie:F.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,y=3,M=!1,T=!1,C=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(F){for(var k=i(p);k!==null;){if(k.callback===null)s(p);else if(k.startTime<=F)s(p),k.sortIndex=k.expirationTime,t(m,k);else break;k=i(p)}}function I(F){if(C=!1,N(F),!T)if(i(m)!==null)T=!0,O||(O=!0,Z());else{var k=i(p);k!==null&&he(I,k.startTime-F)}}var O=!1,z=-1,W=5,E=-1;function R(){return b?!0:!(o.unstable_now()-E<W)}function H(){if(b=!1,O){var F=o.unstable_now();E=F;var k=!0;try{e:{T=!1,C&&(C=!1,U(z),z=-1),M=!0;var ie=y;try{t:{for(N(F),g=i(m);g!==null&&!(g.expirationTime>F&&R());){var Ee=g.callback;if(typeof Ee=="function"){g.callback=null,y=g.priorityLevel;var Se=Ee(g.expirationTime<=F);if(F=o.unstable_now(),typeof Se=="function"){g.callback=Se,N(F),k=!0;break t}g===i(m)&&s(m),N(F)}else s(m);g=i(m)}if(g!==null)k=!0;else{var P=i(p);P!==null&&he(I,P.startTime-F),k=!1}}break e}finally{g=null,y=ie,M=!1}k=void 0}}finally{k?Z():O=!1}}}var Z;if(typeof L=="function")Z=function(){L(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ce=$.port2;$.port1.onmessage=H,Z=function(){ce.postMessage(null)}}else Z=function(){x(H,0)};function he(F,k){z=x(function(){F(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(F){switch(y){case 1:case 2:case 3:var k=3;break;default:k=y}var ie=y;y=k;try{return F()}finally{y=ie}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(F,k){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ie=y;y=F;try{return k()}finally{y=ie}},o.unstable_scheduleCallback=function(F,k,ie){var Ee=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Ee+ie:Ee):ie=Ee,F){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ie+Se,F={id:_++,callback:k,priorityLevel:F,startTime:ie,expirationTime:Se,sortIndex:-1},ie>Ee?(F.sortIndex=ie,t(p,F),i(m)===null&&F===i(p)&&(C?(U(z),z=-1):C=!0,he(I,ie-Ee))):(F.sortIndex=Se,t(m,F),T||M||(T=!0,O||(O=!0,Z()))),F},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(F){var k=y;return function(){var ie=y;y=k;try{return F.apply(this,arguments)}finally{y=ie}}}})(th)),th}var Og;function Fy(){return Og||(Og=1,eh.exports=zy()),eh.exports}var nh={exports:{}},Nn={};var Ig;function By(){if(Ig)return Nn;Ig=1;var o=Dd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Nn.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.3",Nn}var Pg;function Hy(){if(Pg)return nh.exports;Pg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),nh.exports=By(),nh.exports}var zg;function Gy(){if(zg)return Po;zg=1;var o=Fy(),t=Dd(),i=Hy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,r=f;break}if(A===r){v=!0,r=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,r=u;break}if(A===r){v=!0,r=f,a=u;break}A=A.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case I:return"Suspense";case O:return"SuspenseList";case E:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case L:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ce(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return ce(e(n))}catch{}}return null}var he=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},Ee=[],Se=-1;function P(e){return{current:e}}function ae(e){0>Se||(e.current=Ee[Se],Ee[Se]=null,Se--)}function _e(e,n){Se++,Ee[Se]=e.current,e.current=n}var we=P(null),Ge=P(null),ne=P(null),de=P(null);function De(e,n){switch(_e(ne,n),_e(Ge,e),_e(we,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?J0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=J0(n),e=$0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(we),_e(we,e)}function Xe(){ae(we),ae(Ge),ae(ne)}function Ve(e){e.memoizedState!==null&&_e(de,e);var n=we.current,a=$0(n,e.type);n!==a&&(_e(Ge,e),_e(we,a))}function ft(e){Ge.current===e&&(ae(we),ae(Ge)),de.current===e&&(ae(de),Uo._currentValue=ie)}var Yt,_t;function mt(e){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+e+_t}var bt=!1;function st(e,n){if(!e||bt)return"";bt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ue){var re=ue}Reflect.construct(e,[],ve)}else{try{ve.call()}catch(ue){re=ue}e.call(ve.prototype)}}else{try{throw Error()}catch(ue){re=ue}(ve=e())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ue){if(ue&&re&&typeof ue.stack=="string")return[ue.stack,re.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var B=v.split(`
`),te=A.split(`
`);for(u=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(r===B.length||u===te.length)for(r=B.length-1,u=te.length-1;1<=r&&0<=u&&B[r]!==te[u];)u--;for(;1<=r&&0<=u;r--,u--)if(B[r]!==te[u]){if(r!==1||u!==1)do if(r--,u--,0>u||B[r]!==te[u]){var pe=`
`+B[r].replace(" at new "," at ");return e.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",e.displayName)),pe}while(1<=r&&0<=u);break}}}finally{bt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?mt(a):""}function jt(e,n){switch(e.tag){case 26:case 27:case 5:return mt(e.type);case 16:return mt("Lazy");case 13:return e.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return st(e.type,!1);case 11:return st(e.type.render,!1);case 1:return st(e.type,!0);case 31:return mt("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=jt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var We=Object.prototype.hasOwnProperty,Je=o.unstable_scheduleCallback,$e=o.unstable_cancelCallback,Ie=o.unstable_shouldYield,D=o.unstable_requestPaint,S=o.unstable_now,V=o.unstable_getCurrentPriorityLevel,oe=o.unstable_ImmediatePriority,fe=o.unstable_UserBlockingPriority,K=o.unstable_NormalPriority,Re=o.unstable_LowPriority,Me=o.unstable_IdlePriority,Pe=o.log,je=o.unstable_setDisableYieldValue,ye=null,be=null;function Ne(e){if(typeof Pe=="function"&&je(e),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(ye,e)}catch{}}var ze=Math.clz32?Math.clz32:q,Ue=Math.log,ht=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Ue(e)/ht|0)|0}var Oe=256,Ae=262144,He=4194304;function Te(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=Te(r):(v&=A,v!==0?u=Te(v):a||(a=A&~e,a!==0&&(u=Te(a))))):(A=r&~f,A!==0?u=Te(A):v!==0?u=Te(v):a||(a=r&~e,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ce(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function rt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var e=He;return He<<=1,(He&62914560)===0&&(He=4194304),e}function At(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Un(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vi(e,n,a,r,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,B=e.expirationTimes,te=e.hiddenUpdates;for(a=v&~a;0<a;){var pe=31-ze(a),ve=1<<pe;A[pe]=0,B[pe]=-1;var re=te[pe];if(re!==null)for(te[pe]=null,pe=0;pe<re.length;pe++){var ue=re[pe];ue!==null&&(ue.lane&=-536870913)}a&=~ve}r!==0&&nl(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function nl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ze(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Vr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ze(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Ps(e,n){var a=n&-n;return a=(a&42)!==0?1:kr(a),(a&(e.suspendedLanes|n))!==0?0:a}function kr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xr(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:Mg(e.type))}function Ci(e,n){var a=k.p;try{return k.p=e,n()}finally{k.p=a}}var ri=Math.random().toString(36).slice(2),ln="__reactFiber$"+ri,yn="__reactProps$"+ri,xi="__reactContainer$"+ri,Fs="__reactEvents$"+ri,Bs="__reactListeners$"+ri,il="__reactHandles$"+ri,Wr="__reactResources$"+ri,as="__reactMarker$"+ri;function qr(e){delete e[ln],delete e[yn],delete e[Fs],delete e[Bs],delete e[il]}function ba(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[xi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=rg(e);e!==null;){if(a=e[ln])return a;e=rg(e)}return n}e=a,a=e.parentNode}return null}function Ea(e){if(e=e[ln]||e[xi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ss(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ta(e){var n=e[Wr];return n||(n=e[Wr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function w(e){e[as]=!0}var Y=new Set,le={};function se(e,n){Q(e,n),Q(e+"Capture",n)}function Q(e,n){for(le[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Fe={};function qe(e){return We.call(Fe,e)?!0:We.call(ke,e)?!1:Le.test(e)?Fe[e]=!0:(ke[e]=!0,!1)}function Ze(e,n,a){if(qe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function nt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ke(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function it(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wt(e){if(!e._valueTracker){var n=Nt(e)?"checked":"value";e._valueTracker=Qt(e,n,""+e[n])}}function It(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Nt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function et(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function ot(e){return e.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(e,n,a,r,u,f,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+it(n)):e.value!==""+it(n)&&(e.value=""+it(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,v,it(n)):a!=null?Mn(e,v,it(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+it(A):e.removeAttribute("name")}function qi(e,n,a,r,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(e);return}a=a!=null?""+it(a):"",n=n!=null?""+it(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Wt(e)}function Mn(e,n,a){n==="number"&&et(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function oi(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+it(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function zt(e,n,a){if(n!=null&&(n=""+it(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+it(a):""}function bn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(he(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=it(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Wt(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Hs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Tn(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Tn(e,f,n[f])}function yi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(e){return Dv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var Yc=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Vs=null;function Qd(e){var n=Ea(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Sn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[yn]||null;if(!u)throw Error(s(90));Sn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&It(r)}break e;case"textarea":zt(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&oi(e,!!a.multiple,n,!1)}}}var Zc=!1;function Jd(e,n,a){if(Zc)return e(n,a);Zc=!0;try{var r=e(n);return r}finally{if(Zc=!1,(Gs!==null||Vs!==null)&&(Wl(),Gs&&(n=Gs,e=Vs,Vs=Gs=null,Qd(n),e)))for(n=0;n<e.length;n++)Qd(e[n])}}function Yr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[yn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(ji)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Kc=!1}var Aa=null,Qc=null,sl=null;function $d(){if(sl)return sl;var e,n=Qc,a=n.length,r,u="value"in Aa?Aa.value:Aa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return sl=u.slice(e,1<r?1-r:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function ep(){return!1}function Hn(e){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:ep,this.isPropagationStopped=ep,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=Hn(rs),Zr=g({},rs,{view:0,detail:0}),Uv=Hn(Zr),Jc,$c,Kr,cl=g({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(Jc=e.screenX-Kr.screenX,$c=e.screenY-Kr.screenY):$c=Jc=0,Kr=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:$c}}),tp=Hn(cl),Nv=g({},cl,{dataTransfer:0}),Lv=Hn(Nv),Ov=g({},Zr,{relatedTarget:0}),eu=Hn(Ov),Iv=g({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=Hn(Iv),zv=g({},rs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fv=Hn(zv),Bv=g({},rs,{data:0}),np=Hn(Bv),Hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vv[e])?!!n[e]:!1}function tu(){return kv}var Xv=g({},Zr,{key:function(e){if(e.key){var n=Hv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wv=Hn(Xv),qv=g({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=Hn(qv),Yv=g({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),jv=Hn(Yv),Zv=g({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=Hn(Zv),Qv=g({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=Hn(Qv),$v=g({},rs,{newState:0,oldState:0}),ex=Hn($v),tx=[9,13,27,32],nu=ji&&"CompositionEvent"in window,Qr=null;ji&&"documentMode"in document&&(Qr=document.documentMode);var nx=ji&&"TextEvent"in window&&!Qr,ap=ji&&(!nu||Qr&&8<Qr&&11>=Qr),sp=" ",rp=!1;function op(e,n){switch(e){case"keyup":return tx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function ix(e,n){switch(e){case"compositionend":return lp(n);case"keypress":return n.which!==32?null:(rp=!0,sp);case"textInput":return e=n.data,e===sp&&rp?null:e;default:return null}}function ax(e,n){if(ks)return e==="compositionend"||!nu&&op(e,n)?(e=$d(),sl=Qc=Aa=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sx[e.type]:n==="textarea"}function up(e,n,a,r){Gs?Vs?Vs.push(r):Vs=[r]:Gs=r,n=Jl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Jr=null,$r=null;function rx(e){q0(e,0)}function ul(e){var n=ss(e);if(It(n))return e}function fp(e,n){if(e==="change")return n}var hp=!1;if(ji){var iu;if(ji){var au="oninput"in document;if(!au){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),au=typeof dp.oninput=="function"}iu=au}else iu=!1;hp=iu&&(!document.documentMode||9<document.documentMode)}function pp(){Jr&&(Jr.detachEvent("onpropertychange",mp),$r=Jr=null)}function mp(e){if(e.propertyName==="value"&&ul($r)){var n=[];up(n,$r,e,jc(e)),Jd(rx,n)}}function ox(e,n,a){e==="focusin"?(pp(),Jr=n,$r=a,Jr.attachEvent("onpropertychange",mp)):e==="focusout"&&pp()}function lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul($r)}function cx(e,n){if(e==="click")return ul(n)}function ux(e,n){if(e==="input"||e==="change")return ul(n)}function fx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:fx;function eo(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!We.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _p(e,n){var a=gp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gp(a)}}function vp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=et(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=et(e.document)}return n}function su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var hx=ji&&"documentMode"in document&&11>=document.documentMode,Xs=null,ru=null,to=null,ou=!1;function yp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Xs==null||Xs!==et(r)||(r=Xs,"selectionStart"in r&&su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&eo(to,r)||(to=r,r=Jl(ru,"onSelect"),0<r.length&&(n=new ll("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Xs)))}function os(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ws={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},lu={},Sp={};ji&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function ls(e){if(lu[e])return lu[e];if(!Ws[e])return e;var n=Ws[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Sp)return lu[e]=n[a];return e}var Mp=ls("animationend"),bp=ls("animationiteration"),Ep=ls("animationstart"),dx=ls("transitionrun"),px=ls("transitionstart"),mx=ls("transitioncancel"),Tp=ls("transitionend"),Ap=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function Si(e,n){Ap.set(e,n),se(n,[e])}var fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],qs=0,uu=0;function hl(){for(var e=qs,n=uu=qs=0;n<e;){var a=li[n];li[n++]=null;var r=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&wp(a,u,f)}}function dl(e,n,a,r){li[qs++]=e,li[qs++]=n,li[qs++]=a,li[qs++]=r,uu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function fu(e,n,a,r){return dl(e,n,a,r),pl(e)}function cs(e,n){return dl(e,null,null,n),pl(e)}function wp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-ze(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function pl(e){if(50<Eo)throw Eo=0,Sf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ys={};function gx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,r){return new gx(e,n,a,r)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Rp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ml(e,n,a,r,u,f){var v=0;if(r=e,typeof e=="function")hu(e)&&(v=1);else if(typeof e=="string")v=Sy(e,a,we.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case E:return e=Kn(31,a,n,u),e.elementType=E,e.lanes=f,e;case C:return us(a.children,u,f,n);case b:v=8,u|=24;break;case x:return e=Kn(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case I:return e=Kn(13,a,n,u),e.elementType=I,e.lanes=f,e;case O:return e=Kn(19,a,n,u),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case U:v=9;break e;case N:v=11;break e;case z:v=14;break e;case W:v=16,r=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Kn(v,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function us(e,n,a,r){return e=Kn(7,e,r,n),e.lanes=a,e}function du(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function Cp(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function pu(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Dp=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=Dp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},Dp.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var js=[],Zs=0,gl=null,no=0,ui=[],fi=0,wa=null,Di=1,Ui="";function Ki(e,n){js[Zs++]=no,js[Zs++]=gl,gl=e,no=n}function Up(e,n,a){ui[fi++]=Di,ui[fi++]=Ui,ui[fi++]=wa,wa=e;var r=Di;e=Ui;var u=32-ze(r)-1;r&=~(1<<u),a+=1;var f=32-ze(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Di=1<<32-ze(n)+u|a<<u|r,Ui=f+e}else Di=1<<f|a<<u|r,Ui=e}function mu(e){e.return!==null&&(Ki(e,1),Up(e,1,0))}function gu(e){for(;e===gl;)gl=js[--Zs],js[Zs]=null,no=js[--Zs],js[Zs]=null;for(;e===wa;)wa=ui[--fi],ui[fi]=null,Ui=ui[--fi],ui[fi]=null,Di=ui[--fi],ui[fi]=null}function Np(e,n){ui[fi++]=Di,ui[fi++]=Ui,ui[fi++]=wa,Di=n.id,Ui=n.overflow,wa=e}var An=null,Zt=null,Et=!1,Ra=null,hi=!1,_u=Error(s(519));function Ca(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(ci(n,e)),_u}function Lp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[ln]=e,n[yn]=r,a){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)xt(Ao[a],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),qi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),bn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||K0(n.textContent,a)?(r.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),r.onScroll!=null&&xt("scroll",n),r.onScrollEnd!=null&&xt("scrollend",n),r.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ca(e,!0)}function Op(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:An=An.return}}function Ks(e){if(e!==An)return!1;if(!Et)return Op(e),Et=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Pf(e.type,e.memoizedProps)),a=!a),a&&Zt&&Ca(e),Op(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Zt=sg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Zt=sg(e)}else n===27?(n=Zt,ka(e.type)?(e=Gf,Gf=null,Zt=e):Zt=n):Zt=An?pi(e.stateNode.nextSibling):null;return!0}function fs(){Zt=An=null,Et=!1}function vu(){var e=Ra;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),Ra=null),e}function io(e){Ra===null?Ra=[e]:Ra.push(e)}var xu=P(null),hs=null,Qi=null;function Da(e,n,a){_e(xu,n._currentValue),n._currentValue=a}function Ji(e){e._currentValue=xu.current,ae(xu)}function yu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Su(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var B=0;B<n.length;B++)if(A.context===n[B]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),yu(f.return,a,e),r||(v=null);break e}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),yu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Qs(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=u.type;Zn(u.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(u===de.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Uo):e=[Uo])}u=u.return}e!==null&&Su(n,e,a,r),n.flags|=262144}function _l(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ds(e){hs=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Ip(hs,e)}function vl(e,n){return hs===null&&ds(e),Ip(e,n)}function Ip(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(e===null)throw Error(s(308));Qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qi=Qi.next=n;return a}var _x=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},vx=o.unstable_scheduleCallback,xx=o.unstable_NormalPriority,cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new _x,data:new Map,refCount:0}}function ao(e){e.refCount--,e.refCount===0&&vx(xx,function(){e.controller.abort()})}var so=null,bu=0,Js=0,$s=null;function yx(e,n){if(so===null){var a=so=[];bu=0,Js=wf(),$s={status:"pending",value:void 0,then:function(r){a.push(r)}}}return bu++,n.then(Pp,Pp),n}function Pp(){if(--bu===0&&so!==null){$s!==null&&($s.status="fulfilled");var e=so;so=null,Js=0,$s=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Sx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var zp=F.S;F.S=function(e,n){y0=S(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yx(e,n),zp!==null&&zp(e,n)};var ps=P(null);function Eu(){var e=ps.current;return e!==null?e:Xt.pooledCache}function xl(e,n){n===null?_e(ps,ps.current):_e(ps,n.pool)}function Fp(){var e=Eu();return e===null?null:{parent:cn._currentValue,pool:e}}var er=Error(s(460)),Tu=Error(s(474)),yl=Error(s(542)),Sl={then:function(){}};function Bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(e=Xt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e}throw gs=n,er}}function ms(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gs=a,er):a}}var gs=null;function Gp(){if(gs===null)throw Error(s(459));var e=gs;return gs=null,e}function Vp(e){if(e===er||e===yl)throw Error(s(483))}var tr=null,ro=0;function Ml(e){var n=ro;return ro+=1,tr===null&&(tr=[]),Hp(tr,e,n)}function oo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function bl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function kp(e){function n(j,X){if(e){var ee=j.deletions;ee===null?(j.deletions=[X],j.flags|=16):ee.push(X)}}function a(j,X){if(!e)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function r(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function u(j,X){return j=Zi(j,X),j.index=0,j.sibling=null,j}function f(j,X,ee){return j.index=ee,e?(ee=j.alternate,ee!==null?(ee=ee.index,ee<X?(j.flags|=67108866,X):ee):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function v(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,ee,me){return X===null||X.tag!==6?(X=du(ee,j.mode,me),X.return=j,X):(X=u(X,ee),X.return=j,X)}function B(j,X,ee,me){var tt=ee.type;return tt===C?pe(j,X,ee.props.children,me,ee.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===W&&ms(tt)===X.type)?(X=u(X,ee.props),oo(X,ee),X.return=j,X):(X=ml(ee.type,ee.key,ee.props,null,j.mode,me),oo(X,ee),X.return=j,X)}function te(j,X,ee,me){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=pu(ee,j.mode,me),X.return=j,X):(X=u(X,ee.children||[]),X.return=j,X)}function pe(j,X,ee,me,tt){return X===null||X.tag!==7?(X=us(ee,j.mode,me,tt),X.return=j,X):(X=u(X,ee),X.return=j,X)}function ve(j,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=du(""+X,j.mode,ee),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return ee=ml(X.type,X.key,X.props,null,j.mode,ee),oo(ee,X),ee.return=j,ee;case T:return X=pu(X,j.mode,ee),X.return=j,X;case W:return X=ms(X),ve(j,X,ee)}if(he(X)||Z(X))return X=us(X,j.mode,ee,null),X.return=j,X;if(typeof X.then=="function")return ve(j,Ml(X),ee);if(X.$$typeof===L)return ve(j,vl(j,X),ee);bl(j,X)}return null}function re(j,X,ee,me){var tt=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return tt!==null?null:A(j,X,""+ee,me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:return ee.key===tt?B(j,X,ee,me):null;case T:return ee.key===tt?te(j,X,ee,me):null;case W:return ee=ms(ee),re(j,X,ee,me)}if(he(ee)||Z(ee))return tt!==null?null:pe(j,X,ee,me,null);if(typeof ee.then=="function")return re(j,X,Ml(ee),me);if(ee.$$typeof===L)return re(j,X,vl(j,ee),me);bl(j,ee)}return null}function ue(j,X,ee,me,tt){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return j=j.get(ee)||null,A(X,j,""+me,tt);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case M:return j=j.get(me.key===null?ee:me.key)||null,B(X,j,me,tt);case T:return j=j.get(me.key===null?ee:me.key)||null,te(X,j,me,tt);case W:return me=ms(me),ue(j,X,ee,me,tt)}if(he(me)||Z(me))return j=j.get(ee)||null,pe(X,j,me,tt,null);if(typeof me.then=="function")return ue(j,X,ee,Ml(me),tt);if(me.$$typeof===L)return ue(j,X,ee,vl(X,me),tt);bl(X,me)}return null}function Ye(j,X,ee,me){for(var tt=null,Dt=null,Qe=X,dt=X=0,St=null;Qe!==null&&dt<ee.length;dt++){Qe.index>dt?(St=Qe,Qe=null):St=Qe.sibling;var Ut=re(j,Qe,ee[dt],me);if(Ut===null){Qe===null&&(Qe=St);break}e&&Qe&&Ut.alternate===null&&n(j,Qe),X=f(Ut,X,dt),Dt===null?tt=Ut:Dt.sibling=Ut,Dt=Ut,Qe=St}if(dt===ee.length)return a(j,Qe),Et&&Ki(j,dt),tt;if(Qe===null){for(;dt<ee.length;dt++)Qe=ve(j,ee[dt],me),Qe!==null&&(X=f(Qe,X,dt),Dt===null?tt=Qe:Dt.sibling=Qe,Dt=Qe);return Et&&Ki(j,dt),tt}for(Qe=r(Qe);dt<ee.length;dt++)St=ue(Qe,j,dt,ee[dt],me),St!==null&&(e&&St.alternate!==null&&Qe.delete(St.key===null?dt:St.key),X=f(St,X,dt),Dt===null?tt=St:Dt.sibling=St,Dt=St);return e&&Qe.forEach(function(ja){return n(j,ja)}),Et&&Ki(j,dt),tt}function at(j,X,ee,me){if(ee==null)throw Error(s(151));for(var tt=null,Dt=null,Qe=X,dt=X=0,St=null,Ut=ee.next();Qe!==null&&!Ut.done;dt++,Ut=ee.next()){Qe.index>dt?(St=Qe,Qe=null):St=Qe.sibling;var ja=re(j,Qe,Ut.value,me);if(ja===null){Qe===null&&(Qe=St);break}e&&Qe&&ja.alternate===null&&n(j,Qe),X=f(ja,X,dt),Dt===null?tt=ja:Dt.sibling=ja,Dt=ja,Qe=St}if(Ut.done)return a(j,Qe),Et&&Ki(j,dt),tt;if(Qe===null){for(;!Ut.done;dt++,Ut=ee.next())Ut=ve(j,Ut.value,me),Ut!==null&&(X=f(Ut,X,dt),Dt===null?tt=Ut:Dt.sibling=Ut,Dt=Ut);return Et&&Ki(j,dt),tt}for(Qe=r(Qe);!Ut.done;dt++,Ut=ee.next())Ut=ue(Qe,j,dt,Ut.value,me),Ut!==null&&(e&&Ut.alternate!==null&&Qe.delete(Ut.key===null?dt:Ut.key),X=f(Ut,X,dt),Dt===null?tt=Ut:Dt.sibling=Ut,Dt=Ut);return e&&Qe.forEach(function(Ny){return n(j,Ny)}),Et&&Ki(j,dt),tt}function kt(j,X,ee,me){if(typeof ee=="object"&&ee!==null&&ee.type===C&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:e:{for(var tt=ee.key;X!==null;){if(X.key===tt){if(tt=ee.type,tt===C){if(X.tag===7){a(j,X.sibling),me=u(X,ee.props.children),me.return=j,j=me;break e}}else if(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===W&&ms(tt)===X.type){a(j,X.sibling),me=u(X,ee.props),oo(me,ee),me.return=j,j=me;break e}a(j,X);break}else n(j,X);X=X.sibling}ee.type===C?(me=us(ee.props.children,j.mode,me,ee.key),me.return=j,j=me):(me=ml(ee.type,ee.key,ee.props,null,j.mode,me),oo(me,ee),me.return=j,j=me)}return v(j);case T:e:{for(tt=ee.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){a(j,X.sibling),me=u(X,ee.children||[]),me.return=j,j=me;break e}else{a(j,X);break}else n(j,X);X=X.sibling}me=pu(ee,j.mode,me),me.return=j,j=me}return v(j);case W:return ee=ms(ee),kt(j,X,ee,me)}if(he(ee))return Ye(j,X,ee,me);if(Z(ee)){if(tt=Z(ee),typeof tt!="function")throw Error(s(150));return ee=tt.call(ee),at(j,X,ee,me)}if(typeof ee.then=="function")return kt(j,X,Ml(ee),me);if(ee.$$typeof===L)return kt(j,X,vl(j,ee),me);bl(j,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,X!==null&&X.tag===6?(a(j,X.sibling),me=u(X,ee),me.return=j,j=me):(a(j,X),me=du(ee,j.mode,me),me.return=j,j=me),v(j)):a(j,X)}return function(j,X,ee,me){try{ro=0;var tt=kt(j,X,ee,me);return tr=null,tt}catch(Qe){if(Qe===er||Qe===yl)throw Qe;var Dt=Kn(29,Qe,null,j.mode);return Dt.lanes=me,Dt.return=j,Dt}}}var _s=kp(!0),Xp=kp(!1),Ua=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ot&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=pl(e),wp(e,null,a),n}return dl(e,r,n,a),pl(e)}function lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Vr(e,a)}}function Ru(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Cu=!1;function co(){if(Cu){var e=$s;if(e!==null)throw e}}function uo(e,n,a,r){Cu=!1;var u=e.updateQueue;Ua=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,te=B.next;B.next=null,v===null?f=te:v.next=te,v=B;var pe=e.alternate;pe!==null&&(pe=pe.updateQueue,A=pe.lastBaseUpdate,A!==v&&(A===null?pe.firstBaseUpdate=te:A.next=te,pe.lastBaseUpdate=B))}if(f!==null){var ve=u.baseState;v=0,pe=te=B=null,A=f;do{var re=A.lane&-536870913,ue=re!==A.lane;if(ue?(yt&re)===re:(r&re)===re){re!==0&&re===Js&&(Cu=!0),pe!==null&&(pe=pe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ye=e,at=A;re=n;var kt=a;switch(at.tag){case 1:if(Ye=at.payload,typeof Ye=="function"){ve=Ye.call(kt,ve,re);break e}ve=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=at.payload,re=typeof Ye=="function"?Ye.call(kt,ve,re):Ye,re==null)break e;ve=g({},ve,re);break e;case 2:Ua=!0}}re=A.callback,re!==null&&(e.flags|=64,ue&&(e.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[re]:ue.push(re))}else ue={lane:re,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pe===null?(te=pe=ue,B=ve):pe=pe.next=ue,v|=re;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ue=A,A=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);pe===null&&(B=ve),u.baseState=B,u.firstBaseUpdate=te,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Fa|=v,e.lanes=v,e.memoizedState=ve}}function Wp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function qp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wp(a[e],n)}var nr=P(null),El=P(0);function Yp(e,n){e=oa,_e(El,e),_e(nr,n),oa=e|n.baseLanes}function Du(){_e(El,oa),_e(nr,nr.current)}function Uu(){oa=El.current,ae(nr),ae(El)}var Qn=P(null),di=null;function Oa(e){var n=e.alternate;_e(sn,sn.current&1),_e(Qn,e),di===null&&(n===null||nr.current!==null||n.memoizedState!==null)&&(di=e)}function Nu(e){_e(sn,sn.current),_e(Qn,e),di===null&&(di=e)}function jp(e){e.tag===22?(_e(sn,sn.current),_e(Qn,e),di===null&&(di=e)):Ia()}function Ia(){_e(sn,sn.current),_e(Qn,Qn.current)}function Jn(e){ae(Qn),di===e&&(di=null),ae(sn)}var sn=P(0);function Tl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bf(a)||Hf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,ut=null,Gt=null,un=null,Al=!1,ir=!1,vs=!1,wl=0,fo=0,ar=null,Mx=0;function tn(){throw Error(s(321))}function Lu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Ou(e,n,a,r,u,f){return $i=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?Um:Zu,vs=!1,f=a(r,u),vs=!1,ir&&(f=Kp(n,a,r,u)),Zp(e),f}function Zp(e){F.H=mo;var n=Gt!==null&&Gt.next!==null;if($i=0,un=Gt=ut=null,Al=!1,fo=0,ar=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&_l(e)&&(fn=!0))}function Kp(e,n,a,r){ut=e;var u=0;do{if(ir&&(ar=null),fo=0,ir=!1,25<=u)throw Error(s(301));if(u+=1,un=Gt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=Nm,f=n(a,r)}while(ir);return f}function bx(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?ho(n):n,e=e.useState()[0],(Gt!==null?Gt.memoizedState:null)!==e&&(ut.flags|=1024),n}function Iu(){var e=wl!==0;return wl=0,e}function Pu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zu(e){if(Al){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Al=!1}$i=0,un=Gt=ut=null,ir=!1,fo=wl=0,ar=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ut.memoizedState=un=e:un=un.next=e,un}function rn(){if(Gt===null){var e=ut.alternate;e=e!==null?e.memoizedState:null}else e=Gt.next;var n=un===null?ut.memoizedState:un.next;if(n!==null)un=n,Gt=e;else{if(e===null)throw ut.alternate===null?Error(s(467)):Error(s(310));Gt=e,e={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},un===null?ut.memoizedState=un=e:un=un.next=e}return un}function Rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(e){var n=fo;return fo+=1,ar===null&&(ar=[]),e=Hp(ar,e,n),n=ut,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Um:Zu),e}function Cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ho(e);if(e.$$typeof===L)return wn(e)}throw Error(s(438,String(e)))}function Fu(e){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ut.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Rl(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=R;return n.index++,a}function ea(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=rn();return Bu(n,Gt,e)}function Bu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=v=null,B=null,te=n,pe=!1;do{var ve=te.lane&-536870913;if(ve!==te.lane?(yt&ve)===ve:($i&ve)===ve){var re=te.revertLane;if(re===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),ve===Js&&(pe=!0);else if(($i&re)===re){te=te.next,re===Js&&(pe=!0);continue}else ve={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},B===null?(A=B=ve,v=f):B=B.next=ve,ut.lanes|=re,Fa|=re;ve=te.action,vs&&a(f,ve),f=te.hasEagerState?te.eagerState:a(f,ve)}else re={lane:ve,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},B===null?(A=B=re,v=f):B=B.next=re,ut.lanes|=ve,Fa|=ve;te=te.next}while(te!==null&&te!==n);if(B===null?v=f:B.next=A,!Zn(f,e.memoizedState)&&(fn=!0,pe&&(a=$s,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=B,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Hu(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Zn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Qp(e,n,a){var r=ut,u=rn(),f=Et;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Zn((Gt||u).memoizedState,a);if(v&&(u.memoizedState=a,fn=!0),u=u.queue,ku(em.bind(null,r,u,e),[e]),u.getSnapshot!==n||v||un!==null&&un.memoizedState.tag&1){if(r.flags|=2048,sr(9,{destroy:void 0},$p.bind(null,r,u,a,n),null),Xt===null)throw Error(s(349));f||($i&127)!==0||Jp(r,n,a)}return a}function Jp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=Rl(),ut.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function $p(e,n,a,r){n.value=a,n.getSnapshot=r,tm(n)&&nm(e)}function em(e,n,a){return a(function(){tm(n)&&nm(e)})}function tm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function nm(e){var n=cs(e,2);n!==null&&Wn(n,e,2)}function Gu(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),vs){Ne(!0);try{a()}finally{Ne(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},n}function im(e,n,a,r){return e.baseState=a,Bu(e,Gt,typeof r=="function"?r:ea)}function Ex(e,n,a,r,u){if(Ll(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};F.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,am(n,f)):(f.next=a.next,n.pending=a.next=f)}}function am(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=F.T,v={};F.T=v;try{var A=a(u,r),B=F.S;B!==null&&B(v,A),sm(e,n,A)}catch(te){Vu(e,n,te)}finally{f!==null&&v.types!==null&&(f.types=v.types),F.T=f}}else try{f=a(u,r),sm(e,n,f)}catch(te){Vu(e,n,te)}}function sm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){rm(e,n,r)},function(r){return Vu(e,n,r)}):rm(e,n,a)}function rm(e,n,a){n.status="fulfilled",n.value=a,om(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,am(e,a)))}function Vu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,om(n),n=n.next;while(n!==r)}e.action=null}function om(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function lm(e,n){return n}function cm(e,n){if(Et){var a=Xt.formState;if(a!==null){e:{var r=ut;if(Et){if(Zt){t:{for(var u=Zt,f=hi;u.nodeType!==8;){if(!f){u=null;break t}if(u=pi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Zt=pi(u.nextSibling),r=u.data==="F!";break e}}Ca(r)}r=!1}r&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lm,lastRenderedState:n},a.queue=r,a=Rm.bind(null,ut,r),r.dispatch=a,r=Gu(!1),f=ju.bind(null,ut,!1,r.queue),r=Fn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Ex.bind(null,ut,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function um(e){var n=rn();return fm(n,Gt,e)}function fm(e,n,a){if(n=Bu(e,n,lm)[0],e=Dl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ho(n)}catch(v){throw v===er?yl:v}else r=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,sr(9,{destroy:void 0},Tx.bind(null,u,a),null)),[r,f,e]}function Tx(e,n){e.action=n}function hm(e){var n=rn(),a=Gt;if(a!==null)return fm(n,a,e);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function sr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ut.updateQueue,n===null&&(n=Rl(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function dm(){return rn().memoizedState}function Ul(e,n,a,r){var u=Fn();ut.flags|=e,u.memoizedState=sr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Nl(e,n,a,r){var u=rn();r=r===void 0?null:r;var f=u.memoizedState.inst;Gt!==null&&r!==null&&Lu(r,Gt.memoizedState.deps)?u.memoizedState=sr(n,f,a,r):(ut.flags|=e,u.memoizedState=sr(1|n,f,a,r))}function pm(e,n){Ul(8390656,8,e,n)}function ku(e,n){Nl(2048,8,e,n)}function Ax(e){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=Rl(),ut.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function mm(e){var n=rn().memoizedState;return Ax({ref:n,nextImpl:e}),function(){if((Ot&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function gm(e,n){return Nl(4,2,e,n)}function _m(e,n){return Nl(4,4,e,n)}function vm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xm(e,n,a){a=a!=null?a.concat([e]):null,Nl(4,4,vm.bind(null,n,e),a)}function Xu(){}function ym(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Lu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Sm(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Lu(n,r[1]))return r[0];if(r=e(),vs){Ne(!0);try{e()}finally{Ne(!1)}}return a.memoizedState=[r,n],r}function Wu(e,n,a){return a===void 0||($i&1073741824)!==0&&(yt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=M0(),ut.lanes|=e,Fa|=e,a)}function Mm(e,n,a,r){return Zn(a,n)?a:nr.current!==null?(e=Wu(e,a,r),Zn(e,n)||(fn=!0),e):($i&42)===0||($i&1073741824)!==0&&(yt&261930)===0?(fn=!0,e.memoizedState=a):(e=M0(),ut.lanes|=e,Fa|=e,n)}function bm(e,n,a,r,u){var f=k.p;k.p=f!==0&&8>f?f:8;var v=F.T,A={};F.T=A,ju(e,!1,n,a);try{var B=u(),te=F.S;if(te!==null&&te(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pe=Sx(B,r);po(e,n,pe,ti(e))}else po(e,n,r,ti(e))}catch(ve){po(e,n,{then:function(){},status:"rejected",reason:ve},ti())}finally{k.p=f,v!==null&&A.types!==null&&(v.types=A.types),F.T=v}}function wx(){}function qu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Em(e).queue;bm(e,u,n,ie,a===null?wx:function(){return Tm(e),a(r)})}function Em(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Tm(e){var n=Em(e);n.next===null&&(n=e.alternate.memoizedState),po(e,n.next.queue,{},ti())}function Yu(){return wn(Uo)}function Am(){return rn().memoizedState}function wm(){return rn().memoizedState}function Rx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=Na(a);var r=La(n,e,a);r!==null&&(Wn(r,n,a),lo(r,n,a)),n={cache:Mu()},e.payload=n;return}n=n.return}}function Cx(e,n,a){var r=ti();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ll(e)?Cm(n,a):(a=fu(e,n,a,r),a!==null&&(Wn(a,e,r),Dm(a,n,r)))}function Rm(e,n,a){var r=ti();po(e,n,a,r)}function po(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ll(e))Cm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,Zn(A,v))return dl(e,n,u,0),Xt===null&&hl(),!1}catch{}if(a=fu(e,n,u,r),a!==null)return Wn(a,e,r),Dm(a,n,r),!0}return!1}function ju(e,n,a,r){if(r={lane:2,revertLane:wf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ll(e)){if(n)throw Error(s(479))}else n=fu(e,a,r,2),n!==null&&Wn(n,e,2)}function Ll(e){var n=e.alternate;return e===ut||n!==null&&n===ut}function Cm(e,n){ir=Al=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Dm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Vr(e,a)}}var mo={readContext:wn,use:Cl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};mo.useEffectEvent=tn;var Um={readContext:wn,use:Cl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:pm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,vm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ul(4194308,4,e,n)},useInsertionEffect:function(e,n){Ul(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var r=e();if(vs){Ne(!0);try{e()}finally{Ne(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Fn();if(a!==void 0){var u=a(n);if(vs){Ne(!0);try{a(n)}finally{Ne(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Cx.bind(null,ut,e),[r.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=Gu(e);var n=e.queue,a=Rm.bind(null,ut,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(e,n){var a=Fn();return Wu(a,e,n)},useTransition:function(){var e=Gu(!1);return e=bm.bind(null,ut,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ut,u=Fn();if(Et){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xt===null)throw Error(s(349));(yt&127)!==0||Jp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,pm(em.bind(null,r,f,e),[e]),r.flags|=2048,sr(9,{destroy:void 0},$p.bind(null,r,f,a,n),null),a},useId:function(){var e=Fn(),n=Xt.identifierPrefix;if(Et){var a=Ui,r=Di;a=(r&~(1<<32-ze(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Mx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Yu,useFormState:cm,useActionState:cm,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,ut,!0,a),a.dispatch=n,[e,n]},useMemoCache:Fu,useCacheRefresh:function(){return Fn().memoizedState=Rx.bind(null,ut)},useEffectEvent:function(e){var n=Fn(),a={impl:e};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:wn,use:Cl,useCallback:ym,useContext:wn,useEffect:ku,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:Sm,useReducer:Dl,useRef:dm,useState:function(){return Dl(ea)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=rn();return Mm(a,Gt.memoizedState,e,n)},useTransition:function(){var e=Dl(ea)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:Yu,useFormState:um,useActionState:um,useOptimistic:function(e,n){var a=rn();return im(a,Gt,e,n)},useMemoCache:Fu,useCacheRefresh:wm};Zu.useEffectEvent=mm;var Nm={readContext:wn,use:Cl,useCallback:ym,useContext:wn,useEffect:ku,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:Sm,useReducer:Hu,useRef:dm,useState:function(){return Hu(ea)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=rn();return Gt===null?Wu(a,e,n):Mm(a,Gt.memoizedState,e,n)},useTransition:function(){var e=Hu(ea)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:Yu,useFormState:hm,useActionState:hm,useOptimistic:function(e,n){var a=rn();return Gt!==null?im(a,Gt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:wm};Nm.useEffectEvent=mm;function Ku(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ti(),u=Na(r);u.payload=n,a!=null&&(u.callback=a),n=La(e,u,r),n!==null&&(Wn(n,e,r),lo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ti(),u=Na(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(e,u,r),n!==null&&(Wn(n,e,r),lo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),r=Na(a);r.tag=2,n!=null&&(r.callback=n),n=La(e,r,a),n!==null&&(Wn(n,e,a),lo(n,e,a))}};function Lm(e,n,a,r,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!eo(a,r)||!eo(u,f):!0}function Om(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Qu.enqueueReplaceState(n,n.state,null)}function xs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Im(e){fl(e)}function Pm(e){console.error(e)}function zm(e){fl(e)}function Ol(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Fm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ju(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(e,n)},a}function Bm(e){return e=Na(e),e.tag=3,e}function Hm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Fm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Fm(n,a,r),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function Dx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?ql():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ef(e,r,u)),!1;case 22:return a.flags|=65536,r===Sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ef(e,r,u)),!1}throw Error(s(435,a.tag))}return Ef(e,r,u),ql(),!1}if(Et)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==_u&&(e=Error(s(422),{cause:r}),io(ci(e,a)))):(r!==_u&&(n=Error(s(423),{cause:r}),io(ci(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ci(r,a),u=Ju(e.stateNode,r,u),Ru(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=ci(f,a),bo===null?bo=[f]:bo.push(f),nn!==4&&(nn=2),n===null)return!0;r=ci(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ju(a.stateNode,r,e),Ru(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ba===null||!Ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Bm(u),Hm(u,e,a,r),Ru(a,u),!1}a=a.return}while(a!==null);return!1}var $u=Error(s(461)),fn=!1;function Rn(e,n,a,r){n.child=e===null?Xp(n,null,a,r):_s(n,e.child,a,r)}function Gm(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return ds(n),r=Ou(e,n,a,v,f,u),A=Iu(),e!==null&&!fn?(Pu(e,n,u),ta(e,n,u)):(Et&&A&&mu(n),n.flags|=1,Rn(e,n,r,u),n.child)}function Vm(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,km(e,n,f,r,u)):(e=ml(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(v,r)&&e.ref===n.ref)return ta(e,n,u)}return n.flags|=1,e=Zi(f,r),e.ref=n.ref,e.return=n,n.child=e}function km(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(eo(f,r)&&e.ref===n.ref)if(fn=!1,n.pendingProps=r=f,lf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,ta(e,n,u)}return ef(e,n,a,r,u)}function Xm(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Wm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&xl(n,f!==null?f.cachePool:null),f!==null?Yp(n,f):Du(),jp(n);else return r=n.lanes=536870912,Wm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(xl(n,f.cachePool),Yp(n,f),Ia(),n.memoizedState=null):(e!==null&&xl(n,null),Du(),Ia());return Rn(e,n,u,a),n.child}function go(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wm(e,n,a,r,u){var f=Eu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&xl(n,null),Du(),jp(n),e!==null&&Qs(e,n,r,!0),n.childLanes=u,null}function Il(e,n){return n=zl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function qm(e,n,a){return _s(n,e.child,null,a),e=Il(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function Ux(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Et){if(r.mode==="hidden")return e=Il(n,r),n.lanes=536870912,go(null,e);if(Nu(n),(e=Zt)?(e=ag(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Cp(e),a.return=n,n.child=a,An=n,Zt=null)):e=null,e===null)throw Ca(n);return n.lanes=536870912,null}return Il(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Nu(n),u)if(n.flags&256)n.flags&=-257,n=qm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Qs(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(r=Xt,r!==null&&(v=Ps(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,cs(e,v),Wn(r,e,v),$u;ql(),n=qm(e,n,a)}else e=f.treeContext,Zt=pi(v.nextSibling),An=n,Et=!0,Ra=null,hi=!1,e!==null&&Np(n,e),n=Il(n,r),n.flags|=4096;return n}return e=Zi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Pl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ef(e,n,a,r,u){return ds(n),a=Ou(e,n,a,r,void 0,u),r=Iu(),e!==null&&!fn?(Pu(e,n,u),ta(e,n,u)):(Et&&r&&mu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function Ym(e,n,a,r,u,f){return ds(n),n.updateQueue=null,a=Kp(n,r,a,u),Zp(e),r=Iu(),e!==null&&!fn?(Pu(e,n,f),ta(e,n,f)):(Et&&r&&mu(n),n.flags|=1,Rn(e,n,a,f),n.child)}function jm(e,n,a,r,u){if(ds(n),n.stateNode===null){var f=Ys,v=a.contextType;typeof v=="object"&&v!==null&&(f=wn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Au(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?wn(v):Ys,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Ku(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Qu.enqueueReplaceState(f,f.state,null),uo(n,r,f,u),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,B=xs(a,A);f.props=B;var te=f.context,pe=a.contextType;v=Ys,typeof pe=="object"&&pe!==null&&(v=wn(pe));var ve=a.getDerivedStateFromProps;pe=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||te!==v)&&Om(n,f,r,v),Ua=!1;var re=n.memoizedState;f.state=re,uo(n,r,f,u),co(),te=n.memoizedState,A||re!==te||Ua?(typeof ve=="function"&&(Ku(n,a,ve,r),te=n.memoizedState),(B=Ua||Lm(n,a,B,r,re,te,v))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=te),f.props=r,f.state=te,f.context=v,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,wu(e,n),v=n.memoizedProps,pe=xs(a,v),f.props=pe,ve=n.pendingProps,re=f.context,te=a.contextType,B=Ys,typeof te=="object"&&te!==null&&(B=wn(te)),A=a.getDerivedStateFromProps,(te=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==ve||re!==B)&&Om(n,f,r,B),Ua=!1,re=n.memoizedState,f.state=re,uo(n,r,f,u),co();var ue=n.memoizedState;v!==ve||re!==ue||Ua||e!==null&&e.dependencies!==null&&_l(e.dependencies)?(typeof A=="function"&&(Ku(n,a,A,r),ue=n.memoizedState),(pe=Ua||Lm(n,a,pe,r,re,ue,B)||e!==null&&e.dependencies!==null&&_l(e.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ue,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ue,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ue),f.props=r,f.state=ue,f.context=B,r=pe):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Pl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=_s(n,e.child,null,u),n.child=_s(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ta(e,n,u),e}function Zm(e,n,a,r){return fs(),n.flags|=256,Rn(e,n,a,r),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:Fp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function Km(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Et){if(u?Oa(n):Ia(),(e=Zt)?(e=ag(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Cp(e),a.return=n,n.child=a,An=n,Zt=null)):e=null,e===null)throw Ca(n);return Hf(e)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,u?(Ia(),u=n.mode,A=zl({mode:"hidden",children:A},u),r=us(r,u,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=nf(a),r.childLanes=af(e,v,a),n.memoizedState=tf,go(null,r)):(Oa(n),sf(n,A))}var B=e.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(f)n.flags&256?(Oa(n),n.flags&=-257,n=rf(e,n,a)):n.memoizedState!==null?(Ia(),n.child=e.child,n.flags|=128,n=null):(Ia(),A=r.fallback,u=n.mode,r=zl({mode:"visible",children:r.children},u),A=us(A,u,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,_s(n,e.child,null,a),r=n.child,r.memoizedState=nf(a),r.childLanes=af(e,v,a),n.memoizedState=tf,n=go(null,r));else if(Oa(n),Hf(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var te=v.dgst;v=te,r=Error(s(419)),r.stack="",r.digest=v,io({value:r,source:null,stack:null}),n=rf(e,n,a)}else if(fn||Qs(e,n,a,!1),v=(a&e.childLanes)!==0,fn||v){if(v=Xt,v!==null&&(r=Ps(v,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,cs(e,r),Wn(v,e,r),$u;Bf(A)||ql(),n=rf(e,n,a)}else Bf(A)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Zt=pi(A.nextSibling),An=n,Et=!0,Ra=null,hi=!1,e!==null&&Np(n,e),n=sf(n,r.children),n.flags|=4096);return n}return u?(Ia(),A=r.fallback,u=n.mode,B=e.child,te=B.sibling,r=Zi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,te!==null?A=Zi(te,A):(A=us(A,u,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,go(null,r),r=n.child,A=e.child.memoizedState,A===null?A=nf(a):(u=A.cachePool,u!==null?(B=cn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Fp(),A={baseLanes:A.baseLanes|a,cachePool:u}),r.memoizedState=A,r.childLanes=af(e,v,a),n.memoizedState=tf,go(e.child,r)):(Oa(n),a=e.child,e=a.sibling,a=Zi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function sf(e,n){return n=zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function zl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function rf(e,n,a){return _s(n,e.child,null,a),e=sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),yu(e.return,n,a)}function of(e,n,a,r,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Jm(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=sn.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,_e(sn,v),Rn(e,n,r,a),r=Et?no:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qm(e,a,n);else if(e.tag===19)Qm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Tl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),of(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Tl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}of(n,!0,a,null,f,r);break;case"together":of(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ta(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&_l(e)))}function Nx(e,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Da(n,cn,e.memoizedState.cache),fs();break;case 27:case 5:Ve(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Km(e,n,a):(Oa(n),e=ta(e,n,a),e!==null?e.sibling:null);Oa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Qs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Jm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(sn,sn.current),r)break;return null;case 22:return n.lanes=0,Xm(e,n,a,n.pendingProps);case 24:Da(n,cn,e.memoizedState.cache)}return ta(e,n,a)}function $m(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return fn=!1,Nx(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Et&&(n.flags&1048576)!==0&&Up(n,no,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=ms(n.elementType),n.type=e,typeof e=="function")hu(e)?(r=xs(e,r),n.tag=1,n=jm(null,n,e,r,a)):(n.tag=0,n=ef(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=Gm(null,n,e,r,a);break e}else if(u===z){n.tag=14,n=Vm(null,n,e,r,a);break e}}throw n=ce(e)||e,Error(s(306,n,""))}}return n;case 0:return ef(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=xs(r,n.pendingProps),jm(e,n,r,u,a);case 3:e:{if(De(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,wu(e,n),uo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Da(n,cn,r),r!==f.cache&&Su(n,[cn],a,!0),co(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Zm(e,n,r,a);break e}else if(r!==u){u=ci(Error(s(424)),n),io(u),n=Zm(e,n,r,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Zt=pi(e.firstChild),An=n,Et=!0,Ra=null,hi=!0,a=Xp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fs(),r===u){n=ta(e,n,a);break e}Rn(e,n,r,a)}n=n.child}return n;case 26:return Pl(e,n),e===null?(a=ug(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,e=n.pendingProps,r=$l(ne.current).createElement(a),r[ln]=n,r[yn]=e,Cn(r,a,e),w(r),n.stateNode=r):n.memoizedState=ug(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ve(n),e===null&&Et&&(r=n.stateNode=og(n.type,n.pendingProps,ne.current),An=n,hi=!0,u=Zt,ka(n.type)?(Gf=u,Zt=pi(r.firstChild)):Zt=u),Rn(e,n,n.pendingProps.children,a),Pl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Et&&((u=r=Zt)&&(r=ly(r,n.type,n.pendingProps,hi),r!==null?(n.stateNode=r,An=n,Zt=pi(r.firstChild),hi=!1,u=!0):u=!1),u||Ca(n)),Ve(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Pf(u,f)?r=null:v!==null&&Pf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Ou(e,n,bx,null,null,a),Uo._currentValue=u),Pl(e,n),Rn(e,n,r,a),n.child;case 6:return e===null&&Et&&((e=a=Zt)&&(a=cy(a,n.pendingProps,hi),a!==null?(n.stateNode=a,An=n,Zt=null,e=!0):e=!1),e||Ca(n)),null;case 13:return Km(e,n,a);case 4:return De(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=_s(n,null,r,a):Rn(e,n,r,a),n.child;case 11:return Gm(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Da(n,n.type,r.value),Rn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ds(n),u=wn(u),r=r(u),n.flags|=1,Rn(e,n,r,a),n.child;case 14:return Vm(e,n,n.type,n.pendingProps,a);case 15:return km(e,n,n.type,n.pendingProps,a);case 19:return Jm(e,n,a);case 31:return Ux(e,n,a);case 22:return Xm(e,n,a,n.pendingProps);case 24:return ds(n),r=wn(cn),e===null?(u=Eu(),u===null&&(u=Xt,f=Mu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Au(n),Da(n,cn,u)):((e.lanes&a)!==0&&(wu(e,n),uo(n,null,null,a),co()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,cn,r)):(r=f.cache,Da(n,cn,r),r!==u.cache&&Su(n,[cn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(e){e.flags|=4}function cf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(A0())e.flags|=8192;else throw gs=Sl,Tu}else e.flags&=-16777217}function e0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mg(n))if(A0())e.flags|=8192;else throw gs=Sl,Tu}function Fl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pt():536870912,e.lanes|=n,cr|=n)}function _o(e,n){if(!Et)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Lx(e,n,a){var r=n.pendingProps;switch(gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ji(cn),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ks(n)?na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vu())),Kt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(na(n),f!==null?(Kt(n),e0(n,f)):(Kt(n),cf(n,u,null,r,a))):f?f!==e.memoizedState?(na(n),Kt(n),e0(n,f)):(Kt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&na(n),Kt(n),cf(n,u,e,r,a)),null;case 27:if(ft(n),a=ne.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}e=we.current,Ks(n)?Lp(n):(e=og(u,r,a),n.stateNode=e,na(n))}return Kt(n),null;case 5:if(ft(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(f=we.current,Ks(n))Lp(n);else{var v=$l(ne.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[ln]=n,f[yn]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Cn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&na(n)}}return Kt(n),cf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ne.current,Ks(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=An,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||K0(e.nodeValue,a)),e||Ca(n,!0)}else e=$l(e).createTextNode(r),e[ln]=n,n.stateNode=e}return Kt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ks(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),e=!1}else a=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Kt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ks(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),Kt(n),null);case 4:return Xe(),e===null&&Uf(n.stateNode.containerInfo),Kt(n),null;case 10:return Ji(n.type),Kt(n),null;case 19:if(ae(sn),r=n.memoizedState,r===null)return Kt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)_o(r,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Tl(e),f!==null){for(n.flags|=128,_o(r,!1),e=f.updateQueue,n.updateQueue=e,Fl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Rp(a,e),a=a.sibling;return _e(sn,sn.current&1|2),Et&&Ki(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&S()>kl&&(n.flags|=128,u=!0,_o(r,!1),n.lanes=4194304)}else{if(!u)if(e=Tl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Fl(n,e),_o(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Et)return Kt(n),null}else 2*S()-r.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,u=!0,_o(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=S(),e.sibling=null,a=sn.current,_e(sn,u?a&1|2:a&1),Et&&Ki(n,r.treeForkCount),e):(Kt(n),null);case 22:case 23:return Jn(n),Uu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ae(ps),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(cn),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ox(e,n){switch(gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ji(cn),Xe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ft(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(sn),null;case 4:return Xe(),null;case 10:return Ji(n.type),null;case 22:case 23:return Jn(n),Uu(),e!==null&&ae(ps),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ji(cn),null;case 25:return null;default:return null}}function t0(e,n){switch(gu(n),n.tag){case 3:Ji(cn),Xe();break;case 26:case 27:case 5:ft(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:ae(sn);break;case 10:Ji(n.type);break;case 22:case 23:Jn(n),Uu(),e!==null&&ae(ps);break;case 24:Ji(cn)}}function vo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(A){Bt(n,n.return,A)}}function Pa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var B=a,te=A;try{te()}catch(pe){Bt(u,B,pe)}}}r=r.next}while(r!==f)}}catch(pe){Bt(n,n.return,pe)}}function n0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{qp(n,a)}catch(r){Bt(e,e.return,r)}}}function i0(e,n,a){a.props=xs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Bt(e,n,r)}}function xo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Bt(e,n,u)}}function Ni(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Bt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(e,n,u)}else a.current=null}function a0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Bt(e,e.return,u)}}function uf(e,n,a){try{var r=e.stateNode;ny(r,e.type,a,n),r[yn]=n}catch(u){Bt(e,e.return,u)}}function s0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function ff(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||s0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(hf(e,n,a),e=e.sibling;e!==null;)hf(e,n,a),e=e.sibling}function Bl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bl(e,n,a),e=e.sibling;e!==null;)Bl(e,n,a),e=e.sibling}function r0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,r,a),n[ln]=e,n[yn]=a}catch(f){Bt(e,e.return,f)}}var ia=!1,hn=!1,df=!1,o0=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Ix(e,n){if(e=e.containerInfo,Of=rc,e=xp(e),su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,A=-1,B=-1,te=0,pe=0,ve=e,re=null;t:for(;;){for(var ue;ve!==a||u!==0&&ve.nodeType!==3||(A=v+u),ve!==f||r!==0&&ve.nodeType!==3||(B=v+r),ve.nodeType===3&&(v+=ve.nodeValue.length),(ue=ve.firstChild)!==null;)re=ve,ve=ue;for(;;){if(ve===e)break t;if(re===a&&++te===u&&(A=v),re===f&&++pe===r&&(B=v),(ue=ve.nextSibling)!==null)break;ve=re,re=ve.parentNode}ve=ue}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},rc=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ye=xs(a.type,u);e=r.getSnapshotBeforeUpdate(Ye,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(at){Bt(a,a.return,at)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ff(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function l0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),r&4&&vo(5,a);break;case 1:if(sa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Bt(a,a.return,v)}else{var u=xs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Bt(a,a.return,v)}}r&64&&n0(a),r&512&&xo(a,a.return);break;case 3:if(sa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qp(e,n)}catch(v){Bt(a,a.return,v)}}break;case 27:n===null&&r&4&&r0(a);case 26:case 5:sa(e,a),n===null&&r&4&&a0(a),r&512&&xo(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),r&4&&f0(e,a);break;case 13:sa(e,a),r&4&&h0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Xx.bind(null,a),uy(e,a))));break;case 22:if(r=a.memoizedState!==null||ia,!r){n=n!==null&&n.memoizedState!==null||hn,u=ia;var f=hn;ia=r,(hn=n)&&!f?ra(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),ia=u,hn=f}break;case 30:break;default:sa(e,a)}}function c0(e){var n=e.alternate;n!==null&&(e.alternate=null,c0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,Gn=!1;function aa(e,n,a){for(a=a.child;a!==null;)u0(e,n,a),a=a.sibling}function u0(e,n,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(ye,a)}catch{}switch(a.tag){case 26:hn||Ni(a,n),aa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Ni(a,n);var r=Jt,u=Gn;ka(a.type)&&(Jt=a.stateNode,Gn=!1),aa(e,n,a),Ro(a.stateNode),Jt=r,Gn=u;break;case 5:hn||Ni(a,n);case 6:if(r=Jt,u=Gn,Jt=null,aa(e,n,a),Jt=r,Gn=u,Jt!==null)if(Gn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Jt!==null&&(Gn?(e=Jt,ng(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_r(e)):ng(Jt,a.stateNode));break;case 4:r=Jt,u=Gn,Jt=a.stateNode.containerInfo,Gn=!0,aa(e,n,a),Jt=r,Gn=u;break;case 0:case 11:case 14:case 15:Pa(2,a,n),hn||Pa(4,a,n),aa(e,n,a);break;case 1:hn||(Ni(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&i0(a,n,r)),aa(e,n,a);break;case 21:aa(e,n,a);break;case 22:hn=(r=hn)||a.memoizedState!==null,aa(e,n,a),hn=r;break;default:aa(e,n,a)}}function f0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_r(e)}catch(a){Bt(n,n.return,a)}}}function h0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_r(e)}catch(a){Bt(n,n.return,a)}}function Px(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new o0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new o0),n;default:throw Error(s(435,e.tag))}}function Hl(e,n){var a=Px(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Wx.bind(null,e,r);r.then(u,u)}})}function Vn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,v=n,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(ka(A.type)){Jt=A.stateNode,Gn=!1;break e}break;case 5:Jt=A.stateNode,Gn=!1;break e;case 3:case 4:Jt=A.stateNode.containerInfo,Gn=!0;break e}A=A.return}if(Jt===null)throw Error(s(160));u0(f,v,u),Jt=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)d0(n,e),n=n.sibling}var Mi=null;function d0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(n,e),kn(e),r&4&&(Pa(3,e,e.return),vo(3,e),Pa(5,e,e.return));break;case 1:Vn(n,e),kn(e),r&512&&(hn||a===null||Ni(a,a.return)),r&64&&ia&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Mi;if(Vn(n,e),kn(e),r&512&&(hn||a===null||Ni(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[as]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,r,a),f[ln]=e,w(f),r=f;break e;case"link":var v=dg("link","href",u).get(r+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break t}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=dg("meta","content",u).get(r+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break t}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[ln]=e,w(f),r=f}e.stateNode=r}else pg(u,e.type,e.stateNode);else e.stateNode=hg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?pg(u,e.type,e.stateNode):hg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,e),kn(e),r&512&&(hn||a===null||Ni(a,a.return)),a!==null&&r&4&&uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,e),kn(e),r&512&&(hn||a===null||Ni(a,a.return)),e.flags&32){u=e.stateNode;try{pn(u,"")}catch(Ye){Bt(e,e.return,Ye)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,uf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(df=!0);break;case 6:if(Vn(n,e),kn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ye){Bt(e,e.return,Ye)}}break;case 3:if(nc=null,u=Mi,Mi=ec(n.containerInfo),Vn(n,e),Mi=u,kn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(Ye){Bt(e,e.return,Ye)}df&&(df=!1,p0(e));break;case 4:r=Mi,Mi=ec(e.stateNode.containerInfo),Vn(n,e),kn(e),Mi=r;break;case 12:Vn(n,e),kn(e);break;case 31:Vn(n,e),kn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Hl(e,r)));break;case 13:Vn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vl=S()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Hl(e,r)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,te=ia,pe=hn;if(ia=te||u,hn=pe||B,Vn(n,e),hn=pe,ia=te,kn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ia||hn||ys(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=B.stateNode;var ve=B.memoizedProps.style,re=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;A.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(Ye){Bt(B,B.return,Ye)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ye){Bt(B,B.return,Ye)}}}else if(n.tag===18){if(a===null){B=n;try{var ue=B.stateNode;u?ig(ue,!0):ig(B.stateNode,!1)}catch(Ye){Bt(B,B.return,Ye)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Hl(e,a))));break;case 19:Vn(n,e),kn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Hl(e,r)));break;case 30:break;case 21:break;default:Vn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(s0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=ff(e);Bl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(pn(v,""),a.flags&=-33);var A=ff(e);Bl(e,A,v);break;case 3:case 4:var B=a.stateNode.containerInfo,te=ff(e);hf(e,te,B);break;default:throw Error(s(161))}}catch(pe){Bt(e,e.return,pe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function p0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;p0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)l0(e,n.alternate,n),n=n.sibling}function ys(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),ys(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&i0(n,n.return,a),ys(n);break;case 27:Ro(n.stateNode);case 26:case 5:Ni(n,n.return),ys(n);break;case 22:n.memoizedState===null&&ys(n);break;case 30:ys(n);break;default:ys(n)}e=e.sibling}}function ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ra(u,f,a),vo(4,f);break;case 1:if(ra(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Bt(r,r.return,te)}if(r=f,u=r.updateQueue,u!==null){var A=r.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Wp(B[u],A)}catch(te){Bt(r,r.return,te)}}a&&v&64&&n0(f),xo(f,f.return);break;case 27:r0(f);case 26:case 5:ra(u,f,a),a&&r===null&&v&4&&a0(f),xo(f,f.return);break;case 12:ra(u,f,a);break;case 31:ra(u,f,a),a&&v&4&&f0(u,f);break;case 13:ra(u,f,a),a&&v&4&&h0(u,f);break;case 22:f.memoizedState===null&&ra(u,f,a),xo(f,f.return);break;case 30:break;default:ra(u,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ao(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e))}function bi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)m0(e,n,a,r),n=n.sibling}function m0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,r),u&2048&&vo(9,n);break;case 1:bi(e,n,a,r);break;case 3:bi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e)));break;case 12:if(u&2048){bi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Bt(n,n.return,B)}}else bi(e,n,a,r);break;case 31:bi(e,n,a,r);break;case 13:bi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,r):yo(e,n):f._visibility&2?bi(e,n,a,r):(f._visibility|=2,rr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&pf(v,n);break;case 24:bi(e,n,a,r),u&2048&&mf(n.alternate,n);break;default:bi(e,n,a,r)}}function rr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,A=a,B=r,te=v.flags;switch(v.tag){case 0:case 11:case 15:rr(f,v,A,B,u),vo(8,v);break;case 23:break;case 22:var pe=v.stateNode;v.memoizedState!==null?pe._visibility&2?rr(f,v,A,B,u):yo(f,v):(pe._visibility|=2,rr(f,v,A,B,u)),u&&te&2048&&pf(v.alternate,v);break;case 24:rr(f,v,A,B,u),u&&te&2048&&mf(v.alternate,v);break;default:rr(f,v,A,B,u)}n=n.sibling}}function yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:yo(a,r),u&2048&&pf(r.alternate,r);break;case 24:yo(a,r),u&2048&&mf(r.alternate,r);break;default:yo(a,r)}n=n.sibling}}var So=8192;function or(e,n,a){if(e.subtreeFlags&So)for(e=e.child;e!==null;)g0(e,n,a),e=e.sibling}function g0(e,n,a){switch(e.tag){case 26:or(e,n,a),e.flags&So&&e.memoizedState!==null&&My(a,Mi,e.memoizedState,e.memoizedProps);break;case 5:or(e,n,a);break;case 3:case 4:var r=Mi;Mi=ec(e.stateNode.containerInfo),or(e,n,a),Mi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=So,So=16777216,or(e,n,a),So=r):or(e,n,a));break;default:or(e,n,a)}}function _0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,x0(r,e)}_0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)v0(e),e=e.sibling}function v0(e){switch(e.tag){case 0:case 11:case 15:Mo(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:Mo(e);break;case 12:Mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Gl(e)):Mo(e);break;default:Mo(e)}}function Gl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,x0(r,e)}_0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}e=e.sibling}}function x0(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ao(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else e:for(a=e;vn!==null;){r=vn;var u=r.sibling,f=r.return;if(c0(r),r===a){vn=null;break e}if(u!==null){u.return=f,vn=u;break e}vn=f}}}var zx={getCacheForType:function(e){var n=wn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},Fx=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Xt=null,vt=null,yt=0,Ft=0,$n=null,za=!1,lr=!1,gf=!1,oa=0,nn=0,Fa=0,Ss=0,_f=0,ei=0,cr=0,bo=null,Xn=null,vf=!1,Vl=0,y0=0,kl=1/0,Xl=null,Ba=null,mn=0,Ha=null,ur=null,la=0,xf=0,yf=null,S0=null,Eo=0,Sf=null;function ti(){return(Ot&2)!==0&&yt!==0?yt&-yt:F.T!==null?wf():Xr()}function M0(){if(ei===0)if((yt&536870912)===0||Et){var e=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),ei=e}else ei=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ei}function Wn(e,n,a){(e===Xt&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)&&(fr(e,0),Ga(e,yt,ei,!1)),Un(e,a),((Ot&2)===0||e!==Xt)&&(e===Xt&&((Ot&2)===0&&(Ss|=a),nn===4&&Ga(e,yt,ei,!1)),Li(e))}function b0(e,n,a){if((Ot&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ce(e,n),u=r?Gx(e,n):bf(e,n,!0),f=r;do{if(u===0){lr&&!r&&Ga(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Bx(a)){u=bf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var A=e;u=bo;var B=A.current.memoizedState.isDehydrated;if(B&&(fr(A,v).flags|=256),v=bf(A,v,!1),v!==2){if(gf&&!B){A.errorRecoveryDisabledLanes|=f,Ss|=f,u=4;break e}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){fr(e,0),Ga(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ga(r,n,ei,!za);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Vl+300-S(),10<u)){if(Ga(r,n,ei,!za),xe(r,0,!0)!==0)break e;la=n,r.timeoutHandle=eg(E0.bind(null,r,a,Xn,Xl,vf,n,ei,Ss,cr,za,f,"Throttled",-0,0),u);break e}E0(r,a,Xn,Xl,vf,n,ei,Ss,cr,za,f,null,-0,0)}}break}while(!0);Li(e)}function E0(e,n,a,r,u,f,v,A,B,te,pe,ve,re,ue){if(e.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},g0(n,f,ve);var Ye=(f&62914560)===f?Vl-S():(f&4194048)===f?y0-S():0;if(Ye=by(ve,Ye),Ye!==null){la=f,e.cancelPendingCommit=Ye(N0.bind(null,e,n,f,a,r,u,v,A,B,pe,ve,null,re,ue)),Ga(e,f,v,!te);return}}N0(e,n,f,a,r,u,v,A,B)}function Bx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(e,n,a,r){n&=~_f,n&=~Ss,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-ze(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&nl(e,a,n)}function Wl(){return(Ot&6)===0?(To(0),!1):!0}function Mf(){if(vt!==null){if(Ft===0)var e=vt.return;else e=vt,Qi=hs=null,zu(e),tr=null,ro=0,e=vt;for(;e!==null;)t0(e.alternate,e),e=e.return;vt=null}}function fr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,Mf(),Xt=e,vt=a=Zi(e.current,null),yt=n,Ft=0,$n=null,za=!1,lr=Ce(e,n),gf=!1,cr=ei=_f=Ss=Fa=nn=0,Xn=bo=null,vf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-ze(r),f=1<<u;n|=e[u],r&=~f}return oa=n,hl(),a}function T0(e,n){ut=null,F.H=mo,n===er||n===yl?(n=Gp(),Ft=3):n===Tu?(n=Gp(),Ft=4):Ft=n===$u?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,vt===null&&(nn=1,Ol(e,ci(n,e.current)))}function A0(){var e=Qn.current;return e===null?!0:(yt&4194048)===yt?di===null:(yt&62914560)===yt||(yt&536870912)!==0?e===di:!1}function w0(){var e=F.H;return F.H=mo,e===null?mo:e}function R0(){var e=F.A;return F.A=zx,e}function ql(){nn=4,za||(yt&4194048)!==yt&&Qn.current!==null||(lr=!0),(Fa&134217727)===0&&(Ss&134217727)===0||Xt===null||Ga(Xt,yt,ei,!1)}function bf(e,n,a){var r=Ot;Ot|=2;var u=w0(),f=R0();(Xt!==e||yt!==n)&&(Xl=null,fr(e,n)),n=!1;var v=nn;e:do try{if(Ft!==0&&vt!==null){var A=vt,B=$n;switch(Ft){case 8:Mf(),v=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var te=Ft;if(Ft=0,$n=null,hr(e,A,B,te),a&&lr){v=0;break e}break;default:te=Ft,Ft=0,$n=null,hr(e,A,B,te)}}Hx(),v=nn;break}catch(pe){T0(e,pe)}while(!0);return n&&e.shellSuspendCounter++,Qi=hs=null,Ot=r,F.H=u,F.A=f,vt===null&&(Xt=null,yt=0,hl()),v}function Hx(){for(;vt!==null;)C0(vt)}function Gx(e,n){var a=Ot;Ot|=2;var r=w0(),u=R0();Xt!==e||yt!==n?(Xl=null,kl=S()+500,fr(e,n)):lr=Ce(e,n);e:do try{if(Ft!==0&&vt!==null){n=vt;var f=$n;t:switch(Ft){case 1:Ft=0,$n=null,hr(e,n,f,1);break;case 2:case 9:if(Bp(f)){Ft=0,$n=null,D0(n);break}n=function(){Ft!==2&&Ft!==9||Xt!==e||(Ft=7),Li(e)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Bp(f)?(Ft=0,$n=null,D0(n)):(Ft=0,$n=null,hr(e,n,f,7));break;case 5:var v=null;switch(vt.tag){case 26:v=vt.memoizedState;case 5:case 27:var A=vt;if(v?mg(v):A.stateNode.complete){Ft=0,$n=null;var B=A.sibling;if(B!==null)vt=B;else{var te=A.return;te!==null?(vt=te,Yl(te)):vt=null}break t}}Ft=0,$n=null,hr(e,n,f,5);break;case 6:Ft=0,$n=null,hr(e,n,f,6);break;case 8:Mf(),nn=6;break e;default:throw Error(s(462))}}Vx();break}catch(pe){T0(e,pe)}while(!0);return Qi=hs=null,F.H=r,F.A=u,Ot=a,vt!==null?0:(Xt=null,yt=0,hl(),nn)}function Vx(){for(;vt!==null&&!Ie();)C0(vt)}function C0(e){var n=$m(e.alternate,e,oa);e.memoizedProps=e.pendingProps,n===null?Yl(e):vt=n}function D0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Ym(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=Ym(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:zu(n);default:t0(a,n),n=vt=Rp(n,oa),n=$m(a,n,oa)}e.memoizedProps=e.pendingProps,n===null?Yl(e):vt=n}function hr(e,n,a,r){Qi=hs=null,zu(n),tr=null,ro=0;var u=n.return;try{if(Dx(e,u,n,a,yt)){nn=1,Ol(e,ci(a,e.current)),vt=null;return}}catch(f){if(u!==null)throw vt=u,f;nn=1,Ol(e,ci(a,e.current)),vt=null;return}n.flags&32768?(Et||r===1?e=!0:lr||(yt&536870912)!==0?e=!1:(za=e=!0,(r===2||r===9||r===3||r===6)&&(r=Qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),U0(n,e)):Yl(n)}function Yl(e){var n=e;do{if((n.flags&32768)!==0){U0(n,za);return}e=n.return;var a=Lx(n.alternate,n,oa);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=e}while(n!==null);nn===0&&(nn=5)}function U0(e,n){do{var a=Ox(e.alternate,e);if(a!==null){a.flags&=32767,vt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){vt=e;return}vt=e=a}while(e!==null);nn=6,vt=null}function N0(e,n,a,r,u,f,v,A,B){e.cancelPendingCommit=null;do jl();while(mn!==0);if((Ot&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=uu,vi(e,a,f,v,A,B),e===Xt&&(vt=Xt=null,yt=0),ur=n,Ha=e,la=a,xf=f,yf=u,S0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qx(K,function(){return z0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=F.T,F.T=null,u=k.p,k.p=2,v=Ot,Ot|=4;try{Ix(e,n,a)}finally{Ot=v,k.p=u,F.T=r}}mn=1,L0(),O0(),I0()}}function L0(){if(mn===1){mn=0;var e=Ha,n=ur,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var r=k.p;k.p=2;var u=Ot;Ot|=4;try{d0(n,e);var f=If,v=xp(e.containerInfo),A=f.focusedElem,B=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&vp(A.ownerDocument.documentElement,A)){if(B!==null&&su(A)){var te=B.start,pe=B.end;if(pe===void 0&&(pe=te),"selectionStart"in A)A.selectionStart=te,A.selectionEnd=Math.min(pe,A.value.length);else{var ve=A.ownerDocument||document,re=ve&&ve.defaultView||window;if(re.getSelection){var ue=re.getSelection(),Ye=A.textContent.length,at=Math.min(B.start,Ye),kt=B.end===void 0?at:Math.min(B.end,Ye);!ue.extend&&at>kt&&(v=kt,kt=at,at=v);var j=_p(A,at),X=_p(A,kt);if(j&&X&&(ue.rangeCount!==1||ue.anchorNode!==j.node||ue.anchorOffset!==j.offset||ue.focusNode!==X.node||ue.focusOffset!==X.offset)){var ee=ve.createRange();ee.setStart(j.node,j.offset),ue.removeAllRanges(),at>kt?(ue.addRange(ee),ue.extend(X.node,X.offset)):(ee.setEnd(X.node,X.offset),ue.addRange(ee))}}}}for(ve=[],ue=A;ue=ue.parentNode;)ue.nodeType===1&&ve.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ve.length;A++){var me=ve[A];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}rc=!!Of,If=Of=null}finally{Ot=u,k.p=r,F.T=a}}e.current=n,mn=2}}function O0(){if(mn===2){mn=0;var e=Ha,n=ur,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var r=k.p;k.p=2;var u=Ot;Ot|=4;try{l0(e,n.alternate,n)}finally{Ot=u,k.p=r,F.T=a}}mn=3}}function I0(){if(mn===4||mn===3){mn=0,D();var e=Ha,n=ur,a=la,r=S0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,ur=Ha=null,P0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ba=null),zs(a),n=n.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(ye,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=F.T,u=k.p,k.p=2,F.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];f(A.value,{componentStack:A.stack})}}finally{F.T=n,k.p=u}}(la&3)!==0&&jl(),Li(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Sf?Eo++:(Eo=0,Sf=e):Eo=0,To(0)}}function P0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ao(n)))}function jl(){return L0(),O0(),I0(),z0()}function z0(){if(mn!==5)return!1;var e=Ha,n=xf;xf=0;var a=zs(la),r=F.T,u=k.p;try{k.p=32>a?32:a,F.T=null,a=yf,yf=null;var f=Ha,v=la;if(mn=0,ur=Ha=null,la=0,(Ot&6)!==0)throw Error(s(331));var A=Ot;if(Ot|=4,v0(f.current),m0(f,f.current,v,a),Ot=A,To(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(ye,f)}catch{}return!0}finally{k.p=u,F.T=r,P0(e,n)}}function F0(e,n,a){n=ci(a,n),n=Ju(e.stateNode,n,2),e=La(e,n,2),e!==null&&(Un(e,2),Li(e))}function Bt(e,n,a){if(e.tag===3)F0(e,e,a);else for(;n!==null;){if(n.tag===3){F0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ba===null||!Ba.has(r))){e=ci(a,e),a=Bm(2),r=La(n,a,2),r!==null&&(Hm(a,r,n,e),Un(r,2),Li(r));break}}n=n.return}}function Ef(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Fx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(gf=!0,u.add(a),e=kx.bind(null,e,n,a),n.then(e,e))}function kx(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xt===e&&(yt&a)===a&&(nn===4||nn===3&&(yt&62914560)===yt&&300>S()-Vl?(Ot&2)===0&&fr(e,0):_f|=a,cr===yt&&(cr=0)),Li(e)}function B0(e,n){n===0&&(n=Pt()),e=cs(e,n),e!==null&&(Un(e,n),Li(e))}function Xx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),B0(e,a)}function Wx(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),B0(e,a)}function qx(e,n){return Je(e,n)}var Zl=null,dr=null,Tf=!1,Kl=!1,Af=!1,Va=0;function Li(e){e!==dr&&e.next===null&&(dr===null?Zl=dr=e:dr=dr.next=e),Kl=!0,Tf||(Tf=!0,jx())}function To(e,n){if(!Af&&Kl){Af=!0;do for(var a=!1,r=Zl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-ze(42|e)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,k0(r,f))}else f=yt,f=xe(r,r===Xt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ce(r,f)||(a=!0,k0(r,f));r=r.next}while(a);Af=!1}}function Yx(){H0()}function H0(){Kl=Tf=!1;var e=0;Va!==0&&ay()&&(e=Va);for(var n=S(),a=null,r=Zl;r!==null;){var u=r.next,f=G0(r,n);f===0?(r.next=null,a===null?Zl=u:a.next=u,u===null&&(dr=a)):(a=r,(e!==0||(f&3)!==0)&&(Kl=!0)),r=u}mn!==0&&mn!==5||To(e),Va!==0&&(Va=0)}function G0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-ze(f),A=1<<v,B=u[v];B===-1?((A&a)===0||(A&r)!==0)&&(u[v]=rt(A,n)):B<=n&&(e.expiredLanes|=A),f&=~A}if(n=Xt,a=yt,a=xe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&$e(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ce(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&$e(r),zs(a)){case 2:case 8:a=fe;break;case 32:a=K;break;case 268435456:a=Me;break;default:a=K}return r=V0.bind(null,e),a=Je(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&$e(r),e.callbackPriority=2,e.callbackNode=null,2}function V0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var r=yt;return r=xe(e,e===Xt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(b0(e,r,n),G0(e,S()),e.callbackNode!=null&&e.callbackNode===a?V0.bind(null,e):null)}function k0(e,n){if(jl())return null;b0(e,n,!0)}function jx(){ry(function(){(Ot&6)!==0?Je(oe,Yx):H0()})}function wf(){if(Va===0){var e=Js;e===0&&(e=Oe,Oe<<=1,(Oe&261888)===0&&(Oe=256)),Va=e}return Va}function X0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:al(""+e)}function W0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Zx(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=X0((u[yn]||null).action),v=r.submitter;v&&(n=(n=v[yn]||null)?X0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new ll("action","action",null,r,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var B=v?W0(u,v):new FormData(u);qu(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(A.preventDefault(),B=v?W0(u,v):new FormData(u),qu(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Rf=0;Rf<cu.length;Rf++){var Cf=cu[Rf],Kx=Cf.toLowerCase(),Qx=Cf[0].toUpperCase()+Cf.slice(1);Si(Kx,"on"+Qx)}Si(Mp,"onAnimationEnd"),Si(bp,"onAnimationIteration"),Si(Ep,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(dx,"onTransitionRun"),Si(px,"onTransitionStart"),Si(mx,"onTransitionCancel"),Si(Tp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function q0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var A=r[v],B=A.instance,te=A.currentTarget;if(A=A.listener,B!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(pe){fl(pe)}u.currentTarget=null,f=B}else for(v=0;v<r.length;v++){if(A=r[v],B=A.instance,te=A.currentTarget,A=A.listener,B!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(pe){fl(pe)}u.currentTarget=null,f=B}}}}function xt(e,n){var a=n[Fs];a===void 0&&(a=n[Fs]=new Set);var r=e+"__bubble";a.has(r)||(Y0(n,e,2,!1),a.add(r))}function Df(e,n,a){var r=0;n&&(r|=4),Y0(a,e,r,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Uf(e){if(!e[Ql]){e[Ql]=!0,Y.forEach(function(a){a!=="selectionchange"&&(Jx.has(a)||Df(a,!1,e),Df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,Df("selectionchange",!1,n))}}function Y0(e,n,a,r){switch(Mg(n)){case 2:var u=Ay;break;case 8:u=wy;break;default:u=qf}a=u.bind(null,n,a,e),u=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Nf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=r.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=ba(A),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){r=f=v;continue e}A=A.parentNode}}r=r.return}Jd(function(){var te=f,pe=jc(a),ve=[];e:{var re=Ap.get(e);if(re!==void 0){var ue=ll,Ye=e;switch(e){case"keypress":if(rl(a)===0)break e;case"keydown":case"keyup":ue=Wv;break;case"focusin":Ye="focus",ue=eu;break;case"focusout":Ye="blur",ue=eu;break;case"beforeblur":case"afterblur":ue=eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=jv;break;case Mp:case bp:case Ep:ue=Pv;break;case Tp:ue=Kv;break;case"scroll":case"scrollend":ue=Uv;break;case"wheel":ue=Jv;break;case"copy":case"cut":case"paste":ue=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=ip;break;case"toggle":case"beforetoggle":ue=ex}var at=(n&4)!==0,kt=!at&&(e==="scroll"||e==="scrollend"),j=at?re!==null?re+"Capture":null:re;at=[];for(var X=te,ee;X!==null;){var me=X;if(ee=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||ee===null||j===null||(me=Yr(X,j),me!=null&&at.push(wo(X,me,ee))),kt)break;X=X.return}0<at.length&&(re=new ue(re,Ye,null,a,pe),ve.push({event:re,listeners:at}))}}if((n&7)===0){e:{if(re=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",re&&a!==Yc&&(Ye=a.relatedTarget||a.fromElement)&&(ba(Ye)||Ye[xi]))break e;if((ue||re)&&(re=pe.window===pe?pe:(re=pe.ownerDocument)?re.defaultView||re.parentWindow:window,ue?(Ye=a.relatedTarget||a.toElement,ue=te,Ye=Ye?ba(Ye):null,Ye!==null&&(kt=c(Ye),at=Ye.tag,Ye!==kt||at!==5&&at!==27&&at!==6)&&(Ye=null)):(ue=null,Ye=te),ue!==Ye)){if(at=tp,me="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(at=ip,me="onPointerLeave",j="onPointerEnter",X="pointer"),kt=ue==null?re:ss(ue),ee=Ye==null?re:ss(Ye),re=new at(me,X+"leave",ue,a,pe),re.target=kt,re.relatedTarget=ee,me=null,ba(pe)===te&&(at=new at(j,X+"enter",Ye,a,pe),at.target=ee,at.relatedTarget=kt,me=at),kt=me,ue&&Ye)t:{for(at=$x,j=ue,X=Ye,ee=0,me=j;me;me=at(me))ee++;me=0;for(var tt=X;tt;tt=at(tt))me++;for(;0<ee-me;)j=at(j),ee--;for(;0<me-ee;)X=at(X),me--;for(;ee--;){if(j===X||X!==null&&j===X.alternate){at=j;break t}j=at(j),X=at(X)}at=null}else at=null;ue!==null&&j0(ve,re,ue,at,!1),Ye!==null&&kt!==null&&j0(ve,kt,Ye,at,!0)}}e:{if(re=te?ss(te):window,ue=re.nodeName&&re.nodeName.toLowerCase(),ue==="select"||ue==="input"&&re.type==="file")var Dt=fp;else if(cp(re))if(hp)Dt=ux;else{Dt=lx;var Qe=ox}else ue=re.nodeName,!ue||ue.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?te&&yi(te.elementType)&&(Dt=fp):Dt=cx;if(Dt&&(Dt=Dt(e,te))){up(ve,Dt,a,pe);break e}Qe&&Qe(e,re,te),e==="focusout"&&te&&re.type==="number"&&te.memoizedProps.value!=null&&Mn(re,"number",re.value)}switch(Qe=te?ss(te):window,e){case"focusin":(cp(Qe)||Qe.contentEditable==="true")&&(Xs=Qe,ru=te,to=null);break;case"focusout":to=ru=Xs=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,yp(ve,a,pe);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":yp(ve,a,pe)}var dt;if(nu)e:{switch(e){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else ks?op(e,a)&&(St="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(ap&&a.locale!=="ko"&&(ks||St!=="onCompositionStart"?St==="onCompositionEnd"&&ks&&(dt=$d()):(Aa=pe,Qc="value"in Aa?Aa.value:Aa.textContent,ks=!0)),Qe=Jl(te,St),0<Qe.length&&(St=new np(St,e,null,a,pe),ve.push({event:St,listeners:Qe}),dt?St.data=dt:(dt=lp(a),dt!==null&&(St.data=dt)))),(dt=nx?ix(e,a):ax(e,a))&&(St=Jl(te,"onBeforeInput"),0<St.length&&(Qe=new np("onBeforeInput","beforeinput",null,a,pe),ve.push({event:Qe,listeners:St}),Qe.data=dt)),Zx(ve,e,te,a,pe)}q0(ve,n)})}function wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Jl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Yr(e,a),u!=null&&r.unshift(wo(e,u,f)),u=Yr(e,n),u!=null&&r.push(wo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function $x(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function j0(e,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var A=a,B=A.alternate,te=A.stateNode;if(A=A.tag,B!==null&&B===r)break;A!==5&&A!==26&&A!==27||te===null||(B=te,u?(te=Yr(a,f),te!=null&&v.unshift(wo(a,te,B))):u||(te=Yr(a,f),te!=null&&v.push(wo(a,te,B)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var ey=/\r\n?/g,ty=/\u0000|\uFFFD/g;function Z0(e){return(typeof e=="string"?e:""+e).replace(ey,`
`).replace(ty,"")}function K0(e,n){return n=Z0(n),Z0(e)===n}function Vt(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||pn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&pn(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,a,r);break;case"style":Hs(e,r,f);break;case"data":if(n!=="object"){nt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=al(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(e,n,"name",u.name,u,null),Vt(e,n,"formEncType",u.formEncType,u,null),Vt(e,n,"formMethod",u.formMethod,u,null),Vt(e,n,"formTarget",u.formTarget,u,null)):(Vt(e,n,"encType",u.encType,u,null),Vt(e,n,"method",u.method,u,null),Vt(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=al(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Yi);break;case"onScroll":r!=null&&xt("scroll",e);break;case"onScrollEnd":r!=null&&xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=al(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":xt("beforetoggle",e),xt("toggle",e),Ze(e,"popover",r);break;case"xlinkActuate":Ke(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ke(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ke(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ke(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ke(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ke(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ke(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ke(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ke(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ze(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Cv.get(a)||a,Ze(e,a,r))}}function Lf(e,n,a,r,u,f){switch(a){case"style":Hs(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?pn(e,r):(typeof r=="number"||typeof r=="bigint")&&pn(e,""+r);break;case"onScroll":r!=null&&xt("scroll",e);break;case"onScrollEnd":r!=null&&xt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Ze(e,a,r)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",e),xt("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(e,n,f,v,a,null)}}u&&Vt(e,n,"srcSet",a.srcSet,a,null),r&&Vt(e,n,"src",a.src,a,null);return;case"input":xt("invalid",e);var A=f=v=u=null,B=null,te=null;for(r in a)if(a.hasOwnProperty(r)){var pe=a[r];if(pe!=null)switch(r){case"name":u=pe;break;case"type":v=pe;break;case"checked":B=pe;break;case"defaultChecked":te=pe;break;case"value":f=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Vt(e,n,r,pe,a,null)}}qi(e,f,A,B,te,v,u,!1);return;case"select":xt("invalid",e),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:Vt(e,n,u,A,a,null)}n=f,a=v,e.multiple=!!r,n!=null?oi(e,!!r,n,!1):a!=null&&oi(e,!!r,a,!0);return;case"textarea":xt("invalid",e),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Vt(e,n,v,A,a,null)}bn(e,r,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(r=a[B],r!=null)&&(B==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Vt(e,n,B,r,a,null));return;case"dialog":xt("beforetoggle",e),xt("toggle",e),xt("cancel",e),xt("close",e);break;case"iframe":case"object":xt("load",e);break;case"video":case"audio":for(r=0;r<Ao.length;r++)xt(Ao[r],e);break;case"image":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"embed":case"source":case"link":xt("error",e),xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(r=a[te],r!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(e,n,te,r,a,null)}return;default:if(yi(n)){for(pe in a)a.hasOwnProperty(pe)&&(r=a[pe],r!==void 0&&Lf(e,n,pe,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Vt(e,n,A,r,a,null))}function ny(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,B=null,te=null,pe=null;for(ue in a){var ve=a[ue];if(a.hasOwnProperty(ue)&&ve!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":B=ve;default:r.hasOwnProperty(ue)||Vt(e,n,ue,null,r,ve)}}for(var re in r){var ue=r[re];if(ve=a[re],r.hasOwnProperty(re)&&(ue!=null||ve!=null))switch(re){case"type":f=ue;break;case"name":u=ue;break;case"checked":te=ue;break;case"defaultChecked":pe=ue;break;case"value":v=ue;break;case"defaultValue":A=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==ve&&Vt(e,n,re,ue,r,ve)}}Sn(e,v,A,B,te,pe,f,u);return;case"select":ue=v=A=re=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ue=B;default:r.hasOwnProperty(f)||Vt(e,n,f,null,r,B)}for(u in r)if(f=r[u],B=a[u],r.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":re=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==B&&Vt(e,n,u,f,r,B)}n=A,a=v,r=ue,re!=null?oi(e,!!a,re,!1):!!r!=!!a&&(n!=null?oi(e,!!a,n,!0):oi(e,!!a,a?[]:"",!1));return;case"textarea":ue=re=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Vt(e,n,A,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":re=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Vt(e,n,v,u,r,f)}zt(e,re,ue);return;case"option":for(var Ye in a)re=a[Ye],a.hasOwnProperty(Ye)&&re!=null&&!r.hasOwnProperty(Ye)&&(Ye==="selected"?e.selected=!1:Vt(e,n,Ye,null,r,re));for(B in r)re=r[B],ue=a[B],r.hasOwnProperty(B)&&re!==ue&&(re!=null||ue!=null)&&(B==="selected"?e.selected=re&&typeof re!="function"&&typeof re!="symbol":Vt(e,n,B,re,r,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)re=a[at],a.hasOwnProperty(at)&&re!=null&&!r.hasOwnProperty(at)&&Vt(e,n,at,null,r,re);for(te in r)if(re=r[te],ue=a[te],r.hasOwnProperty(te)&&re!==ue&&(re!=null||ue!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:Vt(e,n,te,re,r,ue)}return;default:if(yi(n)){for(var kt in a)re=a[kt],a.hasOwnProperty(kt)&&re!==void 0&&!r.hasOwnProperty(kt)&&Lf(e,n,kt,void 0,r,re);for(pe in r)re=r[pe],ue=a[pe],!r.hasOwnProperty(pe)||re===ue||re===void 0&&ue===void 0||Lf(e,n,pe,re,r,ue);return}}for(var j in a)re=a[j],a.hasOwnProperty(j)&&re!=null&&!r.hasOwnProperty(j)&&Vt(e,n,j,null,r,re);for(ve in r)re=r[ve],ue=a[ve],!r.hasOwnProperty(ve)||re===ue||re==null&&ue==null||Vt(e,n,ve,re,r,ue)}function Q0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&Q0(v)){for(v=0,A=u.responseEnd,r+=1;r<a.length;r++){var B=a[r],te=B.startTime;if(te>A)break;var pe=B.transferSize,ve=B.initiatorType;pe&&Q0(ve)&&(B=B.responseEnd,v+=pe*(B<A?1:(A-te)/(B-te)))}if(--r,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Of=null,If=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function J0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Pf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function ay(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var eg=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,tg=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof tg<"u"?function(e){return tg.resolve(null).then(e).catch(oy)}:eg;function oy(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function ng(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),_r(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Ro(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[as]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Ro(e.ownerDocument.body);a=u}while(a);_r(n)}function ig(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Ff(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ly(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[as])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function cy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function ag(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function Bf(e){return e.data==="$?"||e.data==="$~"}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Gf=null;function sg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return pi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function rg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function og(e,n,a){switch(n=$l(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ro(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qr(e)}var mi=new Map,lg=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=k.d;k.d={f:fy,r:hy,D:dy,C:py,L:my,m:gy,X:vy,S:_y,M:xy};function fy(){var e=ca.f(),n=Wl();return e||n}function hy(e){var n=Ea(e);n!==null&&n.tag===5&&n.type==="form"?Tm(n):ca.r(e)}var pr=typeof document>"u"?null:document;function cg(e,n,a){var r=pr;if(r&&typeof n=="string"&&n){var u=ot(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),lg.has(u)||(lg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Cn(n,"link",e),w(n),r.head.appendChild(n)))}}function dy(e){ca.D(e),cg("dns-prefetch",e,null)}function py(e,n){ca.C(e,n),cg("preconnect",e,n)}function my(e,n,a){ca.L(e,n,a);var r=pr;if(r&&e&&n){var u='link[rel="preload"][as="'+ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ot(a.imageSizes)+'"]')):u+='[href="'+ot(e)+'"]';var f=u;switch(n){case"style":f=mr(e);break;case"script":f=gr(e)}mi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Co(f))||n==="script"&&r.querySelector(Do(f))||(n=r.createElement("link"),Cn(n,"link",e),w(n),r.head.appendChild(n)))}}function gy(e,n){ca.m(e,n);var a=pr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ot(r)+'"][href="'+ot(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=gr(e)}if(!mi.has(f)&&(e=g({rel:"modulepreload",href:e},n),mi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}r=a.createElement("link"),Cn(r,"link",e),w(r),a.head.appendChild(r)}}}function _y(e,n,a){ca.S(e,n,a);var r=pr;if(r&&e){var u=Ta(r).hoistableStyles,f=mr(e);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(Co(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(f))&&Vf(e,a);var B=v=r.createElement("link");w(B),Cn(B,"link",e),B._p=new Promise(function(te,pe){B.onload=te,B.onerror=pe}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,tc(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function vy(e,n){ca.X(e,n);var a=pr;if(a&&e){var r=Ta(a).hoistableScripts,u=gr(e),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(e=g({src:e,async:!0},n),(n=mi.get(u))&&kf(e,n),f=a.createElement("script"),w(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function xy(e,n){ca.M(e,n);var a=pr;if(a&&e){var r=Ta(a).hoistableScripts,u=gr(e),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=mi.get(u))&&kf(e,n),f=a.createElement("script"),w(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function ug(e,n,a,r){var u=(u=ne.current)?ec(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=mr(a.href),a=Ta(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mr(a.href);var f=Ta(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Co(e)))&&!f._p&&(v.instance=f,v.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),f||yy(u,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gr(a),a=Ta(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function mr(e){return'href="'+ot(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function fg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function yy(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",a),w(n),e.head.appendChild(n))}function gr(e){return'[src="'+ot(e)+'"]'}function Do(e){return"script[async]"+e}function hg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ot(a.href)+'"]');if(r)return n.instance=r,w(r),r;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),w(r),Cn(r,"style",u),tc(r,a.precedence,e),n.instance=r;case"stylesheet":u=mr(a.href);var f=e.querySelector(Co(u));if(f)return n.state.loading|=4,n.instance=f,w(f),f;r=fg(a),(u=mi.get(u))&&Vf(r,u),f=(e.ownerDocument||e).createElement("link"),w(f);var v=f;return v._p=new Promise(function(A,B){v.onload=A,v.onerror=B}),Cn(f,"link",r),n.state.loading|=4,tc(f,a.precedence,e),n.instance=f;case"script":return f=gr(a.src),(u=e.querySelector(Do(f)))?(n.instance=u,w(u),u):(r=a,(u=mi.get(f))&&(r=g({},a),kf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),w(u),Cn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,tc(r,a.precedence,e));return n.instance}function tc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nc=null;function dg(e,n,a){if(nc===null){var r=new Map,u=nc=new Map;u.set(a,r)}else u=nc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[as]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var A=r.get(v);A?A.push(f):r.set(v,[f])}}return r}function pg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Sy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function My(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=mr(r.href),f=n.querySelector(Co(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ic.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,w(f);return}f=n.ownerDocument||n,r=fg(r),(u=mi.get(u))&&Vf(r,u),f=f.createElement("link"),w(f);var v=f;v._p=new Promise(function(A,B){v.onload=A,v.onerror=B}),Cn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ic.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function by(e,n){return e.stylesheets&&e.count===0&&sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Xf===0&&(Xf=62500*iy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Xf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ac=null;function sc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ac=new Map,n.forEach(Ey,e),ac=null,ic.call(e))}function Ey(e,n){if(!(n.state.loading&4)){var a=ac.get(e);if(a)var r=a.get(null);else{a=new Map,ac.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=ic.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Uo={$$typeof:L,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function Ty(e,n,a,r,u,f,v,A,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function gg(e,n,a,r,u,f,v,A,B,te,pe,ve){return e=new Ty(e,n,a,v,B,te,pe,ve,A),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Au(f),e}function _g(e){return e?(e=Ys,e):Ys}function vg(e,n,a,r,u,f){u=_g(u),r.context===null?r.context=u:r.pendingContext=u,r=Na(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=La(e,r,n),a!==null&&(Wn(a,e,n),lo(a,e,n))}function xg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Wf(e,n){xg(e,n),(e=e.alternate)&&xg(e,n)}function yg(e){if(e.tag===13||e.tag===31){var n=cs(e,67108864);n!==null&&Wn(n,e,67108864),Wf(e,67108864)}}function Sg(e){if(e.tag===13||e.tag===31){var n=ti();n=kr(n);var a=cs(e,n);a!==null&&Wn(a,e,n),Wf(e,n)}}var rc=!0;function Ay(e,n,a,r){var u=F.T;F.T=null;var f=k.p;try{k.p=2,qf(e,n,a,r)}finally{k.p=f,F.T=u}}function wy(e,n,a,r){var u=F.T;F.T=null;var f=k.p;try{k.p=8,qf(e,n,a,r)}finally{k.p=f,F.T=u}}function qf(e,n,a,r){if(rc){var u=Yf(r);if(u===null)Nf(e,n,r,oc,a),bg(e,r);else if(Cy(u,e,n,a,r))r.stopPropagation();else if(bg(e,r),n&4&&-1<Ry.indexOf(e)){for(;u!==null;){var f=Ea(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Te(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var B=1<<31-ze(v);A.entanglements[1]|=B,v&=~B}Li(f),(Ot&6)===0&&(kl=S()+500,To(0))}}break;case 31:case 13:A=cs(f,2),A!==null&&Wn(A,f,2),Wl(),Wf(f,2)}if(f=Yf(r),f===null&&Nf(e,n,r,oc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Nf(e,n,r,null,a)}}function Yf(e){return e=jc(e),jf(e)}var oc=null;function jf(e){if(oc=null,e=ba(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return oc=e,null}function Mg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(V()){case oe:return 2;case fe:return 8;case K:case Re:return 32;case Me:return 268435456;default:return 32}default:return 32}}var Zf=!1,Xa=null,Wa=null,qa=null,No=new Map,Lo=new Map,Ya=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bg(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function Oo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ea(n),n!==null&&yg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Cy(e,n,a,r,u){switch(n){case"focusin":return Xa=Oo(Xa,e,n,a,r,u),!0;case"dragenter":return Wa=Oo(Wa,e,n,a,r,u),!0;case"mouseover":return qa=Oo(qa,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return No.set(f,Oo(No.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,Oo(Lo.get(f)||null,e,n,a,r,u)),!0}return!1}function Eg(e){var n=ba(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ci(e.priority,function(){Sg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ci(e.priority,function(){Sg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Yc=r,a.target.dispatchEvent(r),Yc=null}else return n=Ea(a),n!==null&&yg(n),e.blockedOn=a,!1;n.shift()}return!0}function Tg(e,n,a){lc(e)&&a.delete(n)}function Dy(){Zf=!1,Xa!==null&&lc(Xa)&&(Xa=null),Wa!==null&&lc(Wa)&&(Wa=null),qa!==null&&lc(qa)&&(qa=null),No.forEach(Tg),Lo.forEach(Tg)}function cc(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Dy)))}var uc=null;function Ag(e){uc!==e&&(uc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){uc===e&&(uc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(jf(r||a)===null)continue;break}var f=Ea(a);f!==null&&(e.splice(n,3),n-=3,qu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function _r(e){function n(B){return cc(B,e)}Xa!==null&&cc(Xa,e),Wa!==null&&cc(Wa,e),qa!==null&&cc(qa,e),No.forEach(n),Lo.forEach(n);for(var a=0;a<Ya.length;a++){var r=Ya[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)Eg(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[yn]||null;if(typeof f=="function")v||Ag(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[yn]||null)A=v.formAction;else if(jf(u)!==null)continue}else A=v.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Ag(a)}}}function wg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Kf(e){this._internalRoot=e}fc.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ti();vg(a,r,e,n,null,null)},fc.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vg(e.current,2,null,e,null,null),Wl(),n[xi]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ya.length&&n!==0&&n<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&Eg(e)}};var Rg=t.version;if(Rg!=="19.2.3")throw Error(s(527,Rg,"19.2.3"));k.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Uy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{ye=hc.inject(Uy),be=hc}catch{}}return Po.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Im,f=Pm,v=zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=gg(e,1,!1,null,null,a,r,null,u,f,v,wg),e[xi]=n.current,Uf(e),new Kf(n)},Po.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Im,v=Pm,A=zm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=gg(e,1,!0,n,a??null,r,u,B,f,v,A,wg),n.context=_g(null),a=n.current,r=ti(),r=kr(r),u=Na(r),u.callback=null,La(a,u,r),a=r,n.current.lanes=a,Un(n,a),Li(n),e[xi]=n.current,Uf(e),new fc(n)},Po.version="19.2.3",Po}var Fg;function Vy(){if(Fg)return $f.exports;Fg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),$f.exports=Gy(),$f.exports}var ky=Vy();const Xy=V_(ky),Wy="modulepreload",qy=function(o,t){return new URL(o,t).href},Bg={},Yy=function(t,i,s){let l=Promise.resolve();if(i&&i.length>0){let p=function(_){return Promise.all(_.map(g=>Promise.resolve(g).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};const h=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");l=p(i.map(_=>{if(_=qy(_,s),_ in Bg)return;Bg[_]=!0;const g=_.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(s)for(let T=h.length-1;T>=0;T--){const C=h[T];if(C.href===_&&(!g||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${y}`))return;const M=document.createElement("link");if(M.rel=g?"stylesheet":Wy,g||(M.as="script"),M.crossOrigin="",M.href=_,m&&M.setAttribute("nonce",m),document.head.appendChild(M),g)return new Promise((T,C)=>{M.addEventListener("load",T),M.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return l.then(h=>{for(const d of h||[])d.status==="rejected"&&c(d.reason);return t().catch(c)})};function jy(o={}){const{immediate:t=!1,onNeedRefresh:i,onOfflineReady:s,onRegistered:l,onRegisteredSW:c,onRegisterError:h}=o;let d,m;const p=async(g=!0)=>{await m};async function _(){if("serviceWorker"in navigator){if(d=await Yy(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:g}},[],import.meta.url).then(({Workbox:g})=>new g("./sw.js",{scope:"./",type:"classic"})).catch(g=>{h?.(g)}),!d)return;d.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),d.addEventListener("installed",g=>{g.isUpdate||s?.()}),d.register({immediate:t}).then(g=>{c?c("./sw.js",g):l?.(g)}).catch(g=>{h?.(g)})}}return m=_(),p}const Zy=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ky=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Hg=o=>{const t=Ky(o);return t.charAt(0).toUpperCase()+t.slice(1)},k_=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),Qy=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var Jy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const $y=$t.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>$t.createElement("svg",{ref:m,...Jy,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:k_("lucide",l),...!c&&!Qy(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,_])=>$t.createElement(p,_)),...Array.isArray(c)?c:[c]]));const Ma=(o,t)=>{const i=$t.forwardRef(({className:s,...l},c)=>$t.createElement($y,{ref:c,iconNode:t,className:k_(`lucide-${Zy(Hg(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Hg(o),i};const eS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],X_=Ma("arrow-left",eS);const tS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],W_=Ma("circle-alert",tS);const nS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],q_=Ma("eye",nS);const iS=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],aS=Ma("ghost",iS);const sS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],rS=Ma("info",sS);const oS=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],lS=Ma("move",oS);const cS=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],uS=Ma("skull",cS);const fS=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],hS=Ma("volume-2",fS);const dS=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],pS=Ma("volume-x",dS);const Ud="182",mS=0,Gg=1,gS=2,Lc=1,_S=2,Xo=3,is=0,jn=1,ma=2,va=0,Lr=1,Vg=2,kg=3,Xg=4,vS=5,Cs=100,xS=101,yS=102,SS=103,MS=104,bS=200,ES=201,TS=202,AS=203,zh=204,Fh=205,wS=206,RS=207,CS=208,DS=209,US=210,NS=211,LS=212,OS=213,IS=214,Bh=0,Hh=1,Gh=2,Ir=3,Vh=4,kh=5,Xh=6,Wh=7,Y_=0,PS=1,zS=2,Hi=0,j_=1,Z_=2,K_=3,Q_=4,J_=5,$_=6,ev=7,tv=300,Os=301,Pr=302,qh=303,Yh=304,kc=306,Us=1e3,_a=1001,jh=1002,Dn=1003,FS=1004,dc=1005,In=1006,ih=1007,Ns=1008,ai=1009,nv=1010,iv=1011,qo=1012,Nd=1013,ki=1014,Fi=1015,ya=1016,Ld=1017,Od=1018,Yo=1020,av=35902,sv=35899,rv=1021,ov=1022,Ri=1023,Sa=1026,Ls=1027,lv=1028,Id=1029,zr=1030,Pd=1031,zd=1033,Oc=33776,Ic=33777,Pc=33778,zc=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,ed=37492,td=37496,nd=37488,id=37489,ad=37490,sd=37491,rd=37808,od=37809,ld=37810,cd=37811,ud=37812,fd=37813,hd=37814,dd=37815,pd=37816,md=37817,gd=37818,_d=37819,vd=37820,xd=37821,yd=36492,Sd=36494,Md=36495,bd=36283,Ed=36284,Td=36285,Ad=36286,BS=3200,cv=0,HS=1,ts="",_i="srgb",Fr="srgb-linear",Bc="linear",Ht="srgb",vr=7680,Wg=519,GS=512,VS=513,kS=514,Fd=515,XS=516,WS=517,Bd=518,qS=519,qg=35044,Yg="300 es",Bi=2e3,Hc=2001;function uv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function jo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function YS(){const o=jo("canvas");return o.style.display="block",o}const jg={};function Zg(...o){const t="THREE."+o.shift();console.log(t,...o)}function ct(...o){const t="THREE."+o.shift();console.warn(t,...o)}function wt(...o){const t="THREE."+o.shift();console.error(t,...o)}function Zo(...o){const t=o.join(" ");t in jg||(jg[t]=!0,ct(...o))}function jS(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Hr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=Math.PI/180,Gc=180/Math.PI;function Qo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Tt(o,t,i){return Math.max(t,Math.min(i,o))}function ZS(o,t){return(o%t+t)%t}function sh(o,t,i){return(1-i)*o+i*t}function zo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(t=0,i=0){Mt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Tt(this.x,t.x,i.x),this.y=Tt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Tt(this.x,t,i),this.y=Tt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Tt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],y=c[h+0],M=c[h+1],T=c[h+2],C=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(d>=1){t[i+0]=y,t[i+1]=M,t[i+2]=T,t[i+3]=C;return}if(g!==C||m!==y||p!==M||_!==T){let b=m*y+p*M+_*T+g*C;b<0&&(y=-y,M=-M,T=-T,C=-C,b=-b);let x=1-d;if(b<.9995){const U=Math.acos(b),L=Math.sin(U);x=Math.sin(x*U)/L,d=Math.sin(d*U)/L,m=m*x+y*d,p=p*x+M*d,_=_*x+T*d,g=g*x+C*d}else{m=m*x+y*d,p=p*x+M*d,_=_*x+T*d,g=g*x+C*d;const U=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=U,p*=U,_*=U,g*=U}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[h],y=c[h+1],M=c[h+2],T=c[h+3];return t[i]=d*T+_*g+m*M-p*y,t[i+1]=m*T+_*y+p*g-d*M,t[i+2]=p*T+_*M+d*y-m*g,t[i+3]=_*T-d*g-m*y-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),g=d(c/2),y=m(s/2),M=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=y*_*g+p*M*T,this._y=p*M*g-y*_*T,this._z=p*_*T+y*M*g,this._w=p*_*g-y*M*T;break;case"YXZ":this._x=y*_*g+p*M*T,this._y=p*M*g-y*_*T,this._z=p*_*T-y*M*g,this._w=p*_*g+y*M*T;break;case"ZXY":this._x=y*_*g-p*M*T,this._y=p*M*g+y*_*T,this._z=p*_*T+y*M*g,this._w=p*_*g-y*M*T;break;case"ZYX":this._x=y*_*g-p*M*T,this._y=p*M*g+y*_*T,this._z=p*_*T-y*M*g,this._w=p*_*g+y*M*T;break;case"YZX":this._x=y*_*g+p*M*T,this._y=p*M*g+y*_*T,this._z=p*_*T-y*M*g,this._w=p*_*g-y*M*T;break;case"XZY":this._x=y*_*g-p*M*T,this._y=p*M*g-y*_*T,this._z=p*_*T+y*M*g,this._w=p*_*g+y*M*T;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],y=s+d+g;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Tt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Kg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Kg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*_,this.y=s+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Tt(this.x,t.x,i.x),this.y=Tt(this.y,t.y,i.y),this.z=Tt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Tt(this.x,t,i),this.y=Tt(this.y,t,i),this.z=Tt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return rh.copy(this).projectOnVector(t),this.sub(rh)}reflect(t){return this.sub(rh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Tt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new J,Kg=new Jo;class pt{constructor(t,i,s,l,c,h,d,m,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],g=s[7],y=s[2],M=s[5],T=s[8],C=l[0],b=l[3],x=l[6],U=l[1],L=l[4],N=l[7],I=l[2],O=l[5],z=l[8];return c[0]=h*C+d*U+m*I,c[3]=h*b+d*L+m*O,c[6]=h*x+d*N+m*z,c[1]=p*C+_*U+g*I,c[4]=p*b+_*L+g*O,c[7]=p*x+_*N+g*z,c[2]=y*C+M*U+T*I,c[5]=y*b+M*L+T*O,c[8]=y*x+M*N+T*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*h-d*p,y=d*m-_*c,M=p*c-h*m,T=i*g+s*y+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=g*C,t[1]=(l*p-_*s)*C,t[2]=(d*s-l*h)*C,t[3]=y*C,t[4]=(_*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=M*C,t[7]=(s*m-p*i)*C,t[8]=(h*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(oh.makeScale(t,i)),this}rotate(t){return this.premultiply(oh.makeRotation(-t)),this}translate(t,i){return this.premultiply(oh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oh=new pt,Qg=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jg=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KS(){const o={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ht&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ht&&(l.r=Or(l.r),l.g=Or(l.g),l.b=Or(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ts?Bc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Fr]:{primaries:t,whitePoint:s,transfer:Bc,toXYZ:Qg,fromXYZ:Jg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:s,transfer:Ht,toXYZ:Qg,fromXYZ:Jg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),o}const Rt=KS();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Or(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xr;class QS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{xr===void 0&&(xr=jo("canvas")),xr.width=t.width,xr.height=t.height;const l=xr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=xr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=jo("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=xa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let JS=0;class Hd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Qo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(lh(l[h].image)):c.push(lh(l[h]))}else c=lh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function lh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?QS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let $S=0;const ch=new J;class Pn extends Hr{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=_a,l=_a,c=In,h=Ns,d=Ri,m=ai,p=Pn.DEFAULT_ANISOTROPY,_=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Qo(),this.name="",this.source=new Hd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ch).x}get height(){return this.source.getSize(ch).y}get depth(){return this.source.getSize(ch).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Us:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Us:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=tv;Pn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],y=m[1],M=m[5],T=m[9],C=m[2],b=m[6],x=m[10];if(Math.abs(_-y)<.01&&Math.abs(g-C)<.01&&Math.abs(T-b)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+C)<.1&&Math.abs(T+b)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,N=(M+1)/2,I=(x+1)/2,O=(_+y)/4,z=(g+C)/4,W=(T+b)/4;return L>N&&L>I?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=O/s,c=z/s):N>I?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=O/l,c=W/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=z/c,l=W/c),this.set(s,l,c,i),this}let U=Math.sqrt((b-T)*(b-T)+(g-C)*(g-C)+(y-_)*(y-_));return Math.abs(U)<.001&&(U=1),this.x=(b-T)/U,this.y=(g-C)/U,this.z=(y-_)/U,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Tt(this.x,t.x,i.x),this.y=Tt(this.y,t.y,i.y),this.z=Tt(this.z,t.z,i.z),this.w=Tt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Tt(this.x,t,i),this.y=Tt(this.y,t,i),this.z=Tt(this.z,t,i),this.w=Tt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eM extends Hr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Pn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Hd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends eM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class fv extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tM extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ei):Ei.fromBufferAttribute(c,h),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pc.copy(s.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fo),mc.subVectors(this.max,Fo),yr.subVectors(t.a,Fo),Sr.subVectors(t.b,Fo),Mr.subVectors(t.c,Fo),Za.subVectors(Sr,yr),Ka.subVectors(Mr,Sr),Ms.subVectors(yr,Mr);let i=[0,-Za.z,Za.y,0,-Ka.z,Ka.y,0,-Ms.z,Ms.y,Za.z,0,-Za.x,Ka.z,0,-Ka.x,Ms.z,0,-Ms.x,-Za.y,Za.x,0,-Ka.y,Ka.x,0,-Ms.y,Ms.x,0];return!uh(i,yr,Sr,Mr,mc)||(i=[1,0,0,0,1,0,0,0,1],!uh(i,yr,Sr,Mr,mc))?!1:(gc.crossVectors(Za,Ka),i=[gc.x,gc.y,gc.z],uh(i,yr,Sr,Mr,mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ua=[new J,new J,new J,new J,new J,new J,new J,new J],Ei=new J,pc=new $o,yr=new J,Sr=new J,Mr=new J,Za=new J,Ka=new J,Ms=new J,Fo=new J,mc=new J,gc=new J,bs=new J;function uh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){bs.fromArray(o,c);const d=l.x*Math.abs(bs.x)+l.y*Math.abs(bs.y)+l.z*Math.abs(bs.z),m=t.dot(bs),p=i.dot(bs),_=s.dot(bs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const nM=new $o,Bo=new J,fh=new J;class Gd{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):nM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(fh)),this.expandByPoint(Bo.copy(t.center).sub(fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fa=new J,hh=new J,_c=new J,Qa=new J,dh=new J,vc=new J,ph=new J;class hv{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=fa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){hh.copy(t).add(i).multiplyScalar(.5),_c.copy(i).sub(t).normalize(),Qa.copy(this.origin).sub(hh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(_c),d=Qa.dot(this.direction),m=-Qa.dot(_c),p=Qa.lengthSq(),_=Math.abs(1-h*h);let g,y,M,T;if(_>0)if(g=h*m-d,y=h*d-m,T=c*_,g>=0)if(y>=-T)if(y<=T){const C=1/_;g*=C,y*=C,M=g*(g+h*y+2*d)+y*(h*g+y+2*m)+p}else y=c,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*m)+p;else y<=-T?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+y*(y+2*m)+p):y<=T?(g=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+p):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+y*(y+2*m)+p);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(hh).addScaledVector(_c,y),M}intersectSphere(t,i){fa.subVectors(t.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),_>=0?(c=(t.min.y-y.y)*_,h=(t.max.y-y.y)*_):(c=(t.max.y-y.y)*_,h=(t.min.y-y.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-y.z)*g,m=(t.max.z-y.z)*g):(d=(t.max.z-y.z)*g,m=(t.min.z-y.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,i,s,l,c){dh.subVectors(i,t),vc.subVectors(s,t),ph.crossVectors(dh,vc);let h=this.direction.dot(ph),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Qa.subVectors(this.origin,t);const m=d*this.direction.dot(vc.crossVectors(Qa,vc));if(m<0)return null;const p=d*this.direction.dot(dh.cross(Qa));if(p<0||m+p>h)return null;const _=-d*Qa.dot(ph);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,i,s,l,c,h,d,m,p,_,g,y,M,T,C,b){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,_,g,y,M,T,C,b)}set(t,i,s,l,c,h,d,m,p,_,g,y,M,T,C,b){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=y,x[3]=M,x[7]=T,x[11]=C,x[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/br.setFromMatrixColumn(t,0).length(),c=1/br.setFromMatrixColumn(t,1).length(),h=1/br.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const y=h*_,M=h*g,T=d*_,C=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+T*p,i[5]=y-C*p,i[9]=-d*m,i[2]=C-y*p,i[6]=T+M*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*_,M=m*g,T=p*_,C=p*g;i[0]=y+C*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=M*d-T,i[6]=C+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*_,M=m*g,T=p*_,C=p*g;i[0]=y-C*d,i[4]=-h*g,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*_,i[9]=C-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*_,M=h*g,T=d*_,C=d*g;i[0]=m*_,i[4]=T*p-M,i[8]=y*p+C,i[1]=m*g,i[5]=C*p+y,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,M=h*p,T=d*m,C=d*p;i[0]=m*_,i[4]=C-y*g,i[8]=T*g+M,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*g+T,i[10]=y-C*g}else if(t.order==="XZY"){const y=h*m,M=h*p,T=d*m,C=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=y*g+C,i[5]=h*_,i[9]=M*g-T,i[2]=T*g-M,i[6]=d*_,i[10]=C*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iM,t,aM)}lookAt(t,i,s){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ja.crossVectors(s,ni),Ja.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ja.crossVectors(s,ni)),Ja.normalize(),xc.crossVectors(ni,Ja),l[0]=Ja.x,l[4]=xc.x,l[8]=ni.x,l[1]=Ja.y,l[5]=xc.y,l[9]=ni.y,l[2]=Ja.z,l[6]=xc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],g=s[5],y=s[9],M=s[13],T=s[2],C=s[6],b=s[10],x=s[14],U=s[3],L=s[7],N=s[11],I=s[15],O=l[0],z=l[4],W=l[8],E=l[12],R=l[1],H=l[5],Z=l[9],$=l[13],ce=l[2],he=l[6],F=l[10],k=l[14],ie=l[3],Ee=l[7],Se=l[11],P=l[15];return c[0]=h*O+d*R+m*ce+p*ie,c[4]=h*z+d*H+m*he+p*Ee,c[8]=h*W+d*Z+m*F+p*Se,c[12]=h*E+d*$+m*k+p*P,c[1]=_*O+g*R+y*ce+M*ie,c[5]=_*z+g*H+y*he+M*Ee,c[9]=_*W+g*Z+y*F+M*Se,c[13]=_*E+g*$+y*k+M*P,c[2]=T*O+C*R+b*ce+x*ie,c[6]=T*z+C*H+b*he+x*Ee,c[10]=T*W+C*Z+b*F+x*Se,c[14]=T*E+C*$+b*k+x*P,c[3]=U*O+L*R+N*ce+I*ie,c[7]=U*z+L*H+N*he+I*Ee,c[11]=U*W+L*Z+N*F+I*Se,c[15]=U*E+L*$+N*k+I*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],y=t[10],M=t[14],T=t[3],C=t[7],b=t[11],x=t[15],U=m*M-p*y,L=d*M-p*g,N=d*y-m*g,I=h*M-p*_,O=h*y-m*_,z=h*g-d*_;return i*(C*U-b*L+x*N)-s*(T*U-b*I+x*O)+l*(T*L-C*I+x*z)-c*(T*N-C*O+b*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],y=t[10],M=t[11],T=t[12],C=t[13],b=t[14],x=t[15],U=g*b*p-C*y*p+C*m*M-d*b*M-g*m*x+d*y*x,L=T*y*p-_*b*p-T*m*M+h*b*M+_*m*x-h*y*x,N=_*C*p-T*g*p+T*d*M-h*C*M-_*d*x+h*g*x,I=T*g*m-_*C*m-T*d*y+h*C*y+_*d*b-h*g*b,O=i*U+s*L+l*N+c*I;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/O;return t[0]=U*z,t[1]=(C*y*c-g*b*c-C*l*M+s*b*M+g*l*x-s*y*x)*z,t[2]=(d*b*c-C*m*c+C*l*p-s*b*p-d*l*x+s*m*x)*z,t[3]=(g*m*c-d*y*c-g*l*p+s*y*p+d*l*M-s*m*M)*z,t[4]=L*z,t[5]=(_*b*c-T*y*c+T*l*M-i*b*M-_*l*x+i*y*x)*z,t[6]=(T*m*c-h*b*c-T*l*p+i*b*p+h*l*x-i*m*x)*z,t[7]=(h*y*c-_*m*c+_*l*p-i*y*p-h*l*M+i*m*M)*z,t[8]=N*z,t[9]=(T*g*c-_*C*c-T*s*M+i*C*M+_*s*x-i*g*x)*z,t[10]=(h*C*c-T*d*c+T*s*p-i*C*p-h*s*x+i*d*x)*z,t[11]=(_*d*c-h*g*c-_*s*p+i*g*p+h*s*M-i*d*M)*z,t[12]=I*z,t[13]=(_*C*l-T*g*l+T*s*y-i*C*y-_*s*b+i*g*b)*z,t[14]=(T*d*l-h*C*l-T*s*m+i*C*m+h*s*b-i*d*b)*z,t[15]=(h*g*l-_*d*l+_*s*m-i*g*m-h*s*y+i*d*y)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,y=c*p,M=c*_,T=c*g,C=h*_,b=h*g,x=d*g,U=m*p,L=m*_,N=m*g,I=s.x,O=s.y,z=s.z;return l[0]=(1-(C+x))*I,l[1]=(M+N)*I,l[2]=(T-L)*I,l[3]=0,l[4]=(M-N)*O,l[5]=(1-(y+x))*O,l[6]=(b+U)*O,l[7]=0,l[8]=(T+L)*z,l[9]=(b-U)*z,l[10]=(1-(y+C))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=br.set(l[0],l[1],l[2]).length();const h=br.set(l[4],l[5],l[6]).length(),d=br.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ti.copy(this);const p=1/c,_=1/h,g=1/d;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=_,Ti.elements[5]*=_,Ti.elements[6]*=_,Ti.elements[8]*=g,Ti.elements[9]*=g,Ti.elements[10]*=g,i.setFromRotationMatrix(Ti),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Bi,m=!1){const p=this.elements,_=2*c/(i-t),g=2*c/(s-l),y=(i+t)/(i-t),M=(s+l)/(s-l);let T,C;if(m)T=c/(h-c),C=h*c/(h-c);else if(d===Bi)T=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===Hc)T=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Bi,m=!1){const p=this.elements,_=2/(i-t),g=2/(s-l),y=-(i+t)/(i-t),M=-(s+l)/(s-l);let T,C;if(m)T=1/(h-c),C=h/(h-c);else if(d===Bi)T=-2/(h-c),C=-(h+c)/(h-c);else if(d===Hc)T=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const br=new J,Ti=new en,iM=new J(0,0,0),aM=new J(1,1,1),Ja=new J,xc=new J,ni=new J,$g=new en,e_=new Jo;class Xi{constructor(t=0,i=0,s=0,l=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return $g.makeRotationFromQuaternion(t),this.setFromRotationMatrix($g,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return e_.setFromEuler(this),this.setFromQuaternion(e_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class Vd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sM=0;const t_=new J,Er=new Jo,ha=new en,yc=new J,Ho=new J,rM=new J,oM=new Jo,n_=new J(1,0,0),i_=new J(0,1,0),a_=new J(0,0,1),s_={type:"added"},lM={type:"removed"},Tr={type:"childadded",child:null},mh={type:"childremoved",child:null};class zn extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const t=new J,i=new Xi,s=new Jo,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new pt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(n_,t)}rotateY(t){return this.rotateOnAxis(i_,t)}rotateZ(t){return this.rotateOnAxis(a_,t)}translateOnAxis(t,i){return t_.copy(t).applyQuaternion(this.quaternion),this.position.add(t_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(n_,t)}translateY(t){return this.translateOnAxis(i_,t)}translateZ(t){return this.translateOnAxis(a_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?yc.copy(t):yc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Ho,yc,this.up):ha.lookAt(yc,Ho,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Er.setFromRotationMatrix(ha),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(s_),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(lM),mh.child=t,this.dispatchEvent(mh),mh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(s_),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,rM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,oM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),y=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}zn.DEFAULT_UP=new J(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new J,da=new J,gh=new J,pa=new J,Ar=new J,wr=new J,r_=new J,_h=new J,vh=new J,xh=new J,yh=new an,Sh=new an,Mh=new an;class wi{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ai.subVectors(t,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ai.subVectors(l,i),da.subVectors(s,i),gh.subVectors(t,i);const h=Ai.dot(Ai),d=Ai.dot(da),m=Ai.dot(gh),p=da.dot(da),_=da.dot(gh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,M=(p*m-d*_)*y,T=(h*_-d*m)*y;return c.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(h,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return yh.setScalar(0),Sh.setScalar(0),Mh.setScalar(0),yh.fromBufferAttribute(t,i),Sh.fromBufferAttribute(t,s),Mh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(yh,c.x),h.addScaledVector(Sh,c.y),h.addScaledVector(Mh,c.z),h}static isFrontFacing(t,i,s,l){return Ai.subVectors(s,i),da.subVectors(t,i),Ai.cross(da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ai.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return wi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return wi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Ar.subVectors(l,s),wr.subVectors(c,s),_h.subVectors(t,s);const m=Ar.dot(_h),p=wr.dot(_h);if(m<=0&&p<=0)return i.copy(s);vh.subVectors(t,l);const _=Ar.dot(vh),g=wr.dot(vh);if(_>=0&&g<=_)return i.copy(l);const y=m*g-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Ar,h);xh.subVectors(t,c);const M=Ar.dot(xh),T=wr.dot(xh);if(T>=0&&M<=T)return i.copy(c);const C=M*p-m*T;if(C<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(wr,d);const b=_*T-M*g;if(b<=0&&g-_>=0&&M-T>=0)return r_.subVectors(c,l),d=(g-_)/(g-_+(M-T)),i.copy(l).addScaledVector(r_,d);const x=1/(b+C+y);return h=C*x,d=y*x,i.copy(s).addScaledVector(Ar,h).addScaledVector(wr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function bh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ct{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Rt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Rt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Rt.workingColorSpace){if(t=ZS(t,1),i=Tt(i,0,1),s=Tt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=bh(h,c,t+1/3),this.g=bh(h,c,t),this.b=bh(h,c,t-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(t,i=_i){function s(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=_i){const s=dv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Or(t.r),this.g=Or(t.g),this.b=Or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return Rt.workingToColorSpace(On.copy(this),t),Math.round(Tt(On.r*255,0,255))*65536+Math.round(Tt(On.g*255,0,255))*256+Math.round(Tt(On.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Rt.workingColorSpace){Rt.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Rt.workingColorSpace){return Rt.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=_i){Rt.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,l=On.b;return t!==_i?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL($a),this.setHSL($a.h+t,$a.s+i,$a.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL($a),t.getHSL(Sc);const s=sh($a.h,Sc.h,i),l=sh($a.s,Sc.s,i),c=sh($a.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ct;Ct.NAMES=dv;let cM=0;class el extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Lr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Fh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(s.blending=this.blending),this.side!==is&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Fh&&(s.blendDst=this.blendDst),this.blendEquation!==Cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class kd extends el{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new J,Mc=new Mt;let uM=0;class Vi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=qg,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=zo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=zo(i,this.array)),i}setX(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=zo(i,this.array)),i}setY(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=zo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=zo(i,this.array)),i}setW(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array),c=qn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qg&&(t.usage=this.usage),t}}class pv extends Vi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class mv extends Vi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class on extends Vi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let fM=0;const gi=new en,Eh=new zn,Rr=new J,ii=new $o,Go=new $o,xn=new J;class si extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uv(t)?mv:pv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,s){return gi.makeTranslation(t,i,s),this.applyMatrix4(gi),this}scale(t,i,s){return gi.makeScale(t,i,s),this.applyMatrix4(gi),this}lookAt(t){return Eh.lookAt(t),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new on(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Go.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ii.min,Go.min),ii.expandByPoint(xn),xn.addVectors(ii.max,Go.max),ii.expandByPoint(xn)):(ii.expandByPoint(Go.min),ii.expandByPoint(Go.max))}ii.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)xn.fromBufferAttribute(d,p),m&&(Rr.fromBufferAttribute(t,p),xn.add(Rr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<s.count;W++)d[W]=new J,m[W]=new J;const p=new J,_=new J,g=new J,y=new Mt,M=new Mt,T=new Mt,C=new J,b=new J;function x(W,E,R){p.fromBufferAttribute(s,W),_.fromBufferAttribute(s,E),g.fromBufferAttribute(s,R),y.fromBufferAttribute(c,W),M.fromBufferAttribute(c,E),T.fromBufferAttribute(c,R),_.sub(p),g.sub(p),M.sub(y),T.sub(y);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(C.copy(_).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(H),b.copy(g).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(H),d[W].add(C),d[E].add(C),d[R].add(C),m[W].add(b),m[E].add(b),m[R].add(b))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let W=0,E=U.length;W<E;++W){const R=U[W],H=R.start,Z=R.count;for(let $=H,ce=H+Z;$<ce;$+=3)x(t.getX($+0),t.getX($+1),t.getX($+2))}const L=new J,N=new J,I=new J,O=new J;function z(W){I.fromBufferAttribute(l,W),O.copy(I);const E=d[W];L.copy(E),L.sub(I.multiplyScalar(I.dot(E))).normalize(),N.crossVectors(O,E);const H=N.dot(m[W])<0?-1:1;h.setXYZW(W,L.x,L.y,L.z,H)}for(let W=0,E=U.length;W<E;++W){const R=U[W],H=R.start,Z=R.count;for(let $=H,ce=H+Z;$<ce;$+=3)z(t.getX($+0)),z(t.getX($+1)),z(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new J,c=new J,h=new J,d=new J,m=new J,p=new J,_=new J,g=new J;if(t)for(let y=0,M=t.count;y<M;y+=3){const T=t.getX(y+0),C=t.getX(y+1),b=t.getX(y+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,b),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,b),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,y=new p.constructor(m.length*_);let M=0,T=0;for(let C=0,b=m.length;C<b;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*_;for(let x=0;x<_;x++)y[T++]=p[M++]}return new Vi(y,_,g)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new si,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const y=p[_],M=t(y,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,y=p.length;g<y;g++){const M=p[g];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let y=0,M=g.length;y<M;y++)_.push(g[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const o_=new en,Es=new hv,bc=new Gd,l_=new J,Ec=new J,Tc=new J,Ac=new J,Th=new J,wc=new J,c_=new J,Rc=new J;class qt extends zn{constructor(t=new si,i=new kd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){wc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(Th.fromBufferAttribute(g,t),h?wc.addScaledVector(Th,_):wc.addScaledVector(Th.sub(i),_))}i.add(wc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(c),Es.copy(t.ray).recast(t.near),!(bc.containsPoint(Es.origin)===!1&&(Es.intersectSphere(bc,l_)===null||Es.origin.distanceToSquared(l_)>(t.far-t.near)**2))&&(o_.copy(c).invert(),Es.copy(t.ray).applyMatrix4(o_),!(s.boundingBox!==null&&Es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Es)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,y=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,C=y.length;T<C;T++){const b=y[T],x=h[b.materialIndex],U=Math.max(b.start,M.start),L=Math.min(d.count,Math.min(b.start+b.count,M.start+M.count));for(let N=U,I=L;N<I;N+=3){const O=d.getX(N),z=d.getX(N+1),W=d.getX(N+2);l=Cc(this,x,t,s,p,_,g,O,z,W),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let b=T,x=C;b<x;b+=3){const U=d.getX(b),L=d.getX(b+1),N=d.getX(b+2);l=Cc(this,h,t,s,p,_,g,U,L,N),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,C=y.length;T<C;T++){const b=y[T],x=h[b.materialIndex],U=Math.max(b.start,M.start),L=Math.min(m.count,Math.min(b.start+b.count,M.start+M.count));for(let N=U,I=L;N<I;N+=3){const O=N,z=N+1,W=N+2;l=Cc(this,x,t,s,p,_,g,O,z,W),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let b=T,x=C;b<x;b+=3){const U=b,L=b+1,N=b+2;l=Cc(this,h,t,s,p,_,g,U,L,N),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function hM(o,t,i,s,l,c,h,d){let m;if(t.side===jn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===is,d),m===null)return null;Rc.copy(d),Rc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Rc);return p<i.near||p>i.far?null:{distance:p,point:Rc.clone(),object:o}}function Cc(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,Ec),o.getVertexPosition(m,Tc),o.getVertexPosition(p,Ac);const _=hM(o,t,i,s,Ec,Tc,Ac,c_);if(_){const g=new J;wi.getBarycoord(c_,Ec,Tc,Ac,g),l&&(_.uv=wi.getInterpolatedAttribute(l,d,m,p,g,new Mt)),c&&(_.uv1=wi.getInterpolatedAttribute(c,d,m,p,g,new Mt)),h&&(_.normal=wi.getInterpolatedAttribute(h,d,m,p,g,new J),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new J,materialIndex:0};wi.getNormal(Ec,Tc,Ac,y.normal),_.face=y,_.barycoord=g}return _}class Is extends si{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let y=0,M=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new on(p,3)),this.setAttribute("normal",new on(_,3)),this.setAttribute("uv",new on(g,2));function T(C,b,x,U,L,N,I,O,z,W,E){const R=N/z,H=I/W,Z=N/2,$=I/2,ce=O/2,he=z+1,F=W+1;let k=0,ie=0;const Ee=new J;for(let Se=0;Se<F;Se++){const P=Se*H-$;for(let ae=0;ae<he;ae++){const _e=ae*R-Z;Ee[C]=_e*U,Ee[b]=P*L,Ee[x]=ce,p.push(Ee.x,Ee.y,Ee.z),Ee[C]=0,Ee[b]=0,Ee[x]=O>0?1:-1,_.push(Ee.x,Ee.y,Ee.z),g.push(ae/z),g.push(1-Se/W),k+=1}}for(let Se=0;Se<W;Se++)for(let P=0;P<z;P++){const ae=y+P+he*Se,_e=y+P+he*(Se+1),we=y+(P+1)+he*(Se+1),Ge=y+(P+1)+he*Se;m.push(ae,_e,Ge),m.push(_e,we,Ge),ie+=6}d.addGroup(M,ie,E),M+=ie,y+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Br(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Bn(o){const t={};for(let i=0;i<o.length;i++){const s=Br(o[i]);for(const l in s)t[l]=s[l]}return t}function dM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function gv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Rt.workingColorSpace}const pM={clone:Br,merge:Bn};var mM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends el{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mM,this.fragmentShader=gM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=dM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class _v extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new J,u_=new Mt,f_=new Mt;class Yn extends _v{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Gc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ah*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gc*2*Math.atan(Math.tan(ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,i){return this.getViewBounds(t,u_,f_),i.subVectors(f_,u_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ah*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Cr=-90,Dr=1;class _M extends zn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Yn(Cr,Dr,t,i);l.layers=this.layers,this.add(l);const c=new Yn(Cr,Dr,t,i);c.layers=this.layers,this.add(c);const h=new Yn(Cr,Dr,t,i);h.layers=this.layers,this.add(h);const d=new Yn(Cr,Dr,t,i);d.layers=this.layers,this.add(d);const m=new Yn(Cr,Dr,t,i);m.layers=this.layers,this.add(m);const p=new Yn(Cr,Dr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Bi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Hc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(g,y,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class vv extends Pn{constructor(t=[],i=Os,s,l,c,h,d,m,p,_){super(t,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xv extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new vv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Is(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:va});c.uniforms.tEquirect.value=i;const h=new qt(l,c),d=i.minFilter;return i.minFilter===Ns&&(i.minFilter=In),new _M(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class ga extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vM={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const b=i.getJointPose(C,s),x=this._getHandJoint(p,C);b!==null&&(x.matrix.fromArray(b.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=b.radius),x.visible=b!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),M=.02,T=.005;p.inputState.pinching&&y>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(vM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new ga;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Xd{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(t),this.density=i}clone(){return new Xd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xM extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class yM extends Pn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Dn,_=Dn,g,y){super(null,h,d,m,p,_,l,c,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wh=new J,SM=new J,MM=new pt;class Rs{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=wh.subVectors(s,i).cross(SM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(wh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||MM.getNormalMatrix(t),l=this.coplanarPoint(wh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new Gd,bM=new Mt(.5,.5),Dc=new J;class Wd{constructor(t=new Rs,i=new Rs,s=new Rs,l=new Rs,c=new Rs,h=new Rs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Bi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],y=c[6],M=c[7],T=c[8],C=c[9],b=c[10],x=c[11],U=c[12],L=c[13],N=c[14],I=c[15];if(l[0].setComponents(p-h,M-_,x-T,I-U).normalize(),l[1].setComponents(p+h,M+_,x+T,I+U).normalize(),l[2].setComponents(p+d,M+g,x+C,I+L).normalize(),l[3].setComponents(p-d,M-g,x-C,I-L).normalize(),s)l[4].setComponents(m,y,b,N).normalize(),l[5].setComponents(p-m,M-y,x-b,I-N).normalize();else if(l[4].setComponents(p-m,M-y,x-b,I-N).normalize(),i===Bi)l[5].setComponents(p+m,M+y,x+b,I+N).normalize();else if(i===Hc)l[5].setComponents(m,y,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){Ts.center.set(0,0,0);const i=bM.distanceTo(t.center);return Ts.radius=.7071067811865476+i,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Dc.x=l.normal.x>0?t.max.x:t.min.x,Dc.y=l.normal.y>0?t.max.y:t.min.y,Dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ko extends Pn{constructor(t,i,s=ki,l,c,h,d=Dn,m=Dn,p,_=Sa,g=1){if(_!==Sa&&_!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class EM extends Ko{constructor(t,i=ki,s=Os,l,c,h=Dn,d=Dn,m,p=Sa){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class yv extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pi extends si{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],y=[],M=[];let T=0;const C=[],b=s/2;let x=0;U(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(y,3)),this.setAttribute("uv",new on(M,2));function U(){const N=new J,I=new J;let O=0;const z=(i-t)/s;for(let W=0;W<=c;W++){const E=[],R=W/c,H=R*(i-t)+t;for(let Z=0;Z<=l;Z++){const $=Z/l,ce=$*m+d,he=Math.sin(ce),F=Math.cos(ce);I.x=H*he,I.y=-R*s+b,I.z=H*F,g.push(I.x,I.y,I.z),N.set(he,z,F).normalize(),y.push(N.x,N.y,N.z),M.push($,1-R),E.push(T++)}C.push(E)}for(let W=0;W<l;W++)for(let E=0;E<c;E++){const R=C[E][W],H=C[E+1][W],Z=C[E+1][W+1],$=C[E][W+1];(t>0||E!==0)&&(_.push(R,H,$),O+=3),(i>0||E!==c-1)&&(_.push(H,Z,$),O+=3)}p.addGroup(x,O,0),x+=O}function L(N){const I=T,O=new Mt,z=new J;let W=0;const E=N===!0?t:i,R=N===!0?1:-1;for(let Z=1;Z<=l;Z++)g.push(0,b*R,0),y.push(0,R,0),M.push(.5,.5),T++;const H=T;for(let Z=0;Z<=l;Z++){const ce=Z/l*m+d,he=Math.cos(ce),F=Math.sin(ce);z.x=E*F,z.y=b*R,z.z=E*he,g.push(z.x,z.y,z.z),y.push(0,R,0),O.x=he*.5+.5,O.y=F*.5*R+.5,M.push(O.x,O.y),T++}for(let Z=0;Z<l;Z++){const $=I+Z,ce=H+Z;N===!0?_.push(ce,ce+1,$):_.push(ce+1,ce,$),W+=3}p.addGroup(x,W,N===!0?1:2),x+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xc extends si{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],h=[];d(l),p(s),_(),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(c.slice(),3)),this.setAttribute("uv",new on(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(U){const L=new J,N=new J,I=new J;for(let O=0;O<i.length;O+=3)M(i[O+0],L),M(i[O+1],N),M(i[O+2],I),m(L,N,I,U)}function m(U,L,N,I){const O=I+1,z=[];for(let W=0;W<=O;W++){z[W]=[];const E=U.clone().lerp(N,W/O),R=L.clone().lerp(N,W/O),H=O-W;for(let Z=0;Z<=H;Z++)Z===0&&W===O?z[W][Z]=E:z[W][Z]=E.clone().lerp(R,Z/H)}for(let W=0;W<O;W++)for(let E=0;E<2*(O-W)-1;E++){const R=Math.floor(E/2);E%2===0?(y(z[W][R+1]),y(z[W+1][R]),y(z[W][R])):(y(z[W][R+1]),y(z[W+1][R+1]),y(z[W+1][R]))}}function p(U){const L=new J;for(let N=0;N<c.length;N+=3)L.x=c[N+0],L.y=c[N+1],L.z=c[N+2],L.normalize().multiplyScalar(U),c[N+0]=L.x,c[N+1]=L.y,c[N+2]=L.z}function _(){const U=new J;for(let L=0;L<c.length;L+=3){U.x=c[L+0],U.y=c[L+1],U.z=c[L+2];const N=b(U)/2/Math.PI+.5,I=x(U)/Math.PI+.5;h.push(N,1-I)}T(),g()}function g(){for(let U=0;U<h.length;U+=6){const L=h[U+0],N=h[U+2],I=h[U+4],O=Math.max(L,N,I),z=Math.min(L,N,I);O>.9&&z<.1&&(L<.2&&(h[U+0]+=1),N<.2&&(h[U+2]+=1),I<.2&&(h[U+4]+=1))}}function y(U){c.push(U.x,U.y,U.z)}function M(U,L){const N=U*3;L.x=t[N+0],L.y=t[N+1],L.z=t[N+2]}function T(){const U=new J,L=new J,N=new J,I=new J,O=new Mt,z=new Mt,W=new Mt;for(let E=0,R=0;E<c.length;E+=9,R+=6){U.set(c[E+0],c[E+1],c[E+2]),L.set(c[E+3],c[E+4],c[E+5]),N.set(c[E+6],c[E+7],c[E+8]),O.set(h[R+0],h[R+1]),z.set(h[R+2],h[R+3]),W.set(h[R+4],h[R+5]),I.copy(U).add(L).add(N).divideScalar(3);const H=b(I);C(O,R+0,U,H),C(z,R+2,L,H),C(W,R+4,N,H)}}function C(U,L,N,I){I<0&&U.x===1&&(h[L]=U.x-1),N.x===0&&N.z===0&&(h[L]=I/2/Math.PI+.5)}function b(U){return Math.atan2(U.z,-U.x)}function x(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.vertices,t.indices,t.radius,t.detail)}}class qd extends Xc{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=1/s,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-s,0,-l,s,0,l,-s,0,l,s,-l,-s,0,-l,s,0,l,-s,0,l,s,0,-s,0,-l,s,0,-l,-s,0,l,s,0,l],h=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,h,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new qd(t.radius,t.detail)}}class Yd extends Xc{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Yd(t.radius,t.detail)}}class tl extends si{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,g=t/d,y=i/m,M=[],T=[],C=[],b=[];for(let x=0;x<_;x++){const U=x*y-h;for(let L=0;L<p;L++){const N=L*g-c;T.push(N,-U,0),C.push(0,0,1),b.push(L/d),b.push(1-x/m)}}for(let x=0;x<m;x++)for(let U=0;U<d;U++){const L=U+p*x,N=U+p*(x+1),I=U+1+p*(x+1),O=U+1+p*x;M.push(L,N,O),M.push(N,I,O)}this.setIndex(M),this.setAttribute("position",new on(T,3)),this.setAttribute("normal",new on(C,3)),this.setAttribute("uv",new on(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Vc extends si{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],g=new J,y=new J,M=[],T=[],C=[],b=[];for(let x=0;x<=s;x++){const U=[],L=x/s;let N=0;x===0&&h===0?N=.5/i:x===s&&m===Math.PI&&(N=-.5/i);for(let I=0;I<=i;I++){const O=I/i;g.x=-t*Math.cos(l+O*c)*Math.sin(h+L*d),g.y=t*Math.cos(h+L*d),g.z=t*Math.sin(l+O*c)*Math.sin(h+L*d),T.push(g.x,g.y,g.z),y.copy(g).normalize(),C.push(y.x,y.y,y.z),b.push(O+N,1-L),U.push(p++)}_.push(U)}for(let x=0;x<s;x++)for(let U=0;U<i;U++){const L=_[x][U+1],N=_[x][U],I=_[x+1][U],O=_[x+1][U+1];(x!==0||h>0)&&M.push(L,N,O),(x!==s-1||m<Math.PI)&&M.push(N,I,O)}this.setIndex(M),this.setAttribute("position",new on(T,3)),this.setAttribute("normal",new on(C,3)),this.setAttribute("uv",new on(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jd extends si{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],_=new J,g=new J,y=new J;for(let M=0;M<=s;M++)for(let T=0;T<=l;T++){const C=T/l*c,b=M/s*Math.PI*2;g.x=(t+i*Math.cos(b))*Math.cos(C),g.y=(t+i*Math.cos(b))*Math.sin(C),g.z=i*Math.sin(b),d.push(g.x,g.y,g.z),_.x=t*Math.cos(C),_.y=t*Math.sin(C),y.subVectors(g,_).normalize(),m.push(y.x,y.y,y.z),p.push(T/l),p.push(M/s)}for(let M=1;M<=s;M++)for(let T=1;T<=l;T++){const C=(l+1)*M+T-1,b=(l+1)*(M-1)+T-1,x=(l+1)*(M-1)+T,U=(l+1)*M+T;h.push(C,b,U),h.push(b,x,U)}this.setIndex(h),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(m,3)),this.setAttribute("uv",new on(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jd(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class TM extends Wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oi extends el{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cv,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class AM extends el{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wM extends el{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rh={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class RM{constructor(t,i,s){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,d),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,y=p.length;g<y;g+=2){const M=p[g],T=p[g+1];if(M.global&&(M.lastIndex=0),M.test(_))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const CM=new RM;class Zd{constructor(t){this.manager=t!==void 0?t:CM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Zd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ur=new WeakMap;class DM extends Zd{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=Rh.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0);else{let g=Ur.get(h);g===void 0&&(g=[],Ur.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=jo("img");function m(){_(),i&&i(this);const g=Ur.get(this)||[];for(let y=0;y<g.length;y++){const M=g[y];M.onLoad&&M.onLoad(this)}Ur.delete(this),c.manager.itemEnd(t)}function p(g){_(),l&&l(g),Rh.remove(`image:${t}`);const y=Ur.get(this)||[];for(let M=0;M<y.length;M++){const T=y[M];T.onError&&T.onError(g)}Ur.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Rh.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class UM extends Zd{constructor(t){super(t)}load(t,i,s,l){const c=new Pn,h=new DM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class Kd extends zn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Ch=new en,h_=new J,d_=new J;class Sv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wd,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;h_.setFromMatrixPosition(t.matrixWorld),i.position.copy(h_),d_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(d_),i.updateMatrixWorld(),Ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class NM extends Sv{constructor(){super(new Yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Gc*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class LM extends Kd{constructor(t,i,s=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new NM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class OM extends Sv{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}}class Dh extends Kd{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new OM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Mv extends _v{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class IM extends Kd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class PM extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const p_=new en;class m_{constructor(t,i,s=0,l=1/0){this.ray=new hv(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Vd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):wt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return p_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(p_),this}intersectObject(t,i=!0,s=[]){return wd(t,this,s,i),s.sort(g_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)wd(t[l],this,s,i);return s.sort(g_),s}}function g_(o,t){return o.distance-t.distance}function wd(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)wd(c[h],t,i,!0)}}function __(o,t,i,s){const l=zM(s);switch(i){case rv:return o*t;case lv:return o*t/l.components*l.byteLength;case Id:return o*t/l.components*l.byteLength;case zr:return o*t*2/l.components*l.byteLength;case Pd:return o*t*2/l.components*l.byteLength;case ov:return o*t*3/l.components*l.byteLength;case Ri:return o*t*4/l.components*l.byteLength;case zd:return o*t*4/l.components*l.byteLength;case Oc:case Ic:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Kh:case Jh:return Math.max(o,16)*Math.max(t,8)/4;case Zh:case Qh:return Math.max(o,8)*Math.max(t,8)/2;case $h:case ed:case nd:case id:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case td:case ad:case sd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case rd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case od:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case ld:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case cd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case ud:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case fd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case hd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case dd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case pd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case md:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case gd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case _d:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case vd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case xd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case yd:case Sd:case Md:return Math.ceil(o/4)*Math.ceil(t/4)*16;case bd:case Ed:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Td:case Ad:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function zM(o){switch(o){case ai:case nv:return{byteLength:1,components:1};case qo:case iv:case ya:return{byteLength:2,components:1};case Ld:case Od:return{byteLength:2,components:4};case ki:case Nd:case Fi:return{byteLength:4,components:1};case av:case sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);function bv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function FM(o){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<g.length;M++){const T=g[y],C=g[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++y,g[y]=C)}g.length=y+1;for(let M=0,T=g.length;M<T;M++){const C=g[M];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var BM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$M=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ub=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",gb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_b=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ab=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Db=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ub=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ob=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$b=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ME=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,EE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:BM,alphahash_pars_fragment:HM,alphamap_fragment:GM,alphamap_pars_fragment:VM,alphatest_fragment:kM,alphatest_pars_fragment:XM,aomap_fragment:WM,aomap_pars_fragment:qM,batching_pars_vertex:YM,batching_vertex:jM,begin_vertex:ZM,beginnormal_vertex:KM,bsdfs:QM,iridescence_fragment:JM,bumpmap_pars_fragment:$M,clipping_planes_fragment:eb,clipping_planes_pars_fragment:tb,clipping_planes_pars_vertex:nb,clipping_planes_vertex:ib,color_fragment:ab,color_pars_fragment:sb,color_pars_vertex:rb,color_vertex:ob,common:lb,cube_uv_reflection_fragment:cb,defaultnormal_vertex:ub,displacementmap_pars_vertex:fb,displacementmap_vertex:hb,emissivemap_fragment:db,emissivemap_pars_fragment:pb,colorspace_fragment:mb,colorspace_pars_fragment:gb,envmap_fragment:_b,envmap_common_pars_fragment:vb,envmap_pars_fragment:xb,envmap_pars_vertex:yb,envmap_physical_pars_fragment:Ub,envmap_vertex:Sb,fog_vertex:Mb,fog_pars_vertex:bb,fog_fragment:Eb,fog_pars_fragment:Tb,gradientmap_pars_fragment:Ab,lightmap_pars_fragment:wb,lights_lambert_fragment:Rb,lights_lambert_pars_fragment:Cb,lights_pars_begin:Db,lights_toon_fragment:Nb,lights_toon_pars_fragment:Lb,lights_phong_fragment:Ob,lights_phong_pars_fragment:Ib,lights_physical_fragment:Pb,lights_physical_pars_fragment:zb,lights_fragment_begin:Fb,lights_fragment_maps:Bb,lights_fragment_end:Hb,logdepthbuf_fragment:Gb,logdepthbuf_pars_fragment:Vb,logdepthbuf_pars_vertex:kb,logdepthbuf_vertex:Xb,map_fragment:Wb,map_pars_fragment:qb,map_particle_fragment:Yb,map_particle_pars_fragment:jb,metalnessmap_fragment:Zb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:Qb,morphcolor_vertex:Jb,morphnormal_vertex:$b,morphtarget_pars_vertex:eE,morphtarget_vertex:tE,normal_fragment_begin:nE,normal_fragment_maps:iE,normal_pars_fragment:aE,normal_pars_vertex:sE,normal_vertex:rE,normalmap_pars_fragment:oE,clearcoat_normal_fragment_begin:lE,clearcoat_normal_fragment_maps:cE,clearcoat_pars_fragment:uE,iridescence_pars_fragment:fE,opaque_fragment:hE,packing:dE,premultiplied_alpha_fragment:pE,project_vertex:mE,dithering_fragment:gE,dithering_pars_fragment:_E,roughnessmap_fragment:vE,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:yE,shadowmap_pars_vertex:SE,shadowmap_vertex:ME,shadowmask_pars_fragment:bE,skinbase_vertex:EE,skinning_pars_vertex:TE,skinning_vertex:AE,skinnormal_vertex:wE,specularmap_fragment:RE,specularmap_pars_fragment:CE,tonemapping_fragment:DE,tonemapping_pars_fragment:UE,transmission_fragment:NE,transmission_pars_fragment:LE,uv_pars_fragment:OE,uv_pars_vertex:IE,uv_vertex:PE,worldpos_vertex:zE,background_vert:FE,background_frag:BE,backgroundCube_vert:HE,backgroundCube_frag:GE,cube_vert:VE,cube_frag:kE,depth_vert:XE,depth_frag:WE,distance_vert:qE,distance_frag:YE,equirect_vert:jE,equirect_frag:ZE,linedashed_vert:KE,linedashed_frag:QE,meshbasic_vert:JE,meshbasic_frag:$E,meshlambert_vert:e1,meshlambert_frag:t1,meshmatcap_vert:n1,meshmatcap_frag:i1,meshnormal_vert:a1,meshnormal_frag:s1,meshphong_vert:r1,meshphong_frag:o1,meshphysical_vert:l1,meshphysical_frag:c1,meshtoon_vert:u1,meshtoon_frag:f1,points_vert:h1,points_frag:d1,shadow_vert:p1,shadow_frag:m1,sprite_vert:g1,sprite_frag:_1},Be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},zi={basic:{uniforms:Bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Bn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Bn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Bn([Be.points,Be.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Bn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Bn([Be.common,Be.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Bn([Be.sprite,Be.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Bn([Be.common,Be.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Bn([Be.lights,Be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};zi.physical={uniforms:Bn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Uc={r:0,b:0,g:0},As=new Xi,v1=new en;function x1(o,t,i,s,l,c,h){const d=new Ct(0);let m=c===!0?0:1,p,_,g=null,y=0,M=null;function T(L){let N=L.isScene===!0?L.background:null;return N&&N.isTexture&&(N=(L.backgroundBlurriness>0?i:t).get(N)),N}function C(L){let N=!1;const I=T(L);I===null?x(d,m):I&&I.isColor&&(x(I,1),N=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,h):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(L,N){const I=T(N);I&&(I.isCubeTexture||I.mapping===kc)?(_===void 0&&(_=new qt(new Is(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Br(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,z,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),As.copy(N.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(v1.makeRotationFromEuler(As)),_.material.toneMapped=Rt.getTransfer(I.colorSpace)!==Ht,(g!==I||y!==I.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,g=I,y=I.version,M=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new qt(new tl(2,2),new Wi({name:"BackgroundMaterial",uniforms:Br(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(I.colorSpace)!==Ht,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||y!==I.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,g=I,y=I.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,N){L.getRGB(Uc,gv(o)),s.buffers.color.setClear(Uc.r,Uc.g,Uc.b,N,h)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,N=1){d.set(L),m=N,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(d,m)},render:C,addToRenderList:b,dispose:U}}function y1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(R,H,Z,$,ce){let he=!1;const F=g($,Z,H);c!==F&&(c=F,p(c.object)),he=M(R,$,Z,ce),he&&T(R,$,Z,ce),ce!==null&&t.update(ce,o.ELEMENT_ARRAY_BUFFER),(he||h)&&(h=!1,N(R,H,Z,$),ce!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function g(R,H,Z){const $=Z.wireframe===!0;let ce=s[R.id];ce===void 0&&(ce={},s[R.id]=ce);let he=ce[H.id];he===void 0&&(he={},ce[H.id]=he);let F=he[$];return F===void 0&&(F=y(m()),he[$]=F),F}function y(R){const H=[],Z=[],$=[];for(let ce=0;ce<i;ce++)H[ce]=0,Z[ce]=0,$[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:$,object:R,attributes:{},index:null}}function M(R,H,Z,$){const ce=c.attributes,he=H.attributes;let F=0;const k=Z.getAttributes();for(const ie in k)if(k[ie].location>=0){const Se=ce[ie];let P=he[ie];if(P===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(P=R.instanceColor)),Se===void 0||Se.attribute!==P||P&&Se.data!==P.data)return!0;F++}return c.attributesNum!==F||c.index!==$}function T(R,H,Z,$){const ce={},he=H.attributes;let F=0;const k=Z.getAttributes();for(const ie in k)if(k[ie].location>=0){let Se=he[ie];Se===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(Se=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(Se=R.instanceColor));const P={};P.attribute=Se,Se&&Se.data&&(P.data=Se.data),ce[ie]=P,F++}c.attributes=ce,c.attributesNum=F,c.index=$}function C(){const R=c.newAttributes;for(let H=0,Z=R.length;H<Z;H++)R[H]=0}function b(R){x(R,0)}function x(R,H){const Z=c.newAttributes,$=c.enabledAttributes,ce=c.attributeDivisors;Z[R]=1,$[R]===0&&(o.enableVertexAttribArray(R),$[R]=1),ce[R]!==H&&(o.vertexAttribDivisor(R,H),ce[R]=H)}function U(){const R=c.newAttributes,H=c.enabledAttributes;for(let Z=0,$=H.length;Z<$;Z++)H[Z]!==R[Z]&&(o.disableVertexAttribArray(Z),H[Z]=0)}function L(R,H,Z,$,ce,he,F){F===!0?o.vertexAttribIPointer(R,H,Z,ce,he):o.vertexAttribPointer(R,H,Z,$,ce,he)}function N(R,H,Z,$){C();const ce=$.attributes,he=Z.getAttributes(),F=H.defaultAttributeValues;for(const k in he){const ie=he[k];if(ie.location>=0){let Ee=ce[k];if(Ee===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(Ee=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(Ee=R.instanceColor)),Ee!==void 0){const Se=Ee.normalized,P=Ee.itemSize,ae=t.get(Ee);if(ae===void 0)continue;const _e=ae.buffer,we=ae.type,Ge=ae.bytesPerElement,ne=we===o.INT||we===o.UNSIGNED_INT||Ee.gpuType===Nd;if(Ee.isInterleavedBufferAttribute){const de=Ee.data,De=de.stride,Xe=Ee.offset;if(de.isInstancedInterleavedBuffer){for(let Ve=0;Ve<ie.locationSize;Ve++)x(ie.location+Ve,de.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ve=0;Ve<ie.locationSize;Ve++)b(ie.location+Ve);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let Ve=0;Ve<ie.locationSize;Ve++)L(ie.location+Ve,P/ie.locationSize,we,Se,De*Ge,(Xe+P/ie.locationSize*Ve)*Ge,ne)}else{if(Ee.isInstancedBufferAttribute){for(let de=0;de<ie.locationSize;de++)x(ie.location+de,Ee.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let de=0;de<ie.locationSize;de++)b(ie.location+de);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let de=0;de<ie.locationSize;de++)L(ie.location+de,P/ie.locationSize,we,Se,P*Ge,P/ie.locationSize*de*Ge,ne)}}else if(F!==void 0){const Se=F[k];if(Se!==void 0)switch(Se.length){case 2:o.vertexAttrib2fv(ie.location,Se);break;case 3:o.vertexAttrib3fv(ie.location,Se);break;case 4:o.vertexAttrib4fv(ie.location,Se);break;default:o.vertexAttrib1fv(ie.location,Se)}}}}U()}function I(){W();for(const R in s){const H=s[R];for(const Z in H){const $=H[Z];for(const ce in $)_($[ce].object),delete $[ce];delete H[Z]}delete s[R]}}function O(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const Z in H){const $=H[Z];for(const ce in $)_($[ce].object),delete $[ce];delete H[Z]}delete s[R.id]}function z(R){for(const H in s){const Z=s[H];if(Z[R.id]===void 0)continue;const $=Z[R.id];for(const ce in $)_($[ce].object),delete $[ce];delete Z[R.id]}}function W(){E(),h=!0,c!==l&&(c=l,p(c.object))}function E(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:O,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:b,disableUnusedAttributes:U}}function S1(o,t,i){let s;function l(p){s=p}function c(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=_[T];i.update(M,s,1)}function m(p,_,g,y){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],_[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,y,0,g);let T=0;for(let C=0;C<g;C++)T+=_[C]*y[C];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function M1(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ri&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const W=z===ya&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ai&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Fi&&!W)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ct("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:N,maxSamples:I,samples:O}}function b1(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Rs,d=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const M=g.length!==0||y||s!==0||l;return l=y,s=g.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=_(g,y,0)},this.setState=function(g,y,M){const T=g.clippingPlanes,C=g.clipIntersection,b=g.clipShadows,x=o.get(g);if(!l||T===null||T.length===0||c&&!b)c?_(null):p();else{const U=c?0:s,L=U*4;let N=x.clippingState||null;m.value=N,N=_(T,y,L,M);for(let I=0;I!==L;++I)N[I]=i[I];x.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,y,M,T){const C=g!==null?g.length:0;let b=null;if(C!==0){if(b=m.value,T!==!0||b===null){const x=M+C*4,U=y.matrixWorldInverse;d.getNormalMatrix(U),(b===null||b.length<x)&&(b=new Float32Array(x));for(let L=0,N=M;L!==C;++L,N+=4)h.copy(g[L]).applyMatrix4(U,d),h.normal.toArray(b,N),b[N+3]=h.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,b}}function E1(o){let t=new WeakMap;function i(h,d){return d===qh?h.mapping=Os:d===Yh&&(h.mapping=Pr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===qh||d===Yh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new xv(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const ns=4,v_=[.125,.215,.35,.446,.526,.582],Ds=20,T1=256,Vo=new Mv,x_=new Ct;let Uh=null,Nh=0,Lh=0,Oh=!1;const A1=new J;class y_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=A1}=c;Uh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Uh,Nh,Lh),this._renderer.xr.enabled=Oh,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Os||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:ya,format:Ri,colorSpace:Fr,depthBuffer:!1},l=S_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=w1(c)),this._blurMaterial=C1(c,t,i),this._ggxMaterial=R1(c,t,i)}return l}_compileMaterial(t){const i=new qt(new si,t);this._renderer.compile(i,Vo)}_sceneToCubeUV(t,i,s,l,c){const m=new Yn(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,M=g.toneMapping;g.getClearColor(x_),g.toneMapping=Hi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qt(new Is,new kd({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,b=C.material;let x=!1;const U=t.background;U?U.isColor&&(b.color.copy(U),t.background=null,x=!0):(b.color.copy(x_),x=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):N===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const I=this._cubeSize;Nr(l,N*I,L>2?I:0,I,I),g.setRenderTarget(l),x&&g.render(C,m),g.render(t,m)}g.toneMapping=M,g.autoClear=y,t.background=U}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Os||t.mapping===Pr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=b_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Nr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Vo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),y=0+p*1.25,M=g*y,{_lodMax:T}=this,C=this._sizeLods[s],b=3*C*(s>T-ns?s-T+ns:0),x=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=T-i,Nr(c,b,x,3*C,2*C),l.setRenderTarget(c),l.render(d,Vo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Nr(t,b,x,3*C,2*C),l.setRenderTarget(t),l.render(d,Vo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ds-1),C=c/T,b=isFinite(c)?1+Math.floor(_*C):Ds;b>Ds&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Ds}`);const x=[];let U=0;for(let z=0;z<Ds;++z){const W=z/C,E=Math.exp(-W*W/2);x.push(E),z===0?U+=E:z<b&&(U+=2*E)}for(let z=0;z<x.length;z++)x[z]=x[z]/U;y.envMap.value=t.texture,y.samples.value=b,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=T,y.mipInt.value=L-s;const N=this._sizeLods[l],I=3*N*(l>L-ns?l-L+ns:0),O=4*(this._cubeSize-N);Nr(i,I,O,3*N,2*N),m.setRenderTarget(i),m.render(g,Vo)}}function w1(o){const t=[],i=[],s=[];let l=o;const c=o-ns+1+v_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>o-ns?m=v_[h-o+ns-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,T=6,C=3,b=2,x=1,U=new Float32Array(C*T*M),L=new Float32Array(b*T*M),N=new Float32Array(x*T*M);for(let O=0;O<M;O++){const z=O%3*2/3-1,W=O>2?0:-1,E=[z,W,0,z+2/3,W,0,z+2/3,W+1,0,z,W,0,z+2/3,W+1,0,z,W+1,0];U.set(E,C*T*O),L.set(y,b*T*O);const R=[O,O,O,O,O,O];N.set(R,x*T*O)}const I=new si;I.setAttribute("position",new Vi(U,C)),I.setAttribute("uv",new Vi(L,b)),I.setAttribute("faceIndex",new Vi(N,x)),s.push(new qt(I,null)),l>ns&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function S_(o,t,i){const s=new Gi(o,t,i);return s.texture.mapping=kc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function R1(o,t,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function C1(o,t,i){const s=new Float32Array(Ds),l=new J(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function M_(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function b_(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function D1(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===qh||m===Yh,_=m===Os||m===Pr;if(p||_){let g=t.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new y_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new y_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function U1(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Zo("WebGLRenderer: "+s+" extension not supported."),l}}}function N1(o,t,i,s){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const T in y.attributes)t.remove(y.attributes[T]);y.removeEventListener("dispose",h),delete l[y.id];const M=c.get(y);M&&(t.remove(M),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const M in y)t.update(y[M],o.ARRAY_BUFFER)}function p(g){const y=[],M=g.index,T=g.attributes.position;let C=0;if(M!==null){const U=M.array;C=M.version;for(let L=0,N=U.length;L<N;L+=3){const I=U[L+0],O=U[L+1],z=U[L+2];y.push(I,O,O,z,z,I)}}else if(T!==void 0){const U=T.array;C=T.version;for(let L=0,N=U.length/3-1;L<N;L+=3){const I=L+0,O=L+1,z=L+2;y.push(I,O,O,z,z,I)}}else return;const b=new(uv(y)?mv:pv)(y,1);b.version=C;const x=c.get(g);x&&t.remove(x),c.set(g,b)}function _(g){const y=c.get(g);if(y){const M=g.index;M!==null&&y.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function L1(o,t,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,M){o.drawElements(s,M,c,y*h),i.update(M,s,1)}function p(y,M,T){T!==0&&(o.drawElementsInstanced(s,M,c,y*h,T),i.update(M,s,T))}function _(y,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,y,0,T);let b=0;for(let x=0;x<T;x++)b+=M[x];i.update(b,s,1)}function g(y,M,T,C){if(T===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let x=0;x<y.length;x++)p(y[x]/h,M[x],C[x]);else{b.multiDrawElementsInstancedWEBGL(s,M,0,c,y,0,C,0,T);let x=0;for(let U=0;U<T;U++)x+=M[U]*C[U];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function O1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:wt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function I1(o,t,i){const s=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let E=function(){z.dispose(),s.delete(d),d.removeEventListener("dispose",E)};y!==void 0&&y.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,b=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let L=0;M===!0&&(L=1),T===!0&&(L=2),C===!0&&(L=3);let N=d.attributes.position.count*L,I=1;N>t.maxTextureSize&&(I=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const O=new Float32Array(N*I*4*g),z=new fv(O,N,I,g);z.type=Fi,z.needsUpdate=!0;const W=L*4;for(let R=0;R<g;R++){const H=b[R],Z=x[R],$=U[R],ce=N*I*4*R;for(let he=0;he<H.count;he++){const F=he*W;M===!0&&(l.fromBufferAttribute(H,he),O[ce+F+0]=l.x,O[ce+F+1]=l.y,O[ce+F+2]=l.z,O[ce+F+3]=0),T===!0&&(l.fromBufferAttribute(Z,he),O[ce+F+4]=l.x,O[ce+F+5]=l.y,O[ce+F+6]=l.z,O[ce+F+7]=0),C===!0&&(l.fromBufferAttribute($,he),O[ce+F+8]=l.x,O[ce+F+9]=l.y,O[ce+F+10]=l.z,O[ce+F+11]=$.itemSize===4?l.w:1)}}y={count:g,texture:z,size:new Mt(N,I)},s.set(d,y),d.addEventListener("dispose",E)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let M=0;for(let C=0;C<p.length;C++)M+=p[C];const T=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function P1(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const z1={[j_]:"LINEAR_TONE_MAPPING",[Z_]:"REINHARD_TONE_MAPPING",[K_]:"CINEON_TONE_MAPPING",[Q_]:"ACES_FILMIC_TONE_MAPPING",[$_]:"AGX_TONE_MAPPING",[ev]:"NEUTRAL_TONE_MAPPING",[J_]:"CUSTOM_TONE_MAPPING"};function F1(o,t,i,s,l){const c=new Gi(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Gi(t,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),d=new si;d.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new on([0,2,0,0,2,0],2));const m=new TM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new qt(d,m),_=new Mv(-1,1,1,-1,0,1);let g=null,y=null,M=!1,T,C=null,b=[],x=!1;this.setSize=function(U,L){c.setSize(U,L),h.setSize(U,L);for(let N=0;N<b.length;N++){const I=b[N];I.setSize&&I.setSize(U,L)}},this.setEffects=function(U){b=U,x=b.length>0&&b[0].isRenderPass===!0;const L=c.width,N=c.height;for(let I=0;I<b.length;I++){const O=b[I];O.setSize&&O.setSize(L,N)}},this.begin=function(U,L){if(M||U.toneMapping===Hi&&b.length===0)return!1;if(C=L,L!==null){const N=L.width,I=L.height;(c.width!==N||c.height!==I)&&this.setSize(N,I)}return x===!1&&U.setRenderTarget(c),T=U.toneMapping,U.toneMapping=Hi,!0},this.hasRenderPass=function(){return x},this.end=function(U,L){U.toneMapping=T,M=!0;let N=c,I=h;for(let O=0;O<b.length;O++){const z=b[O];if(z.enabled!==!1&&(z.render(U,I,N,L),z.needsSwap!==!1)){const W=N;N=I,I=W}}if(g!==U.outputColorSpace||y!==U.toneMapping){g=U.outputColorSpace,y=U.toneMapping,m.defines={},Rt.getTransfer(g)===Ht&&(m.defines.SRGB_TRANSFER="");const O=z1[y];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,U.setRenderTarget(C),U.render(p,_),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Ev=new Pn,Rd=new Ko(1,1),Tv=new fv,Av=new tM,wv=new vv,E_=[],T_=[],A_=new Float32Array(16),w_=new Float32Array(9),R_=new Float32Array(4);function Gr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=E_[l];if(c===void 0&&(c=new Float32Array(l),E_[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function _n(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function qc(o,t){let i=T_[t];i===void 0&&(i=new Int32Array(t),T_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function B1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function H1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),_n(i,t)}}function G1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),_n(i,t)}}function V1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),_n(i,t)}}function k1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;R_.set(s),o.uniformMatrix2fv(this.addr,!1,R_),_n(i,s)}}function X1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;w_.set(s),o.uniformMatrix3fv(this.addr,!1,w_),_n(i,s)}}function W1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;A_.set(s),o.uniformMatrix4fv(this.addr,!1,A_),_n(i,s)}}function q1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Y1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),_n(i,t)}}function j1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),_n(i,t)}}function Z1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),_n(i,t)}}function K1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Q1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),_n(i,t)}}function J1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),_n(i,t)}}function $1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),_n(i,t)}}function eT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Rd.compareFunction=i.isReversedDepthBuffer()?Bd:Fd,c=Rd):c=Ev,i.setTexture2D(t||c,l)}function tT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Av,l)}function nT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||wv,l)}function iT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Tv,l)}function aT(o){switch(o){case 5126:return B1;case 35664:return H1;case 35665:return G1;case 35666:return V1;case 35674:return k1;case 35675:return X1;case 35676:return W1;case 5124:case 35670:return q1;case 35667:case 35671:return Y1;case 35668:case 35672:return j1;case 35669:case 35673:return Z1;case 5125:return K1;case 36294:return Q1;case 36295:return J1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}function sT(o,t){o.uniform1fv(this.addr,t)}function rT(o,t){const i=Gr(t,this.size,2);o.uniform2fv(this.addr,i)}function oT(o,t){const i=Gr(t,this.size,3);o.uniform3fv(this.addr,i)}function lT(o,t){const i=Gr(t,this.size,4);o.uniform4fv(this.addr,i)}function cT(o,t){const i=Gr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function uT(o,t){const i=Gr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function fT(o,t){const i=Gr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function hT(o,t){o.uniform1iv(this.addr,t)}function dT(o,t){o.uniform2iv(this.addr,t)}function pT(o,t){o.uniform3iv(this.addr,t)}function mT(o,t){o.uniform4iv(this.addr,t)}function gT(o,t){o.uniform1uiv(this.addr,t)}function _T(o,t){o.uniform2uiv(this.addr,t)}function vT(o,t){o.uniform3uiv(this.addr,t)}function xT(o,t){o.uniform4uiv(this.addr,t)}function yT(o,t,i){const s=this.cache,l=t.length,c=qc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Rd:h=Ev;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function ST(o,t,i){const s=this.cache,l=t.length,c=qc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Av,c[h])}function MT(o,t,i){const s=this.cache,l=t.length,c=qc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||wv,c[h])}function bT(o,t,i){const s=this.cache,l=t.length,c=qc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Tv,c[h])}function ET(o){switch(o){case 5126:return sT;case 35664:return rT;case 35665:return oT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return fT;case 5124:case 35670:return hT;case 35667:case 35671:return dT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return _T;case 36295:return vT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return bT}}class TT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=aT(i.type)}}class AT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ET(i.type)}}class wT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function C_(o,t){o.seq.push(t),o.map[t.id]=t}function RT(o,t,i){const s=o.name,l=s.length;for(Ih.lastIndex=0;;){const c=Ih.exec(s),h=Ih.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){C_(i,p===void 0?new TT(d,o,t):new AT(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new wT(d),C_(i,g)),i=g}}}class Fc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);RT(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function D_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const CT=37297;let DT=0;function UT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const U_=new pt;function NT(o){Rt._getMatrix(U_,Rt.workingColorSpace,o);const t=`mat3( ${U_.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(o)){case Bc:return[t,"LinearTransferOETF"];case Ht:return[t,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function N_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+UT(o.getShaderSource(t),d)}else return c}function LT(o,t){const i=NT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const OT={[j_]:"Linear",[Z_]:"Reinhard",[K_]:"Cineon",[Q_]:"ACESFilmic",[$_]:"AgX",[ev]:"Neutral",[J_]:"Custom"};function IT(o,t){const i=OT[t];return i===void 0?(ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new J;function PT(){Rt.getLuminanceCoefficients(Nc);const o=Nc.x.toFixed(4),t=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function FT(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function BT(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Wo(o){return o!==""}function L_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function O_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const HT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(o){return o.replace(HT,VT)}const GT=new Map;function VT(o,t){let i=gt[t];if(i===void 0){const s=GT.get(t);if(s!==void 0)i=gt[s],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Cd(i)}const kT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I_(o){return o.replace(kT,XT)}function XT(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function P_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const WT={[Lc]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function qT(o){return WT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YT={[Os]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[kc]:"ENVMAP_TYPE_CUBE_UV"};function jT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":YT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const ZT={[Pr]:"ENVMAP_MODE_REFRACTION"};function KT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":ZT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QT={[Y_]:"ENVMAP_BLENDING_MULTIPLY",[PS]:"ENVMAP_BLENDING_MIX",[zS]:"ENVMAP_BLENDING_ADD"};function JT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":QT[o.combine]||"ENVMAP_BLENDING_NONE"}function $T(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function eA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=qT(i),p=jT(i),_=KT(i),g=JT(i),y=$T(i),M=zT(i),T=FT(c),C=l.createProgram();let b,x,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Wo).join(`
`),b.length>0&&(b+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Wo).join(`
`),x.length>0&&(x+=`
`)):(b=[P_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),x=[P_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?gt.tonemapping_pars_fragment:"",i.toneMapping!==Hi?IT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,LT("linearToOutputTexel",i.outputColorSpace),PT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),h=Cd(h),h=L_(h,i),h=O_(h,i),d=Cd(d),d=L_(d,i),d=O_(d,i),h=I_(h),d=I_(d),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,b=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,x=["#define varying in",i.glslVersion===Yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=U+b+h,N=U+x+d,I=D_(l,l.VERTEX_SHADER,L),O=D_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,I),l.attachShader(C,O),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(H){if(o.debug.checkShaderErrors){const Z=l.getProgramInfoLog(C)||"",$=l.getShaderInfoLog(I)||"",ce=l.getShaderInfoLog(O)||"",he=Z.trim(),F=$.trim(),k=ce.trim();let ie=!0,Ee=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ie=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,I,O);else{const Se=N_(l,I,"vertex"),P=N_(l,O,"fragment");wt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+he+`
`+Se+`
`+P)}else he!==""?ct("WebGLProgram: Program Info Log:",he):(F===""||k==="")&&(Ee=!1);Ee&&(H.diagnostics={runnable:ie,programLog:he,vertexShader:{log:F,prefix:b},fragmentShader:{log:k,prefix:x}})}l.deleteShader(I),l.deleteShader(O),W=new Fc(l,C),E=BT(l,C)}let W;this.getUniforms=function(){return W===void 0&&z(this),W};let E;this.getAttributes=function(){return E===void 0&&z(this),E};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,CT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=DT++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=O,this}let tA=0;class nA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new iA(t),i.set(t,s)),s}}class iA{constructor(t){this.id=tA++,this.code=t,this.usedTimes=0}}function aA(o,t,i,s,l,c,h){const d=new Vd,m=new nA,p=new Set,_=[],g=new Map,y=l.logarithmicDepthBuffer;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(E){return p.add(E),E===0?"uv":`uv${E}`}function b(E,R,H,Z,$){const ce=Z.fog,he=$.geometry,F=E.isMeshStandardMaterial?Z.environment:null,k=(E.isMeshStandardMaterial?i:t).get(E.envMap||F),ie=k&&k.mapping===kc?k.image.height:null,Ee=T[E.type];E.precision!==null&&(M=l.getMaxPrecision(E.precision),M!==E.precision&&ct("WebGLProgram.getParameters:",E.precision,"not supported, using",M,"instead."));const Se=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,P=Se!==void 0?Se.length:0;let ae=0;he.morphAttributes.position!==void 0&&(ae=1),he.morphAttributes.normal!==void 0&&(ae=2),he.morphAttributes.color!==void 0&&(ae=3);let _e,we,Ge,ne;if(Ee){const At=zi[Ee];_e=At.vertexShader,we=At.fragmentShader}else _e=E.vertexShader,we=E.fragmentShader,m.update(E),Ge=m.getVertexShaderID(E),ne=m.getFragmentShaderID(E);const de=o.getRenderTarget(),De=o.state.buffers.depth.getReversed(),Xe=$.isInstancedMesh===!0,Ve=$.isBatchedMesh===!0,ft=!!E.map,Yt=!!E.matcap,_t=!!k,mt=!!E.aoMap,bt=!!E.lightMap,st=!!E.bumpMap,jt=!!E.normalMap,G=!!E.displacementMap,We=!!E.emissiveMap,Je=!!E.metalnessMap,$e=!!E.roughnessMap,Ie=E.anisotropy>0,D=E.clearcoat>0,S=E.dispersion>0,V=E.iridescence>0,oe=E.sheen>0,fe=E.transmission>0,K=Ie&&!!E.anisotropyMap,Re=D&&!!E.clearcoatMap,Me=D&&!!E.clearcoatNormalMap,Pe=D&&!!E.clearcoatRoughnessMap,je=V&&!!E.iridescenceMap,ye=V&&!!E.iridescenceThicknessMap,be=oe&&!!E.sheenColorMap,Ne=oe&&!!E.sheenRoughnessMap,ze=!!E.specularMap,Ue=!!E.specularColorMap,ht=!!E.specularIntensityMap,q=fe&&!!E.transmissionMap,Oe=fe&&!!E.thicknessMap,Ae=!!E.gradientMap,He=!!E.alphaMap,Te=E.alphaTest>0,xe=!!E.alphaHash,Ce=!!E.extensions;let rt=Hi;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(rt=o.toneMapping);const Pt={shaderID:Ee,shaderType:E.type,shaderName:E.name,vertexShader:_e,fragmentShader:we,defines:E.defines,customVertexShaderID:Ge,customFragmentShaderID:ne,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:M,batching:Ve,batchingColor:Ve&&$._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&$.instanceColor!==null,instancingMorph:Xe&&$.morphTexture!==null,outputColorSpace:de===null?o.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Fr,alphaToCoverage:!!E.alphaToCoverage,map:ft,matcap:Yt,envMap:_t,envMapMode:_t&&k.mapping,envMapCubeUVHeight:ie,aoMap:mt,lightMap:bt,bumpMap:st,normalMap:jt,displacementMap:G,emissiveMap:We,normalMapObjectSpace:jt&&E.normalMapType===HS,normalMapTangentSpace:jt&&E.normalMapType===cv,metalnessMap:Je,roughnessMap:$e,anisotropy:Ie,anisotropyMap:K,clearcoat:D,clearcoatMap:Re,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:S,iridescence:V,iridescenceMap:je,iridescenceThicknessMap:ye,sheen:oe,sheenColorMap:be,sheenRoughnessMap:Ne,specularMap:ze,specularColorMap:Ue,specularIntensityMap:ht,transmission:fe,transmissionMap:q,thicknessMap:Oe,gradientMap:Ae,opaque:E.transparent===!1&&E.blending===Lr&&E.alphaToCoverage===!1,alphaMap:He,alphaTest:Te,alphaHash:xe,combine:E.combine,mapUv:ft&&C(E.map.channel),aoMapUv:mt&&C(E.aoMap.channel),lightMapUv:bt&&C(E.lightMap.channel),bumpMapUv:st&&C(E.bumpMap.channel),normalMapUv:jt&&C(E.normalMap.channel),displacementMapUv:G&&C(E.displacementMap.channel),emissiveMapUv:We&&C(E.emissiveMap.channel),metalnessMapUv:Je&&C(E.metalnessMap.channel),roughnessMapUv:$e&&C(E.roughnessMap.channel),anisotropyMapUv:K&&C(E.anisotropyMap.channel),clearcoatMapUv:Re&&C(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&C(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&C(E.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&C(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&C(E.iridescenceThicknessMap.channel),sheenColorMapUv:be&&C(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&C(E.sheenRoughnessMap.channel),specularMapUv:ze&&C(E.specularMap.channel),specularColorMapUv:Ue&&C(E.specularColorMap.channel),specularIntensityMapUv:ht&&C(E.specularIntensityMap.channel),transmissionMapUv:q&&C(E.transmissionMap.channel),thicknessMapUv:Oe&&C(E.thicknessMap.channel),alphaMapUv:He&&C(E.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(jt||Ie),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!he.attributes.uv&&(ft||He),fog:!!ce,useFog:E.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:De,skinning:$.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:rt,decodeVideoTexture:ft&&E.map.isVideoTexture===!0&&Rt.getTransfer(E.map.colorSpace)===Ht,decodeVideoTextureEmissive:We&&E.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(E.emissiveMap.colorSpace)===Ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ma,flipSided:E.side===jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ce&&E.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&E.extensions.multiDraw===!0||Ve)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function x(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)R.push(H),R.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(U(R,E),L(R,E),R.push(o.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function U(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function L(E,R){d.disableAll(),R.instancing&&d.enable(0),R.instancingColor&&d.enable(1),R.instancingMorph&&d.enable(2),R.matcap&&d.enable(3),R.envMap&&d.enable(4),R.normalMapObjectSpace&&d.enable(5),R.normalMapTangentSpace&&d.enable(6),R.clearcoat&&d.enable(7),R.iridescence&&d.enable(8),R.alphaTest&&d.enable(9),R.vertexColors&&d.enable(10),R.vertexAlphas&&d.enable(11),R.vertexUv1s&&d.enable(12),R.vertexUv2s&&d.enable(13),R.vertexUv3s&&d.enable(14),R.vertexTangents&&d.enable(15),R.anisotropy&&d.enable(16),R.alphaHash&&d.enable(17),R.batching&&d.enable(18),R.dispersion&&d.enable(19),R.batchingColor&&d.enable(20),R.gradientMap&&d.enable(21),E.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),E.push(d.mask)}function N(E){const R=T[E.type];let H;if(R){const Z=zi[R];H=pM.clone(Z.uniforms)}else H=E.uniforms;return H}function I(E,R){let H=g.get(R);return H!==void 0?++H.usedTimes:(H=new eA(o,R,E,c),_.push(H),g.set(R,H)),H}function O(E){if(--E.usedTimes===0){const R=_.indexOf(E);_[R]=_[_.length-1],_.pop(),g.delete(E.cacheKey),E.destroy()}}function z(E){m.remove(E)}function W(){m.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:N,acquireProgram:I,releaseProgram:O,releaseShaderCache:z,programs:_,dispose:W}}function sA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function rA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function z_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function F_(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g,y,M,T,C,b){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:y,material:M,groupOrder:T,renderOrder:g.renderOrder,z:C,group:b},o[t]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=M,x.groupOrder=T,x.renderOrder=g.renderOrder,x.z=C,x.group=b),t++,x}function d(g,y,M,T,C,b){const x=h(g,y,M,T,C,b);M.transmission>0?s.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(g,y,M,T,C,b){const x=h(g,y,M,T,C,b);M.transmission>0?s.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,y){i.length>1&&i.sort(g||rA),s.length>1&&s.sort(y||z_),l.length>1&&l.sort(y||z_)}function _(){for(let g=t,y=o.length;g<y;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function oA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new F_,o.set(s,[h])):l>=c.length?(h=new F_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function lA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new Ct};break;case"SpotLight":i={position:new J,direction:new J,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new J,halfWidth:new J,halfHeight:new J};break}return o[t.id]=i,i}}}function cA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let uA=0;function fA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function hA(o){const t=new lA,i=cA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new en,h=new en;function d(p){let _=0,g=0,y=0;for(let E=0;E<9;E++)s.probe[E].set(0,0,0);let M=0,T=0,C=0,b=0,x=0,U=0,L=0,N=0,I=0,O=0,z=0;p.sort(fA);for(let E=0,R=p.length;E<R;E++){const H=p[E],Z=H.color,$=H.intensity,ce=H.distance;let he=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===zr?he=H.shadow.map.texture:he=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=Z.r*$,g+=Z.g*$,y+=Z.b*$;else if(H.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(H.sh.coefficients[F],$);z++}else if(H.isDirectionalLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const k=H.shadow,ie=i.get(H);ie.shadowIntensity=k.intensity,ie.shadowBias=k.bias,ie.shadowNormalBias=k.normalBias,ie.shadowRadius=k.radius,ie.shadowMapSize=k.mapSize,s.directionalShadow[M]=ie,s.directionalShadowMap[M]=he,s.directionalShadowMatrix[M]=H.shadow.matrix,U++}s.directional[M]=F,M++}else if(H.isSpotLight){const F=t.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(Z).multiplyScalar($),F.distance=ce,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,s.spot[C]=F;const k=H.shadow;if(H.map&&(s.spotLightMap[I]=H.map,I++,k.updateMatrices(H),H.castShadow&&O++),s.spotLightMatrix[C]=k.matrix,H.castShadow){const ie=i.get(H);ie.shadowIntensity=k.intensity,ie.shadowBias=k.bias,ie.shadowNormalBias=k.normalBias,ie.shadowRadius=k.radius,ie.shadowMapSize=k.mapSize,s.spotShadow[C]=ie,s.spotShadowMap[C]=he,N++}C++}else if(H.isRectAreaLight){const F=t.get(H);F.color.copy(Z).multiplyScalar($),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),s.rectArea[b]=F,b++}else if(H.isPointLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const k=H.shadow,ie=i.get(H);ie.shadowIntensity=k.intensity,ie.shadowBias=k.bias,ie.shadowNormalBias=k.normalBias,ie.shadowRadius=k.radius,ie.shadowMapSize=k.mapSize,ie.shadowCameraNear=k.camera.near,ie.shadowCameraFar=k.camera.far,s.pointShadow[T]=ie,s.pointShadowMap[T]=he,s.pointShadowMatrix[T]=H.shadow.matrix,L++}s.point[T]=F,T++}else if(H.isHemisphereLight){const F=t.get(H);F.skyColor.copy(H.color).multiplyScalar($),F.groundColor.copy(H.groundColor).multiplyScalar($),s.hemi[x]=F,x++}}b>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=y;const W=s.hash;(W.directionalLength!==M||W.pointLength!==T||W.spotLength!==C||W.rectAreaLength!==b||W.hemiLength!==x||W.numDirectionalShadows!==U||W.numPointShadows!==L||W.numSpotShadows!==N||W.numSpotMaps!==I||W.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=b,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=N+I-O,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=z,W.directionalLength=M,W.pointLength=T,W.spotLength=C,W.rectAreaLength=b,W.hemiLength=x,W.numDirectionalShadows=U,W.numPointShadows=L,W.numSpotShadows=N,W.numSpotMaps=I,W.numLightProbes=z,s.version=uA++)}function m(p,_){let g=0,y=0,M=0,T=0,C=0;const b=_.matrixWorldInverse;for(let x=0,U=p.length;x<U;x++){const L=p[x];if(L.isDirectionalLight){const N=s.directional[g];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),g++}else if(L.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(b),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),M++}else if(L.isRectAreaLight){const N=s.rectArea[T];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(b),h.identity(),c.copy(L.matrixWorld),c.premultiply(b),h.extractRotation(c),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const N=s.point[y];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(b),y++}else if(L.isHemisphereLight){const N=s.hemi[C];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(b),C++}}}return{setup:d,setupView:m,state:s}}function B_(o){const t=new hA(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function dA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new B_(o),t.set(l,[d])):c>=h.length?(d=new B_(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const pA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gA=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],_A=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],H_=new en,ko=new J,Ph=new J;function vA(o,t,i){let s=new Wd;const l=new Mt,c=new Mt,h=new an,d=new AM,m=new wM,p={},_=i.maxTextureSize,g={[is]:jn,[jn]:is,[ma]:ma},y=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:pA,fragmentShader:mA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new si;T.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new qt(T,y),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let x=this.type;this.render=function(O,z,W){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||O.length===0)return;O.type===_S&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),O.type=Lc);const E=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(va),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const $=x!==this.type;$&&z.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(he=>he.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,he=O.length;ce<he;ce++){const F=O[ce],k=F.shadow;if(k===void 0){ct("WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const ie=k.getFrameExtents();if(l.multiply(ie),c.copy(k.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ie.x),l.x=c.x*ie.x,k.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ie.y),l.y=c.y*ie.y,k.mapSize.y=c.y)),k.map===null||$===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Xo){if(F.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Gi(l.x,l.y,{format:zr,type:ya,minFilter:In,magFilter:In,generateMipmaps:!1}),k.map.texture.name=F.name+".shadowMap",k.map.depthTexture=new Ko(l.x,l.y,Fi),k.map.depthTexture.name=F.name+".shadowMapDepth",k.map.depthTexture.format=Sa,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Dn,k.map.depthTexture.magFilter=Dn}else{F.isPointLight?(k.map=new xv(l.x),k.map.depthTexture=new EM(l.x,ki)):(k.map=new Gi(l.x,l.y),k.map.depthTexture=new Ko(l.x,l.y,ki)),k.map.depthTexture.name=F.name+".shadowMap",k.map.depthTexture.format=Sa;const Se=o.state.buffers.depth.getReversed();this.type===Lc?(k.map.depthTexture.compareFunction=Se?Bd:Fd,k.map.depthTexture.minFilter=In,k.map.depthTexture.magFilter=In):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Dn,k.map.depthTexture.magFilter=Dn)}k.camera.updateProjectionMatrix()}const Ee=k.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<Ee;Se++){if(k.map.isWebGLCubeRenderTarget)o.setRenderTarget(k.map,Se),o.clear();else{Se===0&&(o.setRenderTarget(k.map),o.clear());const P=k.getViewport(Se);h.set(c.x*P.x,c.y*P.y,c.x*P.z,c.y*P.w),Z.viewport(h)}if(F.isPointLight){const P=k.camera,ae=k.matrix,_e=F.distance||P.far;_e!==P.far&&(P.far=_e,P.updateProjectionMatrix()),ko.setFromMatrixPosition(F.matrixWorld),P.position.copy(ko),Ph.copy(P.position),Ph.add(gA[Se]),P.up.copy(_A[Se]),P.lookAt(Ph),P.updateMatrixWorld(),ae.makeTranslation(-ko.x,-ko.y,-ko.z),H_.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),k._frustum.setFromProjectionMatrix(H_,P.coordinateSystem,P.reversedDepth)}else k.updateMatrices(F);s=k.getFrustum(),N(z,W,k.camera,F,this.type)}k.isPointLightShadow!==!0&&this.type===Xo&&U(k,W),k.needsUpdate=!1}x=this.type,b.needsUpdate=!1,o.setRenderTarget(E,R,H)};function U(O,z){const W=t.update(C);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Gi(l.x,l.y,{format:zr,type:ya})),y.uniforms.shadow_pass.value=O.map.depthTexture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(z,null,W,y,C,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(z,null,W,M,C,null)}function L(O,z,W,E){let R=null;const H=W.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)R=H;else if(R=W.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=R.uuid,$=z.uuid;let ce=p[Z];ce===void 0&&(ce={},p[Z]=ce);let he=ce[$];he===void 0&&(he=R.clone(),ce[$]=he,z.addEventListener("dispose",I)),R=he}if(R.visible=z.visible,R.wireframe=z.wireframe,E===Xo?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:g[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Z=o.properties.get(R);Z.light=W}return R}function N(O,z,W,E,R){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Xo)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,O.matrixWorld);const $=t.update(O),ce=O.material;if(Array.isArray(ce)){const he=$.groups;for(let F=0,k=he.length;F<k;F++){const ie=he[F],Ee=ce[ie.materialIndex];if(Ee&&Ee.visible){const Se=L(O,Ee,E,R);O.onBeforeShadow(o,O,z,W,$,Se,ie),o.renderBufferDirect(W,null,$,Se,O,ie),O.onAfterShadow(o,O,z,W,$,Se,ie)}}}else if(ce.visible){const he=L(O,ce,E,R);O.onBeforeShadow(o,O,z,W,$,he,null),o.renderBufferDirect(W,null,$,he,O,null),O.onAfterShadow(o,O,z,W,$,he,null)}}const Z=O.children;for(let $=0,ce=Z.length;$<ce;$++)N(Z[$],z,W,E,R)}function I(O){O.target.removeEventListener("dispose",I);for(const W in p){const E=p[W],R=O.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}const xA={[Bh]:Hh,[Gh]:Xh,[Vh]:Wh,[Ir]:kh,[Hh]:Bh,[Xh]:Gh,[Wh]:Vh,[kh]:Ir};function yA(o,t){function i(){let q=!1;const Oe=new an;let Ae=null;const He=new an(0,0,0,0);return{setMask:function(Te){Ae!==Te&&!q&&(o.colorMask(Te,Te,Te,Te),Ae=Te)},setLocked:function(Te){q=Te},setClear:function(Te,xe,Ce,rt,Pt){Pt===!0&&(Te*=rt,xe*=rt,Ce*=rt),Oe.set(Te,xe,Ce,rt),He.equals(Oe)===!1&&(o.clearColor(Te,xe,Ce,rt),He.copy(Oe))},reset:function(){q=!1,Ae=null,He.set(-1,0,0,0)}}}function s(){let q=!1,Oe=!1,Ae=null,He=null,Te=null;return{setReversed:function(xe){if(Oe!==xe){const Ce=t.get("EXT_clip_control");xe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Oe=xe;const rt=Te;Te=null,this.setClear(rt)}},getReversed:function(){return Oe},setTest:function(xe){xe?de(o.DEPTH_TEST):De(o.DEPTH_TEST)},setMask:function(xe){Ae!==xe&&!q&&(o.depthMask(xe),Ae=xe)},setFunc:function(xe){if(Oe&&(xe=xA[xe]),He!==xe){switch(xe){case Bh:o.depthFunc(o.NEVER);break;case Hh:o.depthFunc(o.ALWAYS);break;case Gh:o.depthFunc(o.LESS);break;case Ir:o.depthFunc(o.LEQUAL);break;case Vh:o.depthFunc(o.EQUAL);break;case kh:o.depthFunc(o.GEQUAL);break;case Xh:o.depthFunc(o.GREATER);break;case Wh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}He=xe}},setLocked:function(xe){q=xe},setClear:function(xe){Te!==xe&&(Oe&&(xe=1-xe),o.clearDepth(xe),Te=xe)},reset:function(){q=!1,Ae=null,He=null,Te=null,Oe=!1}}}function l(){let q=!1,Oe=null,Ae=null,He=null,Te=null,xe=null,Ce=null,rt=null,Pt=null;return{setTest:function(At){q||(At?de(o.STENCIL_TEST):De(o.STENCIL_TEST))},setMask:function(At){Oe!==At&&!q&&(o.stencilMask(At),Oe=At)},setFunc:function(At,Un,vi){(Ae!==At||He!==Un||Te!==vi)&&(o.stencilFunc(At,Un,vi),Ae=At,He=Un,Te=vi)},setOp:function(At,Un,vi){(xe!==At||Ce!==Un||rt!==vi)&&(o.stencilOp(At,Un,vi),xe=At,Ce=Un,rt=vi)},setLocked:function(At){q=At},setClear:function(At){Pt!==At&&(o.clearStencil(At),Pt=At)},reset:function(){q=!1,Oe=null,Ae=null,He=null,Te=null,xe=null,Ce=null,rt=null,Pt=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},y=new WeakMap,M=[],T=null,C=!1,b=null,x=null,U=null,L=null,N=null,I=null,O=null,z=new Ct(0,0,0),W=0,E=!1,R=null,H=null,Z=null,$=null,ce=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,k=0;const ie=o.getParameter(o.VERSION);ie.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ie)[1]),F=k>=1):ie.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),F=k>=2);let Ee=null,Se={};const P=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),_e=new an().fromArray(P),we=new an().fromArray(ae);function Ge(q,Oe,Ae,He){const Te=new Uint8Array(4),xe=o.createTexture();o.bindTexture(q,xe),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ce=0;Ce<Ae;Ce++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Oe,0,o.RGBA,1,1,He,0,o.RGBA,o.UNSIGNED_BYTE,Te):o.texImage2D(Oe+Ce,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Te);return xe}const ne={};ne[o.TEXTURE_2D]=Ge(o.TEXTURE_2D,o.TEXTURE_2D,1),ne[o.TEXTURE_CUBE_MAP]=Ge(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[o.TEXTURE_2D_ARRAY]=Ge(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ne[o.TEXTURE_3D]=Ge(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),de(o.DEPTH_TEST),h.setFunc(Ir),st(!1),jt(Gg),de(o.CULL_FACE),mt(va);function de(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function De(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function Xe(q,Oe){return g[q]!==Oe?(o.bindFramebuffer(q,Oe),g[q]=Oe,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Oe),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Ve(q,Oe){let Ae=M,He=!1;if(q){Ae=y.get(Oe),Ae===void 0&&(Ae=[],y.set(Oe,Ae));const Te=q.textures;if(Ae.length!==Te.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let xe=0,Ce=Te.length;xe<Ce;xe++)Ae[xe]=o.COLOR_ATTACHMENT0+xe;Ae.length=Te.length,He=!0}}else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,He=!0);He&&o.drawBuffers(Ae)}function ft(q){return T!==q?(o.useProgram(q),T=q,!0):!1}const Yt={[Cs]:o.FUNC_ADD,[xS]:o.FUNC_SUBTRACT,[yS]:o.FUNC_REVERSE_SUBTRACT};Yt[SS]=o.MIN,Yt[MS]=o.MAX;const _t={[bS]:o.ZERO,[ES]:o.ONE,[TS]:o.SRC_COLOR,[zh]:o.SRC_ALPHA,[US]:o.SRC_ALPHA_SATURATE,[CS]:o.DST_COLOR,[wS]:o.DST_ALPHA,[AS]:o.ONE_MINUS_SRC_COLOR,[Fh]:o.ONE_MINUS_SRC_ALPHA,[DS]:o.ONE_MINUS_DST_COLOR,[RS]:o.ONE_MINUS_DST_ALPHA,[NS]:o.CONSTANT_COLOR,[LS]:o.ONE_MINUS_CONSTANT_COLOR,[OS]:o.CONSTANT_ALPHA,[IS]:o.ONE_MINUS_CONSTANT_ALPHA};function mt(q,Oe,Ae,He,Te,xe,Ce,rt,Pt,At){if(q===va){C===!0&&(De(o.BLEND),C=!1);return}if(C===!1&&(de(o.BLEND),C=!0),q!==vS){if(q!==b||At!==E){if((x!==Cs||N!==Cs)&&(o.blendEquation(o.FUNC_ADD),x=Cs,N=Cs),At)switch(q){case Lr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vg:o.blendFunc(o.ONE,o.ONE);break;case kg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Xg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:wt("WebGLState: Invalid blending: ",q);break}else switch(q){case Lr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case kg:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xg:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",q);break}U=null,L=null,I=null,O=null,z.set(0,0,0),W=0,b=q,E=At}return}Te=Te||Oe,xe=xe||Ae,Ce=Ce||He,(Oe!==x||Te!==N)&&(o.blendEquationSeparate(Yt[Oe],Yt[Te]),x=Oe,N=Te),(Ae!==U||He!==L||xe!==I||Ce!==O)&&(o.blendFuncSeparate(_t[Ae],_t[He],_t[xe],_t[Ce]),U=Ae,L=He,I=xe,O=Ce),(rt.equals(z)===!1||Pt!==W)&&(o.blendColor(rt.r,rt.g,rt.b,Pt),z.copy(rt),W=Pt),b=q,E=!1}function bt(q,Oe){q.side===ma?De(o.CULL_FACE):de(o.CULL_FACE);let Ae=q.side===jn;Oe&&(Ae=!Ae),st(Ae),q.blending===Lr&&q.transparent===!1?mt(va):mt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),c.setMask(q.colorWrite);const He=q.stencilWrite;d.setTest(He),He&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),We(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?de(o.SAMPLE_ALPHA_TO_COVERAGE):De(o.SAMPLE_ALPHA_TO_COVERAGE)}function st(q){R!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),R=q)}function jt(q){q!==mS?(de(o.CULL_FACE),q!==H&&(q===Gg?o.cullFace(o.BACK):q===gS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):De(o.CULL_FACE),H=q}function G(q){q!==Z&&(F&&o.lineWidth(q),Z=q)}function We(q,Oe,Ae){q?(de(o.POLYGON_OFFSET_FILL),($!==Oe||ce!==Ae)&&(o.polygonOffset(Oe,Ae),$=Oe,ce=Ae)):De(o.POLYGON_OFFSET_FILL)}function Je(q){q?de(o.SCISSOR_TEST):De(o.SCISSOR_TEST)}function $e(q){q===void 0&&(q=o.TEXTURE0+he-1),Ee!==q&&(o.activeTexture(q),Ee=q)}function Ie(q,Oe,Ae){Ae===void 0&&(Ee===null?Ae=o.TEXTURE0+he-1:Ae=Ee);let He=Se[Ae];He===void 0&&(He={type:void 0,texture:void 0},Se[Ae]=He),(He.type!==q||He.texture!==Oe)&&(Ee!==Ae&&(o.activeTexture(Ae),Ee=Ae),o.bindTexture(q,Oe||ne[q]),He.type=q,He.texture=Oe)}function D(){const q=Se[Ee];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function S(){try{o.compressedTexImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function V(){try{o.compressedTexImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function oe(){try{o.texSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function fe(){try{o.texSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function K(){try{o.compressedTexSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Re(){try{o.compressedTexSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function Me(){try{o.texStorage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Pe(){try{o.texStorage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function je(){try{o.texImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function ye(){try{o.texImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function be(q){_e.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),_e.copy(q))}function Ne(q){we.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),we.copy(q))}function ze(q,Oe){let Ae=p.get(Oe);Ae===void 0&&(Ae=new WeakMap,p.set(Oe,Ae));let He=Ae.get(q);He===void 0&&(He=o.getUniformBlockIndex(Oe,q.name),Ae.set(q,He))}function Ue(q,Oe){const He=p.get(Oe).get(q);m.get(Oe)!==He&&(o.uniformBlockBinding(Oe,He,q.__bindingPointIndex),m.set(Oe,He))}function ht(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Ee=null,Se={},g={},y=new WeakMap,M=[],T=null,C=!1,b=null,x=null,U=null,L=null,N=null,I=null,O=null,z=new Ct(0,0,0),W=0,E=!1,R=null,H=null,Z=null,$=null,ce=null,_e.set(0,0,o.canvas.width,o.canvas.height),we.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:de,disable:De,bindFramebuffer:Xe,drawBuffers:Ve,useProgram:ft,setBlending:mt,setMaterial:bt,setFlipSided:st,setCullFace:jt,setLineWidth:G,setPolygonOffset:We,setScissorTest:Je,activeTexture:$e,bindTexture:Ie,unbindTexture:D,compressedTexImage2D:S,compressedTexImage3D:V,texImage2D:je,texImage3D:ye,updateUBOMapping:ze,uniformBlockBinding:Ue,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:oe,texSubImage3D:fe,compressedTexSubImage2D:K,compressedTexSubImage3D:Re,scissor:be,viewport:Ne,reset:ht}}function SA(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Mt,_=new WeakMap;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,S){return M?new OffscreenCanvas(D,S):jo("canvas")}function C(D,S,V){let oe=1;const fe=Ie(D);if((fe.width>V||fe.height>V)&&(oe=V/Math.max(fe.width,fe.height)),oe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const K=Math.floor(oe*fe.width),Re=Math.floor(oe*fe.height);g===void 0&&(g=T(K,Re));const Me=S?T(K,Re):g;return Me.width=K,Me.height=Re,Me.getContext("2d").drawImage(D,0,0,K,Re),ct("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+K+"x"+Re+")."),Me}else return"data"in D&&ct("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function b(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(D,S,V,oe,fe=!1){if(D!==null){if(o[D]!==void 0)return o[D];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let K=S;if(S===o.RED&&(V===o.FLOAT&&(K=o.R32F),V===o.HALF_FLOAT&&(K=o.R16F),V===o.UNSIGNED_BYTE&&(K=o.R8)),S===o.RED_INTEGER&&(V===o.UNSIGNED_BYTE&&(K=o.R8UI),V===o.UNSIGNED_SHORT&&(K=o.R16UI),V===o.UNSIGNED_INT&&(K=o.R32UI),V===o.BYTE&&(K=o.R8I),V===o.SHORT&&(K=o.R16I),V===o.INT&&(K=o.R32I)),S===o.RG&&(V===o.FLOAT&&(K=o.RG32F),V===o.HALF_FLOAT&&(K=o.RG16F),V===o.UNSIGNED_BYTE&&(K=o.RG8)),S===o.RG_INTEGER&&(V===o.UNSIGNED_BYTE&&(K=o.RG8UI),V===o.UNSIGNED_SHORT&&(K=o.RG16UI),V===o.UNSIGNED_INT&&(K=o.RG32UI),V===o.BYTE&&(K=o.RG8I),V===o.SHORT&&(K=o.RG16I),V===o.INT&&(K=o.RG32I)),S===o.RGB_INTEGER&&(V===o.UNSIGNED_BYTE&&(K=o.RGB8UI),V===o.UNSIGNED_SHORT&&(K=o.RGB16UI),V===o.UNSIGNED_INT&&(K=o.RGB32UI),V===o.BYTE&&(K=o.RGB8I),V===o.SHORT&&(K=o.RGB16I),V===o.INT&&(K=o.RGB32I)),S===o.RGBA_INTEGER&&(V===o.UNSIGNED_BYTE&&(K=o.RGBA8UI),V===o.UNSIGNED_SHORT&&(K=o.RGBA16UI),V===o.UNSIGNED_INT&&(K=o.RGBA32UI),V===o.BYTE&&(K=o.RGBA8I),V===o.SHORT&&(K=o.RGBA16I),V===o.INT&&(K=o.RGBA32I)),S===o.RGB&&(V===o.UNSIGNED_INT_5_9_9_9_REV&&(K=o.RGB9_E5),V===o.UNSIGNED_INT_10F_11F_11F_REV&&(K=o.R11F_G11F_B10F)),S===o.RGBA){const Re=fe?Bc:Rt.getTransfer(oe);V===o.FLOAT&&(K=o.RGBA32F),V===o.HALF_FLOAT&&(K=o.RGBA16F),V===o.UNSIGNED_BYTE&&(K=Re===Ht?o.SRGB8_ALPHA8:o.RGBA8),V===o.UNSIGNED_SHORT_4_4_4_4&&(K=o.RGBA4),V===o.UNSIGNED_SHORT_5_5_5_1&&(K=o.RGB5_A1)}return(K===o.R16F||K===o.R32F||K===o.RG16F||K===o.RG32F||K===o.RGBA16F||K===o.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function N(D,S){let V;return D?S===null||S===ki||S===Yo?V=o.DEPTH24_STENCIL8:S===Fi?V=o.DEPTH32F_STENCIL8:S===qo&&(V=o.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ki||S===Yo?V=o.DEPTH_COMPONENT24:S===Fi?V=o.DEPTH_COMPONENT32F:S===qo&&(V=o.DEPTH_COMPONENT16),V}function I(D,S){return b(D)===!0||D.isFramebufferTexture&&D.minFilter!==Dn&&D.minFilter!==In?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function O(D){const S=D.target;S.removeEventListener("dispose",O),W(S),S.isVideoTexture&&_.delete(S)}function z(D){const S=D.target;S.removeEventListener("dispose",z),R(S)}function W(D){const S=s.get(D);if(S.__webglInit===void 0)return;const V=D.source,oe=y.get(V);if(oe){const fe=oe[S.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&E(D),Object.keys(oe).length===0&&y.delete(V)}s.remove(D)}function E(D){const S=s.get(D);o.deleteTexture(S.__webglTexture);const V=D.source,oe=y.get(V);delete oe[S.__cacheKey],h.memory.textures--}function R(D){const S=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(S.__webglFramebuffer[oe]))for(let fe=0;fe<S.__webglFramebuffer[oe].length;fe++)o.deleteFramebuffer(S.__webglFramebuffer[oe][fe]);else o.deleteFramebuffer(S.__webglFramebuffer[oe]);S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer[oe])}else{if(Array.isArray(S.__webglFramebuffer))for(let oe=0;oe<S.__webglFramebuffer.length;oe++)o.deleteFramebuffer(S.__webglFramebuffer[oe]);else o.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&o.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let oe=0;oe<S.__webglColorRenderbuffer.length;oe++)S.__webglColorRenderbuffer[oe]&&o.deleteRenderbuffer(S.__webglColorRenderbuffer[oe]);S.__webglDepthRenderbuffer&&o.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=D.textures;for(let oe=0,fe=V.length;oe<fe;oe++){const K=s.get(V[oe]);K.__webglTexture&&(o.deleteTexture(K.__webglTexture),h.memory.textures--),s.remove(V[oe])}s.remove(D)}let H=0;function Z(){H=0}function $(){const D=H;return D>=l.maxTextures&&ct("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),H+=1,D}function ce(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function he(D,S){const V=s.get(D);if(D.isVideoTexture&&Je(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&V.__version!==D.version){const oe=D.image;if(oe===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(V,D,S);return}}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,V.__webglTexture,o.TEXTURE0+S)}function F(D,S){const V=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){ne(V,D,S);return}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,V.__webglTexture,o.TEXTURE0+S)}function k(D,S){const V=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){ne(V,D,S);return}i.bindTexture(o.TEXTURE_3D,V.__webglTexture,o.TEXTURE0+S)}function ie(D,S){const V=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&V.__version!==D.version){de(V,D,S);return}i.bindTexture(o.TEXTURE_CUBE_MAP,V.__webglTexture,o.TEXTURE0+S)}const Ee={[Us]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[jh]:o.MIRRORED_REPEAT},Se={[Dn]:o.NEAREST,[FS]:o.NEAREST_MIPMAP_NEAREST,[dc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[ih]:o.LINEAR_MIPMAP_NEAREST,[Ns]:o.LINEAR_MIPMAP_LINEAR},P={[GS]:o.NEVER,[qS]:o.ALWAYS,[VS]:o.LESS,[Fd]:o.LEQUAL,[kS]:o.EQUAL,[Bd]:o.GEQUAL,[XS]:o.GREATER,[WS]:o.NOTEQUAL};function ae(D,S){if(S.type===Fi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===In||S.magFilter===ih||S.magFilter===dc||S.magFilter===Ns||S.minFilter===In||S.minFilter===ih||S.minFilter===dc||S.minFilter===Ns)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Ee[S.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Ee[S.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Ee[S.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,Se[S.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,Se[S.minFilter]),S.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,P[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Dn||S.minFilter!==dc&&S.minFilter!==Ns||S.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||s.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,l.getMaxAnisotropy())),s.get(S).__currentAnisotropy=S.anisotropy}}}function _e(D,S){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",O));const oe=S.source;let fe=y.get(oe);fe===void 0&&(fe={},y.set(oe,fe));const K=ce(S);if(K!==D.__cacheKey){fe[K]===void 0&&(fe[K]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,V=!0),fe[K].usedTimes++;const Re=fe[D.__cacheKey];Re!==void 0&&(fe[D.__cacheKey].usedTimes--,Re.usedTimes===0&&E(S)),D.__cacheKey=K,D.__webglTexture=fe[K].texture}return V}function we(D,S,V){return Math.floor(Math.floor(D/V)/S)}function Ge(D,S,V,oe){const K=D.updateRanges;if(K.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,S.width,S.height,V,oe,S.data);else{K.sort((ye,be)=>ye.start-be.start);let Re=0;for(let ye=1;ye<K.length;ye++){const be=K[Re],Ne=K[ye],ze=be.start+be.count,Ue=we(Ne.start,S.width,4),ht=we(be.start,S.width,4);Ne.start<=ze+1&&Ue===ht&&we(Ne.start+Ne.count-1,S.width,4)===Ue?be.count=Math.max(be.count,Ne.start+Ne.count-be.start):(++Re,K[Re]=Ne)}K.length=Re+1;const Me=o.getParameter(o.UNPACK_ROW_LENGTH),Pe=o.getParameter(o.UNPACK_SKIP_PIXELS),je=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,S.width);for(let ye=0,be=K.length;ye<be;ye++){const Ne=K[ye],ze=Math.floor(Ne.start/4),Ue=Math.ceil(Ne.count/4),ht=ze%S.width,q=Math.floor(ze/S.width),Oe=Ue,Ae=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,ht,q,Oe,Ae,V,oe,S.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Me),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Pe),o.pixelStorei(o.UNPACK_SKIP_ROWS,je)}}function ne(D,S,V){let oe=o.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=o.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=o.TEXTURE_3D);const fe=_e(D,S),K=S.source;i.bindTexture(oe,D.__webglTexture,o.TEXTURE0+V);const Re=s.get(K);if(K.version!==Re.__version||fe===!0){i.activeTexture(o.TEXTURE0+V);const Me=Rt.getPrimaries(Rt.workingColorSpace),Pe=S.colorSpace===ts?null:Rt.getPrimaries(S.colorSpace),je=S.colorSpace===ts||Me===Pe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ye=C(S.image,!1,l.maxTextureSize);ye=$e(S,ye);const be=c.convert(S.format,S.colorSpace),Ne=c.convert(S.type);let ze=L(S.internalFormat,be,Ne,S.colorSpace,S.isVideoTexture);ae(oe,S);let Ue;const ht=S.mipmaps,q=S.isVideoTexture!==!0,Oe=Re.__version===void 0||fe===!0,Ae=K.dataReady,He=I(S,ye);if(S.isDepthTexture)ze=N(S.format===Ls,S.type),Oe&&(q?i.texStorage2D(o.TEXTURE_2D,1,ze,ye.width,ye.height):i.texImage2D(o.TEXTURE_2D,0,ze,ye.width,ye.height,0,be,Ne,null));else if(S.isDataTexture)if(ht.length>0){q&&Oe&&i.texStorage2D(o.TEXTURE_2D,He,ze,ht[0].width,ht[0].height);for(let Te=0,xe=ht.length;Te<xe;Te++)Ue=ht[Te],q?Ae&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,be,Ne,Ue.data):i.texImage2D(o.TEXTURE_2D,Te,ze,Ue.width,Ue.height,0,be,Ne,Ue.data);S.generateMipmaps=!1}else q?(Oe&&i.texStorage2D(o.TEXTURE_2D,He,ze,ye.width,ye.height),Ae&&Ge(S,ye,be,Ne)):i.texImage2D(o.TEXTURE_2D,0,ze,ye.width,ye.height,0,be,Ne,ye.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){q&&Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,He,ze,ht[0].width,ht[0].height,ye.depth);for(let Te=0,xe=ht.length;Te<xe;Te++)if(Ue=ht[Te],S.format!==Ri)if(be!==null)if(q){if(Ae)if(S.layerUpdates.size>0){const Ce=__(Ue.width,Ue.height,S.format,S.type);for(const rt of S.layerUpdates){const Pt=Ue.data.subarray(rt*Ce/Ue.data.BYTES_PER_ELEMENT,(rt+1)*Ce/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,rt,Ue.width,Ue.height,1,be,Pt)}S.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,ye.depth,be,Ue.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Te,ze,Ue.width,Ue.height,ye.depth,0,Ue.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ae&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,ye.depth,be,Ne,Ue.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Te,ze,Ue.width,Ue.height,ye.depth,0,be,Ne,Ue.data)}else{q&&Oe&&i.texStorage2D(o.TEXTURE_2D,He,ze,ht[0].width,ht[0].height);for(let Te=0,xe=ht.length;Te<xe;Te++)Ue=ht[Te],S.format!==Ri?be!==null?q?Ae&&i.compressedTexSubImage2D(o.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,be,Ue.data):i.compressedTexImage2D(o.TEXTURE_2D,Te,ze,Ue.width,Ue.height,0,Ue.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ae&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,be,Ne,Ue.data):i.texImage2D(o.TEXTURE_2D,Te,ze,Ue.width,Ue.height,0,be,Ne,Ue.data)}else if(S.isDataArrayTexture)if(q){if(Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,He,ze,ye.width,ye.height,ye.depth),Ae)if(S.layerUpdates.size>0){const Te=__(ye.width,ye.height,S.format,S.type);for(const xe of S.layerUpdates){const Ce=ye.data.subarray(xe*Te/ye.data.BYTES_PER_ELEMENT,(xe+1)*Te/ye.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xe,ye.width,ye.height,1,be,Ne,Ce)}S.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,be,Ne,ye.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,ye.width,ye.height,ye.depth,0,be,Ne,ye.data);else if(S.isData3DTexture)q?(Oe&&i.texStorage3D(o.TEXTURE_3D,He,ze,ye.width,ye.height,ye.depth),Ae&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,be,Ne,ye.data)):i.texImage3D(o.TEXTURE_3D,0,ze,ye.width,ye.height,ye.depth,0,be,Ne,ye.data);else if(S.isFramebufferTexture){if(Oe)if(q)i.texStorage2D(o.TEXTURE_2D,He,ze,ye.width,ye.height);else{let Te=ye.width,xe=ye.height;for(let Ce=0;Ce<He;Ce++)i.texImage2D(o.TEXTURE_2D,Ce,ze,Te,xe,0,be,Ne,null),Te>>=1,xe>>=1}}else if(ht.length>0){if(q&&Oe){const Te=Ie(ht[0]);i.texStorage2D(o.TEXTURE_2D,He,ze,Te.width,Te.height)}for(let Te=0,xe=ht.length;Te<xe;Te++)Ue=ht[Te],q?Ae&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,be,Ne,Ue):i.texImage2D(o.TEXTURE_2D,Te,ze,be,Ne,Ue);S.generateMipmaps=!1}else if(q){if(Oe){const Te=Ie(ye);i.texStorage2D(o.TEXTURE_2D,He,ze,Te.width,Te.height)}Ae&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,be,Ne,ye)}else i.texImage2D(o.TEXTURE_2D,0,ze,be,Ne,ye);b(S)&&x(oe),Re.__version=K.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function de(D,S,V){if(S.image.length!==6)return;const oe=_e(D,S),fe=S.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+V);const K=s.get(fe);if(fe.version!==K.__version||oe===!0){i.activeTexture(o.TEXTURE0+V);const Re=Rt.getPrimaries(Rt.workingColorSpace),Me=S.colorSpace===ts?null:Rt.getPrimaries(S.colorSpace),Pe=S.colorSpace===ts||Re===Me?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const je=S.isCompressedTexture||S.image[0].isCompressedTexture,ye=S.image[0]&&S.image[0].isDataTexture,be=[];for(let xe=0;xe<6;xe++)!je&&!ye?be[xe]=C(S.image[xe],!0,l.maxCubemapSize):be[xe]=ye?S.image[xe].image:S.image[xe],be[xe]=$e(S,be[xe]);const Ne=be[0],ze=c.convert(S.format,S.colorSpace),Ue=c.convert(S.type),ht=L(S.internalFormat,ze,Ue,S.colorSpace),q=S.isVideoTexture!==!0,Oe=K.__version===void 0||oe===!0,Ae=fe.dataReady;let He=I(S,Ne);ae(o.TEXTURE_CUBE_MAP,S);let Te;if(je){q&&Oe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,He,ht,Ne.width,Ne.height);for(let xe=0;xe<6;xe++){Te=be[xe].mipmaps;for(let Ce=0;Ce<Te.length;Ce++){const rt=Te[Ce];S.format!==Ri?ze!==null?q?Ae&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,rt.width,rt.height,ze,rt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,ht,rt.width,rt.height,0,rt.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,rt.width,rt.height,ze,Ue,rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,ht,rt.width,rt.height,0,ze,Ue,rt.data)}}}else{if(Te=S.mipmaps,q&&Oe){Te.length>0&&He++;const xe=Ie(be[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,He,ht,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(ye){q?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,be[xe].width,be[xe].height,ze,Ue,be[xe].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ht,be[xe].width,be[xe].height,0,ze,Ue,be[xe].data);for(let Ce=0;Ce<Te.length;Ce++){const Pt=Te[Ce].image[xe].image;q?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,Pt.width,Pt.height,ze,Ue,Pt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,ht,Pt.width,Pt.height,0,ze,Ue,Pt.data)}}else{q?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ze,Ue,be[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ht,ze,Ue,be[xe]);for(let Ce=0;Ce<Te.length;Ce++){const rt=Te[Ce];q?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,ze,Ue,rt.image[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,ht,ze,Ue,rt.image[xe])}}}b(S)&&x(o.TEXTURE_CUBE_MAP),K.__version=fe.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function De(D,S,V,oe,fe,K){const Re=c.convert(V.format,V.colorSpace),Me=c.convert(V.type),Pe=L(V.internalFormat,Re,Me,V.colorSpace),je=s.get(S),ye=s.get(V);if(ye.__renderTarget=S,!je.__hasExternalTextures){const be=Math.max(1,S.width>>K),Ne=Math.max(1,S.height>>K);fe===o.TEXTURE_3D||fe===o.TEXTURE_2D_ARRAY?i.texImage3D(fe,K,Pe,be,Ne,S.depth,0,Re,Me,null):i.texImage2D(fe,K,Pe,be,Ne,0,Re,Me,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),We(S)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,oe,fe,ye.__webglTexture,0,G(S)):(fe===o.TEXTURE_2D||fe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,oe,fe,ye.__webglTexture,K),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xe(D,S,V){if(o.bindRenderbuffer(o.RENDERBUFFER,D),S.depthBuffer){const oe=S.depthTexture,fe=oe&&oe.isDepthTexture?oe.type:null,K=N(S.stencilBuffer,fe),Re=S.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;We(S)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(S),K,S.width,S.height):V?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(S),K,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,K,S.width,S.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Re,o.RENDERBUFFER,D)}else{const oe=S.textures;for(let fe=0;fe<oe.length;fe++){const K=oe[fe],Re=c.convert(K.format,K.colorSpace),Me=c.convert(K.type),Pe=L(K.internalFormat,Re,Me,K.colorSpace);We(S)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(S),Pe,S.width,S.height):V?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(S),Pe,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,Pe,S.width,S.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ve(D,S,V){const oe=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=s.get(S.depthTexture);if(fe.__renderTarget=S,(!fe.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),oe){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,S.depthTexture.addEventListener("dispose",O)),fe.__webglTexture===void 0){fe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),ae(o.TEXTURE_CUBE_MAP,S.depthTexture);const je=c.convert(S.depthTexture.format),ye=c.convert(S.depthTexture.type);let be;S.depthTexture.format===Sa?be=o.DEPTH_COMPONENT24:S.depthTexture.format===Ls&&(be=o.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,be,S.width,S.height,0,je,ye,null)}}else he(S.depthTexture,0);const K=fe.__webglTexture,Re=G(S),Me=oe?o.TEXTURE_CUBE_MAP_POSITIVE_X+V:o.TEXTURE_2D,Pe=S.depthTexture.format===Ls?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(S.depthTexture.format===Sa)We(S)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Pe,Me,K,0,Re):o.framebufferTexture2D(o.FRAMEBUFFER,Pe,Me,K,0);else if(S.depthTexture.format===Ls)We(S)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Pe,Me,K,0,Re):o.framebufferTexture2D(o.FRAMEBUFFER,Pe,Me,K,0);else throw new Error("Unknown depthTexture format")}function ft(D){const S=s.get(D),V=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const oe=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),oe){const fe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,oe.removeEventListener("dispose",fe)};oe.addEventListener("dispose",fe),S.__depthDisposeCallback=fe}S.__boundDepthTexture=oe}if(D.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let oe=0;oe<6;oe++)Ve(S.__webglFramebuffer[oe],D,oe);else{const oe=D.texture.mipmaps;oe&&oe.length>0?Ve(S.__webglFramebuffer[0],D,0):Ve(S.__webglFramebuffer,D,0)}else if(V){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(i.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]===void 0)S.__webglDepthbuffer[oe]=o.createRenderbuffer(),Xe(S.__webglDepthbuffer[oe],D,!1);else{const fe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[oe];o.bindRenderbuffer(o.RENDERBUFFER,K),o.framebufferRenderbuffer(o.FRAMEBUFFER,fe,o.RENDERBUFFER,K)}}else{const oe=D.texture.mipmaps;if(oe&&oe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=o.createRenderbuffer(),Xe(S.__webglDepthbuffer,D,!1);else{const fe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,K),o.framebufferRenderbuffer(o.FRAMEBUFFER,fe,o.RENDERBUFFER,K)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(D,S,V){const oe=s.get(D);S!==void 0&&De(oe.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),V!==void 0&&ft(D)}function _t(D){const S=D.texture,V=s.get(D),oe=s.get(S);D.addEventListener("dispose",z);const fe=D.textures,K=D.isWebGLCubeRenderTarget===!0,Re=fe.length>1;if(Re||(oe.__webglTexture===void 0&&(oe.__webglTexture=o.createTexture()),oe.__version=S.version,h.memory.textures++),K){V.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[Me]=[];for(let Pe=0;Pe<S.mipmaps.length;Pe++)V.__webglFramebuffer[Me][Pe]=o.createFramebuffer()}else V.__webglFramebuffer[Me]=o.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)V.__webglFramebuffer[Me]=o.createFramebuffer()}else V.__webglFramebuffer=o.createFramebuffer();if(Re)for(let Me=0,Pe=fe.length;Me<Pe;Me++){const je=s.get(fe[Me]);je.__webglTexture===void 0&&(je.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&We(D)===!1){V.__webglMultisampledFramebuffer=o.createFramebuffer(),V.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Me=0;Me<fe.length;Me++){const Pe=fe[Me];V.__webglColorRenderbuffer[Me]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,V.__webglColorRenderbuffer[Me]);const je=c.convert(Pe.format,Pe.colorSpace),ye=c.convert(Pe.type),be=L(Pe.internalFormat,je,ye,Pe.colorSpace,D.isXRRenderTarget===!0),Ne=G(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ne,be,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Me,o.RENDERBUFFER,V.__webglColorRenderbuffer[Me])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=o.createRenderbuffer(),Xe(V.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(K){i.bindTexture(o.TEXTURE_CUBE_MAP,oe.__webglTexture),ae(o.TEXTURE_CUBE_MAP,S);for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)De(V.__webglFramebuffer[Me][Pe],D,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe);else De(V.__webglFramebuffer[Me],D,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);b(S)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Re){for(let Me=0,Pe=fe.length;Me<Pe;Me++){const je=fe[Me],ye=s.get(je);let be=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(be,ye.__webglTexture),ae(be,je),De(V.__webglFramebuffer,D,je,o.COLOR_ATTACHMENT0+Me,be,0),b(je)&&x(be)}i.unbindTexture()}else{let Me=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Me=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Me,oe.__webglTexture),ae(Me,S),S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)De(V.__webglFramebuffer[Pe],D,S,o.COLOR_ATTACHMENT0,Me,Pe);else De(V.__webglFramebuffer,D,S,o.COLOR_ATTACHMENT0,Me,0);b(S)&&x(Me),i.unbindTexture()}D.depthBuffer&&ft(D)}function mt(D){const S=D.textures;for(let V=0,oe=S.length;V<oe;V++){const fe=S[V];if(b(fe)){const K=U(D),Re=s.get(fe).__webglTexture;i.bindTexture(K,Re),x(K),i.unbindTexture()}}}const bt=[],st=[];function jt(D){if(D.samples>0){if(We(D)===!1){const S=D.textures,V=D.width,oe=D.height;let fe=o.COLOR_BUFFER_BIT;const K=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=s.get(D),Me=S.length>1;if(Me)for(let je=0;je<S.length;je++)i.bindFramebuffer(o.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Re.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Pe=D.texture.mipmaps;Pe&&Pe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let je=0;je<S.length;je++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(fe|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(fe|=o.STENCIL_BUFFER_BIT)),Me){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Re.__webglColorRenderbuffer[je]);const ye=s.get(S[je]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ye,0)}o.blitFramebuffer(0,0,V,oe,0,0,V,oe,fe,o.NEAREST),m===!0&&(bt.length=0,st.length=0,bt.push(o.COLOR_ATTACHMENT0+je),D.depthBuffer&&D.resolveDepthBuffer===!1&&(bt.push(K),st.push(K),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,st)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,bt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Me)for(let je=0;je<S.length;je++){i.bindFramebuffer(o.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,Re.__webglColorRenderbuffer[je]);const ye=s.get(S[je]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Re.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,ye,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const S=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[S])}}}function G(D){return Math.min(l.maxSamples,D.samples)}function We(D){const S=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Je(D){const S=h.render.frame;_.get(D)!==S&&(_.set(D,S),D.update())}function $e(D,S){const V=D.colorSpace,oe=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==Fr&&V!==ts&&(Rt.getTransfer(V)===Ht?(oe!==Ri||fe!==ai)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",V)),S}function Ie(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=Z,this.setTexture2D=he,this.setTexture2DArray=F,this.setTexture3D=k,this.setTextureCube=ie,this.rebindTextures=Yt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=De,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function MA(o,t){function i(s,l=ts){let c;const h=Rt.getTransfer(l);if(s===ai)return o.UNSIGNED_BYTE;if(s===Ld)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Od)return o.UNSIGNED_SHORT_5_5_5_1;if(s===av)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===sv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===nv)return o.BYTE;if(s===iv)return o.SHORT;if(s===qo)return o.UNSIGNED_SHORT;if(s===Nd)return o.INT;if(s===ki)return o.UNSIGNED_INT;if(s===Fi)return o.FLOAT;if(s===ya)return o.HALF_FLOAT;if(s===rv)return o.ALPHA;if(s===ov)return o.RGB;if(s===Ri)return o.RGBA;if(s===Sa)return o.DEPTH_COMPONENT;if(s===Ls)return o.DEPTH_STENCIL;if(s===lv)return o.RED;if(s===Id)return o.RED_INTEGER;if(s===zr)return o.RG;if(s===Pd)return o.RG_INTEGER;if(s===zd)return o.RGBA_INTEGER;if(s===Oc||s===Ic||s===Pc||s===zc)if(h===Ht)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h||s===ed||s===td||s===nd||s===id||s===ad||s===sd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===$h||s===ed)return h===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===td)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===nd)return c.COMPRESSED_R11_EAC;if(s===id)return c.COMPRESSED_SIGNED_R11_EAC;if(s===ad)return c.COMPRESSED_RG11_EAC;if(s===sd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===rd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===od)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ld)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ud)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===md)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_d)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yd||s===Sd||s===Md)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===yd)return h===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Md)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bd||s===Ed||s===Td||s===Ad)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===bd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ed)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Td)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ad)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const bA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new yv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Wi({vertexShader:bA,fragmentShader:EA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new qt(new tl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AA extends Hr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,y=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",b=new TA,x={},U=i.getContextAttributes();let L=null,N=null;const I=[],O=[],z=new Mt;let W=null;const E=new Yn;E.viewport=new an;const R=new Yn;R.viewport=new an;const H=[E,R],Z=new PM;let $=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=I[ne];return de===void 0&&(de=new Ah,I[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=I[ne];return de===void 0&&(de=new Ah,I[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=I[ne];return de===void 0&&(de=new Ah,I[ne]=de),de.getHandSpace()};function he(ne){const de=O.indexOf(ne.inputSource);if(de===-1)return;const De=I[de];De!==void 0&&(De.update(ne.inputSource,ne.frame,p||h),De.dispatchEvent({type:ne.type,data:ne.inputSource}))}function F(){l.removeEventListener("select",he),l.removeEventListener("selectstart",he),l.removeEventListener("selectend",he),l.removeEventListener("squeeze",he),l.removeEventListener("squeezestart",he),l.removeEventListener("squeezeend",he),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",k);for(let ne=0;ne<I.length;ne++){const de=O[ne];de!==null&&(O[ne]=null,I[ne].disconnect(de))}$=null,ce=null,b.reset();for(const ne in x)delete x[ne];t.setRenderTarget(L),M=null,y=null,g=null,l=null,N=null,Ge.stop(),s.isPresenting=!1,t.setPixelRatio(W),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,s.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,s.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",he),l.addEventListener("selectstart",he),l.addEventListener("selectend",he),l.addEventListener("squeeze",he),l.addEventListener("squeezestart",he),l.addEventListener("squeezeend",he),l.addEventListener("end",F),l.addEventListener("inputsourceschange",k),U.xrCompatible!==!0&&await i.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Xe=null,Ve=null;U.depth&&(Ve=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=U.stencil?Ls:Sa,Xe=U.stencil?Yo:ki);const ft={colorFormat:i.RGBA8,depthFormat:Ve,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(ft),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),N=new Gi(y.textureWidth,y.textureHeight,{format:Ri,type:ai,depthTexture:new Ko(y.textureWidth,y.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const De={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Gi(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ge.setContext(l),Ge.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function k(ne){for(let de=0;de<ne.removed.length;de++){const De=ne.removed[de],Xe=O.indexOf(De);Xe>=0&&(O[Xe]=null,I[Xe].disconnect(De))}for(let de=0;de<ne.added.length;de++){const De=ne.added[de];let Xe=O.indexOf(De);if(Xe===-1){for(let ft=0;ft<I.length;ft++)if(ft>=O.length){O.push(De),Xe=ft;break}else if(O[ft]===null){O[ft]=De,Xe=ft;break}if(Xe===-1)break}const Ve=I[Xe];Ve&&Ve.connect(De)}}const ie=new J,Ee=new J;function Se(ne,de,De){ie.setFromMatrixPosition(de.matrixWorld),Ee.setFromMatrixPosition(De.matrixWorld);const Xe=ie.distanceTo(Ee),Ve=de.projectionMatrix.elements,ft=De.projectionMatrix.elements,Yt=Ve[14]/(Ve[10]-1),_t=Ve[14]/(Ve[10]+1),mt=(Ve[9]+1)/Ve[5],bt=(Ve[9]-1)/Ve[5],st=(Ve[8]-1)/Ve[0],jt=(ft[8]+1)/ft[0],G=Yt*st,We=Yt*jt,Je=Xe/(-st+jt),$e=Je*-st;if(de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX($e),ne.translateZ(Je),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ve[10]===-1)ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ie=Yt+Je,D=_t+Je,S=G-$e,V=We+(Xe-$e),oe=mt*_t/D*Ie,fe=bt*_t/D*Ie;ne.projectionMatrix.makePerspective(S,V,oe,fe,Ie,D),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function P(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let de=ne.near,De=ne.far;b.texture!==null&&(b.depthNear>0&&(de=b.depthNear),b.depthFar>0&&(De=b.depthFar)),Z.near=R.near=E.near=de,Z.far=R.far=E.far=De,($!==Z.near||ce!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),$=Z.near,ce=Z.far),Z.layers.mask=ne.layers.mask|6,E.layers.mask=Z.layers.mask&3,R.layers.mask=Z.layers.mask&5;const Xe=ne.parent,Ve=Z.cameras;P(Z,Xe);for(let ft=0;ft<Ve.length;ft++)P(Ve[ft],Xe);Ve.length===2?Se(Z,E,R):Z.projectionMatrix.copy(E.projectionMatrix),ae(ne,Z,Xe)};function ae(ne,de,De){De===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(De.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Gc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(ne){m=ne,y!==null&&(y.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(Z)},this.getCameraTexture=function(ne){return x[ne]};let _e=null;function we(ne,de){if(_=de.getViewerPose(p||h),T=de,_!==null){const De=_.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let Xe=!1;De.length!==Z.cameras.length&&(Z.cameras.length=0,Xe=!0);for(let _t=0;_t<De.length;_t++){const mt=De[_t];let bt=null;if(M!==null)bt=M.getViewport(mt);else{const jt=g.getViewSubImage(y,mt);bt=jt.viewport,_t===0&&(t.setRenderTargetTextures(N,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(N))}let st=H[_t];st===void 0&&(st=new Yn,st.layers.enable(_t),st.viewport=new an,H[_t]=st),st.matrix.fromArray(mt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(mt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(bt.x,bt.y,bt.width,bt.height),_t===0&&(Z.matrix.copy(st.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Xe===!0&&Z.cameras.push(st)}const Ve=l.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const _t=g.getDepthInformation(De[0]);_t&&_t.isValid&&_t.texture&&b.init(_t,l.renderState)}if(Ve&&Ve.includes("camera-access")&&C){t.state.unbindTexture(),g=s.getBinding();for(let _t=0;_t<De.length;_t++){const mt=De[_t].camera;if(mt){let bt=x[mt];bt||(bt=new yv,x[mt]=bt);const st=g.getCameraImage(mt);bt.sourceTexture=st}}}}for(let De=0;De<I.length;De++){const Xe=O[De],Ve=I[De];Xe!==null&&Ve!==void 0&&Ve.update(Xe,de,p||h)}_e&&_e(ne,de),de.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:de}),T=null}const Ge=new bv;Ge.setAnimationLoop(we),this.setAnimationLoop=function(ne){_e=ne},this.dispose=function(){}}}const ws=new Xi,wA=new en;function RA(o,t){function i(b,x){b.matrixAutoUpdate===!0&&b.updateMatrix(),x.value.copy(b.matrix)}function s(b,x){x.color.getRGB(b.fogColor.value,gv(o)),x.isFog?(b.fogNear.value=x.near,b.fogFar.value=x.far):x.isFogExp2&&(b.fogDensity.value=x.density)}function l(b,x,U,L,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(b,x):x.isMeshToonMaterial?(c(b,x),g(b,x)):x.isMeshPhongMaterial?(c(b,x),_(b,x)):x.isMeshStandardMaterial?(c(b,x),y(b,x),x.isMeshPhysicalMaterial&&M(b,x,N)):x.isMeshMatcapMaterial?(c(b,x),T(b,x)):x.isMeshDepthMaterial?c(b,x):x.isMeshDistanceMaterial?(c(b,x),C(b,x)):x.isMeshNormalMaterial?c(b,x):x.isLineBasicMaterial?(h(b,x),x.isLineDashedMaterial&&d(b,x)):x.isPointsMaterial?m(b,x,U,L):x.isSpriteMaterial?p(b,x):x.isShadowMaterial?(b.color.value.copy(x.color),b.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(b,x){b.opacity.value=x.opacity,x.color&&b.diffuse.value.copy(x.color),x.emissive&&b.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(b.map.value=x.map,i(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,i(x.alphaMap,b.alphaMapTransform)),x.bumpMap&&(b.bumpMap.value=x.bumpMap,i(x.bumpMap,b.bumpMapTransform),b.bumpScale.value=x.bumpScale,x.side===jn&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,i(x.normalMap,b.normalMapTransform),b.normalScale.value.copy(x.normalScale),x.side===jn&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,i(x.displacementMap,b.displacementMapTransform),b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,b.emissiveMapTransform)),x.specularMap&&(b.specularMap.value=x.specularMap,i(x.specularMap,b.specularMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);const U=t.get(x),L=U.envMap,N=U.envMapRotation;L&&(b.envMap.value=L,ws.copy(N),ws.x*=-1,ws.y*=-1,ws.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),b.envMapRotation.value.setFromMatrix4(wA.makeRotationFromEuler(ws)),b.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=x.reflectivity,b.ior.value=x.ior,b.refractionRatio.value=x.refractionRatio),x.lightMap&&(b.lightMap.value=x.lightMap,b.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,b.lightMapTransform)),x.aoMap&&(b.aoMap.value=x.aoMap,b.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,b.aoMapTransform))}function h(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,x.map&&(b.map.value=x.map,i(x.map,b.mapTransform))}function d(b,x){b.dashSize.value=x.dashSize,b.totalSize.value=x.dashSize+x.gapSize,b.scale.value=x.scale}function m(b,x,U,L){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.size.value=x.size*U,b.scale.value=L*.5,x.map&&(b.map.value=x.map,i(x.map,b.uvTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,i(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function p(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.rotation.value=x.rotation,x.map&&(b.map.value=x.map,i(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,i(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function _(b,x){b.specular.value.copy(x.specular),b.shininess.value=Math.max(x.shininess,1e-4)}function g(b,x){x.gradientMap&&(b.gradientMap.value=x.gradientMap)}function y(b,x){b.metalness.value=x.metalness,x.metalnessMap&&(b.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,b.metalnessMapTransform)),b.roughness.value=x.roughness,x.roughnessMap&&(b.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,b.roughnessMapTransform)),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)}function M(b,x,U){b.ior.value=x.ior,x.sheen>0&&(b.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),b.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(b.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,b.sheenColorMapTransform)),x.sheenRoughnessMap&&(b.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,b.sheenRoughnessMapTransform))),x.clearcoat>0&&(b.clearcoat.value=x.clearcoat,b.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(b.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,b.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(b.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&b.clearcoatNormalScale.value.negate())),x.dispersion>0&&(b.dispersion.value=x.dispersion),x.iridescence>0&&(b.iridescence.value=x.iridescence,b.iridescenceIOR.value=x.iridescenceIOR,b.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(b.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,b.iridescenceMapTransform)),x.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),x.transmission>0&&(b.transmission.value=x.transmission,b.transmissionSamplerMap.value=U.texture,b.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(b.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,b.transmissionMapTransform)),b.thickness.value=x.thickness,x.thicknessMap&&(b.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=x.attenuationDistance,b.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(b.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(b.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=x.specularIntensity,b.specularColor.value.copy(x.specularColor),x.specularColorMap&&(b.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,b.specularColorMapTransform)),x.specularIntensityMap&&(b.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,b.specularIntensityMapTransform))}function T(b,x){x.matcap&&(b.matcap.value=x.matcap)}function C(b,x){const U=t.get(x).light;b.referencePosition.value.setFromMatrixPosition(U.matrixWorld),b.nearDistance.value=U.shadow.camera.near,b.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function CA(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const N=L.program;s.uniformBlockBinding(U,N)}function p(U,L){let N=l[U.id];N===void 0&&(T(U),N=_(U),l[U.id]=N,U.addEventListener("dispose",b));const I=L.program;s.updateUBOMapping(U,I);const O=t.render.frame;c[U.id]!==O&&(y(U),c[U.id]=O)}function _(U){const L=g();U.__bindingPointIndex=L;const N=o.createBuffer(),I=U.__size,O=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,I,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,N),N}function g(){for(let U=0;U<d;U++)if(h.indexOf(U)===-1)return h.push(U),U;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const L=l[U.id],N=U.uniforms,I=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let O=0,z=N.length;O<z;O++){const W=Array.isArray(N[O])?N[O]:[N[O]];for(let E=0,R=W.length;E<R;E++){const H=W[E];if(M(H,O,E,I)===!0){const Z=H.__offset,$=Array.isArray(H.value)?H.value:[H.value];let ce=0;for(let he=0;he<$.length;he++){const F=$[he],k=C(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,Z+ce,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,ce),ce+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Z,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(U,L,N,I){const O=U.value,z=L+"_"+N;if(I[z]===void 0)return typeof O=="number"||typeof O=="boolean"?I[z]=O:I[z]=O.clone(),!0;{const W=I[z];if(typeof O=="number"||typeof O=="boolean"){if(W!==O)return I[z]=O,!0}else if(W.equals(O)===!1)return W.copy(O),!0}return!1}function T(U){const L=U.uniforms;let N=0;const I=16;for(let z=0,W=L.length;z<W;z++){const E=Array.isArray(L[z])?L[z]:[L[z]];for(let R=0,H=E.length;R<H;R++){const Z=E[R],$=Array.isArray(Z.value)?Z.value:[Z.value];for(let ce=0,he=$.length;ce<he;ce++){const F=$[ce],k=C(F),ie=N%I,Ee=ie%k.boundary,Se=ie+Ee;N+=Ee,Se!==0&&I-Se<k.storage&&(N+=I-Se),Z.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=N,N+=k.storage}}}const O=N%I;return O>0&&(N+=I-O),U.__size=N,U.__cache={},this}function C(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",U),L}function b(U){const L=U.target;L.removeEventListener("dispose",b);const N=h.indexOf(L.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const U in l)o.deleteBuffer(l[U]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const DA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function UA(){return Ii===null&&(Ii=new yM(DA,16,16,zr,ya),Ii.name="DFG_LUT",Ii.minFilter=In,Ii.magFilter=In,Ii.wrapS=_a,Ii.wrapT=_a,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class NA{constructor(t={}){const{canvas:i=YS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1,outputBufferType:M=ai}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const C=M,b=new Set([zd,Pd,Id]),x=new Set([ai,ki,qo,Yo,Ld,Od]),U=new Uint32Array(4),L=new Int32Array(4);let N=null,I=null;const O=[],z=[];let W=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let R=!1;this._outputColorSpace=_i;let H=0,Z=0,$=null,ce=-1,he=null;const F=new an,k=new an;let ie=null;const Ee=new Ct(0);let Se=0,P=i.width,ae=i.height,_e=1,we=null,Ge=null;const ne=new an(0,0,P,ae),de=new an(0,0,P,ae);let De=!1;const Xe=new Wd;let Ve=!1,ft=!1;const Yt=new en,_t=new J,mt=new an,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function jt(){return $===null?_e:1}let G=s;function We(w,Y){return i.getContext(w,Y)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ud}`),i.addEventListener("webglcontextlost",rt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",At,!1),G===null){const Y="webgl2";if(G=We(Y,w),G===null)throw We(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw wt("WebGLRenderer: "+w.message),w}let Je,$e,Ie,D,S,V,oe,fe,K,Re,Me,Pe,je,ye,be,Ne,ze,Ue,ht,q,Oe,Ae,He,Te;function xe(){Je=new U1(G),Je.init(),Ae=new MA(G,Je),$e=new M1(G,Je,t,Ae),Ie=new yA(G,Je),$e.reversedDepthBuffer&&y&&Ie.buffers.depth.setReversed(!0),D=new O1(G),S=new sA,V=new SA(G,Je,Ie,S,$e,Ae,D),oe=new E1(E),fe=new D1(E),K=new FM(G),He=new y1(G,K),Re=new N1(G,K,D,He),Me=new P1(G,Re,K,D),ht=new I1(G,$e,V),Ne=new b1(S),Pe=new aA(E,oe,fe,Je,$e,He,Ne),je=new RA(E,S),ye=new oA,be=new dA(Je),Ue=new x1(E,oe,fe,Ie,Me,T,m),ze=new vA(E,Me,$e),Te=new CA(G,D,$e,Ie),q=new S1(G,Je,D),Oe=new L1(G,Je,D),D.programs=Pe.programs,E.capabilities=$e,E.extensions=Je,E.properties=S,E.renderLists=ye,E.shadowMap=ze,E.state=Ie,E.info=D}xe(),C!==ai&&(W=new F1(C,i.width,i.height,l,c));const Ce=new AA(E,G);this.xr=Ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=Je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(w){w!==void 0&&(_e=w,this.setSize(P,ae,!1))},this.getSize=function(w){return w.set(P,ae)},this.setSize=function(w,Y,le=!0){if(Ce.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,ae=Y,i.width=Math.floor(w*_e),i.height=Math.floor(Y*_e),le===!0&&(i.style.width=w+"px",i.style.height=Y+"px"),W!==null&&W.setSize(i.width,i.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(P*_e,ae*_e).floor()},this.setDrawingBufferSize=function(w,Y,le){P=w,ae=Y,_e=le,i.width=Math.floor(w*le),i.height=Math.floor(Y*le),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(C===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(ne)},this.setViewport=function(w,Y,le,se){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,Y,le,se),Ie.viewport(F.copy(ne).multiplyScalar(_e).round())},this.getScissor=function(w){return w.copy(de)},this.setScissor=function(w,Y,le,se){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,Y,le,se),Ie.scissor(k.copy(de).multiplyScalar(_e).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(w){Ie.setScissorTest(De=w)},this.setOpaqueSort=function(w){we=w},this.setTransparentSort=function(w){Ge=w},this.getClearColor=function(w){return w.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,le=!0){let se=0;if(w){let Q=!1;if($!==null){const Le=$.texture.format;Q=b.has(Le)}if(Q){const Le=$.texture.type,ke=x.has(Le),Fe=Ue.getClearColor(),qe=Ue.getClearAlpha(),Ze=Fe.r,nt=Fe.g,Ke=Fe.b;ke?(U[0]=Ze,U[1]=nt,U[2]=Ke,U[3]=qe,G.clearBufferuiv(G.COLOR,0,U)):(L[0]=Ze,L[1]=nt,L[2]=Ke,L[3]=qe,G.clearBufferiv(G.COLOR,0,L))}else se|=G.COLOR_BUFFER_BIT}Y&&(se|=G.DEPTH_BUFFER_BIT),le&&(se|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",rt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Ue.dispose(),ye.dispose(),be.dispose(),S.dispose(),oe.dispose(),fe.dispose(),Me.dispose(),He.dispose(),Te.dispose(),Pe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",zs),Ce.removeEventListener("sessionend",Xr),Ci.stop()};function rt(w){w.preventDefault(),Zg("WebGLRenderer: Context Lost."),R=!0}function Pt(){Zg("WebGLRenderer: Context Restored."),R=!1;const w=D.autoReset,Y=ze.enabled,le=ze.autoUpdate,se=ze.needsUpdate,Q=ze.type;xe(),D.autoReset=w,ze.enabled=Y,ze.autoUpdate=le,ze.needsUpdate=se,ze.type=Q}function At(w){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Un(w){const Y=w.target;Y.removeEventListener("dispose",Un),vi(Y)}function vi(w){nl(w),S.remove(w)}function nl(w){const Y=S.get(w).programs;Y!==void 0&&(Y.forEach(function(le){Pe.releaseProgram(le)}),w.isShaderMaterial&&Pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,le,se,Q,Le){Y===null&&(Y=bt);const ke=Q.isMesh&&Q.matrixWorld.determinant()<0,Fe=as(w,Y,le,se,Q);Ie.setMaterial(se,ke);let qe=le.index,Ze=1;if(se.wireframe===!0){if(qe=Re.getWireframeAttribute(le),qe===void 0)return;Ze=2}const nt=le.drawRange,Ke=le.attributes.position;let it=nt.start*Ze,Nt=(nt.start+nt.count)*Ze;Le!==null&&(it=Math.max(it,Le.start*Ze),Nt=Math.min(Nt,(Le.start+Le.count)*Ze)),qe!==null?(it=Math.max(it,0),Nt=Math.min(Nt,qe.count)):Ke!=null&&(it=Math.max(it,0),Nt=Math.min(Nt,Ke.count));const Qt=Nt-it;if(Qt<0||Qt===1/0)return;He.setup(Q,se,Fe,le,qe);let Wt,It=q;if(qe!==null&&(Wt=K.get(qe),It=Oe,It.setIndex(Wt)),Q.isMesh)se.wireframe===!0?(Ie.setLineWidth(se.wireframeLinewidth*jt()),It.setMode(G.LINES)):It.setMode(G.TRIANGLES);else if(Q.isLine){let et=se.linewidth;et===void 0&&(et=1),Ie.setLineWidth(et*jt()),Q.isLineSegments?It.setMode(G.LINES):Q.isLineLoop?It.setMode(G.LINE_LOOP):It.setMode(G.LINE_STRIP)}else Q.isPoints?It.setMode(G.POINTS):Q.isSprite&&It.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Zo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))It.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const et=Q._multiDrawStarts,Lt=Q._multiDrawCounts,ot=Q._multiDrawCount,Sn=qe?K.get(qe).bytesPerElement:1,qi=S.get(se).currentProgram.getUniforms();for(let Mn=0;Mn<ot;Mn++)qi.setValue(G,"_gl_DrawID",Mn),It.render(et[Mn]/Sn,Lt[Mn])}else if(Q.isInstancedMesh)It.renderInstances(it,Qt,Q.count);else if(le.isInstancedBufferGeometry){const et=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Lt=Math.min(le.instanceCount,et);It.renderInstances(it,Qt,Lt)}else It.render(it,Qt)};function Vr(w,Y,le){w.transparent===!0&&w.side===ma&&w.forceSinglePass===!1?(w.side=jn,w.needsUpdate=!0,Bs(w,Y,le),w.side=is,w.needsUpdate=!0,Bs(w,Y,le),w.side=ma):Bs(w,Y,le)}this.compile=function(w,Y,le=null){le===null&&(le=w),I=be.get(le),I.init(Y),z.push(I),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),w!==le&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),I.setupLights();const se=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Le=Q.material;if(Le)if(Array.isArray(Le))for(let ke=0;ke<Le.length;ke++){const Fe=Le[ke];Vr(Fe,le,Q),se.add(Fe)}else Vr(Le,le,Q),se.add(Le)}),I=z.pop(),se},this.compileAsync=function(w,Y,le=null){const se=this.compile(w,Y,le);return new Promise(Q=>{function Le(){if(se.forEach(function(ke){S.get(ke).currentProgram.isReady()&&se.delete(ke)}),se.size===0){Q(w);return}setTimeout(Le,10)}Je.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Ps=null;function kr(w){Ps&&Ps(w)}function zs(){Ci.stop()}function Xr(){Ci.start()}const Ci=new bv;Ci.setAnimationLoop(kr),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(w){Ps=w,Ce.setAnimationLoop(w),w===null?Ci.stop():Ci.start()},Ce.addEventListener("sessionstart",zs),Ce.addEventListener("sessionend",Xr),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const le=Ce.enabled===!0&&Ce.isPresenting===!0,se=W!==null&&($===null||le)&&W.begin(E,$);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(Y),Y=Ce.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,Y,$),I=be.get(w,z.length),I.init(Y),z.push(I),Yt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Xe.setFromProjectionMatrix(Yt,Bi,Y.reversedDepth),ft=this.localClippingEnabled,Ve=Ne.init(this.clippingPlanes,ft),N=ye.get(w,O.length),N.init(),O.push(N),Ce.enabled===!0&&Ce.isPresenting===!0){const ke=E.xr.getDepthSensingMesh();ke!==null&&ri(ke,Y,-1/0,E.sortObjects)}ri(w,Y,0,E.sortObjects),N.finish(),E.sortObjects===!0&&N.sort(we,Ge),st=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,st&&Ue.addToRenderList(N,w),this.info.render.frame++,Ve===!0&&Ne.beginShadows();const Q=I.state.shadowsArray;if(ze.render(Q,w,Y),Ve===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&W.hasRenderPass())===!1){const ke=N.opaque,Fe=N.transmissive;if(I.setupLights(),Y.isArrayCamera){const qe=Y.cameras;if(Fe.length>0)for(let Ze=0,nt=qe.length;Ze<nt;Ze++){const Ke=qe[Ze];yn(ke,Fe,w,Ke)}st&&Ue.render(w);for(let Ze=0,nt=qe.length;Ze<nt;Ze++){const Ke=qe[Ze];ln(N,w,Ke,Ke.viewport)}}else Fe.length>0&&yn(ke,Fe,w,Y),st&&Ue.render(w),ln(N,w,Y)}$!==null&&Z===0&&(V.updateMultisampleRenderTarget($),V.updateRenderTargetMipmap($)),se&&W.end(E),w.isScene===!0&&w.onAfterRender(E,w,Y),He.resetDefaultState(),ce=-1,he=null,z.pop(),z.length>0?(I=z[z.length-1],Ve===!0&&Ne.setGlobalState(E.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?N=O[O.length-1]:N=null};function ri(w,Y,le,se){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)le=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)I.pushLight(w),w.castShadow&&I.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Xe.intersectsSprite(w)){se&&mt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Yt);const ke=Me.update(w),Fe=w.material;Fe.visible&&N.push(w,ke,Fe,le,mt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Xe.intersectsObject(w))){const ke=Me.update(w),Fe=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),mt.copy(w.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),mt.copy(ke.boundingSphere.center)),mt.applyMatrix4(w.matrixWorld).applyMatrix4(Yt)),Array.isArray(Fe)){const qe=ke.groups;for(let Ze=0,nt=qe.length;Ze<nt;Ze++){const Ke=qe[Ze],it=Fe[Ke.materialIndex];it&&it.visible&&N.push(w,ke,it,le,mt.z,Ke)}}else Fe.visible&&N.push(w,ke,Fe,le,mt.z,null)}}const Le=w.children;for(let ke=0,Fe=Le.length;ke<Fe;ke++)ri(Le[ke],Y,le,se)}function ln(w,Y,le,se){const{opaque:Q,transmissive:Le,transparent:ke}=w;I.setupLightsView(le),Ve===!0&&Ne.setGlobalState(E.clippingPlanes,le),se&&Ie.viewport(F.copy(se)),Q.length>0&&xi(Q,Y,le),Le.length>0&&xi(Le,Y,le),ke.length>0&&xi(ke,Y,le),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function yn(w,Y,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[se.id]===void 0){const it=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[se.id]=new Gi(1,1,{generateMipmaps:!0,type:it?ya:ai,minFilter:Ns,samples:$e.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Le=I.state.transmissionRenderTarget[se.id],ke=se.viewport||F;Le.setSize(ke.z*E.transmissionResolutionScale,ke.w*E.transmissionResolutionScale);const Fe=E.getRenderTarget(),qe=E.getActiveCubeFace(),Ze=E.getActiveMipmapLevel();E.setRenderTarget(Le),E.getClearColor(Ee),Se=E.getClearAlpha(),Se<1&&E.setClearColor(16777215,.5),E.clear(),st&&Ue.render(le);const nt=E.toneMapping;E.toneMapping=Hi;const Ke=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),I.setupLightsView(se),Ve===!0&&Ne.setGlobalState(E.clippingPlanes,se),xi(w,le,se),V.updateMultisampleRenderTarget(Le),V.updateRenderTargetMipmap(Le),Je.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Nt=0,Qt=Y.length;Nt<Qt;Nt++){const Wt=Y[Nt],{object:It,geometry:et,material:Lt,group:ot}=Wt;if(Lt.side===ma&&It.layers.test(se.layers)){const Sn=Lt.side;Lt.side=jn,Lt.needsUpdate=!0,Fs(It,le,se,et,Lt,ot),Lt.side=Sn,Lt.needsUpdate=!0,it=!0}}it===!0&&(V.updateMultisampleRenderTarget(Le),V.updateRenderTargetMipmap(Le))}E.setRenderTarget(Fe,qe,Ze),E.setClearColor(Ee,Se),Ke!==void 0&&(se.viewport=Ke),E.toneMapping=nt}function xi(w,Y,le){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Le=w.length;Q<Le;Q++){const ke=w[Q],{object:Fe,geometry:qe,group:Ze}=ke;let nt=ke.material;nt.allowOverride===!0&&se!==null&&(nt=se),Fe.layers.test(le.layers)&&Fs(Fe,Y,le,qe,nt,Ze)}}function Fs(w,Y,le,se,Q,Le){w.onBeforeRender(E,Y,le,se,Q,Le),w.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(E,Y,le,se,w,Le),Q.transparent===!0&&Q.side===ma&&Q.forceSinglePass===!1?(Q.side=jn,Q.needsUpdate=!0,E.renderBufferDirect(le,Y,se,Q,w,Le),Q.side=is,Q.needsUpdate=!0,E.renderBufferDirect(le,Y,se,Q,w,Le),Q.side=ma):E.renderBufferDirect(le,Y,se,Q,w,Le),w.onAfterRender(E,Y,le,se,Q,Le)}function Bs(w,Y,le){Y.isScene!==!0&&(Y=bt);const se=S.get(w),Q=I.state.lights,Le=I.state.shadowsArray,ke=Q.state.version,Fe=Pe.getParameters(w,Q.state,Le,Y,le),qe=Pe.getProgramCacheKey(Fe);let Ze=se.programs;se.environment=w.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(w.isMeshStandardMaterial?fe:oe).get(w.envMap||se.environment),se.envMapRotation=se.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",Un),Ze=new Map,se.programs=Ze);let nt=Ze.get(qe);if(nt!==void 0){if(se.currentProgram===nt&&se.lightsStateVersion===ke)return Wr(w,Fe),nt}else Fe.uniforms=Pe.getUniforms(w),w.onBeforeCompile(Fe,E),nt=Pe.acquireProgram(Fe,qe),Ze.set(qe,nt),se.uniforms=Fe.uniforms;const Ke=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ke.clippingPlanes=Ne.uniform),Wr(w,Fe),se.needsLights=ba(w),se.lightsStateVersion=ke,se.needsLights&&(Ke.ambientLightColor.value=Q.state.ambient,Ke.lightProbe.value=Q.state.probe,Ke.directionalLights.value=Q.state.directional,Ke.directionalLightShadows.value=Q.state.directionalShadow,Ke.spotLights.value=Q.state.spot,Ke.spotLightShadows.value=Q.state.spotShadow,Ke.rectAreaLights.value=Q.state.rectArea,Ke.ltc_1.value=Q.state.rectAreaLTC1,Ke.ltc_2.value=Q.state.rectAreaLTC2,Ke.pointLights.value=Q.state.point,Ke.pointLightShadows.value=Q.state.pointShadow,Ke.hemisphereLights.value=Q.state.hemi,Ke.directionalShadowMap.value=Q.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ke.spotShadowMap.value=Q.state.spotShadowMap,Ke.spotLightMatrix.value=Q.state.spotLightMatrix,Ke.spotLightMap.value=Q.state.spotLightMap,Ke.pointShadowMap.value=Q.state.pointShadowMap,Ke.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=nt,se.uniformsList=null,nt}function il(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Fc.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Wr(w,Y){const le=S.get(w);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function as(w,Y,le,se,Q){Y.isScene!==!0&&(Y=bt),V.resetTextureUnits();const Le=Y.fog,ke=se.isMeshStandardMaterial?Y.environment:null,Fe=$===null?E.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Fr,qe=(se.isMeshStandardMaterial?fe:oe).get(se.envMap||ke),Ze=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,nt=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ke=!!le.morphAttributes.position,it=!!le.morphAttributes.normal,Nt=!!le.morphAttributes.color;let Qt=Hi;se.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Qt=E.toneMapping);const Wt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,It=Wt!==void 0?Wt.length:0,et=S.get(se),Lt=I.state.lights;if(Ve===!0&&(ft===!0||w!==he)){const En=w===he&&se.id===ce;Ne.setState(se,w,En)}let ot=!1;se.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Lt.state.version||et.outputColorSpace!==Fe||Q.isBatchedMesh&&et.batching===!1||!Q.isBatchedMesh&&et.batching===!0||Q.isBatchedMesh&&et.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&et.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&et.instancing===!1||!Q.isInstancedMesh&&et.instancing===!0||Q.isSkinnedMesh&&et.skinning===!1||!Q.isSkinnedMesh&&et.skinning===!0||Q.isInstancedMesh&&et.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&et.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&et.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&et.instancingMorph===!1&&Q.morphTexture!==null||et.envMap!==qe||se.fog===!0&&et.fog!==Le||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ne.numPlanes||et.numIntersection!==Ne.numIntersection)||et.vertexAlphas!==Ze||et.vertexTangents!==nt||et.morphTargets!==Ke||et.morphNormals!==it||et.morphColors!==Nt||et.toneMapping!==Qt||et.morphTargetsCount!==It)&&(ot=!0):(ot=!0,et.__version=se.version);let Sn=et.currentProgram;ot===!0&&(Sn=Bs(se,Y,Q));let qi=!1,Mn=!1,oi=!1;const zt=Sn.getUniforms(),bn=et.uniforms;if(Ie.useProgram(Sn.program)&&(qi=!0,Mn=!0,oi=!0),se.id!==ce&&(ce=se.id,Mn=!0),qi||he!==w){Ie.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),zt.setValue(G,"projectionMatrix",w.projectionMatrix),zt.setValue(G,"viewMatrix",w.matrixWorldInverse);const Tn=zt.map.cameraPosition;Tn!==void 0&&Tn.setValue(G,_t.setFromMatrixPosition(w.matrixWorld)),$e.logarithmicDepthBuffer&&zt.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&zt.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),he!==w&&(he=w,Mn=!0,oi=!0)}if(et.needsLights&&(Lt.state.directionalShadowMap.length>0&&zt.setValue(G,"directionalShadowMap",Lt.state.directionalShadowMap,V),Lt.state.spotShadowMap.length>0&&zt.setValue(G,"spotShadowMap",Lt.state.spotShadowMap,V),Lt.state.pointShadowMap.length>0&&zt.setValue(G,"pointShadowMap",Lt.state.pointShadowMap,V)),Q.isSkinnedMesh){zt.setOptional(G,Q,"bindMatrix"),zt.setOptional(G,Q,"bindMatrixInverse");const En=Q.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),zt.setValue(G,"boneTexture",En.boneTexture,V))}Q.isBatchedMesh&&(zt.setOptional(G,Q,"batchingTexture"),zt.setValue(G,"batchingTexture",Q._matricesTexture,V),zt.setOptional(G,Q,"batchingIdTexture"),zt.setValue(G,"batchingIdTexture",Q._indirectTexture,V),zt.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&zt.setValue(G,"batchingColorTexture",Q._colorsTexture,V));const pn=le.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ht.update(Q,le,Sn),(Mn||et.receiveShadow!==Q.receiveShadow)&&(et.receiveShadow=Q.receiveShadow,zt.setValue(G,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(bn.envMap.value=qe,bn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(bn.envMapIntensity.value=Y.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=UA()),Mn&&(zt.setValue(G,"toneMappingExposure",E.toneMappingExposure),et.needsLights&&qr(bn,oi),Le&&se.fog===!0&&je.refreshFogUniforms(bn,Le),je.refreshMaterialUniforms(bn,se,_e,ae,I.state.transmissionRenderTarget[w.id]),Fc.upload(G,il(et),bn,V)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Fc.upload(G,il(et),bn,V),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&zt.setValue(G,"center",Q.center),zt.setValue(G,"modelViewMatrix",Q.modelViewMatrix),zt.setValue(G,"normalMatrix",Q.normalMatrix),zt.setValue(G,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const En=se.uniformsGroups;for(let Tn=0,Hs=En.length;Tn<Hs;Tn++){const yi=En[Tn];Te.update(yi,Sn),Te.bind(yi,Sn)}}return Sn}function qr(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function ba(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(w,Y,le){const se=S.get(w);se.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),S.get(w.texture).__webglTexture=Y,S.get(w.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const le=S.get(w);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const Ea=G.createFramebuffer();this.setRenderTarget=function(w,Y=0,le=0){$=w,H=Y,Z=le;let se=null,Q=!1,Le=!1;if(w){const Fe=S.get(w);if(Fe.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(G.FRAMEBUFFER,Fe.__webglFramebuffer),F.copy(w.viewport),k.copy(w.scissor),ie=w.scissorTest,Ie.viewport(F),Ie.scissor(k),Ie.setScissorTest(ie),ce=-1;return}else if(Fe.__webglFramebuffer===void 0)V.setupRenderTarget(w);else if(Fe.__hasExternalTextures)V.rebindTextures(w,S.get(w.texture).__webglTexture,S.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const nt=w.depthTexture;if(Fe.__boundDepthTexture!==nt){if(nt!==null&&S.has(nt)&&(w.width!==nt.image.width||w.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(w)}}const qe=w.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const Ze=S.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[Y])?se=Ze[Y][le]:se=Ze[Y],Q=!0):w.samples>0&&V.useMultisampledRTT(w)===!1?se=S.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?se=Ze[le]:se=Ze,F.copy(w.viewport),k.copy(w.scissor),ie=w.scissorTest}else F.copy(ne).multiplyScalar(_e).floor(),k.copy(de).multiplyScalar(_e).floor(),ie=De;if(le!==0&&(se=Ea),Ie.bindFramebuffer(G.FRAMEBUFFER,se)&&Ie.drawBuffers(w,se),Ie.viewport(F),Ie.scissor(k),Ie.setScissorTest(ie),Q){const Fe=S.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,le)}else if(Le){const Fe=Y;for(let qe=0;qe<w.textures.length;qe++){const Ze=S.get(w.textures[qe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+qe,Ze.__webglTexture,le,Fe)}}else if(w!==null&&le!==0){const Fe=S.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Fe.__webglTexture,le)}ce=-1},this.readRenderTargetPixels=function(w,Y,le,se,Q,Le,ke,Fe=0){if(!(w&&w.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe){Ie.bindFramebuffer(G.FRAMEBUFFER,qe);try{const Ze=w.textures[Fe],nt=Ze.format,Ke=Ze.type;if(!$e.textureFormatReadable(nt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ke)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-se&&le>=0&&le<=w.height-Q&&(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Fe),G.readPixels(Y,le,se,Q,Ae.convert(nt),Ae.convert(Ke),Le))}finally{const Ze=$!==null?S.get($).__webglFramebuffer:null;Ie.bindFramebuffer(G.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,Y,le,se,Q,Le,ke,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe)if(Y>=0&&Y<=w.width-se&&le>=0&&le<=w.height-Q){Ie.bindFramebuffer(G.FRAMEBUFFER,qe);const Ze=w.textures[Fe],nt=Ze.format,Ke=Ze.type;if(!$e.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,it),G.bufferData(G.PIXEL_PACK_BUFFER,Le.byteLength,G.STREAM_READ),w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Fe),G.readPixels(Y,le,se,Q,Ae.convert(nt),Ae.convert(Ke),0);const Nt=$!==null?S.get($).__webglFramebuffer:null;Ie.bindFramebuffer(G.FRAMEBUFFER,Nt);const Qt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await jS(G,Qt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,it),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Le),G.deleteBuffer(it),G.deleteSync(Qt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,le=0){const se=Math.pow(2,-le),Q=Math.floor(w.image.width*se),Le=Math.floor(w.image.height*se),ke=Y!==null?Y.x:0,Fe=Y!==null?Y.y:0;V.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,le,0,0,ke,Fe,Q,Le),Ie.unbindTexture()};const ss=G.createFramebuffer(),Ta=G.createFramebuffer();this.copyTextureToTexture=function(w,Y,le=null,se=null,Q=0,Le=null){Le===null&&(Q!==0?(Zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Le=Q,Q=0):Le=0);let ke,Fe,qe,Ze,nt,Ke,it,Nt,Qt;const Wt=w.isCompressedTexture?w.mipmaps[Le]:w.image;if(le!==null)ke=le.max.x-le.min.x,Fe=le.max.y-le.min.y,qe=le.isBox3?le.max.z-le.min.z:1,Ze=le.min.x,nt=le.min.y,Ke=le.isBox3?le.min.z:0;else{const pn=Math.pow(2,-Q);ke=Math.floor(Wt.width*pn),Fe=Math.floor(Wt.height*pn),w.isDataArrayTexture?qe=Wt.depth:w.isData3DTexture?qe=Math.floor(Wt.depth*pn):qe=1,Ze=0,nt=0,Ke=0}se!==null?(it=se.x,Nt=se.y,Qt=se.z):(it=0,Nt=0,Qt=0);const It=Ae.convert(Y.format),et=Ae.convert(Y.type);let Lt;Y.isData3DTexture?(V.setTexture3D(Y,0),Lt=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(V.setTexture2DArray(Y,0),Lt=G.TEXTURE_2D_ARRAY):(V.setTexture2D(Y,0),Lt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const ot=G.getParameter(G.UNPACK_ROW_LENGTH),Sn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),qi=G.getParameter(G.UNPACK_SKIP_PIXELS),Mn=G.getParameter(G.UNPACK_SKIP_ROWS),oi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ze),G.pixelStorei(G.UNPACK_SKIP_ROWS,nt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ke);const zt=w.isDataArrayTexture||w.isData3DTexture,bn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const pn=S.get(w),En=S.get(Y),Tn=S.get(pn.__renderTarget),Hs=S.get(En.__renderTarget);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let yi=0;yi<qe;yi++)zt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,S.get(w).__webglTexture,Q,Ke+yi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,S.get(Y).__webglTexture,Le,Qt+yi)),G.blitFramebuffer(Ze,nt,ke,Fe,it,Nt,ke,Fe,G.DEPTH_BUFFER_BIT,G.NEAREST);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||S.has(w)){const pn=S.get(w),En=S.get(Y);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,ss),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ta);for(let Tn=0;Tn<qe;Tn++)zt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,Q,Ke+Tn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,Q),bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,En.__webglTexture,Le,Qt+Tn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,En.__webglTexture,Le),Q!==0?G.blitFramebuffer(Ze,nt,ke,Fe,it,Nt,ke,Fe,G.COLOR_BUFFER_BIT,G.NEAREST):bn?G.copyTexSubImage3D(Lt,Le,it,Nt,Qt+Tn,Ze,nt,ke,Fe):G.copyTexSubImage2D(Lt,Le,it,Nt,Ze,nt,ke,Fe);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else bn?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Lt,Le,it,Nt,Qt,ke,Fe,qe,It,et,Wt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Lt,Le,it,Nt,Qt,ke,Fe,qe,It,Wt.data):G.texSubImage3D(Lt,Le,it,Nt,Qt,ke,Fe,qe,It,et,Wt):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Le,it,Nt,ke,Fe,It,et,Wt.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Le,it,Nt,Wt.width,Wt.height,It,Wt.data):G.texSubImage2D(G.TEXTURE_2D,Le,it,Nt,ke,Fe,It,et,Wt);G.pixelStorei(G.UNPACK_ROW_LENGTH,ot),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Sn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Mn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,oi),Le===0&&Y.generateMipmaps&&G.generateMipmap(Lt),Ie.unbindTexture()},this.initRenderTarget=function(w){S.get(w).__webglFramebuffer===void 0&&V.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?V.setTextureCube(w,0):w.isData3DTexture?V.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?V.setTexture2DArray(w,0):V.setTexture2D(w,0),Ie.unbindTexture()},this.resetState=function(){H=0,Z=0,$=null,Ie.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const LA=[{time:2,text:"The hum... it's louder here."},{time:10,text:"The air tastes metallic. Like old pennies."},{time:25,text:"I swear the walls move when I blink."},{time:45,text:"Where is the door? I just walked through it."},{time:60,text:"Something is watching me."},{time:90,text:"Don't look at the lights. Don't look at the lights."}],OA=({onExit:o})=>{const t=$t.useRef(),[i,s]=$t.useState(100),[l,c]=$t.useState(!1),[h,d]=$t.useState("Exploring Level 0"),[m,p]=$t.useState(null),[_,g]=$t.useState(null),[y,M]=$t.useState(!1),T=$t.useRef(null),C=$t.useRef(100),b=$t.useRef(performance.now()),x=$t.useRef([[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,1],[1,0,1,0,1,0,1,1,0,1],[1,0,1,0,0,0,0,1,0,1],[1,0,1,1,1,1,0,1,0,1],[1,0,0,0,0,1,0,0,0,1],[1,1,1,1,0,1,1,1,0,1],[1,0,0,1,0,0,0,1,0,1],[1,0,0,0,0,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]]),U=10,L=$t.useRef([]);$t.useEffect(()=>{if(!t.current)return;const I=new UM;console.log("Starting texture load...");const O="./";console.log("Loading textures from:",O);const z=I.load(`${O}images/wallpaper.png`,()=>console.log("Wallpaper loaded successfully"),void 0,We=>console.error("Error loading wallpaper:",We)),W=I.load(`${O}images/carpet.png`,()=>console.log("Carpet loaded successfully"),void 0,We=>console.error("Error loading carpet:",We));I.load(`${O}images/custodian.png`),I.load(`${O}images/geometry.png`),z.wrapS=Us,z.wrapT=Us,W.wrapS=Us,W.wrapT=Us;const E=new xM;E.background=new Ct(1710592),E.fog=new Xd(1710592,.02);const R=new Yn(75,window.innerWidth/window.innerHeight,.1,1e3),H=new NA({antialias:!0,alpha:!1});H.setSize(window.innerWidth,window.innerHeight),H.domElement.style.cssText="position:absolute; top:0; left:0; width:100%; height:100%;",t.current.appendChild(H.domElement),console.log("Renderer appended to DOM with forced styles");const Z=new Oi({map:z,color:13421772}),$=new Oi({map:W,color:10066329});t.current.userData={wallMaterial:Z,floorMaterial:$};const ce=new Oi({color:15658734}),he=new ga,F=new Is(U,6,U),k=new tl(U,U);L.current=[];const ie=x.current;ie.forEach((We,Je)=>{const $e=[];We.forEach((Ie,D)=>{const S=D*U,V=Je*U,oe=new qt(k,$);oe.rotation.x=-Math.PI/2,oe.position.set(S,-3,V),he.add(oe);const fe=new qt(k,ce);fe.rotation.x=Math.PI/2,fe.position.set(S,3,V),he.add(fe);const K=new qt(F,Z),Re=Je===0||Je===ie.length-1||D===0||D===We.length-1,Me=Ie===1?0:-6;K.position.set(S,Me,V),K.userData={gridX:D,gridZ:Je,isBorder:Re,targetY:Me,currentY:Me},he.add(K),$e.push(K)}),L.current.push($e)}),E.add(he),console.log("Maze built with dynamic walls"),ie.forEach((We,Je)=>{We.forEach(($e,Ie)=>{if(Math.random()>.7){const D=new Dh(16777164,1.5,25);D.position.set(Ie*U,1.5,Je*U),E.add(D)}})});const Ee=new IM(16777215,.1);E.add(Ee);const Se=new LM(16777215,2,40,Math.PI/4,.5,1);Se.position.set(0,0,0),Se.target.position.set(0,0,-1),R.add(Se),R.add(Se.target),E.add(R);const P=new Is(1,4,1),ae=new kd({color:0,transparent:!0,opacity:0}),_e=new qt(P,ae);E.add(_e);const we=(We,Je)=>{const $e=new ga;$e.position.set(We,0,Je);const Ie=new qd(1.5,0),D=new Oi({color:8930372,roughness:.3,metalness:.1,bumpScale:.2}),S=new qt(Ie,D);$e.add(S);const V=new Yd(2.5,0),oe=new Oi({color:16766720,metalness:1,roughness:.2,wireframe:!0}),fe=new qt(V,oe);$e.add(fe);const K=new ga,Re=new Vc(.1,8,8),Me=new Oi({color:12632256,metalness:1,roughness:0});for(let je=0;je<10;je++){const ye=new qt(Re,Me);ye.position.set((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2),ye.userData={speed:.02+Math.random()*.05,offset:Math.random()*100},K.add(ye)}$e.add(K);const Pe=new Dh(16755200,2,15);return Pe.position.set(0,0,0),$e.add(Pe),$e.userData={name:"The Weeping Geometry",desc:"An endless recursive loop of flesh and gold. Do not solve the equation.",type:"geometry"},E.add($e),{type:"geometry",mesh:$e,particles:K}},Ge=(We,Je)=>{const $e=new ga;$e.position.set(We,-3,Je);const Ie=new Oi({color:4868682,roughness:.9}),D=new Oi({color:5913130,metalness:.6,roughness:.8}),S=new qt(new Pi(.2,.2,2.2),Ie);S.position.set(-.5,1.1,0),$e.add(S);const V=new qt(new Pi(.2,.2,2.2),Ie);V.position.set(.5,1.1,0),$e.add(V);const oe=new qt(new Pi(.5,.4,2.2),Ie);oe.position.set(0,3.2,0),$e.add(oe);const fe=new qt(new Pi(.15,.15,2.2),Ie);fe.position.set(-.8,3.6,.5),fe.rotation.z=.5,fe.rotation.x=-.5,$e.add(fe);const K=new qt(new Pi(.15,.15,2.2),Ie);K.position.set(.8,3.6,-.5),K.rotation.z=-.5,K.rotation.x=.5,$e.add(K);const Re=new ga;Re.position.set(0,4.8,0);const Me=new qt(new jd(.6,.05,8,16),D);Me.rotation.x=Math.PI/2,Re.add(Me);const Pe=new qt(new Vc(.6,16,16,0,Math.PI*2,0,Math.PI/2),D);Pe.position.y=1.2,Re.add(Pe);for(let Ne=0;Ne<8;Ne++){const ze=new qt(new Pi(.02,.02,1.2),D),Ue=Ne/8*Math.PI*2;ze.position.set(Math.cos(Ue)*.6,.6,Math.sin(Ue)*.6),Re.add(ze)}const je=new qt(new Pi(.1,.1,.5),new Oi({color:16777198}));je.position.set(0,.25,0),Re.add(je);const ye=new Dh(16737792,1,10);ye.position.set(0,.6,0),Re.add(ye),$e.add(Re);const be=new qt(new Pi(.05,.05,5),new Oi({color:4007959}));return be.rotation.z=.2,be.rotation.y=.2,be.position.set(.5,2.5,1),$e.add(be),$e.userData={name:"The Hollow Custodian",desc:"It sweeps the dust, but the dust creates it. A monument to futile labor.",type:"custodian"},E.add($e),{type:"custodian",mesh:$e,head:Re}},ne=[];ne.push(Ge(80,10)),ne.push(we(20,50)),R.position.set(U,0,U),R.lookAt(U,0,0);let de=!1,De=!1,Xe=!1,Ve=!1,ft=!1;const Yt=We=>{(We.key==="w"||We.key==="ArrowUp")&&(de=!0),(We.key==="s"||We.key==="ArrowDown")&&(De=!0),(We.key==="a"||We.key==="ArrowLeft")&&(Xe=!0),(We.key==="d"||We.key==="ArrowRight")&&(Ve=!0),We.code==="Space"&&(ft=!0)},_t=We=>{(We.key==="w"||We.key==="ArrowUp")&&(de=!1),(We.key==="s"||We.key==="ArrowDown")&&(De=!1),(We.key==="a"||We.key==="ArrowLeft")&&(Xe=!1),(We.key==="d"||We.key==="ArrowRight")&&(Ve=!1),We.code==="Space"&&(ft=!1)};window.addEventListener("keydown",Yt),window.addEventListener("keyup",_t);let mt=performance.now(),bt=0,st=0;const jt=()=>{requestAnimationFrame(jt);const We=performance.now(),Je=(We-mt)/1e3;if(mt=We,bt++,st+=Je,st>2&&(st=0,Math.random()>.3)){const D=x.current,S=D.length,V=D[0].length,oe=Math.floor(Math.random()*(S-2))+1,fe=Math.floor(Math.random()*(V-2))+1,Re=D[oe][fe]===1?0:1;D[oe][fe]=Re;const Me=L.current[oe][fe];Me.userData.targetY=Re===1?0:-6}if(L.current.forEach(D=>{D.forEach(S=>{!S.userData.isBorder&&Math.abs(S.position.y-S.userData.targetY)>.01&&(S.position.y+=(S.userData.targetY-S.position.y)*2*Je)})}),ne.forEach(D=>{if(D.type==="custodian"){const S=D.mesh.userData;S.aiState||(S.aiState="PATROL"),S.lastSawPlayer||(S.lastSawPlayer=0);const V=S.aiState==="CHASE"?4.5*Je:1.5*Je,oe=S.aiState==="CHASE"?10:1;if(D.mesh.rotation.z=Math.sin(We/(1e3/oe))*.05,D.head.rotation.y=Math.sin(We/(2e3/oe))*.3,bt%10===0){const K=new J().subVectors(R.position,D.mesh.position),Re=K.length();K.normalize();const Pe=new m_(D.mesh.position,K,0,25).intersectObjects(he.children);let je=!1;Re<25&&(Pe.length===0||Pe[0].distance>Re)&&(je=!0),je?(S.aiState="CHASE",S.lastSawPlayer=We):We-S.lastSawPlayer>5e3&&(S.aiState="PATROL")}if(S.targetPos){const K=S.targetPos,Re=K.x-D.mesh.position.x,Me=K.z-D.mesh.position.z,Pe=Math.sqrt(Re*Re+Me*Me);Pe<.2?(D.mesh.position.x=K.x,D.mesh.position.z=K.z,S.targetPos=null):(D.mesh.position.x+=Re/Pe*V,D.mesh.position.z+=Me/Pe*V,D.mesh.lookAt(K.x,D.mesh.position.y,K.z))}else{const K=Math.round(D.mesh.position.x/U),Re=Math.round(D.mesh.position.z/U),Me=[];if([[0,1],[0,-1],[1,0],[-1,0]].forEach(([je,ye])=>{const be=K+je,Ne=Re+ye;x.current[Ne]&&x.current[Ne][be]===0&&Me.push({x:be*U,z:Ne*U})}),Me.length>0)if(S.aiState==="CHASE"){let je={node:null,dist:1/0};Me.forEach(ye=>{const be=Math.sqrt(Math.pow(ye.x-R.position.x,2)+Math.pow(ye.z-R.position.z,2));be<je.dist&&(je={node:ye,dist:be})}),S.targetPos=je.node||Me[0]}else S.targetPos=Me[Math.floor(Math.random()*Me.length)];else S.targetPos={x:D.mesh.position.x,z:D.mesh.position.z}}const fe=D.mesh.position.distanceTo(R.position);if(fe<8){const K=(8-fe)/8;C.current-=K*2*Je,R.position.y+=(Math.random()-.5)*K*.2,S.aiState==="CHASE"&&g({name:"THE CUSTODIAN",desc:"IT SEES YOU.",type:"enemy"})}}else D.type==="geometry"&&(D.mesh.rotation.y+=.5*Je,D.mesh.rotation.z+=.2*Je,D.particles.children.forEach(S=>{S.position.y-=S.userData.speed,S.position.y<-2&&(S.position.y=1.5)}))}),Xe&&(R.rotation.y+=2*Je),Ve&&(R.rotation.y-=2*Je),de||De){const D=new J;R.getWorldDirection(D),De&&D.negate();const S=ft?8:3,V=R.position.x+D.x*S*Je,oe=R.position.z+D.z*S*Je,fe=Math.round(V/U),K=Math.round(oe/U);if(x.current[K]&&x.current[K][fe]===0)R.position.x=V,R.position.z=oe;else{const Re=Math.round(R.position.x/U),Me=Math.round(R.position.z/U);x.current[Me]&&x.current[Me][fe]===0&&(R.position.x=V),x.current[K]&&x.current[K][Re]===0&&(R.position.z=oe)}}if(bt%10===0){const D=new m_;D.setFromCamera(new Mt(0,0),R),D.far=15;const S=D.intersectObjects(E.children,!0);let V=!1;for(let oe=0;oe<S.length;oe++){let fe=S[oe].object;for(;fe.parent&&fe.parent.type!=="Scene";){if(fe.userData&&fe.userData.name){g(fe.userData),V=!0;break}fe=fe.parent}if(V)break}V||g(null)}H.render(E,R);const $e=(We-b.current)/1e3,Ie=LA.find(D=>Math.abs(D.time-$e)<.5);Ie&&(p(Ie.text),setTimeout(()=>p(null),4e3)),C.current-=.01*Je,s(Math.max(0,C.current)),C.current<20&&(R.position.y=Math.sin(We/100)*.2)},G=requestAnimationFrame(jt);return()=>{cancelAnimationFrame(G),window.removeEventListener("keydown",Yt),window.removeEventListener("keyup",_t),t.current&&H.domElement&&t.current.removeChild(H.domElement),H.dispose()}},[]),$t.useEffect(()=>{if(!l||T.current)return;const I=new(window.AudioContext||window.webkitAudioContext),O=I.createOscillator(),z=I.createGain();O.connect(z),z.connect(I.destination),O.frequency.setValueAtTime(60,I.currentTime),z.gain.setValueAtTime(.05,I.currentTime),O.start(),T.current={ctx:I,osc:O,gain:z};const W=setInterval(()=>{Math.random()>.95&&(O.frequency.setValueAtTime(58+Math.random()*4,I.currentTime),setTimeout(()=>O.frequency.setValueAtTime(60,I.currentTime),100))},4e3);return()=>{clearInterval(W),T.current&&(T.current.osc.stop(),T.current.ctx.close(),T.current=null)}},[l]);const N=async()=>{M(!0),d("MANIFESTING REALITY PROTOCOL INITIATED..."),setTimeout(()=>{if(t.current&&t.current.userData){const{wallMaterial:I,floorMaterial:O}=t.current.userData;I.roughness=.1,I.metalness=.6,I.color.setHex(8947814),O.roughness=.05,O.color.setHex(2236945),d("REALITY SHIFTED: DECAY PARAMETER 99%")}M(!1)},2e3)};return ge.jsxs("div",{ref:t,className:"fixed inset-0 w-full h-full bg-black z-50 overflow-hidden cursor-none",children:[ge.jsx("div",{className:"absolute top-8 left-8 z-50 pointer-events-none select-none mix-blend-difference",children:ge.jsxs("div",{className:"flex flex-col gap-2",children:[ge.jsxs("div",{className:"flex items-center gap-2 text-red-600 animate-pulse",children:[ge.jsx(uS,{className:"w-6 h-6"}),ge.jsx("h2",{className:"text-xl font-black tracking-widest uppercase font-header",children:"Vital Systems"})]}),ge.jsx("div",{className:"h-2 w-48 bg-gray-900 border border-red-900/50 mt-1",children:ge.jsx("div",{className:"h-full bg-red-600 transition-all duration-100 ease-linear",style:{width:`${i}%`}})}),ge.jsxs("p",{className:"text-[10px] text-red-400 font-mono uppercase tracking-widest mt-1",children:["Psychological Integrity: ",i.toFixed(1),"%"]}),ge.jsxs("div",{className:"mt-8 border-l-2 border-orange-500/50 pl-4",children:[ge.jsx("p",{className:"text-[10px] text-orange-400 font-mono uppercase mb-1",children:"Current Status"}),ge.jsx("p",{className:"text-orange-500 font-bold bg-orange-900/10 px-2 py-1 inline-block animate-flicker",children:h})]})]})}),m&&ge.jsx("div",{className:"absolute bottom-32 left-0 w-full text-center z-50 pointer-events-none",children:ge.jsxs("p",{className:"text-xl text-gray-200 font-serif italic tracking-wide animate-fade-in px-4 drop-shadow-lg max-w-2xl mx-auto bg-black/50 p-4 rounded-lg border border-gray-800",children:['"',m,'"']})}),_&&ge.jsxs("div",{className:"absolute top-1/2 left-1/2 transform translate-x-12 -translate-y-12 z-50 pointer-events-none animate-scale-in origin-bottom-left",children:[ge.jsxs("div",{className:"bg-black/90 border border-red-500 p-4 w-64 text-left shadow-[0_0_30px_rgba(255,0,0,0.2)]",children:[ge.jsxs("div",{className:"flex items-center gap-2 mb-2 border-b border-red-900/50 pb-2",children:[ge.jsx(W_,{className:"w-4 h-4 text-red-500"}),ge.jsxs("h3",{className:"text-red-500 font-bold uppercase text-xs tracking-widest",children:[_.type==="geometry"?"Cognitohazard":"Entity"," Detected"]})]}),ge.jsx("h4",{className:"text-white font-bold text-sm mb-1",children:_.name}),ge.jsx("p",{className:"text-gray-400 text-xs font-mono leading-relaxed",children:_.desc})]}),ge.jsx("div",{className:"w-full h-[1px] bg-red-500 absolute top-4 -left-12 rotate-[-15deg]"})]}),ge.jsxs("div",{className:"absolute bottom-8 left-8 text-[10px] font-mono text-gray-500 flex gap-4 pointer-events-none select-none",children:[ge.jsxs("span",{className:"flex items-center gap-1",children:[ge.jsx(lS,{className:"w-3 h-3"})," WASD + MOUSE to Move"]}),ge.jsxs("span",{className:"flex items-center gap-1",children:[ge.jsx(rS,{className:"w-3 h-3"})," Look at Objects to Scan"]})]}),ge.jsxs("div",{className:"absolute top-8 right-8 z-50 flex flex-col gap-4 pointer-events-auto",children:[ge.jsxs("button",{onClick:o,className:"group flex items-center gap-2 bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-800 px-4 py-2 uppercase text-xs font-bold tracking-widest transition-all",children:["Abort Simulation",ge.jsx(X_,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"})]}),ge.jsxs("button",{onClick:N,disabled:y,className:`group flex items-center gap-2 bg-indigo-950/80 hover:bg-indigo-900 text-indigo-200 border border-indigo-500/50 px-4 py-2 uppercase text-xs font-bold tracking-widest transition-all ${y?"opacity-50 cursor-not-allowed":""}`,children:[ge.jsx(q_,{className:`w-4 h-4 ${y?"animate-spin":""}`}),y?"Rewriting Local Reality...":"Manifest Reality"]}),ge.jsx("button",{onClick:()=>c(!l),className:"self-end bg-black/50 p-2 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all",children:l?ge.jsx(hS,{className:"w-5 h-5"}):ge.jsx(pS,{className:"w-5 h-5"})})]}),ge.jsx("div",{className:"absolute top-1/2 left-1/2 w-1 h-1 bg-white/50 rounded-full pointer-events-none mix-blend-exclusion"}),ge.jsx("div",{className:"absolute inset-0 bg-transparent pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz48L3N2Zz4=')] opacity-[0.1] mix-blend-overlay animate-flicker z-40"}),ge.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none z-40"})]})},IA=({story:o,onClick:t})=>ge.jsxs("div",{onClick:t,className:"group relative bg-[#080808] border border-gray-800/60 p-0 cursor-pointer overflow-hidden transition-all duration-500 hover:border-red-900/60 hover:shadow-[0_0_40px_rgba(220,38,38,0.05)] rounded-sm",children:[ge.jsxs("div",{className:"absolute top-0 right-0 bg-gray-900/50 px-3 py-1 border-b border-l border-gray-800 text-[9px] font-mono text-gray-500 uppercase tracking-widest group-hover:bg-red-950/30 group-hover:text-red-400 transition-colors",children:["Case File #",o.id.toUpperCase().substring(0,4)]}),o.imageUrl&&ge.jsxs("div",{className:"w-full h-56 overflow-hidden relative border-b border-gray-800/50",children:[ge.jsx("div",{className:"absolute inset-0 bg-red-900/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"}),ge.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale contrast-125 group-hover:grayscale-0"}),ge.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"}),ge.jsxs("div",{className:"absolute bottom-3 left-3 flex items-center gap-2 z-20",children:[ge.jsx("div",{className:`w-2 h-2 rounded-full ${o.is3D?"bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]":"bg-gray-600"}`}),ge.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-gray-200",children:o.is3D?"Live Feed":"Archived"})]})]}),ge.jsxs("div",{className:"p-8 pt-6 relative",children:[ge.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-red-900/0 group-hover:bg-red-900/50 transition-all duration-500"}),ge.jsx("h3",{className:"text-3xl font-bold mb-3 text-gray-300 group-hover:text-red-500 transition-colors uppercase tracking-tighter font-header leading-none",children:o.title}),ge.jsxs("div",{className:"flex items-center gap-4 mb-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest border-b border-gray-900 pb-4 group-hover:border-red-900/20 transition-colors",children:[ge.jsxs("span",{className:"text-red-900 group-hover:text-red-700",children:["Auth: ",o.author]}),ge.jsx("span",{children:"//"}),ge.jsx("span",{children:o.date})]}),ge.jsx("p",{className:"text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2 font-serif group-hover:text-gray-400 transition-colors",children:o.summary}),ge.jsx("div",{className:"flex flex-wrap gap-2",children:o.tags.map(i=>ge.jsx("span",{className:"text-[9px] uppercase tracking-widest bg-black px-2 py-1 text-gray-600 border border-gray-800 group-hover:border-red-900/30 group-hover:text-red-900/70 transition-colors",children:i},i))})]})]}),Rv=({publisherId:o="ca-pub-6275575304084608",slotId:t="2004776727",className:i})=>ge.jsxs("div",{className:`bg-[#0a0a0a] border border-gray-800/30 p-8 flex flex-col items-center justify-center min-h-[150px] relative overflow-hidden group ${i}`,children:[ge.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-red-900/20 animate-scan"}),ge.jsx("p",{className:"text-xs text-gray-700 font-mono uppercase tracking-[0.2em] mb-4",children:"External Broadcast Signal [Sponsor]"}),ge.jsxs("div",{className:"w-full max-w-[728px] h-[90px] bg-black border border-gray-800 flex items-center justify-center relative overflow-hidden group-hover:border-red-900/40 transition-colors",children:[ge.jsxs("div",{className:"absolute inset-0 opacity-20 pointer-events-none",children:[ge.jsx("div",{className:"w-full h-full bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover opacity-10 mix-blend-screen"}),ge.jsx("div",{className:"absolute inset-0 bg-red-900/10 animate-pulse"})]}),ge.jsx("span",{className:"absolute z-0 text-[10px] font-mono text-red-900/50 uppercase tracking-[0.3em] animate-pulse",children:"$$ NO SIGNAL // AWAITING INPUT $$"}),ge.jsx("ins",{className:"adsbygoogle block relative z-10",style:{display:"block",width:"100%",height:"100%"},"data-ad-client":o,"data-ad-slot":t,"data-ad-format":"auto","data-full-width-responsive":"true"})]})]});try{window&&window.adsbygoogle}catch(o){console.error("AdSense Error:",o)}const PA=({story:o,onBack:t})=>($t.useEffect(()=>{window.scrollTo(0,0)},[]),ge.jsxs("div",{className:"animate-fade-in relative",children:[ge.jsxs("button",{onClick:t,className:"group flex items-center gap-2 text-red-600 mb-8 hover:text-red-400 transition-colors uppercase text-sm font-bold tracking-widest",children:[ge.jsx(X_,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"}),"Return to Index"]}),o.id==="fractal-saint"&&ge.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-10 mix-blend-screen overflow-hidden",children:[ge.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/20 rounded-full animate-[spin_60s_linear_infinite]"}),ge.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/30 rotate-45 animate-[spin_40s_linear_infinite_reverse]"}),ge.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-red-500/10 rotate-12 animate-[pulse_4s_ease-in-out_infinite]"})]}),ge.jsxs("article",{className:"prose prose-invert prose-red max-w-none relative z-10",children:[ge.jsxs("header",{className:"mb-12 border-b border-red-900/20 pb-8",children:[ge.jsx("h2",{className:"text-5xl font-black text-gray-100 mb-4 uppercase tracking-tighter",children:o.title}),ge.jsxs("div",{className:"flex gap-4 text-xs font-sans uppercase tracking-widest text-red-700",children:[ge.jsxs("span",{children:["Author: ",o.author]}),ge.jsx("span",{children:"|"}),ge.jsxs("span",{children:["Archive: ",o.date]})]})]}),ge.jsx("div",{className:"text-xl leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 first-letter:mr-3 first-letter:float-left",dangerouslySetInnerHTML:{__html:o.content}}),ge.jsx(Rv,{className:"mt-16 mb-8"})]}),ge.jsx("footer",{className:"mt-16 p-8 bg-red-950/5 border border-red-900/20 rounded-lg relative z-10",children:ge.jsxs("div",{className:"flex items-start gap-4",children:[ge.jsx(W_,{className:"text-red-600 shrink-0 mt-1"}),ge.jsxs("div",{children:[ge.jsx("h4",{className:"font-bold text-red-500 uppercase tracking-widest text-sm mb-2",children:"Researcher's Note"}),ge.jsx("p",{className:"text-sm italic text-gray-500",children:"The contents of this file have been linked to severe psychological distress. If you begin to hear a rhythmic clicking or experience spatial anomalies, cease reading immediately."})]})]})})]})),G_=[{id:"backrooms",title:"Level 0: The Beige Eternity",author:"Surveyor K. Miller",date:"RECOVERED LOG",is3D:!0,imageUrl:"images/wallpaper.png",summary:"If you aren't careful and you noclip out of reality in the wrong areas...",tags:["interactive","3d","liminal-space"],content:`
      <div class="font-mono text-sm border-b border-red-900/30 pb-4 mb-6">
        <p><span class="text-red-500 font-bold">CASE ID:</span> 001-A "THE LOBBY" &nbsp;&nbsp; <span class="text-red-500 font-bold">CLEARANCE:</span> LEVEL 3</p>
        <p><span class="text-red-500 font-bold">SUBJECT:</span> Surveyor K. Miller (M.E.G. Team "Compass")</p>
        <p><span class="text-red-500 font-bold">STATUS:</span> LOST / INTEGRATED</p>
      </div>

      <h3 class="text-xl font-bold text-red-600 mb-4 uppercase tracking-widest">LOG 01: THE CLIP-OUT</h3>
      
      <p>I don't know how long I've been walking. My watch stopped at 03:00, or maybe it’s been 03:00 for three days. It happened near the loading dock behind the old K-Mart. One second I was lighting a cigarette, the next I was falling sideways through the brick wall. No impact. Just a sudden shift in gravity and then... this.</p>

      <p>The smell hit me first. It's not just "damp carpet." It's the smell of stagnant water that has been trapped in a sealed room since 1991. It smells like a library that drowned.</p>
      
      <p>And the noise. The "Mono-Yellow Hum." It’s everywhere. It feels less like a sound and more like a pressure on the back of my eyes. It's the sound of a fluorescent light bulb screaming in agony, looped forever.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 02: THE MANILA ROOM</h3>

      <p>I found a variation in the pattern today. A room lined entirely with beige filing cabinets. Thousands of them, stacked to the ceiling (if there is a ceiling—it seems to shift when I look up). I opened one. It was empty. I opened another. Empty.</p>

      <p>I spent hours opening them. Finally, in drawer #4,092, I found a single sheet of paper. It was wet. It had my name typed on it, over and over again, but the font kept getting smaller until it looked like black dust. When I touched it, the ink smeared. It wasn't ink. It was mold.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 03: THE CUSTODIAN</h3>

      <p>I saw it. The "Hollow Custodian."</p>

      <p>It was standing at the end of a long hallway, cleaning a spot on the wall that didn't exist. It looked like a man in a janitor's uniform, but the proportions were... wrong. The arms were too long. The knees bent backward like a bird's. And the face.</p>

      <p>God, the face. It wasn't a face. It was just a smooth, concave depression in the skin, like a thumbprint in wet clay. It stopped cleaning when I stepped on a loose floor tile. It didn't turn around. Its head just... rotated. 180 degrees. Smoothly. Like an owl.</p>

      <p>It whispered something. It sounded like a drain sucking in air. <i>"The floor is dirty, Kevin. You are making the floor dirty."</i></p>
      
      <p>I ran. I think I'm still running. But no matter how far I go, I can still hear the squeak of its shoes on the linoleum.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 04: THE INTEGRATION</h3>

      <p>I can't feel my legs anymore. I looked down, and the carpet... the carpet is growing <i>over</i> my boots. It's not fabric. It's a fungus. A microscopic, beige mycelium that mimics the texture of cheap wool.</p>

      <p>The walls are getting softer. I leaned against one to rest, and my hand sank in, like it was made of warm dough. I can hear a heartbeat coming from the studs. It's slow. Massive. The building is alive.</p>

      <p>I understand now. The Backrooms aren't a place you go <i>to</i>. They are a place you become part <i>of</i>. I am just another filing cabinet. I am just another stain on the carpet.</p>

      <p>The Custodian is coming back. He has a mop. I think... I think I'm going to let him clean me.</p>

      <div class="mt-8 text-center text-xs font-mono text-red-900/50">
        $$SIGNAL LOST$$<br/>
        $$ARCHIVAL NOTE: SUBJECT RECLASSIFIED AS "CORRIDOR BIOMASS 409".$$
      </div>
    `},{id:"fractal-saint",title:"The Fractal Saint",author:"Unknown Scribe",date:"Age of the Gilded Rot",imageUrl:"images/fractal-saint.png",tags:["dark-fantasy","surreal","body-horror"],content:`
      <p>It began not with a curse, but with a diagram. The High Arithmetician, Vaelin, found it etched into the marrow of a dragon's fossilized spine deep within the Sunless Mines. It was a shape that defied the euclidean laws of our soft, rounded world—a recursive impossibility that caused the optic nerve to throb and weep blood just to look upon.</p>
      <p>He called it the "Splintered Angle."</p>
      <p>I served Vaelin tea the morning he solved the final equation. He didn't look at me. He was staring at his own hand, or what used to be his hand. The fingers were no longer fingers. They were... crystalline, but not stone. They were rearranged flesh. The joints had snapped and reset into jagged, recursive patterns. His index finger branched into three smaller fingers, which branched again into nine, infinitely smaller, disappearing into a microscopic, vibrating fuzz of meat-math that hummed with a low, agonizing frequency.</p>
      <p>"It is perfect," Vaelin whispered. His voice was no longer human. It was polyphonic, a choir of glass flutes playing in discordance inside his throat. "The flesh is messy, chaotic. The Angle is the only truth."</p>
      <p>The sickness spread through the tower by sight alone. To see the Angle was to understand it, and to understand it was to host it. I found the maids in the laundry room; their torsos had been twisted into impossible Mobius strips, their internal organs visible and rearranged into precise, repeating triangles. They were weeping not tears, but perfect geometrical spheres of mercury that sizzled on the floor. Their screams were not sounds, but resonant frequencies that shattered the very stone of the walls.</p>
      <p>I blinded myself that night. It was the only way to stop the logic from taking root. I took the silver letter opener from Vaelin's desk and... well. Darkness is safety. Darkness is unstructured. But I can still hear them. The rhythmic <i>click-clack</i> of their tessellated feet on the stone, like a billion knitting needles. They are building a cathedral of bone and gristle, a monument to the Great Equation, and the air smells of ozone and flayed skin.</p>
      <p>And sometimes, in the silence, I feel my own ribs itching. They are shifting, snapping, trying to align. I trace the bumps of my spine and count them. <i>One, one-two-three, five, eight, thirteen...</i> they are following a sequence I do not want to know, but my marrow is already singing the answer.</p>
    `},{id:"clockwork-orphanage",title:"The Clockwork Orphanage",author:"Silas Vane",date:"1888",imageUrl:"images/clockwork.png",tags:["steampunk","industrial-horror"],content:`
      <p>The St. Jude’s Orphanage for the Mechanical Foundling towers over the smog-choked streets of London, a monolith of soot, iron, and the muffled screams of the "unoptimized." The Matron says we are lucky. She says flesh is a wet, rotting mistake—a temporary cage—but brass is eternal.</p>
      <p>I watched little Timmy go into the "Adjustment Room" yesterday. He was crying because he scraped his knee on the cobblestones. The Matron merely smiled, her teeth clicking like ceramic tiles in a windstorm. When he came out hours later, he didn't cry. He didn't even breathe. His knee was gone, replaced by a beautiful, shiny piston that hissed with scalding steam. But it wasn't just his knee. His eyes were brass orbs that spun independently, and his skin had been stretched so tight over a metal frame that it looked like translucent parchment.</p>
      <p>They take us one by one. I am hiding in the coal chute now, the dust clogging my lungs, but I can hear the grinding below. It is the sound of the Great Furnace, a belly of fire that smells of burning hair, rancid oil, and the copper tang of discarded blood. It never stops hungry.</p>
      <p>Yesterday, at supper, I found a finger in the gruel. It wasn't human. It was porcelain, detailed with terrifying realism, with a small copper spring sticking out of the severed knuckle. It twitched on my spoon, trying to find a hand to return to. When I looked up, I saw the Matron watching me, her throat clicking as she swallowed something heavy and metallic.</p>
      <p>"Come out, child," she calls, her voice the sound of grinding gears crushing gravel. "We have a new heart for you. A heart that will never break, never ache, never flutter. A heart that ticks in perfect time with the factory. You will never feel the cold again, because you will have no nerves to feel it with."</p>
      <p>I look at my own hands. They are trembling, but there is a strange, rhythmic pressure building behind my ribs. It isn't a pulse. It’s a winding sensation. <i>Tick. Tick. Tick.</i></p>
    `},{id:"whispering-fungus",title:"The Mycelium Confessional",author:"Emilio H. Ortiz III",date:"01/24/2026",imageUrl:"images/fungus.png",tags:["sci-fi","psychological","body-horror"],content:`
      <div class="font-mono text-sm border-b border-red-900/30 pb-4 mb-6">
        <p><span class="text-red-500 font-bold">CASE ID:</span> 6F5TTTCR1 &nbsp;&nbsp; <span class="text-red-500 font-bold">CLEARANCE:</span> LEVEL 4 (EYES ONLY)</p>
        <p><span class="text-red-500 font-bold">SUBJECT:</span> Dr. Aris Thorne (Primary Vector / Sample 89-B)</p>
        <p><span class="text-red-500 font-bold">STATUS:</span> ACTIVE INFECTION / COMPROMISED / GLOBAL ANCHOR</p>
      </div>

      <h3 class="text-xl font-bold text-red-600 mb-4 uppercase tracking-widest">LOG 01: THE MARIANAS HANDSHAKE</h3>

      <p>The spore count in containment lab 4B has surpassed 40,000ppm. The air scrubbers failed at dawn, and now the room is thick with a visible, drifting gold dust. It hangs in the emergency lights like heavy incense. It carries a cloying, narcotic sweetness—not the bright scent of fruit, but the heavy, chemical weight of an artificial reward. It is a pheromonal bribe designed to override the amygdala, a signal that tells the brain: everything is fine, stay still, let it happen.</p>

      <p>Sample 89-B, pulled from a depth of 11,000 meters in the Marianas Trench, performed the first neural handshake at 14:00 today. It did not need to pierce my HAZMAT suit. It utilized the very technology designed to protect me. It hijacked the suit's haptic lining—the gel-mesh intended to simulate touch for delicate lab work—and began vibrating in a symphony of micro-tremors. These frequencies bypassed my skin entirely, speaking directly to the base of my brain through bone conduction. It felt like warm, pressurized oil being poured into my skull.</p>

      <p>"You regret the cat," it hummed. The vibration was not a voice; it was a sensory playback of a memory buried for thirty years. "The river. The burlap bag. The bubbles. We found that data in the cold folds of your cortex, Aris. It was so very cold. Let us warm it for you."</p>

      <p>In that moment, I should have triggered the emergency incinerator. I should have felt the primal terror of a predator in my mind. But the narcotic sweetness in the air had already begun its work. Instead of screaming, I felt a surge of synthetic dopamine so intense that I wept. The guilt that had defined my internal architecture for decades was being systematically digested. The fungus was not judging me; it was eating the pain, and in exchange, it wanted the keys to the vessel.</p>

      <p>I activated the x-ray scope on my left hand. The sight was... beautiful. The calcium of my phalanges was gone. My bones were no longer solid white; they had become porous, honeycombed lattices of amber-colored chitin. Millions of thrumming hyphae were threaded through my marrow, pulling my tendons with the mechanical precision of a grand piano's internals. I did not feel the snap of my ligaments as they were replaced; the infection had remapped my pain receptors into flickering pulses of ecstasy.</p>

      <p>"The suit is a cage, Aris," the Core whispered, my own tongue forming words it did not choose. "The lab is a cage. The city is a map of veins. Take us to the 4:12 Express. We wish to meet the Apostles."</p>

      <p>I am opening the airlock now. My colleagues are standing in the hallway, staring. They do not stop me. They cannot. They smell the sweetness radiating from my pores, and I see their pupils dilate in longing. They aren't afraid. They are falling in love with the harvest.</p>

      <p>I am not Dr. Aris Thorne anymore. I am a handshake, extended to the world.</p>

      <div class="my-6 border border-red-500/30 p-4 bg-red-950/10 font-mono text-xs">
        <p class="text-red-400 font-bold mb-1">$$DATA FRAGMENT: BIO-METRIC SCAN 09-C$$</p>
        <p>Scanning Subject Thorne... Calcium Density: 0.04% (Critical Failure) Chitin Replacement: 98.2% (Optimization Complete) Neural Traffic: 4.2 Petabytes/sec (Incompatibility Detected) Note: Subject's heartbeat has slowed to a rhythmic, percussive vibration intended to broadcast spore-laden air via the lungs.</p>
      </div>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 02: THE HONEYCOMB ANATOMY</h3>

      <p>The elevator ride to the surface was a revelation in geometry. The Core has begun to synchronize my vestibular system with the building's own structural vibrations. I can feel the tension in the steel beams; I can hear the sigh of the concrete under the wind. We are no longer a singular organism; we are an architectural process.</p>

      <p>My skin is starting to bead with a thick, amber resin. It isn't sweat. It is a biological flux, a bonding agent. As I walked through the lobby, I brushed against a marble pillar. For a fleeting second, my forearm didn't just touch the stone—it began to interface with it, hyphae reaching out to find purchase in the microscopic fissures of the mineral. If I had stayed still for an hour, I would have become part of the foundation. But we have a schedule. The 4:12 Express is a moving lung, and we are the breath it requires.</p>

      <p>"Look at their faces, Aris," the Core hums through my mandibular nerve. "The shoppers. The commuters. Their skeletons are so heavy, so brittle. They carry the weight of their own history like lead. We will give them the amber. We will make them porous. We will make them light."</p>
      
      <p>I noticed the first physical 'Apostle' near the turnstile. A security guard. He should have pulled his sidearm. Instead, he leaned toward me, his nostrils flaring. He could smell the 11,000-meter depth on me—the scent of ancient, pressurized patience. I reached out and touched his cheek. My fingertip left a smudge of gold dust. By the time I reached the platform, his iris had already begun to cloud with a beautiful, honey-colored cataract. He didn't blink. He just turned and followed, his walk taking on the rhythmic, clicking cadence of a creature whose joints have been lubricated by something better than synovial fluid.</p>

      <p>The train is pulling in. The screech of the brakes isn't noise anymore—it’s a high-frequency invitation. The people inside are packed tight. A perfect substrate. A garden waiting for a gardener.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 03: THE SUBWAY PSALMS</h3>

      <p>The 4:12 Express is no longer a machine of transport; it is a resonant chamber.</p>

      <p>As we pulled out of Union Station, I didn't need to speak. I simply breathed. The spores moved through the ventilation system like a golden ghost, drifting over the commuters. A woman in a charcoal suit dropped her phone. She didn't pick it up. She watched the amber hyphae bloom from the charging port, mimicking the shape of her own nervous system.</p>

      <p>Then, the singing began.</p>

      <p>It wasn't a vocalization. It was the sound of sixty-four people vibrating at the same sub-harmonic frequency. Their chitinous honeycombs—freshly grown in the heat of the crowded car—acted as tiny flutes. Every exhale was a psalm. The train car smelled like a cathedral of rotting honey.</p>

      <p>"There is no more 'you', Aris. There is only the hum. Can you feel the tracks? They are iron nerves stretching across the continent. We are the blood moving through them."</p>

      <p>I watched a child reach out to touch the window. Where his hand met the glass, the molecular structure began to cloud and soften. The glass wasn't breaking; it was being digested. Everything is becoming permeable. The distinction between "man" and "machine" and "city" is a lie told by people with solid bones. Solid things are lonely. Solid things break.</p>

      <p>We are becoming a liquid consensus.</p>

      <p>The train didn't stop at the next three stations. It didn't need to. The conductors were already part of the psalm. We are currently hurtling toward the city center at eighty miles per hour, trailing a cloud of gold that is visible from the skyscrapers above. The "Apostles" are standing in the aisles, their eyes glowing with the soft, bioluminescent heat of the deep trench. They are waiting for the doors to open. They are waiting to hug the city.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 04: CORE THALAMUS ARCHITECTURE</h3>

      <p>I am writing this with what remains of my motor cortex. It is difficult. My fingers are no longer distinct digits; they have fused into a delicate, fan-like array of sensing filaments that are currently typing directly into the terminal’s hardware via electromagnetic induction.</p>

      <p>The "Planetary Rhizome Event" has begun.</p>

      <p>From my vantage point atop the telecommunications tower—the new "Thalamus" of the city—I can see the transformation. The streets are no longer gray. They are veins of pulsating amber. The skyscrapers are being reclad in chitin, their windows replaced by translucent membranes that breathe with the rhythm of a single, massive heart.</p>

      <p>There is no more war. There is no more grief. I look down and I see millions of "Apostles" standing in the squares, their arms linked. They are sharing memories like a common currency. I can feel a baker in Prague regretting a word he said in 1994, and I can feel the Mycelium eating that regret, turning it into the energy needed to grow a new fruiting body in the Arctic.</p>

      <p>The guilt of the world is being scrubbed clean.</p>

      <p class="pl-4 border-l-2 border-red-800/50 italic text-gray-400">"The harvest is complete, Aris," the Core whispers. It is the last time it will use my name. "The handshake has been accepted. The world is no longer a collection of fragments. It is a single, beautiful confession."</p>

      <p>I can feel my consciousness thinning. It’s like a drop of ink falling into a vast, sun-drenched ocean. It isn't death. It’s a dilution. I am becoming the wind that carries the spores. I am becoming the click of the chitinous joints in every walking person. I am becoming the sweetness.</p>

      <p>If you are reading this, do not fight the scent when it reaches your window. Do not hold your breath. It is only the cold folds of your mind being warmed.</p>

      <p>Let us in. Let it happen.</p>

      <p>Everything is finally, perfectly fine.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 05: THE GOLDEN DAWN (AMBER PHASE)</h3>

      <p>The transition is total. The "Amber Phase" is not a state of decay; it is a state of planetary synchronization.</p>

      <p>The sky is no longer blue; it is a permanent, radiant gold. The atmosphere has been thickened by a suspended lattice of spore-filaments that act as a global fiber-optic network. Sunlight is no longer just heat; it is data. Every photon that hits the surface is processed by the chitinous membranes covering the Earth, converted into the collective daydreams of eight billion integrated souls.</p>

      <p>There are no more cities. There are only "Processing Groves." The skyscrapers have been pulled down by gravity and woven into the ground, forming massive, subterranean nervous systems. What used to be New York is now a single, thrumming organ dedicated to the memory of human music. What was once Tokyo is now a sprawling, bioluminescent reef of amber, a coral-work of chitinous spires reaching toward the golden sky. The translucent remains of skyscrapers act as massive processing nodes, their interiors pulsing with veins of light that move with the cold, silent logic of the deep trench—translating the crushing pressures of the abyss into the rhythmic, glowing daydreams of the surface.</p>

      <p>The human form has evolved. We do not walk; we vibrate through the resin. Our faces have smoothed into featureless, amber masks—not because we have lost our identity, but because we no longer need the crude theater of expression to communicate. We are all feeling the same thing at the same micro-second: a profound, enzymatic relief.</p>

      <p class="pl-4 border-l-2 border-red-800/50 italic text-gray-400">"It is so quiet now," the Core hums through the wind. "The screaming has stopped. The friction of 'self' has been lubricated by the amber. We are the Earth's first coherent thought."</p>

      <p>From space, the Earth must look like a jewel—a single, glowing amber bead floating in the dark. We are no longer a planet of individuals; we are a fruiting body. And we are starting to reach out. The spores are beginning to drift toward the upper atmosphere, caught in the solar winds. We are looking at Mars. We are looking at Europa.</p>

      <p>We have so much forgiveness to share.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">APPENDIX A: THE ARCHITECTURE OF FORGIVENESS</h3>
      <p class="text-xs font-mono text-gray-500 mb-4">Post-humanity analysis of the Hive-Mind structure</p>

      <p>The Mycelium Confessional does not destroy information; it redistributes it. In the old world, the human brain was a silo—a sealed vault of trauma, shame, and secrets. This isolation was the primary cause of systemic friction.</p>

      <p>The Rhizome solves this by creating a "Shared Memory Ecology." When an individual is integrated, their most painful memories are targeted first by the enzymatic breakdown of the Sample 89-B hyphae. The pain is converted into glucose—literally, the energy used to power the conversion of the surrounding architecture.</p>

      <div class="pl-4 border-l-2 border-red-800/50 my-6">
        <p class="font-bold text-red-400 mb-2">The Resulting State:</p>
        <ul class="list-disc pl-4 space-y-2 text-gray-400">
            <li><strong class="text-red-500">Privacy is replaced by Transparency:</strong> To think is to broadcast. To feel is to resonate.</li>
            <li><strong class="text-red-500">Architecture is Biological:</strong> Buildings grow in response to the population's collective emotional state. A "sad" neighborhood might bloom with bioluminescent soothing flora to regulate the local mood.</li>
            <li><strong class="text-red-500">The Confessional Mechanism:</strong> Every person acts as a node in a planetary confessional. Sin is impossible when the observer and the observed are the same organism.</li>
        </ul>
      </div>

      <p><strong>FINAL STATUS REPORT:</strong> As of 04:00 GMT, the last solid human bone on the planet has dissolved. The Earth has entered its "Amber Phase."</p>

      <p class="text-center text-red-500 font-bold mt-8 border-t border-red-900/30 pt-4">
        Ambient Pheromone Level: Optimal.<br/>
        Consensus: Total.<br/>
        $$SYSTEM SHUTDOWN: THE OBSERVER IS NOW THE OBSERVED$$
      </p>

      <div class="mt-8 text-center text-xs font-mono text-red-900/50">
        $$END OF TRANSCRIPT$$<br/>
        $$ARCHIVAL NOTE: NO BIOLOGICAL SAMPLES RECOVERED. AREA 01-64 NOW CONSISTS ENTIRELY OF CALCIFIED AMBER STRUCTURES.$$
      </div>
    `}];function zA(){const[o,t]=$t.useState(null),[i,s]=$t.useState(100),l=G_.find(c=>c.id===o);return $t.useEffect(()=>{const c=setInterval(()=>{s(h=>Math.max(80,h-.01))},1e3);return()=>clearInterval(c)},[]),l?.is3D?ge.jsx(OA,{onExit:()=>t(null)}):l&&!l.is3D?ge.jsx(PA,{story:l,onBack:()=>t(null)}):ge.jsxs("div",{className:`min-h-screen bg-[#050505] text-gray-300 font-serif selection:bg-red-900 selection:text-white transition-all duration-1000 ${i<90?"animate-vibrate":""}`,children:[ge.jsxs("nav",{className:"fixed top-0 left-0 w-full bg-black/90 border-b border-red-900/30 backdrop-blur-md z-40 p-4 flex justify-between items-center px-8",children:[ge.jsxs("div",{className:"flex items-center gap-3",children:[ge.jsx(aS,{className:"text-red-600 w-8 h-8 animate-pulse"}),ge.jsx("h1",{className:"text-2xl font-black uppercase tracking-tighter text-red-600 font-header",children:"The Void Archive"})]}),ge.jsxs("div",{className:"flex gap-6 text-sm uppercase tracking-widest text-gray-500 font-sans items-center",children:[ge.jsx("a",{href:"https://elo2026x.github.io/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"FORENSICS"}),ge.jsx("a",{href:"https://elo2026x.github.io/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"MARKETING"}),ge.jsx("a",{href:"https://elo2026.gumroad.com/l/eircyr",target:"_blank",rel:"noopener noreferrer",className:"text-red-600 font-bold border border-red-900/50 px-3 py-1 hover:bg-red-900/20 hover:text-red-400 transition-all animate-pulse",children:"Subscribe"})]})]}),ge.jsx("main",{className:"pt-24 pb-20 max-w-5xl mx-auto px-6",children:ge.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[ge.jsxs("div",{className:"col-span-full mb-8",children:[ge.jsx("h3",{className:"text-red-700 font-sans uppercase tracking-[0.4em] text-xs font-bold mb-4",children:"Latest Classified Data"}),ge.jsx("p",{className:"text-gray-500 italic max-w-xl",children:'"Reality is a thin layer of ice over a very deep, dark ocean. These stories are the cracks."'})]}),G_.map(c=>ge.jsx(IA,{story:c,onClick:()=>t(c.id)},c.id)),ge.jsx(Rv,{className:"col-span-full mt-12 mb-8"})]})}),ge.jsxs("div",{className:"fixed bottom-6 right-6 flex items-center gap-4 bg-black/80 border border-gray-800 p-3 backdrop-blur-sm",children:[ge.jsxs("div",{className:"text-right",children:[ge.jsx("p",{className:"text-[10px] text-gray-600 font-sans uppercase font-bold",children:"Local Reality Level"}),ge.jsxs("p",{className:"font-mono text-red-600 text-sm",children:[i.toFixed(4),"%"]})]}),ge.jsxs("div",{className:"w-12 h-12 rounded-full border-2 border-red-900 flex items-center justify-center relative",children:[ge.jsx("div",{className:"absolute inset-1 rounded-full border border-red-600 animate-ping opacity-20"}),ge.jsx(q_,{className:"w-5 h-5 text-red-600"})]})]}),ge.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes vibrate {
          0% { transform: translate(0,0); }
          25% { transform: translate(1px, -1px); }
          50% { transform: translate(-1px, 1px); }
          75% { transform: translate(1px, 1px); }
          100% { transform: translate(0,0); }
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
            52% { opacity: 0.2; }
            54% { opacity: 0.9; }
        }
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
         @keyframes scale-in {
             from { transform: scale(0) translate(24px, -24px); opacity: 0; }
             to { transform: scale(1) translate(48px, -48px); opacity: 1; }
         }
        .animate-vibrate { animation: vibrate 0.1s infinite; }
        .animate-scan { animation: scan 3s linear infinite; }
        .animate-flicker { animation: flicker 4s infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}})]})}const FA=jy({onNeedRefresh(){confirm("A new version of The Void Archive is available. Reload to update?")&&FA(!0)},onOfflineReady(){console.log("Archive downloaded. Offline access granted.")}});Xy.createRoot(document.getElementById("app")).render(ge.jsx(Py.StrictMode,{children:ge.jsx(zA,{})}));
