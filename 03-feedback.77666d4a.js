parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TTyb":[function(require,module,exports) {
const e="feedback-form-state",l=document.querySelector(".feedback-form");let t={};const a=l=>{t[l.target.name]=l.target.value;const a=JSON.stringify(t);localStorage.setItem(e,a)},s=localStorage.getItem(e),m=JSON.parse(s),n=()=>{l.elements.email.value=null!==m?m.email:"",l.elements.message.value=null!==m?m.message:""};l.elements.email.value=null!==m?m.email:"",l.elements.message.value=null!==m?m.message:"",l.addEventListener("input",a);
},{}]},{},["TTyb"], null)
//# sourceMappingURL=/goit-js-hw-08/03-feedback.77666d4a.js.map