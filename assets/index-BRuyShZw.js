(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=[{id:"fractal-saint",title:"The Fractal Saint",author:"Unknown Scribe",date:"Age of the Gilded Rot",summary:"A dark fantasy tale about a geometry that infects the flesh.",tags:["dark-fantasy","surreal","body-horror"],content:`
      <p>It began not with a curse, but with a diagram. The High Arithmetician, Vaelin, found it etched into the marrow of a dragon's fossilized spine. A shape that defied the euclidean laws of our soft, rounded world.</p>
      
      <p>He called it the "Splintered Angle."</p>
      
      <p>I served Vaelin tea the morning he solved the equation. He didn't look at me. He was staring at his own hand. The fingers were no longer fingers. They were... crystalline. Not turned to crystal, but rearranged. The joints had snapped and reset into a jagged, recursive pattern. His index finger branched into three smaller fingers, which branched again, infinitely smaller, disappearing into a microscopic fuzz of flesh-math.</p>
      
      <p>"It is perfect," Vaelin whispered. His voice was different. Polyphonic. Like a choir of glass flutes.</p>
      
      <p>The sickness spread through the tower by sight alone. To see the Angle was to understand it, and to understand it was to become it. The maids were the first to change. I found them in the laundry room, their torsos twisted into Mobius strips, weeping not tears, but perfect geometrical spheres of mercury.</p>
      
      <p>I blinded myself. It was the only way. I took the silver letter opener and... well. Darkness is safety. Darkness is unstructured. But I can still hear them. The click-clack of their tessellated feet on the stone. They are building a cathedral of bone and gristle, a monument to the Great Equation.</p>
      
      <p>And sometimes, in the silence, I feel my own ribs itching. Trying to align.</p>
    `},{id:"whispering-fungus",title:"The Mycelium Confessional",author:"Dr. Aris Thorne",date:"2024-10-31",summary:"A scientist communicates with a fungus that knows your sins.",tags:["sci-fi","psychological"],content:`
      <p>The spore count is 40,000ppm. The air in the lab is thick, yellow, and smells of old library books and wet dog.</p>
      
      <p>Sample 89-B spoke to me today. It didn't use sound. It used the haptics of my suit. It vibrated the polymers against my skin in a pattern. Morse code? No. Braille? No. It was direct neural induction.</p>
      
      <p><i>"You regret the cat,"</i> it said. <i>"When you were seven. The river."</i></p>
      
      <p>I froze. No one knows about the kitten. It was an accident. I slipped.</p>
      
      <p><i>"We digested the kitten,"</i> the fungus hummed in my mind. <i>"It tasted of milk and terror. We are digesting you now, Aris. Slowly. We have replaced the flora in your gut. We are the flora. We are thinking with your stomach."</i></p>
      
      <p>I checked my vitals. Normal. But I feel full. So wonderfully, terribly full.</p>
    `},{id:"static-god",title:"Broadcast from Channel 0",author:"Cale V.",date:"1999-12-31",summary:"The TV didn't turn off when the ball dropped.",tags:["analog-horror","retro"],content:`
      <p>Happy New Year. The party is over. The guests have left. The confetti is soggy with spilled champagne.</p>
      
      <p>I tried to turn off the TV. The remote isn't working. The power button on the set is stuck. I pulled the plug. I literally pulled the plug out of the wall.</p>
      
      <p>The static remains. It's getting louder. And there's a face in the snow. Not a human face. It looks like... me. But inside out. The teeth are on the outside of the lips. The eyes are looking inward.</p>
      
      <p>It's mouthing something. I pressed my ear to the glass. The static hisses, <i>"Let me out. It's cold in here. It's so cold in the signal."</i></p>
      
      <p>I'm feeling cold too. I think... I think I'm on the wrong side of the screen.</p>
    `}],l=document.querySelector("#app");let a={view:"home",currentStoryId:null};function c(i,o=null){a.view=i,a.currentStoryId=o,p(),window.scrollTo(0,0)}function h(){const i=document.createElement("div");i.className="container";const o=document.createElement("header");o.innerHTML=`
    <h1 class="flicker-text">Creepy Horror Stories</h1>
    <p style="text-align: center; color: var(--color-text-dim); margin-bottom: 3rem;">
      Tales from the dark corners of the mind.
    </p>
  `;const r=document.createElement("div");return r.style.display="grid",r.style.gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))",r.style.gap="2rem",d.forEach(n=>{const e=document.createElement("div");e.className="story-card",Object.assign(e.style,{background:"var(--color-surface)",padding:"1.5rem",borderRadius:"8px",border:"1px solid #333",cursor:"pointer",transition:"transform 0.3s ease, border-color 0.3s ease"}),e.onmouseover=()=>{e.style.transform="translateY(-5px)",e.style.borderColor="var(--color-accent)",e.style.boxShadow="var(--shadow-glow)"},e.onmouseout=()=>{e.style.transform="translateY(0)",e.style.borderColor="#333",e.style.boxShadow="none"},e.innerHTML=`
      <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">${n.title}</h2>
      <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; font-size: 0.9rem; color: var(--color-text-dim);">
        <span>${n.author}</span>
        <span>${n.date}</span>
      </div>
      <p style="margin-bottom: 1.5rem; color: #bbb;">${n.summary}</p>
      <div>
        ${n.tags.map(t=>`<span style="display: inline-block; background: #222; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 5px; color: var(--color-accent); border: 1px solid #444;">#${t}</span>`).join("")}
      </div>
    `,e.onclick=()=>c("story",n.id),r.appendChild(e)}),i.appendChild(o),i.appendChild(r),i}function u(i){const o=d.find(t=>t.id===i);if(!o)return h();const r=document.createElement("div");r.className="container story-view",r.style.maxWidth="800px",r.style.margin="0 auto";const n=document.createElement("button");n.innerText="← Return to Safety",n.onclick=()=>c("home");const e=document.createElement("article");return e.style.marginTop="3rem",e.innerHTML=`
    <h1 style="text-align: left; font-size: 3rem;">${o.title}</h1>
    <div style="border-bottom: 1px solid var(--color-accent); padding-bottom: 1rem; margin-bottom: 2rem; color: var(--color-text-dim);">
      By ${o.author} • ${o.date}
    </div>
    <div class="story-body" style="font-size: 1.2rem; line-height: 1.8; color: #ddd;">
      ${o.content}
    </div>
  `,r.appendChild(n),r.appendChild(e),r}function p(){l.innerHTML="",a.view==="home"?l.appendChild(h()):a.view==="story"&&l.appendChild(u(a.currentStoryId))}p();
