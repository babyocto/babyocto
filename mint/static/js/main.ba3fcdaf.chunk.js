(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{258:function(n,t){},261:function(n,t){},265:function(n,t){},291:function(n,t){},293:function(n,t){},302:function(n,t){},304:function(n,t){},314:function(n,t){},316:function(n,t){},434:function(n,t){},436:function(n,t){},443:function(n,t){},444:function(n,t){},518:function(n,t){},563:function(n,t){},590:function(n,t,e){},591:function(n,t,e){"use strict";e.r(t);var r,a,c,o,i,s,l,f,p,d,u,x,b,h,j,g,O,m,y=e(2),C=e(93),w=e.n(C),S=e(13),v=e.n(S),T=e(34),E=e(35),A=e(14),N=e(67),M=e(65),k=e.n(M),_=e(232),I=e.n(_),D=e(77),P=e(233),R=e(18),F={loading:!1,account:null,smartContract:null,smartContractSTEM:null,web3:null,errorMsg:""},W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(R.a)(Object(R.a)({},F),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(R.a)(Object(R.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,smartContractSTEM:t.payload.smartContractSTEM,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(R.a)(Object(R.a)({},F),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(R.a)(Object(R.a)({},n),{},{account:t.payload.account});default:return n}},L={loading:!1,totalSupply:0,maxSupply:0,currentMintCost:0,error:!1,errorMsg:""},z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(R.a)(Object(R.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(R.a)(Object(R.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,maxSupply:t.payload.maxSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(R.a)(Object(R.a)({},L),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},K=Object(D.b)({blockchain:W,data:z}),U=[P.a],B=Object(D.c)(D.a.apply(void 0,U)),Y=Object(D.d)(K,B),G=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},H=function(){return function(){var n=Object(T.a)(v.a.mark((function n(t){var e,r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:return e=n.sent,n.next=7,Y.getState().blockchain.smartContract.methods.maxSupply().call();case 7:r=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e,maxSupply:r}}),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0),t(G("Could not load data from contract."));case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(t){return n.apply(this,arguments)}}()},q=function(n){return{type:"CONNECTION_FAILED",payload:n}},Q=function(n){return function(){var t=Object(T.a)(v.a.mark((function t(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(H());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},J=e(15),V=J.a.div(r||(r=Object(A.a)(["\n  background-color: darkred;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]))),X=J.a.div(a||(a=Object(A.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Z=J.a.div(c||(c=Object(A.a)(["\n  height: 16px;\n  width: 16px;\n"]))),$=J.a.div(o||(o=Object(A.a)(["\n  height: 24px;\n  width: 24px;\n"]))),nn=(J.a.div(i||(i=Object(A.a)(["\n  height: 32px;\n  width: 32px;\n"]))),J.a.div(s||(s=Object(A.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}))),tn=J.a.p(l||(l=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),en=(J.a.p(f||(f=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),J.a.p(p||(p=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),rn=(J.a.div(d||(d=Object(A.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(4)),an=function(n){if("string"===typeof n)return n.substring(0,5)+"..."+n.substring(n.length-4,n.length)},cn=J.a.button(u||(u=Object(A.a)(['\n  white-space:nowrap;\n  font-family: "Poppins", sans-serif;\n  cursor: pointer;\n  border: none;\n  margin: 0 10px;\n  display: inline-block;\n  padding: 10px 22px;\n  font-size: 12px;\n  line-height: 20px;\n  border-radius: 30px;\n  font-weight: bold;\n  text-transform: uppercase;\n  background: #fff;\n  margin-bottom: 5px;\n  letter-spacing: 1px;\n  transition: all 0.3s ease-in-out;\n  @media (max-width: 600px) {\n    white-space:nowrap;\n    cursor: pointer;\n    background: #fff;\n    font-family: "Poppins", sans-serif;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 11px;\n    line-height: 15px;\n    letter-spacing: 1px;\n    display: inline-block;\n    padding: 4px 10px;\n    border-radius: 20px;\n    transition: 0.5s;\n    margin: 5px;\n    border: 1px solid #fff;\n  }\n  :hover {\n    background: #ff96ad;\n    box-shadow: 0 0 5px #ff96ad, 0 0 25px #ff96ad, 0 0 50px #ff96ad, 0 0 200px #ff96ad;\n  }\n']))),on=J.a.button(x||(x=Object(A.a)(['\n  white-space:nowrap;\n  font-family: "Poppins", sans-serif;\n  cursor: pointer;\n  border: none;\n  margin: 0 10px;\n  padding: 10px 22px;\n  font-size: 12px;\n  line-height: 20px;\n  border-radius: 30px;\n  font-weight: bold;\n  text-transform: uppercase;\n  background: #fff;\n  margin-bottom: 5px;\n  letter-spacing: 1px;\n  transition: all 0.3s ease-in-out;\n  :hover {\n    background: #ff96ad;\n    box-shadow: 0 0 5px #ff96ad, 0 0 25px #ff96ad, 0 0 50px #ff96ad, 0 0 200px #ff96ad;\n  }\n  :disabled {\n    visibility: hidden;\n  }\n']))),sn=J.a.button(b||(b=Object(A.a)(['\n  white-space:nowrap;\n  cursor: pointer;\n  background: #fff;\n  font-family: "Poppins", sans-serif;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding: 8px 20px;\n  border-radius: 30px;\n  transition: 0.5s;\n  margin: 10px;\n  border: 2px solid #fff;\n@media (max-width: 600px) {\n    white-space:nowrap;\n    cursor: pointer;\n    background: #fff;\n    font-family: "Poppins", sans-serif;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 11px;\n    line-height: 15px;\n    letter-spacing: 1px;\n    display: inline-block;\n    padding: 4px 10px;\n    border-radius: 20px;\n    transition: 0.5s;\n    margin: 5px;\n    border: 1px solid #fff;\n  }\n  :hover {\n    background: #ff96ad;\n    border: 2px solid ;\n  }\n']))),ln=J.a.button(h||(h=Object(A.a)(['\n  font-family: "Poppins", sans-serif;\n  transition: all 0.2s ease-in-out;\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: white;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :hover {\n    background: #ff96ad;\n    color: #fff;\n  }\n']))),fn=J.a.div(j||(j=Object(A.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretched;\n  width: 100%;\n  padding: 10px 44px 44px 44px;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),pn=(J.a.img(g||(g=Object(A.a)(["\n  width: 400px;\n  @media (min-width: 767px) {\n    width: 500px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),J.a.img(O||(O=Object(A.a)(["\n  border: 0px;\n  border-radius:100%;\n  width: 100px;\n  @media (min-width: 900px) {\n    width: 125px;\n  }\n  @media (min-width: 1000px) {\n    width: 150px;\n  }\n  transition: width 0.5s;\n"])))),dn=J.a.a(m||(m=Object(A.a)(["\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n  :hover {\n    color: #2dc997;\n    background-color: transparent;\n    text-decoration: none;\n  }\n"])));var un=function(){var n=Object(N.b)(),t=Object(N.c)((function(n){return n.blockchain})),e=Object(N.c)((function(n){return n.data})),r=Object(y.useState)(!1),a=Object(E.a)(r,2),c=a[0],o=a[1],i=Object(y.useState)(""),s=Object(E.a)(i,2),l=s[0],f=s[1],p=Object(y.useState)(""),d=Object(E.a)(p,2),u=d[0],x=d[1],b=Object(y.useState)(!1),h=Object(E.a)(b,2),j=h[0],g=h[1],O=Object(y.useState)(1),m=Object(E.a)(O,2),C=m[0],w=m[1],S=Object(y.useState)(!1),A=Object(E.a)(S,2),M=A[0],_=A[1],D=Object(y.useState)(!1),P=Object(E.a)(D,2),R=P[0],F=P[1],W=Object(y.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),L=Object(E.a)(W,2),z=L[0],K=L[1],U=function(){var e=z.WEI_COST;f("Minting your Nerdette ..."),o(!0),t.smartContract.methods.mintWithSTEM(C).send({from:t.account,gasPrice:e}).once("error",(function(n){f("Sorry, something went wrong please try again later."),o(!1)})).then((function(e){console.log(e),f("WOW, The Nerdette NFT is yours! go visit Opensea.io to view it."),o(!1),n(H(t.account))}))},B=function(){var n=Object(T.a)(v.a.mark((function n(){var e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.smartContractSTEM.methods.allowance(t.account,z.CONTRACT_ADDRESS).call();case 2:e=n.sent,console.log(e),e<1e6&&e>-1?(f("TENTA not approved. Please approve TENTA to mint."),F(!0)):(F(!1),f("TENTA Approved."),U());case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Y=function(){var n=Object(T.a)(v.a.mark((function n(){var e,r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.web3.eth.getBalance(t.account);case 2:return e=n.sent,n.next=5,t.web3.utils.fromWei(e.toString());case 5:return e=n.sent,n.next=8,t.smartContractSTEM.methods.balanceOf(t.account).call();case 8:return r=n.sent,n.next=11,t.web3.utils.fromWei(r.toString());case 11:r=n.sent,x("You\u2019re connected as: "+an(t.account)+". Your have: "+(1*e).toFixed(1)+" MATIC and "+(1*r).toFixed(1)+" TENTA"),g(!0);case 14:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),G=function(){""!==t.account&&null!==t.smartContract&&n(H(t.account))},J=function(){var n=Object(T.a)(v.a.mark((function n(){var t,e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,K(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(y.useEffect)((function(){J()}),[]),Object(y.useEffect)((function(){G()}),[t.account]),Object(rn.jsx)(V,{children:Object(rn.jsxs)(nn,{flex:1,ai:"center",children:[Object(rn.jsx)(Z,{}),Object(rn.jsx)(pn,{alt:"example",src:"https://nerdhead.tk/mint/config/images/2817-nerdette.png"}),Object(rn.jsx)(tn,{style:{textAlign:"center",fontSize:25,fontWeight:"bold",color:"var(--accent-text)"},children:"Welcome to Nerdette Club Minting Dapp."}),Object(rn.jsxs)(fn,{flex:1,children:[Object(rn.jsxs)(nn,{flex:2,jc:"center",ai:"center",style:{padding:24,borderRadius:20,border:"4px ridge white",maxWidth:850},children:[Object(rn.jsxs)(nn,{ai:"center",jc:"center",fd:"row",children:[Object(rn.jsx)(sn,{onClick:function(n){window.open("https://nerdhead.tk/")},children:"Main Page "}),Object(rn.jsx)(sn,{onClick:function(n){window.open("https://opensea.io/collection/nerdette-club")},children:"Opensea "}),Object(rn.jsx)(sn,{onClick:function(n){window.open("https://quickswap.exchange/#/swap?outputCurrency=0x05fa81ae340098c8c7fcd310469195f9f8410858")},children:"Buy STEM "})]}),Object(rn.jsx)(Z,{}),""===t.account||null===t.smartContract?Object(rn.jsx)(tn,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"}}):Object(rn.jsxs)(tn,{style:{textAlign:"center",fontSize:40,fontWeight:"bold",color:"var(--accent-text)"},children:[e.totalSupply," / ",e.maxSupply]}),Number(e.totalSupply)>=1e4?Object(rn.jsxs)(rn.Fragment,{children:[Object(rn.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(rn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:"You can still find Nerdette Club NFTs on"}),Object(rn.jsx)(Z,{}),Object(rn.jsx)(dn,{target:"_blank",href:"https://opensea.io/collection/nerdette-club",children:"Opeansea"})]}):Object(rn.jsxs)(rn.Fragment,{children:[Object(rn.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"1 Nerdette Club (NEC) costs 5 MATIC or 500 STEM token."}),Object(rn.jsx)(X,{}),""===t.account||null===t.smartContract?Object(rn.jsxs)(nn,{ai:"center",jc:"center",children:[Object(rn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Connect to your wallet."}),Object(rn.jsx)(Z,{}),Object(rn.jsx)(cn,{onClick:function(t){t.preventDefault(),n(function(){var n=Object(T.a)(v.a.mark((function n(t){var e,r,a,c,o,i,s,l,f,p,d,u;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.next=9,fetch("config/abiSTEM.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=n.sent,n.next=12,a.json();case 12:return c=n.sent,n.next=15,fetch("config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 15:return o=n.sent,n.next=18,o.json();case 18:if(i=n.sent,s=window,!(l=s.ethereum)||!l.isMetaMask){n.next=39;break}return k.a.setProvider(l),f=new I.a(l),n.prev=24,n.next=27,l.request({method:"eth_requestAccounts"});case 27:return p=n.sent,n.next=30,l.request({method:"net_version"});case 30:n.sent==i.NETWORK.ID?(d=new k.a(r,i.CONTRACT_ADDRESS),u=new k.a(c,i.STEM_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:p[0],smartContract:d,smartContractSTEM:u,web3:f}}),l.on("accountsChanged",(function(n){t(Q(n[0]))})),l.on("chainChanged",(function(){window.location.reload()}))):t(q("Change network to ".concat(i.NETWORK.NAME,"."))),n.next=37;break;case 34:n.prev=34,n.t0=n.catch(24),t(q("Something went wrong."));case 37:n.next=40;break;case 39:t(q("Install Metamask."));case 40:case"end":return n.stop()}}),n,null,[[24,34]])})));return function(t){return n.apply(this,arguments)}}()),G()},children:"CONNECT"}),""!==t.errorMsg?Object(rn.jsxs)(rn.Fragment,{children:[Object(rn.jsx)(Z,{}),Object(rn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null]}):Object(rn.jsxs)(rn.Fragment,{children:[Object(rn.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:[Object(rn.jsx)(dn,{hidden:j?1:0,onClick:function(n){Y()},children:"Get Account Info "}),u]}),Object(rn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:l}),Object(rn.jsx)(Z,{}),Object(rn.jsxs)(nn,{ai:"center",jc:"center",fd:"row",children:[Object(rn.jsx)(ln,{style:{lineHeight:.4},disabled:c?1:0,onClick:function(n){n.preventDefault(),function(){var n=C-1;n<1&&(n=1),w(n)}()},children:"-"}),Object(rn.jsx)($,{}),Object(rn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:C}),Object(rn.jsx)($,{}),Object(rn.jsx)(ln,{disabled:c?1:0,onClick:function(n){n.preventDefault(),function(){var n=C+1;n>10&&(n=10),w(n)}()},children:"+"})]}),Object(rn.jsx)(Z,{}),Object(rn.jsxs)(nn,{ai:"center",jc:"center",fd:"row",children:[Object(rn.jsx)(cn,{disabled:c?1:0,onClick:function(e){e.preventDefault(),function(){var e=z.WEI_COST,r=z.GAS_LIMIT,a=String(5e18*C),c=String(r*C);f("Minting your Nerdette ..."),o(!0),t.smartContract.methods.mint(C).send({gasLimit:String(c),to:z.CONTRACT_ADDRESS,from:t.account,value:a,gasPrice:e}).once("error",(function(n){f("Sorry, something went wrong please try again later."),-32603==n.code&&f("Maximum NFT per address exceeded"),o(!1)})).then((function(e){console.log(e),f("WOW, The Nerdette NFT is yours! go visit Opensea.io to view it."),o(!1),n(H(t.account))}))}(),G()},children:c?"MINTING":"MINT BY MATIC"}),Object(rn.jsx)(cn,{disabled:c?1:0,onClick:function(n){n.preventDefault(),B(),G()},children:c?"MINTING":"MINT BY TENTA"}),Object(rn.jsx)(Z,{}),Object(rn.jsx)(on,{hidden:R?0:1,onClick:function(e){e.preventDefault(),function(){var e=z.GAS_LIMIT,r=z.WEI_COST,a=String(0);String(e*C),f("Approving..."),_(!0),t.smartContractSTEM.methods.approve(z.CONTRACT_ADDRESS,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({to:z.STEM_ADDRESS,from:t.account,value:a,gasPrice:r}).once("error",(function(n){console.log(n),f("There was an error approving. Please try again later."),_(!1)})).then((function(e){console.log(e),f("TENTA successfully approved for Minting."),_(!1),F(!1),n(H(t.account))}))}(),G()},children:M?"APPROVING":"APPROVE"})]}),Object(rn.jsx)(Z,{}),Object(rn.jsxs)(nn,{jc:"center",ai:"center",style:{width:"100%"},children:[Object(rn.jsx)(en,{style:{textAlign:"center",color:"grey"},children:"Please make sure you are connected to the Polygon Mainnet and with correct address."}),Object(rn.jsx)(en,{style:{textAlign:"center",color:"grey"},children:"Please note: Once you make the purchase, you cannot undo this action."})]})]})]})]}),Object(rn.jsx)(Z,{})]})]})})},xn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,595)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),r(n),a(n),c(n),o(n)}))};e(590);w.a.render(Object(rn.jsx)(N.a,{store:Y,children:Object(rn.jsx)(un,{})}),document.getElementById("root")),xn()}},[[591,1,2]]]);
//# sourceMappingURL=main.ba3fcdaf.chunk.js.map
