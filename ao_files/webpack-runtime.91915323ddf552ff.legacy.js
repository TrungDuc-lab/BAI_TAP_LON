!function(){"use strict";var e,a,c,d,f,b,o={},t={};function r(e){if(t[e])return t[e].exports;var a=t[e]={id:e,loaded:!1,exports:{}};return o[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=o,r.x=function(){},r.microfeA=function(e,a){var c,d,f=e.exports;function b(){c(f)}var o=e.exports=new Promise((function(e,a){c=e,d=a}));a().then((function(){if(e.exports.then){var a=e.exports;e.exports=o,a.then(b,d)}else b()})).catch(d)},function(){var e={0:{version:"0.5.0"},1:{version:"1.1.19"},2:{version:"1.0.37"},3:{version:"4.0.2"},4:{version:"2.3.1"}},a={0:"shopee__domain",1:"shopee__language",2:"shopee__settings",3:"shopee_common__currency",4:"shopee_common__time"},c={type:"module",requester:"pcmall-static"};if(r.microfeM=function(d){return Platform.getModule(a[d],Object.assign({},c,e[d]))},r.microfeI=function(d){return Platform.getModuleImmediate(a[d],Object.assign({},c,e[d]))},window&&window.__DECKER_HOOK__){var d=window.__DECKER_HOOK__,f=function(){d.sendToDevtools("MFE_FEDERATED_MODULES_INFO",{base:c,map:e,name:a})};d.on("MFE_RETRIEVE_FEDERATED_MODULES_INFO",f),f()}}(),r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,{a:a}),a},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(c,d){if(1&d&&(c=this(c)),8&d)return c;if("object"==typeof c&&c){if(4&d&&c.__esModule)return c;if(16&d&&"function"==typeof c.then)return c}var f=Object.create(null);r.r(f);var b={};e=e||[null,a({}),a([]),a(a)];for(var o=2&d&&c;"object"==typeof o&&!~e.indexOf(o);o=a(o))Object.getOwnPropertyNames(o).forEach((function(e){b[e]=function(){return c[e]}}));return b.default=function(){return c},r.d(f,b),f},r.d=function(e,a){for(var c in a)r.o(a,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(a,c){return r.f[c](e,a),a}),[]))},r.u=function(e){return({23:"EReceiptForm68",91:"address.TH_address_to_zip-live-json",117:"PageGroupBuyList",147:"ProductDetailsPage",182:"ShopeeMart",197:"EReceiptForm96",215:"EReceiptForm37",293:"PageDownloadApp",323:"EReceiptForm121",369:"PageShareExpiration",394:"EReceiptForm98",456:"PageItemRatingsOld",462:"PageFlashSale",473:"RouteRedirectToMyAccountPayment",559:"OfficialShopRecommendPagePopular",561:"PageVerifyPassword",566:"PageVerifyEmail",569:"InformationBlockES",601:"ShopeeFoodPaymentSelectionPage",639:"InstallmentFilter",642:"BannerSDKPlayground",684:"PageRatings",773:"EReceiptForm63",809:"PageSimilarProducts",919:"EReceiptForm177",975:"InformationBlockPL",986:"InformationBlockBR",1028:"EReceiptForm90",1036:"EReceiptForm164",1086:"ResetPasswordByEmail",1110:"EReceiptForm29",1136:"SignupByOTP",1160:"EReceiptForm149",1178:"PageDailyDiscoverCampaign",1179:"InformationBlockVN",1200:"PageOAuth",1226:"EReceiptForm133",1235:"EReceiptForm14",1242:"InformationBlockID",1281:"SearchPage",1286:"PFBCookieSetter",1299:"SearchInMicrositePage",1303:"EReceiptForm60",1326:"firebase",1331:"PageRedirectToFlashSaleSMart",1337:"PCSummaryNotificationContainer",1430:"PaymentSelectionPage",1466:"PageVerifyLinkReceiver",1473:"EReceiptForm157",1531:"EReceiptForm74",1540:"PageYouMayAlsoLike",1575:"RedirectRwBrowseDeal",1584:"EReceiptForm163",1615:"RouteRedirectForSBrowser",1714:"UserPage",1918:"EReceiptForm173",1951:"EReceiptForm1",1968:"PageDPPaymentSelection",1979:"EReceiptForm117",1981:"ResetPassword",2009:"EReceiptForm103",2041:"OrderListPC",2063:"PageAuthenticationIVS",2109:"RedirectRwMyGroups",2142:"LoginByPassword",2161:"PageAddressSelectionDemo",2162:"address.TW-live-json",2249:"EReceiptForm145",2258:"PageAddressDemo",2356:"EReceiptForm137",2412:"PageBranchReselection",2446:"PageAntiCrawlerError",2460:"EReceiptForm114",2496:"CollectionPage",2601:"OrderListPage",2625:"EReceiptForm151",2629:"EReceiptForm33",2718:"EReceiptForm5",2793:"EReceiptForm44",2810:"address.ID-live-json",2845:"PageIdentityVerification",2854:"RedirectToCoinsHistory",2964:"EReceiptForm171",2968:"PageCheckoutOld",2975:"hash",3046:"InformationBlockCL",3053:"address.MX-live-json",3091:"EReceiptForm122",3121:"PageSVSPaymentSelection",3149:"PageSearchUser",3152:"OfficialShopRecommendPageJustForYou",3186:"PageAntiCrawlerVerify",3187:"PageUserGDPRCookieSettings",3269:"EReceiptForm27",3283:"EReceiptForm153",3395:"PageShopHotDeals",3445:"EReceiptForm155",3467:"PageDailyDiscover",3507:"PageUserAddress",3519:"EReceiptForm130",3543:"EReceiptForm170",3573:"EReceiptForm19",3621:"PageKYCFreeShipping",3665:"EReceiptForm95",3707:"EReceiptForm166",3750:"EditOrderAddress",3754:"PageGenericDownloadApp",3758:"PageUserPassword",3785:"InformationBlockTH",3917:"CoinExpirationPage",4001:"OrderDetailPage",4006:"InformationBlockFR",4031:"SearchResultVoucher",4044:"address.TH_address_to_zip-en-live-json",4075:"EReceiptForm26",4106:"AccountAddPassword",4147:"PageSeoBrand",4166:"EReceiptForm107",4200:"EReceiptForm158",4255:"PageVerifyQr",4325:"MyAccountPage",4343:"PageAuthenticationShopeePay",4344:"PageLINEIntegration",4376:"PageAllCategories",4406:"address.PH-live-json",4438:"ShopeeMartSearchPage",4451:"EReceiptForm113",4474:"PageVerifyCaptcha",4518:"DebugInformation",4557:"PageIntegrationAddressCallback",4571:"PageUserGDPR",4596:"ReturnPage",4615:"PageWelcomePackage",4643:"EReceiptForm85",4645:"PageFindSimilarProducts",4702:"RouteRedirectToHome",4794:"AccountChangePhoneNumber",4812:"address.CL-live-json",4859:"ShopeeMartAddOnDealsPage",4864:"EReceiptForm3",4994:"EReceiptForm47",5108:"EReceiptForm127",5144:"LoginByWhatsappToken",5174:"SocialBindAccount",5189:"EReceiptForm75",5216:"address.ID_address_to_zip-live-json",5279:"EReceiptForm20",5322:"LoginByOTP",5345:"EReceiptForm77",5366:"PageAccountRedirect",5375:"AccountChangePassword",5415:"PageOrderReturnInstructions",5440:"PageOrderReturnSelectCourier",5461:"EReceiptForm8",5479:"ComponentBuilderPlayground",5483:"InformationBlockPH",5500:"ProductLabelLanding",5533:"EReceiptForm143",5703:"address.TH-en-live-json",5738:"PageShopeeBuddy",5823:"PCLazyFooter",5833:"EReceiptForm67",5847:"address.TW_address_to_zip-live-json",5873:"address.TH-live-json",5897:"PageIframeDataPipe",5909:"EReceiptForm129",5959:"InformationBlockSG",6057:"SearchResultFilterApplied",6061:"PageVerifyOTP",6081:"InformationBlockAR",6082:"address.CO-live-json",6109:"EReceiptForm51",6147:"EReceiptForm45",6184:"ShopeePlayPaymentSelectionPage",6197:"EReceiptForm132",6201:"EReceiptForm80",6207:"WidgetGallery",6222:"EventPage",6243:"PageFromSameShop",6326:"LogisticAddressModal",6368:"EReceiptForm82",6485:"AccountChangePhoneNumberV2",6539:"LogisticsSelectionModal",6547:"AccountAddPhoneNumberV2",6623:"EReceiptForm139",6743:"LoginByQRCode",6756:"address.VN-live-json",6776:"InformationBlockIN",6791:"EReceiptForm40",6798:"EReceiptForm111",6805:"EReceiptForm135",6862:"EReceiptForm59",6922:"PageReportUser",6929:"VLibrasIntegration",6931:"EReceiptForm79",6980:"EReceiptForm34",6983:"EReceiptForm87",7026:"MarketplacePaymentPage",7086:"EReceiptForm116",7116:"EReceiptForm57",7119:"shopee-phonelib",7171:"PageVerifyEmailLinkSender",7173:"EReceiptForm22",7194:"EReceiptForm141",7372:"ProductTagFilter",7412:"EReceiptForm102",7464:"HotWordList",7537:"FindSimilarProductResult",7565:"WebTrackerBridge",7598:"PageIntegrationTWEInvoice",7761:"PageBrandSale",7776:"PageVerifyLinkSender",7793:"CookieConsentBannerV2",7839:"InformationBlockMY",7905:"EReceiptForm88",7917:"EReceiptForm62",7925:"address.TW_zip_to_address-live-json",7978:"EReceiptForm91",8009:"PageAntiCrawlerTest",8026:"EReceiptForm36",8035:"PageSearch",8122:"address.BR-live-json",8130:"SearchResultCorrected",8204:"EReceiptForm160",8225:"FooterInfoBlockPreview",8257:"InformationBlockTW",8293:"MartSearchNoResultGeneral",8299:"address.PL-live-json",8341:"EReceiptForm161",8345:"EReceiptForm110",8501:"ShopRecommendedForYouPage",8505:"EReceiptForm70",8534:"PageVerifyEmailLinkReceiver",8616:"InformationBlockMX",8623:"InformationBlockCO",8630:"EReceiptForm125",8637:"PageUserEmail",8681:"EReceiptForm12",8696:"ShopSearchPage",8713:"PageLKPPSSO",8729:"PageGDPRCookieGuestSetting",8731:"EReceiptForm31",8798:"PageFlashSaleSMart",8850:"EReceiptForm54",8912:"EReceiptForm15",8953:"ProgramForm",8958:"EReceiptForm9",8970:"EReceiptForm11",9020:"SignupKyc",9090:"PageUserPayment",9171:"EReceiptForm124",9196:"address.SG-live-json",9211:"EReceiptForm52",9276:"PageNotification",9358:"AccountAddPhoneNumber",9393:"PageUserPhone",9489:"ShopeeMartRecommendationSeeMore",9607:"EReceiptForm6",9611:"PageDevtool",9618:"EReceiptForm108",9754:"EReceiptForm56",9802:"address.MY-live-json",9897:"PageHashtag",9924:"PageCustomKYCTW",9936:"EReceiptForm83",9968:"LegacyFindSimilarProductResult"}[e]||e)+"."+{23:"99b1fe1dea50f939",45:"933844976e15699c",73:"9d5b4ff922995563",91:"8bfe403d725a4a49",117:"7056f3ac67e08fad",147:"57c9433ba6ab33cf",182:"e343a07c5bd7518c",189:"398b6ac300ee82a4",197:"aebea87de9432c3b",215:"70d33be5f841f43d",218:"091908c4284895fd",293:"c4cf2b355de07580",323:"99045f6ce9a44a7b",369:"a6a4f0b7583aea0c",394:"9ccaa81194e66237",456:"dc03f07dfde9a016",462:"12eb257bdab20954",473:"58306d79ed098f4a",559:"9eba09f554f9c652",561:"f824f00cf05a804b",566:"49cb665822ab8641",569:"9816fd23b1c8e493",601:"0985db8c4eaf4388",639:"3a243b3c579f0d55",642:"cd38fc7af3acd53e",684:"d147f93119c4bbf7",773:"a2dee53c7aa8038a",809:"090d10ff18c621ba",884:"289944b02a7eb509",919:"da38a614c2b720ef",952:"e116f19bf27a53c3",959:"83021c1356d9442c",975:"62ad88a1759a9b11",986:"bf4d55fa2b38e07a",1028:"7ba62c8eef912b2e",1036:"02cb8c7420bd35a7",1086:"7f9f00b39a8c4b33",1087:"e0568fc446eb307d",1110:"63dcc69dd7ee6fe6",1136:"ca1a43b6173266ac",1149:"d7a5d3886c2d9b6a",1160:"10c3d7021b11a55d",1177:"8f534d625bd72135",1178:"25f857f404ec548e",1179:"2b8ea85f77420883",1200:"e9dff6e64a28521a",1226:"d54ae03fb78f4700",1235:"a52024dae2f1cfe6",1242:"b6977a7d5c37631d",1281:"ee7a574bec4434ff",1286:"38aee8878781bd11",1299:"eb31237605135ad2",1303:"d59909f4db4ff8d0",1326:"3c9cec2093c56dab",1331:"05401eccdeb1844f",1337:"934518d065ed00cd",1430:"6d14d3a27ecfe0be",1466:"736e36fa925c3cee",1473:"edf685be9734e3ba",1531:"2c145f95ffc9b909",1540:"2b0f7981487def3b",1548:"7f1ab16614f7aa4f",1565:"bfffe4985956532f",1575:"76edefda681e3f9a",1584:"5e247493c27423f5",1610:"35f7b7d2bb01c0b2",1615:"ae5868187689fc23",1640:"53e2687684c6cf61",1661:"56216a3c3737c4f7",1714:"4934039d971bc6ff",1723:"9c60261aada1de9a",1918:"f73f33eceb36464c",1951:"badaf972ce9fc6dd",1959:"d51a0d5c1bdc28d2",1968:"f90afd4a17296553",1979:"cd578d948731232b",1981:"565bf98fcd097613",2009:"2e8127466cf89669",2021:"891aeb9366d9e9ea",2039:"1c015c2f2aa792f5",2041:"d06544f4628e68a0",2063:"1784c80c096642d2",2109:"0df093137607c7af",2142:"0e1f8f184707c5a7",2161:"39f7371fcda04d01",2162:"c942ad1eba6d0734",2174:"ecac646d10bd3730",2233:"eea4cb999bf4cb49",2249:"fb8bedea66aa1ddd",2258:"06e4ae6fe0918aec",2281:"35e8168357521935",2289:"83f5ff32c5637959",2356:"ab86c6d0d303a8c1",2387:"e57d6e57267e96bf",2412:"02021042c85963eb",2446:"ca1733cbf1773cec",2460:"56783f57bd75c12b",2496:"af74986e5d673525",2601:"bb5ef90ba4c33cc9",2625:"26e0b658bd4b623a",2629:"6ad0dcfdd3c95ccf",2718:"40aa013190fdd461",2769:"78b207242d361be7",2793:"4c3f3b102a30b4a8",2810:"a713f4bf7f62c481",2845:"f4e50af9f9c8a631",2854:"9a79a3837367113e",2964:"a25401a33b51ec82",2967:"44624b21a5509fb8",2968:"2f06d9af271e56ad",2975:"998b9630d8c24f8c",3046:"5a366fc94316564d",3053:"24a09e3b25b1f5e0",3091:"851631f8d76c4ef7",3121:"4fa9413a2ff7638a",3149:"d4b622969d456d28",3152:"84166e1a90e004c2",3186:"16eb698acf76d303",3187:"d272ebeaf4e34613",3214:"0baf1209b5840384",3269:"2a61807472d5da75",3283:"8bb13482e32d8ae9",3298:"c33bc774a80bfcda",3395:"6cf40b978395473d",3408:"9f0a556b327d1bf9",3445:"0396826af78ffe3e",3467:"504570e2704547c5",3507:"501404a7619aea04",3519:"c33e8bcceefbd599",3543:"0bfe9083681c086b",3573:"ce9ac84a09ee297d",3621:"dd58a8de4b60add2",3665:"553ab94bcfc03dfa",3707:"5f78299097c5a62d",3750:"34c3b72712e6baef",3754:"43514a15150d566e",3758:"07e09eb87b04107a",3785:"505fc874a2c32e50",3917:"9c7dc6ac5451c4be",3941:"99f1d3dab854f9d4",3949:"cbc3e1caba2e9454",3961:"2a2922e32da3b5ee",4001:"deff857676414756",4006:"8429afb20f76ce63",4031:"f8728d491880a3d1",4044:"b472890eb748ce58",4075:"55836c0a24d1019d",4106:"67321d7928f3abc2",4120:"a8df79530e364d74",4147:"9674b53cad8fdb26",4166:"da5c6f91c446ae9e",4200:"6154eff5f94c187f",4255:"fa736d438994fd93",4276:"cc11e3940700b9ec",4325:"bd684c2376bab406",4343:"f32019cbc7ec8a76",4344:"4d3c9752f00afc34",4376:"9dfc735a2c230489",4406:"948e2ebfc95670ab",4438:"53abe19a25fd9792",4451:"59a8e6653c0f47ec",4474:"7ad6f94127430803",4495:"2267787221e86b43",4518:"b1a6705cae1a839a",4557:"206442e3874bdb3e",4571:"86e19d0c209345ae",4596:"def7f01433b08394",4609:"b662622db7d6ebca",4610:"48d662a10db2e5ea",4615:"f1f13d53e05b665a",4643:"18696fa247b7a6cf",4645:"f9ab3847a146d4da",4685:"13504a05d897f0e3",4702:"bd18ca9e0de4bdd4",4721:"3869b30f9813b163",4794:"4ccbc4bb8cf89ce0",4812:"247fa88d7e245893",4836:"3781782a7d0a77d4",4859:"0534fb0748b1fb37",4864:"35725800eed8855e",4970:"ce28e17849c1069e",4984:"948960e70befaccf",4994:"ce6a86f509b9654c",5034:"2a44306d8b419bb1",5097:"3cd84589c1d7c02a",5108:"b17f285b438a1f36",5144:"0d074dbaf5ce222c",5174:"ceedc116de1eaa0c",5188:"050c200c7e844bf5",5189:"baf34ee466a2eaec",5216:"0f0c3ae4715bd486",5279:"7edf32f86d9277b4",5322:"5e271e4da84cb295",5345:"062ccfffbda6f88f",5366:"967bb84f6b87ab2d",5375:"f29149b3205d799b",5415:"69708fe4ea465c61",5440:"4c70c91260a92023",5454:"4f37e4891f8cff0b",5461:"49e86ebbb63e2f05",5479:"048068e7c00c142c",5483:"34e627258f8ac59b",5500:"ad083b4e5979aa85",5512:"8342583bd0a1eace",5533:"b45aa43b06d44802",5536:"8387a4076c838bc2",5604:"3f7153a7726d171f",5658:"05cbd0dc3de4c499",5703:"98facba037cb91ec",5738:"cedf1c62602ed823",5818:"770d545b725d6ea1",5823:"049b0dc444088ee5",5833:"13e0fd810d826909",5847:"d0b3733b5111b894",5873:"a13acc9854434709",5897:"cb767c6026dcda4a",5909:"3f647aed325f9831",5959:"199ece06b98ca995",6057:"d96c773b26dc0f8a",6061:"6667aae01e2d91fc",6081:"825c8cd70202a838",6082:"13d9f9381e01baf7",6109:"299eda29f616d734",6147:"ad666ef3a8f8c46f",6156:"b2649985d7ddc77b",6184:"6199b193f7a81398",6194:"e57f398ebf1e06af",6197:"3d1cbb02dab5a84a",6201:"432558ed232f57ef",6207:"81ea884d02d7e0a8",6222:"80bf2c767dabb2c0",6243:"769191079d42f87e",6326:"e29459a51aa3438a",6368:"b76f7110a1c49e21",6485:"3a9fc808311903f8",6539:"6a5dd7c795511a64",6547:"59d0264d8d972e39",6571:"e7517ca26953ee91",6623:"c87342d3eda1e2e1",6645:"940a468c89b26414",6743:"80dcfb0fdfeef971",6756:"cd62a8dda8b9b4f4",6776:"b38567920b705949",6791:"08050185f17845da",6798:"ac1ed5eab5f90751",6805:"5e568de7ece48b4d",6862:"c904e7bb0c504ec6",6918:"37660f072875dd29",6922:"4481b8d32c8ab7f9",6929:"21397296d7a3d055",6931:"281e511a92f1cb9b",6958:"4f0edcb738a8a464",6980:"3c267b8fe128762f",6983:"b1e211311dae8be6",7026:"65782a6d15f3250d",7045:"00e174b6a013e7c7",7086:"053656fed03f4cdb",7116:"7b2691bb8874e00d",7119:"eb52a745b86924fc",7171:"3fda53136eb9e366",7172:"8f31680bc0166dae",7173:"f1aa898221ef33cf",7194:"1381511f4f5ea8fa",7300:"ca4ecb1546d1f8fe",7372:"6c6f39129bdbdf67",7412:"eddbc2b0c4a48fee",7464:"0af859385709f138",7537:"17e6ce6d9f19db76",7565:"773c356eacb9482c",7578:"8d55edf3798213ae",7598:"d1a24dff2d6d0ddb",7624:"fd3a30fab6ac47ad",7761:"5fcdc6e6b2a10387",7766:"70f645093f7403b5",7776:"794d64db8857c0aa",7783:"9bd0ddcc082cc951",7793:"8282c6baf00b9023",7839:"9d441e67657ee5c7",7877:"7b9c7fbe91f60ecb",7905:"098aa36ba1229705",7909:"8412cfeaeb56a499",7917:"ca52f940b038b8c0",7925:"034642194a1cb303",7972:"2a503ee9870a1d0c",7978:"38d3fd94d2ffbe8c",8009:"54944dbad4414953",8026:"bff69867e5e37b3e",8035:"96d9688504c1d8a4",8122:"ab9784048f5ce44b",8130:"8fad7db743e61c54",8149:"5297c9422146232c",8204:"a506725a28df0cec",8225:"df7d6090f910d8da",8226:"d7a790b66cc1d272",8257:"386fdb8039752be2",8293:"15549974d7072f25",8299:"c56709abb821d85d",8341:"e48f7c677392bf20",8345:"8794886739958369",8471:"bfaa86497253d686",8495:"54cf59355f8b87b6",8501:"8217d7628b4cbc4c",8505:"a06f6b90a5b78b3d",8534:"14669fe0fc020eb2",8577:"c0368cb38d383419",8616:"a5bbc359b9509b39",8623:"747cf03765cd67bb",8630:"180d5fe941ec063d",8637:"be7f7551f1f1e4f4",8681:"730027d235a71db7",8696:"a0f65a2bc57d8d11",8713:"b0e39aa6f8031056",8729:"61de61c0c68746a5",8731:"19ec8279df5280a2",8798:"307acd86769be20e",8825:"a483c66510061abd",8850:"7d339b09b3f42766",8895:"0c6d8ea98b4f8656",8912:"a8dfff93b1ea6489",8953:"b7bc44e53f4505d9",8958:"a01e68eb7313f93b",8970:"69bad219076cc36b",8981:"a4c4233e552453e6",9020:"8177bd28bdd2305b",9090:"346e7f9238591445",9171:"a1a1de1a3b5900b1",9196:"ada43bb54e56da16",9211:"b033d1400e3ce4d5",9276:"6fde6011759a5135",9327:"0a18d5489445979e",9358:"3aeef5e888b5febe",9393:"7f8e07e8491b828f",9458:"43805ee411f504a3",9470:"66e7428f38b710be",9489:"8c2a461cca33aaeb",9511:"33d4a34b5d7b3f9b",9562:"f85bec9390c16417",9607:"a0163b5be0e96d6a",9608:"07a1423b63c39807",9611:"68b49eb973f33a14",9618:"7416a46415465bee",9620:"51b2b6c7f434c47f",9669:"1977a88ba2282e79",9754:"fc74c71eed003c31",9802:"261816bf3de981e8",9872:"53de7eafe2119600",9897:"6904940ca6bc5a91",9924:"5b90e77ae4d35bfa",9936:"a794976af9f09b87",9948:"2f2f9f11fa4365ab",9968:"dfdf113f1bdb8073"}[e]+".legacy.js"},r.miniCssF=function(e){return 4296===e?"bundle.934f62e49a5f606d.legacy.css":e+"."+{215:"70d33be5f841f43d",293:"c4cf2b355de07580",323:"99045f6ce9a44a7b",369:"a6a4f0b7583aea0c",559:"9eba09f554f9c652",561:"f824f00cf05a804b",566:"49cb665822ab8641",569:"9816fd23b1c8e493",601:"0985db8c4eaf4388",642:"cd38fc7af3acd53e",684:"d147f93119c4bbf7",773:"a2dee53c7aa8038a",809:"090d10ff18c621ba",919:"da38a614c2b720ef",952:"e116f19bf27a53c3",975:"62ad88a1759a9b11",986:"bf4d55fa2b38e07a",1028:"7ba62c8eef912b2e",1036:"02cb8c7420bd35a7",1086:"7f9f00b39a8c4b33",1110:"63dcc69dd7ee6fe6",1136:"ca1a43b6173266ac",1178:"25f857f404ec548e",1179:"2b8ea85f77420883",1200:"e9dff6e64a28521a",1226:"d54ae03fb78f4700",1235:"a52024dae2f1cfe6",1242:"b6977a7d5c37631d",1281:"ee7a574bec4434ff",1299:"eb31237605135ad2",1303:"d59909f4db4ff8d0",1337:"934518d065ed00cd",1466:"736e36fa925c3cee",1473:"edf685be9734e3ba",1531:"2c145f95ffc9b909",1540:"2b0f7981487def3b",1565:"bfffe4985956532f",1584:"5e247493c27423f5",1714:"4934039d971bc6ff",1951:"badaf972ce9fc6dd",1968:"f90afd4a17296553",1979:"cd578d948731232b",1981:"565bf98fcd097613",2009:"2e8127466cf89669",2041:"d06544f4628e68a0",2063:"1784c80c096642d2",2142:"0e1f8f184707c5a7",2161:"39f7371fcda04d01",2258:"06e4ae6fe0918aec",2356:"ab86c6d0d303a8c1",2412:"02021042c85963eb",2446:"ca1733cbf1773cec",2460:"56783f57bd75c12b",2496:"af74986e5d673525",2601:"bb5ef90ba4c33cc9",2629:"6ad0dcfdd3c95ccf",2718:"40aa013190fdd461",2793:"4c3f3b102a30b4a8",2845:"f4e50af9f9c8a631",2968:"2f06d9af271e56ad",3046:"5a366fc94316564d",3091:"851631f8d76c4ef7",3121:"4fa9413a2ff7638a",3149:"d4b622969d456d28",3152:"84166e1a90e004c2",3186:"16eb698acf76d303",3187:"d272ebeaf4e34613",3269:"2a61807472d5da75",3283:"8bb13482e32d8ae9",3395:"6cf40b978395473d",3445:"0396826af78ffe3e",3467:"504570e2704547c5",3507:"501404a7619aea04",3519:"c33e8bcceefbd599",3543:"0bfe9083681c086b",3573:"ce9ac84a09ee297d",3621:"dd58a8de4b60add2",3665:"553ab94bcfc03dfa",3707:"5f78299097c5a62d",3750:"34c3b72712e6baef",3754:"43514a15150d566e",3758:"07e09eb87b04107a",3785:"505fc874a2c32e50",4001:"deff857676414756",4006:"8429afb20f76ce63",4075:"55836c0a24d1019d",4106:"67321d7928f3abc2",4147:"9674b53cad8fdb26",4166:"da5c6f91c446ae9e",4200:"6154eff5f94c187f",4255:"fa736d438994fd93",4325:"bd684c2376bab406",4343:"f32019cbc7ec8a76",4344:"4d3c9752f00afc34",4376:"9dfc735a2c230489",4438:"53abe19a25fd9792",4451:"59a8e6653c0f47ec",4474:"7ad6f94127430803",4518:"b1a6705cae1a839a",4557:"206442e3874bdb3e",4571:"86e19d0c209345ae",4596:"def7f01433b08394",4615:"f1f13d53e05b665a",4643:"18696fa247b7a6cf",4645:"f9ab3847a146d4da",4721:"3869b30f9813b163",4794:"4ccbc4bb8cf89ce0",4864:"35725800eed8855e",5108:"b17f285b438a1f36",5174:"ceedc116de1eaa0c",5189:"baf34ee466a2eaec",5322:"5e271e4da84cb295",5345:"062ccfffbda6f88f",5375:"f29149b3205d799b",5415:"69708fe4ea465c61",5440:"4c70c91260a92023",5461:"49e86ebbb63e2f05",5479:"048068e7c00c142c",5483:"34e627258f8ac59b",5500:"ad083b4e5979aa85",5738:"cedf1c62602ed823",5823:"049b0dc444088ee5",5833:"13e0fd810d826909",5909:"3f647aed325f9831",5959:"199ece06b98ca995",6061:"6667aae01e2d91fc",6081:"825c8cd70202a838",6109:"299eda29f616d734",6184:"6199b193f7a81398",6197:"3d1cbb02dab5a84a",6201:"432558ed232f57ef",6207:"81ea884d02d7e0a8",6243:"769191079d42f87e",6326:"e29459a51aa3438a",6368:"b76f7110a1c49e21",6485:"3a9fc808311903f8",6539:"6a5dd7c795511a64",6547:"59d0264d8d972e39",6623:"c87342d3eda1e2e1",6743:"80dcfb0fdfeef971",6776:"b38567920b705949",6791:"08050185f17845da",6798:"ac1ed5eab5f90751",6805:"5e568de7ece48b4d",6862:"c904e7bb0c504ec6",6922:"4481b8d32c8ab7f9",6929:"21397296d7a3d055",6931:"281e511a92f1cb9b",6980:"3c267b8fe128762f",6983:"b1e211311dae8be6",7026:"65782a6d15f3250d",7086:"053656fed03f4cdb",7116:"7b2691bb8874e00d",7171:"3fda53136eb9e366",7194:"1381511f4f5ea8fa",7412:"eddbc2b0c4a48fee",7464:"0af859385709f138",7537:"17e6ce6d9f19db76",7598:"d1a24dff2d6d0ddb",7766:"70f645093f7403b5",7776:"794d64db8857c0aa",7793:"8282c6baf00b9023",7839:"9d441e67657ee5c7",7905:"098aa36ba1229705",7917:"ca52f940b038b8c0",7972:"2a503ee9870a1d0c",7978:"38d3fd94d2ffbe8c",8009:"54944dbad4414953",8026:"bff69867e5e37b3e",8035:"96d9688504c1d8a4",8204:"a506725a28df0cec",8257:"386fdb8039752be2",8293:"15549974d7072f25",8341:"e48f7c677392bf20",8345:"8794886739958369",8501:"8217d7628b4cbc4c",8534:"14669fe0fc020eb2",8616:"a5bbc359b9509b39",8623:"747cf03765cd67bb",8630:"180d5fe941ec063d",8637:"be7f7551f1f1e4f4",8681:"730027d235a71db7",8696:"a0f65a2bc57d8d11",8713:"b0e39aa6f8031056",8729:"61de61c0c68746a5",8731:"19ec8279df5280a2",8850:"7d339b09b3f42766",8912:"a8dfff93b1ea6489",8958:"a01e68eb7313f93b",8970:"69bad219076cc36b",9020:"8177bd28bdd2305b",9090:"346e7f9238591445",9171:"a1a1de1a3b5900b1",9211:"b033d1400e3ce4d5",9276:"6fde6011759a5135",9358:"3aeef5e888b5febe",9489:"8c2a461cca33aaeb",9607:"a0163b5be0e96d6a",9611:"68b49eb973f33a14",9618:"7416a46415465bee",9620:"51b2b6c7f434c47f",9754:"fc74c71eed003c31",9897:"6904940ca6bc5a91",9924:"5b90e77ae4d35bfa",9936:"a794976af9f09b87",9948:"2f2f9f11fa4365ab",9968:"dfdf113f1bdb8073"}[e]+".legacy.css"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c={},d="shopee-pc:",r.l=function(e,a,f,b){if(c[e])c[e].push(a);else{var o,t;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var s=n[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==d+f){o=s;break}}o||(t=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",d+f),o.src=e),c[e]=[a];var l=function(a,d){o.onerror=o.onload=null,clearTimeout(p);var f=c[e];if(delete c[e],o.parentNode&&o.parentNode.removeChild(o),f&&f.forEach((function(e){return e(d)})),a)return a(d)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),t&&document.head.appendChild(o)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.p="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/",f=function(e){return new Promise((function(a,c){var d=r.miniCssF(e),f=r.p+d;if(function(e,a){for(var c=document.getElementsByTagName("link"),d=0;d<c.length;d++){var f=(o=c[d]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(f===e||f===a))return o}var b=document.getElementsByTagName("style");for(d=0;d<b.length;d++){var o;if((f=(o=b[d]).getAttribute("data-href"))===e||f===a)return o}}(d,f))return a();!function(e,a,c,d){var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onerror=f.onload=function(b){if(f.onerror=f.onload=null,"load"===b.type)c();else{var o=b&&("load"===b.type?"missing":b.type),t=b&&b.target&&b.target.href||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=o,r.request=t,f.parentNode.removeChild(f),d(r)}},f.href=a,document.head.appendChild(f)}(e,f,a,c)}))},b={6658:0},r.f.miniCss=function(e,a){b[e]?a.push(b[e]):0!==b[e]&&{215:1,293:1,323:1,369:1,559:1,561:1,566:1,569:1,601:1,642:1,684:1,773:1,809:1,919:1,952:1,975:1,986:1,1028:1,1036:1,1086:1,1110:1,1136:1,1178:1,1179:1,1200:1,1226:1,1235:1,1242:1,1281:1,1299:1,1303:1,1337:1,1466:1,1473:1,1531:1,1540:1,1565:1,1584:1,1714:1,1951:1,1968:1,1979:1,1981:1,2009:1,2041:1,2063:1,2142:1,2161:1,2258:1,2356:1,2412:1,2446:1,2460:1,2496:1,2601:1,2629:1,2718:1,2793:1,2845:1,2968:1,3046:1,3091:1,3121:1,3149:1,3152:1,3186:1,3187:1,3269:1,3283:1,3395:1,3445:1,3467:1,3507:1,3519:1,3543:1,3573:1,3621:1,3665:1,3707:1,3750:1,3754:1,3758:1,3785:1,4001:1,4006:1,4075:1,4106:1,4147:1,4166:1,4200:1,4255:1,4325:1,4343:1,4344:1,4376:1,4438:1,4451:1,4474:1,4518:1,4557:1,4571:1,4596:1,4615:1,4643:1,4645:1,4721:1,4794:1,4864:1,5108:1,5174:1,5189:1,5322:1,5345:1,5375:1,5415:1,5440:1,5461:1,5479:1,5483:1,5500:1,5738:1,5823:1,5833:1,5909:1,5959:1,6061:1,6081:1,6109:1,6184:1,6197:1,6201:1,6207:1,6243:1,6326:1,6368:1,6485:1,6539:1,6547:1,6623:1,6743:1,6776:1,6791:1,6798:1,6805:1,6862:1,6922:1,6929:1,6931:1,6980:1,6983:1,7026:1,7086:1,7116:1,7171:1,7194:1,7412:1,7464:1,7537:1,7598:1,7766:1,7776:1,7793:1,7839:1,7905:1,7917:1,7972:1,7978:1,8009:1,8026:1,8035:1,8204:1,8257:1,8293:1,8341:1,8345:1,8501:1,8534:1,8616:1,8623:1,8630:1,8637:1,8681:1,8696:1,8713:1,8729:1,8731:1,8850:1,8912:1,8958:1,8970:1,9020:1,9090:1,9171:1,9211:1,9276:1,9358:1,9489:1,9607:1,9611:1,9618:1,9620:1,9754:1,9897:1,9924:1,9936:1,9948:1,9968:1}[e]&&a.push(b[e]=f(e).then((function(){b[e]=0}),(function(a){throw delete b[e],a})))},function(){var e={6658:0},a=[];r.f.j=function(a,c){var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(6(326|805|983)|1281|1584|7917|8035|8731)$/.test(a))e[a]=0;else{var f=new Promise((function(c,f){d=e[a]=[c,f]}));c.push(d[2]=f);var b=r.p+r.u(a),o=new Error;r.l(b,(function(c){if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var f=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;o.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",o.name="ChunkLoadError",o.type=f,o.request=b,d[1](o)}}),"chunk-"+a,a)}};var c=function(){},d=function(d,f){for(var b,o,t=f[0],n=f[1],i=f[2],s=f[3],l=0,p=[];l<t.length;l++)o=t[l],r.o(e,o)&&e[o]&&p.push(e[o][0]),e[o]=0;for(b in n)r.o(n,b)&&(r.m[b]=n[b]);for(i&&i(r),d&&d(f);p.length;)p.shift()();return s&&a.push.apply(a,s),c()},f=("undefined"!=typeof self?self:this).webpackChunkshopee_pc=("undefined"!=typeof self?self:this).webpackChunkshopee_pc||[];function b(){for(var c,d=0;d<a.length;d++){for(var f=a[d],b=!0,o=1;o<f.length;o++){var t=f[o];0!==e[t]&&(b=!1)}b&&(a.splice(d--,1),c=r(r.s=f[0]))}return 0===a.length&&(r.x(),r.x=function(){}),c}f.forEach(d.bind(null,0)),f.push=d.bind(null,f.push.bind(f));var o=r.x;r.x=function(){return r.x=o||function(){},(c=b)()}}(),r.x()}();
//# sourceMappingURL=https://shopee.sg/assets/webpack-runtime.91915323ddf552ff.legacy.js.map