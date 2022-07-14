// Constant URL value for JAAS API
var gasPrice = 40000000000;

(this.webpackJsonpfrost=this.webpackJsonpfrost||[]).push([[0],{203:function(e,t,n){},204:function(e,t,n){},220:function(e,t){},222:function(e,t){},224:function(e,t){},228:function(e,t){},255:function(e,t){},257:function(e,t){},271:function(e,t){},273:function(e,t){},304:function(e,t){},306:function(e,t){},396:function(e,t){},397:function(e,t){},488:function(e,t,n)
	{"use strict";n.r(t);var a=n(2),s=n(73),i=n.n(s),r=(n(203),n(204),n(1)),u=function(){
		return Object(r.jsx)("div",{className:"container",
			children:Object(r.jsxs)("div",{className:"row justify-content-between mt-3",
				children:[Object(r.jsxs)("div",{className:"col-md-12 top-holder",
					children:[Object(r.jsx)("h1",{className:"page-title",children:"Welcome to Nerdette Club Staking Lab"}),
					Object(r.jsx)("p",{className:"subtitle",children:"Send your Nerdettes to study and they will earn 0.5 STEM Token every 2 hours! Until they fully minted."}),
					Object(r.jsx)("p",{className:"primary-text",children:"Stake your Nerdettes to earn STEM Token  -  Utility Token for the Nerd Head Club Metaverse - You can also mint Nerdettes with STEM Token!"})]}),
			]})})},
		o=n(13),p=n(11),c=n.n(p),l=n(17),y=n(109),d=n.n(y),m=n(108),b=n.n(m),f={},
	j=[
		{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"_collectionAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},
		{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},
		{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"harvestC2",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"address",name:"user",type:"address"}],name:"harvestBatchC2",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},
		{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"NFTStakedC2",type:"event"},
		{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"NFTUnstakedC2",type:"event"},
		{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"bytes",name:"",type:"bytes"}],name:"onERC721Received",outputs:[{internalType:"bytes4",name:"",type:"bytes4"}],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},
		{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"RewardsHarvestedC2",type:"event"},
		{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},
		{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},
		{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},
		{inputs:[{internalType:"uint256",name:"coinAmount",type:"uint256"}],name:"setCoinAmountPerRewardUnitC2",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"address",name:"newAddress",type:"address"}],name:"setCollectionAddressC2",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"uint256",name:"numberOfBlocks",type:"uint256"}],name:"setNumberOfBlocksPerRewardUnit",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"uint256",name:"coinAmount",type:"uint256"}],name:"setWelcomeBonusAmount",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"stakeC2",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"}],name:"stakeBatchC2",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},
		{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},
		{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"unstakeC2",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"}],name:"unstakeBatchC2",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"amountOfStakersC2",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"BURNER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"coinAmountPerRewardUnitC2",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"collectionAddressC2",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"CONTRACT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"contractCreationBlock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"indexOfTokenIdInStakePortfolioC2",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"MINTER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"numberOfBlocksPerRewardUnit",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"pendingRewardsC2",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"stakedNFTSByUserC2",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"stakeLogC2",outputs:[{internalType:"uint256",name:"stakedAtBlock",type:"uint256"},{internalType:"uint256",name:"lastHarvestBlock",type:"uint256"},{internalType:"bool",name:"currentlyStaked",type:"bool"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"stakePortfolioByUserC2",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"tokensStakedC2",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"address",name:"",type:"address"}],name:"tokensStakedByUserC2",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"welcomeBonusAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"welcomeBonusCollected",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}
		],
	x=[
		{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"string",name:"_initBaseURI",type:"string"},{internalType:"string",name:"_initNotRevealedUri",type:"string"}],stateMutability:"nonpayable",type:"constructor"},
		{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},
		{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},
		{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},
		{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},
		{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"baseExtension",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"cost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"maxMintAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},
		{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"notRevealedUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[],name:"reveal",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[],name:"revealed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"string",name:"_newBaseExtension",type:"string"}],name:"setBaseExtension",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"string",name:"_newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"uint256",name:"_newCost",type:"uint256"}],name:"setCost",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"string",name:"_notRevealedURI",type:"string"}],name:"setNotRevealedURI",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"uint256",name:"_newmaxMintAmount",type:"uint256"}],name:"setmaxMintAmount",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
		{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},
		{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"walletOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},
		{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"}
		],
	h=n(27),T=Object(a.createContext)({notification:null,showModal:function(){},hideModal:function(){}}),w=function(e){var t=Object(a.useState)(),n=Object(o.a)(t,2),s=n[0],i=n[1],u=Object(a.useState)(),p=Object(o.a)(u,2),y=p[0],m=p[1],w=Object(a.useState)(),v=Object(o.a)(w,2),O=v[0],k=v[1],g=Object(a.useState)(),M=Object(o.a)(g,2),N=M[0],S=M[1],R=Object(a.useState)(),A=Object(o.a)(R,2),C=A[0],I=A[1],B=Object(a.useState)("0.00000"),F=Object(o.a)(B,2),E=F[0],_=F[1],U=Object(a.useState)(!0),D=Object(o.a)(U,2),P=D[0],W=D[1],Y=Object(a.useState)("0"),$=Object(o.a)(Y,2),L=$[0],H=$[1],V=Object(a.useState)("0"),G=Object(o.a)(V,2),J=G[0],q=G[1],z=Object(a.useState)("0"),X=Object(o.a)(z,2),K=X[0],Q=X[1],Z=Object(a.useState)(),ee=Object(o.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(),se=Object(o.a)(ae,2),ie=se[0],re=se[1],ue=Object(a.useState)(),oe=Object(o.a)(ue,2),pe=oe[0],ce=oe[1],le=Object(a.useState)(!1),ye=Object(o.a)(le,2),de=ye[0],me=ye[1],be=Object(a.useState)(0),fe=Object(o.a)(be,2),je=fe[0],xe=fe[1],he=Object(a.useState)("0"),Te=Object(o.a)(he,2),we=Te[0],ve=Te[1],Oe=Object(a.useState)("0"),ke=Object(o.a)(Oe,2),ge=ke[0],Me=ke[1];Object(a.useEffect)((function(){Ne("noWallet")}),[]),Object(a.useEffect)((function(){s&&C&&!0===y.currentProvider.isMetaMask&&P&&(W(!1),s.on("accountsChanged",(function(e){Se(N,y,e[0],te),e.length>0&&I(e[0])})))}));var Ne=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r,u,o,p,l,y,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("noWallet"!==t){e.next=11;break}n=new d.a("https://polygon-rpc.com/"),a=new n.eth.Contract(j,"0x05FA81Ae340098c8C7fcd310469195F9f8410858"),r=new n.eth.Contract(x,"0xA7E901a9ECd7cfB2603F14fd21E9f184B30e9777"),ne(r),S(a),m(n),i(s),Se(a,n,null,r),e.next=28;break;case 11:return u=new b.a({cacheProvider:!0,providerOptions:f,theme:"dark"}),e.next=14,u.connect(u).then((function(e){o=e})).catch((function(e){o="https://polygon-rpc.com"}));case 14:return p=new d.a(o),e.next=17,p.eth.getAccounts();case 17:l=e.sent,y=new p.eth.Contract(j,"0x05FA81Ae340098c8C7fcd310469195F9f8410858"),h=new p.eth.Contract(x,"0xA7E901a9ECd7cfB2603F14fd21E9f184B30e9777"),S(y),ne(h),l.length>0&&I(l[0]),m(p),i(o),k(u),Se(y,p,l[0],h),localStorage.setItem("account",l[0]);case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=Object(l.a)(c.a.mark((function e(t,n,a,s){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!s||a){e.next=5;break}return e.next=3,t.methods.tokensStakedC2().call((function(e,t){e||H(t)}));case 3:return e.next=5,t.methods.amountOfStakersC2().call((function(e,t){e||Q(t)}));case 5:if(!(t&&a&&s)){e.next=20;break}return e.next=8,t.methods.tokensStakedC2().call((function(e,t){e||H(t)}));case 8:return e.next=10,t.methods.balanceOf(a).call((function(e,t){e||_(n.utils.fromWei(t))}));case 10:return e.next=12,t.methods.tokensStakedByUserC2(a).call(function(){var e=Object(l.a)(c.a.mark((function e(a,s){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=4;break}return q(s),e.next=4,t.methods.coinAmountPerRewardUnitC2().call((function(e,t){if(!e){var a=s*t*2;ve(n.utils.fromWei(a.toString())),Me(2*n.utils.fromWei(t))}}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 12:return e.next=14,t.methods.amountOfStakersC2().call((function(e,t){e||Q(t)}));case 14:return e.next=16,t.methods.stakedNFTSByUserC2(a).call((function(e,t){e||ce(t)}));case 16:return e.next=18,s.methods.walletOfOwner(a).call((function(e,t){e||re(t)}));case 18:Ue(n,a),Re(n,t,a);case 20:case"end":return e.stop()}}),e)})));return function(t,n,a,s){return e.apply(this,arguments)}}(),Re=function(){var e=Object(l.a)(c.a.mark((function e(t,n,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=3;break}return e.next=3,n.methods.stakedNFTSByUserC2(a).call((function(e,s){e||s&&s.map(function(){var e=Object(l.a)(c.a.mark((function e(s){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Nerd #",s),e.next=3,n.methods.pendingRewardsC2(a,s).call((function(e,n){e||(console.log("yes",n),xe((function(e){return e+ +t.utils.fromWei(n)})))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=3;break}return e.next=3,N.methods.stakeC2(t).send({from:C, gasPrice: gasPrice},(function(e,t){})).on("receipt",(function(e){h.b.success("Stake Successfully"),Se(N,y,C,te)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=4;break}return console.log(ie),e.next=4,N.methods.stakeBatchC2(ie).send({from:C, gasPrice: gasPrice},(function(e,t){})).on("receipt",(function(e){h.b.success("Stake Successfully"),Se(N,y,C,te)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=3;break}return e.next=3,N.methods.harvestBatchC2(C).send({from:C, gasPrice: gasPrice},(function(e,t){})).on("receipt",(function(e){h.b.success("Claim Successfully"),Se(N,y,C,te)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=3;break}return e.next=3,N.methods.unstakeC2(t).send({from:C, gasPrice: gasPrice},(function(e,t){})).on("receipt",(function(e){h.b.success("Unstake Successfully"),Se(N,y,C,te)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=3;break}return e.next=3,N.methods.unstakeBatchC2(pe).send({from:C, gasPrice: gasPrice},(function(e,t){})).on("receipt",(function(e){h.b.success("Unstake Successfully"),Se(N,y,C,te)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.clearCachedProvider();case 2:I(null),localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER"),localStorage.removeItem("walletconnect"),localStorage.removeItem("account"),i(null);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_e=function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C&&te&&C)try{te.methods.setApprovalForAll("0x05FA81Ae340098c8C7fcd310469195F9f8410858",!0).send({from:C, gasPrice: gasPrice},(function(e,t){})).on("receipt",(function(e){h.b.success("Enable Successfully"),me(!0)})).on("error",(function(e){h.b.error(e)}))}catch(t){console.log("Failed: "+t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(l.a)(c.a.mark((function e(t,n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new t.eth.Contract(x,"0xA7E901a9ECd7cfB2603F14fd21E9f184B30e9777"),e.next=3,a.methods.isApprovedForAll(n,"0x05FA81Ae340098c8C7fcd310469195F9f8410858").call((function(e,t){e||(t>0?(me(!0),console.log("is approve")):(me(!1),console.log("not approve")))}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),De={provider:s,web3Instance:y,Contract:N,account:C,walletBalance:E,handleConnectToWallet:Ne,handleDisconnectWallet:Ee,invest:Ae,withdraw:Ie,tokenStaked:L,tokenStakedByuser:J,ownerCount:K,approveYourself:_e,checkEnable:Ue,approveStatus:de,unStake:Be,unstakedNft:ie,stakedNft:pe,totalReward:je,rewardPerday:we,constantReward:ge,investAll:Ce,unStakeAll:Fe};return Object(r.jsx)(T.Provider,{value:De,children:e.children})},v=T,O=function(e){if("string"===typeof e)return e.substring(0,7)+"..."+e.substring(e.length-7,e.length)},k=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(),u=Object(o.a)(i,2),p=u[0],c=u[1],l=Object(a.useContext)(v),y=l.unstakedNft,d=l.stakedNft,m=l.invest,b=l.unStake,f=l.unStakeAll,j=l.investAll;
		return Object(r.jsx)("div",{className:"row",
					children:[Object(r.jsxs)("div",{className:"col-md-6 justify-content-evenly",
						children:[
						Object(r.jsxs)("div",{className:"main-box align-items-center",
							children:[
								Object(r.jsx)("h5",{className:"tab-title align-text-center",children:"Your staked Nerdette NFTs"}),
								Object(r.jsxs)("div",{className:"row list-holder",
									children:d.map((function(e,t)
										{if(0!=e)return [
										Object(r.jsxs)("div",{className:"col-3 justify-content-evenly",
										children:[
											Object(r.jsx)("a",{href:"https://opensea.io/assets/matic/0xA7E901a9ECd7cfB2603F14fd21E9f184B30e9777/"+e+"",target:"_blank",
											children:Object(r.jsx)("img",{className:"nft-picture",src:"https://nerdhead.tk/mininec/"+e+".png"})}),
											// children:Object(r.jsx)("img",{className:"nft-picture",src:"https://nerdhead.tk/nerdetteminting.png"})}),
											Object(r.jsx)("button",{className:"nft-btn ".concat(n==+e?"active":""),onClick:function(){s(e)},children:e},t)
										]}),
										]}))}),
								Object(r.jsxs)("div",{className:"",
								children:[
									Object(r.jsx)("button",{className:"box-btn my-3",onClick:function(){n&&b(+n)},children:"Unstake"}),
									Object(r.jsx)("button",{className:"box-btn my-3",onClick:function(){f()},children:"Unstake All"})]})
							]})]}),
					Object(r.jsxs)("div",{className:"col-md-6 justify-content-evenly",
						children:[
						Object(r.jsxs)("div",{className:"main-box align-items-center",
						children:[
							Object(r.jsx)("h5",{className:"tab-title align-text-center",children:"Your unstaked Nerdette NFTs"}),
							Object(r.jsx)("div",{className:"row list-holder",
								children:y.map((function(e,t){return [
									Object(r.jsxs)("div",{className:"col-3 justify-content-evenly",
										children:[
											Object(r.jsx)("a",{href:"https://opensea.io/assets/matic/0xA7E901a9ECd7cfB2603F14fd21E9f184B30e9777/"+e+"",target:"_blank",
											// children:Object(r.jsx)("img",{className:"nft-picture",src:"https://nerdhead.tk/nerdetteminting.png"})}),
											children:Object(r.jsx)("img",{className:"nft-picture",src:"https://nerdhead.tk/mininec/"+e+".png"})}),
											Object(r.jsx)("button",{className:"nft-btn ".concat(p==+e?"active":""),onClick:function(){c(e)},children:e},t)
											]})
										]}))}),
							Object(r.jsxs)("div",{className:"",
								children:[
								Object(r.jsx)("button",{className:"box-btn my-3",onClick:function(){p&&m(+p)},children:"Stake"}),
								Object(r.jsx)("button",{className:"box-btn my-3",onClick:function(){j()},children:"Stake All"})
								]})
							]})
						]})]
				})},
				g=function(){var e=Object(a.useContext)(v),t=e.handleConnectToWallet,n=e.account,s=e.handleDisconnectWallet,i=e.walletBalance,u=e.tokenStaked,p=e.tokenStakedByuser,c=e.ownerCount,l=e.approveYourself,y=e.approveStatus,d=(e.stakedNft,e.withdraw),m=e.totalReward,b=e.rewardPerday,f=e.constantReward,j=Object(a.useState)(),x=Object(o.a)(j,2);x[0],x[1];
					return Object(r.jsxs)("div",{className:"container",
						children:[
						Object(r.jsxs)("div",{className:"row box-row justify-content-between align-items-end mt-3",
							children:[
							Object(r.jsxs)("span",{className:"col-md-6 col-sm-6 info-holder left",
								children:[
								Object(r.jsxs)("p",{className:"mb-2 top-text text-nowrap",children:[u/100,"% Nerdettes Staked: "]}),
								Object(r.jsx)("p",{className:"top-text text-nowrap",children:"Owners that have staked:  "})]}),
							Object(r.jsxs)("span",{className:"col-md-6 col-sm-6 info-holder right",
								children:[
								Object(r.jsxs)("p",{className:"text-end text-nowrap mb-2 top-text ms-auto",children:[u," /10000"]}),
								Object(r.jsx)("p",{className:"text-end text-nowrap top-text ms-auto",children:c})]})]}),
						Object(r.jsxs)("div",{className:"row justify-content-between",
							children:[

							Object(r.jsx)("div",{className:"col-md-6",
								children:Object(r.jsx)("div",{className:"main-box justify-content-center",
								children:n?
								Object(r.jsxs)(r.Fragment,{
									children:[
									// Object(r.jsx)("h5",{className:"mb-3",children:O(n)}),
									Object(r.jsx)("h5",{className:"mb-3",children:["Your address: ",Object(r.jsx)("b",{className:"mb-3",children:O(n)}),]}),
									Object(r.jsx)("h5",{className:"mb-3",children:["Your STEM Balance: ",Object(r.jsx)("b",{className:"mb-3",children:[(i*1).toFixed(1)," STEM"]}),]}),
									Object(r.jsxs)("h5",{className:"mb-3",children:["Number of Nerdettes you stake: ", Object(r.jsxs)("b",{className:"mb-3",children:[p]}),]}),
									Object(r.jsxs)("h5",{className:"mb-3",children:["Pending STEM Reward: ",Object(r.jsxs)("b",{className:"mb-3",children:[m.toFixed(1)]})]}),

									Object(r.jsxs)("h5",{className:"mb-3",children:["Daily Reward: ",(f*6).toFixed(1)," STEM per Nerdette NFT"]}),
									Object(r.jsxs)("h5",{className:"mb-3",children:["You are currently earning: ",(b*6).toFixed(1)," STEM per Day"]}),
									Object(r.jsx)("button",{className:"box-btn my-3",onClick:function(){d()},children:"Claim Reward"}),
									Object(r.jsx)("button",{className:"box-btn-disconnect my-3",onClick:function(){return s()},children:"Disconnect"})]}):Object(r.jsxs)(r.Fragment,{
										children:[
										Object(r.jsx)("h2",{className:"box-btn mb-3",children:"Connect Your Wallet"}),
										Object(r.jsx)("button",{className:"box-btn my-3",onClick:function(){return t()},children:"Connect"})]})})}),
							Object(r.jsx)("div",{className:"col-md-6 d-none d-md-block",
								children:Object(r.jsxs)("div",{className:"",
									children:[
									Object(r.jsx)("img",{src:"./assets/images/blid.png",className:"blid-image"})
									]})})
							]}),
						Object(r.jsxs)("div",{className:"row box-row justify-content-between my-3",
							children:[
							Object(r.jsx)("div",{className:"col-md-12",children:!1===y?Object(r.jsxs)
				("div",{className:"main-box-approve justify-content-center",
					children:[
						Object(r.jsx)("p",{className:"top-text",children:"After connect your wallet click 'Approve Staking' to approve the contract to enable staking."}),
						Object(r.jsx)("button",{className:"box-btn mt-3",onClick:function(){return l()},
							children:"Approve Staking"})]}):Object(r.jsx)(k,{})})]})]})},M=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("main",{children:Object(r.jsxs)("section",{className:"w-100",children:[Object(r.jsx)(u,{}),Object(r.jsx)(g,{})]})})})};n(487);i.a.render(Object(r.jsxs)(w,{children:[Object(r.jsx)(M,{}),Object(r.jsx)(h.a,{})]}),document.getElementById("root"))}},[[488,1,2]]]);