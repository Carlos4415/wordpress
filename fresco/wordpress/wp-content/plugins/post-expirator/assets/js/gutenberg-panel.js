(()=>{"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,u=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw u}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};!function(r,o){var u,i=r.plugins.registerPlugin,s=r.editPost.PluginDocumentSettingPanel,a=r.components,c=a.PanelRow,f=a.DateTimePicker,l=a.CheckboxControl,m=a.SelectControl,T=a.FormTokenField,p=a.Spinner,y=r.element.Fragment,A=r.htmlEntities.decodeEntities,g=React.useEffect,E=r.url.addQueryArgs,d=r.data,h=d.useSelect,_=d.useDispatch,b=d.register,F=d.createReduxStore,x=d.select,N=r.apiFetch,S=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var u;console&&o.isDebugEnabled&&(u=console).debug.apply(u,["[Future]",e].concat(n))},D=function(){return(new Date).getTime()/1e3},v=(u={futureAction:null,futureActionDate:D(),futureActionEnabled:!1,futureActionTerms:[],futureActionTaxonomy:null,termsListByName:null,termsListById:null,taxonomyName:null,isFetchingTerms:!1},o&&o.postTypeDefaultConfig?(o.postTypeDefaultConfig.autoEnable&&(u.futureActionEnabled=!0),o.postTypeDefaultConfig.expireType&&(u.futureAction=o.postTypeDefaultConfig.expireType),o.defaultDate?u.futureActionDate=parseInt(o.defaultDate):u.futureActionDate=D(),o.postTypeDefaultConfig.taxonomy&&(u.futureActionTaxonomy=o.postTypeDefaultConfig.taxonomy),o.postTypeDefaultConfig.terms&&(u.futureActionTerms=o.postTypeDefaultConfig.terms.split(",").map((function(e){return parseInt(e)}))),u):u);S("DEFAULT_STATE",v);var I=F("publishpress-future/store",{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments[1];switch(t.type){case"SET_FUTURE_ACTION":return n({},e,{futureAction:t.futureAction});case"SET_FUTURE_ACTION_DATE":return n({},e,{futureActionDate:t.futureActionDate});case"SET_FUTURE_ACTION_ENABLED":return n({},e,{futureActionEnabled:t.futureActionEnabled});case"SET_FUTURE_ACTION_TERMS":return n({},e,{futureActionTerms:t.futureActionTerms});case"SET_FUTURE_ACTION_TAXONOMY":return n({},e,{futureActionTaxonomy:t.futureActionTaxonomy});case"SET_TERMS_LIST_BY_NAME":return n({},e,{termsListByName:t.termsListByName});case"SET_TERMS_LIST_BY_ID":return n({},e,{termsListById:t.termsListById});case"SET_TAXONOMY_NAME":return n({},e,{taxonomyName:t.taxonomyName})}return e},actions:{setFutureAction:function(e){return{type:"SET_FUTURE_ACTION",futureAction:e}},setFutureActionDate:function(e){return{type:"SET_FUTURE_ACTION_DATE",futureActionDate:e}},setFutureActionEnabled:function(e){return{type:"SET_FUTURE_ACTION_ENABLED",futureActionEnabled:e}},setFutureActionTerms:function(e){return{type:"SET_FUTURE_ACTION_TERMS",futureActionTerms:e}},setFutureActionTaxonomy:function(e){return{type:"SET_FUTURE_ACTION_TAXONOMY",futureActionTaxonomy:e}},setTermsListByName:function(e){return{type:"SET_TERMS_LIST_BY_NAME",termsListByName:e}},setTermsListById:function(e){return{type:"SET_TERMS_LIST_BY_ID",termsListById:e}},setTaxonomyName:function(e){return{type:"SET_TAXONOMY_NAME",taxonomyName:e}},setIsFetchingTerms:function(e){return{type:"SET_IS_FETCHING_TERMS",isFetchingTerms:e}}},selectors:{getFutureAction:function(e){return e.futureAction},getFutureActionDate:function(e){return e.futureActionDate},getFutureActionEnabled:function(e){return e.futureActionEnabled},getFutureActionTerms:function(e){return e.futureActionTerms},getFutureActionTaxonomy:function(e){return e.futureActionTaxonomy},getTermsListByName:function(e){return e.termsListByName},getTermsListById:function(e){return e.termsListById},getTaxonomyName:function(e){return e.taxonomyName},getIsFetchingTerms:function(e){return e.isFetchingTerms}}});b(I),i("publishpress-future-action",{render:function(){var n=h((function(e){return e("publishpress-future/store").getFutureAction()}),[]),r=h((function(e){return e("publishpress-future/store").getFutureActionDate()}),[]),u=h((function(e){return e("publishpress-future/store").getFutureActionEnabled()}),[]),i=h((function(e){return e("publishpress-future/store").getFutureActionTerms()}),[]),a=h((function(e){return e("publishpress-future/store").getFutureActionTaxonomy()}),[]),d=h((function(e){return e("publishpress-future/store").getTermsListByName()}),[]),b=h((function(e){return e("publishpress-future/store").getTermsListById()}),[]),F=h((function(e){return e("publishpress-future/store").getIsFetchingTerms()}),[]),D=_("publishpress-future/store"),I=D.setFutureAction,R=D.setFutureActionDate,C=D.setFutureActionEnabled,O=D.setFutureActionTerms,B=D.setFutureActionTaxonomy,L=D.setTermsListByName,w=D.setTermsListById,U=D.setTaxonomyName,M=D.setIsFetchingTerms,P=_("core/editor").editPost,k=function(e){C(e);var t={enabled:e};e&&(I(v.futureAction),R(v.futureActionDate),O(v.futureActionTerms),B(v.futureActionTaxonomy),t.action=v.futureAction,t.date=v.futureActionDate,t.terms=v.futureActionTerms,t.taxonomy=v.futureActionTaxonomy,Y()),j(t)},Y=function(){S("fetchTerms","Fetching terms...");var e=x("publishpress-future/store").getFutureActionTaxonomy(),t=x("core/editor").getCurrentPostType(),n={},r={};M(!0),S("futureActionTaxonomy",e),!e&&"post"===t||"category"===e?(S("fetchTerms","Fetching categories..."),N({path:E("wp/v2/categories",{per_page:-1})}).then((function(e){S("list",e),e.forEach((function(e){n[e.name]=e,r[e.id]=e.name})),L(n),w(r),U(o.strings.category),M(!1)}))):(S("fetchTerms","Fetching taxonomies..."),N({path:E("publishpress-future/v1/taxonomies/"+t)}).then((function(t){S("response",t),parseInt(t.count)>0?N({path:E("wp/v2/taxonomies/"+e,{context:"edit",per_page:-1})}).then((function(e){S("taxAttributes",e),N({path:E("wp/v2/"+e.rest_base,{context:"edit",per_page:-1})}).then((function(t){S("terms",t),t.forEach((function(e){n[A(e.name)]=e,r[e.id]=A(e.name)})),L(n),w(r),U(A(e.name)),M(!1)}))})):S("fetchTerms","No taxonomies found")})))},j=function(e){var o={publishpress_future_action:{enabled:u,date:r,action:n,terms:i,taxonomy:a,browser_timezone_offset:(new Date).getTimezoneOffset()}},s=!0,c=!1,f=void 0;try{for(var l,m=Object.entries(e)[Symbol.iterator]();!(s=(l=m.next()).done);s=!0){var T=l.value,p=t(T,2),y=p[0],A=p[1];o.publishpress_future_action[y]=A}}catch(e){c=!0,f=e}finally{try{!s&&m.return&&m.return()}finally{if(c)throw f}}P(o),S("editPostAttribute",e,o)};g((function(){var e;e=x("core/editor").getEditedPostAttribute("publishpress_future_action"),S("fetchFutureActionData",e),C(e.enabled).then(undefined),I(e.action),R(new Date(e.date).getTime()/1e3),O(e.terms),B(e.taxonomy);var t=x("publishpress-future/store").getFutureActionEnabled(),n=x("core/editor").isCleanNewPost();S("enabled",t),S("isCleanNewPost",n),t&&(n&&k(!0),Y())}),[]);var X=[];S("futureActionTerms",i),i&&i.length>0&&b&&"string"==typeof(X=i.map((function(e){return b[e]})).filter((function(e){return null!=e&&""!==e})))&&(X=[]);var H=r;S("futureActionDate",r),S("currentDate",H);var z=[];return"object"===(void 0===d?"undefined":e(d))&&null!==d&&(z=Object.keys(d)),React.createElement(s,{title:o.strings.panelTitle,icon:"calendar",initialOpen:u,className:"post-expirator-panel"},React.createElement(c,null,React.createElement(l,{label:o.strings.enablePostExpiration,checked:u,onChange:k})),u&&React.createElement(y,null,React.createElement(c,{className:"future-action-date-panel"},React.createElement(f,{currentDate:1e3*H,onChange:function(e){var t=new Date(e).getTime()/1e3;R(t),j({date:t})},__nextRemoveHelpButton:!0,is12Hour:o.is12hours,startOfWeek:o.startOfWeek})),React.createElement(m,{label:o.strings.action,value:n,options:o.actionsSelectOptions,onChange:function(e){I(e),j({action:e})}}),String(n).includes("category")&&(F&&React.createElement(y,null,o.strings.loading+" ("+a+")",React.createElement(p,null))||!a&&React.createElement("p",null,React.createElement("i",{className:"dashicons dashicons-warning"})," ",o.strings.noTaxonomyFound)||0===z.length&&React.createElement("p",null,React.createElement("i",{className:"dashicons dashicons-warning"})," ",o.strings.noTermsFound)||React.createElement(T,{label:o.taxonomyName,value:X,suggestions:Object.keys(d),onChange:function(e){e=e.map((function(e){return d[e].id})),O(e),j({terms:e})},maxSuggestions:10}))))}})}(window.wp,window.postExpiratorPanelConfig)})();
//# sourceMappingURL=gutenberg-panel.js.map