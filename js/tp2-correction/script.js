'use strict';

citations=["c'est une citation"]

const btn_new = document.querySelector('#btn_new');
btn_new.addEventListener('click',afficherCitation);
afficherCitation();
console.log(citations);
