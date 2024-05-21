import{a as m}from"./vendor-ae288c55.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();function p(e,r){localStorage.setItem(e,JSON.stringify(r))}function S(e){try{return JSON.parse(localStorage.getItem(e))}catch(r){console.log(r)}}const o={favoriteUser:null,favoriteUsers:[],FAVORITES_KEY:"favorites-users"},c={usersList:document.querySelector(".list-users"),userItem:document.querySelector(".list-user-item"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),favoritesList:document.querySelector(".favorites")};function U(e,r){return(S(r)??[]).find(t=>t.id===e)!==void 0}function v(e,r){const i=e.map(({id:n,lastName:t,firstName:s,image:a,phone:d,email:u})=>`
      <li class="list-user-item">
   
      <img class="modal-img" src="${a}" data-id=${n} width="300">
      <div class="list-user-title">
      <h2 class="list-user-name">Firstname: ${s}
    </h2>
    <h2 class="list-user-name"> Lastname: ${t}</h2>
    <p class="list-user-email">Email: ${u}</p>
    <p class="list-user-phone">Phone: ${d}</p>
  
    </div>
      </li>`).join("");r.innerHTML=i}function b({image:e,firstName:r,lastName:i,maidenName:n,age:t,email:s,phone:a,birthDate:d,id:u},h){const L=U(u,o.FAVORITES_KEY),y=`<div class="modal-wrapper"><img class="modal-img" src="${e}" width="300" height="400">
      <div class="modal-info">
      <p>FirstName: ${r}</p>
      <p>LastName: ${i}</p>
      <p>MaidenName: ${n}</p>
      <p>Age: ${t}</p>
      <p>Email: ${s}</p>
      <p>Phone: ${a}</p>
      <p>Birthdate: ${d}</p>

      <button type="button" class="add-favorite-btn">${L?"Remove from favorite":"Add to favorite"}</button>
      </div>
      <button class="modal-close-btn">X</button>
      </div>`;h.innerHTML=y}m.defaults.baseURL="https://dummyjson.com/";function w(){return m("users?limit=18").then(({data:e})=>e.users)}function I(e){return m(`users/${e}`).then(({data:r})=>r)}function $(){c.backdrop.classList.remove("is-hidden"),document.addEventListener("keydown",g)}function f(){c.backdrop.classList.add("is-hidden"),document.removeEventListener("keydown",g)}let l;function A(e){if(e.target.nodeName!=="IMG")return;const r=e.target.dataset.id;I(r).then(i=>{o.favoriteUser=i,$(),b(i,c.modal),l=document.querySelector(".add-favorite-btn"),l.addEventListener("click",E)})}function k(e){e.target===e.currentTarget&&f(),e.target.classList.contains("modal-close-btn")&&f()}function g(e){e.code==="Escape"&&f()}function E(e){e.target.textContent==="Add to favorite"?(o.favoriteUsers.push(o.favoriteUser),p(o.FAVORITES_KEY,o.favoriteUsers),l.textContent="Remove from favorite",window.location.pathname==="/favorites.html"&&v(o.favoriteUsers,c.favoritesList)):(o.favoriteUsers=o.favoriteUsers.filter(r=>r.id!==o.favoriteUser.id),p(o.FAVORITES_KEY,o.favoriteUsers),l.textContent="Add to favorite",window.location.pathname==="/favorites.html"&&v(o.favoriteUsers,c.favoritesList))}export{c as a,k as b,w as g,S as l,A as o,v as r,o as s};
//# sourceMappingURL=handlers-5a3ab7ea.js.map
