"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[6101],{67871:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(1413),a=t(45987),i=t(65406),s=t.n(i),o=t(57829),l=t(61113),c=t(47723),d=t(29466),u=t(3404),m=t(46417),x=["links","activeLast"];function p(e){var n=e.links,t=e.activeLast,i=void 0!==t&&t,s=(0,a.Z)(e,x),c=n[n.length-1].name,d=n.map((function(e){return(0,m.jsx)(h,{link:e},e.name)})),p=n.map((function(e){return(0,m.jsx)("div",{children:e.name!==c?(0,m.jsx)(h,{link:e}):(0,m.jsx)(l.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:c})},e.name)}));return(0,m.jsx)(u.Z,(0,r.Z)((0,r.Z)({separator:(0,m.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},s),{},{children:i?d:p}))}function h(e){var n=e.link,t=n.href,r=n.name,a=n.icon;return(0,m.jsxs)(c.Z,{variant:"body2",component:d.rU,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&(0,m.jsx)(o.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),r]},r)}var v=["links","action","heading","moreLink","sx"];function f(e){var n=e.links,t=e.action,i=e.heading,d=e.moreLink,u=void 0===d?[]:d,x=e.sx,h=(0,a.Z)(e,v);return(0,m.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},x),children:[(0,m.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,m.jsxs)(o.Z,{sx:{flexGrow:1},children:[(0,m.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,m.jsx)(p,(0,r.Z)({links:n},h))]}),t&&(0,m.jsx)(o.Z,{sx:{flexShrink:0},children:t})]}),(0,m.jsx)(o.Z,{sx:{mt:2},children:s()(u)?(0,m.jsx)(c.Z,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return(0,m.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},80648:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(29439),a=t(47313);function i(e){var n=(0,a.useState)(e||""),t=(0,r.Z)(n,2),i=t[0],s=t[1];return{currentTab:i,onChangeTab:function(e,n){s(n)},setCurrentTab:s}}},16756:function(e,n,t){t.r(n),t.d(n,{default:function(){return oe}});var r=t(22650),a=t(43265),i=t(5297),s=t(65280),o=t(57829),l=t(48175),c=t(80648),d=t(11338),u=t(95597),m=t(71361),x=t(42593),p=t(67871),h=t(29439),v=t(47313),f=t(9019),j=t(35898),Z=t(73428),b=t(61113),g=t(69099),w=t(82295),y=t(46417);function k(e){var n=e.addressBook;return(0,y.jsx)(Z.Z,{sx:{p:3},children:(0,y.jsxs)(j.Z,{spacing:3,alignItems:"flex-start",children:[(0,y.jsx)(b.Z,{variant:"overline",sx:{color:"text.secondary"},children:"Billing Info"}),n.map((function(e){return(0,y.jsxs)(w.Z,{sx:{p:3,width:1,bgcolor:"background.neutral"},children:[(0,y.jsx)(b.Z,{variant:"subtitle1",gutterBottom:!0,children:e.name}),(0,y.jsxs)(b.Z,{variant:"body2",gutterBottom:!0,children:[(0,y.jsx)(b.Z,{variant:"body2",component:"span",sx:{color:"text.secondary"},children:"Address: \xa0"}),"".concat(e.street,", ").concat(e.city,", ").concat(e.state,", ").concat(e.country," ").concat(e.zipCode)]}),(0,y.jsxs)(b.Z,{variant:"body2",gutterBottom:!0,children:[(0,y.jsx)(b.Z,{variant:"body2",component:"span",sx:{color:"text.secondary"},children:"Phone: \xa0"}),e.phone]}),(0,y.jsxs)(o.Z,{sx:{mt:1},children:[(0,y.jsx)(g.Z,{color:"error",size:"small",startIcon:(0,y.jsx)(x.Z,{icon:"eva:trash-2-outline"}),onClick:function(){},sx:{mr:1},children:"Delete"}),(0,y.jsx)(g.Z,{size:"small",startIcon:(0,y.jsx)(x.Z,{icon:"eva:edit-fill"}),onClick:function(){},children:"Edit"})]})]},e.id)})),(0,y.jsx)(g.Z,{size:"small",startIcon:(0,y.jsx)(x.Z,{icon:"eva:plus-fill"}),children:"Add new address"})]})})}var C=t(47131),S=t(65033),P=t(15082),_=t(32703),L=t(3484);function A(e){var n=e.cards,t=e.isOpen,r=e.onOpen,a=e.onCancel;return(0,y.jsxs)(Z.Z,{sx:{p:3},children:[(0,y.jsx)(b.Z,{variant:"overline",sx:{mb:3,display:"block",color:"text.secondary"},children:"Payment Method"}),(0,y.jsx)(j.Z,{spacing:2,direction:{xs:"column",md:"row"},children:n.map((function(e){return(0,y.jsxs)(w.Z,{sx:{p:3,width:1,position:"relative",border:function(e){return"solid 1px ".concat(e.palette.grey[50032])}},children:[(0,y.jsx)(L.Z,{alt:"icon",src:"master_card"===e.cardType?"https://minimal-assets-api.vercel.app/assets/icons/ic_mastercard.svg":"https://minimal-assets-api.vercel.app/assets/icons/ic_visa.svg",sx:{mb:1,maxWidth:36}}),(0,y.jsx)(b.Z,{variant:"subtitle2",children:e.cardNumber}),(0,y.jsx)(C.Z,{sx:{top:8,right:8,position:"absolute"},children:(0,y.jsx)(x.Z,{icon:"eva:more-vertical-fill",width:20,height:20})})]},e.id)}))}),(0,y.jsx)(o.Z,{sx:{mt:3},children:(0,y.jsx)(g.Z,{size:"small",startIcon:(0,y.jsx)(x.Z,{icon:"eva:plus-fill"}),onClick:r,children:"Add new card"})}),(0,y.jsx)(S.Z,{in:t,children:(0,y.jsx)(o.Z,{sx:{padding:3,marginTop:3,borderRadius:1,bgcolor:"background.neutral"},children:(0,y.jsxs)(j.Z,{spacing:3,children:[(0,y.jsx)(b.Z,{variant:"subtitle1",children:"Add new card"}),(0,y.jsxs)(j.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,y.jsx)(P.Z,{fullWidth:!0,label:"Name on card"}),(0,y.jsx)(P.Z,{fullWidth:!0,label:"Card number"})]}),(0,y.jsxs)(j.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,y.jsx)(P.Z,{fullWidth:!0,label:"Expiration date",placeholder:"MM/YY"}),(0,y.jsx)(P.Z,{fullWidth:!0,label:"Cvv"})]}),(0,y.jsxs)(j.Z,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[(0,y.jsx)(g.Z,{color:"inherit",variant:"outlined",onClick:a,children:"Cancel"}),(0,y.jsx)(_.Z,{type:"submit",variant:"contained",onClick:a,children:"Save Change"})]})]})})})]})}var I=t(29466),R=t(47723),B=t(61484),z=t(76221);function N(e){var n=e.invoices;return(0,y.jsxs)(j.Z,{spacing:3,alignItems:"flex-end",children:[(0,y.jsx)(b.Z,{variant:"subtitle1",sx:{width:1},children:"Invoice History"}),(0,y.jsx)(j.Z,{spacing:2,sx:{width:1},children:n.map((function(e){return(0,y.jsxs)(j.Z,{direction:"row",justifyContent:"space-between",sx:{width:1},children:[(0,y.jsx)(b.Z,{variant:"body2",sx:{minWidth:160},children:(0,B.Mu)(e.createdAt)}),(0,y.jsx)(b.Z,{variant:"body2",children:(0,z.e_)(e.price)}),(0,y.jsx)(R.Z,{component:I.rU,to:"#",children:"PDF"})]},e.id)}))}),(0,y.jsx)(g.Z,{size:"small",endIcon:(0,y.jsx)(x.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"All invoices"})]})}function T(e){var n=e.cards,t=e.addressBook,r=e.invoices,a=(0,v.useState)(!1),i=(0,h.Z)(a,2),s=i[0],l=i[1];return(0,y.jsxs)(f.ZP,{container:!0,spacing:5,children:[(0,y.jsx)(f.ZP,{item:!0,xs:12,md:8,children:(0,y.jsxs)(j.Z,{spacing:3,children:[(0,y.jsxs)(Z.Z,{sx:{p:3},children:[(0,y.jsx)(b.Z,{variant:"overline",sx:{mb:3,display:"block",color:"text.secondary"},children:"Your Plan"}),(0,y.jsx)(b.Z,{variant:"h4",children:"Premium"}),(0,y.jsxs)(o.Z,{sx:{mt:{xs:2,sm:0},position:{sm:"absolute"},top:{sm:24},right:{sm:24}},children:[(0,y.jsx)(g.Z,{size:"small",color:"inherit",variant:"outlined",sx:{mr:1},children:"Cancel plan"}),(0,y.jsx)(g.Z,{size:"small",variant:"outlined",children:"Upgrade plan"})]})]}),(0,y.jsx)(A,{cards:n,isOpen:s,onOpen:function(){return l(!s)},onCancel:function(){return l(!1)}}),(0,y.jsx)(k,{addressBook:t})]})}),(0,y.jsx)(f.ZP,{item:!0,xs:12,md:4,children:(0,y.jsx)(N,{invoices:r})})]})}var M=t(15861),q=t(87757),U=t.n(q),W=t(28089),O=t(58908),V=t(1432),D=t(75627),E=t(40844),H=t(85077);function F(){var e=(0,O.Ds)().enqueueSnackbar,n=W.Ry().shape({current_password:W.Z_().required("Old Password is required"),password:W.Z_().min(6,"Password must be at least 6 characters").required("New Password is required"),password_confirmation:W.Z_().oneOf([W.iH("password"),null],"Passwords must match")}),t=(0,D.cI)({resolver:(0,V.X)(n),defaultValues:{current_password:"",password:"",password_confirmation:""}}),r=t.reset,a=t.handleSubmit,i=t.formState.isSubmitting,s=function(){var n=(0,M.Z)(U().mark((function n(t){return U().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:H.Z.post("/user/change-password",{current_password:t.current_password,password:t.password,password_confirmation:t.password_confirmation}).then((function(n){200===n.data.code?e(n.data.message):e(n.data.message,{variant:"error"})})),r(),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,y.jsx)(Z.Z,{sx:{p:3},children:(0,y.jsx)(E.RV,{methods:t,onSubmit:a(s),children:(0,y.jsxs)(j.Z,{spacing:3,alignItems:"flex-end",children:[(0,y.jsx)(E.au,{name:"current_password",type:"password",label:"Old Password"}),(0,y.jsx)(E.au,{name:"password",type:"password",label:"New Password"}),(0,y.jsx)(E.au,{name:"password_confirmation",type:"password",label:"Confirm New Password"}),(0,y.jsx)(_.Z,{type:"submit",variant:"contained",loading:i,children:"Save Changes"})]})})})}var G=t(54285);function X(){var e=(0,O.Ds)().enqueueSnackbar,n=(0,G.Z)().user,t=W.Ry().shape({firstname:W.Z_().required("First Name is required"),lastname:W.Z_().required("Last Name is required")}),r={firstname:(null===n||void 0===n?void 0:n.firstname)||"",lastname:(null===n||void 0===n?void 0:n.lastname)||"",email:(null===n||void 0===n?void 0:n.email)||"",photoURL:(null===n||void 0===n?void 0:n.photoURL)||"",phone:(null===n||void 0===n?void 0:n.phone)||"",country:(null===n||void 0===n?void 0:n.address.country)||"",address:(null===n||void 0===n?void 0:n.address.address)||"",state:(null===n||void 0===n?void 0:n.address.state)||"",city:(null===n||void 0===n?void 0:n.address.city)||"",zip:(null===n||void 0===n?void 0:n.address.zip)||"",about:(null===n||void 0===n?void 0:n.about)||"",isPublic:(null===n||void 0===n?void 0:n.isPublic)||!1},a=(0,D.cI)({resolver:(0,V.X)(t),defaultValues:r}),i=a.setValue,s=a.handleSubmit,l=a.formState.isSubmitting,c=function(){var n=(0,M.Z)(U().mark((function n(t){return U().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,{headers:{"content-type":"multipart/form-data"}},n.next=4,new Promise((function(e){return setTimeout(e,500)}));case 4:H.Z.post("/user/profile-setting",{firstname:t.firstname,lastname:t.lastname,about:t.about,country:t.country,address:t.address,city:t.city,state:t.state,zip:t.zip,image:t.image}).then((function(n){console.log(n),console.log(n.data),e(n.data.message)})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=(0,v.useCallback)((function(e){var n=e[0];n&&i("photoURL",Object.assign(n,{preview:URL.createObjectURL(n)}))}),[i]);return(0,y.jsx)(E.RV,{methods:a,onSubmit:s(c),children:(0,y.jsxs)(f.ZP,{container:!0,spacing:3,children:[(0,y.jsx)(f.ZP,{item:!0,xs:12,md:4,children:(0,y.jsxs)(Z.Z,{sx:{py:10,px:3,textAlign:"center"},children:[(0,y.jsx)(E.sX,{name:"image",accept:"image/*",maxSize:3145728,onDrop:d,helperText:(0,y.jsxs)(b.Z,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",(0,y.jsx)("br",{})," max size of ",(0,z.oe)(3145728)]})}),(0,y.jsx)(E._e,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}})]})}),(0,y.jsx)(f.ZP,{item:!0,xs:12,md:8,children:(0,y.jsxs)(Z.Z,{sx:{p:3},children:[(0,y.jsxs)(o.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,y.jsx)(E.au,{name:"firstname",label:"Name"}),(0,y.jsx)(E.au,{name:"lastname",label:"Name"}),(0,y.jsx)(E.au,{name:"email",disabled:!0,focus:!0,label:"Email Address"}),(0,y.jsx)(E.au,{name:"mobile",disabled:!0,focus:!0,label:"Phone Number"}),(0,y.jsxs)(E.Cc,{name:"country",label:"Country",placeholder:"Country",children:[(0,y.jsx)("option",{value:""}),u.hW.map((function(e){return(0,y.jsx)("option",{value:e.label,children:e.label},e.code)}))]}),(0,y.jsx)(E.au,{name:"address",label:"Address"}),(0,y.jsx)(E.au,{name:"state",label:"State/Region"}),(0,y.jsx)(E.au,{name:"city",label:"City"}),(0,y.jsx)(E.au,{name:"zip",label:"Zip/Code"})]}),(0,y.jsxs)(j.Z,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[(0,y.jsx)(E.au,{name:"about",multiline:!0,rows:4,label:"About"}),(0,y.jsx)(_.Z,{type:"submit",variant:"contained",loading:l,children:"Save Changes"})]})]})})]})})}var Y=[{value:"activityComments",label:"Email me when someone comments onmy article"},{value:"activityAnswers",label:"Email me when someone answers on my form"},{value:"activityFollows",label:"Email me hen someone follows me"}],K=[{value:"applicationNews",label:"News and announcements"},{value:"applicationProduct",label:"Weekly product updates"},{value:"applicationBlog",label:"Weekly blog digest"}],J=!0,Q=!0,$=!1,ee=!0,ne=!1,te=!1;function re(){var e=(0,O.Ds)().enqueueSnackbar,n={activityComments:J,activityAnswers:Q,activityFollows:$,applicationNews:ee,applicationProduct:ne,applicationBlog:te},t=(0,D.cI)({defaultValues:n}),r=t.handleSubmit,a=t.formState.isSubmitting,i=function(){var n=(0,M.Z)(U().mark((function n(){return U().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}();return(0,y.jsx)(Z.Z,{sx:{p:3},children:(0,y.jsx)(E.RV,{methods:t,onSubmit:r(i),children:(0,y.jsxs)(j.Z,{spacing:3,alignItems:"flex-end",children:[(0,y.jsxs)(j.Z,{spacing:2,sx:{width:1},children:[(0,y.jsx)(b.Z,{variant:"overline",sx:{color:"text.secondary"},children:"Activity"}),(0,y.jsx)(j.Z,{spacing:1,children:Y.map((function(e){return(0,y.jsx)(E._e,{name:e.value,label:e.label,sx:{m:0}},e.value)}))})]}),(0,y.jsxs)(j.Z,{spacing:2,sx:{width:1},children:[(0,y.jsx)(b.Z,{variant:"overline",sx:{color:"text.secondary"},children:"Application"}),(0,y.jsx)(j.Z,{spacing:1,children:K.map((function(e){return(0,y.jsx)(E._e,{name:e.value,label:e.label,sx:{m:0}},e.value)}))})]}),(0,y.jsx)(_.Z,{type:"submit",variant:"contained",loading:a,children:"Save Changes"})]})})})}var ae=t(41727),ie=[{value:"facebookLink",icon:(0,y.jsx)(x.Z,{icon:"eva:facebook-fill",width:24,height:24})},{value:"instagramLink",icon:(0,y.jsx)(x.Z,{icon:"ant-design:instagram-filled",width:24,height:24})},{value:"linkedinLink",icon:(0,y.jsx)(x.Z,{icon:"eva:linkedin-fill",width:24,height:24})},{value:"twitterLink",icon:(0,y.jsx)(x.Z,{icon:"eva:twitter-fill",width:24,height:24})}];function se(e){var n=e.myProfile,t=(0,O.Ds)().enqueueSnackbar,r={facebookLink:n.facebookLink,instagramLink:n.instagramLink,linkedinLink:n.linkedinLink,twitterLink:n.twitterLink},a=(0,D.cI)({defaultValues:r}),i=a.handleSubmit,s=a.formState.isSubmitting,o=function(){var e=(0,M.Z)(U().mark((function e(){return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:t("Update success!"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return(0,y.jsx)(Z.Z,{sx:{p:3},children:(0,y.jsx)(E.RV,{methods:a,onSubmit:i(o),children:(0,y.jsxs)(j.Z,{spacing:3,alignItems:"flex-end",children:[ie.map((function(e){return(0,y.jsx)(E.au,{name:e.value,InputProps:{startAdornment:(0,y.jsx)(ae.Z,{position:"start",children:e.icon})}},e.value)})),(0,y.jsx)(_.Z,{type:"submit",variant:"contained",loading:s,children:"Save Changes"})]})})})}function oe(){var e=(0,d.Z)().themeStretch,n=(0,c.Z)("general"),t=n.currentTab,h=n.onChangeTab,v=[{value:"general",icon:(0,y.jsx)(x.Z,{icon:"ic:round-account-box",width:20,height:20}),component:(0,y.jsx)(X,{})},{value:"billing",icon:(0,y.jsx)(x.Z,{icon:"ic:round-receipt",width:20,height:20}),component:(0,y.jsx)(T,{cards:u.Po,addressBook:u.n,invoices:u.aH})},{value:"notifications",icon:(0,y.jsx)(x.Z,{icon:"eva:bell-fill",width:20,height:20}),component:(0,y.jsx)(re,{})},{value:"social_links",icon:(0,y.jsx)(x.Z,{icon:"eva:share-fill",width:20,height:20}),component:(0,y.jsx)(se,{myProfile:u.oE})},{value:"change_password",icon:(0,y.jsx)(x.Z,{icon:"ic:round-vpn-key",width:20,height:20}),component:(0,y.jsx)(F,{})}];return(0,y.jsx)(m.Z,{title:"User: Account Settings",children:(0,y.jsxs)(a.Z,{maxWidth:!e&&"lg",children:[(0,y.jsx)(p.Z,{heading:"Account",links:[{name:"Dashboard",href:l.vB.root},{name:"User",href:l.vB.user.root},{name:"Account Settings"}]}),(0,y.jsx)(i.Z,{allowScrollButtonsMobile:!0,variant:"scrollable",scrollButtons:"auto",value:t,onChange:h,children:v.map((function(e){return(0,y.jsx)(s.Z,{disableRipple:!0,label:(0,r.I)(e.value),icon:e.icon,value:e.value},e.value)}))}),(0,y.jsx)(o.Z,{sx:{mb:5}}),v.map((function(e){return e.value===t&&(0,y.jsx)(o.Z,{children:e.component},e.value)}))]})})}},3404:function(e,n,t){t.d(n,{Z:function(){return A}});var r=t(93433),a=t(29439),i=t(4942),s=t(87462),o=t(63366),l=t(47313),c=(t(96214),t(83061)),d=t(50317),u=t(88564),m=t(25469),x=t(61113),p=t(17551),h=t(54750),v=t(46417),f=(0,h.Z)((0,v.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),j=t(38743),Z=(0,u.ZP)(j.Z)((function(e){var n=e.theme;return(0,s.Z)({display:"flex",marginLeft:"calc(".concat(n.spacing(1)," * 0.5)"),marginRight:"calc(".concat(n.spacing(1)," * 0.5)")},"light"===n.palette.mode?{backgroundColor:n.palette.grey[100],color:n.palette.grey[700]}:{backgroundColor:n.palette.grey[700],color:n.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,s.Z)({},"light"===n.palette.mode?{backgroundColor:n.palette.grey[200]}:{backgroundColor:n.palette.grey[600]}),"&:active":(0,s.Z)({boxShadow:n.shadows[0]},"light"===n.palette.mode?{backgroundColor:(0,p._4)(n.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(n.palette.grey[600],.12)})})})),b=(0,u.ZP)(f)({width:24,height:16});var g=function(e){var n=e;return(0,v.jsx)("li",{children:(0,v.jsx)(Z,(0,s.Z)({focusRipple:!0},e,{ownerState:n,children:(0,v.jsx)(b,{ownerState:n})}))})},w=t(22131);function y(e){return(0,w.Z)("MuiBreadcrumbs",e)}var k=(0,t(655).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=(0,u.ZP)(x.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,n){return[(0,i.Z)({},"& .".concat(k.li),n.li),n.root]}})({}),P=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,n){return n.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),_=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function L(e,n,t,r){return e.reduce((function(a,i,s){return s<e.length-1?a=a.concat(i,(0,v.jsx)(_,{"aria-hidden":!0,className:n,ownerState:r,children:t},"separator-".concat(s))):a.push(i),a}),[])}var A=l.forwardRef((function(e,n){var t=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),i=t.children,u=t.className,x=t.component,p=void 0===x?"nav":x,h=t.expandText,f=void 0===h?"Show path":h,j=t.itemsAfterCollapse,Z=void 0===j?1:j,b=t.itemsBeforeCollapse,w=void 0===b?1:b,k=t.maxItems,_=void 0===k?8:k,A=t.separator,I=void 0===A?"/":A,R=(0,o.Z)(t,C),B=l.useState(!1),z=(0,a.Z)(B,2),N=z[0],T=z[1],M=(0,s.Z)({},t,{component:p,expanded:N,expandText:f,itemsAfterCollapse:Z,itemsBeforeCollapse:w,maxItems:_,separator:I}),q=function(e){var n=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,n)}(M),U=l.useRef(null),W=l.Children.toArray(i).filter((function(e){return l.isValidElement(e)})).map((function(e,n){return(0,v.jsx)("li",{className:q.li,children:e},"child-".concat(n))}));return(0,v.jsx)(S,(0,s.Z)({ref:n,component:p,color:"text.secondary",className:(0,c.Z)(q.root,u),ownerState:M},R,{children:(0,v.jsx)(P,{className:q.ol,ref:U,ownerState:M,children:L(N||_&&W.length<=_?W:function(e){return w+Z>=e.length?e:[].concat((0,r.Z)(e.slice(0,w)),[(0,v.jsx)(g,{"aria-label":f,onClick:function(){T(!0);var e=U.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-Z,e.length)))}(W),q.separator,I,M)})}))}))},35328:function(e,n,t){t(47313);var r=t(54750),a=t(46417);n.Z=(0,r.Z)((0,a.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},88168:function(e,n,t){t(47313);var r=t(54750),a=t(46417);n.Z=(0,r.Z)((0,a.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},22650:function(e,n,t){t.d(n,{I:function(){return o}});var r=t(66797),a=t(26675),i=t(36815);function s(e){return(0,i.l)(e.toLowerCase())}function o(e,n){return void 0===n&&(n={}),(0,a.B)(e,(0,r.pi)({delimiter:" ",transform:s},n))}},36815:function(e,n,t){function r(e){return e.charAt(0).toUpperCase()+e.substr(1)}t.d(n,{l:function(){return r}})}}]);