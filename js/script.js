// ═══════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════
const TOTAL=6;let active=0;
const tabEls=document.querySelectorAll('.tab'),secEls=document.querySelectorAll('.section');
function go(n){
  active=n;
  tabEls.forEach((t,i)=>t.classList.toggle('active',i===n));
  secEls.forEach((s,i)=>s.classList.toggle('active',i===n));
  document.getElementById('prevBtn').disabled=n===0;
  const nb=document.getElementById('nextBtn');nb.disabled=n===TOTAL-1;nb.classList.toggle('next',n<TOTAL-1);
  window.scrollTo({top:0,behavior:'smooth'});
}
document.getElementById('tabs').addEventListener('click',e=>{const t=e.target.closest('.tab');if(t)go(+t.dataset.i)});
document.getElementById('prevBtn').addEventListener('click',()=>{if(active>0)go(active-1)});
document.getElementById('nextBtn').addEventListener('click',()=>{if(active<TOTAL-1)go(active+1)});

// ═══════════════════════════════════════
//  GEOGEBRA APPLET BUILDER
// ═══════════════════════════════════════
function buildGGB(containerId, verts, statsId, options = {}) {
  const [Ax,Ay] = verts[0], [Bx,By] = verts[1], [Cx,Cy] = verts[2];
  const showLevelLines = options.showLevelLines || false;

  // GeoGebra commands to build the construction
  const cmds = [
    // Triangle vertices (fixed)
    `A = (${Ax}, ${Ay})`,
    `B = (${Bx}, ${By})`,
    `C = (${Cx}, ${Cy})`,
    // Draggable point P (start at centroid)
    `P = (${((Ax+Bx+Cx)/3).toFixed(2)}, ${((Ay+By+Cy)/3).toFixed(2)})`,
    // Triangle sides
    `sideAB = Segment(A, B)`,
    `sideBC = Segment(B, C)`,
    `sideCA = Segment(C, A)`,
    // Triangle polygon (for fill)
    `tri = Polygon(A, B, C)`,
    // Perpendicular lines from P to each side
    `perpAB = PerpendicularLine(P, Line(A, B))`,
    `perpBC = PerpendicularLine(P, Line(B, C))`,
    `perpCA = PerpendicularLine(P, Line(C, A))`,
    // Perpendicular feet (intersection of perp line with side line)
    `F1 = Intersect(perpAB, Line(A, B))`,
    `F2 = Intersect(perpBC, Line(B, C))`,
    `F3 = Intersect(perpCA, Line(C, A))`,
    // Distance segments (dashed)
    `d1 = Segment(P, F1)`,
    `d2 = Segment(P, F2)`,
    `d3 = Segment(P, F3)`,
    // Distance values
    `h1 = Distance(P, Line(A, B))`,
    `h2 = Distance(P, Line(B, C))`,
    `h3 = Distance(P, Line(C, A))`,
    `S = h1 + h2 + h3`,
    // Text labels on the diagram
    `t1 = Text("h₁ = " + (round(h1 * 100) / 100), Midpoint(P, F1) + (0.15, 0.15))`,
    `t2 = Text("h₂ = " + (round(h2 * 100) / 100), Midpoint(P, F2) + (0.15, 0.15))`,
    `t3 = Text("h₃ = " + (round(h3 * 100) / 100), Midpoint(P, F3) + (0.15, 0.15))`,
    `tS = Text("Σ = " + (round(S * 100) / 100), P + (0.3, -0.4))`,
  ];

  // Styling - applied via JS API after construction
  function applyStyles(api) {
    // Triangle fill
    api.setColor('tri', 200, 200, 255);
    api.setVisible('tri', false); // hide the polygon label/fill, keep sides

    // Sides
    ['sideAB','sideBC','sideCA'].forEach(s => {
      api.setLineThickness(s, 3);
      api.setColor(s, 0, 100, 200);
      api.setLabelVisible(s, false);
    });

    // Point P
    api.setColor('P', 230, 60, 60);
    api.setPointSize('P', 7);
    api.setLabelVisible('P', true);

    // Distance segments
    const dNames = ['d1','d2','d3'];
    const dR = [0, 80, 220], dG = [150, 180, 160], dB = [255, 80, 40];
    dNames.forEach((d, i) => {
      api.setColor(d, dR[i], dG[i], dB[i]);
      api.setLineStyle(d, 2); // dashed
      api.setLineThickness(d, 2);
      api.setLabelVisible(d, false);
    });

    // Foot points
    const fNames = ['F1','F2','F3'];
    fNames.forEach((f, i) => {
      api.setColor(f, dR[i], dG[i], dB[i]);
      api.setPointSize(f, 4);
      api.setFixed(f, true);
      api.setLabelVisible(f, false);
    });

    // Fixed vertices
    ['A','B','C'].forEach(v => {
      api.setFixed(v, true);
      api.setLabelVisible(v, true);
    });

    // Text colors
    api.setColor('t1', 0, 120, 220);
    api.setColor('t2', 60, 160, 60);
    api.setColor('t3', 200, 140, 30);
    api.setColor('tS', 200, 80, 60);

    // Hide helper and numeric objects from view
    ['perpAB','perpBC','perpCA','h1','h2','h3','S'].forEach(n => {
      api.setVisible(n, false);
    });
  }

  // Compute bounds
  const allX = verts.map(v=>v[0]), allY = verts.map(v=>v[1]);
  const minX = Math.min(...allX)-1.5, maxX = Math.max(...allX)+1.5;
  const minY = Math.min(...allY)-1.2, maxY = Math.max(...allY)+1.5;

  const params = {
    appName: "classic",
    width: 1600,
    height: 700,
    showToolBar: false,
    showAlgebraInput: false,
    showMenuBar: false,
    enableLabelDrags: false,
    enableShiftDragZoom: false,
    enableRightClick: false,
    showResetIcon: true,
    language: "en",
    appletOnLoad: function(api) {
      console.log('[DEBUG] appletOnLoad fired for', containerId);
      // Set coordinate system
      api.setCoordSystem(minX, maxX, minY, maxY);
      api.setAxesVisible(1, true, true);
      api.setGridVisible(1, true);

      // Execute construction commands
      cmds.forEach(cmd => api.evalCommand(cmd));
      // Apply styles via JS API
      applyStyles(api);

      // Hide algebra panel — show only graphics view
      api.setPerspective("1");

      // Level lines for general triangle
      if (showLevelLines) {
        const alpha = -4/Math.sqrt(32) + 4/Math.sqrt(17);
        const beta = 1 - 4/Math.sqrt(32) - 1/Math.sqrt(17);
        const gamma = 20/Math.sqrt(32);

        for (let k = 0; k < 7; k++) {
          const vVal = 3.60 + k * 0.17;
          const c = vVal - gamma;
          const x0 = c / alpha;
          const x3 = (c - 3 * beta) / alpha;
          const name = 'lvL' + k;
          api.evalCommand(name + ' = Line((' + x0.toFixed(3) + ', 0), (' + x3.toFixed(3) + ', 3))');
          api.setColor(name, 255, 112, 67);
          api.setLineStyle(name, 3);
          api.setLineThickness(name, 1);
          api.setLabelVisible(name, false);
        }
      }

      // Update stats on point move
      function updateStats() {
        const h1v = api.getValue('h1');
        const h2v = api.getValue('h2');
        const h3v = api.getValue('h3');
        const sv = h1v + h2v + h3v;
        const se = document.getElementById(statsId);
        if (se) {
          const ns=['h₁','h₂','h₃','Σ'];
          const vs=[h1v.toFixed(2), h2v.toFixed(2), h3v.toFixed(2), sv.toFixed(2)];
          const cs=['#0096ff','#50b450','#dca028','#ffa726'];
          se.innerHTML = ns.map((n,i) =>
            `<div class="stat"${i===3?' style="border-color:rgba(255,167,38,0.3)"':''}><div class="stat-lbl" style="color:${cs[i]}">${n}</div><div class="stat-val" style="color:${i===3?'#ffa726':'#e0e6f0'}">${vs[i]}</div></div>`
          ).join('');
        }
      }

      api.registerUpdateListener(updateStats);
      updateStats();
    }
  };

  const applet = new GGBApplet(params, true);
  applet.inject(containerId);
}

// ═══════════════════════════════════════
//  BUILD THE THREE TRIANGLES
// ═══════════════════════════════════════
window.addEventListener('load', function() {
  // 1. Equilateral: side=6, A(-3,0), B(3,0), C(0, 3√3)
  const eqH = 3 * Math.sqrt(3);
  buildGGB('ggb_eq', [[-3, 0], [3, 0], [0, parseFloat(eqH.toFixed(4))]], 'statsEq');

  // 2. Isosceles: A(-3,0), B(3,0), C(0,4)
  buildGGB('ggb_iso', [[-3, 0], [3, 0], [0, 4]], 'statsIso');

  // 3. General: A(0,0), B(5,0), C(1,4)
  buildGGB('ggb_gen', [[0, 0], [5, 0], [1, 4]], 'statsGen', { showLevelLines: true });
});

document.getElementById('genShowCalc').addEventListener('click', () => {
  document.getElementById('genCalc').classList.toggle('hidden');
});

// ═══════════════════════════════════════
//  COLLINEARITY CHECKER
// ═══════════════════════════════════════
document.getElementById('checkColBtn').addEventListener('click', checkCollinearity);
document.querySelectorAll('.preset-btn').forEach(b => {
  b.addEventListener('click', () => {
    const p = b.dataset.pts.split(',').map(Number);
    document.getElementById('p1x').value = p[0]; document.getElementById('p1y').value = p[1];
    document.getElementById('p2x').value = p[2]; document.getElementById('p2y').value = p[3];
    document.getElementById('p3x').value = p[4]; document.getElementById('p3y').value = p[5];
    checkCollinearity();
  });
});

// ═══════════════════════════════════════
//  PRACTICE PROBLEM NAVIGATION
// ═══════════════════════════════════════
document.getElementById('pracSteps').addEventListener('click', e => {
  const b = e.target.closest('.step-btn');
  if (b) { pracCur = +b.dataset.i; renderPractice(); }
});

// ═══════════════════════════════════════
//  INITIALIZE
// ═══════════════════════════════════════
// Load saved language or default to Hebrew
const savedLang = (function() { try { return localStorage.getItem('viviani_lang'); } catch(e) { return null; } })();
applyLanguage(savedLang || 'he');
go(0);
