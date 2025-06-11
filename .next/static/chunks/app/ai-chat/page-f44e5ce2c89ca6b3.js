(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{92218:function(e,t,n){Promise.resolve().then(n.bind(n,61492))},87461:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(64090),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),a=(e,t)=>{let n=(0,r.forwardRef)((n,a)=>{let{color:o="currentColor",size:c=24,strokeWidth:l=2,absoluteStrokeWidth:d,className:u="",children:h,...f}=n;return(0,r.createElement)("svg",{ref:a,...s,width:c,height:c,stroke:o,strokeWidth:d?24*Number(l)/Number(c):l,className:["lucide","lucide-".concat(i(e)),u].join(" "),...f},[...t.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(h)?h:[h]])});return n.displayName="".concat(e),n}},49079:function(e,t,n){"use strict";var r,s;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(s=n.g.process)?void 0:s.env)?n.g.process:n(13127)},13127:function(e){"use strict";!function(){var t={229:function(e){var t,n,r,s=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c=[],l=!1,d=-1;function u(){l&&r&&(l=!1,r.length?c=r.concat(c):d=-1,c.length&&h())}function h(){if(!l){var e=o(u);l=!0;for(var t=c.length;t;){for(r=c,c=[];++d<t;)r&&r[d].run();d=-1,t=c.length}r=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||l||o(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=p,s.addListener=p,s.once=p,s.off=p,s.removeListener=p,s.removeAllListeners=p,s.emit=p,s.prependListener=p,s.prependOnceListener=p,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},n={};function r(e){var s=n[e];if(void 0!==s)return s.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var s=r(229);e.exports=s}()},61492:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var r,s,i,a,o,c,l,d,u,h,f,p,g,E,m=n(3827),y=n(64090);(r=d||(d={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",r.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",r.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",r.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",r.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(s=u||(u={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",s.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",s.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",s.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",s.BLOCK_NONE="BLOCK_NONE",(i=h||(h={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",i.NEGLIGIBLE="NEGLIGIBLE",i.LOW="LOW",i.MEDIUM="MEDIUM",i.HIGH="HIGH",(a=f||(f={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",a.SAFETY="SAFETY",a.OTHER="OTHER",(o=p||(p={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",o.STOP="STOP",o.MAX_TOKENS="MAX_TOKENS",o.SAFETY="SAFETY",o.RECITATION="RECITATION",o.OTHER="OTHER",(c=g||(g={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",c.RETRIEVAL_QUERY="RETRIEVAL_QUERY",c.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",c.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",c.CLASSIFICATION="CLASSIFICATION",c.CLUSTERING="CLUSTERING";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _ extends Error{constructor(e){super("[GoogleGenerativeAI Error]: ".concat(e))}}class T extends _{constructor(e,t){super(e),this.response=t}}(l=E||(E={})).GENERATE_CONTENT="generateContent",l.STREAM_GENERATE_CONTENT="streamGenerateContent",l.COUNT_TOKENS="countTokens",l.EMBED_CONTENT="embedContent",l.BATCH_EMBED_CONTENTS="batchEmbedContents";class N{toString(){let e="".concat("https://generativelanguage.googleapis.com","/").concat("v1","/").concat(this.model,":").concat(this.task);return this.stream&&(e+="?alt=sse"),e}constructor(e,t,n,r){this.model=e,this.task=t,this.apiKey=n,this.stream=r}}async function O(e,t,n){let r;try{if(!(r=await fetch(e.toString(),Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.timeout)>=0){let n=new AbortController,r=n.signal;setTimeout(()=>n.abort(),e.timeout),t.signal=r}return t}(n)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":"".concat("genai-js","/").concat("0.2.1"),"x-goog-api-key":e.apiKey},body:t}))).ok){let e="";try{let t=await r.json();e=t.error.message,t.error.details&&(e+=" ".concat(JSON.stringify(t.error.details)))}catch(e){}throw Error("[".concat(r.status," ").concat(r.statusText,"] ").concat(e))}}catch(n){let t=new _("Error fetching from ".concat(e.toString(),": ").concat(n.message));throw t.stack=n.stack,t}return r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){var t,n,r,s;if(e.candidates.length>1&&console.warn("This response had ".concat(e.candidates.length," ")+"candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates."),S(e.candidates[0]))throw new T("".concat(C(e)),e);return(null===(s=null===(r=null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)||void 0===r?void 0:r[0])||void 0===s?void 0:s.text)?e.candidates[0].content.parts[0].text:""}if(e.promptFeedback)throw new T("Text not available. ".concat(C(e)),e);return""},e}let v=[p.RECITATION,p.SAFETY];function S(e){return!!e.finishReason&&v.includes(e.finishReason)}function C(e){var t,n,r;let s="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)s+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(s+=" due to ".concat(e.promptFeedback.blockReason)),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=": ".concat(e.promptFeedback.blockReasonMessage));else if(null===(r=e.candidates)||void 0===r?void 0:r[0]){let t=e.candidates[0];S(t)&&(s+="Candidate was blocked due to ".concat(t.finishReason),t.finishMessage&&(s+=": ".concat(t.finishMessage)))}return s}function A(e){return this instanceof A?(this.v=e,this):new A(e)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function I(e){let t=[],n=e.getReader();for(;;){let{done:e,value:r}=await n.read();if(e)return b(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e)if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts)for(let r of(n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[{text:""}]}),e.content.parts))r.text&&(n.candidates[t].content.parts[0].text+=r.text)}return n}(t));t.push(r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w(e,t,n,r){let s=new N(t,E.STREAM_GENERATE_CONTENT,e,!0);return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function r(){return t.read().then(t=>{let s,{value:i,done:a}=t;if(a){if(n.trim()){e.error(new _("Failed to parse stream"));return}e.close();return}let o=(n+=i).match(x);for(;o;){try{s=JSON.parse(o[1])}catch(t){e.error(new _('Error parsing JSON response: "'.concat(o[1],'"')));return}e.enqueue(s),o=(n=n.substring(o[0].length)).match(x)}return r()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var r,s=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){s[e]&&(r[e]=function(t){return new Promise(function(n,r){i.push([e,t,n,r])>1||o(e,t)})})}function o(e,t){try{var n;(n=s[e](t)).value instanceof A?Promise.resolve(n.value.v).then(c,l):d(i[0][2],n)}catch(e){d(i[0][3],e)}}function c(e){o("next",e)}function l(e){o("throw",e)}function d(e,t){e(t),i.shift(),i.length&&o(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield A(t.read());if(n)break;yield yield A(b(e))}})}(t),response:I(n)}}(await O(s,JSON.stringify(n),r))}async function R(e,t,n,r){let s=new N(t,E.GENERATE_CONTENT,e,!1),i=await O(s,JSON.stringify(n),r);return{response:b(await i.json())}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){let n=[];if("string"==typeof e)n=[{text:e}];else for(let t of e)"string"==typeof t?n.push({text:t}):n.push(t);return{role:t,parts:n}}function k(e){return e.contents?e:{contents:[M(e,"user")]}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L="SILENT_ERROR";class j{async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var t,n;let r;await this._sendPromise;let s=M(e,"user"),i={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,contents:[...this._history,s]};return this._sendPromise=this._sendPromise.then(()=>R(this._apiKey,this.model,i,this.requestOptions)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(s);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=C(e.response);t&&console.warn("sendMessage() was unsuccessful. ".concat(t,". Inspect response object for details."))}r=e}),await this._sendPromise,r}async sendMessageStream(e){var t,n;await this._sendPromise;let r=M(e,"user"),s={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,contents:[...this._history,r]},i=w(this._apiKey,this.model,s,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>i).catch(e=>{throw Error(L)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(r);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=C(e);t&&console.warn("sendMessageStream() was unsuccessful. ".concat(t,". Inspect response object for details."))}}).catch(e=>{e.message!==L&&console.error(e)}),i}constructor(e,t,n,r){this.model=t,this.params=n,this.requestOptions=r,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(this._history=n.history.map(e=>{if(!e.role)throw Error("Missing role for history item: "+JSON.stringify(e));return M(e.parts,e.role)}))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t,n,r){let s=new N(t,E.COUNT_TOKENS,e,!1);return(await O(s,JSON.stringify(Object.assign(Object.assign({},n),{model:t})),r)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P(e,t,n,r){let s=new N(t,E.EMBED_CONTENT,e,!1);return(await O(s,JSON.stringify(n),r)).json()}async function D(e,t,n,r){let s=new N(t,E.BATCH_EMBED_CONTENTS,e,!1),i=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await O(s,JSON.stringify({requests:i}),r)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{async generateContent(e){let t=k(e);return R(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t),this.requestOptions)}async generateContentStream(e){let t=k(e);return w(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t),this.requestOptions)}startChat(e){return new j(this.apiKey,this.model,e,this.requestOptions)}async countTokens(e){let t=k(e);return H(this.apiKey,this.model,t)}async embedContent(e){let t="string"==typeof e||Array.isArray(e)?{content:M(e,"user")}:e;return P(this.apiKey,this.model,t)}async batchEmbedContents(e){return D(this.apiKey,this.model,e,this.requestOptions)}constructor(e,t,n){this.apiKey=e,t.model.includes("/")?this.model=t.model:this.model="models/".concat(t.model),this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.requestOptions=n||{}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{getGenerativeModel(e,t){if(!e.model)throw new _("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new G(this.apiKey,e,t)}constructor(e){this.apiKey=e}}var F=n(89227);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let B=(0,n(87461).Z)("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);var U=n(49079);function Y(){let[e,t]=(0,y.useState)([]),[n,r]=(0,y.useState)(""),[s,i]=(0,y.useState)(!1),a=(0,y.useRef)(null),o=new K(U.env.NEXT_PUBLIC_GEMINI_API_KEY||""),c=async s=>{if(s.preventDefault(),!n.trim())return;let a=n.trim();r(""),t(e=>[...e,{role:"user",parts:[{text:a}]}]),i(!0);try{let n=o.getGenerativeModel({model:"gemini-pro"}).startChat({history:e}),r=await n.sendMessage(a),s=(await r.response).text();t(e=>[...e,{role:"model",parts:[{text:s}]}])}catch(e){console.error("Error generating response:",e),t(e=>[...e,{role:"model",parts:[{text:"\xdczg\xfcn\xfcm, bir hata oluştu. L\xfctfen tekrar deneyin."}]}])}finally{i(!1)}};return(0,y.useEffect)(()=>{var e;null===(e=a.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},[e]),(0,m.jsxs)("main",{className:"min-h-screen flex flex-col",children:[(0,m.jsx)(F.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},className:"w-full bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700",children:(0,m.jsx)("div",{className:"container mx-auto px-4 py-4",children:(0,m.jsx)(F.E.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},className:"text-2xl md:text-3xl font-bold text-gray-800 dark:text-white",children:"AI Futbol Asistanı"})})}),(0,m.jsx)("div",{className:"flex-1 container mx-auto px-4 py-6",children:(0,m.jsxs)(F.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2,ease:"easeOut"},className:"max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 chat-container",children:[(0,m.jsxs)("div",{className:"h-[calc(100vh-280px)] overflow-y-auto mb-6 pr-2 custom-scrollbar",children:[e.map((e,t)=>(0,m.jsx)("div",{className:"flex mb-4 ".concat("user"===e.role?"justify-end":"justify-start"),children:(0,m.jsx)(F.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},className:"inline-block p-4 rounded-lg max-w-[80%] ".concat("user"===e.role?"bg-blue-600 text-white rounded-br-none":"bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none"),children:e.parts[0].text})},t)),s&&(0,m.jsx)("div",{className:"flex justify-start mb-4",children:(0,m.jsx)(F.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{repeat:1/0,duration:1.5},className:"inline-block p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200",children:(0,m.jsxs)("div",{className:"loading-dots",children:[(0,m.jsx)("span",{}),(0,m.jsx)("span",{}),(0,m.jsx)("span",{})]})})}),(0,m.jsx)("div",{ref:a})]}),(0,m.jsxs)("form",{onSubmit:c,className:"flex gap-4 items-center",children:[(0,m.jsx)("input",{type:"text",value:n,onChange:e=>r(e.target.value),placeholder:"Futbol hakkında bir soru sorun...",className:"flex-1 px-5 py-3 border border-gray-300 rounded-full shadow-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300"}),(0,m.jsx)("button",{type:"submit",disabled:s||!n.trim(),className:"p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300","aria-label":"Send message",children:(0,m.jsx)(B,{size:24})})]})]})})]})}}},function(e){e.O(0,[227,971,69,744],function(){return e(e.s=92218)}),_N_E=e.O()}]);