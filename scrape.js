// must be run in chrome, firefox doesn't preserve newlines in innerText of synthesized documents

// list from https://www.w3.org/Style/CSS/all-properties.en.html
let w3props = new Set(["align-content","align-items","align-self","alignment-baseline","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","baseline-shift","bookmark-label","bookmark-label","bookmark-level","bookmark-level","bookmark-state","bookmark-state","border-boundary","bottom","box-snap","box-suppress","break-after","break-before","break-inside","clear","color-interpolation-filters","content","counter-increment","counter-reset","counter-set","display","display","display","dominant-baseline","filter","float","flood-color","flood-opacity","flow-from","flow-into","footnote-display","footnote-policy","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","height","image-orientation","image-rendering","image-resolution","initial-letter","initial-letter-align","initial-letter-wrap","justify-content","justify-items","justify-self","left","lighting-color","line-grid","line-snap","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marker-side","marquee-direction","marquee-loop","marquee-speed","marquee-style","max-height","max-lines","max-width","min-height","min-width","object-fit","object-position","offset-after","offset-before","offset-end","offset-start","overflow","overflow","overflow-style","overflow-x","overflow-x","overflow-y","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","perspective","perspective-origin","polar-anchor","polar-angle","polar-distance","polar-origin","position","quotes","region-fragment","right","rotation","rotation-point","ruby-align","ruby-merge","ruby-position","running","scroll-behavior","scroll-snap-align","scroll-snap-margin","scroll-snap-margin-block","scroll-snap-margin-block-end","scroll-snap-margin-block-start","scroll-snap-margin-bottom","scroll-snap-margin-inline","scroll-snap-margin-inline-end","scroll-snap-margin-inline-start","scroll-snap-margin-left","scroll-snap-margin-right","scroll-snap-margin-top","scroll-snap-padding","scroll-snap-padding-block","scroll-snap-padding-block-end","scroll-snap-padding-block-start","scroll-snap-padding-bottom","scroll-snap-padding-inline","scroll-snap-padding-inline-end","scroll-snap-padding-inline-start","scroll-snap-padding-left","scroll-snap-padding-right","scroll-snap-padding-top","scroll-snap-stop","scroll-snap-type","shape-inside","size","string-set","string-set","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","vertical-align","visibility","width","wrap-flow","wrap-through","z-index"]);


// obtained by iterating through getcomputedstyle
// JSON.stringify([...new Set(Object.getOwnPropertyNames(CSS2Properties.prototype).map((x) => (x.replace(/([A-Z])/g,function(v) { return "-"+v.toLowerCase(); })))).remove("constructor")]);
let firefoxprops = new Set(["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","-moz-appearance","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","-moz-binding","block-size","border","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-bottom","border-bottom-color","-moz-border-bottom-colors","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-left","border-left-color","-moz-border-left-colors","border-left-style","border-left-width","border-radius","border-right","border-right-color","-moz-border-right-colors","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","-moz-border-top-colors","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","-moz-box-align","box-decoration-break","-moz-box-direction","-moz-box-flex","-moz-box-ordinal-group","-moz-box-orient","-moz-box-pack","box-shadow","box-sizing","caption-side","clear","clip","clip-path","clip-rule","color","color-adjust","color-interpolation","color-interpolation-filters","-moz-column-count","-moz-column-fill","-moz-column-gap","-moz-column-rule","-moz-column-rule-color","-moz-column-rule-style","-moz-column-rule-width","-moz-column-width","-moz-columns","content","counter-increment","counter-reset","cursor","direction","display","dominant-baseline","empty-cells","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","css-float","float","-moz-float-edge","flood-color","flood-opacity","font","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","-moz-force-broken-image-icon","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","height","hyphens","image-orientation","-moz-image-region","image-rendering","ime-mode","inline-size","isolation","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block-end","margin-block-start","margin-bottom","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marker","marker-end","marker-mid","marker-offset","marker-start","mask","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","object-fit","object-position","offset-block-end","offset-block-start","offset-inline-end","offset-inline-start","opacity","order","-moz-orient","-moz-osx-font-smoothing","outline","outline-color","outline-offset","-moz-outline-radius","-moz-outline-radius-bottomleft","-moz-outline-radius-bottomright","-moz-outline-radius-topleft","-moz-outline-radius-topright","outline-style","outline-width","overflow","overflow-x","overflow-y","padding","padding-block-end","padding-block-start","padding-bottom","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","paint-order","perspective","perspective-origin","pointer-events","position","quotes","resize","right","ruby-align","ruby-position","scroll-behavior","scroll-snap-coordinate","scroll-snap-destination","scroll-snap-points-x","scroll-snap-points-y","scroll-snap-type","scroll-snap-type-x","scroll-snap-type-y","shape-rendering","-moz-stack-sizing","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","-moz-tab-size","table-layout","text-align","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","-webkit-text-fill-color","webkit-text-fill-color","text-indent","text-orientation","text-overflow","text-rendering","text-shadow","-moz-text-size-adjust","-webkit-text-stroke","webkit-text-stroke","-webkit-text-stroke-color","webkit-text-stroke-color","-webkit-text-stroke-width","webkit-text-stroke-width","text-transform","top","transform","-moz-transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","-moz-user-focus","-moz-user-input","-moz-user-modify","-moz-user-select","vector-effect","vertical-align","visibility","white-space","width","will-change","-moz-window-dragging","word-break","word-spacing","overflow-wrap","writing-mode","z-index","word-wrap","-moz-transform-origin","-moz-perspective-origin","-moz-perspective","-moz-transform-style","-moz-backface-visibility","-moz-border-image","-moz-transition","-moz-transition-delay","-moz-transition-duration","-moz-transition-property","-moz-transition-timing-function","-moz-animation","-moz-animation-delay","-moz-animation-direction","-moz-animation-duration","-moz-animation-fill-mode","-moz-animation-iteration-count","-moz-animation-name","-moz-animation-play-state","-moz-animation-timing-function","-moz-box-sizing","-moz-font-feature-settings","-moz-font-language-override","-moz-padding-end","-moz-padding-start","-moz-margin-end","-moz-margin-start","-moz-border-end","-moz-border-end-color","-moz-border-end-style","-moz-border-end-width","-moz-border-start","-moz-border-start-color","-moz-border-start-style","-moz-border-start-width","-moz-hyphens","-moz-text-align-last","-webkit-animation","webkit-animation","-webkit-animation-delay","webkit-animation-delay","-webkit-animation-direction","webkit-animation-direction","-webkit-animation-duration","webkit-animation-duration","-webkit-animation-fill-mode","webkit-animation-fill-mode","-webkit-animation-iteration-count","webkit-animation-iteration-count","-webkit-animation-name","webkit-animation-name","-webkit-animation-play-state","webkit-animation-play-state","-webkit-animation-timing-function","webkit-animation-timing-function","-webkit-filter","webkit-filter","-webkit-text-size-adjust","webkit-text-size-adjust","-webkit-transform","webkit-transform","-webkit-transform-origin","webkit-transform-origin","-webkit-transform-style","webkit-transform-style","-webkit-backface-visibility","webkit-backface-visibility","-webkit-perspective","webkit-perspective","-webkit-perspective-origin","webkit-perspective-origin","-webkit-transition","webkit-transition","-webkit-transition-delay","webkit-transition-delay","-webkit-transition-duration","webkit-transition-duration","-webkit-transition-property","webkit-transition-property","-webkit-transition-timing-function","webkit-transition-timing-function","-webkit-border-radius","webkit-border-radius","-webkit-border-top-left-radius","webkit-border-top-left-radius","-webkit-border-top-right-radius","webkit-border-top-right-radius","-webkit-border-bottom-left-radius","webkit-border-bottom-left-radius","-webkit-border-bottom-right-radius","webkit-border-bottom-right-radius","-webkit-background-clip","webkit-background-clip","-webkit-background-origin","webkit-background-origin","-webkit-background-size","webkit-background-size","-webkit-border-image","webkit-border-image","-webkit-box-shadow","webkit-box-shadow","-webkit-box-sizing","webkit-box-sizing","-webkit-box-flex","webkit-box-flex","-webkit-box-ordinal-group","webkit-box-ordinal-group","-webkit-box-orient","webkit-box-orient","-webkit-box-direction","webkit-box-direction","-webkit-box-align","webkit-box-align","-webkit-box-pack","webkit-box-pack","-webkit-flex-direction","webkit-flex-direction","-webkit-flex-wrap","webkit-flex-wrap","-webkit-flex-flow","webkit-flex-flow","-webkit-order","webkit-order","-webkit-flex","webkit-flex","-webkit-flex-grow","webkit-flex-grow","-webkit-flex-shrink","webkit-flex-shrink","-webkit-flex-basis","webkit-flex-basis","-webkit-justify-content","webkit-justify-content","-webkit-align-items","webkit-align-items","-webkit-align-self","webkit-align-self","-webkit-align-content","webkit-align-content","-webkit-user-select","webkit-user-select"]);
// copy(JSON.stringify([...new Set(Object.getOwnPropertyNames(getComputedStyle(document.documentElement)).filter((a) => isNaN(parseInt(a))).map((a) => a.replace(/([A-Z])/g,function(v) { return "-"+v.toLowerCase(); }).replace(/^webkit-/,"-webkit-").replace(/^moz-/,"-moz-")))]))
let chromeprops = new Set(["align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-repeat-x","background-repeat-y","background-size","baseline-shift","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-shadow","box-sizing","break-after","break-before","break-inside","buffered-rendering","caption-side","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","cursor","cx","cy","d","direction","display","dominant-baseline","empty-cells","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","font","font-family","font-feature-settings","font-kerning","font-size","font-stretch","font-style","font-variant","font-variant-caps","font-variant-ligatures","font-variant-numeric","font-weight","height","image-rendering","isolation","justify-content","left","letter-spacing","lighting-color","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marker","marker-end","marker-mid","marker-start","mask","mask-type","max-height","max-width","max-zoom","min-height","min-width","min-zoom","mix-blend-mode","motion","motion-offset","motion-path","motion-rotation","object-fit","object-position","opacity","order","orientation","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","perspective","perspective-origin","pointer-events","position","quotes","r","resize","right","rx","ry","shape-image-threshold","shape-margin","shape-outside","shape-rendering","size","speak","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-last","text-anchor","text-combine-upright","text-decoration","text-indent","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","unicode-range","user-zoom","vector-effect","vertical-align","visibility","-webkit-app-region","-webkit-appearance","-webkit-background-clip","-webkit-background-origin","-webkit-border-after","-webkit-border-after-color","-webkit-border-after-style","-webkit-border-after-width","-webkit-border-before","-webkit-border-before-color","-webkit-border-before-style","-webkit-border-before-width","-webkit-border-end","-webkit-border-end-color","-webkit-border-end-style","-webkit-border-end-width","-webkit-border-horizontal-spacing","-webkit-border-image","-webkit-border-start","-webkit-border-start-color","-webkit-border-start-style","-webkit-border-start-width","-webkit-border-vertical-spacing","-webkit-box-align","-webkit-box-decoration-break","-webkit-box-direction","-webkit-box-flex","-webkit-box-flex-group","-webkit-box-lines","-webkit-box-ordinal-group","-webkit-box-orient","-webkit-box-pack","-webkit-box-reflect","-webkit-clip-path","-webkit-column-break-after","-webkit-column-break-before","-webkit-column-break-inside","-webkit-filter","-webkit-font-size-delta","-webkit-font-smoothing","-webkit-highlight","-webkit-hyphenate-character","-webkit-line-break","-webkit-line-clamp","-webkit-locale","-webkit-logical-height","-webkit-logical-width","-webkit-margin-after","-webkit-margin-after-collapse","-webkit-margin-before","-webkit-margin-before-collapse","-webkit-margin-bottom-collapse","-webkit-margin-collapse","-webkit-margin-end","-webkit-margin-start","-webkit-margin-top-collapse","-webkit-mask","-webkit-mask-box-image","-webkit-mask-box-image-outset","-webkit-mask-box-image-repeat","-webkit-mask-box-image-slice","-webkit-mask-box-image-source","-webkit-mask-box-image-width","-webkit-mask-clip","-webkit-mask-composite","-webkit-mask-image","-webkit-mask-origin","-webkit-mask-position","-webkit-mask-position-x","-webkit-mask-position-y","-webkit-mask-repeat","-webkit-mask-repeat-x","-webkit-mask-repeat-y","-webkit-mask-size","-webkit-max-logical-height","-webkit-max-logical-width","-webkit-min-logical-height","-webkit-min-logical-width","-webkit-padding-after","-webkit-padding-before","-webkit-padding-end","-webkit-padding-start","-webkit-perspective-origin-x","-webkit-perspective-origin-y","-webkit-print-color-adjust","-webkit-rtl-ordering","-webkit-ruby-position","-webkit-tap-highlight-color","-webkit-text-combine","-webkit-text-decorations-in-effect","-webkit-text-emphasis","-webkit-text-emphasis-color","-webkit-text-emphasis-position","-webkit-text-emphasis-style","-webkit-text-fill-color","-webkit-text-orientation","-webkit-text-security","-webkit-text-stroke","-webkit-text-stroke-color","-webkit-text-stroke-width","-webkit-transform-origin-x","-webkit-transform-origin-y","-webkit-transform-origin-z","-webkit-user-drag","-webkit-user-modify","-webkit-user-select","-webkit-writing-mode","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"]);
let props = [...new Set([...w3props, ...firefoxprops, ...chromeprops])];
//let props = [...new Set([...w3props, ...firefoxprops, ...chromeprops])];


values = {};
function doNext() {
  if (props.length == 0) {
     console.log('DONE');
     return;
  }
  let prop = props.pop();
  console.log(prop);
  let xhr = new XMLHttpRequest();
  let url = 'https://developer.mozilla.org/en-US/docs/Web/CSS/' + prop;
  xhr.open('GET', url);
  xhr.responseType="document";
  xhr.send(null);
  xhr.onreadystatechange = function() {
     if (xhr.readyState == 4) {
        values[prop] = {syntax:"", url:""};
         if(xhr.status == 200) {
              let box = xhr.response.getElementsByClassName('syntaxbox');
              values[prop].url = url;
              if (box.length > 0) {
                  values[prop].syntax = box[0].innerText;
              }
         }


        values[prop].inFirefox = firefoxprops.has(prop);
        values[prop].inChrome = chromeprops.has(prop);
         doNext();
     }
  }
}
doNext();