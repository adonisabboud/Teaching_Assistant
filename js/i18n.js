// ═══════════════════════════════════════
//  INTERNATIONALIZATION (i18n)
//  Supports: Hebrew (he), English (en), Arabic (ar)
// ═══════════════════════════════════════

const TRANSLATIONS = {
  // ── Header ──
  heroTitle: {
    he: 'משפט ויויאני <span>במשולשים</span>',
    en: "Viviani's Theorem <span>in Triangles</span>",
    ar: 'مبرهنة فيفياني <span>في المثلثات</span>'
  },
  heroSub: {
    he: 'שווה צלעות · שווה שוקיים · כללי — יחידת לימוד אינטראקטיבית לשנה א׳',
    en: 'Equilateral · Isosceles · General — Interactive Learning Unit for Year 1',
    ar: 'متساوي الأضلاع · متساوي الساقين · عام — وحدة تعليمية تفاعلية للسنة الأولى'
  },

  // ── Tabs ──
  tabEq: { he: '△ שווה צלעות', en: '△ Equilateral', ar: '△ متساوي الأضلاع' },
  tabIso: { he: '△ שווה שוקיים', en: '△ Isosceles', ar: '△ متساوي الساقين' },
  tabGen: { he: '△ כללי', en: '△ General', ar: '△ عام' },
  tabTest: { he: '🔬 מבחן 3 נקודות', en: '🔬 3-Point Test', ar: '🔬 اختبار 3 نقاط' },
  tabQuiz: { he: '✓✗ בוחן', en: '✓✗ Quiz', ar: '✓✗ اختبار' },
  tabPractice: { he: '✦ תרגול', en: '✦ Practice', ar: '✦ تمارين' },

  // ── Navigation ──
  prevBtn: { he: '→ הקודם', en: '← Previous', ar: '→ السابق' },
  nextBtn: { he: 'הבא ←', en: 'Next →', ar: 'التالي ←' },

  // ── Section 0: Equilateral ──
  s0Badge: { he: '1', en: '1', ar: '1' },
  s0Title: {
    he: 'משולש שווה צלעות — משפט ויויאני',
    en: "Equilateral Triangle — Viviani's Theorem",
    ar: 'مثلث متساوي الأضلاع — مبرهنة فيفياني'
  },
  s0Theorem: {
    he: '<strong>משפט ויויאני:</strong> סכום המרחקים מצלעות משולש שווה צלעות של כל נקודה פנימית הוא <strong>קבוע</strong>, ושווה לגובה H של המשולש.',
    en: "<strong>Viviani's Theorem:</strong> The sum of distances from the sides of an equilateral triangle for any interior point is <strong>constant</strong>, and equals the height H of the triangle.",
    ar: '<strong>مبرهنة فيفياني:</strong> مجموع المسافات من أضلاع مثلث متساوي الأضلاع لأي نقطة داخلية هو <strong>ثابت</strong>، ويساوي الارتفاع H للمثلث.'
  },
  s0Desc: {
    he: 'גררו את הנקודה <strong style="color:var(--err)">P</strong> בתוך המשולש. שימו לב שהסכום <strong>לא משתנה</strong> — לא משנה לאן תזיזו!',
    en: 'Drag point <strong style="color:var(--err)">P</strong> inside the triangle. Notice that the sum <strong>does not change</strong> — no matter where you move it!',
    ar: 'اسحب النقطة <strong style="color:var(--err)">P</strong> داخل المثلث. لاحظ أن المجموع <strong>لا يتغير</strong> — بغض النظر عن مكان سحبها!'
  },
  s0Why: {
    he: '💡 <strong>למה זה עובד?</strong> חברו P ל-A, B, C — נוצרים 3 משולשים. סכום שטחיהם = שטח המשולש המקורי:<div class="math">½·a·h₁ + ½·a·h₂ + ½·a·h₃ = ½·a·H</div>מצמצמים ב-½a ומקבלים: <strong style="color:var(--text)">h₁ + h₂ + h₃ = H</strong>',
    en: '💡 <strong>Why does this work?</strong> Connect P to A, B, C — 3 triangles are formed. Their area sum = the original triangle area:<div class="math">½·a·h₁ + ½·a·h₂ + ½·a·h₃ = ½·a·H</div>Cancel ½a to get: <strong style="color:var(--text)">h₁ + h₂ + h₃ = H</strong>',
    ar: '💡 <strong>لماذا ينجح هذا؟</strong> صِل P بـ A و B و C — تتشكل 3 مثلثات. مجموع مساحاتها = مساحة المثلث الأصلي:<div class="math">½·a·h₁ + ½·a·h₂ + ½·a·h₃ = ½·a·H</div>نختصر ½a فنحصل على: <strong style="color:var(--text)">h₁ + h₂ + h₃ = H</strong>'
  },

  // ── Section 1: Isosceles ──
  s1Title: {
    he: 'משולש שווה שוקיים — מה משתנה?',
    en: 'Isosceles Triangle — What Changes?',
    ar: 'مثلث متساوي الساقين — ما الذي يتغير؟'
  },
  s1Theorem: {
    he: '<strong>שאלה מפתח:</strong> האם משפט ויויאני מתקיים גם במשולש שווה שוקיים שאינו שווה צלעות?<br><strong>תשובה:</strong> לא! הסכום <strong>משתנה</strong> כשמזיזים את P, אבל הוא <strong>קבוע על ישרים מקבילים</strong>.',
    en: "<strong>Key Question:</strong> Does Viviani's theorem hold for an isosceles triangle that is not equilateral?<br><strong>Answer:</strong> No! The sum <strong>changes</strong> when moving P, but it is <strong>constant on parallel lines</strong>.",
    ar: '<strong>سؤال رئيسي:</strong> هل تنطبق مبرهنة فيفياني على مثلث متساوي الساقين غير متساوي الأضلاع؟<br><strong>الجواب:</strong> لا! المجموع <strong>يتغير</strong> عند تحريك P، لكنه <strong>ثابت على خطوط متوازية</strong>.'
  },
  s1Desc: {
    he: 'משולש שווה שוקיים: בסיס 6, גובה 4 — קודקודים A(−3,0), B(3,0), C(0,4).<br>גררו את P וצפו: הסכום <strong>כבר לא קבוע!</strong>',
    en: 'Isosceles triangle: base 6, height 4 — vertices A(−3,0), B(3,0), C(0,4).<br>Drag P and observe: the sum is <strong>no longer constant!</strong>',
    ar: 'مثلث متساوي الساقين: قاعدة 6، ارتفاع 4 — رؤوس A(−3,0)، B(3,0)، C(0,4).<br>اسحب P ولاحظ: المجموع <strong>لم يعد ثابتاً!</strong>'
  },
  s1Why: {
    he: '⚡ <strong>מדוע הסכום משתנה?</strong> צלעות המשולש באורכים שונים (6, 5, 5), לכן פונקציית סכום המרחקים V(x,y) = αx + βy + γ עם α ≠ 0 או β ≠ 0. הסכום קבוע רק על קווי גובה — ישרים מקבילים בכיוון מסוים.',
    en: '⚡ <strong>Why does the sum change?</strong> The triangle sides have different lengths (6, 5, 5), so the distance sum function V(x,y) = αx + βy + γ with α ≠ 0 or β ≠ 0. The sum is constant only on level lines — parallel lines in a certain direction.',
    ar: '⚡ <strong>لماذا يتغير المجموع؟</strong> أضلاع المثلث بأطوال مختلفة (6، 5، 5)، لذا دالة مجموع المسافات V(x,y) = αx + βy + γ حيث α ≠ 0 أو β ≠ 0. المجموع ثابت فقط على خطوط المستوى — خطوط متوازية في اتجاه معين.'
  },
  s1Symmetry: {
    he: '🪞 <strong>סימטריית שיקוף:</strong> למשולש שווה שוקיים ציר סימטריה (ציר y). לפי המסקנה: אין CVS, אבל קווי הגובה <strong>מנוצבים לציר הסימטריה</strong> — כלומר הם אופקיים!',
    en: '🪞 <strong>Reflection Symmetry:</strong> An isosceles triangle has a symmetry axis (y-axis). By the corollary: no CVS, but the level lines are <strong>perpendicular to the symmetry axis</strong> — i.e., they are horizontal!',
    ar: '🪞 <strong>تماثل الانعكاس:</strong> للمثلث متساوي الساقين محور تماثل (محور y). وفقاً للنتيجة: لا يوجد CVS، لكن خطوط المستوى <strong>عمودية على محور التماثل</strong> — أي أنها أفقية!'
  },

  // ── Section 2: General ──
  s2Title: {
    he: 'משולש כללי — חישוב פונקציית סכום המרחקים וקווי גובה',
    en: 'General Triangle — Computing the Distance Sum Function and Level Lines',
    ar: 'مثلث عام — حساب دالة مجموع المسافات وخطوط المستوى'
  },
  s2Theorem: {
    he: '<strong>משפט 1:</strong> לכל משולש, פונקציית סכום המרחקים V(x,y) היא <strong>פונקציה לינארית</strong>. התנאים הבאים שקולים:<br>א. למשולש יש CVS &nbsp;⟺&nbsp; ב. V שווה ב-3 נקודות לא קולינאריות &nbsp;⟺&nbsp; ג. המשולש שווה צלעות.',
    en: '<strong>Theorem 1:</strong> For any triangle, the distance sum function V(x,y) is a <strong>linear function</strong>. The following conditions are equivalent:<br>a. The triangle has CVS &nbsp;⟺&nbsp; b. V is equal at 3 non-collinear points &nbsp;⟺&nbsp; c. The triangle is equilateral.',
    ar: '<strong>مبرهنة 1:</strong> لأي مثلث، دالة مجموع المسافات V(x,y) هي <strong>دالة خطية</strong>. الشروط التالية متكافئة:<br>أ. للمثلث CVS &nbsp;⟺&nbsp; ب. V متساوية عند 3 نقاط غير متحاذية &nbsp;⟺&nbsp; ج. المثلث متساوي الأضلاع.'
  },
  s2Desc: {
    he: 'משולש כללי: A(0,0), B(5,0), C(1,4). גררו P — צפו בסכום ובקווי הגובה.',
    en: 'General triangle: A(0,0), B(5,0), C(1,4). Drag P — observe the sum and level lines.',
    ar: 'مثلث عام: A(0,0)، B(5,0)، C(1,4). اسحب P — لاحظ المجموع وخطوط المستوى.'
  },
  s2ShowCalc: {
    he: 'הצג חישוב V(x,y)',
    en: 'Show V(x,y) calculation',
    ar: 'إظهار حساب V(x,y)'
  },
  s2CalcContent: {
    he: `<strong>משוואות הצלעות:</strong>
      <div style="font-family:var(--mono);font-size:13px;color:var(--text2);margin:6px 0;direction:ltr;text-align:left">
        AB: y = 0 → h₁ = y<br>
        BC: 4x + 4y − 20 = 0 → h₂ = (20 − 4x − 4y) / √32<br>
        CA: 4x − y = 0 → h₃ = (4x − y) / √17
      </div>
      <strong>סכום:</strong>
      <div class="math" style="color:var(--gen)">V(x,y) = y + (20−4x−4y)/√32 + (4x−y)/√17</div>
      <strong>פישוט:</strong>
      <div class="math" style="color:var(--gen)">V(x,y) = (−4/√32 + 4/√17)x + (1 − 4/√32 − 1/√17)y + 20/√32</div>
      <div style="color:var(--text2);font-size:13px;margin-top:6px">
        המקדמים ≠ 0 → <strong style="color:var(--err)">אין CVS</strong>. צלעות: 5, √32 ≈ 5.66, √17 ≈ 4.12 — לא שווה צלעות.
      </div>`,
    en: `<strong>Side equations:</strong>
      <div style="font-family:var(--mono);font-size:13px;color:var(--text2);margin:6px 0;direction:ltr;text-align:left">
        AB: y = 0 → h₁ = y<br>
        BC: 4x + 4y − 20 = 0 → h₂ = (20 − 4x − 4y) / √32<br>
        CA: 4x − y = 0 → h₃ = (4x − y) / √17
      </div>
      <strong>Sum:</strong>
      <div class="math" style="color:var(--gen)">V(x,y) = y + (20−4x−4y)/√32 + (4x−y)/√17</div>
      <strong>Simplified:</strong>
      <div class="math" style="color:var(--gen)">V(x,y) = (−4/√32 + 4/√17)x + (1 − 4/√32 − 1/√17)y + 20/√32</div>
      <div style="color:var(--text2);font-size:13px;margin-top:6px">
        Coefficients ≠ 0 → <strong style="color:var(--err)">No CVS</strong>. Sides: 5, √32 ≈ 5.66, √17 ≈ 4.12 — not equilateral.
      </div>`,
    ar: `<strong>معادلات الأضلاع:</strong>
      <div style="font-family:var(--mono);font-size:13px;color:var(--text2);margin:6px 0;direction:ltr;text-align:left">
        AB: y = 0 → h₁ = y<br>
        BC: 4x + 4y − 20 = 0 → h₂ = (20 − 4x − 4y) / √32<br>
        CA: 4x − y = 0 → h₃ = (4x − y) / √17
      </div>
      <strong>المجموع:</strong>
      <div class="math" style="color:var(--gen)">V(x,y) = y + (20−4x−4y)/√32 + (4x−y)/√17</div>
      <strong>التبسيط:</strong>
      <div class="math" style="color:var(--gen)">V(x,y) = (−4/√32 + 4/√17)x + (1 − 4/√32 − 1/√17)y + 20/√32</div>
      <div style="color:var(--text2);font-size:13px;margin-top:6px">
        المعاملات ≠ 0 → <strong style="color:var(--err)">لا يوجد CVS</strong>. الأضلاع: 5، √32 ≈ 5.66، √17 ≈ 4.12 — ليس متساوي الأضلاع.
      </div>`
  },

  // ── Section 3: Three-Point Test ──
  s3Title: {
    he: 'מבחן שלוש הנקודות — כלי אבחון',
    en: 'Three-Point Test — Diagnostic Tool',
    ar: 'اختبار النقاط الثلاث — أداة تشخيصية'
  },
  s3Theorem: {
    he: '<strong>כלל הזהב:</strong> אם V שווה בשלוש נקודות פנימיות:<br>• <strong>לא קולינאריות</strong> → CVS → המשולש <strong>שווה צלעות</strong><br>• <strong>קולינאריות</strong> → הן על אותו קו גובה, <strong>אי אפשר להסיק CVS</strong>',
    en: '<strong>Golden Rule:</strong> If V is equal at three interior points:<br>• <strong>Non-collinear</strong> → CVS → The triangle is <strong>equilateral</strong><br>• <strong>Collinear</strong> → They lie on the same level line, <strong>cannot conclude CVS</strong>',
    ar: '<strong>القاعدة الذهبية:</strong> إذا كانت V متساوية عند ثلاث نقاط داخلية:<br>• <strong>غير متحاذية</strong> → CVS → المثلث <strong>متساوي الأضلاع</strong><br>• <strong>متحاذية</strong> → تقع على نفس خط المستوى، <strong>لا يمكن استنتاج CVS</strong>'
  },
  s3Desc: {
    he: 'הזינו שלוש נקודות ובדקו: האם הן קולינאריות? מה המסקנה?',
    en: 'Enter three points and check: Are they collinear? What is the conclusion?',
    ar: 'أدخل ثلاث نقاط وتحقق: هل هي متحاذية؟ ما الاستنتاج؟'
  },
  s3PointA: { he: 'נקודה A', en: 'Point A', ar: 'النقطة A' },
  s3PointB: { he: 'נקודה B', en: 'Point B', ar: 'النقطة B' },
  s3PointC: { he: 'נקודה C', en: 'Point C', ar: 'النقطة C' },
  s3CheckBtn: {
    he: 'בדוק קולינאריות ← מה המסקנה?',
    en: 'Check Collinearity → What is the conclusion?',
    ar: 'تحقق من التحاذي → ما الاستنتاج؟'
  },
  s3ExamplesTitle: {
    he: 'דוגמאות מהירות — לחצו לטעינה:',
    en: 'Quick examples — click to load:',
    ar: 'أمثلة سريعة — انقر للتحميل:'
  },
  s3Preset1: { he: 'קולינאריות (מהמטלה)', en: 'Collinear (from assignment)', ar: 'متحاذية (من الواجب)' },
  s3Preset2: { he: 'לא קולינאריות (מהמטלה)', en: 'Non-collinear (from assignment)', ar: 'غير متحاذية (من الواجب)' },
  s3Preset3: { he: 'לא קולינאריות', en: 'Non-collinear', ar: 'غير متحاذية' },
  s3Preset4: { he: 'קולינאריות (y=2x)', en: 'Collinear (y=2x)', ar: 'متحاذية (y=2x)' },
  collinearResult: {
    he: '<strong>⚠ קולינאריות!</strong> שלוש הנקודות על ישר אחד — זהו קו גובה. <strong>לא ניתן להסיק CVS.</strong>',
    en: '<strong>⚠ Collinear!</strong> The three points lie on a single line — this is a level line. <strong>Cannot conclude CVS.</strong>',
    ar: '<strong>⚠ متحاذية!</strong> النقاط الثلاث على خط واحد — هذا خط مستوى. <strong>لا يمكن استنتاج CVS.</strong>'
  },
  nonCollinearResult: {
    he: '<strong>✓ לא קולינאריות!</strong> אם V שווה בשלוש הנקודות → לפי משפט 1 → <strong>CVS</strong> → המשולש <strong>שווה צלעות</strong>.',
    en: '<strong>✓ Non-collinear!</strong> If V is equal at all three points → by Theorem 1 → <strong>CVS</strong> → the triangle is <strong>equilateral</strong>.',
    ar: '<strong>✓ غير متحاذية!</strong> إذا كانت V متساوية عند النقاط الثلاث → بحسب المبرهنة 1 → <strong>CVS</strong> → المثلث <strong>متساوي الأضلاع</strong>.'
  },

  // ── Section 4: Quiz ──
  s4Title: {
    he: 'בוחן — נכון/לא נכון ורב-ברירה',
    en: 'Quiz — True/False and Multiple Choice',
    ar: 'اختبار — صح/خطأ واختيار من متعدد'
  },
  quizPart1: {
    he: 'חלק א: נכון / לא נכון',
    en: 'Part 1: True / False',
    ar: 'الجزء الأول: صح / خطأ'
  },
  quizPart2: {
    he: 'חלק ב: רב-ברירה',
    en: 'Part 2: Multiple Choice',
    ar: 'الجزء الثاني: اختيار من متعدد'
  },
  btnTrue: { he: 'נכון ✓', en: 'True ✓', ar: 'صح ✓' },
  btnFalse: { he: 'לא נכון ✗', en: 'False ✗', ar: 'خطأ ✗' },
  correct: { he: '✓ נכון!', en: '✓ Correct!', ar: '✓ صحيح!' },
  wrongAnswerIs: { he: '✗ שגוי — התשובה: ', en: '✗ Wrong — the answer is: ', ar: '✗ خطأ — الإجابة هي: ' },
  trueWord: { he: 'נכון', en: 'True', ar: 'صح' },
  falseWord: { he: 'לא נכון', en: 'False', ar: 'خطأ' },
  excellent: { he: 'מצוין!', en: 'Excellent!', ar: 'ممتاز!' },
  good: { he: 'טוב — חזרו על החומר', en: 'Good — review the material', ar: 'جيد — راجع المادة' },
  tryAgain: { he: 'כדאי לחזור ולנסות שוב', en: 'You should review and try again', ar: 'يُنصح بالمراجعة والمحاولة مرة أخرى' },
  goodShort: { he: 'טוב, חזרו', en: 'Good, review', ar: 'جيد، راجع' },
  reviewMaterial: { he: 'כדאי לחזור על החומר', en: 'You should review the material', ar: 'يُنصح بمراجعة المادة' },

  // ── True/False questions ──
  tfQuestions: {
    he: [
      {q:"במשולש שווה צלעות, סכום המרחקים מהצלעות של כל נקודה פנימית שווה לגובה.",a:true,e:"זהו בדיוק משפט ויויאני: h₁ + h₂ + h₃ = H."},
      {q:"פונקציית סכום המרחקים V(x,y) במשולש היא תמיד פונקציה ריבועית.",a:false,e:"V היא תמיד לינארית: V(x,y) = αx + βy + γ, כיוון שכל מרחק הוא ביטוי לינארי בתוך המשולש."},
      {q:"אם V שווה בשתי נקודות פנימיות של משולש, ניתן להסיק שהמשולש שווה צלעות.",a:false,e:"שתי נקודות תמיד על ישר אחד — קו גובה. צריך 3 נקודות לא קולינאריות."},
      {q:"במשולש שווה שוקיים (שאינו שווה צלעות), קווי הגובה מנוצבים לציר הסימטריה.",a:true,e:"לפי המסקנה: סימטריית שיקוף + אין CVS → קווי הגובה מנוצבים לציר."},
      {q:"אם שלוש נקודות פנימיות עם V שווה הן קולינאריות, המשולש בהכרח לא שווה צלעות.",a:false,e:"גם במשולש שווה צלעות V קבועה בכל מקום, כולל 3 נקודות קולינאריות. קולינאריות לא שוללת שווה צלעות — היא פשוט לא מוכיחה."},
      {q:"הקשר ויויאני–תכנות לינארית: משטחי הרווח מקבילים לסימפלקס אם ורק אם המשולש שווה צלעות.",a:true,e:"(a₁,a₂,a₃) ∥ (1,1,1) ⟺ a₁=a₂=a₃ ⟺ שווה צלעות."},
      {q:"במשולש כללי, V קבועה לאורך ישרים מקבילים בתוך המשולש.",a:true,e:"קווי הרמה של V(x,y) = αx + βy + γ הם ישרים מקבילים — אלו קווי הגובה."},
      {q:"ההוכחה של משפט ויויאני מבוססת על נוסחת הרון.",a:false,e:"ההוכחה הקלסית מבוססת על פירוק שטח המשולש ל-3 משולשים קטנים (בסיס × גובה / 2), לא על הרון."},
    ],
    en: [
      {q:"In an equilateral triangle, the sum of distances from the sides for any interior point equals the height.",a:true,e:"This is exactly Viviani's theorem: h₁ + h₂ + h₃ = H."},
      {q:"The distance sum function V(x,y) in a triangle is always a quadratic function.",a:false,e:"V is always linear: V(x,y) = αx + βy + γ, since each distance is a linear expression inside the triangle."},
      {q:"If V is equal at two interior points of a triangle, we can conclude that the triangle is equilateral.",a:false,e:"Two points always lie on a single line — a level line. We need 3 non-collinear points."},
      {q:"In an isosceles triangle (not equilateral), the level lines are perpendicular to the axis of symmetry.",a:true,e:"By the corollary: reflection symmetry + no CVS → level lines are perpendicular to the axis."},
      {q:"If three interior points with equal V are collinear, the triangle is necessarily not equilateral.",a:false,e:"Even in an equilateral triangle V is constant everywhere, including at 3 collinear points. Collinearity doesn't rule out equilateral — it just doesn't prove it."},
      {q:"The Viviani–linear programming connection: profit surfaces are parallel to the simplex if and only if the triangle is equilateral.",a:true,e:"(a₁,a₂,a₃) ∥ (1,1,1) ⟺ a₁=a₂=a₃ ⟺ equilateral."},
      {q:"In a general triangle, V is constant along parallel lines inside the triangle.",a:true,e:"The level curves of V(x,y) = αx + βy + γ are parallel lines — these are the level lines."},
      {q:"The proof of Viviani's theorem is based on Heron's formula.",a:false,e:"The classical proof is based on decomposing the triangle area into 3 smaller triangles (base × height / 2), not on Heron's formula."},
    ],
    ar: [
      {q:"في مثلث متساوي الأضلاع، مجموع المسافات من الأضلاع لأي نقطة داخلية يساوي الارتفاع.",a:true,e:"هذه هي بالضبط مبرهنة فيفياني: h₁ + h₂ + h₃ = H."},
      {q:"دالة مجموع المسافات V(x,y) في المثلث هي دائماً دالة تربيعية.",a:false,e:"V دائماً خطية: V(x,y) = αx + βy + γ، لأن كل مسافة هي تعبير خطي داخل المثلث."},
      {q:"إذا كانت V متساوية عند نقطتين داخليتين في مثلث، يمكننا استنتاج أن المثلث متساوي الأضلاع.",a:false,e:"نقطتان تقعان دائماً على خط واحد — خط مستوى. نحتاج 3 نقاط غير متحاذية."},
      {q:"في مثلث متساوي الساقين (غير متساوي الأضلاع)، خطوط المستوى عمودية على محور التماثل.",a:true,e:"بحسب النتيجة: تماثل انعكاسي + لا CVS → خطوط المستوى عمودية على المحور."},
      {q:"إذا كانت ثلاث نقاط داخلية ذات V متساوية متحاذية، فإن المثلث بالضرورة ليس متساوي الأضلاع.",a:false,e:"حتى في المثلث متساوي الأضلاع V ثابتة في كل مكان، بما في ذلك عند 3 نقاط متحاذية. التحاذي لا يستبعد تساوي الأضلاع — إنه ببساطة لا يثبته."},
      {q:"العلاقة بين فيفياني والبرمجة الخطية: أسطح الربح موازية للسمبلكس إذا وفقط إذا كان المثلث متساوي الأضلاع.",a:true,e:"(a₁,a₂,a₃) ∥ (1,1,1) ⟺ a₁=a₂=a₃ ⟺ متساوي الأضلاع."},
      {q:"في مثلث عام، V ثابتة على طول خطوط متوازية داخل المثلث.",a:true,e:"منحنيات المستوى لـ V(x,y) = αx + βy + γ هي خطوط متوازية — هذه هي خطوط المستوى."},
      {q:"برهان مبرهنة فيفياني يعتمد على صيغة هيرون.",a:false,e:"البرهان الكلاسيكي يعتمد على تقسيم مساحة المثلث إلى 3 مثلثات أصغر (قاعدة × ارتفاع / 2)، وليس على صيغة هيرون."},
    ]
  },

  // ── Multiple Choice questions ──
  mcQuestions: {
    he: [
      {q:"מהו סכום המרחקים מהצלעות של נקודה פנימית במשולש שווה צלעות שאורך צלעו 10?",o:["5","5√3","10","10√3"],c:1,e:"גובה = (10√3)/2 = 5√3. לפי ויויאני, הסכום שווה לגובה."},
      {q:"V(x,y) = 3x − 2y + 7 מוגדרת על משולש. מהו שיפוע קווי הגובה?",o:["3/2","−3/2","2/3","−2/3"],c:0,e:"קווי הגובה: 3x − 2y = const → y = (3/2)x − const. שיפוע = 3/2."},
      {q:"נתון V(1,0) = V(0,1) = V(2,2) = 7 במשולש. מה המסקנה?",o:["אי אפשר להסיק — נקודות קולינאריות","CVS → שווה צלעות","V=7 בנקודות אלו אך לא בכל מקום","חסר מידע"],c:1,e:"בדיקה: (−1,1)×(1,2) = −2−1 = −3 ≠ 0 → לא קולינאריות → CVS → שווה צלעות."},
      {q:"במשולש שווה שוקיים עם בסיס על ציר x וציר סימטריה על ציר y, מה כיוון קווי הגובה?",o:["אנכי (מקביל לציר y)","אופקי (מקביל לציר x)","באלכסון 45°","תלוי באורכי הצלעות"],c:1,e:"ציר הסימטריה הוא y. לפי המסקנה, קווי הגובה מנוצבים לציר → אופקיים."},
      {q:"לאילו מהמשולשים הבאים יש תכונת CVS?",o:["משולש ישר זווית עם ניצבים 3,4","משולש שווה צלעות עם צלע 5","משולש שווה שוקיים עם שוקיים 5 ובסיס 6","לכולם"],c:1,e:"רק למשולש שווה צלעות. CVS ⟺ שווה צלעות (משפט 1)."},
      {q:"אם V(x,y) = 2x + y + 8, מצאו את כל הנקודות בתוך המשולש שבהן V = 12.",o:["נקודה יחידה","קטע על הישר 2x + y = 4","כל הנקודות","אין נקודה כזו"],c:1,e:"V = 12 → 2x + y + 8 = 12 → 2x + y = 4. זהו ישר, וחיתוכו עם המשולש נותן קטע."},
    ],
    en: [
      {q:"What is the sum of distances from the sides for an interior point in an equilateral triangle with side length 10?",o:["5","5√3","10","10√3"],c:1,e:"Height = (10√3)/2 = 5√3. By Viviani's theorem, the sum equals the height."},
      {q:"V(x,y) = 3x − 2y + 7 is defined on a triangle. What is the slope of the level lines?",o:["3/2","−3/2","2/3","−2/3"],c:0,e:"Level lines: 3x − 2y = const → y = (3/2)x − const. Slope = 3/2."},
      {q:"Given V(1,0) = V(0,1) = V(2,2) = 7 in a triangle. What is the conclusion?",o:["Cannot conclude — points are collinear","CVS → equilateral","V=7 at these points but not everywhere","Insufficient information"],c:1,e:"Check: (−1,1)×(1,2) = −2−1 = −3 ≠ 0 → non-collinear → CVS → equilateral."},
      {q:"In an isosceles triangle with base on x-axis and symmetry axis on y-axis, what is the direction of level lines?",o:["Vertical (parallel to y-axis)","Horizontal (parallel to x-axis)","Diagonal 45°","Depends on side lengths"],c:1,e:"The symmetry axis is y. By the corollary, level lines are perpendicular to the axis → horizontal."},
      {q:"Which of the following triangles has the CVS property?",o:["Right triangle with legs 3,4","Equilateral triangle with side 5","Isosceles triangle with legs 5 and base 6","All of them"],c:1,e:"Only the equilateral triangle. CVS ⟺ equilateral (Theorem 1)."},
      {q:"If V(x,y) = 2x + y + 8, find all points inside the triangle where V = 12.",o:["A single point","A segment on the line 2x + y = 4","All points","No such point"],c:1,e:"V = 12 → 2x + y + 8 = 12 → 2x + y = 4. This is a line, and its intersection with the triangle gives a segment."},
    ],
    ar: [
      {q:"ما هو مجموع المسافات من الأضلاع لنقطة داخلية في مثلث متساوي الأضلاع طول ضلعه 10؟",o:["5","5√3","10","10√3"],c:1,e:"الارتفاع = (10√3)/2 = 5√3. بحسب مبرهنة فيفياني، المجموع يساوي الارتفاع."},
      {q:"V(x,y) = 3x − 2y + 7 معرّفة على مثلث. ما ميل خطوط المستوى؟",o:["3/2","−3/2","2/3","−2/3"],c:0,e:"خطوط المستوى: 3x − 2y = const → y = (3/2)x − const. الميل = 3/2."},
      {q:"معطى V(1,0) = V(0,1) = V(2,2) = 7 في مثلث. ما الاستنتاج؟",o:["لا يمكن الاستنتاج — النقاط متحاذية","CVS → متساوي الأضلاع","V=7 عند هذه النقاط لكن ليس في كل مكان","معلومات غير كافية"],c:1,e:"فحص: (−1,1)×(1,2) = −2−1 = −3 ≠ 0 → غير متحاذية → CVS → متساوي الأضلاع."},
      {q:"في مثلث متساوي الساقين قاعدته على محور x ومحور تماثله على محور y، ما اتجاه خطوط المستوى؟",o:["رأسي (موازٍ لمحور y)","أفقي (موازٍ لمحور x)","قطري 45°","يعتمد على أطوال الأضلاع"],c:1,e:"محور التماثل هو y. بحسب النتيجة، خطوط المستوى عمودية على المحور → أفقية."},
      {q:"أي من المثلثات التالية له خاصية CVS؟",o:["مثلث قائم الزاوية بأضلاع 3، 4","مثلث متساوي الأضلاع بضلع 5","مثلث متساوي الساقين بساقين 5 وقاعدة 6","جميعها"],c:1,e:"فقط المثلث متساوي الأضلاع. CVS ⟺ متساوي الأضلاع (المبرهنة 1)."},
      {q:"إذا كانت V(x,y) = 2x + y + 8، أوجد جميع النقاط داخل المثلث حيث V = 12.",o:["نقطة واحدة","قطعة على المستقيم 2x + y = 4","جميع النقاط","لا توجد نقطة كهذه"],c:1,e:"V = 12 → 2x + y + 8 = 12 → 2x + y = 4. هذا مستقيم، وتقاطعه مع المثلث يعطي قطعة."},
    ]
  },

  // ── Section 5: Practice ──
  s5Title: {
    he: 'תרגילים לתרגול עצמי',
    en: 'Self-Practice Exercises',
    ar: 'تمارين للتدريب الذاتي'
  },
  s5Desc: {
    he: 'ארבעה תרגילים חדשים — ברמת קושי דומה למטלה. לחצו על שם התרגיל, ואז על "הצג פתרון" לאחר שניסיתם.',
    en: 'Four new exercises — similar difficulty level to the assignment. Click on the exercise name, then on "Show Solution" after you try.',
    ar: 'أربعة تمارين جديدة — بمستوى صعوبة مشابه للواجب. انقر على اسم التمرين، ثم على "إظهار الحل" بعد المحاولة.'
  },
  showHideSolution: {
    he: 'הצג/הסתר פתרון',
    en: 'Show/Hide Solution',
    ar: 'إظهار/إخفاء الحل'
  },
  practiceProblems: {
    he: [
      {title:"א. משולש ישר זווית",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>שאלה:</strong> משולש ישר זווית A(0,0), B(6,0), C(0,8).<br>א. חשבו V(x,y) לנקודה פנימית.<br>ב. מהו כיוון קווי הגובה?<br>ג. חשבו V(2,2) ו-V(3,1). האם שווים?<div id="sol0" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>א.</strong> AB: y=0 → h₁=y. AC: x=0 → h₂=x. BC: 8x+6y−48=0 → h₃=(48−8x−6y)/10.<br><span style="font-family:var(--mono);color:var(--text)">V(x,y) = x + y + (48−8x−6y)/10 = 0.2x + 0.4y + 4.8</span><br><br><strong>ב.</strong> 0.2x + 0.4y = const → y = −0.5x + const. <strong>שיפוע −1/2</strong>.<br><br><strong>ג.</strong> V(2,2) = 0.4+0.8+4.8 = 6.0. V(3,1) = 0.6+0.4+4.8 = 5.8. <strong style="color:var(--err)">לא שווים!</strong> (אין CVS, צלעות 6,8,10).</div></div><button class="btn btn-ok sol-toggle" data-sol="sol0" style="margin-top:12px">הצג/הסתר פתרון</button></div>`},
      {title:"ב. הוכחה: שלוש נקודות",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>שאלה:</strong> נתון שבמשולש כלשהו V(0,0) = V(3,1) = V(1,2) = 5.<br>א. הוכיחו שהמשולש שווה צלעות.<br>ב. אם שני קודקודים הם (−1,−2) ו-(5,−2), מצאו את הקודקוד השלישי.<div id="sol1" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>א.</strong> בדיקת קולינאריות: AB=(3,1), AC=(1,2). מכפלה: 3·2−1·1 = 5 ≠ 0.<br><strong>→ לא קולינאריות + V שווה → CVS → שווה צלעות.</strong><br><br><strong>ב.</strong> אורך הבסיס: d = √(36+0) = 6. צלע = 6.<br>נקודה (x,y) עם מרחק 6 משני הקודקודים:<br><span style="font-family:var(--mono);font-size:13px">(x+1)²+(y+2)²=36, (x−5)²+(y+2)²=36</span><br>חיסור → 12x−72=0 → x=2. הצבה → 9+(y+2)²=36 → y+2=±3√3.<br><strong style="color:var(--eq)">קודקוד שלישי: (2, −2+3√3) ≈ (2, 3.20)</strong> (מעל הבסיס).</div></div><button class="btn btn-ok sol-toggle" data-sol="sol1" style="margin-top:12px">הצג/הסתר פתרון</button></div>`},
      {title:"ג. ניתוח V נתון",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>שאלה:</strong> במשולש מסוים, V(x,y) = −x + 2y + 6.<br>א. האם יש CVS?<br>ב. מצאו את כל הנקודות שבהן V = 8.<br>ג. האם ייתכן שנקודות (1,1), (3,2), (−1,0) כולן נותנות V = 7?<div id="sol2" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>א.</strong> α=−1, β=2 → לא אפס → <strong style="color:var(--err)">אין CVS</strong>. המשולש לא שווה צלעות.<br><br><strong>ב.</strong> V=8: −x+2y+6=8 → −x+2y=2 → <strong style="color:var(--eq)">y = x/2 + 1</strong>. הקבוצה היא קטע על ישר זה בתוך המשולש.<br><br><strong>ג.</strong> V(1,1)=−1+2+6=7 ✓. V(3,2)=−3+4+6=7 ✓. V(−1,0)=1+0+6=7 ✓.<br>כולן נותנות 7, אז הן חייבות להיות על הישר −x+2y=1.<br>בדיקה: (1,1): −1+2=1 ✓. (3,2): −3+4=1 ✓. (−1,0): 1+0=1 ✓.<br><strong>כן, אבל הן קולינאריות</strong> (כולן על y=x/2+1/2). זה עקבי — אין CVS.</div></div><button class="btn btn-ok sol-toggle" data-sol="sol2" style="margin-top:12px">הצג/הסתר פתרון</button></div>`},
      {title:"ד. השוואת משולשים",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>שאלה:</strong> שני משולשים:<br>• △₁: A(0,0), B(4,0), C(2, 2√3) — שווה צלעות, צלע 4.<br>• △₂: A(0,0), B(4,0), C(2, 5) — שווה שוקיים, שוקיים ≈ 5.39.<br>א. חשבו V בנקודת הכובד של כל משולש.<br>ב. האם V בנקודת הכובד שווה ל-V בנקודה אחרת ב-△₂?<div id="sol3" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>△₁ (שווה צלעות):</strong> H = (4√3)/2 = 2√3 ≈ 3.46. כובד: (2, 2√3/3) ≈ (2, 1.15).<br>V = H = 2√3 ≈ 3.46 <strong>בכל נקודה</strong> (CVS!).<br><br><strong>△₂ (שווה שוקיים):</strong> כובד: ((0+4+2)/3, (0+0+5)/3) = (2, 5/3).<br>AB: y=0 → h₁=5/3. BC: 5x+2y−20=0 → h₂=(20−10−10/3)/√29 = (20/3)/√29 ≈ 1.24.<br>CA: 5x−2y=0 → h₃=(10−10/3)/√29 = (20/3)/√29 ≈ 1.24.<br>V(כובד) ≈ 5/3 + 1.24 + 1.24 ≈ <strong>4.14</strong>.<br><br><strong>ב.</strong> ניקח נקודה אחרת, למשל (2, 1): h₁=1, h₂=(20−10−2)/√29≈1.49, h₃=(10−2)/√29≈1.49.<br>V(2,1) ≈ 1+1.49+1.49 = <strong>3.97 ≠ 4.14</strong>. אכן V משתנה — <strong style="color:var(--err)">אין CVS</strong>.</div></div><button class="btn btn-ok sol-toggle" data-sol="sol3" style="margin-top:12px">הצג/הסתר פתרון</button></div>`}
    ],
    en: [
      {title:"A. Right Triangle",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>Question:</strong> Right triangle A(0,0), B(6,0), C(0,8).<br>a. Compute V(x,y) for an interior point.<br>b. What is the direction of level lines?<br>c. Compute V(2,2) and V(3,1). Are they equal?<div id="sol0" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>a.</strong> AB: y=0 → h₁=y. AC: x=0 → h₂=x. BC: 8x+6y−48=0 → h₃=(48−8x−6y)/10.<br><span style="font-family:var(--mono);color:var(--text)">V(x,y) = x + y + (48−8x−6y)/10 = 0.2x + 0.4y + 4.8</span><br><br><strong>b.</strong> 0.2x + 0.4y = const → y = −0.5x + const. <strong>Slope −1/2</strong>.<br><br><strong>c.</strong> V(2,2) = 0.4+0.8+4.8 = 6.0. V(3,1) = 0.6+0.4+4.8 = 5.8. <strong style="color:var(--err)">Not equal!</strong> (No CVS, sides 6,8,10).</div></div><button class="btn btn-ok sol-toggle" data-sol="sol0" style="margin-top:12px">Show/Hide Solution</button></div>`},
      {title:"B. Proof: Three Points",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>Question:</strong> Given that in some triangle V(0,0) = V(3,1) = V(1,2) = 5.<br>a. Prove the triangle is equilateral.<br>b. If two vertices are (−1,−2) and (5,−2), find the third vertex.<div id="sol1" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>a.</strong> Collinearity check: AB=(3,1), AC=(1,2). Cross product: 3·2−1·1 = 5 ≠ 0.<br><strong>→ Non-collinear + equal V → CVS → equilateral.</strong><br><br><strong>b.</strong> Base length: d = √(36+0) = 6. Side = 6.<br>Point (x,y) at distance 6 from both vertices:<br><span style="font-family:var(--mono);font-size:13px">(x+1)²+(y+2)²=36, (x−5)²+(y+2)²=36</span><br>Subtraction → 12x−72=0 → x=2. Substitution → 9+(y+2)²=36 → y+2=±3√3.<br><strong style="color:var(--eq)">Third vertex: (2, −2+3√3) ≈ (2, 3.20)</strong> (above the base).</div></div><button class="btn btn-ok sol-toggle" data-sol="sol1" style="margin-top:12px">Show/Hide Solution</button></div>`},
      {title:"C. Analyzing Given V",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>Question:</strong> In a certain triangle, V(x,y) = −x + 2y + 6.<br>a. Is there CVS?<br>b. Find all points where V = 8.<br>c. Is it possible that points (1,1), (3,2), (−1,0) all give V = 7?<div id="sol2" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>a.</strong> α=−1, β=2 → not zero → <strong style="color:var(--err)">No CVS</strong>. The triangle is not equilateral.<br><br><strong>b.</strong> V=8: −x+2y+6=8 → −x+2y=2 → <strong style="color:var(--eq)">y = x/2 + 1</strong>. The set is a segment on this line inside the triangle.<br><br><strong>c.</strong> V(1,1)=−1+2+6=7 ✓. V(3,2)=−3+4+6=7 ✓. V(−1,0)=1+0+6=7 ✓.<br>All give 7, so they must lie on the line −x+2y=1.<br>Check: (1,1): −1+2=1 ✓. (3,2): −3+4=1 ✓. (−1,0): 1+0=1 ✓.<br><strong>Yes, but they are collinear</strong> (all on y=x/2+1/2). This is consistent — no CVS.</div></div><button class="btn btn-ok sol-toggle" data-sol="sol2" style="margin-top:12px">Show/Hide Solution</button></div>`},
      {title:"D. Comparing Triangles",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>Question:</strong> Two triangles:<br>• △₁: A(0,0), B(4,0), C(2, 2√3) — equilateral, side 4.<br>• △₂: A(0,0), B(4,0), C(2, 5) — isosceles, legs ≈ 5.39.<br>a. Compute V at the centroid of each triangle.<br>b. Is V at the centroid equal to V at another point in △₂?<div id="sol3" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>△₁ (equilateral):</strong> H = (4√3)/2 = 2√3 ≈ 3.46. Centroid: (2, 2√3/3) ≈ (2, 1.15).<br>V = H = 2√3 ≈ 3.46 <strong>at every point</strong> (CVS!).<br><br><strong>△₂ (isosceles):</strong> Centroid: ((0+4+2)/3, (0+0+5)/3) = (2, 5/3).<br>AB: y=0 → h₁=5/3. BC: 5x+2y−20=0 → h₂=(20−10−10/3)/√29 = (20/3)/√29 ≈ 1.24.<br>CA: 5x−2y=0 → h₃=(10−10/3)/√29 = (20/3)/√29 ≈ 1.24.<br>V(centroid) ≈ 5/3 + 1.24 + 1.24 ≈ <strong>4.14</strong>.<br><br><strong>b.</strong> Take another point, e.g. (2, 1): h₁=1, h₂=(20−10−2)/√29≈1.49, h₃=(10−2)/√29≈1.49.<br>V(2,1) ≈ 1+1.49+1.49 = <strong>3.97 ≠ 4.14</strong>. Indeed V changes — <strong style="color:var(--err)">no CVS</strong>.</div></div><button class="btn btn-ok sol-toggle" data-sol="sol3" style="margin-top:12px">Show/Hide Solution</button></div>`}
    ],
    ar: [
      {title:"أ. مثلث قائم الزاوية",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>سؤال:</strong> مثلث قائم الزاوية A(0,0)، B(6,0)، C(0,8).<br>أ. احسب V(x,y) لنقطة داخلية.<br>ب. ما اتجاه خطوط المستوى؟<br>ج. احسب V(2,2) و V(3,1). هل هما متساويان؟<div id="sol0" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>أ.</strong> AB: y=0 → h₁=y. AC: x=0 → h₂=x. BC: 8x+6y−48=0 → h₃=(48−8x−6y)/10.<br><span style="font-family:var(--mono);color:var(--text)">V(x,y) = x + y + (48−8x−6y)/10 = 0.2x + 0.4y + 4.8</span><br><br><strong>ب.</strong> 0.2x + 0.4y = const → y = −0.5x + const. <strong>الميل −1/2</strong>.<br><br><strong>ج.</strong> V(2,2) = 0.4+0.8+4.8 = 6.0. V(3,1) = 0.6+0.4+4.8 = 5.8. <strong style="color:var(--err)">غير متساويين!</strong> (لا CVS، أضلاع 6،8،10).</div></div><button class="btn btn-ok sol-toggle" data-sol="sol0" style="margin-top:12px">إظهار/إخفاء الحل</button></div>`},
      {title:"ب. برهان: ثلاث نقاط",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>سؤال:</strong> معطى أنه في مثلث ما V(0,0) = V(3,1) = V(1,2) = 5.<br>أ. أثبت أن المثلث متساوي الأضلاع.<br>ب. إذا كان رأسان هما (−1,−2) و (5,−2)، أوجد الرأس الثالث.<div id="sol1" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>أ.</strong> فحص التحاذي: AB=(3,1), AC=(1,2). الجداء المتجهي: 3·2−1·1 = 5 ≠ 0.<br><strong>→ غير متحاذية + V متساوية → CVS → متساوي الأضلاع.</strong><br><br><strong>ب.</strong> طول القاعدة: d = √(36+0) = 6. الضلع = 6.<br>نقطة (x,y) على بعد 6 من كلا الرأسين:<br><span style="font-family:var(--mono);font-size:13px">(x+1)²+(y+2)²=36, (x−5)²+(y+2)²=36</span><br>طرح → 12x−72=0 → x=2. تعويض → 9+(y+2)²=36 → y+2=±3√3.<br><strong style="color:var(--eq)">الرأس الثالث: (2, −2+3√3) ≈ (2, 3.20)</strong> (فوق القاعدة).</div></div><button class="btn btn-ok sol-toggle" data-sol="sol1" style="margin-top:12px">إظهار/إخفاء الحل</button></div>`},
      {title:"ج. تحليل V معطاة",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>سؤال:</strong> في مثلث معين، V(x,y) = −x + 2y + 6.<br>أ. هل يوجد CVS؟<br>ب. أوجد جميع النقاط حيث V = 8.<br>ج. هل يمكن أن تعطي النقاط (1,1)، (3,2)، (−1,0) جميعها V = 7؟<div id="sol2" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>أ.</strong> α=−1, β=2 → ليست صفراً → <strong style="color:var(--err)">لا يوجد CVS</strong>. المثلث ليس متساوي الأضلاع.<br><br><strong>ب.</strong> V=8: −x+2y+6=8 → −x+2y=2 → <strong style="color:var(--eq)">y = x/2 + 1</strong>. المجموعة هي قطعة على هذا المستقيم داخل المثلث.<br><br><strong>ج.</strong> V(1,1)=−1+2+6=7 ✓. V(3,2)=−3+4+6=7 ✓. V(−1,0)=1+0+6=7 ✓.<br>جميعها تعطي 7، إذن يجب أن تقع على المستقيم −x+2y=1.<br>فحص: (1,1): −1+2=1 ✓. (3,2): −3+4=1 ✓. (−1,0): 1+0=1 ✓.<br><strong>نعم، لكنها متحاذية</strong> (جميعها على y=x/2+1/2). هذا متسق — لا CVS.</div></div><button class="btn btn-ok sol-toggle" data-sol="sol2" style="margin-top:12px">إظهار/إخفاء الحل</button></div>`},
      {title:"د. مقارنة مثلثات",html:`<div class="card" style="font-size:14px;line-height:1.8"><strong>سؤال:</strong> مثلثان:<br>• △₁: A(0,0)، B(4,0)، C(2, 2√3) — متساوي الأضلاع، ضلع 4.<br>• △₂: A(0,0)، B(4,0)، C(2, 5) — متساوي الساقين، ساقان ≈ 5.39.<br>أ. احسب V عند مركز ثقل كل مثلث.<br>ب. هل V عند مركز الثقل تساوي V عند نقطة أخرى في △₂؟<div id="sol3" class="hidden" style="margin-top:14px"><div class="theorem-box ok" style="line-height:1.9"><strong>△₁ (متساوي الأضلاع):</strong> H = (4√3)/2 = 2√3 ≈ 3.46. مركز الثقل: (2, 2√3/3) ≈ (2, 1.15).<br>V = H = 2√3 ≈ 3.46 <strong>عند كل نقطة</strong> (CVS!).<br><br><strong>△₂ (متساوي الساقين):</strong> مركز الثقل: ((0+4+2)/3, (0+0+5)/3) = (2, 5/3).<br>AB: y=0 → h₁=5/3. BC: 5x+2y−20=0 → h₂=(20−10−10/3)/√29 = (20/3)/√29 ≈ 1.24.<br>CA: 5x−2y=0 → h₃=(10−10/3)/√29 = (20/3)/√29 ≈ 1.24.<br>V(مركز الثقل) ≈ 5/3 + 1.24 + 1.24 ≈ <strong>4.14</strong>.<br><br><strong>ب.</strong> نأخذ نقطة أخرى، مثلاً (2, 1): h₁=1, h₂=(20−10−2)/√29≈1.49, h₃=(10−2)/√29≈1.49.<br>V(2,1) ≈ 1+1.49+1.49 = <strong>3.97 ≠ 4.14</strong>. فعلاً V تتغير — <strong style="color:var(--err)">لا CVS</strong>.</div></div><button class="btn btn-ok sol-toggle" data-sol="sol3" style="margin-top:12px">إظهار/إخفاء الحل</button></div>`}
    ]
  }
};

// ═══════════════════════════════════════
//  LANGUAGE ENGINE
// ═══════════════════════════════════════
let currentLang = 'he';

function t(key) {
  const entry = TRANSLATIONS[key];
  if (!entry) return key;
  return entry[currentLang] || entry['he'] || key;
}

function isRTL(lang) {
  return lang === 'he' || lang === 'ar';
}

function applyLanguage(lang) {
  currentLang = lang;
  const rtl = isRTL(lang);
  const html = document.documentElement;
  html.lang = lang;
  html.dir = rtl ? 'rtl' : 'ltr';
  document.body.style.direction = rtl ? 'rtl' : 'ltr';

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = t(key);
  });

  // Update title
  const titles = {
    he: 'משפט ויויאני במשולשים — יחידת לימוד אינטראקטיבית',
    en: "Viviani's Theorem in Triangles — Interactive Learning Unit",
    ar: 'مبرهنة فيفياني في المثلثات — وحدة تعليمية تفاعلية'
  };
  document.title = titles[lang] || titles['he'];

  // Update theorem-box border direction
  document.querySelectorAll('.theorem-box').forEach(box => {
    if (rtl) {
      box.style.borderLeft = 'none';
      box.style.borderRight = '';
    } else {
      box.style.borderRight = 'none';
      box.style.borderLeft = '4px solid';
      box.style.borderLeftColor = '';
    }
  });

  // Highlight active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Re-render dynamic content
  renderTFQuiz();
  renderMCQuiz();
  renderPractice();

  // Save preference
  try { localStorage.setItem('viviani_lang', lang); } catch(e) {}
}

// ═══════════════════════════════════════
//  DYNAMIC CONTENT RENDERERS
// ═══════════════════════════════════════

// True/False quiz state
let tfAnswered = 0, tfCorrect = 0, tfAnsweredSet = new Set();

function renderTFQuiz() {
  tfAnswered = 0; tfCorrect = 0; tfAnsweredSet = new Set();
  const qs = TRANSLATIONS.tfQuestions[currentLang];
  document.getElementById('tfQuiz').innerHTML = qs.map((q,i) =>
    `<div class="q-item" id="tf${i}">
      <div class="q-text"><span class="q-num">${i+1}.</span> ${q.q}</div>
      <div id="tfB${i}" style="display:flex;gap:8px">
        <button class="btn btn-ok" onclick="tfAnswer(${i},true)">${t('btnTrue')}</button>
        <button class="btn" style="background:var(--err-dim);color:var(--err);border-color:rgba(239,83,80,0.25)" onclick="tfAnswer(${i},false)">${t('btnFalse')}</button>
      </div>
      <div id="tfF${i}" class="hidden"></div>
    </div>`
  ).join('');
  document.getElementById('tfScore').classList.add('hidden');
  document.getElementById('tfScore').innerHTML = '';
}

window.tfAnswer = function(i, v) {
  if (tfAnsweredSet.has(i)) return;
  tfAnsweredSet.add(i);
  const qs = TRANSLATIONS.tfQuestions[currentLang];
  const q = qs[i], ok = v === q.a;
  tfAnswered++; if (ok) tfCorrect++;
  const btns = document.getElementById('tfB'+i);
  btns.innerHTML = `<span style="font-weight:600;color:${ok?'var(--ok)':'var(--err)'}">${ok ? t('correct') : t('wrongAnswerIs') + (q.a ? t('trueWord') : t('falseWord'))}</span>`;
  const fb = document.getElementById('tfF'+i);
  fb.classList.remove('hidden');
  fb.innerHTML = `<div class="feedback ${ok?'fb-ok':'fb-err'}">${q.e}</div>`;
  if (tfAnswered >= qs.length) {
    const sc = document.getElementById('tfScore');
    sc.classList.remove('hidden');
    const p = Math.round(tfCorrect/qs.length*100);
    sc.innerHTML = `<div class="score-box"><div style="font-size:36px;font-weight:800;color:${p>=75?'var(--ok)':p>=50?'var(--warn)':'var(--err)'}">${tfCorrect}/${qs.length}</div><div style="font-size:13px;color:var(--text2);margin-top:4px">${p>=75?t('excellent'):p>=50?t('good'):t('tryAgain')}</div></div>`;
  }
};

// MC quiz state
let mcAnswered = 0, mcCorrect = 0, mcAnsweredSet = new Set();

function renderMCQuiz() {
  mcAnswered = 0; mcCorrect = 0; mcAnsweredSet = new Set();
  const qs = TRANSLATIONS.mcQuestions[currentLang];
  const mcContainer = document.getElementById('mcQuiz');
  mcContainer.innerHTML = qs.map((q,i) =>
    `<div class="q-item" id="mc${i}">
      <div class="q-text"><span class="q-num">${i+1}.</span> ${q.q}</div>
      <div class="mc-opts" id="mcO${i}">
        ${q.o.map((o,j) => `<button class="mc-opt" data-q="${i}" data-o="${j}"><span style="color:var(--text3);margin-left:6px;font-weight:600">${String.fromCharCode(currentLang === 'he' ? 1488+j : currentLang === 'ar' ? 1571+j : 65+j)}.</span> ${o}</button>`).join('')}
      </div>
      <div id="mcF${i}" class="hidden"></div>
    </div>`
  ).join('');
  document.getElementById('mcScore').classList.add('hidden');
  document.getElementById('mcScore').innerHTML = '';

  // Re-attach MC event listener
  mcContainer.onclick = function(e) {
    const b = e.target.closest('.mc-opt');
    if (!b) return;
    const qi = +b.dataset.q, oi = +b.dataset.o;
    if (mcAnsweredSet.has(qi)) return;
    mcAnsweredSet.add(qi);
    const q = qs[qi];
    mcAnswered++;
    const ok = oi === q.c;
    if (ok) mcCorrect++;
    document.getElementById('mcO'+qi).querySelectorAll('.mc-opt').forEach((o,j) => {
      o.style.cursor = 'default';
      o.style.pointerEvents = 'none';
      if (j === q.c) { o.style.background='var(--ok-dim)'; o.style.borderColor='var(--ok)'; o.style.color='var(--ok)'; }
      else if (j === oi && !ok) { o.style.background='var(--err-dim)'; o.style.borderColor='var(--err)'; o.style.color='var(--err)'; }
      else { o.style.opacity='0.35'; }
    });
    const fb = document.getElementById('mcF'+qi);
    fb.classList.remove('hidden');
    fb.innerHTML = `<div class="feedback ${ok?'fb-ok':'fb-err'}">${ok?'✓ ':'✗ '}${q.e}</div>`;
    if (mcAnswered >= qs.length) {
      const sc = document.getElementById('mcScore');
      sc.classList.remove('hidden');
      const p = Math.round(mcCorrect/qs.length*100);
      sc.innerHTML = `<div class="score-box"><div style="font-size:36px;font-weight:800;color:${p>=75?'var(--ok)':p>=50?'var(--warn)':'var(--err)'}">${mcCorrect}/${qs.length}</div><div style="font-size:13px;color:var(--text2);margin-top:4px">${p>=75?t('excellent'):p>=50?t('goodShort'):t('reviewMaterial')}</div></div>`;
    }
  };
}

// Practice problems
let pracCur = 0;

function renderPractice() {
  const probs = TRANSLATIONS.practiceProblems[currentLang];
  const stC = document.getElementById('pracSteps');
  const coC = document.getElementById('pracContent');
  stC.innerHTML = probs.map((p,i) =>
    `<button class="step-btn ${i===pracCur?'active':''}" data-i="${i}">${p.title}</button>`
  ).join('');
  coC.innerHTML = probs[pracCur].html;

  // Attach solution toggle handlers
  coC.querySelectorAll('.sol-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const solEl = document.getElementById(btn.dataset.sol);
      if (solEl) solEl.classList.toggle('hidden');
    });
  });
}

// ═══════════════════════════════════════
//  COLLINEARITY CHECKER (language-aware)
// ═══════════════════════════════════════
function checkCollinearity() {
  const g = id => parseFloat(document.getElementById(id).value) || 0;
  const pts = [[g('p1x'),g('p1y')],[g('p2x'),g('p2y')],[g('p3x'),g('p3y')]];
  const [A,B,C] = pts;
  const v1 = [B[0]-A[0], B[1]-A[1]], v2 = [C[0]-A[0], C[1]-A[1]];
  const cross = v1[0]*v2[1] - v1[1]*v2[0];
  const isColl = Math.abs(cross) < 1e-9;
  document.getElementById('colResult').innerHTML = `
    <div class="card" style="font-size:14px;line-height:1.9;animation:fadeIn 0.3s ease">
      <div style="font-family:var(--mono);font-size:13px;color:var(--text2);margin-bottom:8px;direction:ltr;text-align:left">
        AB = (${v1[0].toFixed(2)}, ${v1[1].toFixed(2)})<br>
        AC = (${v2[0].toFixed(2)}, ${v2[1].toFixed(2)})<br>
        AB × AC = (${v1[0].toFixed(2)})(${v2[1].toFixed(2)}) − (${v1[1].toFixed(2)})(${v2[0].toFixed(2)}) = <strong style="color:${isColl?'var(--err)':'var(--ok)'}">${cross.toFixed(4)}</strong>
      </div>
      <div class="theorem-box ${isColl?'err':'ok'}">
        ${isColl ? t('collinearResult') : t('nonCollinearResult')}
      </div>
    </div>`;
}
