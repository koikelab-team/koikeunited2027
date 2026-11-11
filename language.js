const translations = [
  ['.map-link', 'Open in Google Maps ↗'],
  ['.profile-name', 'Hideki Koike'],
  ['.profile-affiliation', 'Institute of Science Tokyo'],
  ['.skip', 'Skip to content'],
  ['.event-title', 'Final Lecture by Professor Hideki Koike'],
  ['.date', 'March 14, 2027 <span>(Sunday)</span>'],
  ['.hero .venue', 'Digital Multi-purpose Hall, West Building 9<br>Institute of Science Tokyo'],
  ['nav a:nth-child(1)', 'About'], ['nav a:nth-child(2)', 'Program'], ['nav a:nth-child(3)', 'Venue'], ['nav a:nth-child(4)', 'Registration'],
  ['#about-title', 'About'], ['#program-title', 'Program'], ['#venue-title', 'Venue'], ['#registration-title', 'Registration'],
  ['.salutation', 'To Koike Lab alumni and friends,'],
  ['.prose p:nth-child(2)', 'Professor Hideki Koike will retire from the Institute of Science Tokyo at the end of March 2027.'],
  ['.prose p:nth-child(3)', 'To mark the occasion, his final lecture will be held together with Koike Lab United, our alumni gathering traditionally held at the end of each year.'],
  ['.prose p:nth-child(4)', 'The date has now been set. If you are able to join us, please save the date.'],
  ['.notice', '<span class="dot" aria-hidden="true"></span>Registration information and further details will be announced later.'],
  ['.program-heading h3', 'March 14, 2027 <span>Sunday</span>'], ['.badge', 'Tentative'],
  ['.schedule li:nth-child(1) p', 'Koike Lab alumni gathering'],
  ['.schedule li:nth-child(2) p', 'Lunch break'],
  ['.schedule li:nth-child(3) h4', 'Final Lecture'],
  ['.schedule li:nth-child(4) h4', 'Reception'],
  ['.section-note', 'The schedule is tentative and subject to change. All times are Japan Standard Time (JST).'],
  ['.venue-details h3', 'Institute of Science Tokyo'],
  ['.hall', 'Digital Multi-purpose Hall, West Building 9'],
  ['.text-link', 'Venue details &amp; access <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span>'],
  ['.status', 'Coming soon'],
  ['.registration > p:nth-of-type(2)', 'Registration instructions and further details will be announced later.'],
  ['.registration > p:nth-of-type(3)', 'Please save the date: Sunday, March 14, 2027.'],
  ['footer p', 'Final Lecture by Prof. Hideki Koike · 2027.03.14']
].map(([selector, en]) => { const element = document.querySelector(selector); return {element, en, ja: element.innerHTML}; });
function setLanguage(language) {
  const lang = language === 'en' ? 'en' : 'ja';
  document.documentElement.lang = lang;
  document.querySelector('.group-photo img').alt = lang === 'en' ? 'Koike Lab group photo' : '小池研の集合写真';
  document.querySelector('.koike-profile img').alt = lang === 'en' ? 'Hideki Koike' : '小池英樹';
  document.querySelector('.venue-map iframe').title = lang === 'en' ? 'Map of West Building 9, Institute of Science Tokyo' : '東京科学大学 西９号館の地図';
  translations.forEach(({element, ...text}) => { element.innerHTML = text[lang]; });
  document.title = lang === 'en' ? 'Koike Lab United 2027 & Final Lecture by Prof. Hideki Koike' : 'Koike Lab United 2027 & 小池英樹 最終講義';
  document.querySelector('meta[name="description"]').content = lang === 'en' ? 'Koike Lab United and the final lecture by Professor Hideki Koike, March 14, 2027, at the Institute of Science Tokyo.' : '2027年3月14日（日）、東京科学大学 西９号館ディジタル多目的ホールにて、Koike Lab Unitedと小池英樹の最終講義を開催します。';
  document.querySelector('nav').setAttribute('aria-label', lang === 'en' ? 'Main navigation' : 'メインナビゲーション');
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage('ja');
