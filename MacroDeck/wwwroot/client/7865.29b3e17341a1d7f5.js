"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7865],{7865:(i,o,t)=>{t.r(o),t.d(o,{KeepAwakeWeb:()=>n});var s=t(467),a=t(5083);class n extends a.E_{constructor(){super(...arguments),this.wakeLock=null,this._isSupported="wakeLock"in navigator}keepAwake(){var e=this;return(0,s.A)(function*(){e._isSupported||e.throwUnsupportedError(),e.wakeLock&&(yield e.allowSleep()),e.wakeLock=yield navigator.wakeLock.request("screen")})()}allowSleep(){var e=this;return(0,s.A)(function*(){var r;e._isSupported||e.throwUnsupportedError(),null===(r=e.wakeLock)||void 0===r||r.release(),e.wakeLock=null})()}isSupported(){var e=this;return(0,s.A)(function*(){return{isSupported:e._isSupported}})()}isKeptAwake(){var e=this;return(0,s.A)(function*(){return e._isSupported||e.throwUnsupportedError(),{isKeptAwake:!!e.wakeLock}})()}throwUnsupportedError(){throw this.unavailable("Screen Wake Lock API not available in this browser.")}}}}]);