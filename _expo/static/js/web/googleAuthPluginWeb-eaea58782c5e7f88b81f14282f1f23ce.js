__d((function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.getFirebaseAuthWeb=s,e.signInWithGoogleWeb=async function(){try{const n=new o.GoogleAuthProvider,t=s(),u=(await(0,o.signInWithPopup)(t,n)).user;return console.log("User signed in:",u),u}catch(o){throw console.error("Error signing in with Google:",o),o}},e.signOutGoogleWeb=async function(){try{await s().signOut(),console.log("User signed out")}catch(o){throw console.error("Error signing out:",o),o}};var o=r(d[0]),n=r(d[1]);let t=null;function s(){return t||(t=(0,o.getAuth)((0,n.getFirebaseAppWeb)())),t}}),1794,[3356,1805]);
__d((function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.getFirebaseAppWeb=function(){l||(l=(0,t.initializeApp)(n.firebaseConfigWeb));return l};var n=r(d[0]),t=r(d[1]);let l=null}),1805,[730,3366]);
__d((function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0});var n=r(d[0]);Object.keys(n).forEach((function(t){"default"!==t&&"__esModule"!==t&&(t in e&&e[t]===n[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t]}}))}))}),3356,[3357]);
__d((function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ActionCodeOperation",{enumerable:!0,get:function(){return t.A}}),Object.defineProperty(e,"ActionCodeURL",{enumerable:!0,get:function(){return t.aj}}),Object.defineProperty(e,"AuthCredential",{enumerable:!0,get:function(){return t.M}}),Object.defineProperty(e,"AuthErrorCodes",{enumerable:!0,get:function(){return t.J}}),Object.defineProperty(e,"EmailAuthCredential",{enumerable:!0,get:function(){return t.N}}),Object.defineProperty(e,"EmailAuthProvider",{enumerable:!0,get:function(){return t.W}}),Object.defineProperty(e,"FacebookAuthProvider",{enumerable:!0,get:function(){return t.X}}),Object.defineProperty(e,"FactorId",{enumerable:!0,get:function(){return t.F}}),Object.defineProperty(e,"GithubAuthProvider",{enumerable:!0,get:function(){return t.Z}}),Object.defineProperty(e,"GoogleAuthProvider",{enumerable:!0,get:function(){return t.Y}}),Object.defineProperty(e,"OAuthCredential",{enumerable:!0,get:function(){return t.Q}}),Object.defineProperty(e,"OAuthProvider",{enumerable:!0,get:function(){return t._}}),Object.defineProperty(e,"OperationType",{enumerable:!0,get:function(){return t.O}}),Object.defineProperty(e,"PhoneAuthCredential",{enumerable:!0,get:function(){return t.U}}),Object.defineProperty(e,"PhoneAuthProvider",{enumerable:!0,get:function(){return t.P}}),Object.defineProperty(e,"PhoneMultiFactorGenerator",{enumerable:!0,get:function(){return t.n}}),Object.defineProperty(e,"ProviderId",{enumerable:!0,get:function(){return t.q}}),Object.defineProperty(e,"RecaptchaVerifier",{enumerable:!0,get:function(){return t.R}}),Object.defineProperty(e,"SAMLAuthProvider",{enumerable:!0,get:function(){return t.$}}),Object.defineProperty(e,"SignInMethod",{enumerable:!0,get:function(){return t.S}}),Object.defineProperty(e,"TotpMultiFactorGenerator",{enumerable:!0,get:function(){return t.T}}),Object.defineProperty(e,"TotpSecret",{enumerable:!0,get:function(){return t.o}}),Object.defineProperty(e,"TwitterAuthProvider",{enumerable:!0,get:function(){return t.a0}}),Object.defineProperty(e,"applyActionCode",{enumerable:!0,get:function(){return t.a8}}),Object.defineProperty(e,"beforeAuthStateChanged",{enumerable:!0,get:function(){return t.y}}),Object.defineProperty(e,"browserCookiePersistence",{enumerable:!0,get:function(){return t.a}}),Object.defineProperty(e,"browserLocalPersistence",{enumerable:!0,get:function(){return t.b}}),Object.defineProperty(e,"browserPopupRedirectResolver",{enumerable:!0,get:function(){return t.m}}),Object.defineProperty(e,"browserSessionPersistence",{enumerable:!0,get:function(){return t.c}}),Object.defineProperty(e,"checkActionCode",{enumerable:!0,get:function(){return t.a9}}),Object.defineProperty(e,"confirmPasswordReset",{enumerable:!0,get:function(){return t.a7}}),Object.defineProperty(e,"connectAuthEmulator",{enumerable:!0,get:function(){return t.L}}),Object.defineProperty(e,"createUserWithEmailAndPassword",{enumerable:!0,get:function(){return t.ab}}),Object.defineProperty(e,"debugErrorMap",{enumerable:!0,get:function(){return t.H}}),Object.defineProperty(e,"deleteUser",{enumerable:!0,get:function(){return t.G}}),Object.defineProperty(e,"fetchSignInMethodsForEmail",{enumerable:!0,get:function(){return t.ag}}),Object.defineProperty(e,"getAdditionalUserInfo",{enumerable:!0,get:function(){return t.ar}}),Object.defineProperty(e,"getAuth",{enumerable:!0,get:function(){return t.p}}),Object.defineProperty(e,"getIdToken",{enumerable:!0,get:function(){return t.ao}}),Object.defineProperty(e,"getIdTokenResult",{enumerable:!0,get:function(){return t.ap}}),Object.defineProperty(e,"getMultiFactorResolver",{enumerable:!0,get:function(){return t.at}}),Object.defineProperty(e,"getRedirectResult",{enumerable:!0,get:function(){return t.k}}),Object.defineProperty(e,"inMemoryPersistence",{enumerable:!0,get:function(){return t.V}}),Object.defineProperty(e,"indexedDBLocalPersistence",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(e,"initializeAuth",{enumerable:!0,get:function(){return t.K}}),Object.defineProperty(e,"initializeRecaptchaConfig",{enumerable:!0,get:function(){return t.v}}),Object.defineProperty(e,"isSignInWithEmailLink",{enumerable:!0,get:function(){return t.ae}}),Object.defineProperty(e,"linkWithCredential",{enumerable:!0,get:function(){return t.a3}}),Object.defineProperty(e,"linkWithPhoneNumber",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(e,"linkWithPopup",{enumerable:!0,get:function(){return t.e}}),Object.defineProperty(e,"linkWithRedirect",{enumerable:!0,get:function(){return t.h}}),Object.defineProperty(e,"multiFactor",{enumerable:!0,get:function(){return t.au}}),Object.defineProperty(e,"onAuthStateChanged",{enumerable:!0,get:function(){return t.z}}),Object.defineProperty(e,"onIdTokenChanged",{enumerable:!0,get:function(){return t.x}}),Object.defineProperty(e,"parseActionCodeURL",{enumerable:!0,get:function(){return t.ak}}),Object.defineProperty(e,"prodErrorMap",{enumerable:!0,get:function(){return t.I}}),Object.defineProperty(e,"reauthenticateWithCredential",{enumerable:!0,get:function(){return t.a4}}),Object.defineProperty(e,"reauthenticateWithPhoneNumber",{enumerable:!0,get:function(){return t.r}}),Object.defineProperty(e,"reauthenticateWithPopup",{enumerable:!0,get:function(){return t.f}}),Object.defineProperty(e,"reauthenticateWithRedirect",{enumerable:!0,get:function(){return t.j}}),Object.defineProperty(e,"reload",{enumerable:!0,get:function(){return t.as}}),Object.defineProperty(e,"revokeAccessToken",{enumerable:!0,get:function(){return t.E}}),Object.defineProperty(e,"sendEmailVerification",{enumerable:!0,get:function(){return t.ah}}),Object.defineProperty(e,"sendPasswordResetEmail",{enumerable:!0,get:function(){return t.a6}}),Object.defineProperty(e,"sendSignInLinkToEmail",{enumerable:!0,get:function(){return t.ad}}),Object.defineProperty(e,"setPersistence",{enumerable:!0,get:function(){return t.t}}),Object.defineProperty(e,"signInAnonymously",{enumerable:!0,get:function(){return t.a1}}),Object.defineProperty(e,"signInWithCredential",{enumerable:!0,get:function(){return t.a2}}),Object.defineProperty(e,"signInWithCustomToken",{enumerable:!0,get:function(){return t.a5}}),Object.defineProperty(e,"signInWithEmailAndPassword",{enumerable:!0,get:function(){return t.ac}}),Object.defineProperty(e,"signInWithEmailLink",{enumerable:!0,get:function(){return t.af}}),Object.defineProperty(e,"signInWithPhoneNumber",{enumerable:!0,get:function(){return t.s}}),Object.defineProperty(e,"signInWithPopup",{enumerable:!0,get:function(){return t.d}}),Object.defineProperty(e,"signInWithRedirect",{enumerable:!0,get:function(){return t.g}}),Object.defineProperty(e,"signOut",{enumerable:!0,get:function(){return t.D}}),Object.defineProperty(e,"unlink",{enumerable:!0,get:function(){return t.aq}}),Object.defineProperty(e,"updateCurrentUser",{enumerable:!0,get:function(){return t.C}}),Object.defineProperty(e,"updateEmail",{enumerable:!0,get:function(){return t.am}}),Object.defineProperty(e,"updatePassword",{enumerable:!0,get:function(){return t.an}}),Object.defineProperty(e,"updatePhoneNumber",{enumerable:!0,get:function(){return t.u}}),Object.defineProperty(e,"updateProfile",{enumerable:!0,get:function(){return t.al}}),Object.defineProperty(e,"useDeviceLanguage",{enumerable:!0,get:function(){return t.B}}),Object.defineProperty(e,"validatePassword",{enumerable:!0,get:function(){return t.w}}),Object.defineProperty(e,"verifyBeforeUpdateEmail",{enumerable:!0,get:function(){return t.ai}}),Object.defineProperty(e,"verifyPasswordResetCode",{enumerable:!0,get:function(){return t.aa}});var t=r(d[0]);r(d[1]),r(d[2]),r(d[3]),r(d[4]),r(d[5])}),3357,[3358,3359,3361,3363,2894,3360]);
__d((function(e,t,n,i,r,s,a){Object.defineProperty(s,"__esModule",{value:!0}),s.A=s.$=void 0,s.B=function(e){(0,c.getModularInstance)(e).useDeviceLanguage()},s.C=function(e,t){return(0,c.getModularInstance)(e).updateCurrentUser(t)},s.D=function(e){return(0,c.getModularInstance)(e).signOut()},s.E=function(e,t){return xe(e).revokeAccessToken(t)},s.F=void 0,s.G=async function(e){return(0,c.getModularInstance)(e).delete()}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */,s.J=s.I=s.H=void 0,s.K=tt,s.L=it,s.a0=s.a=s._=s.Z=s.Y=s.X=s.W=s.V=s.U=s.T=s.S=s.R=s.Q=s.P=s.O=s.N=s.M=void 0,s.a1=
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
async function(e){var t;if((0,o._isFirebaseServerApp)(e.app))return Promise.reject(y(e));const n=xe(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new zt({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await Wt(n,{returnSecureToken:!0}),r=await zt._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */,s.a2=Zt,s.a3=en,s.a4=tn,s.a5=
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
async function(e,t){if((0,o._isFirebaseServerApp)(e.app))return Promise.reject(y(e));const n=xe(e),i=await nn(n,{token:t,returnSecureToken:!0}),r=await zt._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */,s.a6=async function(e,t,n){const i=xe(e),r={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&on(i,r,n);await Ze(i,r,"getOobCode",gt,"EMAIL_PASSWORD_PROVIDER")},s.a7=async function(e,t,n){await ut((0,c.getModularInstance)(e),{oobCode:t,newPassword:n}).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&cn(e),t}))},s.a8=async function(e,t){await ht((0,c.getModularInstance)(e),{oobCode:t})},s.a9=un,s.aA=zi,s.aB=function(e=(0,c.getUA)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)},s.aC=_,s.aD=A,s.aE=void 0,s.aF=Ie,s.aG=ye,s.aH=Vi,s.aI=Ci,s.aJ=function(){Pi.clear()},s.aK=xe,s.aM=s.aL=void 0,s.aN=Le,s.aO=Hn,s.aR=s.aQ=s.aP=void 0,s.aa=async function(e,t){const{data:n}=await un((0,c.getModularInstance)(e),t);return n.email},s.ab=async function(e,t,n){if((0,o._isFirebaseServerApp)(e.app))return Promise.reject(y(e));const i=xe(e),r=Ze(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wt,"EMAIL_PASSWORD_PROVIDER"),s=await r.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&cn(e),t})),a=await zt._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(a.user),a},s.ac=function(e,t,n){if((0,o._isFirebaseServerApp)(e.app))return Promise.reject(y(e));return Zt((0,c.getModularInstance)(e),Dt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&cn(e),t}))}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */,s.ad=async function(e,t,n){const i=xe(e),r={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};(function(e,t){A(t.handleCodeInApp,i,"argument-error"),t&&on(i,e,t)})(r,n),await Ze(i,r,"getOobCode",vt,"EMAIL_PASSWORD_PROVIDER")},s.ae=function(e,t){const n=Ct.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)},s.af=async function(e,t,n){if((0,o._isFirebaseServerApp)(e.app))return Promise.reject(y(e));const i=(0,c.getModularInstance)(e),r=Dt.credentialWithLink(t,n||R());return A(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Zt(i,r)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */,s.ag=
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
async function(e,t){const n=P()?R():'http://localhost',i={identifier:t,continueUri:n},{signinMethods:r}=await dn((0,c.getModularInstance)(e),i);return r||[]},s.ah=async function(e,t){const n=(0,c.getModularInstance)(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&on(n.auth,i,t);const{email:r}=await ft(n.auth,i);r!==e.email&&await e.reload()},s.ai=async function(e,t,n){const i=(0,c.getModularInstance)(e),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&on(i.auth,r,n);const{email:s}=await It(i.auth,r);s!==e.email&&await e.reload()}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */,s.aj=void 0,s.ak=function(e){return Ct.parseLink(e)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */,s.al=
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
async function(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,c.getModularInstance)(e),r={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await re(i,ln(i.auth,r));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const a=i.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=i.displayName,a.photoURL=i.photoURL);await i._updateTokensIfNecessary(s)},s.am=function(e,t){const n=(0,c.getModularInstance)(e);if((0,o._isFirebaseServerApp)(n.auth.app))return Promise.reject(y(n.auth));return hn(n,t,null)},s.an=function(e,t){return hn((0,c.getModularInstance)(e),null,t)},s.ao=
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
function(e,t=!1){return(0,c.getModularInstance)(e).getIdToken(t)},s.ap=ee,s.aq=
/**
   * @license
   * Copyright 2019 Google LLC
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
   */
async function(e,t){const n=(0,c.getModularInstance)(e);await Yt(!0,n,t);const{providerUserInfo:i}=await X(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),r=Bt(i||[]);n.providerData=n.providerData.filter((e=>r.has(e.providerId))),r.has("phone")||(n.phoneNumber=null);return await n.auth._persistUserIfCurrent(n),n},s.ar=function(e){const{user:t,_tokenResponse:n}=e;if(t.isAnonymous&&!n)return{providerId:null,isNewUser:!1,profile:null};return pn(n)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */,s.as=ue,s.at=function(e,t){var n;const i=(0,c.getModularInstance)(e),r=t;return A(t.customData.operationType,i,"argument-error"),A(null===(n=r.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),wn._fromError(i,r)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */,s.au=function(e){const t=(0,c.getModularInstance)(e);Pn.has(t)||Pn.set(t,Rn._fromUser(t));return Pn.get(t)},s.av=k,s.aw=Oe,s.ax=Pe,s.ay=I,s.az=hr,s.c=s.b=void 0,s.d=async function(e,t,n){if((0,o._isFirebaseServerApp)(e.app))return Promise.reject(_(e,"operation-not-supported-in-this-environment"));const i=xe(e);E(e,t,Lt);const r=_i(i,n);return new ki(i,"signInViaPopup",t,r).executeNotNull()},s.e=async function(e,t,n){const i=(0,c.getModularInstance)(e);E(i.auth,t,Lt);const r=_i(i.auth,n);return new ki(i.auth,"linkViaPopup",t,r,i).executeNotNull()},s.f=async function(e,t,n){const i=(0,c.getModularInstance)(e);if((0,o._isFirebaseServerApp)(i.auth.app))return Promise.reject(_(i.auth,"operation-not-supported-in-this-environment"));E(i.auth,t,Lt);const r=_i(i.auth,n);return new ki(i.auth,"reauthViaPopup",t,r,i).executeNotNull()},s.g=
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
function(e,t,n){return Mi(e,t,n)},s.h=function(e,t,n){return Fi(e,t,n)},s.i=void 0,s.j=function(e,t,n){return Ui(e,t,n)},s.k=async function(e,t){return await xe(e)._initializationPromise,Vi(e,t,!1)},s.l=async function(e,t,n){const i=(0,c.getModularInstance)(e);await Yt(!1,i,"phone");const r=await gi(i.auth,t,(0,c.getModularInstance)(n));return new fi(r,(e=>en(i,e)))},s.o=s.n=s.m=void 0,s.p=function(e=(0,o.getApp)()){const t=(0,o._getProvider)(e,'auth');if(t.isInitialized())return t.getImmediate();const n=tt(e,{popupRedirectResolver:fr,persistence:[ii,Cn,Fn]}),i=(0,c.getExperimentalSetting)('authTokenSyncURL');if(i&&'boolean'==typeof isSecureContext&&isSecureContext){const e=new URL(i,location.origin);if(location.origin===e.origin){const t=Nr(e.toString());yn(n,t,(()=>t(n.currentUser))),Tn(n,(e=>t(e)))}}const r=(0,c.getDefaultEmulatorHost)('auth');r&&it(n,`http://${r}`);return n},s.q=void 0,s.r=async function(e,t,n){const i=(0,c.getModularInstance)(e);if((0,o._isFirebaseServerApp)(i.auth.app))return Promise.reject(y(i.auth));const r=await gi(i.auth,t,(0,c.getModularInstance)(n));return new fi(r,(e=>tn(i,e)))},s.s=async function(e,t,n){if((0,o._isFirebaseServerApp)(e.app))return Promise.reject(y(e));const i=xe(e),r=await gi(i,t,(0,c.getModularInstance)(n));return new fi(r,(e=>Zt(i,e)))},s.t=function(e,t){return(0,c.getModularInstance)(e).setPersistence(t)},s.u=async function(e,t){const n=(0,c.getModularInstance)(e);if((0,o._isFirebaseServerApp)(n.auth.app))return Promise.reject(y(n.auth));await Jt(n,t)},s.v=function(e){return et(e)},s.w=async function(e,t){return xe(e).validatePassword(t)},s.x=Tn,s.y=yn,s.z=function(e,t,n,i){return(0,c.getModularInstance)(e).onAuthStateChanged(t,n,i)};var o=t(a[0]),c=t(a[1]),u=t(a[2]),d=t(a[3]),l=t(a[4]);
/**
   * @license
   * Copyright 2021 Google LLC
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
   */
s.F={PHONE:'phone',TOTP:'totp'},s.q={FACEBOOK:'facebook.com',GITHUB:'github.com',GOOGLE:'google.com',PASSWORD:'password',PHONE:'phone',TWITTER:'twitter.com'},s.S={EMAIL_LINK:'emailLink',EMAIL_PASSWORD:'password',FACEBOOK:'facebook.com',GITHUB:'github.com',GOOGLE:'google.com',PHONE:'phone',TWITTER:'twitter.com'},s.O={LINK:'link',REAUTHENTICATE:'reauthenticate',SIGN_IN:'signIn'},s.A={EMAIL_SIGNIN:'EMAIL_SIGNIN',PASSWORD_RESET:'PASSWORD_RESET',RECOVER_EMAIL:'RECOVER_EMAIL',REVERT_SECOND_FACTOR_ADDITION:'REVERT_SECOND_FACTOR_ADDITION',VERIFY_AND_CHANGE_EMAIL:'VERIFY_AND_CHANGE_EMAIL',VERIFY_EMAIL:'VERIFY_EMAIL'};function h(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}s.H=
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
function(){return{"admin-restricted-operation":'This operation is restricted to administrators only.',"argument-error":'',"app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":'Cordova framework is not ready.',"cors-unsupported":'This browser is not supported.',"credential-already-in-use":'This credential is already associated with a different user account.',"custom-token-mismatch":'The custom token corresponds to a different audience.',"requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":'Multi-factor users must always have a verified email.',"email-already-in-use":'The email address is already in use by another account.',"emulator-config-failed":"Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling \"connectAuthEmulator()\" sooner.","expired-action-code":'The action code has expired.',"cancelled-popup-request":'This operation has been cancelled due to another conflicting popup being opened.',"internal-error":'An internal AuthError has occurred.',"invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":'The mobile app identifier is not registered for the current project.',"invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":'An internal AuthError has occurred.',"invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":'The continue URL provided in the request is invalid.',"invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":'The custom token format is incorrect. Please check the documentation.',"invalid-dynamic-link-domain":'The provided dynamic link domain is not configured or authorized for the current project.',"invalid-email":'The email address is badly formatted.',"invalid-emulator-scheme":'Emulator URL must start with a valid scheme (http:// or https://).',"invalid-api-key":'Your API key is invalid, please check you have copied it correctly.',"invalid-cert-hash":'The SHA-1 certificate hash provided is invalid.',"invalid-credential":'The supplied auth credential is incorrect, malformed or has expired.',"invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":'The request does not contain a valid proof of first factor successful sign-in.',"invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":'The password is invalid or the user does not have a password.',"invalid-persistence-type":'The specified persistence type is invalid. It can only be local, session or none.',"invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":'The specified provider ID is invalid.',"invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":'The verification ID used to create the phone auth credential is invalid.',"invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":'Login blocked by user-provided method: {$originalMessage}',"missing-android-pkg-name":'An Android Package Name must be provided if the Android App is required to be installed.',"auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":'The phone auth credential was created with an empty SMS verification code.',"missing-continue-uri":'A continue URL must be provided in the request.',"missing-iframe-start":'An internal AuthError has occurred.',"missing-ios-bundle-id":'An iOS Bundle ID must be provided if an App Store ID is provided.',"missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":'A non-empty password must be provided',"missing-multi-factor-info":'No second factor identifier is provided.',"missing-multi-factor-session":'The request is missing proof of first factor successful sign-in.',"missing-phone-number":'To send verification codes, provide a phone number for the recipient.',"missing-verification-id":'The phone auth credential was created with an empty verification ID.',"app-deleted":'This instance of FirebaseApp has been deleted.',"multi-factor-info-not-found":'The user does not have a second factor matching the identifier provided.',"multi-factor-auth-required":'Proof of ownership of a second factor is required to complete sign-in.',"account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":'A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.',"no-auth-event":'An internal AuthError has occurred.',"no-such-provider":'User was not linked to an account with the given provider.',"null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":"This operation is not supported in the environment this application is running on. \"location.protocol\" must be http, https or chrome-extension and web storage must be enabled.","popup-blocked":'Unable to establish a connection with the popup. It may have been blocked by the browser.',"popup-closed-by-user":'The popup has been closed by the user before finalizing the operation.',"provider-already-linked":'User can only be linked to one identity for the given provider.',"quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":'The redirect operation has been cancelled by the user before finalizing.',"redirect-operation-pending":'A redirect sign-in operation is already pending.',"rejected-credential":'The request contains malformed or mismatching credentials.',"second-factor-already-in-use":'The second factor is already enrolled on this account.',"maximum-second-factor-count-exceeded":'The maximum allowed number of second factors on a user has been exceeded.',"tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:'The operation has timed out.',"user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":'Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.',"unsupported-persistence-type":'The current environment does not support the specified persistence type.',"unsupported-tenant-operation":'This operation is not supported in a multi-tenant context.',"unverified-email":'The operation requires a verified email.',"user-cancelled":'The user did not grant your application the permissions it requested.',"user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":'The user account has been disabled by an administrator.',"user-mismatch":'The supplied credentials do not correspond to the previously signed in user.',"user-signed-out":'',"weak-password":'The password must be 6 characters long or more.',"web-storage-unsupported":'This browser is not supported or 3rd party cookies and data may be disabled.',"already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":'The reCAPTCHA token is missing when sending request to the backend.',"invalid-recaptcha-token":'The reCAPTCHA token is invalid when sending request to the backend.',"invalid-recaptcha-action":'The reCAPTCHA action is invalid when sending request to the backend.',"recaptcha-not-enabled":'reCAPTCHA Enterprise integration is not enabled for this project.',"missing-client-type":'The reCAPTCHA client type is missing when sending request to the backend.',"missing-recaptcha-version":'The reCAPTCHA version is missing when sending request to the backend.',"invalid-req-type":'Invalid request parameters.',"invalid-recaptcha-version":'The reCAPTCHA version is invalid when sending request to the backend.',"unsupported-password-policy-schema-version":'The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.',"password-does-not-meet-requirements":'The password does not meet the requirements.',"invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}};const p=s.I=h,m=new c.ErrorFactory('auth','Firebase',{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),f=(s.J={ADMIN_ONLY_OPERATION:'auth/admin-restricted-operation',ARGUMENT_ERROR:'auth/argument-error',APP_NOT_AUTHORIZED:'auth/app-not-authorized',APP_NOT_INSTALLED:'auth/app-not-installed',CAPTCHA_CHECK_FAILED:'auth/captcha-check-failed',CODE_EXPIRED:'auth/code-expired',CORDOVA_NOT_READY:'auth/cordova-not-ready',CORS_UNSUPPORTED:'auth/cors-unsupported',CREDENTIAL_ALREADY_IN_USE:'auth/credential-already-in-use',CREDENTIAL_MISMATCH:'auth/custom-token-mismatch',CREDENTIAL_TOO_OLD_LOGIN_AGAIN:'auth/requires-recent-login',DEPENDENT_SDK_INIT_BEFORE_AUTH:'auth/dependent-sdk-initialized-before-auth',DYNAMIC_LINK_NOT_ACTIVATED:'auth/dynamic-link-not-activated',EMAIL_CHANGE_NEEDS_VERIFICATION:'auth/email-change-needs-verification',EMAIL_EXISTS:'auth/email-already-in-use',EMULATOR_CONFIG_FAILED:'auth/emulator-config-failed',EXPIRED_OOB_CODE:'auth/expired-action-code',EXPIRED_POPUP_REQUEST:'auth/cancelled-popup-request',INTERNAL_ERROR:'auth/internal-error',INVALID_API_KEY:'auth/invalid-api-key',INVALID_APP_CREDENTIAL:'auth/invalid-app-credential',INVALID_APP_ID:'auth/invalid-app-id',INVALID_AUTH:'auth/invalid-user-token',INVALID_AUTH_EVENT:'auth/invalid-auth-event',INVALID_CERT_HASH:'auth/invalid-cert-hash',INVALID_CODE:'auth/invalid-verification-code',INVALID_CONTINUE_URI:'auth/invalid-continue-uri',INVALID_CORDOVA_CONFIGURATION:'auth/invalid-cordova-configuration',INVALID_CUSTOM_TOKEN:'auth/invalid-custom-token',INVALID_DYNAMIC_LINK_DOMAIN:'auth/invalid-dynamic-link-domain',INVALID_EMAIL:'auth/invalid-email',INVALID_EMULATOR_SCHEME:'auth/invalid-emulator-scheme',INVALID_IDP_RESPONSE:'auth/invalid-credential',INVALID_LOGIN_CREDENTIALS:'auth/invalid-credential',INVALID_MESSAGE_PAYLOAD:'auth/invalid-message-payload',INVALID_MFA_SESSION:'auth/invalid-multi-factor-session',INVALID_OAUTH_CLIENT_ID:'auth/invalid-oauth-client-id',INVALID_OAUTH_PROVIDER:'auth/invalid-oauth-provider',INVALID_OOB_CODE:'auth/invalid-action-code',INVALID_ORIGIN:'auth/unauthorized-domain',INVALID_PASSWORD:'auth/wrong-password',INVALID_PERSISTENCE:'auth/invalid-persistence-type',INVALID_PHONE_NUMBER:'auth/invalid-phone-number',INVALID_PROVIDER_ID:'auth/invalid-provider-id',INVALID_RECIPIENT_EMAIL:'auth/invalid-recipient-email',INVALID_SENDER:'auth/invalid-sender',INVALID_SESSION_INFO:'auth/invalid-verification-id',INVALID_TENANT_ID:'auth/invalid-tenant-id',MFA_INFO_NOT_FOUND:'auth/multi-factor-info-not-found',MFA_REQUIRED:'auth/multi-factor-auth-required',MISSING_ANDROID_PACKAGE_NAME:'auth/missing-android-pkg-name',MISSING_APP_CREDENTIAL:'auth/missing-app-credential',MISSING_AUTH_DOMAIN:'auth/auth-domain-config-required',MISSING_CODE:'auth/missing-verification-code',MISSING_CONTINUE_URI:'auth/missing-continue-uri',MISSING_IFRAME_START:'auth/missing-iframe-start',MISSING_IOS_BUNDLE_ID:'auth/missing-ios-bundle-id',MISSING_OR_INVALID_NONCE:'auth/missing-or-invalid-nonce',MISSING_MFA_INFO:'auth/missing-multi-factor-info',MISSING_MFA_SESSION:'auth/missing-multi-factor-session',MISSING_PHONE_NUMBER:'auth/missing-phone-number',MISSING_SESSION_INFO:'auth/missing-verification-id',MODULE_DESTROYED:'auth/app-deleted',NEED_CONFIRMATION:'auth/account-exists-with-different-credential',NETWORK_REQUEST_FAILED:'auth/network-request-failed',NULL_USER:'auth/null-user',NO_AUTH_EVENT:'auth/no-auth-event',NO_SUCH_PROVIDER:'auth/no-such-provider',OPERATION_NOT_ALLOWED:'auth/operation-not-allowed',OPERATION_NOT_SUPPORTED:'auth/operation-not-supported-in-this-environment',POPUP_BLOCKED:'auth/popup-blocked',POPUP_CLOSED_BY_USER:'auth/popup-closed-by-user',PROVIDER_ALREADY_LINKED:'auth/provider-already-linked',QUOTA_EXCEEDED:'auth/quota-exceeded',REDIRECT_CANCELLED_BY_USER:'auth/redirect-cancelled-by-user',REDIRECT_OPERATION_PENDING:'auth/redirect-operation-pending',REJECTED_CREDENTIAL:'auth/rejected-credential',SECOND_FACTOR_ALREADY_ENROLLED:'auth/second-factor-already-in-use',SECOND_FACTOR_LIMIT_EXCEEDED:'auth/maximum-second-factor-count-exceeded',TENANT_ID_MISMATCH:'auth/tenant-id-mismatch',TIMEOUT:'auth/timeout',TOKEN_EXPIRED:'auth/user-token-expired',TOO_MANY_ATTEMPTS_TRY_LATER:'auth/too-many-requests',UNAUTHORIZED_DOMAIN:'auth/unauthorized-continue-uri',UNSUPPORTED_FIRST_FACTOR:'auth/unsupported-first-factor',UNSUPPORTED_PERSISTENCE:'auth/unsupported-persistence-type',UNSUPPORTED_TENANT_OPERATION:'auth/unsupported-tenant-operation',UNVERIFIED_EMAIL:'auth/unverified-email',USER_CANCELLED:'auth/user-cancelled',USER_DELETED:'auth/user-not-found',USER_DISABLED:'auth/user-disabled',USER_MISMATCH:'auth/user-mismatch',USER_SIGNED_OUT:'auth/user-signed-out',WEAK_PASSWORD:'auth/weak-password',WEB_STORAGE_UNSUPPORTED:'auth/web-storage-unsupported',ALREADY_INITIALIZED:'auth/already-initialized',RECAPTCHA_NOT_ENABLED:'auth/recaptcha-not-enabled',MISSING_RECAPTCHA_TOKEN:'auth/missing-recaptcha-token',INVALID_RECAPTCHA_TOKEN:'auth/invalid-recaptcha-token',INVALID_RECAPTCHA_ACTION:'auth/invalid-recaptcha-action',MISSING_CLIENT_TYPE:'auth/missing-client-type',MISSING_RECAPTCHA_VERSION:'auth/missing-recaptcha-version',INVALID_RECAPTCHA_VERSION:'auth/invalid-recaptcha-version',INVALID_REQ_TYPE:'auth/invalid-req-type',INVALID_HOSTING_LINK_DOMAIN:'auth/invalid-hosting-link-domain'},new u.Logger('@firebase/auth'));function g(e,...t){f.logLevel<=u.LogLevel.WARN&&f.warn(`Auth (${o.SDK_VERSION}): ${e}`,...t)}function v(e,...t){f.logLevel<=u.LogLevel.ERROR&&f.error(`Auth (${o.SDK_VERSION}): ${e}`,...t)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function I(e,...t){throw w(e,...t)}function _(e,...t){return w(e,...t)}function T(e,t,n){const i=Object.assign(Object.assign({},p()),{[t]:n});return new c.ErrorFactory('auth','Firebase',i).create(t,{appName:e.name})}function y(e){return T(e,"operation-not-supported-in-this-environment",'Operations that alter the current user are not supported in conjunction with FirebaseServerApp')}function E(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&I(e,"argument-error"),T(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(e,...t){if('string'!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return m.create(e,...t)}function A(e,t,...n){if(!e)throw w(t,...n)}function S(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function k(e,t){e||S(t)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function R(){var e;return'undefined'!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||''}function P(){return'http:'===N()||'https:'===N()}function N(){var e;return'undefined'!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function b(){if('undefined'==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class O{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,'Short delay should be less than long delay!'),this.isMobile=(0,c.isMobileCordova)()||(0,c.isReactNative)()}get(){return'undefined'!=typeof navigator&&navigator&&'onLine'in navigator&&'boolean'==typeof navigator.onLine&&(P()||(0,c.isBrowserExtension)()||'connection'in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function C(e,t){k(e.emulator,'Emulator should always be set here');const{url:n}=e.emulator;return t?`${n}${t.startsWith('/')?t.slice(1):t}`:n}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class D{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:'undefined'!=typeof self&&'fetch'in self?self.fetch:'undefined'!=typeof globalThis&&globalThis.fetch?globalThis.fetch:'undefined'!=typeof fetch?fetch:void S('Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill')}static headers(){return this.headersImpl?this.headersImpl:'undefined'!=typeof self&&'Headers'in self?self.Headers:'undefined'!=typeof globalThis&&globalThis.Headers?globalThis.Headers:'undefined'!=typeof Headers?Headers:void S('Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill')}static response(){return this.responseImpl?this.responseImpl:'undefined'!=typeof self&&'Response'in self?self.Response:'undefined'!=typeof globalThis&&globalThis.Response?globalThis.Response:'undefined'!=typeof Response?Response:void S('Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill')}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */s.aQ=D;const L={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},M=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],U=new O(3e4,6e4);
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function V(e,t,n,i,r={}){return x(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const a=(0,c.querystring)(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]='application/json',e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:o},r);return(0,c.isCloudflareWorker)()||(u.referrerPolicy='no-referrer'),e.emulatorConfig&&(0,c.isCloudWorkstation)(e.emulatorConfig.host)&&(u.credentials='include'),D.fetch()(await j(e,e.config.apiHost,n,a),u)}))}async function x(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},L),t);try{const t=new W(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if('needConfirmation'in s)throw z(e,"account-exists-with-different-credential",s);if(r.ok&&!('errorMessage'in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,a]=t.split(' : ');if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw z(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw z(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw z(e,"user-disabled",s);const o=i[n]||n.toLowerCase().replace(/[_\s]+/g,'-');if(a)throw T(e,o,a);I(e,o)}}catch(t){if(t instanceof c.FirebaseError)throw t;I(e,"network-request-failed",{message:String(t)})}}async function H(e,t,n,i,r={}){const s=await V(e,t,n,i,r);return'mfaPendingCredential'in s&&I(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function j(e,t,n,i){const r=`${t}${n}?${i}`,s=e,a=s.config.emulator?C(e.config,r):`${e.config.apiScheme}://${r}`;if(M.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){return s._getPersistence()._getFinalTarget(a).toString()}return a}function q(e){switch(e){case'ENFORCE':return"ENFORCE";case'AUDIT':return"AUDIT";case'OFF':return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class W{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(_(this.auth,"network-request-failed"))),U.get())}))}}function z(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=_(e,t,i);return r.customData._tokenResponse=n,r}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function G(e){return void 0!==e&&void 0!==e.getResponse}function K(e){return void 0!==e&&void 0!==e.enterprise}class ${constructor(e){if(this.siteKey='',this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error('recaptchaKey undefined');this.siteKey=e.recaptchaKey.split('/')[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return q(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */async function B(e){return(await V(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||''}async function J(e,t){return V(e,"GET","/v2/recaptchaConfig",F(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */async function Y(e,t){return V(e,"POST","/v1/accounts:delete",t)}async function X(e,t){return V(e,"POST","/v1/accounts:update",t)}async function Q(e,t){return V(e,"POST","/v1/accounts:lookup",t)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function Z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function ee(e,t=!1){const n=(0,c.getModularInstance)(e),i=await n.getIdToken(t),r=ne(i);A(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s='object'==typeof r.firebase?r.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Z(te(r.auth_time)),issuedAtTime:Z(te(r.iat)),expirationTime:Z(te(r.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function te(e){return 1e3*Number(e)}function ne(e){const[t,n,i]=e.split('.');if(void 0===t||void 0===n||void 0===i)return v('JWT malformed, contained fewer than 3 sections'),null;try{const e=(0,c.base64Decode)(n);return e?JSON.parse(e):(v('Failed to decode base64 JWT payload'),null)}catch(e){return v('Caught error parsing JWT payload as JSON',null==e?void 0:e.toString()),null}}function ie(e){const t=ne(e);return A(t,"internal-error"),A(void 0!==t.exp,"internal-error"),A(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */async function re(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof c.FirebaseError&&se(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function se({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class ae{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class oe{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Z(this.lastLoginAt),this.creationTime=Z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
   * @license
   * Copyright 2019 Google LLC
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
   */async function ce(e){var t;const n=e.auth,i=await e.getIdToken(),r=await re(e,Q(n,{idToken:i}));A(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?le(s.providerUserInfo):[],o=de(e.providerData,a),c=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),d=!!c&&u,l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new oe(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,l)}async function ue(e){const t=(0,c.getModularInstance)(e);await ce(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function de(e,t){return[...e.filter((e=>!t.some((t=>t.providerId===e.providerId)))),...t]}function le(e){return e.map((e=>{var{providerId:t}=e,n=(0,d.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||'',displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */async function he(e,t){const n=await x(e,{},(async()=>{const n=(0,c.querystring)({grant_type:'refresh_token',refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=await j(e,i,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]='application/x-www-form-urlencoded',D.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pe(e,t){return V(e,"POST","/v2/accounts:revokeToken",F(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class me{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(void 0!==e.idToken,"internal-error"),A(void 0!==e.refreshToken,"internal-error");const t='expiresIn'in e&&void 0!==e.expiresIn?Number(e.expiresIn):ie(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){A(0!==e.length,"internal-error");const t=ie(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await he(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new me;return n&&(A('string'==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(A('string'==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(A('number'==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new me,this.toJSON())}_performRefresh(){return S('not implemented')}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function fe(e,t){A('string'==typeof e||void 0===e,"internal-error",{appName:t})}class ge{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=(0,d.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ae(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new oe(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await re(this,this.stsTokenManager.getToken(this.auth,e));return A(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ee(this,e)}reload(){return ue(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ge(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ce(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,o._isFirebaseServerApp)(this.auth.app))return Promise.reject(y(this.auth));const e=await this.getIdToken();return await re(this,Y(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||''}static _fromJSON(e,t){var n,i,r,s,a,o,c,u;const d=null!==(n=t.displayName)&&void 0!==n?n:void 0,l=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,m=null!==(a=t.tenantId)&&void 0!==a?a:void 0,f=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:I,emailVerified:_,isAnonymous:T,providerData:y,stsTokenManager:E}=t;A(I&&E,e,"internal-error");const w=me.fromJSON(this.name,E);A('string'==typeof I,e,"internal-error"),fe(d,e.name),fe(l,e.name),A('boolean'==typeof _,e,"internal-error"),A('boolean'==typeof T,e,"internal-error"),fe(h,e.name),fe(p,e.name),fe(m,e.name),fe(f,e.name),fe(g,e.name),fe(v,e.name);const S=new ge({uid:I,auth:e,email:l,emailVerified:_,displayName:d,isAnonymous:T,photoURL:p,phoneNumber:h,tenantId:m,stsTokenManager:w,createdAt:g,lastLoginAt:v});return y&&Array.isArray(y)&&(S.providerData=y.map((e=>Object.assign({},e)))),f&&(S._redirectEventId=f),S}static async _fromIdTokenResponse(e,t,n=!1){const i=new me;i.updateFromServerResponse(t);const r=new ge({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ce(r),r}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];A(void 0!==i.localId,"internal-error");const r=void 0!==i.providerUserInfo?le(i.providerUserInfo):[],s=!(i.email&&i.passwordHash||(null==r?void 0:r.length)),a=new me;a.updateFromIdToken(n);const o=new ge({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new oe(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash||(null==r?void 0:r.length))};return Object.assign(o,c),o}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */s.aL=ge;const ve=new Map;function Ie(e){k(e instanceof Function,'Expected a class definition');let t=ve.get(e);return t?(k(t instanceof e,'Instance stored in cache mismatched with class'),t):(t=new e,ve.set(e,t),t)}
/**
   * @license
   * Copyright 2019 Google LLC
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
   */class _e{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_e.type='NONE';const Te=s.V=_e;
/**
   * @license
   * Copyright 2019 Google LLC
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
   */function ye(e,t,n){return`firebase:${e}:${t}:${n}`}class Ee{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ye(this.userKey,i.apiKey,r),this.fullPersistenceKey=ye("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if('string'==typeof e){const t=await Q(this.auth,{idToken:e}).catch((()=>{}));return t?ge._fromGetAccountInfoResponse(this.auth,t,e):null}return ge._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ee(Ie(Te),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Ie(Te);const s=ye(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(s);if(t){let i;if('string'==typeof t){const n=await Q(e,{idToken:t}).catch((()=>{}));if(!n)break;i=await ge._fromGetAccountInfoResponse(e,n,t)}else i=ge._fromJSON(e,t);n!==r&&(a=i),r=n;break}}catch(e){}const o=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&o.length?(r=o[0],a&&await r._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Ee(r,e,n)):new Ee(r,e,n)}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function we(e){const t=e.toLowerCase();if(t.includes('opera/')||t.includes('opr/')||t.includes('opios/'))return"Opera";if(Re(t))return"IEMobile";if(t.includes('msie')||t.includes('trident/'))return"IE";if(t.includes('edge/'))return"Edge";if(Ae(t))return"Firefox";if(t.includes('silk/'))return"Silk";if(Ne(t))return"Blackberry";if(be(t))return"Webos";if(Se(t))return"Safari";if((t.includes('chrome/')||ke(t))&&!t.includes('edge/'))return"Chrome";if(Pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ae(e=(0,c.getUA)()){return/firefox\//i.test(e)}function Se(e=(0,c.getUA)()){const t=e.toLowerCase();return t.includes('safari/')&&!t.includes('chrome/')&&!t.includes('crios/')&&!t.includes('android')}function ke(e=(0,c.getUA)()){return/crios\//i.test(e)}function Re(e=(0,c.getUA)()){return/iemobile/i.test(e)}function Pe(e=(0,c.getUA)()){return/android/i.test(e)}function Ne(e=(0,c.getUA)()){return/blackberry/i.test(e)}function be(e=(0,c.getUA)()){return/webos/i.test(e)}function Oe(e=(0,c.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ce(e=(0,c.getUA)()){var t;return Oe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function De(e=(0,c.getUA)()){return Oe(e)||Pe(e)||be(e)||Ne(e)||/windows phone/i.test(e)||Re(e)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function Le(e,t=[]){let n;switch(e){case"Browser":n=we((0,c.getUA)());break;case"Worker":n=`${we((0,c.getUA)())}-${e}`;break;default:n=e}const i=t.length?t.join(','):'FirebaseCore-web';return`${n}/JsCore/${o.SDK_VERSION}/${i}`}
/**
   * @license
   * Copyright 2022 Google LLC
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
   */class Me{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
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
   */async function Ue(e,t={}){return V(e,"GET","/v2/passwordPolicy",F(e,t))}
/**
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
   */class Fe{constructor(e){var t,n,i,r;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,'ENFORCEMENT_STATE_UNSPECIFIED'===this.enforcementState&&(this.enforcementState='OFF'),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(''))&&void 0!==i?i:'',this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,r,s,a;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.meetsMaxPasswordLength)||void 0===n||n),o.isValid&&(o.isValid=null===(i=o.containsLowercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(r=o.containsUppercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>='a'&&n<='z',n>='A'&&n<='Z',n>='0'&&n<='9',this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class Ve{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new He(this),this.idTokenSubscription=new He(this),this.beforeStateQueue=new Me(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise((e=>this._resolvePersistenceManagerAvailable=e))}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ie(t)),this._initializationPromise=this.queue((async()=>{var n,i,r;if(!this._deleted&&(this.persistenceManager=await Ee.create(this,e),null===(n=this._resolvePersistenceManagerAvailable)||void 0===n||n.call(this),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Q(this,{idToken:e}),n=await ge._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn('FirebaseServerApp could not login user with provided authIdToken: ',e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,o._isFirebaseServerApp)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==s||!(null==a?void 0:a.user)||(i=a.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ce(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=b()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,o._isFirebaseServerApp)(this.app))return Promise.reject(y(this));const t=e?(0,c.getModularInstance)(e):null;return t&&A(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,o._isFirebaseServerApp)(this.app)?Promise.reject(y(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,o._isFirebaseServerApp)(this.app)?Promise.reject(y(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(Ie(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ue(this),t=new Fe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new c.ErrorFactory('auth','Firebase',e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:'apple.com',tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await pe(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ie(e)||this._popupRedirectResolver;A(t,this,"argument-error"),this.redirectPersistenceManager=await Ee.create(this,[Ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r='function'==typeof t?t:t.next.bind(t);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then((()=>{s||r(this.currentUser)})),'function'==typeof t){const r=e.addObserver(t,n,i);return()=>{s=!0,r()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Le(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if((0,o._isFirebaseServerApp)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&g(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function xe(e){return(0,c.getModularInstance)(e)}s.aM=Ve;class He{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,c.createSubscribe)((e=>this.observer=e))}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */let je={async loadJS(){throw new Error('Unable to load external scripts')},recaptchaV2Script:'',recaptchaEnterpriseScript:'',gapiScript:''};function qe(e){return je.loadJS(e)}function We(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */const ze=1e12;class Ge{constructor(e){this.auth=e,this.counter=ze,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Be(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||ze;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||ze;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||''}async execute(e){var t;const n=e||ze;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),''}}class Ke{constructor(){this.enterprise=new $e}ready(e){e()}execute(e,t){return Promise.resolve('token')}render(e,t){return''}}class $e{ready(e){e()}execute(e,t){return Promise.resolve('token')}render(e,t){return''}}class Be{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i='string'==typeof e?document.getElementById(e):e;A(i,"argument-error",{appName:t}),this.container=i,this.isVisible='invisible'!==this.params.size,this.isVisible?this.execute():this.container.addEventListener('click',this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener('click',this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Je(50);const{callback:e,'expired-callback':t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error('reCAPTCHA mock was already deleted!')}}function Je(e){const t=[],n='1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(62*Math.random())));return t.join('')}const Ye='NO_RECAPTCHA';class Xe{constructor(e){this.type="recaptcha-enterprise",this.auth=xe(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{J(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new $(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error('recaptcha Enterprise site key undefined'))})).catch((e=>{n(e)}))}))}function i(t,n,i){const r=window.grecaptcha;K(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Ye)}))})):i(Error('No reCAPTCHA enterprise script loaded.'))}if(this.auth.settings.appVerificationDisabledForTesting){return(new Ke).execute('siteKey',{action:'verify'})}return new Promise(((e,r)=>{n(this.auth).then((n=>{if(!t&&K(window.grecaptcha))i(n,e,r);else{let t=je.recaptchaEnterpriseScript;0!==t.length&&(t+=n),qe(t).then((()=>{i(n,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function Qe(e,t,n,i=!1,r=!1){const s=new Xe(e);let a;if(r)a=Ye;else try{a=await s.verify(n)}catch(e){a=await s.verify(n,!0)}const o=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if('phoneEnrollmentInfo'in o){const e=o.phoneEnrollmentInfo.phoneNumber,t=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if('phoneSignInInfo'in o){const e=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return i?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ze(e,t,n,i,r){var s,a;if("EMAIL_PASSWORD_PROVIDER"===r){if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Qe(e,t,n,"getOobCode"===n);return i(e,r)}return i(e,t).catch((async r=>{if("auth/missing-recaptcha-token"===r.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await Qe(e,t,n,"getOobCode"===n);return i(e,r)}return Promise.reject(r)}))}if("PHONE_PROVIDER"===r){if(null===(a=e._getRecaptchaConfig())||void 0===a?void 0:a.isProviderEnabled("PHONE_PROVIDER")){const r=await Qe(e,t,n);return i(e,r).catch((async r=>{var s;if("AUDIT"===(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===r.code||"auth/invalid-app-credential"===r.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const r=await Qe(e,t,n,!1,!0);return i(e,r)}return Promise.reject(r)}))}{const r=await Qe(e,t,n,!1,!0);return i(e,r)}}return Promise.reject(r+' provider is not supported.')}async function et(e){const t=xe(e),n=await J(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new $(n);if(null==t.tenantId?t._agentRecaptchaConfig=i:t._tenantRecaptchaConfigs[t.tenantId]=i,i.isAnyProviderEnabled()){new Xe(t).verify()}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function tt(e,t){const n=(0,o._getProvider)(e,'auth');if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,c.deepEqual)(i,null!=t?t:{}))return e;I(e,"already-initialized")}return n.initialize({options:t})}function nt(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ie);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}function it(e,t,n){const i=xe(e);A(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=rt(t),{host:a,port:o}=st(t),u=null===o?'':`:${o}`,d={url:`${s}//${a}${u}/`},l=Object.freeze({host:a,port:o,protocol:s.replace(':',''),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator)return A(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),void A((0,c.deepEqual)(d,i.config.emulator)&&(0,c.deepEqual)(l,i.emulatorConfig),i,"emulator-config-failed");i.config.emulator=d,i.emulatorConfig=l,i.settings.appVerificationDisabledForTesting=!0,(0,c.isCloudWorkstation)(a)?((0,c.pingServer)(`${s}//${a}${u}`),(0,c.updateEmulatorBanner)('Auth',!0)):r||ot()}function rt(e){const t=e.indexOf(':');return t<0?'':e.substr(0,t+1)}function st(e){const t=rt(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:'',port:null};const i=n[2].split('@').pop()||'',r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:at(i.substr(e.length+1))}}{const[e,t]=i.split(':');return{host:e,port:at(t)}}}function at(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ot(){function e(){const e=document.createElement('p'),t=e.style;e.innerText='Running in emulator mode. Do not use with production credentials.',t.position='fixed',t.width='100%',t.backgroundColor='#ffffff',t.border='.1em solid #000000',t.color='#b50000',t.bottom='0px',t.left='0px',t.margin='0px',t.zIndex='10000',t.textAlign='center',e.classList.add('firebase-emulator-warning'),document.body.appendChild(e)}'undefined'!=typeof console&&'function'==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),'undefined'!=typeof document&&('loading'===document.readyState?window.addEventListener('DOMContentLoaded',e):e())}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class ct{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return S('not implemented')}_getIdTokenResponse(e){return S('not implemented')}_linkToIdToken(e,t){return S('not implemented')}_getReauthenticationResolver(e){return S('not implemented')}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */async function ut(e,t){return V(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function dt(e,t){return V(e,"POST","/v1/accounts:update",t)}async function lt(e,t){return V(e,"POST","/v1/accounts:signUp",t)}async function ht(e,t){return V(e,"POST","/v1/accounts:update",F(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */async function pt(e,t){return H(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function mt(e,t){return V(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function ft(e,t){return mt(e,t)}async function gt(e,t){return mt(e,t)}async function vt(e,t){return mt(e,t)}async function It(e,t){return mt(e,t)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */async function _t(e,t){return H(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function Tt(e,t){return H(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */s.M=ct;class yt extends ct{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new yt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new yt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t='string'==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ze(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",pt,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return _t(e,{email:this._email,oobCode:this._password});default:I(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ze(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lt,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Tt(e,{idToken:t,email:this._email,oobCode:this._password});default:I(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */async function Et(e,t){return H(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */s.N=yt;class wt extends ct{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):I("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t='string'==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=(0,d.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new wt(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Et(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Et(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Et(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,c.querystring)(t)}return e}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */async function At(e,t){return V(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function St(e,t){return H(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function kt(e,t){const n=await H(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw z(e,"account-exists-with-different-credential",n);return n}s.Q=wt;const Rt={USER_NOT_FOUND:"user-not-found"};async function Pt(e,t){return H(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,Object.assign(Object.assign({},t),{operation:'REAUTH'})),Rt)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class Nt extends ct{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Nt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Nt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return St(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return kt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Pt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){'string'==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Nt({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function bt(e){switch(e){case'recoverEmail':return"RECOVER_EMAIL";case'resetPassword':return"PASSWORD_RESET";case'signIn':return"EMAIL_SIGNIN";case'verifyEmail':return"VERIFY_EMAIL";case'verifyAndChangeEmail':return"VERIFY_AND_CHANGE_EMAIL";case'revertSecondFactorAddition':return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ot(e){const t=(0,c.querystringDecode)((0,c.extractQuerystring)(e)).link,n=t?(0,c.querystringDecode)((0,c.extractQuerystring)(t)).deep_link_id:null,i=(0,c.querystringDecode)((0,c.extractQuerystring)(e)).deep_link_id;return(i?(0,c.querystringDecode)((0,c.extractQuerystring)(i)).link:null)||i||n||t||e}s.U=Nt;class Ct{constructor(e){var t,n,i,r,s,a;const o=(0,c.querystringDecode)((0,c.extractQuerystring)(e)),u=null!==(t=o.apiKey)&&void 0!==t?t:null,d=null!==(n=o.oobCode)&&void 0!==n?n:null,l=bt(null!==(i=o.mode)&&void 0!==i?i:null);A(u&&d&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=d,this.continueUrl=null!==(r=o.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=o.lang)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=Ot(e);try{return new Ct(t)}catch(e){return null}}}s.aj=Ct;class Dt{constructor(){this.providerId=Dt.PROVIDER_ID}static credential(e,t){return yt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ct.parseLink(t);return A(n,"argument-error"),yt._fromEmailAndCode(e,n.code,n.tenantId)}}s.W=Dt,Dt.PROVIDER_ID="password",Dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
class Lt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
   * @license
   * Copyright 2019 Google LLC
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
   */class Mt extends Lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ut extends Mt{static credentialFromJSON(e){const t='string'==typeof e?JSON.parse(e):e;return A('providerId'in t&&'signInMethod'in t,"argument-error"),wt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return A(e.idToken||e.accessToken,"argument-error"),wt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ut.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ut.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:a}=e;if(!(n||i||t||r))return null;if(!a)return null;try{return new Ut(a)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:r})}catch(e){return null}}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */s._=Ut;class Ft extends Mt{constructor(){super("facebook.com")}static credential(e){return wt._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!('oauthAccessToken'in e))return null;if(!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch(e){return null}}}s.X=Ft,Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ft.PROVIDER_ID="facebook.com";
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
class Vt extends Mt{constructor(){super("google.com"),this.addScope('profile')}static credential(e,t){return wt._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Vt.credential(t,n)}catch(e){return null}}}s.Y=Vt,Vt.GOOGLE_SIGN_IN_METHOD="google.com",Vt.PROVIDER_ID="google.com";
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
class xt extends Mt{constructor(){super("github.com")}static credential(e){return wt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!('oauthAccessToken'in e))return null;if(!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch(e){return null}}}s.Z=xt,xt.GITHUB_SIGN_IN_METHOD="github.com",xt.PROVIDER_ID="github.com";class Ht extends ct{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return Et(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Et(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Et(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t='string'==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:r}=t;return n&&i&&r&&n===i?new Ht(n,r):null}static _create(e,t){return new Ht(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */s.aR=Ht;class jt extends Lt{constructor(e){A(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return jt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return jt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ht.fromJSON(e);return A(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Ht._create(n,t)}catch(e){return null}}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */s.$=jt;class qt extends Mt{constructor(){super("twitter.com")}static credential(e,t){return wt._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return qt.credential(t,n)}catch(e){return null}}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
async function Wt(e,t){return H(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */s.a0=qt,qt.TWITTER_SIGN_IN_METHOD="twitter.com",qt.PROVIDER_ID="twitter.com";class zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await ge._fromIdTokenResponse(e,n,i),s=Gt(n);return new zt({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Gt(n);return new zt({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Gt(e){return e.providerId?e.providerId:'phoneNumber'in e?"phone":null}class Kt extends c.FirebaseError{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Kt.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Kt(e,t,n,i)}}function $t(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Kt._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function Bt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}async function Jt(e,t,n=!1){const i=await re(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return zt._forOperation(e,"link",i)}async function Yt(e,t,n){await ce(t);const i=!1===e?"provider-already-linked":"no-such-provider";A(Bt(t.providerData).has(n)===e,t.auth,i)}
/**
   * @license
   * Copyright 2019 Google LLC
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
   */async function Xt(e,t,n=!1){const{auth:i}=e;if((0,o._isFirebaseServerApp)(i.app))return Promise.reject(y(i));const r="reauthenticate";try{const s=await re(e,$t(i,r,t,e),n);A(s.idToken,i,"internal-error");const a=ne(s.idToken);A(a,i,"internal-error");const{sub:o}=a;return A(e.uid===o,i,"user-mismatch"),zt._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&I(i,"user-mismatch"),e}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */async function Qt(e,t,n=!1){if((0,o._isFirebaseServerApp)(e.app))return Promise.reject(y(e));const i="signIn",r=await $t(e,i,t),s=await zt._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Zt(e,t){return Qt(xe(e),t)}async function en(e,t){const n=(0,c.getModularInstance)(e);return await Yt(!1,n,t.providerId),Jt(n,t)}async function tn(e,t){return Xt((0,c.getModularInstance)(e),t)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */async function nn(e,t){return H(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}class rn{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return'phoneInfo'in t?sn._fromServerResponse(e,t):'totpInfo'in t?an._fromServerResponse(e,t):I(e,"internal-error")}}class sn extends rn{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new sn(t)}}class an extends rn{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new an(t)}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function on(e,t,n){var i;A((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),A(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),A(void 0===n.linkDomain||n.linkDomain.length>0,e,"invalid-hosting-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.linkDomain=n.linkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(A(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(A(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */async function cn(e){const t=xe(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function un(e,t){const n=(0,c.getModularInstance)(e),i=await ut(n,{oobCode:t}),r=i.requestType;switch(A(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":A(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":A(i.mfaInfo,n,"internal-error");default:A(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=rn._fromServerResponse(xe(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function dn(e,t){return V(e,"POST","/v1/accounts:createAuthUri",F(e,t))}async function ln(e,t){return V(e,"POST","/v1/accounts:update",t)}async function hn(e,t,n){const{auth:i}=e,r={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(r.email=t),n&&(r.password=n);const s=await re(e,dt(i,r));await e._updateTokensIfNecessary(s,!0)}
/**
   * @license
   * Copyright 2019 Google LLC
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
   */function pn(e){var t,n;if(!e)return null;const{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null==e?void 0:e.idToken)){const i=null===(n=null===(t=ne(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(i){return new mn(s,"anonymous"!==i&&"custom"!==i?i:null)}}if(!i)return null;switch(i){case"facebook.com":return new gn(s,r);case"github.com":return new vn(s,r);case"google.com":return new In(s,r);case"twitter.com":return new _n(s,r,e.screenName||null);case"custom":case"anonymous":return new mn(s,null);default:return new mn(s,i,r)}}class mn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class fn extends mn{constructor(e,t,n,i){super(e,t,n),this.username=i}}class gn extends mn{constructor(e,t){super(e,"facebook.com",t)}}class vn extends fn{constructor(e,t){super(e,"github.com",t,'string'==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class In extends mn{constructor(e,t){super(e,"google.com",t)}}class _n extends fn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Tn(e,t,n,i){return(0,c.getModularInstance)(e).onIdTokenChanged(t,n,i)}function yn(e,t,n){return(0,c.getModularInstance)(e).beforeAuthStateChanged(t,n)}class En{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new En("enroll",e,t)}static _fromMfaPendingCredential(e){return new En("signin",e)}toJSON(){const e="enroll"===this.type?'idToken':'pendingCredential';return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return En._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return En._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class wn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=xe(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map((e=>rn._fromServerResponse(n,e)));A(i.mfaPendingCredential,n,"internal-error");const s=En._fromMfaPendingCredential(i.mfaPendingCredential);return new wn(s,r,(async e=>{const r=await e._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const a=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await zt._fromIdTokenResponse(n,t.operationType,a);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return A(t.user,n,"internal-error"),zt._forOperation(t.user,t.operationType,a);default:I(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function An(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Sn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function kn(e,t){return V(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}class Rn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>rn._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Rn(e)}async getSession(){return En._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,i=await this.getSession(),r=await re(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t='string'==typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await re(this.user,(i=this.user.auth,r={idToken:n,mfaEnrollmentId:t},V(i,"POST","/v2/accounts/mfaEnrollment:withdraw",F(i,r))));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}var i,r}}const Pn=new WeakMap;const Nn='__sak';
/**
   * @license
   * Copyright 2019 Google LLC
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
   */class bn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Nn,'1'),this.storage.removeItem(Nn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class On extends bn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=De(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);(0,c.isIE)()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent('storage',{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener('storage',this.boundEventHandler)}detachListener(){window.removeEventListener('storage',this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}On.type='LOCAL';const Cn=s.b=On;
/**
   * @license
   * Copyright 2025 Google LLC
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
   */function Dn(e){var t,n;const i=e.replace(/[\\^$.*+?()[\]{}|]/g,'\\$&'),r=RegExp(`${i}=([^;]+)`);return null!==(n=null===(t=document.cookie.match(r))||void 0===t?void 0:t[1])&&void 0!==n?n:null}function Ln(e){return`${'http:'===window.location.protocol?'__dev_':'__HOST-'}FIREBASE_${e.split(':')[3]}`}class Mn{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set('finalTarget',e),t}async _isAvailable(){var e;return!('boolean'==typeof isSecureContext&&!isSecureContext)&&('undefined'!=typeof navigator&&'undefined'!=typeof document&&(null===(e=navigator.cookieEnabled)||void 0===e||e))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=Ln(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return null==e?void 0:e.value}return Dn(t)}async _remove(e){if(!this._isAvailable())return;if(!await this._get(e))return;const t=Ln(e);document.cookie=`${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:'DELETE'}).catch((()=>{}))}_addListener(e,t){if(!this._isAvailable())return;const n=Ln(e);if(window.cookieStore){const e=e=>{const i=e.changed.find((e=>e.name===n));i&&t(i.value);e.deleted.find((e=>e.name===n))&&t(null)},i=()=>window.cookieStore.removeEventListener('change',e);return this.listenerUnsubscribes.set(t,i),window.cookieStore.addEventListener('change',e)}let i=Dn(n);const r=setInterval((()=>{const e=Dn(n);e!==i&&(t(e),i=e)}),1e3);this.listenerUnsubscribes.set(t,(()=>clearInterval(r)))}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}Mn.type='COOKIE';s.a=Mn;
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class Un extends bn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Un.type='SESSION';const Fn=s.c=Un;
/**
   * @license
   * Copyright 2019 Google LLC
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
   */function Vn(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
   * @license
   * Copyright 2019 Google LLC
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
   */class xn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new xn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(s).map((async e=>e(t.origin,r))),o=await Vn(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener('message',this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener('message',this.boundEventHandler)}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
function Hn(e="",t=10){let n='';for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
   * @license
   * Copyright 2019 Google LLC
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
   */xn.receivers=[];class jn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener('message',e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i='undefined'!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((a,o)=>{const c=Hn('',20);i.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),a(t.data.response);break;default:clearTimeout(u),clearTimeout(r),o(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener('message',s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function qn(){return window}function Wn(e){qn().location.href=e}
/**
   * @license
   * Copyright 2020 Google LLC.
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
   */function zn(){return void 0!==qn().WorkerGlobalScope&&'function'==typeof qn().importScripts}async function Gn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}
/**
   * @license
   * Copyright 2019 Google LLC
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
   */
const Kn='firebaseLocalStorageDb',$n='firebaseLocalStorage',Bn='fbase_key';class Jn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener('success',(()=>{e(this.request.result)})),this.request.addEventListener('error',(()=>{t(this.request.error)}))}))}}function Yn(e,t){return e.transaction([$n],t?'readwrite':'readonly').objectStore($n)}function Xn(){const e=indexedDB.deleteDatabase(Kn);return new Jn(e).toPromise()}function Qn(){const e=indexedDB.open(Kn,1);return new Promise(((t,n)=>{e.addEventListener('error',(()=>{n(e.error)})),e.addEventListener('upgradeneeded',(()=>{const t=e.result;try{t.createObjectStore($n,{keyPath:Bn})}catch(e){n(e)}})),e.addEventListener('success',(async()=>{const n=e.result;n.objectStoreNames.contains($n)?t(n):(n.close(),await Xn(),t(await Qn()))}))}))}async function Zn(e,t,n){const i=Yn(e,!0).put({[Bn]:t,value:n});return new Jn(i).toPromise()}async function ei(e,t){const n=Yn(e,!1).get(t),i=await new Jn(n).toPromise();return void 0===i?null:i.value}function ti(e,t){const n=Yn(e,!0).delete(t);return new Jn(n).toPromise()}class ni{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Qn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xn._getInstance(zn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Gn(),!this.activeServiceWorker)return;this.sender=new jn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qn();return await Zn(e,Nn,'1'),await ti(e,Nn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Zn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>ei(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ti(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Yn(e,!1).getAll();return new Jn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ni.type='LOCAL';const ii=s.i=ni;
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function ri(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function si(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}function ai(e,t){return V(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */const oi=We('rcb'),ci=new O(3e4,6e4);class ui{constructor(){var e;this.hostLanguage='',this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=qn().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return A(di(t),e,"argument-error"),this.shouldResolveImmediately(t)&&G(qn().grecaptcha)?Promise.resolve(qn().grecaptcha):new Promise(((n,i)=>{const r=qn().setTimeout((()=>{i(_(e,"network-request-failed"))}),ci.get());qn()[oi]=()=>{qn().clearTimeout(r),delete qn()[oi];const s=qn().grecaptcha;if(!s||!G(s))return void i(_(e,"internal-error"));const a=s.render;s.render=(e,t)=>{const n=a(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};qe(`${je.recaptchaV2Script}?${(0,c.querystring)({onload:oi,render:'explicit',hl:t})}`).catch((()=>{clearTimeout(r),i(_(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=qn().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function di(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class li{async load(e){return new Ge(e)}clearedOneInstance(){}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */const hi='recaptcha',pi={theme:'light',type:'image'};function mi(){let e=null;return new Promise((t=>{'complete'!==document.readyState?(e=()=>t(),window.addEventListener('load',e)):t()})).catch((t=>{throw e&&window.removeEventListener('load',e),t}))}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */s.R=class{constructor(e,t,n=Object.assign({},pi)){this.parameters=n,this.type=hi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=xe(e),this.isInvisible='invisible'===this.parameters.size,A('undefined'!=typeof document,this.auth,"operation-not-supported-in-this-environment");const i='string'==typeof t?document.getElementById(t):t;A(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new li:new ui,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){A(!this.parameters.sitekey,this.auth,"argument-error"),A(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),A('undefined'!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),'function'==typeof e)e(t);else if('string'==typeof e){const n=qn()[e];'function'==typeof n&&n(t)}}}assertNotDestroyed(){A(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement('div');e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){A(P()&&!zn(),this.auth,"internal-error"),await mi(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await B(this.auth);A(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return A(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};class fi{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Nt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function gi(e,t,n){var i;if(!e._getRecaptchaConfig())try{await et(e)}catch(e){console.log('Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.')}try{let r;if(r='string'==typeof t?{phoneNumber:t}:t,'session'in r){const t=r.session;if('phoneNumber'in r){A("enroll"===t.type,e,"internal-error");const i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=Ze(e,i,"mfaSmsEnrollment",(async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===Ye){A((null==n?void 0:n.type)===hi,e,"argument-error");return An(e,await vi(e,t,n))}return An(e,t)}),"PHONE_PROVIDER");return(await s.catch((e=>Promise.reject(e)))).phoneSessionInfo.sessionInfo}{A("signin"===t.type,e,"internal-error");const s=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;A(s,e,"missing-multi-factor-info");const a={mfaPendingCredential:t.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=Ze(e,a,"mfaSmsSignIn",(async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===Ye){A((null==n?void 0:n.type)===hi,e,"argument-error");return ri(e,await vi(e,t,n))}return ri(e,t)}),"PHONE_PROVIDER");return(await o.catch((e=>Promise.reject(e)))).phoneResponseInfo.sessionInfo}}{const t={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=Ze(e,t,"sendVerificationCode",(async(e,t)=>{if(t.captchaResponse===Ye){A((null==n?void 0:n.type)===hi,e,"argument-error");return At(e,await vi(e,t,n))}return At(e,t)}),"PHONE_PROVIDER");return(await i.catch((e=>Promise.reject(e)))).sessionInfo}}finally{null==n||n._reset()}}async function vi(e,t,n){A(n.type===hi,e,"argument-error");const i=await n.verify();A('string'==typeof i,e,"argument-error");const r=Object.assign({},t);if('phoneEnrollmentInfo'in r){const e=r.phoneEnrollmentInfo.phoneNumber,t=r.phoneEnrollmentInfo.captchaResponse,n=r.phoneEnrollmentInfo.clientType,s=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:i,captchaResponse:t,clientType:n,recaptchaVersion:s}}),r}if('phoneSignInInfo'in r){const e=r.phoneSignInInfo.captchaResponse,t=r.phoneSignInInfo.clientType,n=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:e,clientType:t,recaptchaVersion:n}}),r}return Object.assign(r,{recaptchaToken:i}),r}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class Ii{constructor(e){this.providerId=Ii.PROVIDER_ID,this.auth=xe(e)}verifyPhoneNumber(e,t){return gi(this.auth,e,(0,c.getModularInstance)(t))}static credential(e,t){return Nt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ii.credentialFromTaggedObject(t)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Nt._fromTokenResponse(t,n):null}}
/**
   * @license
   * Copyright 2021 Google LLC
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
   */
function _i(e,t){return t?Ie(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
   * @license
   * Copyright 2019 Google LLC
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
   */s.P=Ii,Ii.PROVIDER_ID="phone",Ii.PHONE_SIGN_IN_METHOD="phone";class Ti extends ct{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Et(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Et(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Et(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yi(e){return Qt(e.auth,new Ti(e),e.bypassAuthState)}function Ei(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),Xt(n,new Ti(e),e.bypassAuthState)}async function wi(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),Jt(n,new Ti(e),e.bypassAuthState)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class Ai{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yi;case"linkViaPopup":case"linkViaRedirect":return wi;case"reauthViaPopup":case"reauthViaRedirect":return Ei;default:I(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,'Pending promise was never set'),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,'Pending promise was never set'),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */const Si=new O(2e3,1e4);class ki extends Ai{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,ki.currentPopupAction&&ki.currentPopupAction.cancel(),ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,'Popup operations only handle one event');const e=Hn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(_(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(_(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Si.get())};e()}}ki.currentPopupAction=null;
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
const Ri='pendingRedirect',Pi=new Map;class Ni extends Ai{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Pi.get(this.auth._key());if(!e){try{const t=await bi(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Pi.set(this.auth._key(),e)}return this.bypassAuthState||Pi.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function bi(e,t){const n=Li(t),i=Di(e);if(!await i._isAvailable())return!1;const r='true'===await i._get(n);return await i._remove(n),r}async function Oi(e,t){return Di(e)._set(Li(t),'true')}function Ci(e,t){Pi.set(e._key(),t)}function Di(e){return Ie(e._redirectPersistence)}function Li(e){return ye(Ri,e.config.apiKey,e.name)}async function Mi(e,t,n){if((0,o._isFirebaseServerApp)(e.app))return Promise.reject(y(e));const i=xe(e);E(e,t,Lt),await i._initializationPromise;const r=_i(i,n);return await Oi(r,i),r._openRedirect(i,t,"signInViaRedirect")}async function Ui(e,t,n){const i=(0,c.getModularInstance)(e);if(E(i.auth,t,Lt),(0,o._isFirebaseServerApp)(i.auth.app))return Promise.reject(y(i.auth));await i.auth._initializationPromise;const r=_i(i.auth,n);await Oi(r,i.auth);const s=await xi(i);return r._openRedirect(i.auth,t,"reauthViaRedirect",s)}async function Fi(e,t,n){const i=(0,c.getModularInstance)(e);E(i.auth,t,Lt),await i.auth._initializationPromise;const r=_i(i.auth,n);await Yt(!1,i,t.providerId),await Oi(r,i.auth);const s=await xi(i);return r._openRedirect(i.auth,t,"linkViaRedirect",s)}async function Vi(e,t,n=!1){if((0,o._isFirebaseServerApp)(e.app))return Promise.reject(y(e));const i=xe(e),r=_i(i,t),s=new Ni(i,r,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}async function xi(e){const t=Hn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */class Hi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Wi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!qi(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split('auth/')[1])||"internal-error";t.onError(_(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ji(e))}saveEventToCache(e){this.cachedEventUids.add(ji(e)),this.lastProcessedEventTime=Date.now()}}function ji(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join('-')}function qi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}function Wi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qi(e);default:return!1}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */async function zi(e,t={}){return V(e,"GET","/v1/projects",t)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */s.aE=Hi;const Gi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ki=/^https?/;async function $i(e){if(e.config.emulator)return;const{authorizedDomains:t}=await zi(e);for(const e of t)try{if(Bi(e))return}catch(e){}I(e,"unauthorized-domain")}function Bi(e){const t=R(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith('chrome-extension://')){const r=new URL(e);return''===r.hostname&&''===i?'chrome-extension:'===n&&e.replace('chrome-extension://','')===t.replace('chrome-extension://',''):'chrome-extension:'===n&&r.hostname===i}if(!Ki.test(n))return!1;if(Gi.test(e))return i===e;const r=e.replace(/\./g,'\\.');return new RegExp('^(.+\\.'+r+'|'+r+')$','i').test(i)}
/**
   * @license
   * Copyright 2020 Google LLC.
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
   */const Ji=new O(3e4,6e4);function Yi(){const e=qn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Xi(e){return new Promise(((t,n)=>{var i,r,s;function a(){Yi(),gapi.load('gapi.iframes',{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Yi(),n(_(e,"network-request-failed"))},timeout:Ji.get()})}if(null===(r=null===(i=qn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=qn().gapi)||void 0===s?void 0:s.load)){const t=We('iframefcb');return qn()[t]=()=>{gapi.load?a():n(_(e,"network-request-failed"))},qe(`${je.gapiScript}?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw Qi=null,e}))}let Qi=null;function Zi(e){return Qi=Qi||Xi(e),Qi}
/**
   * @license
   * Copyright 2020 Google LLC.
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
   */const er=new O(5e3,15e3),tr={style:{position:'absolute',top:'-100px',width:'1px',height:'1px'},'aria-hidden':'true',tabindex:'-1'},nr=new Map([["identitytoolkit.googleapis.com",'p'],['staging-identitytoolkit.sandbox.googleapis.com','s'],['test-identitytoolkit.sandbox.googleapis.com','t']]);function ir(e){const t=e.config;A(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?C(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:o.SDK_VERSION},r=nr.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(',')),`${n}?${(0,c.querystring)(i).slice(1)}`}async function rr(e){const t=await Zi(e),n=qn().gapi;return A(n,e,"internal-error"),t.open({where:document.body,url:ir(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tr,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=_(e,"network-request-failed"),s=qn().setTimeout((()=>{i(r)}),er.get());function a(){qn().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{i(r)}))}))))}
/**
   * @license
   * Copyright 2020 Google LLC.
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
   */const sr={location:'yes',resizable:'yes',statusbar:'yes',toolbar:'no'};class ar{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function or(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o='';const u=Object.assign(Object.assign({},sr),{width:i.toString(),height:r.toString(),top:s,left:a}),d=(0,c.getUA)().toLowerCase();n&&(o=ke(d)?"_blank":n),Ae(d)&&(t=t||"http://localhost",u.scrollbars='yes');const l=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),'');if(Ce(d)&&'_self'!==o)return cr(t||'',o),new ar(null);const h=window.open(t||'',o,l);A(h,e,"popup-blocked");try{h.focus()}catch(e){}return new ar(h)}function cr(e,t){const n=document.createElement('a');n.href=e,n.target=t;const i=document.createEvent('MouseEvent');i.initMouseEvent('click',!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
   * @license
   * Copyright 2021 Google LLC
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
   */s.aP=ar;const ur='__/auth/handler',dr='emulator/auth/handler',lr=encodeURIComponent('fac');async function hr(e,t,n,i,r,s){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o.SDK_VERSION,eventId:r};if(t instanceof Lt){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||'',(0,c.isEmpty)(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof Mt){const e=t.getScopes().filter((e=>''!==e));e.length>0&&(a.scopes=e.join(','))}e.tenantId&&(a.tid=e.tenantId);const u=a;for(const e of Object.keys(u))void 0===u[e]&&delete u[e];const d=await e._getAppCheckToken(),l=d?`#${lr}=${encodeURIComponent(d)}`:'';return`${pr(e)}?${(0,c.querystring)(u).slice(1)}${l}`}function pr({config:e}){return e.emulator?C(e,dr):`https://${e.authDomain}/${ur}`}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */const mr='webStorageSupport';const fr=s.m=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fn,this._completeRedirectFn=Vi,this._overrideRedirectResult=Ci}async _openPopup(e,t,n,i){var r;k(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,'_initialize() not called before _openPopup()');return or(e,await hr(e,t,n,R(),i),Hn())}async _openRedirect(e,t,n,i){await this._originValidation(e);return Wn(await hr(e,t,n,R(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,'If manager is not set, promise should be'),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await rr(e),n=new Hi(e);return t.register('authEvent',(t=>{A(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mr,{type:mr},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[mr];void 0!==r&&t(!!r),I(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$i(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return De()||Se()||Oe()}};class gr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return S('unexpected MultiFactorSessionType')}}}class vr extends gr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new vr(e)}_finalizeEnroll(e,t,n){return Sn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return si(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ir{constructor(){}static assertion(e){return vr._fromCredential(e)}}s.n=Ir,Ir.FACTOR_ID='phone';class _r{static assertionForEnrollment(e,t){return Tr._fromSecret(e,t)}static assertionForSignIn(e,t){return Tr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;A(void 0!==(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const i=await(r=n.user.auth,s={idToken:n.credential,totpEnrollmentInfo:{}},V(r,"POST","/v2/accounts/mfaEnrollment:start",F(r,s)));var r,s;return yr._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}}s.T=_r,_r.FACTOR_ID="totp";class Tr extends gr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Tr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Tr(t,e)}async _finalizeEnroll(e,t,n){return A(void 0!==this.secret,e,"argument-error"),kn(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){A(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return ai(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class yr{constructor(e,t,n,i,r,s,a){this.sessionInfo=s,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new yr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let i=!1;return(Er(e)||Er(t))&&(i=!0),i&&(Er(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||'unknownuser'),Er(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Er(e){return void 0===e||0===(null==e?void 0:e.length)}s.o=yr;var wr="@firebase/auth",Ar="1.10.6";
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
class Sr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */function kr(e){switch(e){case"Node":return'node';case"ReactNative":return'rn';case"Worker":return'webworker';case"Cordova":return'cordova';case"WebExtension":return'web-extension';default:return}}
/**
   * @license
   * Copyright 2021 Google LLC
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
   */
const Rr=(0,c.getExperimentalSetting)('authIdTokenMaxAge')||300;let Pr=null;const Nr=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Rr)return;const r=null==n?void 0:n.token;Pr!==r&&(Pr=r,await fetch(e,{method:r?'POST':'DELETE',headers:r?{Authorization:`Bearer ${r}`}:{}}))};var br;je={loadJS:e=>new Promise(((t,n)=>{const i=document.createElement('script');var r,s;i.setAttribute('src',e),i.onload=t,i.onerror=e=>{const t=_("internal-error");t.customData=e,n(t)},i.type='text/javascript',i.charset='UTF-8',(null!==(s=null===(r=document.getElementsByTagName('head'))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)})),gapiScript:'https://apis.google.com/js/api.js',recaptchaV2Script:'https://www.google.com/recaptcha/api.js',recaptchaEnterpriseScript:'https://www.google.com/recaptcha/enterprise.js?render='},br="Browser",(0,o._registerComponent)(new l.Component("auth",((e,{options:t})=>{const n=e.getProvider('app').getImmediate(),i=e.getProvider('heartbeat'),r=e.getProvider('app-check-internal'),{apiKey:s,authDomain:a}=n.options;A(s&&!s.includes(':'),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:a,clientPlatform:br,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Le(br)},c=new Ve(n,i,r,o);return nt(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,o._registerComponent)(new l.Component("auth-internal",(e=>(e=>new Sr(e))(xe(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.registerVersion)(wr,Ar,kr(br)),(0,o.registerVersion)(wr,Ar,'esm2017')}),3358,[3359,3361,3363,2894,3360]);
__d((function(g,r,_i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),Object.defineProperty(_e,"FirebaseError",{enumerable:!0,get:function(){return n.FirebaseError}}),_e._DEFAULT_ENTRY_NAME=_e.SDK_VERSION=void 0,_e._addComponent=V,_e._addOrOverwriteComponent=function(e,t){e.container.addOrOverwriteComponent(t)},_e._apps=void 0,_e._clearComponents=function(){J.clear()}
/**
   * @license
   * Copyright 2019 Google LLC
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
   */,_e._components=void 0,_e._getProvider=K,_e._isFirebaseApp=q,_e._isFirebaseServerApp=function(e){if(null==e)return!1;return void 0!==e.settings},_e._registerComponent=W,_e._removeServiceInstance=function(e,t,n=z){K(e,t).clearInstance(n)},_e._serverApps=void 0,_e.deleteApp=te,_e.getApp=function(e=z){const t=L.get(e);if(!t&&e===z&&(0,n.getDefaultAppConfig)())return ee();if(!t)throw G.create("no-app",{appName:e});return t},_e.getApps=function(){return Array.from(L.values())},_e.initializeApp=ee,_e.initializeServerApp=function(t,i){if((0,n.isBrowser)()&&!(0,n.isWebWorker)())throw G.create("invalid-server-app-environment");void 0===i.automaticDataCollectionEnabled&&(i.automaticDataCollectionEnabled=!0);let s;s=q(t)?t.options:t;const o=Object.assign(Object.assign({},i),s);void 0!==o.releaseOnDeref&&delete o.releaseOnDeref;if(void 0!==i.releaseOnDeref&&'undefined'==typeof FinalizationRegistry)throw G.create("finalization-registry-not-supported",{});const c=''+(p=JSON.stringify(o),[...p].reduce(((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0),0)),l=U.get(c);var p;if(l)return l.incRefCount(i.releaseOnDeref),l;const h=new e.ComponentContainer(c);for(const e of J.values())h.addComponent(e);const f=new Z(s,i,c,h);return U.set(c,f),f},_e.onLog=function(e,n){if(null!==e&&'function'!=typeof e)throw G.create("invalid-log-argument");(0,t.setUserLogHandler)(e,n)},_e.registerVersion=ae,_e.setLogLevel=function(e){(0,t.setLogLevel)(e)}
/**
   * @license
   * Copyright 2021 Google LLC
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
   */;var e=r(d[0]),t=r(d[1]),n=r(d[2]),i=r(d[3]);
/**
   * @license
   * Copyright 2019 Google LLC
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
   */
class s{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(o(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(' ')}}function o(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}const c="@firebase/app",l="0.13.0",p=new t.Logger('@firebase/app'),h="@firebase/app-compat",f="@firebase/analytics-compat",u="@firebase/analytics",b="@firebase/app-check-compat",v="@firebase/app-check",_="@firebase/auth",C="@firebase/auth-compat",w="@firebase/database",D="@firebase/data-connect",y="@firebase/database-compat",E="@firebase/functions",S="@firebase/functions-compat",O="@firebase/installations",A="@firebase/installations-compat",I="@firebase/messaging",k="@firebase/messaging-compat",F="@firebase/performance",N="@firebase/performance-compat",$="@firebase/remote-config",P="@firebase/remote-config-compat",R="@firebase/storage",x="@firebase/storage-compat",j="@firebase/firestore",T="@firebase/ai",B="@firebase/firestore-compat",M="firebase",z=_e._DEFAULT_ENTRY_NAME='[DEFAULT]',H={[c]:'fire-core',[h]:'fire-core-compat',[u]:'fire-analytics',[f]:'fire-analytics-compat',[v]:'fire-app-check',[b]:'fire-app-check-compat',[_]:'fire-auth',[C]:'fire-auth-compat',[w]:'fire-rtdb',[D]:'fire-data-connect',[y]:'fire-rtdb-compat',[E]:'fire-fn',[S]:'fire-fn-compat',[O]:'fire-iid',[A]:'fire-iid-compat',[I]:'fire-fcm',[k]:'fire-fcm-compat',[F]:'fire-perf',[N]:'fire-perf-compat',[$]:'fire-rc',[P]:'fire-rc-compat',[R]:'fire-gcs',[x]:'fire-gcs-compat',[j]:'fire-fst',[B]:'fire-fst-compat',[T]:'fire-vertex','fire-js':'fire-js',[M]:'fire-js-all'},L=_e._apps=new Map,U=_e._serverApps=new Map,J=_e._components=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){p.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function W(e){const t=e.name;if(J.has(t))return p.debug(`There were multiple attempts to register component ${t}.`),!1;J.set(t,e);for(const t of L.values())V(t,e);for(const t of U.values())V(t,e);return!0}function K(e,t){const n=e.container.getProvider('heartbeat').getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function q(e){return void 0!==e.options}const Y={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":'Firebase Server App has been deleted',"no-options":'Need to provide options, when not being deployed to hosting via source.',"invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":'First argument to `onLog` must be null or a function.',"idb-open":'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',"idb-get":'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',"idb-set":'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',"idb-delete":'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',"finalization-registry-not-supported":'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',"invalid-server-app-environment":'FirebaseServerApp is not for use in browser environments.'},G=new n.ErrorFactory('app','Firebase',Y);
/**
   * @license
   * Copyright 2019 Google LLC
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
   */
class Q{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new e.Component('app',(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
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
   */function X(e,t){const i=(0,n.base64Decode)(e.split('.')[1]);if(null===i)return void console.error(`FirebaseServerApp ${t} is invalid: second part could not be parsed.`);if(void 0===JSON.parse(i).exp)return void console.error(`FirebaseServerApp ${t} is invalid: expiration claim could not be parsed`);1e3*JSON.parse(i).exp-(new Date).getTime()<=0&&console.error(`FirebaseServerApp ${t} is invalid: the token has expired.`)}class Z extends Q{constructor(e,t,n,i){const s=void 0===t.automaticDataCollectionEnabled||t.automaticDataCollectionEnabled,o={name:n,automaticDataCollectionEnabled:s};if(void 0!==e.apiKey)super(e,o,i);else{super(e.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._serverConfig.authIdToken&&X(this._serverConfig.authIdToken,'authIdToken'),this._serverConfig.appCheckToken&&X(this._serverConfig.appCheckToken,'appCheckToken'),this._finalizationRegistry=null,'undefined'!=typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry((()=>{this.automaticCleanup()}))),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,ae(c,l,'serverapp')}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){te(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw G.create("server-app-deleted")}}
/**
   * @license
   * Copyright 2019 Google LLC
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
   */_e.SDK_VERSION="11.8.0";function ee(t,i={}){let s=t;if('object'!=typeof i){i={name:i}}const o=Object.assign({name:z,automaticDataCollectionEnabled:!0},i),c=o.name;if('string'!=typeof c||!c)throw G.create("bad-app-name",{appName:String(c)});if(s||(s=(0,n.getDefaultAppConfig)()),!s)throw G.create("no-options");const l=L.get(c);if(l){if((0,n.deepEqual)(s,l.options)&&(0,n.deepEqual)(o,l.config))return l;throw G.create("duplicate-app",{appName:c})}const p=new e.ComponentContainer(c);for(const e of J.values())p.addComponent(e);const h=new Q(s,o,p);return L.set(c,h),h}async function te(e){let t=!1;const n=e.name;if(L.has(n))t=!0,L.delete(n);else if(U.has(n)){e.decRefCount()<=0&&(U.delete(n),t=!0)}t&&(await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ae(t,n,i){var s;let o=null!==(s=H[t])&&void 0!==s?s:t;i&&(o+=`-${i}`);const c=o.match(/\s|\//),l=n.match(/\s|\//);if(c||l){const e=[`Unable to register library "${o}" with version "${n}":`];return c&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&l&&e.push('and'),l&&e.push(`version name "${n}" contains illegal characters (whitespace or "/")`),void p.warn(e.join(' '))}W(new e.Component(`${o}-version`,(()=>({library:o,version:n})),"VERSION"))}const re='firebase-heartbeat-store';let ne=null;function ie(){return ne||(ne=(0,i.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(re)}catch(e){console.warn(e)}}}).catch((e=>{throw G.create("idb-open",{originalErrorMessage:e.message})}))),ne}async function se(e){try{const t=(await ie()).transaction(re),n=await t.objectStore(re).get(ce(e));return await t.done,n}catch(e){if(e instanceof n.FirebaseError)p.warn(e.message);else{const t=G.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});p.warn(t.message)}}}async function oe(e,t){try{const n=(await ie()).transaction(re,'readwrite'),i=n.objectStore(re);await i.put(t,ce(e)),await n.done}catch(e){if(e instanceof n.FirebaseError)p.warn(e.message);else{const t=G.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});p.warn(t.message)}}}function ce(e){return`${e.name}!${e.options.appId}`}
/**
   * @license
   * Copyright 2021 Google LLC
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
   */class le{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider('app').getImmediate();this._storage=new de(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider('platform-logger').getImmediate().getPlatformInfoString(),i=pe();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=ue(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){p.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return'';const t=pe(),{heartbeatsToSend:i,unsentEntries:s}=he(this._heartbeatsCache.heartbeats),o=(0,n.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return p.warn(e),''}}}function pe(){return(new Date).toISOString().substring(0,10)}function he(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),fe(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fe(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class de{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,n.isIndexedDBAvailable)()&&(0,n.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await se(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function fe(e){return(0,n.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}function ue(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}
/**
   * @license
   * Copyright 2019 Google LLC
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
   */var be;be='',W(new e.Component('platform-logger',(e=>new s(e)),"PRIVATE")),W(new e.Component('heartbeat',(e=>new le(e)),"PRIVATE")),ae(c,l,be),ae(c,l,'esm2017'),ae('fire-js','')}),3359,[3360,3363,3361,3364]);
__d((function(g,r,i,a,m,_e,d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.Provider=_e.ComponentContainer=_e.Component=void 0;var t=r(d[0]);
/**
   * @license
   * Copyright 2019 Google LLC
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
   */
_e.Component=class{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};const e='[DEFAULT]';
/**
   * @license
   * Copyright 2019 Google LLC
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
   */class n{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const e=new t.Deferred;if(this.instancesDeferred.set(n,e),this.isInitialized(n)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:n});t&&e.resolve(t)}catch(t){}}return this.instancesDeferred.get(n).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(s(t))try{this.getOrInitializeService({instanceIdentifier:e})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=e){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>'INTERNAL'in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>'_delete'in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=e){return this.instances.has(t)}getOptions(t=e){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),o=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;o.add(t),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&t(c,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(o=t,o===e?void 0:o),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch(t){}var o;return s||null}normalizeInstanceIdentifier(t=e){return this.component?this.component.multipleInstances?t:e:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(t){return"EAGER"===t.instantiationMode}
/**
   * @license
   * Copyright 2019 Google LLC
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
   */_e.Provider=n;_e.ComponentContainer=class{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new n(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}}),3360,[3361]);
__d((function(g,r,_i,_a2,m,_e,_d){Object.defineProperty(_e,"__esModule",{value:!0}),_e.Sha1=_e.RANDOM_FACTOR=_e.MAX_VALUE_MILLIS=_e.FirebaseError=_e.ErrorFactory=_e.Deferred=_e.DecodeBase64StringError=_e.CONSTANTS=void 0,_e.areCookiesEnabled=function(){if('undefined'==typeof navigator||!navigator.cookieEnabled)return!1;return!0}
/**
   * @license
   * Copyright 2017 Google LLC
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
   */,_e.assertionError=_e.assert=void 0,_e.async=function(e,t){return(...n)=>{Promise.resolve(!0).then((()=>{e(...n)})).catch((e=>{t&&t(e)}))}},_e.base64urlEncodeWithoutPadding=_e.base64Encode=_e.base64Decode=_e.base64=void 0,_e.calculateBackoffMillis=function(e,t=V,n=R){const o=t*Math.pow(n,e),i=Math.round(U*o*(Math.random()-.5)*2);return Math.min(F,o+i)}
/**
   * @license
   * Copyright 2020 Google LLC
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
   */,_e.contains=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_e.createMockUserToken=
/**
   * @license
   * Copyright 2021 Google LLC
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
   */
function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||'demo-project',o=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:'custom',identities:{}}},e);return[h(JSON.stringify({alg:'none',type:'JWT'})),h(JSON.stringify(s)),''].join('.')},_e.createSubscribe=function(e,t){const n=new j(e,t);return n.subscribe.bind(n)},_e.decode=void 0,_e.deepCopy=function(e){return d(void 0,e)},_e.deepEqual=function e(t,n){if(t===n)return!0;const o=Object.keys(t),i=Object.keys(n);for(const s of o){if(!i.includes(s))return!1;const o=t[s],a=n[s];if(I(o)&&I(a)){if(!e(o,a))return!1}else if(o!==a)return!1}for(const e of i)if(!o.includes(e))return!1;return!0},_e.deepExtend=d,_e.errorPrefix=W,_e.extractQuerystring=function(e){const t=e.indexOf('?');if(!t)return'';const n=e.indexOf('#',t);return e.substring(t,n>0?n:void 0)}
/**
   * @license
   * Copyright 2017 Google LLC
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
   */,_e.getExperimentalSetting=_e.getDefaults=_e.getDefaultEmulatorHostnameAndPort=_e.getDefaultEmulatorHost=_e.getDefaultAppConfig=void 0,_e.getGlobal=f,_e.getModularInstance=
/**
   * @license
   * Copyright 2021 Google LLC
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
   */
function(e){return e&&e._delegate?e._delegate:e},_e.getUA=w,_e.isAdmin=void 0,_e.isBrowser=function(){return!0},_e.isBrowserExtension=function(){const e='object'==typeof chrome?chrome.runtime:'object'==typeof browser?browser.runtime:void 0;return'object'==typeof e&&void 0!==e.id},_e.isCloudWorkstation=E,_e.isCloudflareWorker=function(){return'undefined'!=typeof navigator&&'Cloudflare-Workers'===navigator.userAgent},_e.isElectron=function(){return w().indexOf('Electron/')>=0},_e.isEmpty=function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},_e.isIE=function(){const e=w();return e.indexOf('MSIE ')>=0||e.indexOf('Trident/')>=0},_e.isIndexedDBAvailable=function(){try{return'object'==typeof indexedDB}catch(e){return!1}},_e.isMobileCordova=function(){return!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())},_e.isNode=D,_e.isNodeSdk=function(){return!0===t.NODE_CLIENT||!0===t.NODE_ADMIN},_e.isReactNative=function(){return'object'==typeof navigator&&'ReactNative'===navigator.product},_e.isSafari=function(){return!D()&&!!navigator.userAgent&&navigator.userAgent.includes('Safari')&&!navigator.userAgent.includes('Chrome')},_e.isSafariOrWebkit=function(){return!D()&&!!navigator.userAgent&&(navigator.userAgent.includes('Safari')||navigator.userAgent.includes('WebKit'))&&!navigator.userAgent.includes('Chrome')},_e.isUWP=function(){return w().indexOf('MSAppHost/')>=0},_e.isValidTimestamp=_e.isValidFormat=void 0,_e.isWebWorker=function(){return'undefined'!=typeof WorkerGlobalScope&&'undefined'!=typeof self&&self instanceof WorkerGlobalScope},_e.issuedAtTime=void 0,_e.jsonEval=x,_e.map=function(e,t,n){const o={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=t.call(n,e[i],i,e));return o},_e.ordinal=function(e){if(!Number.isFinite(e))return`${e}`;return e+H(e)},_e.pingServer=async function(e){return(await fetch(e,{credentials:'include'})).ok},_e.promiseWithTimeout=
/**
   * @license
   * Copyright 2022 Google LLC
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
   */
function(e,t=2e3){const n=new v;return setTimeout((()=>n.reject('timeout!')),t),e.then(n.resolve,n.reject),n.promise}
/**
   * @license
   * Copyright 2017 Google LLC
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
   */,_e.querystring=function(e){const t=[];for(const[n,o]of Object.entries(e))Array.isArray(o)?o.forEach((e=>{t.push(encodeURIComponent(n)+'='+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+'='+encodeURIComponent(o));return t.length?'&'+t.join('&'):''},_e.querystringDecode=function(e){const t={},n=e.replace(/^\?/,'').split('&');return n.forEach((e=>{if(e){const[n,o]=e.split('=');t[decodeURIComponent(n)]=decodeURIComponent(o)}})),t},_e.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},_e.stringToByteArray=_e.stringLength=void 0,_e.stringify=function(e){return JSON.stringify(e)}
/**
   * @license
   * Copyright 2017 Google LLC
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
   */,_e.updateEmulatorBanner=function(e,t){if('undefined'==typeof document||!E(window.location.host)||C[e]===t||C[e]||O)return;function n(e){return`__firebase__banner__${e}`}C[e]=t;const o='__firebase__banner',i=A().prod.length>0;function s(){const e=document.getElementById(o);e&&e.remove()}function a(e){e.style.display='flex',e.style.background='#7faaf0',e.style.position='fixed',e.style.bottom='5px',e.style.left='5px',e.style.padding='.5em',e.style.borderRadius='5px',e.style.alignItems='center'}function c(e,t){e.setAttribute('width','24'),e.setAttribute('id',t),e.setAttribute('height','24'),e.setAttribute('viewBox','0 0 24 24'),e.setAttribute('fill','none'),e.style.marginLeft='-6px'}function u(){const e=document.createElement('span');return e.style.cursor='pointer',e.style.marginLeft='16px',e.style.fontSize='24px',e.innerHTML=' &times;',e.onclick=()=>{O=!0,s()},e}function h(e,t){e.setAttribute('id',t),e.innerText='Learn more',e.href='https://firebase.google.com/docs/studio/preview-apps#preview-backend',e.setAttribute('target','__blank'),e.style.paddingLeft='5px',e.style.textDecoration='underline'}function l(){const e=S(o),t=n('text'),s=document.getElementById(t)||document.createElement('span'),l=n('learnmore'),d=document.getElementById(l)||document.createElement('a'),f=n('preprendIcon'),p=document.getElementById(f)||document.createElementNS('http://www.w3.org/2000/svg','svg');if(e.created){const t=e.element;a(t),h(d,l);const n=u();c(p,f),t.append(p,s,d,n),document.body.appendChild(t)}i?(s.innerText="Preview backend disconnected.",p.innerHTML="<g clip-path=\"url(#clip0_6013_33858)\">\n<path d=\"M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z\" fill=\"#212121\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_6013_33858\">\n<rect width=\"24\" height=\"24\" fill=\"white\"/>\n</clipPath>\n</defs>"):(p.innerHTML="<g clip-path=\"url(#clip0_6083_34804)\">\n<path d=\"M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z\" fill=\"#212121\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_6083_34804\">\n<rect width=\"24\" height=\"24\" fill=\"white\"/>\n</clipPath>\n</defs>",s.innerText='Preview backend running in this workspace.'),s.setAttribute('id',t)}'loading'===document.readyState?window.addEventListener('DOMContentLoaded',l):l()}
/**
   * @license
   * Copyright 2017 Google LLC
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
   */,_e.validateArgCount=void 0,_e.validateCallback=function(e,t,n,o){if(o&&!n)return;if('function'!=typeof n)throw new Error(W(e,t)+'must be a valid function.')},_e.validateContextObject=function(e,t,n,o){if(o&&!n)return;if('object'!=typeof n||null===n)throw new Error(W(e,t)+'must be a valid context object.')}
/**
   * @license
   * Copyright 2017 Google LLC
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
   */,_e.validateIndexedDBOpenable=function(){return new Promise(((e,t)=>{try{let n=!0;const o='validate-browser-context-for-indexeddb-analytics-module',i=self.indexedDB.open(o);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(o),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||'')}}catch(e){t(e)}}))},_e.validateNamespace=function(e,t,n){if(n&&!t)return;if('string'!=typeof t)throw new Error(W(e,'namespace')+'must be a valid firebase namespace.')};var e=r(_d[0]);
/**
   * @license
   * Copyright 2017 Google LLC
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
   */const t=_e.CONSTANTS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:'${JSCORE_VERSION}'},n=function(e,t){if(!e)throw o(t)};
/**
   * @license
   * Copyright 2017 Google LLC
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
   */_e.assert=n;const o=function(e){return new Error('Firebase Database ('+t.SDK_VERSION+') INTERNAL ASSERT FAILED: '+e)};
/**
   * @license
   * Copyright 2017 Google LLC
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
   */_e.assertionError=o;const i=function(e){const t=[];let n=0;for(let o=0;o<e.length;o++){let i=e.charCodeAt(o);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&o+1<e.length&&56320==(64512&e.charCodeAt(o+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++o)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s=function(e){const t=[];let n=0,o=0;for(;n<e.length;){const i=e[n++];if(i<128)t[o++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[o++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[o++]=String.fromCharCode(55296+(s>>10)),t[o++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[o++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join('')},a=_e.base64={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+'+/='},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+'-_.'},HAS_NATIVE_SUPPORT:'function'==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error('encodeByteArray takes an array as a parameter');this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,a=s?e[t+1]:0,c=t+2<e.length,u=c?e[t+2]:0,h=i>>2,l=(3&i)<<4|a>>4;let d=(15&a)<<2|u>>6,f=63&u;c||(f=64,s||(d=64)),o.push(n[h],n[l],n[d],n[f])}return o.join('')},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const u=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==u)throw new c;const h=i<<2|s>>4;if(o.push(h),64!==a){const e=s<<4&240|a>>2;if(o.push(e),64!==u){const e=a<<6&192|u;o.push(e)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class c extends Error{constructor(){super(...arguments),this.name='DecodeBase64StringError'}}_e.DecodeBase64StringError=c;const u=function(e){const t=i(e);return a.encodeByteArray(t,!0)};_e.base64Encode=u;const h=function(e){return u(e).replace(/\./g,'')};_e.base64urlEncodeWithoutPadding=h;const l=function(e){try{return a.decodeString(e,!0)}catch(e){console.error('base64Decode failed: ',e)}return null};
/**
   * @license
   * Copyright 2017 Google LLC
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
   */function d(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&'__proto__'!==n&&(e[n]=d(e[n],t[n]));return e}
/**
   * @license
   * Copyright 2022 Google LLC
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
   */
function f(){return'undefined'!=typeof self?self:window}
/**
   * @license
   * Copyright 2022 Google LLC
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
   */_e.base64Decode=l;const p=()=>{if('undefined'==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},b=()=>{if('undefined'==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},_=()=>{try{return(0,e.getDefaultsFromPostinstall)()||f().__FIREBASE_DEFAULTS__||p()||b()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}};_e.getDefaults=_;const y=e=>{var t,n;return null===(n=null===(t=_())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]};_e.getDefaultEmulatorHost=y;_e.getDefaultEmulatorHostnameAndPort=e=>{const t=y(e);if(!t)return;const n=t.lastIndexOf(':');if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const o=parseInt(t.substring(n+1),10);return'['===t[0]?[t.substring(1,n-1),o]:[t.substring(0,n),o]};_e.getDefaultAppConfig=()=>{var e;return null===(e=_())||void 0===e?void 0:e.config};
/**
   * @license
   * Copyright 2017 Google LLC
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
   */
_e.getExperimentalSetting=e=>{var t;return null===(t=_())||void 0===t?void 0:t[`_${e}`]};class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),'function'==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
   * @license
   * Copyright 2025 Google LLC
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
   */function E(e){return e.endsWith('.cloudworkstations.dev')}_e.Deferred=v;const C={};function A(){const e={prod:[],emulator:[]};for(const t of Object.keys(C))C[t]?e.emulator.push(t):e.prod.push(t);return e}function S(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement('div'),t.setAttribute('id',e),n=!0),{created:n,element:t}}let O=!1;function w(){return'undefined'!=typeof navigator&&'string'==typeof navigator.userAgent?navigator.userAgent:''}function D(){var e;const t=null===(e=_())||void 0===e?void 0:e.forceEnvironment;if('node'===t)return!0;if('browser'===t)return!1;try{return'[object process]'===Object.prototype.toString.call(g.process)}catch(e){return!1}}class T extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}_e.FirebaseError=T;class M{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},o=`${this.service}/${e}`,i=this.errors[e],s=i?k(i,n):'Error',a=`${this.serviceName}: ${s} (${o}).`;return new T(o,a,n)}}function k(e,t){return e.replace(N,((e,n)=>{const o=t[n];return null!=o?String(o):`<${n}?>`}))}_e.ErrorFactory=M;const N=/\{\$([^}]+)}/g;
/**
   * @license
   * Copyright 2017 Google LLC
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
   */function x(e){return JSON.parse(e)}const B=function(e){let t={},n={},o={},i='';try{const s=e.split('.');t=x(l(s[0])||''),n=x(l(s[1])||''),i=s[2],o=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:o,signature:i}};_e.decode=B;_e.isValidTimestamp=function(e){const t=B(e).claims,n=Math.floor((new Date).getTime()/1e3);let o=0,i=0;return'object'==typeof t&&(t.hasOwnProperty('nbf')?o=t.nbf:t.hasOwnProperty('iat')&&(o=t.iat),i=t.hasOwnProperty('exp')?t.exp:o+86400),!!n&&!!o&&!!i&&n>=o&&n<=i};_e.issuedAtTime=function(e){const t=B(e).claims;return'object'==typeof t&&t.hasOwnProperty('iat')?t.iat:null};_e.isValidFormat=function(e){const t=B(e).claims;return!!t&&'object'==typeof t&&t.hasOwnProperty('iat')};function I(e){return null!==e&&'object'==typeof e}
/**
   * @license
   * Copyright 2017 Google LLC
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
   */
_e.isAdmin=function(e){const t=B(e).claims;return'object'==typeof t&&!0===t.admin};_e.Sha1=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if('string'==typeof e)for(let o=0;o<16;o++)n[o]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let o=0;o<16;o++)n[o]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let o,i,s=this.chain_[0],a=this.chain_[1],c=this.chain_[2],u=this.chain_[3],h=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(o=u^a&(c^u),i=1518500249):(o=a^c^u,i=1859775393):e<60?(o=a&c|u&(a|c),i=2400959708):(o=a^c^u,i=3395469782);const t=(s<<5|s>>>27)+o+h+i+n[e]&4294967295;h=u,u=c,c=4294967295&(a<<30|a>>>2),a=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let o=0;const i=this.buf_;let s=this.inbuf_;for(;o<t;){if(0===s)for(;o<=n;)this.compress_(e,o),o+=this.blockSize;if('string'==typeof e){for(;o<t;)if(i[s]=e.charCodeAt(o),++s,++o,s===this.blockSize){this.compress_(i),s=0;break}}else for(;o<t;)if(i[s]=e[o],++s,++o,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let o=24;o>=0;o-=8)e[n]=this.chain_[t]>>o&255,++n;return e}};class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let o;if(void 0===e&&void 0===t&&void 0===n)throw new Error('Missing Observer.');o=L(e,['next','error','complete'])?e:{next:e,error:t,complete:n},void 0===o.next&&(o.next=P),void 0===o.error&&(o.error=P),void 0===o.complete&&(o.complete=P);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch(e){}})),this.observers.push(o),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){'undefined'!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function L(e,t){if('object'!=typeof e||null===e)return!1;for(const n of t)if(n in e&&'function'==typeof e[n])return!0;return!1}function P(){}
/**
   * @license
   * Copyright 2017 Google LLC
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
   */function W(e,t){return`${e} failed: ${t} argument `}_e.validateArgCount=function(e,t,n,o){let i;if(o<t?i='at least '+t:o>n&&(i=0===n?'none':'no more than '+n),i){throw new Error(e+' failed: Was called with '+o+(1===o?' argument.':' arguments.')+' Expects '+i+'.')}};_e.stringToByteArray=function(e){const t=[];let o=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,n(i<e.length,'Surrogate pair missing trail surrogate.');s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[o++]=s:s<2048?(t[o++]=s>>6|192,t[o++]=63&s|128):s<65536?(t[o++]=s>>12|224,t[o++]=s>>6&63|128,t[o++]=63&s|128):(t[o++]=s>>18|240,t[o++]=s>>12&63|128,t[o++]=s>>6&63|128,t[o++]=63&s|128)}return t};
/**
   * @license
   * Copyright 2019 Google LLC
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
   */
_e.stringLength=function(e){let t=0;for(let n=0;n<e.length;n++){const o=e.charCodeAt(n);o<128?t++:o<2048?t+=2:o>=55296&&o<=56319?(t+=4,n++):t+=3}return t};const V=1e3,R=2,F=_e.MAX_VALUE_MILLIS=144e5,U=_e.RANDOM_FACTOR=.5;function H(e){const t=(e=Math.abs(e))%100;if(t>=10&&t<=20)return'th';const n=e%10;return 1===n?'st':2===n?'nd':3===n?'rd':'th'}}),3361,[3362]);
__d((function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.getDefaultsFromPostinstall=void 0;e.getDefaultsFromPostinstall=()=>{}}),3362,[]);
__d((function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.Logger=e.LogLevel=void 0,e.setLogLevel=function(l){t.forEach((t=>{t.setLogLevel(l)}))},e.setUserLogHandler=function(n,s){for(const u of t){let t=null;s&&s.level&&(t=o[s.level]),u.userLogHandler=null===n?null:(o,s,...u)=>{const h=u.map((t=>{if(null==t)return null;if('string'==typeof t)return t;if('number'==typeof t||'boolean'==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(' ');s>=(null!=t?t:o.logLevel)&&n({level:l[s].toLowerCase(),message:h,args:u,type:o.name})}}};
/**
   * @license
   * Copyright 2017 Google LLC
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
   */
const t=[];var l;!(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(l||(e.LogLevel=l={}));const o={debug:l.DEBUG,verbose:l.VERBOSE,info:l.INFO,warn:l.WARN,error:l.ERROR,silent:l.SILENT},n=l.INFO,s={[l.DEBUG]:'log',[l.VERBOSE]:'log',[l.INFO]:'info',[l.WARN]:'warn',[l.ERROR]:'error'},u=(t,l,...o)=>{if(l<t.logLevel)return;const n=(new Date).toISOString(),u=s[l];if(!u)throw new Error(`Attempted to log a message with an invalid logType (value: ${l})`);console[u](`[${n}]  ${t.name}:`,...o)};e.Logger=class{constructor(l){this.name=l,this._logLevel=n,this._logHandler=u,this._userLogHandler=null,t.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in l))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel='string'==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if('function'!=typeof t)throw new TypeError('Value assigned to `logHandler` must be a function');this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,l.DEBUG,...t),this._logHandler(this,l.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,l.VERBOSE,...t),this._logHandler(this,l.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,l.INFO,...t),this._logHandler(this,l.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,l.WARN,...t),this._logHandler(this,l.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,l.ERROR,...t),this._logHandler(this,l.ERROR,...t)}}}),3363,[]);
__d((function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.deleteDB=function(t,{blocked:o}={}){const s=indexedDB.deleteDatabase(t);o&&s.addEventListener('blocked',(n=>o(n.oldVersion,n)));return(0,n.w)(s).then((()=>{}))},e.openDB=function(t,o,{blocked:s,upgrade:c,blocking:l,terminated:u}={}){const f=indexedDB.open(t,o),p=(0,n.w)(f);c&&f.addEventListener('upgradeneeded',(t=>{c((0,n.w)(f.result),t.oldVersion,t.newVersion,(0,n.w)(f.transaction),t)}));s&&f.addEventListener('blocked',(n=>s(n.oldVersion,n.newVersion,n)));return p.then((n=>{u&&n.addEventListener('close',(()=>u())),l&&n.addEventListener('versionchange',(n=>l(n.oldVersion,n.newVersion,n)))})).catch((()=>{})),p},Object.defineProperty(e,"unwrap",{enumerable:!0,get:function(){return n.u}}),Object.defineProperty(e,"wrap",{enumerable:!0,get:function(){return n.w}});var n=r(d[0]);const t=['get','getKey','getAll','getAllKeys','count'],o=['put','add','delete','clear'],s=new Map;function c(n,c){if(!(n instanceof IDBDatabase)||c in n||'string'!=typeof c)return;if(s.get(c))return s.get(c);const l=c.replace(/FromIndex$/,''),u=c!==l,f=o.includes(l);if(!(l in(u?IDBIndex:IDBObjectStore).prototype)||!f&&!t.includes(l))return;const p=async function(n,...t){const o=this.transaction(n,f?'readwrite':'readonly');let s=o.store;return u&&(s=s.index(t.shift())),(await Promise.all([s[l](...t),f&&o.done]))[0]};return s.set(c,p),p}(0,n.r)((n=>({...n,get:(t,o,s)=>c(t,o)||n.get(t,o,s),has:(t,o)=>!!c(t,o)||n.has(t,o)})))}),3364,[3365]);
__d((function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.i=e.a=void 0,e.r=function(t){I=t(I)},e.u=void 0,e.w=b;const t=(t,n)=>n.some((n=>t instanceof n));let n,o;e.i=t;const s=new WeakMap,c=new WeakMap,u=new WeakMap,f=new WeakMap,p=e.a=new WeakMap;function v(t){const n=new Promise(((n,o)=>{const s=()=>{t.removeEventListener('success',c),t.removeEventListener('error',u)},c=()=>{n(b(t.result)),s()},u=()=>{o(t.error),s()};t.addEventListener('success',c),t.addEventListener('error',u)}));return n.then((n=>{n instanceof IDBCursor&&s.set(n,t)})).catch((()=>{})),p.set(n,t),n}function D(t){if(c.has(t))return;const n=new Promise(((n,o)=>{const s=()=>{t.removeEventListener('complete',c),t.removeEventListener('error',u),t.removeEventListener('abort',u)},c=()=>{n(),s()},u=()=>{o(t.error||new DOMException('AbortError','AbortError')),s()};t.addEventListener('complete',c),t.addEventListener('error',u),t.addEventListener('abort',u)}));c.set(t,n)}let I={get(t,n,o){if(t instanceof IDBTransaction){if('done'===n)return c.get(t);if('objectStoreNames'===n)return t.objectStoreNames||u.get(t);if('store'===n)return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return b(t[n])},set:(t,n,o)=>(t[n]=o,!0),has:(t,n)=>t instanceof IDBTransaction&&('done'===n||'store'===n)||n in t};function B(c){return'function'==typeof c?(f=c)!==IDBDatabase.prototype.transaction||'objectStoreNames'in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(f)?function(...t){return f.apply(E(this),t),b(s.get(this))}:function(...t){return b(f.apply(E(this),t))}:function(t,...n){const o=f.call(E(this),t,...n);return u.set(o,t.sort?t.sort():[t]),b(o)}:(c instanceof IDBTransaction&&D(c),t(c,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(c,I):c);var f}function b(t){if(t instanceof IDBRequest)return v(t);if(f.has(t))return f.get(t);const n=B(t);return n!==t&&(f.set(t,n),p.set(n,t)),n}const E=t=>p.get(t);e.u=E}),3365,[]);
__d((function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0});var n=r(d[0]);Object.keys(n).forEach((function(t){"default"!==t&&"__esModule"!==t&&(t in e&&e[t]===n[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t]}}))}));
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
/**
   * @license
   * Copyright 2020 Google LLC
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
   */
(0,n.registerVersion)("firebase","11.8.1",'app')}),3366,[3359]);