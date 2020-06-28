{"version":3,"sources":["contenttypes.js"],"names":["BX","namespace","Report","VisualConstructor","Widget","Content","AmChart","options","Dashboard","apply","this","arguments","chartWrapper","create","style","height","getHeight","paddingTop","addCustomEvent","widget","data","isFilled","AmCharts","isReady","ready","makeChart","bind","prototype","__proto__","constructor","clickHandler","render","jsDD","unregisterObject","getWidget","getWidgetContainer","makeDraggable","getHeadContainer","monthNames","shortMonthNames","m","push","message","toString","chart","prepareDataForAmChart","dataProvider","length","addListener","invalidateSize","func","type","isArray","forEach","graph","VC","Core","getFunction","Type","isFunction","Error","handleItemClick","event","valueField","item","urlField","dashPosition","search","graphNum","substr","dataContext","hasOwnProperty","url","isNotEmptyString","SidePanel","Instance","open","cacheable","window","PieDiagram","chartDiv","call","opacity","setTimeout","transition","Funnel","paddingLeft","Activity","getCell","handlerClearCell","PopupWindowManager","closeAllPopups","graphContainer","ActivityTileWidget","renderTo","labelY","config","labelX","items","NumberBlock","Html","setColor","applyColor","backgroundColor","getColor","getWidgetWrapper","color","substring","isWidgetDarkMode","Utils","isDarkColor","classList","remove","add","GroupedDataGrid","htmlContentWrapper","parentNode","content","clientHeight"],"mappings":"CAAC,WAEA,aACAA,GAAGC,UAAU,8CAQbD,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAAU,SAAUC,GAE9DP,GAAGE,OAAOM,UAAUH,QAAQI,MAAMC,KAAMC,WACxCD,KAAKE,aAAeZ,GAAGa,OAAO,OAC7BC,OACCC,OAAQL,KAAKM,YAAc,EAAI,KAC/BC,WAAY,SAIdjB,GAAGkB,eAAeR,KAAKS,OAAQ,uCAAwC,WAEtE,GAAIT,KAAKU,KAAKC,SACd,CACC,IAAKC,SAASC,QACd,CACCD,SAASE,MAAMd,KAAKe,UAAUC,KAAKhB,WAGpC,CACCA,KAAKe,eAGNC,KAAKhB,QAIRV,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAAQqB,WAClDC,UAAW5B,GAAGE,OAAOM,UAAUH,QAAQsB,UACvCE,YAAa7B,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAExDwB,aAAc,KACdC,OAAQ,WAEPC,KAAKC,iBAAiBvB,KAAKwB,YAAYC,sBACvCzB,KAAKwB,YAAYE,cAAc1B,KAAKwB,YAAYG,oBAChD,OAAO3B,KAAKE,cAEba,UAAW,WAEV,IAAIa,KACJ,IAAIC,KACJ,IAAI,IAAIC,EAAI,EAAGA,GAAK,GAAIA,IACxB,CACCF,EAAWG,KAAKzC,GAAG0C,QAAQ,SAAWF,EAAEG,aACxCJ,EAAgBE,KAAKzC,GAAG0C,QAAQ,OAASF,EAAEG,aAG5CrB,SAASgB,WAAaA,EACtBhB,SAASiB,gBAAkBA,EAE3B,IAAK7B,KAAKkC,MACV,CACClC,KAAKmC,wBACL,GAAInC,KAAKU,KAAK0B,aAAaC,OAC3B,CACCrC,KAAKkC,MAAQtB,SAASG,UAAUf,KAAKE,aAAcF,KAAKU,MACxD,GAAGV,KAAKoB,aACR,CACCpB,KAAKkC,MAAMI,YAAY,iBAAkBtC,KAAKoB,gBAKjD,GAAIpB,KAAKkC,MACT,CACClC,KAAKkC,MAAMK,mBAGbJ,sBAAuB,WAEtB,IAAIK,EAEJ,GAAIxC,KAAKU,KAAK,WAAapB,GAAGmD,KAAKC,QAAQ1C,KAAKU,KAAK,WACrD,CACCV,KAAKU,KAAK,UAAUiC,QAAQ,SAASC,GAEpC,GAAGA,EAAM,mBACT,CACCJ,EAAOlD,GAAGE,OAAOqD,GAAGC,KAAKC,YAAYH,EAAM,oBAC3C,GAAGtD,GAAG0D,KAAKC,WAAWT,GACtB,CACCI,EAAM,mBAAqBJ,MAG5B,CACC,MAAM,IAAIU,MAAM,mBAAqBN,EAAM,mBAAqB,0BAKpE,GAAG5C,KAAKU,KAAK,kBACb,CACC8B,EAAOlD,GAAGE,OAAOqD,GAAGC,KAAKC,YAAY/C,KAAKU,KAAK,mBAC/C,GAAGpB,GAAG0D,KAAKC,WAAWT,GACtB,CACCxC,KAAKoB,aAAeoB,SACbxC,KAAKU,KAAK,sBAGlB,CACC,MAAM,IAAIwC,MAAM,gCAAkClD,KAAKU,KAAK,kBAAoB,2BAIlF,CACCV,KAAKoB,aAAepB,KAAKmD,gBAAgBnC,KAAKhB,QAGhDmD,gBAAiB,SAASC,GAEzB,IAAIC,EAAaD,EAAME,KAAKV,MAAMS,WAAWpB,WAC7C,IAAIsB,EAAW,YACf,IAAIC,EAAeH,EAAWI,OAAO,KAErC,GAAID,IAAiB,EACrB,CACC,IAAIE,EAAWL,EAAWM,OAAOH,EAAe,GAChDD,EAAWA,EAAW,IAAMG,EAG7B,IAAKN,EAAME,KAAKM,YAAYC,eAAeN,GAC3C,CACC,OAED,IAAIO,EAAMV,EAAME,KAAKM,YAAYL,GACjC,GAAGjE,GAAGmD,KAAKsB,iBAAiBD,GAC5B,CACC,GAAGxE,GAAG0E,UACN,CACC1E,GAAG0E,UAAUC,SAASC,KAAKJ,GAC1BK,UAAW,YAIb,CACCC,OAAOF,KAAKJ,OAOhBxE,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAAQyE,WAAa,SAASxE,GAExEP,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAAQG,MAAMC,KAAMC,YAGhEX,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAAQyE,WAAWpD,WAC7DC,UAAW5B,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAAQqB,UAC9DE,YAAa7B,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAAQyE,WAChEhD,OAAQ,WAEP,IAAIiD,EAAWhF,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAAQqB,UAAUI,OAAOkD,KAAKvE,MAC/EsE,EAASlE,MAAMoE,QAAU,EACzBC,WAAW,WACPH,EAASlE,MAAMoE,QAAU,EACzBF,EAASlE,MAAMsE,WAAa,SACvC1D,KAAKsD,GAAW,KAClBhD,KAAKC,iBAAiBvB,KAAKwB,YAAYG,oBACvC3B,KAAKwB,YAAYE,cAAc1B,KAAKwB,YAAYC,sBAChD,OAAO6C,IAMThF,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAAQ+E,OAAS,SAAS9E,GAEpEP,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAAQG,MAAMC,KAAMC,WAC/DD,KAAKE,aAAaE,MAAMwE,YAAc,QAGvCtF,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAAQ+E,OAAO1D,WACzDC,UAAW5B,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAAQqB,UAC9DE,YAAa7B,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQC,QAAQ+E,QAQjErF,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQkF,SAAW,SAAUhF,GAE/DP,GAAGE,OAAOM,UAAUH,QAAQI,MAAMC,KAAMC,WACxCX,GAAGkB,eAAeR,KAAKwB,YAAYsD,UAAW,iCAAkC9E,KAAK+E,iBAAiB/D,KAAKhB,OAC3GA,KAAK4C,MAAQ,MAGdtD,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQkF,SAAS5D,WACnDC,UAAW5B,GAAGE,OAAOM,UAAUH,QAAQsB,UACvCE,YAAa7B,GAAGE,OAAOC,kBAAkBC,OAAOmF,SAChDE,iBAAkB,WAEjBzF,GAAGE,OAAOqD,GAAGmC,mBAAmBC,kBAEjC5D,OAAQ,WAEPC,KAAKC,iBAAiBvB,KAAKwB,YAAYC,sBACvCzB,KAAKwB,YAAYE,cAAc1B,KAAKwB,YAAYG,oBAEhD,IAAK3B,KAAKkF,eACV,CACClF,KAAKkF,eAAiB5F,GAAGa,OAAO,OAC/BC,OACCC,OAAQL,KAAKM,YAAc,QAG7B,IAAIsC,EAAQ,IAAItD,GAAG6F,oBAClBC,SAAUpF,KAAKkF,eACfG,OAAQrF,KAAKU,KAAK4E,OAAOD,OACzBE,OAAQvF,KAAKU,KAAK4E,OAAOC,OACzBC,MAAOxF,KAAKU,KAAK8E,QAElB5C,EAAMvB,SAIP,OAAOrB,KAAKkF,iBAUd5F,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQ8F,YAAc,SAAU5F,GAElEP,GAAGE,OAAOM,UAAUH,QAAQ+F,KAAK3F,MAAMC,KAAMC,YAG9CX,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQ8F,YAAYxE,WACtDC,UAAW5B,GAAGE,OAAOM,UAAUH,QAAQ+F,KAAKzE,UAC5CE,YAAa7B,GAAGE,OAAOC,kBAAkBC,OAAO+F,YAChDpE,OAAQ,WAEPrB,KAAKwB,YAAYmE,SAAS,WAC1B3F,KAAKwB,YAAYoE,aACjB5F,KAAKwB,YAAYG,mBAAmBvB,MAAMyF,gBAAkB7F,KAAK8F,WACjE9F,KAAKwB,YAAYuE,mBAAmB3F,MAAMyF,gBAAkB,UAE5D,IAAIG,EAAQhG,KAAK8F,WAAWG,UAAU,EAAG,GAEzC,IAAIC,EAAmB5G,GAAGE,OAAOM,UAAUqG,MAAMC,YAAYJ,GAC7D,GAAIE,EACJ,CACClG,KAAKwB,YAAYuE,mBAAmBM,UAAUC,OAAO,mDACrDtG,KAAKwB,YAAYuE,mBAAmBM,UAAUE,IAAI,sDAGnD,CACCvG,KAAKwB,YAAYuE,mBAAmBM,UAAUC,OAAO,kDACrDtG,KAAKwB,YAAYuE,mBAAmBM,UAAUE,IAAI,mDAGnD,OAAOjH,GAAGE,OAAOM,UAAUH,QAAQ+F,KAAKzE,UAAUI,OAAOkD,KAAKvE,QAUhEV,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQ6G,gBAAkB,SAAU3G,GAEtEP,GAAGE,OAAOM,UAAUH,QAAQ+F,KAAK3F,MAAMC,KAAMC,YAI9CX,GAAGE,OAAOC,kBAAkBC,OAAOC,QAAQ6G,gBAAgBvF,WAC1DC,UAAW5B,GAAGE,OAAOM,UAAUH,QAAQ+F,KAAKzE,UAC5CE,YAAa7B,GAAGE,OAAOC,kBAAkBC,OAAO8G,gBAChDlG,UAAW,WAGV,GAAIN,KAAKyG,mBAAmBC,WAC5B,CACC,IAAIC,EAAUrH,GAAGE,OAAOM,UAAUH,QAAQ+F,KAAKzE,UAAUI,OAAOkD,KAAKvE,MACrE,OAAO2G,EAAQC,iBAGhB,CACC,OAAO,MAGTvF,OAAQ,WAEP,OAAO/B,GAAGE,OAAOM,UAAUH,QAAQ+F,KAAKzE,UAAUI,OAAOkD,KAAKvE,SA/ShE","file":"contenttypes.map.js"}