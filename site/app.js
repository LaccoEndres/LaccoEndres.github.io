const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');
let activeTrigger = null;
function escapeHTML(value) { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
function media(project, detail = false) {
  if (project.image) return `<img ${detail ? 'class="detail-image"' : ''} src="assets/${project.image}" alt="${escapeHTML(project.alt)}" loading="lazy" width="1280" height="720">`;
  return `<div class="dsw-title">${project.learning ? 'Little games.<br>Real purpose.' : 'deep space<br>waifu'}<small>${project.learning ? 'NAVEGÁTICA · CORRIDA GRAMATICAL' : 'THE ORIGINAL + FIVE FOLLOW-UP TITLES'}</small></div>${project.mature?'<span class="review-badge"><strong>98%</strong> positive<br><small>NEKOMIMI · HISTORICAL SCORE</small></span>':''}`;
}
function videoFigure(video) {
  return `<figure class="gameplay-video"><div class="video-frame ${video.portrait?'portrait':''}">${video.type==='file'?`<video controls playsinline preload="metadata" poster="${video.poster}" aria-label="${escapeHTML(video.title)}"><source src="${video.src}" type="video/mp4">Your browser does not support this player. <a href="${video.src}">Open the gameplay video</a>.</video>`:`<iframe src="${video.src}" title="${escapeHTML(video.title)}" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}</div><figcaption><strong>${video.title}</strong><span>${video.caption}</span>${video.url?`<a href="${video.url}" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a>`:''}</figcaption></figure>`;
}
function videoContent(project) {
  if (!project.videos?.length) return '';
  if (!project.videoPlaylist) return `<section class="project-videos" aria-label="${escapeHTML(project.title)} videos"><h3>See the game in action</h3>${project.videos.map(videoFigure).join('')}</section>`;
  return `<section class="project-videos video-playlist" aria-label="${escapeHTML(project.title)} videos"><h3>See the game in action</h3><div class="selected-video">${videoFigure(project.videos[0])}</div><h3>${project.playlistLabel||'More videos'}</h3><div class="video-choices" role="group" aria-label="Choose a ${escapeHTML(project.title)} video">${project.videos.map((video,index)=>`<button type="button" class="video-choice ${index===0?'active':''}" data-video-project="${project.id}" data-video-index="${index}" aria-pressed="${index===0}" aria-label="Select ${escapeHTML(video.title)} video"><img src="${video.poster}" alt="" loading="lazy" width="320" height="180"><span>${video.title}</span></button>`).join('')}</div><p class="sr-only video-selection-status" aria-live="polite"></p></section>`;
}
function galleryContent(project) {
  if (!project.gallery?.length) return '';
  return `<section class="project-gallery" aria-label="${escapeHTML(project.title)} screenshots"><h3>A closer look</h3><div>${project.gallery.map(image=>`<img src="assets/${image.src}" alt="${escapeHTML(image.alt)}" loading="lazy" width="1280" height="720">`).join('')}</div></section>`;
}
function renderProjects(filter='all') {
  const shown = projects.filter(project => filter === 'all' || project.category === filter);
  grid.innerHTML = shown.map(project => `<article class="project ${project.featured?'featured':''}"><div class="project-media ${!project.image?'dsw-media':''}">${media(project)}<span class="media-label">${project.label}</span>${project.videos?.length?'<span class="video-badge">▶ GAMEPLAY</span>':''}${project.mature?'<span class="mature-tag">18+ · ARCHIVED SERIES</span>':''}</div><div class="project-body"><p class="project-kicker">${project.kicker}</p><h3>${project.title}</h3><p class="project-description">${project.description}</p><div class="project-tags">${project.tags.map(tag=>`<span>${tag}</span>`).join('')}</div><div class="project-bottom"><span class="project-role">${project.role}</span><div class="project-actions">${project.playUrl?`<a class="play-demo" href="${project.playUrl}" target="_blank" rel="noopener noreferrer" aria-label="Play ${project.title} WebGL demo">Play demo ↗</a>`:''}<button type="button" class="project-open" data-project="${project.id}" aria-label="View ${project.title} project details">${project.videos?.length?'Watch gameplay':'Project notes'}</button></div></div></div></article>`).join('');
  document.querySelector('#filter-status').textContent = `Showing ${shown.length} ${filter==='all'?'projects':filter==='early'?'jam and university projects':'professional projects'}.`;
}
function openProject(id, trigger) {
  const project = projects.find(project=>project.id===id);
  if(!project) return;
  activeTrigger = trigger;
  const reviews = `<h3>Player reception</h3><p class="review-note"><strong>98% positive — a historical Nekomimi milestone.</strong><br><a href="https://www.steamspy.com/app/868980" target="_blank" rel="noopener noreferrer">SteamSpy records a 98% user score</a>, and <a href="https://weatherfactory.biz/the-law-of-boob/" target="_blank" rel="noopener noreferrer">an article by game developer Lottie Bevan using 2019 review scores</a> independently mentions the same figure. Archived reports also show <a href="https://isthereanydeal.com/product/018d9386-4b30-734b-a683-8195c52d5d53/" target="_blank" rel="noopener noreferrer">95% positive for the original</a> and <a href="https://steambase.io/games/deep-space-waifu-flat-justice/reviews" target="_blank" rel="noopener noreferrer">93% for Flat Justice</a>.<br><small>Sources checked November 4, 2026. Scores vary by date, review pool, and provider. The 98% figure is historical, not a live rating for every title.</small></p>`;
  content.innerHTML = `<p class="project-kicker">${project.kicker}</p><h2 id="dialog-title">${project.title}</h2>${project.videos?.length?videoContent(project):project.image?media(project,true):''}${project.playUrl?`<a class="button button-blue demo-button" href="${project.playUrl}" target="_blank" rel="noopener noreferrer">Play the WebGL demo <span aria-hidden="true">↗</span></a>`:''}<p>${project.intro}</p>${project.contributions.length?`<h3>My contribution</h3><ul>${project.contributions.map(line=>`<li>${line}</li>`).join('')}</ul>`:''}<h3>Project context</h3><p>${project.context}</p>${galleryContent(project)}${project.review?reviews:''}${project.expansions?`<h3>The five follow-up titles</h3><ul class="expansion-list">${project.expansions.map(item=>`<li><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name} ↗</a></li>`).join('')}</ul><p><small>External game pages may contain adult material or require a Steam login.</small></p>`:''}<div class="detail-links">${project.links.map(link=>`<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} ↗</a>`).join('')}</div>`;
  dialog.showModal();
  if (project.demoHint) {
    const hint=document.createElement('p');
    hint.className='demo-hint';
    hint.textContent=project.demoHint;
    content.querySelector('.demo-button').after(hint);
  }
  dialog.scrollTop=0;
  document.querySelector('.dialog-close').focus();
}
document.querySelector('.filters').addEventListener('click',event=>{
  const button=event.target.closest('[data-filter]'); if(!button)return;
  document.querySelectorAll('[data-filter]').forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));});
  renderProjects(button.dataset.filter);
});
grid.addEventListener('click',event=>{const trigger=event.target.closest('[data-project]');if(trigger)openProject(trigger.dataset.project,trigger);});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
content.addEventListener('click',event=>{
  const button=event.target.closest('[data-video-project]');
  if(!button)return;
  const project=projects.find(item=>item.id===button.dataset.videoProject);
  const video=project?.videos[Number(button.dataset.videoIndex)];
  if(!video||button.getAttribute('aria-pressed')==='true')return;
  const playlist=button.closest('.video-playlist');
  playlist.querySelectorAll('video').forEach(player=>player.pause());
  playlist.querySelector('.selected-video').innerHTML=videoFigure(video);
  playlist.querySelectorAll('.video-choice').forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));});
  playlist.querySelector('.video-selection-status').textContent=`Selected ${video.title}. Use the player above to watch.`;
});
content.addEventListener('play',event=>{
  content.querySelectorAll('video').forEach(video=>{if(video!==event.target)video.pause();});
},true);
dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();});
dialog.addEventListener('close',()=>{
  content.querySelectorAll('video').forEach(video=>video.pause());
  content.replaceChildren();
  activeTrigger?.focus();
});
document.querySelector('#year').textContent=new Date().getFullYear();
renderProjects();
