// ***** DATA (T2: All sections with Full Forms + Career) *****
const DATA = [
  {
    title: "Central Civil Services",
    class: "c1",
    items: [
      { short: "UPSC", full: "Union Public Service Commission", career: "IAS / IPS / IRS / IFS" },
      { short: "CAPF", full: "Central Armed Police Forces", career: "Assistant Commandant" },
    ]
  },
  {
    title: "State Civil Services",
    class: "c2",
    items: [
      { short: "MPPSC / RPSC / UPPSC", full: "State Public Service Commission Exams", career: "Deputy Collector / DSP / Tehsildar" },
    ]
  },
  {
    title: "Banking & Insurance",
    class: "c3",
    items: [
      { short: "IBPS PO", full: "Institute of Banking Personnel Selection – Probationary Officer", career: "Bank Officer" },
      { short: "SBI PO", full: "State Bank of India – Probationary Officer", career: "SBI Officer" },
      { short: "RBI Grade B", full: "Reserve Bank of India – Grade B", career: "Central Bank Officer" },
      { short: "LIC AAO", full: "Life Insurance Corporation – Assistant Administrative Officer", career: "Insurance Officer" },
    ]
  },
  {
    title: "SSC & Govt Jobs",
    class: "c4",
    items: [
      { short: "SSC CGL", full: "Staff Selection Commission – Combined Graduate Level", career: "Inspector / ASO / Auditor" },
      { short: "SSC CHSL", full: "Staff Selection Commission – Combined Higher Secondary Level", career: "Clerk / DEO" },
      { short: "SSC MTS", full: "Staff Selection Commission – Multi Tasking Staff", career: "Group C" },
      { short: "SSC GD", full: "Staff Selection Commission – General Duty", career: "CAPF Constable" },
    ]
  },
  {
    title: "Railways",
    class: "c5",
    items: [
      { short: "RRB NTPC", full: "Railway Recruitment Board – Non-Technical Popular Categories", career: "Station Master / Clerk" },
      { short: "RRB JE", full: "Railway Recruitment Board – Junior Engineer", career: "Engineer" },
      { short: "RRB Group D", full: "Railway Recruitment Board – Level-1", career: "Track Maintainer / Helper" },
    ]
  },
  {
    title: "Defence & Armed Forces",
    class: "c6",
    items: [
      { short: "NDA", full: "National Defence Academy", career: "Army / Navy / Airforce Officer Training" },
      { short: "CDS", full: "Combined Defence Services", career: "Permanent Commission Officer" },
      { short: "AFCAT", full: "Air Force Common Admission Test", career: "Air Force Officer" },
      { short: "AGNIVEER", full: "Armed Forces Recruitment Scheme", career: "Soldier Training" },
    ]
  },
  {
    title: "Teaching",
    class: "c7",
    items: [
      { short: "CTET", full: "Central Teacher Eligibility Test", career: "Teacher Eligibility (Primary/Secondary)" },
      { short: "State TET", full: "State Teacher Eligibility Test", career: "State School Teacher" },
      { short: "KVS / DSSSB", full: "Kendriya Vidyalaya Sangathan / Delhi Subordinate Services Selection Board", career: "Government School Teacher" },
    ]
  },
  {
    title: "Engineering & Technical",
    class: "c8",
    items: [
      { short: "JEE", full: "Joint Entrance Examination", career: "B.Tech (IIT/NIT/IIIT)" },
      { short: "GATE", full: "Graduate Aptitude Test in Engineering", career: "PSU / M.Tech / Research" },
      { short: "ISRO / DRDO", full: "Indian Space Research Organisation / Defence Research & Development Organisation", career: "Scientist / Engineer" },
    ]
  },
  {
    title: "Medical & Nursing",
    class: "c9",
    items: [
      { short: "NEET", full: "National Eligibility cum Entrance Test", career: "MBBS / BDS" },
      { short: "AIIMS Entrance", full: "All India Institute of Medical Sciences – UG Entrance", career: "Doctor / Specialist" },
      { short: "B.Sc Nursing", full: "Bachelor of Science in Nursing – Entrance Exams", career: "Registered Nurse" },
    ]
  },
  {
    title: "Police & Law",
    class: "c10",
    items: [
      { short: "SI", full: "Sub Inspector – Police Recruitment", career: "Police Sub-Inspector" },
      { short: "Constable", full: "State Police – Constable Recruitment", career: "Police Constable" },
      { short: "CLAT", full: "Common Law Admission Test", career: "BA LLB / LLB (Law Colleges)" },
    ]
  }
];

// Render cards
const grid = document.getElementById('grid');
function render(list){
  grid.innerHTML = '';
  list.forEach((sec, idx)=>{
    const card = document.createElement('article');
    card.className = `card ${sec.class}`;
    card.innerHTML = `
      <span class="badge">${String(idx+1).padStart(2,'0')}</span>
      <h3>${sec.title}</h3>
      <div class="list">
        ${sec.items.map(it=>`
          <div class="exam">
            <div class="short">${it.short}</div>
            <div class="full">${it.full}</div>
            <div class="career">→ ${it.career}</div>
          </div>
        `).join('')}
      </div>
    `;
    grid.appendChild(card);
  })
}
render(DATA);

// Live search
const q = document.getElementById('q');
const clear = document.getElementById('clear');
function doFilter(){
  const term = q.value.trim().toLowerCase();
  if(!term){ render(DATA); return; }
  const filtered = DATA.map(sec=>({
    ...sec,
    items: sec.items.filter(it =>
      it.short.toLowerCase().includes(term) ||
      it.full.toLowerCase().includes(term) ||
      it.career.toLowerCase().includes(term)
    )
  })).filter(sec=>sec.items.length);
  render(filtered);
}
q.addEventListener('input', doFilter);
clear.addEventListener('click', ()=>{ q.value=''; q.focus(); doFilter(); });

// Back to top
document.getElementById('topBtn').addEventListener('click', ()=>{
  window.scrollTo({top:0, behavior:'smooth'});
});
