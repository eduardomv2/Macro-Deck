"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7666],{7666:($,C,d)=>{d.r(C),d.d(C,{ion_range:()=>U});var L=d(5861),r=d(1688),y=d(8360),R=d(5487),h=d(839),x=d(6710),_=d(5085),s=d(3567),l=d(2085);const U=class{constructor(t){var e=this;(0,r.r)(this,t),this.ionChange=(0,r.d)(this,"ionChange",7),this.ionInput=(0,r.d)(this,"ionInput",7),this.ionStyle=(0,r.d)(this,"ionStyle",7),this.ionFocus=(0,r.d)(this,"ionFocus",7),this.ionBlur=(0,r.d)(this,"ionBlur",7),this.ionKnobMoveStart=(0,r.d)(this,"ionKnobMoveStart",7),this.ionKnobMoveEnd=(0,r.d)(this,"ionKnobMoveEnd",7),this.rangeId="ion-r-"+W++,this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.contentEl=null,this.initialContentScrollY=!0,this.hasLoggedDeprecationWarning=!1,this.clampBounds=n=>(0,h.l)(this.min,n,this.max),this.ensureValueInBounds=n=>this.dualKnobs?{lower:this.clampBounds(n.lower),upper:this.clampBounds(n.upper)}:this.clampBounds(n),this.setupGesture=(0,L.Z)(function*(){const n=e.rangeSlider;n&&(e.gesture=(yield Promise.resolve().then(d.bind(d,9203))).createGesture({el:n,gestureName:"range",gesturePriority:100,threshold:0,onStart:i=>e.onStart(i),onMove:i=>e.onMove(i),onEnd:i=>e.onEnd(i)}),e.gesture.enable(!e.disabled))}),this.handleKeyboard=(n,i)=>{const{ensureValueInBounds:a}=this;let o=this.step;o=o>0?o:1,o/=this.max-this.min,i||(o*=-1),"A"===n?this.ratioA=(0,h.l)(0,this.ratioA+o,1):this.ratioB=(0,h.l)(0,this.ratioB+o,1),this.ionKnobMoveStart.emit({value:a(this.value)}),this.updateValue(),this.emitValueChange(),this.ionKnobMoveEnd.emit({value:a(this.value)})},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())},this.ratioA=0,this.ratioB=0,this.pressedKnob=void 0,this.color=void 0,this.debounce=void 0,this.name=this.rangeId,this.label=void 0,this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.pinFormatter=n=>Math.round(n),this.snaps=!1,this.step=1,this.ticks=!0,this.activeBarStart=void 0,this.disabled=!1,this.value=0,this.labelPlacement="start",this.legacy=void 0}debounceChanged(){const{ionInput:t,debounce:e,originalIonInput:n}=this;this.ionInput=void 0===e?null!=n?n:t:(0,h.j)(t,e)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}activeBarStartChanged(){const{activeBarStart:t}=this;void 0!==t&&(t>this.max?((0,x.p)(`Range: The value of activeBarStart (${t}) is greater than the max (${this.max}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.max):t<this.min&&((0,x.p)(`Range: The value of activeBarStart (${t}) is less than the min (${this.min}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.min))}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()}valueChanged(){this.noUpdate||this.updateRatio()}componentWillLoad(){this.el.hasAttribute("id")&&(this.rangeId=this.el.getAttribute("id")),this.inheritedAttributes=(0,h.i)(this.el)}componentDidLoad(){this.originalIonInput=this.ionInput,this.setupGesture(),this.didLoad=!0}connectedCallback(){const{el:t}=this;this.legacyFormController=(0,R.c)(t),this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.activeBarStartChanged(),this.didLoad&&this.setupGesture(),this.contentEl=(0,y.f)(this.el)}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}getValue(){var t;const e=null!==(t=this.value)&&void 0!==t?t:0;return this.dualKnobs?"object"==typeof e?e:{lower:0,upper:e}:"object"==typeof e?e.upper:e}emitStyle(){this.legacyFormController.hasLegacyControl()&&this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}emitValueChange(){this.value=this.ensureValueInBounds(this.value),this.ionChange.emit({value:this.value})}onStart(t){const{contentEl:e}=this;e&&(this.initialContentScrollY=(0,y.d)(e));const n=this.rect=this.rangeSlider.getBoundingClientRect(),i=t.currentX;let a=(0,h.l)(0,(i-n.left)/n.width,1);(0,_.i)(this.el)&&(a=1-a),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-a)<Math.abs(this.ratioB-a)?"A":"B",this.setFocus(this.pressedKnob),this.update(i),this.ionKnobMoveStart.emit({value:this.ensureValueInBounds(this.value)})}onMove(t){this.update(t.currentX)}onEnd(t){const{contentEl:e,initialContentScrollY:n}=this;e&&(0,y.r)(e,n),this.update(t.currentX),this.pressedKnob=void 0,this.emitValueChange(),this.ionKnobMoveEnd.emit({value:this.ensureValueInBounds(this.value)})}update(t){const e=this.rect;let n=(0,h.l)(0,(t-e.left)/e.width,1);(0,_.i)(this.el)&&(n=1-n),this.snaps&&(n=v(P(n,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=n:this.ratioB=n,this.updateValue()}get valA(){return P(this.ratioA,this.min,this.max,this.step)}get valB(){return P(this.ratioB,this.min,this.max,this.step)}get ratioLower(){if(this.dualKnobs)return Math.min(this.ratioA,this.ratioB);const{activeBarStart:t}=this;return null==t?0:v(t,this.min,this.max)}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const t=this.getValue(),{min:e,max:n}=this;this.dualKnobs?(this.ratioA=v(t.lower,e,n),this.ratioB=v(t.upper,e,n)):this.ratioA=v(t,e,n)}updateValue(){this.noUpdate=!0;const{valA:t,valB:e}=this;this.value=this.dualKnobs?{lower:Math.min(t,e),upper:Math.max(t,e)}:t,this.ionInput.emit({value:this.value}),this.noUpdate=!1}setFocus(t){if(this.el.shadowRoot){const e=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");e&&e.focus()}}renderLegacyRange(){this.hasLoggedDeprecationWarning||((0,x.p)('ion-range now requires providing a label with either the label slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.\n\nExample: <ion-range><div slot="label">Volume</div></ion-range>\nExample with aria-label: <ion-range aria-label="Volume"></ion-range>\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',this.el),this.legacy&&(0,x.p)('ion-range is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.\n\nDevelopers can dismiss this warning by removing their usage of the "legacy" property and using the new range syntax.',this.el),this.hasLoggedDeprecationWarning=!0);const{el:t,pressedKnob:e,disabled:n,pin:i,rangeId:a}=this,o=(0,l.b)(this);return(0,h.d)(!0,t,this.name,JSON.stringify(this.getValue()),n),(0,r.h)(r.H,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:a,class:(0,s.c)(this.color,{[o]:!0,"in-item":(0,s.h)("ion-item",t),"range-disabled":n,"range-pressed":void 0!==e,"range-has-pin":i,"legacy-range":!0})},(0,r.h)("slot",{name:"start"}),this.renderRangeSlider(),(0,r.h)("slot",{name:"end"}))}renderRange(){const{disabled:t,el:e,rangeId:n,pin:i,pressedKnob:a,labelPlacement:o,label:p}=this,w=(0,l.b)(this);return(0,h.d)(!0,e,this.name,JSON.stringify(this.getValue()),t),(0,r.h)(r.H,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:n,class:(0,s.c)(this.color,{[w]:!0,"in-item":(0,s.h)("ion-item",e),"range-disabled":t,"range-pressed":void 0!==a,"range-has-pin":i,[`range-label-placement-${o}`]:!0})},(0,r.h)("label",{class:"range-wrapper",id:"range-label"},(0,r.h)("div",{class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!this.hasLabel}},void 0!==p?(0,r.h)("div",{class:"label-text"},p):(0,r.h)("slot",{name:"label"})),(0,r.h)("div",{class:"native-wrapper"},(0,r.h)("slot",{name:"start"}),this.renderRangeSlider(),(0,r.h)("slot",{name:"end"}))))}get hasLabel(){return void 0!==this.label||null!==this.el.querySelector('[slot="label"]')}renderRangeSlider(){var t;const{min:e,max:n,step:i,el:a,handleKeyboard:o,pressedKnob:p,disabled:w,pin:S,ratioLower:u,ratioUpper:f,inheritedAttributes:B,rangeId:F,pinFormatter:A}=this;let{labelText:k}=(0,h.e)(a,F);null==k&&(k=B["aria-label"]);let b=100*u+"%",m=100-100*f+"%";const K=(0,_.i)(this.el),I=K?"right":"left",N=c=>({[I]:c[I]});!1===this.dualKnobs&&(this.valA<(null!==(t=this.activeBarStart)&&void 0!==t?t:this.min)?(b=100*f+"%",m=100-100*u+"%"):(b=100*u+"%",m=100-100*f+"%"));const X={[I]:b,[K?"left":"right"]:m},O=[];if(this.snaps&&this.ticks)for(let c=e;c<=n;c+=i){const D=v(c,e,n),H=Math.min(u,f),Y=Math.max(u,f),j={ratio:D,active:D>=H&&D<=Y};j[I]=100*D+"%",O.push(j)}let T;return!this.legacyFormController.hasLegacyControl()&&this.hasLabel&&(T="range-label"),(0,r.h)("div",{class:"range-slider",ref:c=>this.rangeSlider=c},O.map(c=>(0,r.h)("div",{style:N(c),role:"presentation",class:{"range-tick":!0,"range-tick-active":c.active},part:c.active?"tick-active":"tick"})),(0,r.h)("div",{class:"range-bar-container"},(0,r.h)("div",{class:"range-bar",role:"presentation",part:"bar"}),(0,r.h)("div",{class:{"range-bar":!0,"range-bar-active":!0,"has-ticks":O.length>0},role:"presentation",style:X,part:"bar-active"})),V(K,{knob:"A",pressed:"A"===p,value:this.valA,ratio:this.ratioA,pin:S,pinFormatter:A,disabled:w,handleKeyboard:o,min:e,max:n,labelText:k,labelledBy:T}),this.dualKnobs&&V(K,{knob:"B",pressed:"B"===p,value:this.valB,ratio:this.ratioB,pin:S,pinFormatter:A,disabled:w,handleKeyboard:o,min:e,max:n,labelText:k,labelledBy:T}))}render(){const{legacyFormController:t}=this;return t.hasLegacyControl()?this.renderLegacyRange():this.renderRange()}get el(){return(0,r.f)(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],activeBarStart:["activeBarStartChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},V=(t,{knob:e,value:n,ratio:i,min:a,max:o,disabled:p,pressed:w,pin:S,handleKeyboard:u,labelText:f,labelledBy:B,pinFormatter:F})=>{const A=t?"right":"left";return(0,r.h)("div",{onKeyDown:b=>{const m=b.key;"ArrowLeft"===m||"ArrowDown"===m?(u(e,!1),b.preventDefault(),b.stopPropagation()):("ArrowRight"===m||"ArrowUp"===m)&&(u(e,!0),b.preventDefault(),b.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===e,"range-knob-b":"B"===e,"range-knob-pressed":w,"range-knob-min":n===a,"range-knob-max":n===o,"ion-activatable":!0,"ion-focusable":!0},style:(()=>{const b={};return b[A]=100*i+"%",b})(),role:"slider",tabindex:p?-1:0,"aria-label":void 0===B?f:null,"aria-labelledby":void 0!==B?B:null,"aria-valuemin":a,"aria-valuemax":o,"aria-disabled":p?"true":null,"aria-valuenow":n},S&&(0,r.h)("div",{class:"range-pin",role:"presentation",part:"pin"},F(n)),(0,r.h)("div",{class:"range-knob",role:"presentation",part:"knob"}))},P=(t,e,n,i)=>{let a=(n-e)*t;return i>0&&(a=Math.round(a/i)*i+e),function E(t,...e){const n=Math.max(...e.map(i=>function g(t){return t%1==0?0:t.toString().split(".")[1].length}(i)));return Number(t.toFixed(n))}((0,h.l)(e,a,n),e,n,i)},v=(t,e,n)=>(0,h.l)(0,(t-e)/(n-e),1);let W=0;U.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}@supports (inset-inline-start: 0){.range-knob-handle{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-knob-handle{left:0}:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}[dir=rtl] .range-knob-handle{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}@supports (inset-inline-start: 0){.range-bar-container{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-bar-container{left:0}:host-context([dir=rtl]) .range-bar-container{left:unset;right:unset;right:0}[dir=rtl] .range-bar-container{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}@supports (inset-inline-start: 0){.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}}@supports not (inset-inline-start: 0){.range-knob{left:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}}}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12);--knob-size:26px;--bar-height:4px;--bar-background:var(--ion-color-step-900, #e6e6e6);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:2px;--height:42px}:host(.legacy-range){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:8px}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-bar-active.has-ticks{border-radius:0;-webkit-margin-start:-2px;margin-inline-start:-2px;-webkit-margin-end:-2px;margin-inline-end:-2px}.range-tick{-webkit-margin-start:-2px;margin-inline-start:-2px;border-radius:0;position:absolute;top:17px;width:4px;height:8px;background:var(--ion-color-step-900, #e6e6e6);pointer-events:none}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.3}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}@supports (inset-inline-start: 0){.range-knob-handle{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-knob-handle{left:0}:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}[dir=rtl] .range-knob-handle{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}@supports (inset-inline-start: 0){.range-bar-container{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-bar-container{left:0}:host-context([dir=rtl]) .range-bar-container{left:unset;right:unset;right:0}[dir=rtl] .range-bar-container{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}@supports (inset-inline-start: 0){.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}}@supports not (inset-inline-start: 0){.range-knob{left:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}}}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);font-size:12px}::slotted([slot=label]),.label-text{font-size:initial}:host(.legacy-range){-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px;padding-top:8px;padding-bottom:8px}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;position:absolute;width:var(--knob-size);height:var(--knob-size);-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.267s cubic-bezier(0, 0, 0.58, 1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}@supports (inset-inline-start: 0){.range-knob::before{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-knob::before{left:0}:host-context([dir=rtl]) .range-knob::before{left:unset;right:unset;right:0}[dir=rtl] .range-knob::before{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-knob::before:dir(rtl){left:unset;right:unset;right:0}}}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{top:3px;-webkit-margin-start:-13px;margin-inline-start:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}@supports (inset-inline-start: 0){.range-pin::before{inset-inline-start:50%}}@supports not (inset-inline-start: 0){.range-pin::before{left:50%}:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}[dir=rtl] .range-pin::before{left:unset;right:unset;right:50%}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset;right:unset;right:50%}}}:host-context([dir=rtl]) .range-pin::before{left:unset}[dir=rtl] .range-pin::before{left:unset}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{-webkit-transform:scale(2);transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{-webkit-transform:scale(2);transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .label-text-wrapper,:host(.range-disabled) ::slotted([slot=start]),:host(.range-disabled) ::slotted([slot=end]){opacity:0.38}'}},3567:($,C,d)=>{d.d(C,{c:()=>y,g:()=>h,h:()=>r,o:()=>_});var L=d(5861);const r=(s,l)=>null!==l.closest(s),y=(s,l)=>"string"==typeof s&&s.length>0?Object.assign({"ion-color":!0,[`ion-color-${s}`]:!0},l):l,h=s=>{const l={};return(s=>void 0!==s?(Array.isArray(s)?s:s.split(" ")).filter(g=>null!=g).map(g=>g.trim()).filter(g=>""!==g):[])(s).forEach(g=>l[g]=!0),l},x=/^[a-z][a-z0-9+\-.]*:/,_=function(){var s=(0,L.Z)(function*(l,g,E,M){if(null!=l&&"#"!==l[0]&&!x.test(l)){const z=document.querySelector("ion-router");if(z)return null!=g&&g.preventDefault(),z.push(l,E,M)}return!1});return function(g,E,M,z){return s.apply(this,arguments)}}()}}]);