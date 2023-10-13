(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(o){return o>=7.5?"green":o>=5?"orange":"red"}function p(o){const i="https://image.tmdb.org/t/p/w1280";main.innerHTML="",o.forEach(async s=>{const{title:r,poster_path:e,vote_average:t,overview:n,id:l,release_date:m}=s;console.log(l);const d=await(await fetch(`https://api.themoviedb.org/3/movie/${l}?api_key=391b19b86371301316b362ccf31ffda4`)).json();console.log(d);const c=document.createElement("div");c.classList.add("movie"),c.innerHTML=`
          <a href="${d.homepage}" target="_blank"><img src="${i+e}" alt="${r}"></a>
            <div class="movie-info">
          <h4>${r}</h4>
          
          <span class="${u(t.toFixed(1))}">${t.toFixed(1)}</span>
            </div>
            <h5>Release Date:   ${m}</h5>
            <div class="overview">
          <h3>Overview</h3>
          ${n}
        </div>
        
        `,main.appendChild(c)})}async function a(o){const s=await(await fetch(o)).json();p(s.results)}const f="391b19b86371301316b362ccf31ffda4";async function v(){const o=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${f}&page=1`,i=await a(o);document.getElementById("main"),document.getElementById("form"),document.getElementById("search"),a(o),console.log(a(o)),console.log(i)}v();form.addEventListener("submit",o=>{o.preventDefault();const i=`https://api.themoviedb.org/3/search/movie?api_key=${f}&query="`,s=search.value;s&&s!==""?(a(i+s),search.value=""):window.location.reload()});
