import{r as g,V as Ie,X as Ue,Y as Ce,Z as Ae,$ as J,a0 as V,a1 as Oe,g as A,d as P,u as Q,a as m,F as de,j as r,l as pe,a2 as U,E as me,s as Y,a3 as Te,a4 as Ne,f as Re,a5 as je,L as $e}from"./index.ed54fe83.js";import{D as ne}from"./Dropdown.73d202b6.js";import{u as T,T as $,B as C,a as he}from"./Input.1cb7b307.js";import{C as z,q as H,A as O,M as ge,B as De,l as Me,m as Fe,w as W,z as Le,D as We}from"./Table.941991f2.js";function Ve(e,n){if(e==null)return{};var t={},a=Object.keys(e),i,s;for(s=0;s<a.length;s++)i=a[s],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function fe(e,n){if(e==null)return{};var t=Ve(e,n),a,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],!(n.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(t[a]=e[a]))}return t}var Be={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},He=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function oe(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(Be[t[1]]||e.charAt(e.length-2)==="/")&&(n.voidElement=!0),n.name.startsWith("!--"))){var a=e.indexOf("-->");return{type:"comment",comment:a!==-1?e.slice(4,a):""}}for(var i=new RegExp(He),s=null;(s=i.exec(e))!==null;)if(s[0].trim())if(s[1]){var l=s[1].trim(),o=[l,""];l.indexOf("=")>-1&&(o=l.split("=")),n.attrs[o[0]]=o[1],i.lastIndex--}else s[2]&&(n.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return n}var Ke=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,qe=/^\s*$/,Qe=Object.create(null);function ve(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(t){var a=[];for(var i in t)a.push(i+'="'+t[i]+'"');return a.length?" "+a.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(ve,"")+"</"+n.name+">";case"comment":return e+"<!--"+n.comment+"-->"}}var Ye={parse:function(e,n){n||(n={}),n.components||(n.components=Qe);var t,a=[],i=[],s=-1,l=!1;if(e.indexOf("<")!==0){var o=e.indexOf("<");a.push({type:"text",content:o===-1?e:e.substring(0,o)})}return e.replace(Ke,function(c,p){if(l){if(c!=="</"+t.name+">")return;l=!1}var f,v=c.charAt(1)!=="/",h=c.startsWith("<!--"),d=p+c.length,S=e.charAt(d);if(h){var j=oe(c);return s<0?(a.push(j),a):((f=i[s]).children.push(j),a)}if(v&&(s++,(t=oe(c)).type==="tag"&&n.components[t.name]&&(t.type="component",l=!0),t.voidElement||l||!S||S==="<"||t.children.push({type:"text",content:e.slice(d,e.indexOf("<",d))}),s===0&&a.push(t),(f=i[s-1])&&f.children.push(t),i[s]=t),(!v||t.voidElement)&&(s>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(s--,t=s===-1?a:i[s]),!l&&S!=="<"&&S)){f=s===-1?a:i[s].children;var x=e.indexOf("<",d),E=e.slice(d,x===-1?void 0:x);qe.test(E)&&(E=" "),(x>-1&&s+f.length>=0||E!==" ")&&f.push({type:"text",content:E})}}),a},stringify:function(e){return e.reduce(function(n,t){return n+ve("",t)},"")}},ze=["format"],Ge=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function ce(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,a)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ce(Object(t),!0).forEach(function(a){Ae(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function ee(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function te(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function Xe(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(function(n){return g.exports.isValidElement(n)})}function B(e){return Array.isArray(e)?e:[e]}function Ze(e,n){var t=w({},n);return t.props=Object.assign(e.props,n.props),t}function be(e,n){if(!e)return"";var t="",a=B(e),i=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return a.forEach(function(s,l){if(typeof s=="string")t+="".concat(s);else if(g.exports.isValidElement(s)){var o=Object.keys(s.props).length,c=i.indexOf(s.type)>-1,p=s.props.children;if(!p&&c&&o===0)t+="<".concat(s.type,"/>");else if(!p&&(!c||o!==0))t+="<".concat(l,"></").concat(l,">");else if(s.props.i18nIsDynamicList)t+="<".concat(l,"></").concat(l,">");else if(c&&o===1&&typeof p=="string")t+="<".concat(s.type,">").concat(p,"</").concat(s.type,">");else{var f=be(p,n);t+="<".concat(l,">").concat(f,"</").concat(l,">")}}else if(s===null)J("Trans: the passed in value is invalid - seems you passed in a null child.");else if(V(s)==="object"){var v=s.format,h=fe(s,ze),d=Object.keys(h);if(d.length===1){var S=v?"".concat(d[0],", ").concat(v):d[0];t+="{{".concat(S,"}}")}else J("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else J("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),t}function Je(e,n,t,a,i,s){if(n==="")return[];var l=a.transKeepBasicHtmlNodesFor||[],o=n&&new RegExp(l.join("|")).test(n);if(!e&&!o)return[n];var c={};function p(x){var E=B(x);E.forEach(function(b){typeof b!="string"&&(ee(b)?p(te(b)):V(b)==="object"&&!g.exports.isValidElement(b)&&Object.assign(c,b))})}p(e);var f=Ye.parse("<0>".concat(n,"</0>")),v=w(w({},c),i);function h(x,E,b){var _=te(x),N=S(_,E.children,b);return Xe(_)&&N.length===0?_:N}function d(x,E,b,_,N){x.dummy&&(x.children=E),b.push(g.exports.cloneElement(x,w(w({},x.props),{},{key:_}),N?void 0:E))}function S(x,E,b){var _=B(x),N=B(E);return N.reduce(function(y,u,I){var M=u.children&&u.children[0]&&u.children[0].content&&t.services.interpolator.interpolate(u.children[0].content,v,t.language);if(u.type==="tag"){var R=_[parseInt(u.name,10)];!R&&b.length===1&&b[0][u.name]&&(R=b[0][u.name]),R||(R={});var k=Object.keys(u.attrs).length!==0?Ze({props:u.attrs},R):R,F=g.exports.isValidElement(k),X=F&&ee(u,!0)&&!u.voidElement,K=o&&V(k)==="object"&&k.dummy&&!F,q=V(e)==="object"&&e!==null&&Object.hasOwnProperty.call(e,u.name);if(typeof k=="string"){var Z=t.services.interpolator.interpolate(k,v,t.language);y.push(Z)}else if(ee(k)||X){var we=h(k,u,b);d(k,we,y,I)}else if(K){var Se=S(_,u.children,b);y.push(g.exports.cloneElement(k,w(w({},k.props),{},{key:I}),Se))}else if(Number.isNaN(parseFloat(u.name)))if(q){var xe=h(k,u,b);d(k,xe,y,I,u.voidElement)}else if(a.transSupportBasicHtmlNodes&&l.indexOf(u.name)>-1)if(u.voidElement)y.push(g.exports.createElement(u.name,{key:"".concat(u.name,"-").concat(I)}));else{var Ee=S(_,u.children,b);y.push(g.exports.createElement(u.name,{key:"".concat(u.name,"-").concat(I)},Ee))}else if(u.voidElement)y.push("<".concat(u.name," />"));else{var Pe=S(_,u.children,b);y.push("<".concat(u.name,">").concat(Pe,"</").concat(u.name,">"))}else if(V(k)==="object"&&!F){var se=u.children[0]?M:null;se&&y.push(se)}else u.children.length===1&&M?y.push(g.exports.cloneElement(k,w(w({},k.props),{},{key:I}),M)):y.push(g.exports.cloneElement(k,w(w({},k.props),{},{key:I})))}else if(u.type==="text"){var ie=a.transWrapTextNodes,le=s?a.unescape(t.services.interpolator.interpolate(u.content,v,t.language)):t.services.interpolator.interpolate(u.content,v,t.language);ie?y.push(g.exports.createElement(ie,{key:"".concat(u.name,"-").concat(I)},le)):y.push(le)}return y},[])}var j=S([{dummy:!0,children:e||[]}],f,B(e||[]));return te(j[0])}function ye(e){var n=e.children,t=e.count,a=e.parent,i=e.i18nKey,s=e.context,l=e.tOptions,o=l===void 0?{}:l,c=e.values,p=e.defaults,f=e.components,v=e.ns,h=e.i18n,d=e.t,S=e.shouldUnescape,j=fe(e,Ge),x=g.exports.useContext(Ie)||{},E=x.i18n,b=x.defaultNS,_=h||E||Oe();if(!_)return Ue("You will need to pass in an i18next instance by using i18nextReactModule"),n;var N=d||_.t.bind(_)||function(Z){return Z};s&&(o.context=s);var y=w(w({},Ce()),_.options&&_.options.react),u=v||N.ns||b||_.options&&_.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"];var I=p||be(n,y)||y.transEmptyNodeValue||i,M=y.hashTransKey,R=i||(M?M(I):I),k=c?o.interpolation:{interpolation:w(w({},o.interpolation),{},{prefix:"#$?",suffix:"?$#"})},F=w(w(w(w({},o),{},{count:t},c),k),{},{defaultValue:I,ns:u}),X=R?N(R,F):I,K=Je(f||n,X,_,y,F,S),q=a!==void 0?a:y.defaultTransParent;return q?g.exports.createElement(q,j,K):K}const et=A`
  query scanIntervalQuery {
    siteInfo {
      periodicScanInterval
    }
  }
`,tt=A`
  mutation changeScanIntervalMutation($interval: Int!) {
    setPeriodicScanInterval(interval: $interval)
  }
`,re=[{value:"second",multiplier:1},{value:"minute",multiplier:60},{value:"hour",multiplier:60*60},{value:"day",multiplier:60*60*24},{value:"month",multiplier:60*60*24*30}],_e=({value:e,unit:n})=>{var t;return e*((t=re.find(a=>a.value==n))==null?void 0:t.multiplier)},nt=({value:e,unit:n})=>{if(e==0)return{unit:"second",value:0};const t=_e({value:e,unit:n});let a=re[0];for(const i of re)if(t/i.multiplier>=1&&t/i.multiplier%1==0)a=i;else break;return{unit:a.value,value:t/a.multiplier}},rt=()=>{const{t:e}=P(),[n,t]=g.exports.useState(!1),[a,i]=g.exports.useState({value:0,unit:"second"}),s=g.exports.useRef(null),l=Q(et,{onCompleted(h){const d=h.siteInfo.periodicScanInterval;d==0?i({unit:"second",value:0}):i(nt({unit:"second",value:d})),t(d>0)}}),[o,{loading:c}]=T(tt),p=h=>{t(h),f(h?a:{value:0,unit:"second"})},f=h=>{const d=_e(h);s.current!=d&&(o({variables:{interval:d}}),s.current=d)},v=[{label:e("settings.periodic_scanner.interval_unit.seconds","Seconds"),value:"second"},{label:e("settings.periodic_scanner.interval_unit.minutes","Minutes"),value:"minute"},{label:e("settings.periodic_scanner.interval_unit.hour","Hour"),value:"hour"},{label:e("settings.periodic_scanner.interval_unit.days","Days"),value:"day"},{label:e("settings.periodic_scanner.interval_unit.months","Months"),value:"month"}];return m(de,{children:[r("h3",{className:"font-semibold text-lg mt-4 mb-2",children:e("settings.periodic_scanner.title","Periodic scanner")}),r(z,{label:e("settings.periodic_scanner.checkbox_label","Enable periodic scanner"),disabled:l.loading,checked:n,onChange:h=>p(h.target.checked||!1)}),m("div",{className:"mt-4",children:[m("label",{htmlFor:"periodic_scan_field",children:[r(L,{children:e("settings.periodic_scanner.field.label","Periodic scan interval")}),r(D,{children:e("settings.periodic_scanner.field.description","How often the scanner should perform automatic scans of all users")})]}),m("div",{className:"flex gap-2",children:[r($,{id:"periodic_scan_field","aria-label":"Interval value",disabled:!n,value:a.value,onChange:h=>{i(d=>({value:Number(h.target.value),unit:d.unit}))},action:()=>{f(a)}}),r(ne,{"aria-label":"Interval unit",disabled:!n,items:v,selected:a.unit,setSelected:h=>{const d={...a,unit:h};i(d),f(d)}})]})]}),r(pe,{active:l.loading||c,size:"small",style:{marginLeft:16}})]})},at=A`
  query concurrentWorkersQuery {
    siteInfo {
      concurrentWorkers
    }
  }
`,st=A`
  mutation setConcurrentWorkers($workers: Int!) {
    setScannerConcurrentWorkers(workers: $workers)
  }
`,it=()=>{const{t:e}=P(),n=g.exports.useRef(null),[t,a]=g.exports.useState(0),i=Q(at,{onCompleted(c){a(c.siteInfo.concurrentWorkers),n.current=c.siteInfo.concurrentWorkers}}),[s,l]=T(st),o=c=>{n.current!=c&&(n.current=c,s({variables:{workers:c}}))};return m("div",{children:[m("label",{htmlFor:"scanner_concurrent_workers_field",children:[r(L,{children:e("settings.concurrent_workers.title","Scanner concurrent workers")}),r(D,{children:e("settings.concurrent_workers.description","The maximum amount of scanner jobs that is allowed to run at once")})]}),r($,{disabled:i.loading||l.loading,type:"number",min:"1",max:"24",id:"scanner_concurrent_workers_field",value:t,onChange:c=>{a(parseInt(c.target.value))},onBlur:()=>o(t),onKeyDown:c=>c.key=="Enter"&&o(t)})]})},lt=A`
  mutation scanAllMutation {
    scanAll {
      success
      message
    }
  }
`,ot=()=>{const{t:e}=P(),[n,{called:t}]=T(lt);return m("div",{children:[r(G,{nospace:!0,children:e("settings.scanner.title","Scanner")}),r(D,{children:e("settings.scanner.description","Will scan all users for new or updated media")}),r(C,{onClick:()=>{n()},disabled:t,children:e("settings.scanner.scan_all_users","Scan all users")}),r(rt,{}),r(it,{})]})},ct=[{key:1,label:"English",flag:"uk",value:U.English},{key:2,label:"Fran\xE7ais",flag:"fr",value:U.French},{key:3,label:"Svenska",flag:"se",value:U.Swedish},{key:4,label:"Dansk",flag:"dk",value:U.Danish},{key:5,label:"Espa\xF1ol",flag:"es",value:U.Spanish},{key:6,label:"polski",flag:"pl",value:U.Polish},{key:7,label:"Italiano",flag:"it",value:U.Italian},{key:8,label:"Deutsch",flag:"de",value:U.German},{key:9,label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",flag:"ru",value:U.Russian},{key:10,label:"\u7E41\u9AD4\u4E2D\u6587",flag:"zh-HK",value:U.TraditionalChinese},{key:11,label:"\u7B80\u4F53\u4E2D\u6587",flag:"zh-CN",value:U.SimplifiedChinese},{key:12,label:"Portugu\xEAs",flag:"pt",value:U.Portuguese},{key:13,label:"Euskara",flag:"eu",value:U.Basque}],ut=e=>[{key:1,label:e("settings.user_preferences.theme.auto.label","Same as system"),value:"auto"},{key:2,label:e("settings.user_preferences.theme.light.label","Light"),value:"light"},{key:2,label:e("settings.user_preferences.theme.dark.label","Dark"),value:"dark"}],dt=me`
  mutation changeUserPreferences($language: String) {
    changeUserPreferences(language: $language) {
      id
      language
    }
  }
`,pt=me`
  query myUserPreferences {
    myUserPreferences {
      id
      language
    }
  }
`,mt=()=>{const{t:e}=P();return r(C,{className:"mb-4",onClick:()=>{location.href="/logout"},children:e("settings.logout","Log out")})},ht=Y.div`
  margin-bottom: 24px;
`,gt=()=>{const{t:e}=P(),[n,t]=g.exports.useState(Te()),a=p=>{Ne(p),t(p)},{data:i}=Q(pt),[s,{loading:l,error:o}]=T(dt),c=g.exports.useMemo(()=>ct.sort((p,f)=>p.label.localeCompare(f.label)),[]);return o?r("div",{children:o.message}):m(ht,{children:[r(G,{nospace:!0,children:e("settings.user_preferences.title","User preferences")}),r(mt,{}),m("label",{htmlFor:"user_pref_change_language_field",children:[r(L,{children:e("settings.user_preferences.change_language.label","Website language")}),r(D,{children:e("settings.user_preferences.change_language.description","Change website language specific for this user")})]}),r(ne,{id:"user_pref_change_language_field",placeholder:e("settings.user_preferences.language_selector.placeholder","Select language"),items:c,setSelected:p=>{s({variables:{language:p}})},selected:(i==null?void 0:i.myUserPreferences.language)||void 0,disabled:l}),m("label",{htmlFor:"user_pref_change_theme_field",children:[r(L,{children:e("settings.user_preferences.theme.title","Theme preferences")}),r(D,{children:e("settings.user_preferences.theme.description","Change the appearance of the website")})]}),r(ne,{id:"user_pref_change_theme_field",items:ut(e),setSelected:a,selected:n})]})},ft=A`
  mutation createUser($username: String!, $admin: Boolean!) {
    createUser(username: $username, admin: $admin) {
      id
      username
      admin
      __typename
    }
  }
`,ke=A`
  mutation userAddRootPath($id: ID!, $rootPath: String!) {
    userAddRootPath(id: $id, rootPath: $rootPath) {
      id
    }
  }
`,ue={username:"",rootPath:"",admin:!1,userAdded:!1},vt=({setShow:e,show:n,onUserAdded:t})=>{const{t:a}=P(),[i,s]=g.exports.useState(ue),l=()=>{s(ue),t()},[o,{loading:c}]=T(ke,{onCompleted:()=>{l()},onError:()=>{l()}}),[p,{loading:f}]=T(ft,{onCompleted:({createUser:{id:d}})=>{i.rootPath?o({variables:{id:d,rootPath:i.rootPath}}):l()}}),v=c||f;function h(d,S){s({...i,[S]:d.target.value})}return n?m(H,{children:[r(O,{children:r($,{placeholder:a("login_page.field.username","Username"),value:i.username,onChange:d=>h(d,"username")})}),r(O,{children:r($,{placeholder:a("login_page.initial_setup.field.photo_path.placeholder","/path/to/photos"),value:i.rootPath,onChange:d=>h(d,"rootPath")})}),r(O,{children:r(z,{label:"Admin",checked:i.admin,onChange:d=>{s({...i,admin:d.target.checked||!1})}})}),r(O,{children:m(he,{children:[r(C,{variant:"negative",onClick:()=>e(!1),children:a("general.action.cancel","Cancel")}),r(C,{type:"submit",disabled:v,variant:"positive",onClick:()=>{p({variables:{username:i.username,admin:i.admin}})},children:a("settings.users.add_user.submit","Add user")})]})})]}):null},bt=A`
  mutation userRemoveAlbumPathMutation($userId: ID!, $albumId: ID!) {
    userRemoveRootAlbum(userId: $userId, albumId: $albumId) {
      id
    }
  }
`,yt=({album:e,user:n})=>{const{t}=P(),[a,{loading:i}]=T(bt,{refetchQueries:[{query:ae}]});return m("li",{className:"flex justify-between",children:[r("span",{children:e.filePath}),r(C,{variant:"negative",disabled:i,onClick:()=>a({variables:{userId:n.id,albumId:e.id}}),children:t("general.action.remove","Remove")})]})},_t=({userID:e})=>{const{t:n}=P(),[t,a]=g.exports.useState(""),[i,{loading:s}]=T(ke,{refetchQueries:[{query:ae}]});return m("li",{className:"flex gap-1 mt-2",children:[r($,{value:t,onChange:l=>a(l.target.value),disabled:s}),r(C,{variant:"positive",disabled:s,onClick:()=>{a(""),i({variables:{id:e,rootPath:t}})},children:n("general.action.add","Add")})]})},kt=({user:e})=>{const n=e.rootAlbums.map(t=>r(yt,{album:t,user:e},t.id));return m("ul",{children:[n,r(_t,{userID:e.id})]})},wt=({user:e,state:n,setState:t,updateUser:a,updateUserLoading:i})=>{const{t:s}=P();function l(o,c){t(p=>({...p,[c]:o.target.value}))}return m(H,{children:[r(O,{children:r($,{style:{width:"100%"},placeholder:e.username,value:n.username,onChange:o=>l(o,"username")})}),r(O,{children:r(kt,{user:e})}),r(O,{children:r(z,{label:"Admin",checked:n.admin,onChange:o=>{t(c=>({...c,admin:o.target.checked||!1}))}})}),r(O,{children:m(he,{children:[r(C,{variant:"negative",onClick:()=>t(o=>({...o,...o.oldState})),children:s("general.action.cancel","Cancel")}),r(C,{disabled:i,variant:"positive",onClick:()=>a({variables:{id:e.id,username:n.username,admin:n.admin}}),children:s("general.action.save","Save")})]})})]})},St=A`
  mutation changeUserPassword($userId: ID!, $password: String!) {
    updateUser(id: $userId, password: $password) {
      id
    }
  }
`,xt=({onClose:e,user:n,open:t})=>{const{t:a}=P(),[i,s]=g.exports.useState(""),[l]=T(St,{onCompleted:()=>{e&&e()}});return r(ge,{open:t,onClose:e,title:a("settings.users.password_reset.title","Change password"),description:m(ye,{t:a,i18nKey:"settings.users.password_reset.description",children:["Change password for ",r("b",{children:n.username})]}),actions:[{key:"cancel",label:a("general.action.cancel","Cancel"),onClick:()=>e&&e()},{key:"change_password",label:a("settings.users.password_reset.form.submit","Change password"),variant:"positive",onClick:()=>{l({variables:{userId:n.id,password:i}})}}],children:r("div",{className:"w-[360px]",children:r($,{label:a("settings.users.password_reset.form.label","New password"),placeholder:a("settings.users.password_reset.form.placeholder","password"),onChange:o=>s(o.target.value),type:"password"})})})},Et=({user:e,setState:n,scanUser:t,deleteUser:a,setChangePassword:i,setConfirmDelete:s,scanUserCalled:l,showChangePassword:o,showConfirmDelete:c})=>{const{t:p}=P(),f=r("ul",{children:e.rootAlbums.map(v=>r("li",{children:v.filePath},v.id))});return m(H,{children:[r(O,{children:e.username}),r(O,{children:f}),r(O,{children:r(z,{label:"Admin",disabled:!0,checked:e.admin})}),r(O,{children:m("div",{className:"flex gap-1",children:[r(C,{onClick:()=>{n(v=>{const h={...v};return delete h.oldState,{...v,editing:!0,oldState:h}})},children:p("settings.users.table.row.action.edit","Edit")}),r(C,{disabled:l,onClick:()=>t({variables:{userId:e.id}}),children:p("settings.users.table.row.action.scan","Scan")}),r(C,{onClick:()=>i(!0),children:p("settings.users.table.row.action.change_password","Change password")}),r(xt,{user:e,open:o,onClose:()=>i(!1)}),r(C,{variant:"negative",onClick:()=>{s(!0)},children:p("settings.users.table.row.action.delete","Delete")}),r(ge,{open:c,onClose:()=>s(!1),title:p("settings.users.confirm_delete_user.title","Delete user"),actions:[{key:"cancel",label:p("general.action.cancel","Cancel"),onClick:()=>s(!1)},{key:"delete",label:p("settings.users.confirm_delete_user.action","Delete {{user}}",{user:e.username}),onClick:()=>{s(!1),a({variables:{id:e.id}})},variant:"negative"}],description:m(ye,{t:p,i18nKey:"settings.users.confirm_delete_user.description",children:[m("p",{children:["Are you sure, you want to delete ",r("b",{children:e.username}),"?"]}),r("p",{children:"This action cannot be undone"})]})})]})})]})},Pt=A`
  mutation updateUser($id: ID!, $username: String, $admin: Boolean) {
    updateUser(id: $id, username: $username, admin: $admin) {
      id
      username
      admin
    }
  }
`,It=A`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      username
    }
  }
`,Ut=A`
  mutation scanUser($userId: ID!) {
    scanUser(userId: $userId) {
      success
    }
  }
`,Ct=({user:e,refetchUsers:n})=>{const[t,a]=g.exports.useState({...e,editing:!1,newRootPath:""}),[i,s]=g.exports.useState(!1),[l,o]=g.exports.useState(!1),[c,{loading:p}]=T(Pt,{onCompleted:S=>{a(j=>({...j,...S.updateUser,editing:!1})),n()}}),[f]=T(It,{onCompleted:()=>{n()}}),[v,{called:h}]=T(Ut,{onCompleted:()=>{n()}}),d={user:e,state:t,setState:a,scanUser:v,updateUser:c,updateUserLoading:p,deleteUser:f,setChangePassword:o,setConfirmDelete:s,scanUserCalled:h,showChangePassword:l,showConfirmDelete:i};return t.editing?r(wt,{...d}):r(Et,{...d})},ae=A`
  query settingsUsersQuery {
    user {
      id
      username
      admin
      rootAlbums {
        id
        filePath
      }
    }
  }
`,At=()=>{const{t:e}=P(),[n,t]=g.exports.useState(!1),{loading:a,error:i,data:s,refetch:l}=Q(ae);if(i)return r("div",{children:`Users table error: ${i.message}`});let o=[];return s!=null&&s.user&&(o=s.user.map(c=>r(Ct,{user:c,refetchUsers:l},c.id))),m("div",{children:[r(G,{children:e("settings.users.title","Users")}),r(pe,{active:a}),r(De,{children:m(Me,{className:"w-full max-w-6xl",children:[r(Fe,{children:m(H,{children:[r(W,{children:e("settings.users.table.column_names.username","Username")}),r(W,{children:e("settings.users.table.column_names.photo_path","Photo path")}),r(W,{children:e("settings.users.table.column_names.capabilities","Capabilities")}),r(W,{className:"w-0 whitespace-nowrap",children:e("settings.users.table.column_names.action","Action")})]})}),m(Le,{children:[o,r(vt,{show:n,setShow:t,onUserAdded:()=>{t(!1),l()}})]}),r(We,{children:r(H,{children:r(W,{colSpan:4,className:"text-right",children:r(C,{variant:"positive",background:"white",disabled:n,onClick:()=>t(!0),children:e("settings.users.table.new_user","New user")})})})})]})})]})},Ot="undefined",Tt="undefined";let Nt;const Rt=Y.div`
  margin-bottom: 24px;
`,jt=()=>{const{t:e}=P();return m(Rt,{children:[r(G,{children:e("settings.version_info.title","Photoview Version")}),r(L,{children:e("settings.version_info.version_title","Release Version")}),m(D,{children:[Ot," (",Nt,")"]}),r(L,{children:e("settings.version_info.build_date_title","Build date")}),r(D,{children:Tt})]})},G=({children:e,nospace:n})=>r("h2",{className:Re("pb-1 border-b border-gray-200 dark:border-dark-border text-xl mb-5",!n&&"mt-6"),children:e}),L=Y.h3.attrs({className:"font-semibold mt-4"})``,D=Y.p.attrs({className:"text-sm mb-2"})``,Lt=()=>{const{t:e}=P(),n=je();return m($e,{title:e("title.settings","Settings"),children:[r(gt,{}),n&&m(de,{children:[r(ot,{}),r(At,{})]}),r(jt,{})]})};export{D as InputLabelDescription,L as InputLabelTitle,G as SectionTitle,Lt as default};