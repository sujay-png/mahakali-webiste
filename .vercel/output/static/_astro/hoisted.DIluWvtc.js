import"./hoisted.Cqwiz-i4.js";import"./single-value.DnumxHrE.js";function a(){document.querySelectorAll(".video-section").forEach(t=>{if(!(t instanceof HTMLElement)||t.dataset.bound==="true")return;t.dataset.bound="true";const r=()=>{const e=t.getAttribute("data-embed");if(!e)return;const o=e.includes("?")?`${e}&autoplay=1`:`${e}?autoplay=1`;t.innerHTML=`
          <iframe
            src="${o}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
          ></iframe>
        `};t.addEventListener("click",r),t.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),r())})})}a();document.addEventListener("astro:page-load",a);
