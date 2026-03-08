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
        // V(x,y) = αx + βy + γ where:
        const alpha = -4/Math.sqrt(32) + 4/Math.sqrt(17);  // ≈ 0.263
        const beta = 1 - 4/Math.sqrt(32) - 1/Math.sqrt(17); // ≈ 0.050
        const gamma = 20/Math.sqrt(32);                      // ≈ 3.536
        // V ranges from ~3.54 (at A) to ~4.85 (at B) inside the triangle
        // Lines are steep (slope ≈ -5.2), so use y as free variable:
        // αx + βy = c  →  x = (c - βy) / α

        for (let k = 0; k < 7; k++) {
          const vVal = 3.60 + k * 0.17;
          const c = vVal - gamma;
          const x0 = c / alpha;              // at y=0
          const x3 = (c - 3 * beta) / alpha; // at y=3
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
        console.log('[DEBUG] updateStats called for', statsId);
        const h1v = api.getValue('h1');
        const h2v = api.getValue('h2');
        const h3v = api.getValue('h3');
        const sv = h1v + h2v + h3v;
        console.log('[DEBUG] h1=', h1v, 'h2=', h2v, 'h3=', h3v);
        const se = document.getElementById(statsId);
        console.log('[DEBUG] stats element:', statsId, se ? 'FOUND' : 'NOT FOUND');
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
// Wait for GeoGebra to be ready
window.addEventListener('load', function() {
  console.log('[DEBUG] window load fired');
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
function checkCol(){
  const g=id=>parseFloat(document.getElementById(id).value)||0;
  const pts=[[g('p1x'),g('p1y')],[g('p2x'),g('p2y')],[g('p3x'),g('p3y')]];
  const[A,B,C]=pts;
  const v1=[B[0]-A[0],B[1]-A[1]],v2=[C[0]-A[0],C[1]-A[1]];
  const cross=v1[0]*v2[1]-v1[1]*v2[0];
  const isColl=Math.abs(cross)<1e-9;
  document.getElementById('colResult').innerHTML=`
    <div class="card" style="font-size:14px;line-height:1.9;animation:fadeIn 0.3s ease">
      <div style="font-family:var(--mono);font-size:13px;color:var(--text2);margin-bottom:8px;direction:ltr;text-align:left">
        AB = (${v1[0].toFixed(2)}, ${v1[1].toFixed(2)})<br>
        AC = (${v2[0].toFixed(2)}, ${v2[1].toFixed(2)})<br>
        AB × AC = (${v1[0].toFixed(2)})(${v2[1].toFixed(2)}) − (${v1[1].toFixed(2)})(${v2[0].toFixed(2)}) = <strong style="color:${isColl?'var(--err)':'var(--ok)'}">${cross.toFixed(4)}</strong>
      </div>
      <div class="theorem-box ${isColl?'err':'ok'}">
        ${isColl?'<strong>⚠ קולינאריות!</strong> שלוש הנקודות על ישר אחד — זהו קו גובה. <strong>לא ניתן להסיק CVS.</strong>':'<strong>✓ לא קולינאריות!</strong> אם V שווה בשלוש הנקודות → לפי משפט 1 → <strong>CVS</strong> → המשולש <strong>שווה צלעות</strong>.'}
      </div>
    </div>`;
}
document.getElementById('checkColBtn').addEventListener('click',checkCol);
document.querySelectorAll('.preset-btn').forEach(b=>{
  b.addEventListener('click',()=>{
    const p=b.dataset.pts.split(',').map(Number);
    document.getElementById('p1x').value=p[0];document.getElementById('p1y').value=p[1];
    document.getElementById('p2x').value=p[2];document.getElementById('p2y').value=p[3];
    document.getElementById('p3x').value=p[4];document.getElementById('p3y').value=p[5];
    checkCol();
  });
});

// ═══════════════════════════════════════
//  TRUE / FALSE
// ═══════════════════════════════════════
(function(){
  const qs=[
    {q:"במשולש שווה צלעות, סכום המרחקים מהצלעות של כל נקודה פנימית שווה לגובה.",a:true,e:"זהו בדיוק משפט ויויאני: h₁ + h₂ + h₃ = H."},
    {q:"פונקציית סכום המרחקים V(x,y) במשולש היא תמיד פונקציה ריבועית.",a:false,e:"V היא תמיד לינארית: V(x,y) = αx + βy + γ, כיוון שכל מרחק הוא ביטוי לינארי בתוך המשולש."},
    {q:"אם V שווה בשתי נקודות פנימיות של משולש, ניתן להסיק שהמשולש שווה צלעות.",a:false,e:"שתי נקודות תמיד על ישר אחד — קו גובה. צריך 3 נקודות לא קולינאריות."},
    {q:"במשולש שווה שוקיים (שאינו שווה צלעות), קווי הגובה מנוצבים לציר הסימטריה.",a:true,e:"לפי המסקנה: סימטריית שיקוף + אין CVS → קווי הגובה מנוצבים לציר."},
    {q:"אם שלוש נקודות פנימיות עם V שווה הן קולינאריות, המשולש בהכרח לא שווה צלעות.",a:false,e:"גם במשולש שווה צלעות V קבועה בכל מקום, כולל 3 נקודות קולינאריות. קולינאריות לא שוללת שווה צלעות — היא פשוט לא מוכיחה."},
    {q:"הקשר ויויאני–תכנות לינארית: משטחי הרווח מקבילים לסימפלקס אם ורק אם המשולש שווה צלעות.",a:true,e:"(a₁,a₂,a₃) ∥ (1,1,1) ⟺ a₁=a₂=a₃ ⟺ שווה צלעות."},
    {q:"במשולש כללי, V קבועה לאורך ישרים מקבילים בתוך המשולש.",a:true,e:"קווי הרמה של V(x,y) = αx + βy + γ הם ישרים מקבילים — אלו קווי הגובה."},
    {q:"ההוכחה של משפט ויויאני מבוססת על נוסחת הרון.",a:false,e:"ההוכחה הקלסית מבוססת על פירוק שטח המשולש ל-3 משולשים קטנים (בסיס × גובה / 2), לא על הרון."},
  ];
  let ans=0,cor=0;
  document.getElementById('tfQuiz').innerHTML=qs.map((q,i)=>`<div class="q-item" id="tf${i}"><div class="q-text"><span class="q-num">${i+1}.</span> ${q.q}</div><div id="tfB${i}" style="display:flex;gap:8px"><button class="btn btn-ok" onclick="tfA(${i},true)">נכון ✓</button><button class="btn" style="background:var(--err-dim);color:var(--err);border-color:rgba(239,83,80,0.25)" onclick="tfA(${i},false)">לא נכון ✗</button></div><div id="tfF${i}" class="hidden"></div></div>`).join('');
  window.tfA=function(i,v){const q=qs[i],ok=v===q.a,fb=document.getElementById('tfF'+i),btns=document.getElementById('tfB'+i);if(!fb.classList.contains('hidden'))return;ans++;if(ok)cor++;btns.innerHTML=`<span style="font-weight:600;color:${ok?'var(--ok)':'var(--err)'}">${ok?'✓ נכון!':'✗ שגוי — התשובה: '+(q.a?'נכון':'לא נכון')}</span>`;fb.classList.remove('hidden');fb.innerHTML=`<div class="feedback ${ok?'fb-ok':'fb-err'}">${q.e}</div>`;if(ans>=qs.length){const sc=document.getElementById('tfScore');sc.classList.remove('hidden');const p=Math.round(cor/qs.length*100);sc.innerHTML=`<div class="score-box"><div style="font-size:36px;font-weight:800;color:${p>=75?'var(--ok)':p>=50?'var(--warn)':'var(--err)'}">${cor}/${qs.length}</div><div style="font-size:13px;color:var(--text2);margin-top:4px">${p>=75?'מצוין!':p>=50?'טוב — חזרו על החומר':'כדאי לחזור ולנסות שוב'}</div></div>`}};
})();

// ═══════════════════════════════════════
//  MULTIPLE CHOICE
// ═══════════════════════════════════════
(function(){
  const qs=[
    {q:"מהו סכום המרחקים מהצלעות של נקודה פנימית במשולש שווה צלעות שאורך צלעו 10?",o:["5","5√3","10","10√3"],c:1,e:"גובה = (10√3)/2 = 5√3. לפי ויויאני, הסכום שווה לגובה."},
    {q:"V(x,y) = 3x − 2y + 7 מוגדרת על משולש. מהו שיפוע קווי הגובה?",o:["3/2","−3/2","2/3","−2/3"],c:0,e:"קווי הגובה: 3x − 2y = const → y = (3/2)x − const. שיפוע = 3/2."},
    {q:"נתון V(1,0) = V(0,1) = V(2,2) = 7 במשולש. מה המסקנה?",o:["אי אפשר להסיק — נקודות קולינאריות","CVS → שווה צלעות","V=7 בנקודות אלו אך לא בכל מקום","חסר מידע"],c:1,e:"בדיקה: (−1,1)×(1,2) = −2−1 = −3 ≠ 0 → לא קולינאריות → CVS → שווה צלעות."},
    {q:"במשולש שווה שוקיים עם בסיס על ציר x וציר סימטריה על ציר y, מה כיוון קווי הגובה?",o:["אנכי (מקביל לציר y)","אופקי (מקביל לציר x)","באלכסון 45°","תלוי באורכי הצלעות"],c:1,e:"ציר הסימטריה הוא y. לפי המסקנה, קווי הגובה מנוצבים לציר → אופקיים."},
    {q:"לאילו מהמשולשים הבאים יש תכונת CVS?",o:["משולש ישר זווית עם ניצבים 3,4","משולש שווה צלעות עם צלע 5","משולש שווה שוקיים עם שוקיים 5 ובסיס 6","לכולם"],c:1,e:"רק למשולש שווה צלעות. CVS ⟺ שווה צלעות (משפט 1)."},
    {q:"אם V(x,y) = 2x + y + 8, מצאו את כל הנקודות בתוך המשולש שבהן V = 12.",o:["נקודה יחידה","קטע על הישר 2x + y = 4","כל הנקודות","אין נקודה כזו"],c:1,e:"V = 12 → 2x + y + 8 = 12 → 2x + y = 4. זהו ישר, וחיתוכו עם המשולש נותן קטע."},
  ];
  let ans=0,cor=0;
  document.getElementById('mcQuiz').innerHTML=qs.map((q,i)=>`<div class="q-item" id="mc${i}"><div class="q-text"><span class="q-num">${i+1}.</span> ${q.q}</div><div class="mc-opts" id="mcO${i}">${q.o.map((o,j)=>`<button class="mc-opt" data-q="${i}" data-o="${j}"><span style="color:var(--text3);margin-left:6px;font-weight:600">${String.fromCharCode(1488+j)}.</span> ${o}</button>`).join('')}</div><div id="mcF${i}" class="hidden"></div></div>`).join('');
  document.getElementById('mcQuiz').addEventListener('click',e=>{const b=e.target.closest('.mc-opt');if(!b)return;const qi=+b.dataset.q,oi=+b.dataset.o,q=qs[qi];const fb=document.getElementById('mcF'+qi);if(!fb.classList.contains('hidden'))return;ans++;const ok=oi===q.c;if(ok)cor++;document.getElementById('mcO'+qi).querySelectorAll('.mc-opt').forEach((o,j)=>{o.style.cursor='default';o.style.pointerEvents='none';if(j===q.c){o.style.background='var(--ok-dim)';o.style.borderColor='var(--ok)';o.style.color='var(--ok)'}else if(j===oi&&!ok){o.style.background='var(--err-dim)';o.style.borderColor='var(--err)';o.style.color='var(--err)'}else{o.style.opacity='0.35'}});fb.classList.remove('hidden');fb.innerHTML=`<div class="feedback ${ok?'fb-ok':'fb-err'}">${ok?'✓ ':'✗ '}${q.e}</div>`;if(ans>=qs.length){const sc=document.getElementById('mcScore');sc.classList.remove('hidden');const p=Math.round(cor/qs.length*100);sc.innerHTML=`<div class="score-box"><div style="font-size:36px;font-weight:800;color:${p>=75?'var(--ok)':p>=50?'var(--warn)':'var(--err)'}">${cor}/${qs.length}</div><div style="font-size:13px;color:var(--text2);margin-top:4px">${p>=75?'מצוין!':p>=50?'טוב, חזרו':'כדאי לחזור על החומר'}</div></div>`}});
})();

// ═══════════════════════════════════════
//  PRACTICE PROBLEMS
// ═══════════════════════════════════════
(function(){
  const probs=[
    {title:"א. משולש ישר זווית",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>שאלה:</strong> משולש ישר זווית A(0,0), B(6,0), C(0,8).<br>א. חשבו V(x,y) לנקודה פנימית.<br>ב. מהו כיוון קווי הגובה?<br>ג. חשבו V(2,2) ו-V(3,1). האם שווים?<div id="sol0" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>א.</strong> AB: y=0 → h₁=y. AC: x=0 → h₂=x. BC: 8x+6y−48=0 → h₃=(48−8x−6y)/10.<br><span style="font-family:var(--mono);color:var(--text)">V(x,y) = x + y + (48−8x−6y)/10 = 0.2x + 0.4y + 4.8</span><br><br><strong>ב.</strong> 0.2x + 0.4y = const → y = −0.5x + const. <strong>שיפוע −1/2</strong>.<br><br><strong>ג.</strong> V(2,2) = 0.4+0.8+4.8 = 6.0. V(3,1) = 0.6+0.4+4.8 = 5.8. <strong style="color:var(--err)">לא שווים!</strong> (אין CVS, צלעות 6,8,10).</div></div><button class="btn btn-ok" style="margin-top:12px" onclick="document.getElementById('sol0').classList.toggle('hidden')">הצג/הסתר פתרון</button></div>`},
    {title:"ב. הוכחה: שלוש נקודות",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>שאלה:</strong> נתון שבמשולש כלשהו V(0,0) = V(3,1) = V(1,2) = 5.<br>א. הוכיחו שהמשולש שווה צלעות.<br>ב. אם שני קודקודים הם (−1,−2) ו-(5,−2), מצאו את הקודקוד השלישי.<div id="sol1" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>א.</strong> בדיקת קולינאריות: AB=(3,1), AC=(1,2). מכפלה: 3·2−1·1 = 5 ≠ 0.<br><strong>→ לא קולינאריות + V שווה → CVS → שווה צלעות.</strong><br><br><strong>ב.</strong> אורך הבסיס: d = √(36+0) = 6. צלע = 6.<br>נקודה (x,y) עם מרחק 6 משני הקודקודים:<br><span style="font-family:var(--mono);font-size:13px">(x+1)²+(y+2)²=36, (x−5)²+(y+2)²=36</span><br>חיסור → 12x−72=0 → x=2. הצבה → 9+(y+2)²=36 → y+2=±3√3.<br><strong style="color:var(--eq)">קודקוד שלישי: (2, −2+3√3) ≈ (2, 3.20)</strong> (מעל הבסיס).</div></div><button class="btn btn-ok" style="margin-top:12px" onclick="document.getElementById('sol1').classList.toggle('hidden')">הצג/הסתר פתרון</button></div>`},
    {title:"ג. ניתוח V נתון",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>שאלה:</strong> במשולש מסוים, V(x,y) = −x + 2y + 6.<br>א. האם יש CVS?<br>ב. מצאו את כל הנקודות שבהן V = 8.<br>ג. האם ייתכן שנקודות (1,1), (3,2), (−1,0) כולן נותנות V = 7?<div id="sol2" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>א.</strong> α=−1, β=2 → לא אפס → <strong style="color:var(--err)">אין CVS</strong>. המשולש לא שווה צלעות.<br><br><strong>ב.</strong> V=8: −x+2y+6=8 → −x+2y=2 → <strong style="color:var(--eq)">y = x/2 + 1</strong>. הקבוצה היא קטע על ישר זה בתוך המשולש.<br><br><strong>ג.</strong> V(1,1)=−1+2+6=7 ✓. V(3,2)=−3+4+6=7 ✓. V(−1,0)=1+0+6=7 ✓.<br>כולן נותנות 7, אז הן חייבות להיות על הישר −x+2y=1.<br>בדיקה: (1,1): −1+2=1 ✓. (3,2): −3+4=1 ✓. (−1,0): 1+0=1 ✓.<br><strong>כן, אבל הן קולינאריות</strong> (כולן על y=x/2+1/2). זה עקבי — אין CVS.</div></div><button class="btn btn-ok" style="margin-top:12px" onclick="document.getElementById('sol2').classList.toggle('hidden')">הצג/הסתר פתרון</button></div>`},
    {title:"ד. השוואת משולשים",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>שאלה:</strong> שני משולשים:<br>• △₁: A(0,0), B(4,0), C(2, 2√3) — שווה צלעות, צלע 4.<br>• △₂: A(0,0), B(4,0), C(2, 5) — שווה שוקיים, שוקיים ≈ 5.39.<br>א. חשבו V בנקודת הכובד של כל משולש.<br>ב. האם V בנקודת הכובד שווה ל-V בנקודה אחרת ב-△₂?<div id="sol3" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>△₁ (שווה צלעות):</strong> H = (4√3)/2 = 2√3 ≈ 3.46. כובד: (2, 2√3/3) ≈ (2, 1.15).<br>V = H = 2√3 ≈ 3.46 <strong>בכל נקודה</strong> (CVS!).<br><br><strong>△₂ (שווה שוקיים):</strong> כובד: ((0+4+2)/3, (0+0+5)/3) = (2, 5/3).<br>AB: y=0 → h₁=5/3. BC: 5x+2y−20=0 → h₂=(20−10−10/3)/√29 = (20/3)/√29 ≈ 1.24.<br>CA: 5x−2y=0 → h₃=(10−10/3)/√29 = (20/3)/√29 ≈ 1.24.<br>V(כובד) ≈ 5/3 + 1.24 + 1.24 ≈ <strong>4.14</strong>.<br><br><strong>ב.</strong> ניקח נקודה אחרת, למשל (2, 1): h₁=1, h₂=(20−10−2)/√29≈1.49, h₃=(10−2)/√29≈1.49.<br>V(2,1) ≈ 1+1.49+1.49 = <strong>3.97 ≠ 4.14</strong>. אכן V משתנה — <strong style="color:var(--err)">אין CVS</strong>.</div></div><button class="btn btn-ok" style="margin-top:12px" onclick="document.getElementById('sol3').classList.toggle('hidden')">הצג/הסתר פתרון</button></div>`}
  ];
  const stC=document.getElementById('pracSteps'),coC=document.getElementById('pracContent');let cur=0;
  function rend(){stC.innerHTML=probs.map((p,i)=>`<button class="step-btn ${i===cur?'active':''}" data-i="${i}">${p.title}</button>`).join('');coC.innerHTML=probs[cur].html}
  stC.addEventListener('click',e=>{const b=e.target.closest('.step-btn');if(b){cur=+b.dataset.i;rend()}});rend();
})();

go(0);
