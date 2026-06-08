// === MERGED LUNAR DATA ===
const lunarData = {
 
  "04/06/2569": "วันพฤหัสบดี แรม ๔ ค่ำ เดือนเจ็ด (๗) ปีมะเมีย",
  "05/06/2569": "วันศุกร์ แรม ๕ ค่ำ เดือนเจ็ด (๗) ปีมะเมีย",
  "06/06/2569": "วันเสาร์ แรม ๖ ค่ำ เดือนเจ็ด (๗) ปีมะเมีย",
  "07/06/2569": "วันอาทิตย์ แรม ๗ ค่ำ เดือนเจ็ด (๗) ปีมะเมีย",
  "08/06/2569": "วันจันทร์ (วันพระ) แรม ๘ ค่ำ เดือนเจ็ด (๗) ปีมะเมีย",
  "09/06/2569": "วันอังคาร แรม ๙ ค่ำ เดือนเจ็ด (๗) ปีมะเมีย",
  "10/06/2569": "วันพุธ แรม ๑๐ ค่ำ เดือนเจ็ด (๗) ปีมะเมีย",
  "11/06/2569": "วันพฤหัสบดี แรม ๑๑ ค่ำ เดือนเจ็ด (๗) ปีมะเมีย",
  "12/06/2569": "วันศุกร์ แรม ๑๒ ค่ำ เดือนเจ็ด (๗) ปีมะเมีย",
  "13/06/2569": "วันเสาร์ แรม ๑๓ ค่ำ เดือนเจ็ด (๗) ปีมะเมีย",
  "14/06/2569": "วันอาทิตย์ (วันพระ) แรม ๑๔ ค่ำ เดือนเจ็ด (๗) ปีมะเมีย",
  "15/06/2569": "วันจันทร์ ขึ้น ๑ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "16/06/2569": "วันอังคาร ขึ้น ๒ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "17/06/2569": "วันพุธ ขึ้น ๓ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "18/06/2569": "วันพฤหัสบดี ขึ้น ๔ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "19/06/2569": "วันศุกร์ ขึ้น ๕ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "20/06/2569": "วันเสาร์ ขึ้น ๖ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "21/06/2569": "วันอาทิตย์ ขึ้น ๗ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "22/06/2569": "วันจันทร์ (วันพระ) ขึ้น ๘ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "23/06/2569": "วันอังคาร ขึ้น ๙ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "24/06/2569": "วันพุธ ขึ้น ๑๐ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "25/06/2569": "วันพฤหัสบดี ขึ้น ๑๑ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "26/06/2569": "วันศุกร์ ขึ้น ๑๒ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "27/06/2569": "วันเสาร์ ขึ้น ๑๓ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "28/06/2569": "วันอาทิตย์ ขึ้น ๑๔ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "29/06/2569": "วันจันทร์ (วันพระ) ขึ้น ๑๕ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "30/06/2569": "วันอังคาร แรม ๑ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "01/07/2569": "วันพุธ แรม ๒ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "02/07/2569": "วันพฤหัสบดี แรม ๓ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "03/07/2569": "วันศุกร์ แรม ๔ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "04/07/2569": "วันเสาร์ แรม ๕ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "05/07/2569": "วันอาทิตย์ แรม ๖ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "06/07/2569": "วันจันทร์ แรม ๗ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "07/07/2569": "วันอังคาร (วันพระ) แรม ๘ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "08/07/2569": "วันพุธ แรม ๙ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "09/07/2569": "วันพฤหัสบดี แรม ๑๐ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "10/07/2569": "วันศุกร์ แรม ๑๑ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "11/07/2569": "วันเสาร์ แรม ๑๒ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "12/07/2569": "วันอาทิตย์ แรม ๑๓ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "13/07/2569": "วันจันทร์ แรม ๑๔ ค่ำ เดือนแปด (๘) ปีมะเมีย",
  "14/07/2569": "วันอังคาร (วันพระ) แรม ๑๕ ค่ำ เดือนแปด (๘) ปีมะเมีย",
};


// === SHARE SETTINGS & LOGIC ===
const SHARE_PREF_KEY = 'sharePreference_v1';

// === TELEGRAM CONFIGURATION ===
// ❌ ลบ Token แบบ hard-coded แล้ว (ย้ายไปเก็บใน localStorage แทน)

// รายชื่อผู้รับ Telegram (ID บุคคล + กลุ่ม)
const TELEGRAM_RECIPIENTS = [
    { type: 'group', id: '-1002170201653', name: 'กลุ่มดูตัวเลขเท่านั้น' },
    { type: 'personal', id: '5101894762', name: 'kunggi' },
    { type: 'personal', id: '5137261095', name: 'juck' }
];

// === ระบบโหลดและเซฟ Telegram Token (localStorage ปลอดภัย) ===
function getTelegramToken() {
    return localStorage.getItem('my_telegram_token') || '';
}

function saveTelegramToken(token) {
    if (token && token.trim().length > 20) {
        localStorage.setItem('my_telegram_token', token.trim());
        return true;
    }
    return false;
}

function clearTelegramToken() {
    localStorage.removeItem('my_telegram_token');
}

// ฟังก์ชันสำหรับตั้งค่า Telegram Token UI
function setupTelegramTokenUI() {
    const tokenInput = document.getElementById("tgTokenInput");
    const saveBtn = document.getElementById("saveTokenBtn");
    
    if (!tokenInput || !saveBtn) return;
    
    // โหลด Token ที่เคยบันทึกมาแสดง
    const savedToken = getTelegramToken();
    if (savedToken) {
        tokenInput.value = savedToken;
        // แสดงเฉพาะ 20 ตัวแรกเพื่อความปลอดภัย (แต่เก็บเต็มๆไว้)
        const maskedToken = savedToken.substring(0, 15) + '...' + savedToken.substring(savedToken.length - 5);
        console.log('✅ โหลด Token แล้ว (บางส่วน):', maskedToken);
    }
    
    // บันทึก Token เมื่อกดปุ่ม
    saveBtn.addEventListener("click", function() {
        const tokenValue = tokenInput.value.trim();
        if (tokenValue && tokenValue.length > 20) {
            if (saveTelegramToken(tokenValue)) {
                alert("✅ บันทึก Token ลงในเครื่องเรียบร้อยแล้ว!\nระบบจะใช้ Token นี้ในการส่งข้อความไปยัง Telegram");
                // ซ่อน Token บางส่วนเพื่อความปลอดภัยใน UI
                const maskedDisplay = tokenValue.substring(0, 10) + '...' + tokenValue.substring(tokenValue.length - 5);
                console.log('🔐 บันทึก Token แล้ว:', maskedDisplay);
            } else {
                alert("❌ ไม่สามารถบันทึก Token ได้");
            }
        } else if (tokenValue) {
            alert("⚠️ Token ไม่ถูกต้อง (ควรยาวประมาณ 40-50 ตัวอักษร)");
        } else {
            alert("⚠️ กรุณากรอก Token ก่อนบันทึก");
        }
    });
}

function loadSharePreference() {
    return localStorage.getItem(SHARE_PREF_KEY) || 'system';
}

function updateShareButtonUI() {
    const mode = loadSharePreference();
    const btn = document.getElementById("shareResultBtn");
    if (mode === 'copy') {
        btn.textContent = "📋 คัดลอกรูปภาพ (วางในแชท)";
        btn.style.backgroundColor = "#ff9800";
    } else {
        btn.textContent = "แชร์ไปยังแอป";
        btn.style.backgroundColor = "#28a745";
    }
}

async function copyImageToClipboard(blob) {
    try {
        const item = new ClipboardItem({ "image/png": blob });
        await navigator.clipboard.write([item]);
        alert("คัดลอกรูปภาพแล้ว! \nคุณสามารถไปที่แอป Line หรือ Messenger แล้วกด 'วาง' ในช่องแชทได้เลย");
    } catch (err) {
        console.error("Copy failed", err);
        alert("อุปกรณ์นี้ไม่รองรับการคัดลอกรูปภาพโดยตรง (ลองใช้แบบแชร์ปกติ)");
    }
}

// === TELEGRAM SHARE FUNCTION (ส่งได้หลายที่ + ดึง Token จาก localStorage) ===
async function shareToTelegram(blob, caption = '') {
    // ดึง Token จาก localStorage
    const TELEGRAM_BOT_TOKEN = getTelegramToken();
    
    // ตรวจสอบว่ามี Token หรือยัง
    if (!TELEGRAM_BOT_TOKEN) {
        alert('⚠️ กรุณาตั้งค่า Telegram Bot Token ก่อน!\n\nไปที่ปุ่ม ⚙️ > ตั้งค่า Telegram Bot');
        return false;
    }
    
    let successCount = 0;
    let failCount = 0;
    const totalRecipients = TELEGRAM_RECIPIENTS.length;
    
    // ❌ นำแจ้งเตือน "กำลังส่ง..." ออก เพื่อให้ระบบส่งทันที
    // alert(`📤 กำลังส่งไปยัง ${totalRecipients} ที่...\n(กลุ่ม + บุคคล 2 ท่าน)`);
    
    for (const recipient of TELEGRAM_RECIPIENTS) {
        const formData = new FormData();
        const fileName = `lottery_result_${Date.now()}_${recipient.id}.png`;
        const file = new File([blob], fileName, { type: 'image/png' });
        formData.append('chat_id', recipient.id);
        formData.append('photo', file);
        if (caption) formData.append('caption', caption);
        
        try {
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            if (result.ok) {
                successCount++;
                console.log(`✅ ส่งไปยัง ${recipient.name} (${recipient.id}) สำเร็จ`);
            } else {
                failCount++;
                console.error(`❌ ส่งไปยัง ${recipient.name} ล้มเหลว:`, result.description);
            }
        } catch (error) {
            failCount++;
            console.error(`❌ ส่งไปยัง ${recipient.name} เกิดข้อผิดพลาด:`, error.message);
        }
    }
    
    // สรุปผล (จะแสดงหลังจากประมวลผลการส่งครบทุกที่แล้วเท่านั้น)
    if (failCount === 0) {
        alert(`✅ ส่งสำเร็จทั้งหมด ${successCount}/${totalRecipients} ที่!\n(กลุ่ม + บุคคล 2 ท่าน)`);
    } else {
        alert(`⚠️ ส่งสำเร็จ ${successCount}/${totalRecipients} ที่\n❌ ล้มเหลว ${failCount} ที่ (ดู Console)`);
    }
    
    return successCount > 0;
}

function initShareSettings() {
    updateShareButtonUI();

    document.getElementById("shareSettingsBtn").addEventListener("click", () => {
        const currentMode = loadSharePreference();
        const radios = document.getElementsByName("shareMode");
        radios.forEach(r => {
            if (r.value === currentMode) r.checked = true;
        });
        document.getElementById("shareSettingsModal").style.display = "flex";
        // โหลด Token ปัจจุบันมาแสดงเมื่อเปิด Modal
        const tokenInput = document.getElementById("tgTokenInput");
        if (tokenInput) {
            tokenInput.value = getTelegramToken();
        }
    });

    document.getElementById("closeShareSettingsBtn").addEventListener("click", () => {
        document.getElementById("shareSettingsModal").style.display = "none";
    });

    document.getElementById("saveShareSettingsBtn").addEventListener("click", () => {
        const radios = document.getElementsByName("shareMode");
        let selected = 'system';
        radios.forEach(r => { if(r.checked) selected = r.value; });
        
        localStorage.setItem(SHARE_PREF_KEY, selected);
        updateShareButtonUI();
        document.getElementById("shareSettingsModal").style.display = "none";
    });
}

// === SHARED UTILITY FUNCTIONS ===
document.addEventListener('contextmenu', e => e.preventDefault());
function showResultPopup() { 
    document.getElementById("resultPopupOverlay").style.display = "flex";
    setTimeout(addTelegramShareButton, 100);
}
function closeResultPopup() { document.getElementById("resultPopupOverlay").style.display = "none"; }
function checkCustomOption(select) { document.getElementById('customPersonInput').style.display = select.value === 'custom' ? 'block' : 'none'; }
function checkCustomTopicOption(select) { document.getElementById('customTopicInputs').style.display = select.value === 'custom' ? 'block' : 'none'; }

function getSelectedPerson() { const select = document.getElementById('personSelect'); return select.value === 'custom' ? (document.getElementById('customPersonInput').value.trim() || '@') : select.value; }
function getTopicName() { const select = document.getElementById('topicSelect'); if (select.value === 'custom') { return document.getElementById('customTopicName').value.trim() || 'ไม่ระบุหัวข้อ'; } return select.options[select.selectedIndex].text.split(' เวลา ')[0]; }
function getTopicTime() { const select = document.getElementById('topicSelect'); if (select.value === 'custom') { const time = document.getElementById('customTopicTime').value.trim(); return time ? `เวลา ${time} น.` : ''; } const parts = select.options[select.selectedIndex].text.split(' เวลา '); return parts.length > 1 ? `เวลา ${parts[1]}` : ''; }
function getSelectedNote() { 
    const input = document.getElementById('noteInput'); 
    return input ? input.value.trim() : ""; 
}
function getThaiDate(date = new Date()) {
  const months = [
    "มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน",
    "กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"
  ];
  return `วันที่ ${String(date.getDate()).padStart(2, '0')} ${months[date.getMonth()]} พ.ศ. ${date.getFullYear() + 543}`;
}
function getLunarDate(date = new Date()) { const key = `${String(date.getDate()).padStart(2,'0')}/${String(date.getMonth()+1).padStart(2,'0')}/${date.getFullYear()+543}`; return lunarData[key] || ""; }
function getThaiTime() { const now = new Date(); return `เวลา ${String(now.getHours()).padStart(2, '0')}.${String(now.getMinutes()).padStart(2, '0')} น.`; }
function parseThaiDate(dateStr) { if (!dateStr || dateStr.trim() === '') return new Date(); const parts = dateStr.match(/(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{4})/); if (parts) { const day = parseInt(parts[1], 10); const month = parseInt(parts[2], 10); let year = parseInt(parts[3], 10); if (year > 2500) year -= 543; const d = new Date(year, month - 1, day); if (d && d.getMonth() === month - 1) return d; } return null; }
function getFormattedDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear() + 543;
  return `${day}/${month}/${year}`;
}

// === LOGIC FOR 4-DIGIT NUMBERS (UPDATED) ===
function generate4DigitHTML(num, commonData) {
const twoDigitPairs = ((n) => { const p = new Set(); for (let i = 0; i < n.length; i++) { for (let j = i + 1; j < n.length; j++) { p.add([n[i], n[j]].sort().join('')); } } return Array.from(p).sort(); })(num);
const threeDigitCombinations = ((n) => { const c = new Set(); if (n.length < 3) return []; for (let i = 0; i < n.length; i++) { for (let j = i + 1; j < n.length; j++) { for (let k = j + 1; k < n.length; k++) { c.add([n[i], n[j], n[k]].sort().join('')); } } } return Array.from(c).sort(); })(num);

return `
<div style="position: relative; text-align: center; color: blue; --font-scale: 1;">
  <div class="result-header">
    <div class="topic-box">
      <img src="logo.png" class="header-logo" alt="logo">
      <span>${commonData.topicName}</span>
      <img src="logo.png" class="header-logo" alt="logo">
    </div>
  </div>
  ${commonData.topicTimeHtml}

  <p style="font-size: calc(clamp(0.875rem, 3vw, 1.125rem) * var(--font-scale)); ${commonData.textShadow}">
    ${getThaiDate(commonData.date)}
  </p>

  ${commonData.lunarHtml ? `<div style="margin: 2px 0;">${commonData.lunarHtml}</div>` : ''}

  <h2 style="font-size: calc(clamp(1.5rem, 5.5vw, 2rem) * var(--font-scale)); font-weight: normal; ${commonData.textShadow}">
    4 ตัว <span style="color: red;">${num}</span> By : <span style="color: green;">${commonData.selectedPerson}</span>
  </h2>

  <h3 style="font-size: calc(clamp(1.25rem, 4.5vw, 1.75rem) * var(--font-scale)); font-weight: normal; ${commonData.textShadow}">
    จัดชุด 2 ตัว
  </h3>
  <p style="font-weight: bold; white-space: nowrap; font-size: calc(clamp(1.25rem, 6vw, 1.625rem) * var(--font-scale)); ${commonData.textShadow}">
    ${twoDigitPairs.join(' - ')}
  </p>

  <h3 style="font-size: calc(clamp(1.25rem, 4.5vw, 1.75rem) * var(--font-scale)); font-weight: normal; ${commonData.textShadow}">
    จัดชุด 3 ตัว
  </h3>
  <p style="font-weight: bold; white-space: nowrap; font-size: calc(clamp(1.25rem, 6vw, 1.625rem) * var(--font-scale)); ${commonData.textShadow}">
    ${threeDigitCombinations.join(' - ')}
  </p>

  <h2 style="font-size: calc(clamp(1.25rem, 5vw, 1.75rem) * var(--font-scale)); font-weight: bold; color: red; ${commonData.textShadow}">
    แนวทางเท่านั้น
  </h2>

  <p style="font-size: calc(clamp(0.875rem, 3vw, 1.125rem) * var(--font-scale)); ${commonData.textShadow}">
    Disclose : ${getFormattedDate(new Date())} ${getThaiTime()}
  </p>

  <p style="font-size: calc(clamp(1rem, 3.5vw, 1.25rem) * var(--font-scale)); ${commonData.textShadow}">
    ${commonData.noteHtml}
  </p>
</div>`;
}


// === LOGIC FOR 3-DIGIT NUMBERS (REVISED) ===
function generate3DigitHTML(num, commonData) {
const transformRules = {'0':'1','1':'7','2':'5','3':'8','4':'9','5':'2','6':'9','7':'1','8':'3','9':'6'};
const transformed = num.split('').map(d => transformRules[d]).join('');
const sortPair = pair => (pair[0] > pair[1] ? pair[1] + pair[0] : pair);

const generateAdditional = (inputSet, type) => {
const patterns = { '2digit': {'00':'02','11':'12','33':'23','44':'24','55':'25','66':'26','77':'27','88':'28','99':'29'}, '3digit': {'000': '002', '011': '012', '022': '022', '033': '023', '044': '024', '055': '025', '066': '026', '077': '027', '088': '028', '099': '029', '111': '112', '122': '122', '133': '123', '144': '124', '155': '125', '166': '126', '177': '127', '188': '128', '199': '129', '222': '222', '233': '223', '244': '224', '255': '225', '266': '226', '277': '227', '288': '228', '299': '229', '333': '233', '344': '234', '355': '235', '366': '236', '377': '237', '388': '238', '399': '239', '444': '244', '455': '245', '466': '246', '477': '247', '488': '248', '499': '249', '555': '255', '566': '256', '577': '257', '588': '258', '599': '259', '666': '266', '677': '267', '688': '268', '699': '269', '777': '277', '788': '278', '799': '279', '888': '288', '899': '289', '999': '299', '001': '012', '002': '022', '003': '023', '004': '024', '005': '025', '006': '026', '007': '027', '008': '028', '009': '029', '112': '122', '113': '123', '114': '124', '115': '125', '116': '126', '117': '127', '118': '128', '119': '129', '223': '223', '224': '224', '225': '225', '226': '226', '227': '227', '228': '228', '229': '229', '334': '234', '335': '235', '336': '236', '337': '237', '338': '238', '339': '239', '445': '245', '446': '246', '447': '247', '448': '248', '449': '249', '556': '256', '557': '257', '558': '258', '559': '259', '667': '267', '668': '268', '669': '269', '778': '278', '779': '279', '889': '289'} };
const additional = Array.from(inputSet).map(item => (patterns[type] || {})[item]).filter(Boolean);
return [...new Set(additional)];
};

const firstSet = [...new Set([sortPair(`${num[0]}${num[1]}`), sortPair(`${num[0]}${num[2]}`), sortPair(`${num[1]}${num[2]}`)])].sort();
const secondSetSource = [sortPair(`${num[0]}${transformed[1]}`),sortPair(`${num[0]}${transformed[2]}`),sortPair(`${num[1]}${transformed[0]}`),sortPair(`${num[1]}${transformed[2]}`),sortPair(`${num[2]}${transformed[0]}`),sortPair(`${num[2]}${transformed[1]}`)];
const additional2d = generateAdditional(new Set([...firstSet, ...secondSetSource]), '2digit');
const secondSet = [...new Set([...secondSetSource, ...additional2d])].filter(p => !firstSet.includes(p)).sort();
const transformedPairs = [...new Set([sortPair(`${transformed[0]}${transformed[1]}`), sortPair(`${transformed[0]}${transformed[2]}`), sortPair(`${transformed[1]}${transformed[2]}`)])].filter(p => !firstSet.includes(p) && !secondSet.includes(p)).sort();

const thirdSetSource = [`${num[0]}${num[1]}${num[2]}`,`${num[0]}${num[1]}${transformed[2]}`,`${num[0]}${transformed[1]}${num[2]}`,`${num[0]}${transformed[1]}${transformed[2]}`,`${transformed[0]}${num[1]}${num[2]}`,`${transformed[0]}${num[1]}${transformed[2]}`,`${transformed[0]}${transformed[1]}${num[2]}`,`${transformed[0]}${transformed[1]}${transformed[2]}`];
const thirdSet = [...new Set(thirdSetSource.map(t => t.split('').sort().join('')))].sort();
const additional3d = generateAdditional(new Set(thirdSet), '3digit').filter(t => !thirdSet.includes(t)).sort();

const redSpan = (text) => `<span style="color: red;">${text}</span>`;
const greenSpan = (text) => `<span style="color: green;">${text}</span>`;
const noDataSpan = '<span style="color: green; font-size: 18px;">ไม่มีชุดตัวเลขเพิ่ม</span>';

return `
<div style="position: relative; text-align: center; color: blue; --font-scale: 1;">
  <div class="result-header">
    <div class="topic-box">
      <img src="logo.png" class="header-logo" alt="logo">
      <span>${commonData.topicName}</span>
      <img src="logo.png" class="header-logo" alt="logo">
    </div>
  </div>
  ${commonData.topicTimeHtml}

  <p style="
    font-size: calc(clamp(0.875rem, 3vw, 1.125rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    ${getThaiDate(commonData.date)}
  </p>

  ${commonData.lunarHtml ? `<div style="margin: 2px 0;">${commonData.lunarHtml}</div>` : ''}

  <h2 style="
    font-weight: bold;
    font-size: calc(clamp(1.5rem, 5.5vw, 2rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    3 ตัว ${redSpan(num)} By : ${greenSpan(commonData.selectedPerson)}
  </h2>

  <h3 style="
    font-weight: bold;
    font-size: calc(clamp(1.25rem, 4.5vw, 1.75rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    จัดชุดเด่น 2 ตัว
  </h3>
  <p style="
    font-weight: bold;
    white-space: nowrap; 
    font-size: calc(clamp(1.1rem, 5vw, 1.5rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    ${firstSet.join(' - ')}
  </p>

  <h3 style="
    font-weight: bold;
    font-size: calc(clamp(1.25rem, 4.5vw, 1.75rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    จัดชุดรอง 2 ตัว
  </h3>
  <p style="
    font-weight: bold;
    white-space: nowrap; 
    font-size: calc(clamp(1.1rem, 5vw, 1.5rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    ${secondSet.length > 0 ? secondSet.join(' - ') : noDataSpan}
  </p>

  <h3 style="
    font-weight: bold;
    font-size: calc(clamp(1.25rem, 4.5vw, 1.75rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    จัดชุด 2 ตัว ${redSpan('(แปลเพิ่ม)')}
  </h3>
  <p style="
    font-weight: bold;
    white-space: nowrap; 
    font-size: calc(clamp(1.1rem, 5vw, 1.5rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    ${transformedPairs.length > 0 ? transformedPairs.join(' - ') : noDataSpan}
  </p>

  <h3 style="
    font-weight: bold;
    font-size: calc(clamp(1.1rem, 4.5vw, 1.5rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    จัดชุด 3 ตัว (ปกติ)
  </h3>
  <p style="
    font-weight: bold;
    white-space: nowrap; 
    font-size: calc(clamp(1rem, 4.8vw, 1.35rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    ${thirdSet.join(' - ')}
  </p>

  <h3 style="
    font-weight: bold;
    font-size: calc(clamp(1.1rem, 4.5vw, 1.5rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    จัดชุด 3 ตัว ${redSpan('(แปลเพิ่ม)')}
  </h3>
  <p style="
    font-weight: bold;
    white-space: nowrap; 
    font-size: calc(clamp(1rem, 4.8vw, 1.35rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    ${additional3d.length > 0 ? additional3d.join(' - ') : noDataSpan}
  </p>

  <h2 style="
    font-weight: bold;
    color: red; 
    font-size: calc(clamp(1.25rem, 5vw, 1.75rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    แนวทางเท่านั้น
  </h2>

  <p style="
    font-size: calc(clamp(0.875rem, 3vw, 1.125rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    Disclose : ${getFormattedDate(new Date())} ${getThaiTime()}
  </p>

  <p style="
    font-size: calc(clamp(1rem, 3.5vw, 1.25rem) * var(--font-scale));
    text-shadow: 
      -1px -1px 0 white,
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white,
       ${commonData.textShadow};
  ">
    ${commonData.noteHtml.replace('No remarks', '<span style="color: red;">No remarks</span>')}
  </p>
</div>`;
}


// === LOGIC FOR 2-DIGIT NUMBERS (UPDATED) ===
function generate2DigitHTML(num, commonData) {
       const transformRules = {
            '0': '1', '1': '7', '2': '5', '3': '8',
            '4': '9', '5': '2', '6': '9', '7': '1',
            '8': '3', '9': '6'
        };
        const transformed = num.split('').map(digit => transformRules[digit]).join('');
        const pairs = [
            `${num[0]}${transformed[1]}`,
            `${transformed[0]}${num[1]}`,
            `${transformed[0]}${transformed[1]}`,
            `${num[0]}${num[1]}`
        ];
        const formattedPairs = pairs.map(pair => {
            const tens = parseInt(pair[0]);
            const units = parseInt(pair[1]);
            return tens <= units ? pair : `${units}${tens}`;
        });
        const uniquePairs = [...new Set(formattedPairs)];
        const additionRules = {
            '00': '02', '11': '12', '33': '23',
            '44': '24', '55': '25', '66': '26', '77': '27',
            '88': '28', '99': '29'
        };
        uniquePairs.forEach(pair => {
            const addition = additionRules[pair];
            if (addition) {
                uniquePairs.push(addition);
            }
        });
        const sortedPairs = [...new Set(uniquePairs)].sort();

return `
<div style="position: relative; text-align: center; color: blue; --font-scale: 1;">
  <div class="result-header">
    <div class="topic-box">
      <img src="logo.png" class="header-logo" alt="logo">
      <span>${commonData.topicName}</span>
      <img src="logo.png" class="header-logo" alt="logo">
    </div>
  </div>
  ${commonData.topicTimeHtml}
  
  <p style="font-size: calc(clamp(0.9rem, 3vw, 1.125rem) * var(--font-scale)); ${commonData.textShadow}">
    ${getThaiDate(commonData.date)}
  </p>
  
  ${commonData.lunarHtml ? `<div style="margin: 2px 0;">${commonData.lunarHtml}</div>` : ''}
  
  <h2 style="font-weight: bold; font-size: calc(clamp(1.4rem, 6vw, 2rem) * var(--font-scale)); ${commonData.textShadow}">
    2 ตัว <span style="color: red;">${num}</span> By : <span style="color: green;">${commonData.selectedPerson}</span>
  </h2>
  
  <h3 style="font-weight: bold; font-size: calc(clamp(1.2rem, 5.5vw, 1.75rem) * var(--font-scale)); ${commonData.textShadow}">
    จัดชุด 2 ตัว
  </h3>
  
  <p style="font-weight: bold; white-space: nowrap; font-size: calc(clamp(1.1rem, 7vw, 1.75rem) * var(--font-scale)); ${commonData.textShadow}">
    ${sortedPairs.join(' - ')}
  </p>
  
  <h2 style="font-weight: bold; color: red; font-size: calc(clamp(1.2rem, 5.5vw, 1.75rem) * var(--font-scale)); ${commonData.textShadow}">
    แนวทางเท่านั้น
  </h2>
  
  <p style="font-size: calc(clamp(0.9rem, 3vw, 1.125rem) * var(--font-scale)); ${commonData.textShadow}">
    Disclose : ${getFormattedDate(new Date())} ${getThaiTime()}
  </p>
  
  <p style="font-size: calc(clamp(1rem, 3.5vw, 1.25rem) * var(--font-scale)); ${commonData.textShadow}">
    ${commonData.noteHtml}
  </p>
</div>
`;
}

// === MAIN DISPATCHER FUNCTION ===
function generateResultHTML() {
  const num = document.getElementById("numberInput").value;
  if (isNaN(num) || (num.length < 2 || num.length > 4)) {
    alert("กรุณากรอกตัวเลข 2, 3 หรือ 4 หลักให้ถูกต้อง");
    return null;
  }

  const dateInputStr = document.getElementById("dateInput").value;
  const date = parseThaiDate(dateInputStr);
  if (!date) {
    alert("รูปแบบวันที่ไม่ถูกต้อง กรุณาใช้รูปแบบ: วว/ดด/ปปปป (เช่น 15/07/2568)");
    return null;
  }

  const lunarDate = getLunarDate(date);
  let noteValue = getSelectedNote().trim();
  const engravedShadowStyle = "text-shadow: 1px 1px 1px rgba(0,0,0,0.3), -1px -1px 1px rgba(255,255,255,0.9);";

  const lunarHtml = lunarDate ? 
    `<p class="lunar-date" style="color: ${lunarDate.includes('วันพระ') ? 'red' : 'green'};">( ${lunarDate} )</p>` : '';

  const commonData = {
    date: date,
    topicName: getTopicName(),
    topicTimeHtml: (() => { 
      const t = getTopicTime(); 
      return t ? `<p class="topic-time">${t}</p>` : ''; 
    })(),
    selectedPerson: getSelectedPerson(),
    lunarHtml: lunarHtml,
    noteHtml: `หมายเหตุ : ${noteValue ? `<span style="color: red;">${noteValue}</span>` : '<span style="color: red;">No remarks</span>'}`,
    textShadow: engravedShadowStyle
  };

  if (num.length === 2) { return generate2DigitHTML(num, commonData); }
  else if (num.length === 3) { return generate3DigitHTML(num, commonData); }
  else if (num.length === 4) { return generate4DigitHTML(num, commonData); }
  return null;
}

function displayResultInPopup() {
const resultHtml = generateResultHTML();
if (resultHtml) {
const wrapper = document.getElementById("resultContentWrapper");
wrapper.innerHTML = resultHtml;

document.getElementById("popupFontSizeSlider").value = 1.0;
const resultDiv = wrapper.querySelector('div');
if (resultDiv) {
resultDiv.style.setProperty('--font-scale', '1');
}

initializePopupControls();
showResultPopup();
}
}

function initializePopupControls() {
  const lhSlider = document.getElementById("popupLineHeightSlider");
  const fsSlider = document.getElementById("popupFontSizeSlider");
  const fsValueSpan = document.getElementById("popupFontSizeValue");
  const numLength = document.getElementById("numberInput").value.length;
  const resultDiv = document.querySelector("#resultContentWrapper > div");

  let defaultFontScale;
  if (numLength === 2) {
    defaultFontScale = 1.4;
    lhSlider.min = "0.8"; lhSlider.max = "2.5"; lhSlider.value = "1.3";
  } else if (numLength === 3) {
    defaultFontScale = 1.0;
    lhSlider.min = "0.5"; lhSlider.max = "2.5"; lhSlider.value = "0.7";
  } else {
    defaultFontScale = 1.4;
    lhSlider.min = "0.5"; lhSlider.max = "2.5"; lhSlider.value = "1.0";
  }

  fsSlider.value = defaultFontScale;
  if (resultDiv) {
    resultDiv.style.setProperty('--font-scale', defaultFontScale);
  }
  fsValueSpan.textContent = `ขนาด: ${Math.round(defaultFontScale * 100)}%`;

  updateLineHeight();
}

function updateFontSize() {
const fsSlider = document.getElementById("popupFontSizeSlider");
const fsValueSpan = document.getElementById("popupFontSizeValue");
const resultDiv = document.querySelector("#resultContentWrapper > div");

if (!fsSlider || !resultDiv) return;

const scale = fsSlider.value;
resultDiv.style.setProperty('--font-scale', scale);
fsValueSpan.textContent = `ขนาด: ${Math.round(scale * 100)}%`;
}

function updateLineHeight() {
const lhSlider = document.getElementById("popupLineHeightSlider");
const lhValueSpan = document.getElementById("popupLineHeightValue");
const resultContentWrapper = document.getElementById("resultContentWrapper");
if (!lhSlider || !resultContentWrapper) return;

const lineHeight = lhSlider.value;
resultContentWrapper.style.lineHeight = lineHeight;
lhValueSpan.textContent = `ความสูงบรรทัด: ${lineHeight}`;
}

// === TELEGRAM SHARE BUTTON FUNCTIONS ===
function addTelegramShareButton() {
    const shareContainer = document.querySelector('#resultPopupOverlay .controls');
    if (!shareContainer) return;
    
    if (document.getElementById('telegramShareBtn')) return;
    
    const tgBtn = document.createElement('button');
    tgBtn.id = 'telegramShareBtn';
    tgBtn.innerHTML = '📨 ส่งไป Telegram';
    tgBtn.style.cssText = `
        background: linear-gradient(135deg, #0088cc, #0077b5);
        color: white;
        border: none;
        border-radius: 50px;
        padding: 12px 20px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 15px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    `;
    
    tgBtn.addEventListener('click', async () => {
        const captureElement = document.querySelector("#resultPopupOverlay .popup-content");
        const controls = captureElement.querySelector('.controls');
        
        if (controls) controls.style.display = 'none';
        
        try {
            const canvas = await html2canvas(captureElement, {
                scale: 2,
                backgroundColor: '#FFFFD1',
                useCORS: true
            });
            
            const blob = await new Promise(res => canvas.toBlob(res, 'image/png'));
            
            const num = document.getElementById("numberInput")?.value || "";
            const topic = getTopicName();
            const caption = "";
            
            await shareToTelegram(blob, caption);
            
        } catch (err) {
            console.error(err);
            alert('เกิดข้อผิดพลาดในการส่งไป Telegram');
        } finally {
            if (controls) controls.style.display = 'flex';
        }
    });
    
    const shareBtn = document.getElementById('shareResultBtn');
    if (shareBtn && shareBtn.parentNode) {
        shareBtn.parentNode.insertBefore(tgBtn, shareBtn);
    } else {
        shareContainer.insertBefore(tgBtn, shareContainer.firstChild);
    }
}

// === PAGE INITIALIZATION & MANAGEMENT LOGIC ===
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("popupFontSizeSlider").addEventListener("input", updateFontSize);
document.getElementById("popupLineHeightSlider").addEventListener("input", updateLineHeight);
document.getElementById("convertButton").addEventListener("click", displayResultInPopup);

// ตั้งค่าระบบ Telegram Token UI
setupTelegramTokenUI();

document.getElementById("saveResultAsImageBtn").addEventListener("click", function() {
const captureElement = document.querySelector("#resultPopupOverlay .popup-content");
const controlsElement = captureElement.querySelector('.controls');

  controlsElement.style.display = 'none';
  const originalPadding = captureElement.style.padding;
  captureElement.style.padding = '2px 2px 2px 2px';

html2canvas(captureElement, { useCORS: true, scale: 4, backgroundColor: '#FFFFD1' }).then(canvas => {
const link = document.createElement('a');
const num = document.getElementById("numberInput").value || "XXXX";
link.download = `Result-Gen-${num}-${Date.now()}.png`;
link.href = canvas.toDataURL("image/png");
link.click();
}).catch(err => {
console.error("เกิดข้อผิดพลาดในการสร้างรูปภาพ:", err);
alert("ขออภัย, ไม่สามารถบันทึกเป็นรูปภาพได้");
}).finally(() => {
controlsElement.style.display = '';
captureElement.style.padding = originalPadding;
});
});

document.getElementById("shareResultBtn").addEventListener("click", async function () {
    const captureElement = document.querySelector("#resultPopupOverlay .popup-content");
    const controlsElement = captureElement.querySelector('.controls');
    const mode = loadSharePreference();

    controlsElement.style.display = 'none';
    const originalPadding = captureElement.style.padding;
    captureElement.style.padding = '2px';

    try {
        const canvas = await html2canvas(captureElement, {
            useCORS: true,
            scale: 4,
            backgroundColor: '#FFFFD1'
        });

        const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));

        if (mode === 'copy') {
            await copyImageToClipboard(blob);
        } else {
            if (!navigator.share) {
                alert("อุปกรณ์นี้ไม่รองรับการแชร์โดยตรง");
                return;
            }
            const num = document.getElementById("numberInput").value || "XXXX";
            const file = new File([blob], `Result-${num}.png`, { type: "image/png" });
            await navigator.share({ files: [file] });
        }

    } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาดในการดำเนินการ");
    } finally {
        controlsElement.style.display = '';
        captureElement.style.padding = originalPadding;
    }
});

initShareSettings();

const TOPIC_STORAGE_KEY = 'customTopics_unified';
const PERSON_STORAGE_KEY = 'customPersons_unified';

const HIDDEN_TOPICS_KEY = 'hiddenDefaultTopics_unified';
const HIDDEN_PERSONS_KEY = 'hiddenDefaultPersons_unified';


const getStored = (key) => JSON.parse(localStorage.getItem(key)) || [];
const setStored = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function applyHiddenDefaults(selectId, storageKey) {
const hiddenValues = getStored(storageKey);
if (hiddenValues.length > 0) {
document.querySelectorAll(`#${selectId} option[data-default="true"]`).forEach(opt => {
if (hiddenValues.includes(opt.value)) { opt.hidden = true; }
});
}
}

function loadOptions(selectId, storageKey) {
const select = document.getElementById(selectId);
select.querySelectorAll('option:not([data-default])').forEach(opt => opt.value !== 'custom' && opt.remove());
const otherOption = select.querySelector('option[value="custom"]');
const stored = getStored(storageKey);
stored.forEach(item => {
const opt = document.createElement('option');
opt.value = item.value;
opt.textContent = item.text;
select.insertBefore(opt, otherOption);
});
}

applyHiddenDefaults('topicSelect', HIDDEN_TOPICS_KEY);
applyHiddenDefaults('personSelect', HIDDEN_PERSONS_KEY);

loadOptions('topicSelect', TOPIC_STORAGE_KEY);
loadOptions('personSelect', PERSON_STORAGE_KEY);


document.getElementById('toggleTopicControls').addEventListener('click', () => {
document.getElementById('topicActions').style.display = document.getElementById('topicActions').style.display === 'flex' ? 'none' : 'flex';
});
document.getElementById('togglePersonControls').addEventListener('click', () => {
document.getElementById('personActions').style.display = document.getElementById('personActions').style.display === 'flex' ? 'none' : 'flex';
});


const setupManagement = (type) => {
const SELECT_ID = `${type}Select`;
const STORAGE_KEY = `custom${type.charAt(0).toUpperCase() + type.slice(1)}s_unified`;
const HIDDEN_STORAGE_KEY = `hiddenDefault${type.charAt(0).toUpperCase() + type.slice(1)}s_unified`;
const MODAL_ID = `${type}Modal`;

document.getElementById(`add${type.charAt(0).toUpperCase() + type.slice(1)}Btn`).addEventListener('click', () => {
document.getElementById(`${type}ModalTitle`).textContent = 
    `เพิ่ม${type === 'topic' ? 'หัวข้อ' : type === 'person' ? 'ผู้บอก' : 'หมายเหตุ'}ใหม่`;
if(type === 'topic') {
document.getElementById('modalTopicName').value = ''; document.getElementById('modalTopicTime').value = ''; document.getElementById('topicEditIndex').value = '';
} else if(type === 'person') {
document.getElementById('modalPersonName').value = ''; document.getElementById('personEditValue').value = '';
} else {
document.getElementById('modalNoteText').value = ''; document.getElementById('noteEditValue').value = '';
}
document.getElementById(MODAL_ID).style.display = 'flex';
});

document.getElementById(`edit${type.charAt(0).toUpperCase() + type.slice(1)}Btn`).addEventListener('click', () => {
const select = document.getElementById(SELECT_ID);
const selectedOption = select.options[select.selectedIndex];
if (selectedOption.value === 'custom' || selectedOption.hidden) return alert(`ไม่สามารถแก้ไขรายการ${type === 'topic' ? 'หัวข้อ' : type === 'person' ? 'ผู้บอก' : 'หมายเหตุ'}นี้ได้`);

document.getElementById(`${type}ModalTitle`).textContent = `แก้ไข${type === 'topic' ? 'หัวข้อ' : type === 'person' ? 'ผู้บอก' : 'หมายเหตุ'}`;
if (type === 'topic') {
const [name, timePart] = selectedOption.value.split(' เวลา ');
document.getElementById('modalTopicName').value = name;
document.getElementById('modalTopicTime').value = timePart ? timePart.replace(' น.', '') : '';
document.getElementById('topicEditIndex').value = selectedOption.value;
} else if (type === 'person') {
document.getElementById('modalPersonName').value = selectedOption.value;
document.getElementById('personEditValue').value = selectedOption.value;
} else {
document.getElementById('modalNoteText').value = selectedOption.value;
document.getElementById('noteEditValue').value = selectedOption.value;
}
document.getElementById(MODAL_ID).style.display = 'flex';
});

document.getElementById(`delete${type.charAt(0).toUpperCase() + type.slice(1)}Btn`).addEventListener('click', () => {
const select = document.getElementById(SELECT_ID);
const selectedOption = select.options[select.selectedIndex];
if (selectedOption.value === 'custom' || selectedOption.hidden) return alert(`ไม่สามารถลบรายการ${type === 'topic' ? 'หัวข้อ' : type === 'person' ? 'ผู้บอก' : 'หมายเหตุ'}นี้ได้`);
if (confirm(`คุณต้องการลบ "${selectedOption.textContent}" ใช่หรือไม่?`)) {
if (selectedOption.hasAttribute('data-default')) {
let hidden = getStored(HIDDEN_STORAGE_KEY);
if (!hidden.includes(selectedOption.value)) { hidden.push(selectedOption.value); setStored(HIDDEN_STORAGE_KEY, hidden); }
selectedOption.hidden = true;
select.selectedIndex = [...select.options].findIndex(o => !o.hidden);
} else {
let options = getStored(STORAGE_KEY);
options = options.filter(opt => opt.value !== selectedOption.value);
setStored(STORAGE_KEY, options);
loadOptions(SELECT_ID, STORAGE_KEY);
}
}
});

document.getElementById(`save${type.charAt(0).toUpperCase() + type.slice(1)}Btn`).addEventListener('click', () => {
let name, time, oldValue, newValue;
if (type === 'topic') {
name = document.getElementById('modalTopicName').value.trim();
time = document.getElementById('modalTopicTime').value.trim();
oldValue = document.getElementById('topicEditIndex').value;
if (!name) return alert('กรุณากรอกชื่อหัวข้อ');
newValue = time ? `${name} เวลา ${time} น.` : name;
} else if (type === 'person') {
name = document.getElementById('modalPersonName').value.trim();
oldValue = document.getElementById('personEditValue').value;
if (!name) return alert('กรุณากรอกชื่อผู้บอก');
newValue = name;
} else {
name = document.getElementById('modalNoteText').value.trim();
oldValue = document.getElementById('noteEditValue').value;
if (!name) return alert('กรุณากรอกหมายเหตุ');
newValue = name;
}

let options = getStored(STORAGE_KEY);
const select = document.getElementById(SELECT_ID);

if (oldValue) {
const oldOptionEl = select.querySelector(`option[value="${oldValue}"]`);
if (oldOptionEl && oldOptionEl.hasAttribute('data-default')) {
let hidden = getStored(HIDDEN_STORAGE_KEY);
if (!hidden.includes(oldValue)) { hidden.push(oldValue); setStored(HIDDEN_STORAGE_KEY, hidden); }
oldOptionEl.hidden = true;
if (!options.some(opt => opt.value === newValue)) { options.push({ value: newValue, text: newValue }); }
} else {
const index = options.findIndex(opt => opt.value === oldValue);
if (index > -1) options[index] = { value: newValue, text: newValue };
else options.push({ value: newValue, text: newValue });
}
} else {
if (options.some(opt => opt.value === newValue) || [...select.options].some(o => o.value === newValue && !o.hidden)) { return alert('มีรายการนี้อยู่แล้ว'); }
options.push({ value: newValue, text: newValue });
}
setStored(STORAGE_KEY, options);
loadOptions(SELECT_ID, STORAGE_KEY);
select.value = newValue;
document.getElementById(MODAL_ID).style.display = 'none';
});

document.getElementById(`reset${type.charAt(0).toUpperCase() + type.slice(1)}Btn`).addEventListener('click', () => {
if (confirm(`คุณต้องการคืนค่ารายการ${type === 'topic' ? 'หัวข้อ' : type === 'person' ? 'ผู้บอก' : 'หมายเหตุ'}ทั้งหมดใช่หรือไม่?\n(รายการที่สร้างเองและซ่อนไว้จะถูกลบทั้งหมด)`)) {
localStorage.removeItem(STORAGE_KEY);
localStorage.removeItem(HIDDEN_STORAGE_KEY);
location.reload();
}
});

document.getElementById(`cancel${type.charAt(0).toUpperCase() + type.slice(1)}Btn`).addEventListener('click', () => {
document.getElementById(MODAL_ID).style.display = 'none';
});
};

setupManagement('topic');
setupManagement('person');


const dateInput = document.getElementById('dateInput');
const calendarButton = document.getElementById('calendarButton');
const hiddenDateInput = document.getElementById('hiddenDateInput');
const today = new Date();
dateInput.value = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear() + 543}`;
calendarButton.addEventListener('click', () => {
try { hiddenDateInput.showPicker(); } catch (error) { hiddenDateInput.click(); }
});
hiddenDateInput.addEventListener('change', (e) => {
    const selectedDate = e.target.value;
    if (selectedDate) {
        const parts = selectedDate.split('-');
        dateInput.value = `${parts[2]}/${parts[1]}/${parseInt(parts[0], 10) + 543}`;
    } else {
        const today = new Date();
        dateInput.value = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear() + 543}`;
    }
});
});

if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
navigator.serviceWorker.register('./sw-unified.js')
.then(reg => console.log('Unified Service Worker registered successfully:', reg))
.catch(err => console.log('Service Worker registration failed:', err));
});
}
