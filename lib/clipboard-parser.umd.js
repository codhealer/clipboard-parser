!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(self,(function(){return function(){"use strict";var e={506:function(e,r,t){function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.r(r),t.d(r,{default:function(){return l}});var a={string:"String",char:"String",int:"Number",integer:"Number",double:"Number",long:"Number",boolean:"Boolean",object:"Object",map:"Object",array:"Array",list:"Array",float:"Number"},u='([\\w="",\\- \\u4e00-\\u9fa5]+)';function l(e){var r,t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.getData("Text").replace(/\r\n/g,"\n").replace(/\r/g,"\n").replace(/[\n\r]+$/,""),l=i.indexOf("@RequestParam")>-1,p=i.indexOf("@ApiModelProperty")>-1,c=-1===i.indexOf("\t")||l,f=i.split("\n"),s=[],b=n.type,d=void 0===b?l?1:p?2:-1:b;return 1===d?r=new RegExp("@RequestParam\\("+u+"\\)[\\n\\r\\t ]*@ApiParam\\("+u+"\\)[\\n\\r\\t ]*([\\w]+)","g"):2===d&&(r=new RegExp("@ApiModelProperty\\("+u+"\\)[\\n\\r\\t ]*(private|public)? ?([\\w]+) ([\\w]+)","g")),f=f.map((function(e,r){var n=e?e.split("\t"):[];return 0===r?t=+n.length:(0===t||r!==f.length-1&&t!==n.length)&&(c=!0),n=n.map((function(e){return e.replace(/\s+/g," ")}))})),console.log(f),c&&(f=f.map((function(e){return e.join("")})).join("")),1===d&&l?(f.replace(r,(function(e,r,t,n){var i={},u={};if(-1===r.indexOf("=")&&-1===r.indexOf(","))i={value:r.replace(/^"([\s\S]*)"$/,"$1")};else{var l=r.replace(/\s+/g,"").split(",");l=l.map((function(e){var r=e.split("=");return/^"[\s\S]*"$/.test(r[1])?r[1]=r[1].replace(/^"([\s\S]*)"$/,"$1"):"true"===r[1]?r[1]=!0:"false"===r[1]?r[1]=!1:r[1]=+r[1],r})),i=Object.fromEntries(l)}if(-1===t.indexOf("=")&&-1===t.indexOf(","))u={value:t.replace(/^"([\s\S]*)"$/,"$1")};else{var p=t.replace(/\s+/g,"").split(",");p=p.map((function(e){var r=e.split("=");return/^"[\s\S]*"$/.test(r[1])?r[1]=r[1].replace(/^"([\s\S]*)"$/,"$1"):"true"===r[1]?r[1]=!0:"false"===r[1]?r[1]=!1:r[1]=+r[1],r})),u=Object.fromEntries(p)}s.push(o(o({required:!0,type:a[n.toLowerCase()]||"string"},i),{},{defaultValue:u.defaultValue||"",description:u.value||""}))})),s):2===d&&p?(f.replace(r,(function(e,r,t,n,o){var i={};if(-1===r.indexOf("=")&&-1===r.indexOf(","))i={value:r.replace(/^"([\s\S]*)"$/,"$1")};else{var u=r.replace(/\s+/g,"").split(",");u=u.map((function(e){var r=e.split("=");return/^"[\s\S]*"$/.test(r[1])?r[1]=r[1].replace(/^"([\s\S]*)"$/,"$1"):"true"===r[1]?r[1]=!0:"false"===r[1]?r[1]=!1:r[1]=+r[1],r})),i=Object.fromEntries(u)}s.push({required:!0,type:n?a[n.toLowerCase()]:"String",description:i.value,value:o})})),s):f}}},r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return e[n](o,o.exports,t),o.exports}return t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(506)}()}));