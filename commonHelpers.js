import{l as r,r as a,a as e,o,b as i,s as t}from"./assets/handlers-5a3ab7ea.js";import"./assets/vendor-ae288c55.js";const s=r(t.FAVORITES_KEY)??[];t.favoriteUsers=s;a(s,e.favoritesList);e.favoritesList.addEventListener("click",o);e.backdrop.addEventListener("click",i);!s||s.length===0?e.favoritesList.innerHTML=`<p>It appears that you haven't added any recipes to your favorites yet.
    To get started, you can add recipes that you
   like to your favorites for easier access in the future.</p>`:a(t.favoriteUsers,e.favoritesList);
//# sourceMappingURL=commonHelpers.js.map
