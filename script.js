/* ==================== data ==================== */

const structure = [
  {
    tag: "Cross-border structure",
    title: "One legal vehicle, many national benefit designs",
    solutions: [
      "The cross-border pension vehicle is the financing vehicle and legal entity, based in the home country, Belgium — regulated by Belgian legislation.",
      "Each host country has its own benefits design, regulated by the social and labour law of the country where employees are actually located.",
      "This split lets one fund serve many countries while still respecting local rules on how benefits are paid out."
    ]
  },
  {
    tag: "Legal form",
    title: "An OFP, regulated as an IORP",
    solutions: [
      "RESAVER is an Organisation for Financing Pensions (OFP) — an entity defined by Belgian law, responsible for managing and overseeing pension funds.",
      "It manages the collection, investment and distribution of pension contributions for the participants of its member organisations.",
      "In the EU, OFPs are a type of Institution for Occupational Retirement Provision (IORP), regulated by the IORP I and II Directives, which govern cross-border activity and require strict governance and prudential standards."
    ]
  },
  {
    tag: "Governance",
    title: "General Assembly, Board and daily management",
    solutions: [
      "The General Assembly is the supervisory body of the Fund, made up of the organisations affiliated to it.",
      "The Board of Directors is the main governance body, monitoring the Fund's operational activities.",
      "The Board is supported by the Daily Management Committee and the Pension Fund Manager, who handle day-to-day running of the Fund."
    ]
  },
  {
    tag: "Supervision",
    title: "Independent regulators, auditors and risk oversight",
    solutions: [
      "Supervised by the Belgian regulator (FSMA) and local regulators in each host country.",
      "Audited externally by KPMG and internally by Deloitte, with Lydian acting as compliance officer and Mercer as risk manager.",
      "The European Commission co-finances the Fund's operational expenses and future growth, and observes meetings of its governing bodies."
    ]
  },
  {
    tag: "Outsourced partners",
    title: "Global, publicly-tendered service providers",
    solutions: [
      "Assets: BlackRock as investment manager, State Street as asset depository.",
      "Liabilities and reporting: Mercer as actuarial function, BDO as accountant.",
      "Administration: Previnet as pension administrator and Member Service Centre.",
      "Consultants: Aon (technical expert), Lydian (legal expert) and local providers as needed."
    ]
  },
  {
    tag: "RESAVER Consortium",
    title: "An informal, advisory network of members",
    solutions: [
      "A voluntary association of participating organisations with an advisory role for the RESAVER Pension Fund.",
      "Members meet regularly to exchange information on cross-border pensions for researchers and to support the Fund's expansion.",
      "There are no fees payable and no liabilities associated with participating in the Consortium."
    ]
  }
];

const perspectives = [
  {
    id: "org", label: "Your organisation", level: "Employer view",
    items: [
      "Attract and retain the best researchers by facilitating their mobility.",
      "Offer an improved benefit package that supports a stronger employer brand.",
      "Set your own flexible contribution structure, tailored to your organisation.",
      "Benefit from a competitive, transparent fee structure with no hidden costs.",
      "Rely on a delegated solution: efficient management of your pension plan and low administrative burden.",
      "Gain the reassurance of strong protection and governance — RESAVER is regulated under the EU IORP II Directive."
    ]
  },
  {
    id: "staff", label: "Your staff", level: "Employee view",
    items: [
      "Keep accumulating pension rights continuously, even when moving between organisations and countries.",
      "Manage and monitor contributions easily through the myRESAVER member portal, with reduced admin at retirement.",
      "Benefit from immediate vesting of pension rights and fully transparent fees.",
      "Get a solution that is at least as tax efficient as local occupational pensions.",
      "Access high-quality investment options across both Life Style and Free Style pathways."
    ]
  },
  {
    id: "join", label: "Who can join", level: "Eligibility & roles",
    items: [
      "Researchers with employment contracts.",
      "Researchers coming from outside the EEA, typically on local contracts.",
      "Other employees who work for the same organisation as the researchers — participation isn't limited to researchers.",
      "The employer sets up the pension plan compliant with local regulation and contributes monthly on the employee's behalf.",
      "The employee (or their beneficiaries) is entitled to benefits at retirement, disability or death, and may also pay additional individual contributions from their salary."
    ]
  }
];

const categories = [
  {id:"defensive", label:"Life Cycle Defensive", color:"var(--cat-defensive)"},
  {id:"dynamic", label:"Life Cycle Dynamic", color:"var(--cat-dynamic)"},
  {id:"balanced", label:"Free Style Balanced", color:"var(--cat-balanced)"},
  {id:"traditional", label:"Free Style Traditional", color:"var(--cat-traditional)"},
  {id:"advanced", label:"Free Style Advanced", color:"var(--cat-advanced)"},
  {id:"guidance", label:"Guidance", color:"var(--cat-guidance-2)"}
];

const tools = [
  {name:"Life Cycle Defensive", desc:"A \u201Cdo it for me\u201D pathway built from Cash, Guaranteed Annuity and Variable Annuity, shifting automatically into a more conservative mix as retirement approaches.", cat:"defensive"},
  {name:"Life Cycle Dynamic", desc:"The same automatic glide-path logic, with a higher initial growth allocation for participants who want more time in growth assets before de-risking.", cat:"dynamic"},
  {name:"Free Style — Balanced Funds", desc:"Ready-made Low, Medium or High Risk portfolios — an \u201CI can do it\u201D option for a single fund matched to your risk appetite.", cat:"balanced"},
  {name:"Free Style — Traditional", desc:"Build your own mix from three building blocks: Money Market, Bonds and Equities.", cat:"traditional"},
  {name:"Free Style — Advanced", desc:"Specialist strategies for participants who want them: a Multi Absolute Return Fund and a Diversified Growth Fund.", cat:"advanced"},
  {name:"Default investment option", desc:"If no active choice is made, contributions follow a defensive glide path that shifts from equities and bonds into euro cash as retirement nears.", cat:"guidance"},
  {name:"Local restrictions may apply", desc:"Some investment options may be restricted according to the labour, social and tax law of the country where a participant is employed.", cat:"guidance"}
];

/* Illustrative example glide path (Defensive Life Style), approximated from the
   factsheet's "cash landing point" chart. Values are percentages summing to 100. */
const glideData = {
  segments: [
    {key:"eu", label:"EU Equities", color:"#2EA8D8"},
    {key:"world", label:"World Equities", color:"#C13584"},
    {key:"bonds", label:"Euro Aggr. Bonds", color:"#74893F"},
    {key:"em", label:"Emerging Market Equities", color:"#6B3FA0"},
    {key:"cash", label:"Euro Cash", color:"#0080A3"}
  ],
  bars: [
    {label:"40 years", values:{eu:3, world:51, bonds:39, em:4, cash:3}},
    {label:"20 years", values:{eu:3, world:51, bonds:39, em:4, cash:3}},
    {label:"15 years", values:{eu:3, world:50, bonds:40, em:4, cash:3}},
    {label:"10 years", values:{eu:3, world:48, bonds:42, em:4, cash:3}},
    {label:"5 years", values:{eu:3, world:30, bonds:33, em:4, cash:30}},
    {label:"At retirement", values:{eu:0, world:0, bonds:0, em:0, cash:100}}
  ]
};

/* ==================== render: accordion ==================== */
const accordionEl = document.getElementById('accordion');
if (accordionEl){
  structure.forEach((b) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.innerHTML = `
      <button class="accordion-trigger" aria-expanded="false">
        <span class="tag">${b.tag}</span>
        <h3>${b.title}</h3>
        <span class="plus" aria-hidden="true"></span>
      </button>
      <div class="accordion-panel">
        <div class="accordion-panel-inner">
          <p class="solutions-label">How it works</p>
          <ul class="solutions-list">
            ${b.solutions.map(s => `<li><svg viewBox="0 0 20 20"><path d="M7.5 13.4 4.1 10l-1.4 1.4L7.5 16.2 17.3 6.4l-1.4-1.4z"/></svg><span>${s}</span></li>`).join('')}
          </ul>
        </div>
      </div>`;
    const trigger = item.querySelector('.accordion-trigger');
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.accordion-trigger').setAttribute('aria-expanded','false');
      });
      if (!isOpen){
        item.classList.add('open');
        trigger.setAttribute('aria-expanded','true');
      }
    });
    accordionEl.appendChild(item);
  });
  accordionEl.querySelector('.accordion-item').classList.add('open');
  accordionEl.querySelector('.accordion-trigger').setAttribute('aria-expanded','true');
}

/* ==================== render: tabs ==================== */
const tabbarEl = document.getElementById('tabbar');
const tabpanelsEl = document.getElementById('tabpanels');
if (tabbarEl && tabpanelsEl){
  perspectives.forEach((r, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i===0 ? ' active' : '');
    btn.textContent = r.label;
    btn.setAttribute('role','tab');
    btn.dataset.target = r.id;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('panel-'+r.id).classList.add('active');
    });
    tabbarEl.appendChild(btn);

    const panel = document.createElement('div');
    panel.className = 'tab-panel' + (i===0 ? ' active' : '');
    panel.id = 'panel-'+r.id;
    panel.innerHTML = `
      <span class="level">${r.level}</span>
      <ul class="solutions-list">
        ${r.items.map(s => `<li><svg viewBox="0 0 20 20"><path d="M7.5 13.4 4.1 10l-1.4 1.4L7.5 16.2 17.3 6.4l-1.4-1.4z" fill="#0080A3"/></svg><span>${s}</span></li>`).join('')}
      </ul>`;
    tabpanelsEl.appendChild(panel);
  });
}

/* ==================== render: tools filter + grid ==================== */
const filterRowEl = document.getElementById('filterRow');
const gridEl = document.getElementById('toolsGrid');
if (filterRowEl && gridEl){
  const allChip = document.createElement('button');
  allChip.className = 'filter-chip active';
  allChip.textContent = 'All';
  allChip.dataset.cat = 'all';
  filterRowEl.appendChild(allChip);

  categories.forEach(c => {
    const chip = document.createElement('button');
    chip.className = 'filter-chip';
    chip.textContent = c.label;
    chip.dataset.cat = c.id;
    filterRowEl.appendChild(chip);
  });

  tools.forEach(t => {
    const cat = categories.find(c => c.id === t.cat);
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.dataset.cat = t.cat;
    card.style.setProperty('--cat-color', cat.color);
    card.innerHTML = `
      <h3>${t.name}</h3>
      <p>${t.desc}</p>
      <span class="cat-tag"><span class="dot"></span>${cat.label}</span>`;
    gridEl.appendChild(card);
  });

  filterRowEl.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    filterRowEl.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const cat = chip.dataset.cat;
    gridEl.querySelectorAll('.tool-card').forEach(card => {
      card.classList.toggle('hidden', cat !== 'all' && card.dataset.cat !== cat);
    });
  });
}

/* ==================== render: glide-path chart ==================== */
const legendEl = document.getElementById('chartLegend');
const chartEl = document.getElementById('glideChart');
if (legendEl && chartEl){
  legendEl.innerHTML = glideData.segments.map(s =>
    `<span><span class="swatch" style="background:${s.color}"></span>${s.label}</span>`
  ).join('');

  const wrap = document.createElement('div');
  wrap.className = 'chart-area-wrap';

  const tooltip = document.createElement('div');
  tooltip.className = 'glide-tooltip';
  tooltip.setAttribute('role','status');

  const bars = document.createElement('div');
  bars.className = 'chart-area';

  glideData.bars.forEach(bar => {
    const col = document.createElement('div');
    col.className = 'glide-bar-col';

    const barEl = document.createElement('div');
    barEl.className = 'glide-bar';
    barEl.tabIndex = 0;
    barEl.setAttribute('role','img');
    const summary = glideData.segments
      .map(s => `${s.label} ${bar.values[s.key]}%`)
      .filter((_, i) => bar.values[glideData.segments[i].key] > 0)
      .join(', ');
    barEl.setAttribute('aria-label', `${bar.label}: ${summary}`);

    glideData.segments.forEach(s => {
      const pct = bar.values[s.key] || 0;
      if (pct <= 0) return;
      const seg = document.createElement('div');
      seg.className = 'glide-seg';
      seg.style.height = pct + '%';
      seg.style.background = s.color;
      barEl.appendChild(seg);
    });

    const showTip = () => {
      tooltip.innerHTML = `<strong>${bar.label}</strong><br>` + glideData.segments
        .filter(s => (bar.values[s.key]||0) > 0)
        .map(s => `${s.label}: ${bar.values[s.key]}%`)
        .join('<br>');
      const colRect = col.getBoundingClientRect();
      const wrapRect = wrap.getBoundingClientRect();
      tooltip.style.left = (colRect.left - wrapRect.left + colRect.width/2) + 'px';
      tooltip.style.top = (colRect.top - wrapRect.top - 8) + 'px';
      tooltip.classList.add('visible');
    };
    const hideTip = () => tooltip.classList.remove('visible');

    barEl.addEventListener('mouseenter', showTip);
    barEl.addEventListener('mouseleave', hideTip);
    barEl.addEventListener('focus', showTip);
    barEl.addEventListener('blur', hideTip);
    barEl.addEventListener('click', showTip);

    const label = document.createElement('span');
    label.className = 'glide-bar-label';
    label.textContent = bar.label;

    col.appendChild(barEl);
    col.appendChild(label);
    bars.appendChild(col);
  });

  wrap.appendChild(bars);
  wrap.appendChild(tooltip);
  chartEl.appendChild(wrap);
}

/* ==================== video overlay ==================== */
const videoPlayer = document.getElementById('videoPlayer');
const videoOverlay = document.getElementById('videoOverlay');
if (videoPlayer && videoOverlay){
  videoOverlay.addEventListener('click', () => { videoPlayer.play(); });
  videoPlayer.addEventListener('play', () => { videoOverlay.classList.add('hidden'); });
  videoPlayer.addEventListener('pause', () => { videoOverlay.classList.remove('hidden'); });
  videoPlayer.addEventListener('ended', () => { videoOverlay.classList.remove('hidden'); });
}

/* ==================== header: nav toggle + search toggle ==================== */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav){
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

const searchToggle = document.getElementById('searchToggle');
const searchBox = document.getElementById('searchBox');
if (searchToggle && searchBox){
  searchToggle.addEventListener('click', () => {
    const isOpen = searchBox.classList.toggle('open');
    if (isOpen) searchBox.querySelector('input').focus();
  });
}
