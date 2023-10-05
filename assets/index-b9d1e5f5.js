(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(o){return o>=7.5?"green":o>=5?"orange":"red"}const u="https://image.tmdb.org/t/p/w1280";function m(o){main.innerHTML="",o.forEach(r=>{const{title:s,poster_path:i,vote_average:e,overview:t,id:n,release_date:l}=r,a=document.createElement("div");a.classList.add("movie"),a.innerHTML=`
          <a href="#" target="_blank"><img src="${u+i}" alt="${s}"></a>
            <div class="movie-info">
          <h4>${s}</h4>
          
          <span class="${f(e.toFixed(1))}">${e.toFixed(1)}</span>
            </div>
            <h5>Release Date:   ${l}</h5>
            <div class="overview">
          <h3>Overview</h3>
          ${t}
        </div>
        
        `,main.appendChild(a)})}const p="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1",h='https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';document.getElementById("main");const v=document.getElementById("form"),c=document.getElementById("search");d(p);async function d(o){const s=await(await fetch(o)).json();m(s.results)}v.addEventListener("submit",o=>{o.preventDefault();const r=c.value;r&&r!==""?(d(h+r),c.value=""):window.location.reload()});
