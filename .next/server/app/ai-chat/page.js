(()=>{var e={};e.id=662,e.ids=[662],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9787:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=s(482),n=s(9108),a=s(2563),i=s.n(a),o=s(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["ai-chat",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4465)),"/Users/sutuluce/Desktop/TaktiQ-MVP-main/src/app/ai-chat/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,8118)),"/Users/sutuluce/Desktop/TaktiQ-MVP-main/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/sutuluce/Desktop/TaktiQ-MVP-main/src/app/ai-chat/page.tsx"],u="/ai-chat/page",h={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/ai-chat/page",pathname:"/ai-chat",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9018:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},5637:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,1476,23)),Promise.resolve().then(s.bind(s,7590)),Promise.resolve().then(s.bind(s,8918)),Promise.resolve().then(s.bind(s,5911))},7456:(e,t,s)=>{Promise.resolve().then(s.bind(s,3615))},3615:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>D});var r,n,a,i,o,l,c,d=s(5344),u=s(3729);(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(r||(r={})),function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"}(n||(n={})),function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"}(a||(a={})),function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"}(i||(i={})),function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"}(o||(o={})),function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"}(l||(l={}));/**
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
 */class h extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class m extends h{constructor(e,t){super(e),this.response=t}}!function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"}(c||(c={}));class p{constructor(e,t,s,r){this.model=e,this.task=t,this.apiKey=s,this.stream=r}toString(){let e=`https://generativelanguage.googleapis.com/v1/${this.model}:${this.task}`;return this.stream&&(e+="?alt=sse"),e}}async function g(e,t,s){let r;try{if(!(r=await fetch(e.toString(),Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.timeout)>=0){let s=new AbortController,r=s.signal;setTimeout(()=>s.abort(),e.timeout),t.signal=r}return t}(s)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":"genai-js/0.2.1","x-goog-api-key":e.apiKey},body:t}))).ok){let e="";try{let t=await r.json();e=t.error.message,t.error.details&&(e+=` ${JSON.stringify(t.error.details)}`)}catch(e){}throw Error(`[${r.status} ${r.statusText}] ${e}`)}}catch(s){let t=new h(`Error fetching from ${e.toString()}: ${s.message}`);throw t.stack=s.stack,t}return r}/**
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
 */function f(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){var t,s,r,n;if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),x(e.candidates[0]))throw new m(`${E(e)}`,e);return(null===(n=null===(r=null===(s=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===s?void 0:s.parts)||void 0===r?void 0:r[0])||void 0===n?void 0:n.text)?e.candidates[0].content.parts[0].text:""}if(e.promptFeedback)throw new m(`Text not available. ${E(e)}`,e);return""},e}let y=[o.RECITATION,o.SAFETY];function x(e){return!!e.finishReason&&y.includes(e.finishReason)}function E(e){var t,s,r;let n="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)n+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(n+=` due to ${e.promptFeedback.blockReason}`),(null===(s=e.promptFeedback)||void 0===s?void 0:s.blockReasonMessage)&&(n+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(r=e.candidates)||void 0===r?void 0:r[0]){let t=e.candidates[0];x(t)&&(n+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(n+=`: ${t.finishMessage}`))}return n}function T(e){return this instanceof T?(this.v=e,this):new T(e)}"function"==typeof SuppressedError&&SuppressedError;/**
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
 */let b=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function _(e){let t=[],s=e.getReader();for(;;){let{done:e,value:r}=await s.read();if(e)return f(function(e){let t=e[e.length-1],s={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e)if(t.candidates)for(let e of t.candidates){let t=e.index;if(s.candidates||(s.candidates=[]),s.candidates[t]||(s.candidates[t]={index:e.index}),s.candidates[t].citationMetadata=e.citationMetadata,s.candidates[t].finishReason=e.finishReason,s.candidates[t].finishMessage=e.finishMessage,s.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts)for(let r of(s.candidates[t].content||(s.candidates[t].content={role:e.content.role||"user",parts:[{text:""}]}),e.content.parts))r.text&&(s.candidates[t].content.parts[0].text+=r.text)}return s}(t));t.push(r)}}/**
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
 */async function v(e,t,s,r){let n=new p(t,c.STREAM_GENERATE_CONTENT,e,!0);return function(e){let[t,s]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let s="";return function r(){return t.read().then(({value:t,done:n})=>{let a;if(n){if(s.trim()){e.error(new h("Failed to parse stream"));return}e.close();return}let i=(s+=t).match(b);for(;i;){try{a=JSON.parse(i[1])}catch(t){e.error(new h(`Error parsing JSON response: "${i[1]}"`));return}e.enqueue(a),i=(s=s.substring(i[0].length)).match(b)}return r()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,s){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var r,n=s.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){n[e]&&(r[e]=function(t){return new Promise(function(s,r){a.push([e,t,s,r])>1||o(e,t)})})}function o(e,t){try{var s;(s=n[e](t)).value instanceof T?Promise.resolve(s.value.v).then(l,c):d(a[0][2],s)}catch(e){d(a[0][3],e)}}function l(e){o("next",e)}function c(e){o("throw",e)}function d(e,t){e(t),a.shift(),a.length&&o(a[0][0],a[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:s}=yield T(t.read());if(s)break;yield yield T(f(e))}})}(t),response:_(s)}}(await g(n,JSON.stringify(s),r))}async function N(e,t,s,r){let n=new p(t,c.GENERATE_CONTENT,e,!1),a=await g(n,JSON.stringify(s),r);return{response:f(await a.json())}}/**
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
 */function S(e,t){let s=[];if("string"==typeof e)s=[{text:e}];else for(let t of e)"string"==typeof t?s.push({text:t}):s.push(t);return{role:t,parts:s}}function O(e){return e.contents?e:{contents:[S(e,"user")]}}/**
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
 */let C="SILENT_ERROR";class k{constructor(e,t,s,r){this.model=t,this.params=s,this.requestOptions=r,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==s?void 0:s.history)&&(this._history=s.history.map(e=>{if(!e.role)throw Error("Missing role for history item: "+JSON.stringify(e));return S(e.parts,e.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var t,s;let r;await this._sendPromise;let n=S(e,"user"),a={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,contents:[...this._history,n]};return this._sendPromise=this._sendPromise.then(()=>N(this._apiKey,this.model,a,this.requestOptions)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(n);let s=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(s)}else{let t=E(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}r=e}),await this._sendPromise,r}async sendMessageStream(e){var t,s;await this._sendPromise;let r=S(e,"user"),n={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,contents:[...this._history,r]},a=v(this._apiKey,this.model,n,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>a).catch(e=>{throw Error(C)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(r);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=E(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==C&&console.error(e)}),a}}/**
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
 */async function A(e,t,s,r){let n=new p(t,c.COUNT_TOKENS,e,!1);return(await g(n,JSON.stringify(Object.assign(Object.assign({},s),{model:t})),r)).json()}/**
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
 */async function P(e,t,s,r){let n=new p(t,c.EMBED_CONTENT,e,!1);return(await g(n,JSON.stringify(s),r)).json()}async function w(e,t,s,r){let n=new p(t,c.BATCH_EMBED_CONTENTS,e,!1),a=s.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await g(n,JSON.stringify({requests:a}),r)).json()}/**
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
 */class I{constructor(e,t,s){this.apiKey=e,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.requestOptions=s||{}}async generateContent(e){let t=O(e);return N(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t),this.requestOptions)}async generateContentStream(e){let t=O(e);return v(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t),this.requestOptions)}startChat(e){return new k(this.apiKey,this.model,e,this.requestOptions)}async countTokens(e){let t=O(e);return A(this.apiKey,this.model,t)}async embedContent(e){let t="string"==typeof e||Array.isArray(e)?{content:S(e,"user")}:e;return P(this.apiKey,this.model,t)}async batchEmbedContents(e){return w(this.apiKey,this.model,e,this.requestOptions)}}/**
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
 */class R{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new h("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new I(this.apiKey,e,t)}}var j=s(1584);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let M=(0,s(9224).Z)("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);function D(){let[e,t]=(0,u.useState)([]),[s,r]=(0,u.useState)(""),[n,a]=(0,u.useState)(!1),i=(0,u.useRef)(null),o=new R(process.env.NEXT_PUBLIC_GEMINI_API_KEY||""),l=async n=>{if(n.preventDefault(),!s.trim())return;let i=s.trim();r(""),t(e=>[...e,{role:"user",parts:[{text:i}]}]),a(!0);try{let s=o.getGenerativeModel({model:"gemini-pro"}).startChat({history:e}),r=await s.sendMessage(i),n=(await r.response).text();t(e=>[...e,{role:"model",parts:[{text:n}]}])}catch(e){console.error("Error generating response:",e),t(e=>[...e,{role:"model",parts:[{text:"\xdczg\xfcn\xfcm, bir hata oluştu. L\xfctfen tekrar deneyin."}]}])}finally{a(!1)}};return(0,u.useEffect)(()=>{i.current?.scrollIntoView({behavior:"smooth"})},[e]),(0,d.jsxs)("main",{className:"min-h-screen flex flex-col",children:[d.jsx(j.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},className:"w-full bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700",children:d.jsx("div",{className:"container mx-auto px-4 py-4",children:d.jsx(j.E.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},className:"text-2xl md:text-3xl font-bold text-gray-800 dark:text-white",children:"AI Futbol Asistanı"})})}),d.jsx("div",{className:"flex-1 container mx-auto px-4 py-6",children:(0,d.jsxs)(j.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2,ease:"easeOut"},className:"max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 chat-container",children:[(0,d.jsxs)("div",{className:"h-[calc(100vh-280px)] overflow-y-auto mb-6 pr-2 custom-scrollbar",children:[e.map((e,t)=>d.jsx("div",{className:`flex mb-4 ${"user"===e.role?"justify-end":"justify-start"}`,children:d.jsx(j.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3,delay:.05*t},className:`inline-block p-4 rounded-lg max-w-[80%] ${"user"===e.role?"bg-blue-600 text-white rounded-br-none":"bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none"}`,children:e.parts[0].text})},t)),n&&d.jsx("div",{className:"flex justify-start mb-4",children:d.jsx(j.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{repeat:1/0,duration:1.5},className:"inline-block p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200",children:(0,d.jsxs)("div",{className:"loading-dots",children:[d.jsx("span",{}),d.jsx("span",{}),d.jsx("span",{})]})})}),d.jsx("div",{ref:i})]}),(0,d.jsxs)("form",{onSubmit:l,className:"flex gap-4 items-center",children:[d.jsx("input",{type:"text",value:s,onChange:e=>r(e.target.value),placeholder:"Futbol hakkında bir soru sorun...",className:"flex-1 px-5 py-3 border border-gray-300 rounded-full shadow-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300"}),d.jsx("button",{type:"submit",disabled:n||!s.trim(),className:"p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300","aria-label":"Send message",children:d.jsx(M,{size:24})})]})]})})]})}},7590:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ThemeProvider:()=>a});var r=s(5344),n=s(6256);function a({children:e,...t}){return r.jsx(n.f,{...t,children:e})}},8918:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ThemeToggle:()=>o});var r=s(5344),n=s(6256),a=s(8714),i=s(7180);function o(){let{theme:e,setTheme:t}=(0,n.F)();return r.jsx("button",{onClick:()=>t("dark"===e?"light":"dark"),className:"p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors","aria-label":"Toggle theme",children:"dark"===e?r.jsx(a.Z,{className:"w-5 h-5"}):r.jsx(i.Z,{className:"w-5 h-5"})})}},5911:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ToastProvider:()=>m,useToast:()=>p});var r=s(5344),n=s(3729),a=s(7060),i=s(6138),o=s(1991),l=s(4513),c=s(9119),d=s(1584);function u({message:e,type:t="info",duration:s=3e3,onClose:u}){let[h,m]=(0,n.useState)(!0);(0,n.useEffect)(()=>{let e=setTimeout(()=>{m(!1)},s);return()=>clearTimeout(e)},[s]);let p={success:a.Z,error:i.Z,info:o.Z}[t];return r.jsx(c.M,{children:h&&r.jsx(d.E.div,{initial:{opacity:0,y:50,scale:.3},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.5},transition:{duration:.3},className:`fixed bottom-4 right-4 p-4 rounded-xl text-white ${{success:"bg-green-600 dark:bg-green-700",error:"bg-red-600 dark:bg-red-700",info:"bg-blue-600 dark:bg-blue-700"}[t]} shadow-lg transition-opacity duration-300 min-w-[250px]`,children:(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[p&&r.jsx(p,{className:"w-6 h-6"}),r.jsx("span",{className:"flex-1 text-sm font-medium",children:e}),r.jsx("button",{onClick:()=>{m(!1),setTimeout(u,300)},className:"p-1 hover:bg-white/20 rounded-full transition-colors","aria-label":"Close toast",children:r.jsx(l.Z,{className:"w-4 h-4"})})]})})})}let h=(0,n.createContext)(void 0);function m({children:e}){let[t,s]=(0,n.useState)(null),a=(0,n.useCallback)((e,t="info")=>{s({message:e,type:t})},[]);return(0,r.jsxs)(h.Provider,{value:{showToast:a},children:[e,t&&r.jsx(u,{message:t.message,type:t.type,onClose:()=>s(null)})]})}function p(){let e=(0,n.useContext)(h);if(void 0===e)throw Error("useToast must be used within a ToastProvider");return e}},4465:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>i});let r=(0,s(6843).createProxy)(String.raw`/Users/sutuluce/Desktop/TaktiQ-MVP-main/src/app/ai-chat/page.tsx`),{__esModule:n,$$typeof:a}=r,i=r.default},8118:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>b,metadata:()=>T});var r=s(5036),n=s(2195),a=s.n(n);s(5023);var i=s(6843);let o=(0,i.createProxy)(String.raw`/Users/sutuluce/Desktop/TaktiQ-MVP-main/src/components/ThemeProvider.tsx`),{__esModule:l,$$typeof:c}=o;o.default;let d=(0,i.createProxy)(String.raw`/Users/sutuluce/Desktop/TaktiQ-MVP-main/src/components/ThemeProvider.tsx#ThemeProvider`),u=(0,i.createProxy)(String.raw`/Users/sutuluce/Desktop/TaktiQ-MVP-main/src/components/ThemeToggle.tsx`),{__esModule:h,$$typeof:m}=u;u.default;let p=(0,i.createProxy)(String.raw`/Users/sutuluce/Desktop/TaktiQ-MVP-main/src/components/ThemeToggle.tsx#ThemeToggle`),g=(0,i.createProxy)(String.raw`/Users/sutuluce/Desktop/TaktiQ-MVP-main/src/components/ToastProvider.tsx`),{__esModule:f,$$typeof:y}=g;g.default;let x=(0,i.createProxy)(String.raw`/Users/sutuluce/Desktop/TaktiQ-MVP-main/src/components/ToastProvider.tsx#ToastProvider`);(0,i.createProxy)(String.raw`/Users/sutuluce/Desktop/TaktiQ-MVP-main/src/components/ToastProvider.tsx#useToast`);var E=s(6274);let T={title:"TaktiQ - Futbol İstatistikleri Analiz Platformu",description:"Detaylı futbolcu ve takım istatistiklerini keşfedin, karşılaştırın ve analiz edin."};function b({children:e}){return r.jsx("html",{lang:"tr",suppressHydrationWarning:!0,children:r.jsx("body",{className:a().className,children:r.jsx(d,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:(0,r.jsxs)(x,{children:[r.jsx("header",{className:"sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm",children:(0,r.jsxs)("div",{className:"container mx-auto flex h-16 items-center justify-between px-4 md:px-6",children:[r.jsx(E.default,{href:"/",className:"mr-6 flex items-center space-x-2",children:r.jsx("span",{className:"text-xl font-bold text-primary dark:text-primary",children:"TaktiQ"})}),(0,r.jsxs)("nav",{className:"flex-1 items-center space-x-4 md:space-x-6",children:[r.jsx(E.default,{href:"/players",className:"nav-link",children:"Oyuncular"}),r.jsx(E.default,{href:"/compare",className:"nav-link",children:"Karşılaştır"}),r.jsx(E.default,{href:"/teams",className:"nav-link",children:"Takımlar"}),r.jsx(E.default,{href:"/ai-chat",className:"nav-link",children:"AI Chat"})]}),r.jsx("div",{className:"flex items-center space-x-4",children:r.jsx(p,{})})]})}),r.jsx("main",{children:e})]})})})})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,538],()=>s(9787));module.exports=r})();