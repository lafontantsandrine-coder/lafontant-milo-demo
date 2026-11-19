(()=>{'use strict';
const $=id=>document.getElementById(id),form=$('demoForm');if(!form)return;
const compact=matchMedia('(max-width:760px), (max-height:650px)');
function setStep(step){form.dataset.registrationStep=step;const small=compact.matches;for(const field of form.querySelectorAll('.registration-consents input[type="checkbox"]'))field.disabled=small&&step==='details';$('registrationBack').hidden=!small||step==='details';$('registrationNext').hidden=!small||step!=='details';$('startDemo').hidden=small&&step==='details';}
function next(){for(const input of form.querySelectorAll('.registration-fields input,.registration-fields select'))if(!input.reportValidity())return;setStep('consent');$('contactConsent').focus();}
$('registrationNext').addEventListener('click',next);$('registrationBack').addEventListener('click',()=>{setStep('details');$('name').focus();});
form.addEventListener('submit',e=>{if(compact.matches&&form.dataset.registrationStep==='details'){e.preventDefault();e.stopImmediatePropagation();next();}},true);
compact.addEventListener('change',()=>setStep(form.dataset.registrationStep||'details'));setStep('details');
function panel(show){$('demoWorkspace').dataset.panel=show;$('showConversation').setAttribute('aria-pressed',String(show==='conversation'));$('showFeedback').setAttribute('aria-pressed',String(show==='feedback'));}
$('showConversation').addEventListener('click',()=>panel('conversation'));$('showFeedback').addEventListener('click',()=>panel('feedback'));panel('conversation');
})();
