(function(){var ids=['beranda', 'profil', 'perjalanan', 'teknologi', 'pelajaran', 'kesimpulan'],T={};function go(){var h=(location.hash||'#beranda').slice(1);if(ids.indexOf(h)<0)h='beranda';
ids.forEach(function(i){document.getElementById('p-'+i).classList.toggle('on',i===h)});
document.querySelectorAll('[data-p]').forEach(function(a){a.classList.toggle('act',a.dataset.p===h)});
window.scrollTo(0,0)}window.addEventListener('hashchange',go);go()})();
