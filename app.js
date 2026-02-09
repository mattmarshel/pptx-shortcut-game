/* ======================================
   POWERPOINT MASTER — APP JS
   With animated visual illustrations
   ====================================== */

// ===== SHORTCUT DATA =====
const SHORTCUTS = [
    { title: "Word Wrap", key: "Ctrl+7", category: "Formatting" },
    { title: "Do Not Word Wrap", key: "Ctrl+Shift+7", category: "Formatting" },
    { title: "Quick Keys", key: "Ctrl+Alt+Q", category: "Tools" },
    { title: "Toggle Shape State", key: "Ctrl+T", category: "Shapes" },
    { title: "Make Same Size", key: "Alt+Z", category: "Alignment" },
    { title: "Make Same Height", key: "Ctrl+Shift+E", category: "Alignment" },
    { title: "Make Same Width", key: "Ctrl+Alt+E", category: "Alignment" },
    { title: "Insert Textbox", key: "Alt+Q", category: "Insert" },
    { title: "Text to Autoshape", key: "Alt+Shift+Z", category: "Shapes" },
    { title: "Align and Group", key: "Alt+G", category: "Alignment" },
    { title: "Copy Position", key: "Ctrl+1", category: "Position" },
    { title: "Paste Position", key: "Ctrl+2", category: "Position" },
    { title: "Normal View", key: "Ctrl+3", category: "View" },
    { title: "Slide Sorter View", key: "Ctrl+4", category: "View" },
    { title: "Fit to Window", key: "Ctrl+5", category: "View" },
    { title: "Insert Flag", key: "Ctrl+6", category: "Insert" },
    { title: "Insert Yellow Sticky", key: "Ctrl+0", category: "Insert" },
    { title: "Insert Sticker", key: "Ctrl+Alt+S", category: "Insert" },
    { title: "Insert Legend", key: "Ctrl+Alt+L", category: "Insert" },
    { title: "Reset Fixed Elements", key: "Ctrl+Alt+R", category: "Tools" },
    { title: "Split/Join Textboxes", key: "Ctrl+Alt+J", category: "Tools" },
    { title: "Align Middle", key: "Ctrl+Alt+M", category: "Alignment" },
    { title: "Align Center", key: "Ctrl+Alt+C", category: "Alignment" },
    { title: "Align Left", key: "Ctrl+Alt+Left Arrow", category: "Alignment" },
    { title: "Align Right", key: "Ctrl+Alt+Right Arrow", category: "Alignment" },
    { title: "Align Top", key: "Ctrl+Alt+Up Arrow", category: "Alignment" },
    { title: "Align Bottom", key: "Ctrl+Alt+Down Arrow", category: "Alignment" },
    { title: "Distribute Vertically", key: "Alt+Shift+V", category: "Alignment" },
    { title: "Distribute Horizontally", key: "Alt+Shift+H", category: "Alignment" },
    { title: "Paste Unformatted Text", key: "Ctrl+Alt+T", category: "Formatting" },
    { title: "Shape to Text Box", key: "Ctrl+Shift+W", category: "Shapes" },
    { title: "Apply Default Text Format", key: "Ctrl+Space", category: "Formatting" },
    { title: "Cycle Accent Colors", key: "Alt+Shift+A", category: "Formatting" },
    { title: "Insert New Slide", key: "Ctrl+M", category: "Insert" },
    { title: "Change Font Size", key: "Ctrl+Shift+O", category: "Formatting" },
    { title: "Group", key: "Ctrl+G", category: "Alignment" },
    { title: "Ungroup", key: "Ctrl+Shift+G", category: "Alignment" },
    { title: "Pickup Style", key: "Ctrl+Shift+C", category: "Formatting" },
    { title: "Apply Style", key: "Ctrl+Shift+V", category: "Formatting" },
    { title: "Green Print", key: "Ctrl+Alt+P", category: "Print" },
    { title: "Green Print Two Slides", key: "Ctrl+Alt+2", category: "Print" },
    { title: "Green Print Four Slides", key: "Ctrl+Alt+4", category: "Print" },
    { title: "Insert Footnote", key: "Ctrl+Alt+F", category: "Insert" },
    { title: "Increase List Level", key: "Alt+Shift+Right Arrow", category: "Lists" },
    { title: "Decrease List Level", key: "Alt+Shift+Left Arrow", category: "Lists" },
    { title: "List Line Spacing", key: "Ctrl+Shift+L", category: "Lists" },
    { title: "Bring to Front", key: "Alt+Shift+]", category: "Ordering" },
    { title: "Bring Forward", key: "Alt+]", category: "Ordering" },
    { title: "Send to Back", key: "Alt+Shift+[", category: "Ordering" },
    { title: "Send Backward", key: "Alt+[", category: "Ordering" }
];

const CATEGORIES = [...new Set(SHORTCUTS.map(s => s.category))];

// ===== VISUAL GENERATORS =====
// Each returns an HTML string for an animated mini-slide illustration

function visTitleBar(label) {
    return `<div class="vis-title-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="bar-text">${label || 'PowerPoint'}</span></div>`;
}

const VISUALS = {
    "Word Wrap": () => `<div class="vis">${visTitleBar('Formatting')}
        <div class="vis-canvas">
            <div style="position:absolute;left:15px;top:12px;width:90px;height:55px;border:1.5px solid #F5C4BB;border-radius:3px;background:#FFF5F3"></div>
            <div style="position:absolute;left:20px;top:18px;font-size:6.5px;color:#333;font-family:Inter,sans-serif;animation:wrapText 4s ease-in-out infinite">
                The quick brown fox jumps over the lazy dog today
            </div>
            <div style="position:absolute;right:15px;top:16px;font-size:6px;color:#B7472A;font-weight:700">Ctrl+7</div>
            <div style="position:absolute;left:130px;top:50px;font-size:18px;color:#B7472A;animation:visPulse 4s ease-in-out infinite">&#8629;</div>
            <span class="vis-label">BEFORE &rarr; AFTER</span>
        </div></div>`,

    "Do Not Word Wrap": () => `<div class="vis">${visTitleBar('Formatting')}
        <div class="vis-canvas">
            <div style="position:absolute;left:15px;top:12px;width:90px;height:55px;border:1.5px solid #FFCDD2;border-radius:3px;background:#FFF5F5;overflow:hidden"></div>
            <div style="position:absolute;left:20px;top:18px;font-size:6.5px;color:#333;font-family:Inter,sans-serif;animation:unwrapText 4s ease-in-out infinite">
                The quick brown fox jumps over the lazy dog today
            </div>
            <div style="position:absolute;right:15px;top:16px;font-size:6px;color:#C62828;font-weight:700">Ctrl+Shift+7</div>
            <div style="position:absolute;left:130px;top:50px;font-size:14px;color:#C62828;animation:visPulse 4s ease-in-out infinite">&#8614;</div>
            <span class="vis-label">TEXT EXTENDS</span>
        </div></div>`,

    "Quick Keys": () => `<div class="vis">${visTitleBar('Tools')}
        <div class="vis-canvas">
            <div style="position:absolute;left:50%;top:45%;transform:translate(-50%,-50%);text-align:center">
                <div style="display:flex;gap:4px;margin-bottom:6px;justify-content:center">
                    <div style="width:22px;height:18px;background:#FDEAE6;border:1.5px solid #EF9A9A;border-radius:3px;font-size:6px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#B7472A;animation:insertAppear 4s ease-in-out infinite">Q</div>
                    <div style="width:22px;height:18px;background:#FDEAE6;border:1.5px solid #EF9A9A;border-radius:3px;font-size:6px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#B7472A;animation:insertAppear 4s ease-in-out infinite .2s">K</div>
                    <div style="width:22px;height:18px;background:#FDEAE6;border:1.5px solid #EF9A9A;border-radius:3px;font-size:6px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#B7472A;animation:insertAppear 4s ease-in-out infinite .4s">E</div>
                </div>
                <div style="font-size:6px;color:#6B4A3A">Show all shortcut overlays</div>
            </div>
            <span class="vis-label">QUICK KEYS</span>
        </div></div>`,

    "Toggle Shape State": () => `<div class="vis">${visTitleBar('Shapes')}
        <div class="vis-canvas">
            <div style="position:absolute;left:35px;top:25px;width:50px;height:50px;animation:shapeToggle 4s ease-in-out infinite"></div>
            <div style="position:absolute;left:35px;top:85px;font-size:6px;color:#888;text-align:center;width:50px">Before</div>
            <div style="position:absolute;right:45px;top:25px;width:50px;height:50px;border-radius:50%;background:#1565C0"></div>
            <div style="position:absolute;right:32px;top:85px;font-size:6px;color:#888;text-align:center;width:50px">After</div>
            <div style="position:absolute;left:50%;top:48px;transform:translateX(-50%);font-size:14px;color:#B7472A">&#8644;</div>
            <span class="vis-label">TOGGLE STATE</span>
        </div></div>`,

    "Make Same Size": () => `<div class="vis">${visTitleBar('Alignment')}
        <div class="vis-canvas">
            <div style="position:absolute;left:20px;top:15px;width:30px;height:20px;background:#D4532F;border-radius:3px;animation:sameSize 4s ease-in-out infinite;--from-w:30px;--from-h:20px"></div>
            <div style="position:absolute;left:70px;top:10px;width:65px;height:55px;background:#1565C0;border-radius:3px;animation:sameSize 4s ease-in-out infinite;--from-w:65px;--from-h:55px"></div>
            <div style="position:absolute;right:30px;top:50%;transform:translateY(-50%);font-size:8px;color:#B7472A;font-weight:700;animation:visPulse 4s ease-in-out infinite">= SIZE</div>
            <span class="vis-label">SAME SIZE</span>
        </div></div>`,

    "Make Same Height": () => `<div class="vis">${visTitleBar('Alignment')}
        <div class="vis-canvas">
            <div style="position:absolute;left:25px;top:20px;width:40px;height:24px;background:#D4532F;border-radius:3px;animation:sameHeight 4s ease-in-out infinite;--from-h:24px"></div>
            <div style="position:absolute;left:80px;top:10px;width:40px;height:60px;background:#1565C0;border-radius:3px;animation:sameHeight 4s ease-in-out infinite;--from-h:60px"></div>
            <div style="position:absolute;right:25px;top:50%;transform:translateY(-50%);font-size:8px;color:#B7472A;font-weight:700;animation:visPulse 4s ease-in-out infinite">= H</div>
            <div style="position:absolute;left:10px;top:20px;width:1px;height:60px;border-left:1px dashed #aaa"></div>
            <span class="vis-label">SAME HEIGHT</span>
        </div></div>`,

    "Make Same Width": () => `<div class="vis">${visTitleBar('Alignment')}
        <div class="vis-canvas">
            <div style="position:absolute;left:20px;top:15px;width:25px;height:35px;background:#D4532F;border-radius:3px;animation:sameWidth 4s ease-in-out infinite;--from-w:25px"></div>
            <div style="position:absolute;left:60px;top:15px;width:70px;height:35px;background:#1565C0;border-radius:3px;animation:sameWidth 4s ease-in-out infinite;--from-w:70px"></div>
            <div style="position:absolute;right:25px;top:50%;transform:translateY(-50%);font-size:8px;color:#B7472A;font-weight:700;animation:visPulse 4s ease-in-out infinite">= W</div>
            <span class="vis-label">SAME WIDTH</span>
        </div></div>`,

    "Insert Textbox": () => `<div class="vis">${visTitleBar('Insert')}
        <div class="vis-canvas">
            <div style="position:absolute;left:50%;top:45%;transform:translate(-50%,-50%);width:120px;height:40px;border:2px solid #B7472A;border-radius:4px;background:white;animation:insertAppear 4s ease-in-out infinite;display:flex;align-items:center;padding-left:8px">
                <div style="width:1px;height:18px;background:#B7472A;animation:visPulse 1s ease infinite"></div>
                <span style="font-size:7px;color:#aaa;margin-left:4px">Type here...</span>
            </div>
            <div style="position:absolute;left:50%;bottom:10px;transform:translateX(-50%);font-size:6px;color:#888">Textbox inserted</div>
            <span class="vis-label">INSERT</span>
        </div></div>`,

    "Text to Autoshape": () => `<div class="vis">${visTitleBar('Shapes')}
        <div class="vis-canvas">
            <div style="position:absolute;left:20px;top:20px;width:80px;height:30px;border:1.5px solid #999;border-radius:3px;background:white;font-size:7px;display:flex;align-items:center;justify-content:center;color:#333">Text Box</div>
            <div style="position:absolute;left:50%;top:48px;transform:translateX(-50%);font-size:12px;color:#B7472A">&#10140;</div>
            <div style="position:absolute;left:20px;top:58px;width:80px;height:40px;border:2px solid #D4532F;border-radius:20px;background:#FDEAE6;font-size:7px;display:flex;align-items:center;justify-content:center;color:#B7472A;animation:insertAppear 4s ease-in-out infinite">AutoShape</div>
            <span class="vis-label">CONVERT</span>
        </div></div>`,

    "Align and Group": () => `<div class="vis">${visTitleBar('Alignment')}
        <div class="vis-canvas">
            <div style="position:absolute;left:15px;top:12px;width:30px;height:25px;background:#D4532F;border-radius:3px;animation:alignL 4s ease-in-out infinite;--from-x:15px"></div>
            <div style="position:absolute;left:90px;top:40px;width:35px;height:20px;background:#1565C0;border-radius:3px;animation:alignL 4s ease-in-out infinite;--from-x:90px"></div>
            <div style="position:absolute;left:50px;top:70px;width:25px;height:22px;background:#E65100;border-radius:3px;animation:alignL 4s ease-in-out infinite;--from-x:50px"></div>
            <div style="position:absolute;left:8px;top:8px;width:70px;height:95px;border:2px dashed #B7472A;border-radius:4px;animation:groupShow 4s ease-in-out infinite"></div>
            <span class="vis-label">ALIGN + GROUP</span>
        </div></div>`,

    "Copy Position": () => `<div class="vis">${visTitleBar('Position')}
        <div class="vis-canvas">
            <div style="position:absolute;left:30px;top:25px;width:45px;height:35px;background:#D4532F;border-radius:3px;display:flex;align-items:center;justify-content:center">
                <span style="font-size:6px;color:white;font-weight:700">SOURCE</span>
            </div>
            <div style="position:absolute;left:30px;top:25px;width:45px;height:35px;border:2px dashed #B7472A;border-radius:3px;animation:visPulse 2s ease-in-out infinite"></div>
            <div style="position:absolute;left:35px;top:68px;font-size:6px;color:#B7472A;font-weight:600">x:30 y:25</div>
            <div style="position:absolute;right:30px;top:30px;font-size:14px;color:#B7472A;animation:visPulse 4s ease-in-out infinite">&#128203;</div>
            <span class="vis-label">COPY POS</span>
        </div></div>`,

    "Paste Position": () => `<div class="vis">${visTitleBar('Position')}
        <div class="vis-canvas">
            <div style="position:absolute;left:30px;top:25px;width:45px;height:35px;border:1.5px dashed #aaa;border-radius:3px;background:#f5f5f5">
                <span style="font-size:6px;color:#999;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)">TARGET</span>
            </div>
            <div style="position:absolute;left:120px;top:15px;width:45px;height:35px;background:#1565C0;border-radius:3px;animation:alignL 4s ease-in-out infinite;--from-x:120px;display:flex;align-items:center;justify-content:center">
                <span style="font-size:6px;color:white;font-weight:700">OBJ</span>
            </div>
            <div style="position:absolute;left:50%;bottom:8px;transform:translateX(-50%);font-size:6px;color:#6B4A3A">Pastes to copied position</div>
            <span class="vis-label">PASTE POS</span>
        </div></div>`,

    "Normal View": () => `<div class="vis">${visTitleBar('View')}
        <div class="vis-canvas">
            <div style="position:absolute;left:8px;top:6px;width:40px;height:90px;background:#FDEAE6;border:1px solid #F5C4BB;border-radius:2px;padding:3px">
                <div style="width:100%;height:12px;background:white;border:1px solid #ddd;border-radius:1px;margin-bottom:2px"></div>
                <div style="width:100%;height:12px;background:#E3F2FD;border:1px solid #BBDEFB;border-radius:1px;margin-bottom:2px"></div>
                <div style="width:100%;height:12px;background:white;border:1px solid #ddd;border-radius:1px"></div>
            </div>
            <div style="position:absolute;left:55px;top:6px;width:100px;height:75px;background:white;border:2px solid #B7472A;border-radius:3px;display:flex;align-items:center;justify-content:center;animation:insertAppear 4s ease-in-out infinite">
                <div style="text-align:center"><div style="font-size:8px;font-weight:700;color:#B7472A">Slide</div><div style="font-size:6px;color:#888">Normal View</div></div>
            </div>
            <div style="position:absolute;left:55px;top:85px;width:100px;height:12px;background:#f5f5f5;border:1px solid #ddd;border-radius:2px;font-size:5px;color:#999;display:flex;align-items:center;padding-left:4px">Notes panel</div>
            <span class="vis-label">NORMAL</span>
        </div></div>`,

    "Slide Sorter View": () => `<div class="vis">${visTitleBar('View')}
        <div class="vis-canvas" style="display:flex;flex-wrap:wrap;gap:5px;padding:8px;align-content:flex-start">
            ${[1,2,3,4,5,6].map((n,i) => `<div style="width:42px;height:30px;background:white;border:1.5px solid ${i===0?'#B7472A':'#ddd'};border-radius:2px;font-size:6px;display:flex;align-items:center;justify-content:center;color:#888;animation:insertAppear 4s ease-in-out infinite ${i*0.15}s">Slide ${n}</div>`).join('')}
            <span class="vis-label">SORTER VIEW</span>
        </div></div>`,

    "Fit to Window": () => `<div class="vis">${visTitleBar('View')}
        <div class="vis-canvas" style="display:flex;align-items:center;justify-content:center">
            <div style="width:80%;height:80%;background:white;border:2px solid #B7472A;border-radius:3px;display:flex;align-items:center;justify-content:center;animation:zoomFit 4s ease-in-out infinite">
                <div style="text-align:center"><div style="font-size:9px;font-weight:700;color:#B7472A">&#x2922;</div><div style="font-size:6px;color:#888">Fit to Window</div></div>
            </div>
            <span class="vis-label">ZOOM FIT</span>
        </div></div>`,

    "Insert Flag": () => `<div class="vis">${visTitleBar('Insert')}
        <div class="vis-canvas" style="display:flex;align-items:center;justify-content:center">
            <div style="animation:insertAppear 4s ease-in-out infinite;text-align:center">
                <div style="font-size:32px">&#127988;</div>
                <div style="font-size:6px;color:#888;margin-top:4px">Flag inserted on slide</div>
            </div>
            <span class="vis-label">INSERT FLAG</span>
        </div></div>`,

    "Insert Yellow Sticky": () => `<div class="vis">${visTitleBar('Insert')}
        <div class="vis-canvas" style="display:flex;align-items:center;justify-content:center">
            <div style="width:80px;height:70px;background:#FFF9C4;border:1px solid #FFE082;border-radius:2px;box-shadow:2px 2px 6px rgba(0,0,0,.1);padding:6px;animation:insertAppear 4s ease-in-out infinite">
                <div style="font-size:6px;color:#F57F17;font-weight:700;margin-bottom:3px">Note</div>
                <div style="font-size:5.5px;color:#888;line-height:1.4">Remember to<br>check this slide</div>
            </div>
            <span class="vis-label">STICKY NOTE</span>
        </div></div>`,

    "Insert Sticker": () => `<div class="vis">${visTitleBar('Insert')}
        <div class="vis-canvas" style="display:flex;align-items:center;justify-content:center">
            <div style="animation:insertAppear 4s ease-in-out infinite;text-align:center">
                <div style="width:50px;height:50px;background:#FDEAE6;border:2px solid #D4532F;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px">&#9733;</div>
                <div style="font-size:6px;color:#888;margin-top:6px">Sticker added</div>
            </div>
            <span class="vis-label">INSERT STICKER</span>
        </div></div>`,

    "Insert Legend": () => `<div class="vis">${visTitleBar('Insert')}
        <div class="vis-canvas">
            <div style="position:absolute;right:15px;top:10px;width:80px;background:white;border:1.5px solid #F5C4BB;border-radius:4px;padding:5px;animation:insertAppear 4s ease-in-out infinite">
                <div style="font-size:6px;font-weight:700;color:#333;margin-bottom:4px">Legend</div>
                <div style="display:flex;align-items:center;gap:4px;margin-bottom:2px"><div style="width:10px;height:6px;background:#D4532F;border-radius:1px"></div><span style="font-size:5px;color:#666">Series A</span></div>
                <div style="display:flex;align-items:center;gap:4px;margin-bottom:2px"><div style="width:10px;height:6px;background:#1565C0;border-radius:1px"></div><span style="font-size:5px;color:#666">Series B</span></div>
                <div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:6px;background:#E65100;border-radius:1px"></div><span style="font-size:5px;color:#666">Series C</span></div>
            </div>
            <div style="position:absolute;left:12px;top:15px;width:50px;height:65px;background:#f5f5f5;border:1px solid #ddd;border-radius:3px;display:flex;align-items:flex-end;padding:4px;gap:3px">
                <div style="width:10px;background:#D4532F;height:60%;border-radius:2px 2px 0 0"></div>
                <div style="width:10px;background:#1565C0;height:80%;border-radius:2px 2px 0 0"></div>
                <div style="width:10px;background:#E65100;height:45%;border-radius:2px 2px 0 0"></div>
            </div>
            <span class="vis-label">LEGEND</span>
        </div></div>`,

    "Reset Fixed Elements": () => `<div class="vis">${visTitleBar('Tools')}
        <div class="vis-canvas">
            <div style="position:absolute;left:25px;top:15px;width:30px;height:25px;background:#EF5350;border-radius:3px;opacity:.6;animation:alignL 4s ease-in-out infinite;--from-x:80px"></div>
            <div style="position:absolute;left:70px;top:45px;width:35px;height:20px;background:#42A5F5;border-radius:3px;opacity:.6;animation:alignL 4s ease-in-out infinite;--from-x:20px"></div>
            <div style="position:absolute;left:50%;top:80px;transform:translateX(-50%);font-size:14px;color:#B7472A;animation:visPulse 4s ease-in-out infinite">&#8634;</div>
            <div style="position:absolute;left:50%;bottom:4px;transform:translateX(-50%);font-size:6px;color:#888">Elements snap to default</div>
            <span class="vis-label">RESET</span>
        </div></div>`,

    "Split/Join Textboxes": () => `<div class="vis">${visTitleBar('Tools')}
        <div class="vis-canvas">
            <div style="position:absolute;left:15px;top:14px;font-size:6px;color:#888;font-weight:600">BEFORE:</div>
            <div style="position:absolute;left:15px;top:26px;width:110px;height:22px;background:white;border:1.5px solid #B7472A;border-radius:3px;font-size:6px;display:flex;align-items:center;padding:0 6px;color:#333">Hello World! How are you?</div>
            <div style="position:absolute;left:50%;top:52px;transform:translateX(-50%);font-size:10px;color:#B7472A">&#8595;</div>
            <div style="position:absolute;left:15px;top:60px;font-size:6px;color:#888;font-weight:600">AFTER:</div>
            <div style="position:absolute;left:15px;top:72px;width:52px;height:22px;background:white;border:1.5px solid #D4532F;border-radius:3px;font-size:6px;display:flex;align-items:center;padding:0 6px;color:#333;animation:insertAppear 4s ease-in-out infinite">Hello World!</div>
            <div style="position:absolute;left:75px;top:72px;width:52px;height:22px;background:white;border:1.5px solid #D4532F;border-radius:3px;font-size:6px;display:flex;align-items:center;padding:0 6px;color:#333;animation:insertAppear 4s ease-in-out infinite .2s">How are you?</div>
            <span class="vis-label">SPLIT / JOIN</span>
        </div></div>`,

    "Align Middle": () => makeAlignVisual('middle'),
    "Align Center": () => makeAlignVisual('center'),
    "Align Left": () => makeAlignVisual('left'),
    "Align Right": () => makeAlignVisual('right'),
    "Align Top": () => makeAlignVisual('top'),
    "Align Bottom": () => makeAlignVisual('bottom'),

    "Distribute Vertically": () => `<div class="vis">${visTitleBar('Alignment')}
        <div class="vis-canvas">
            <div style="position:absolute;left:40px;top:5px;width:45px;height:18px;background:#D4532F;border-radius:3px;animation:distributeV 4s ease-in-out infinite;--from-y:5px;--to-y:8px"></div>
            <div style="position:absolute;left:40px;top:25px;width:45px;height:18px;background:#1565C0;border-radius:3px;animation:distributeV 4s ease-in-out infinite;--from-y:25px;--to-y:40px"></div>
            <div style="position:absolute;left:40px;top:70px;width:45px;height:18px;background:#E65100;border-radius:3px;animation:distributeV 4s ease-in-out infinite;--from-y:70px;--to-y:72px"></div>
            <div style="position:absolute;right:20px;top:50%;transform:translateY(-50%) rotate(90deg);font-size:16px;color:#B7472A;animation:visPulse 4s ease-in-out infinite">&#8651;</div>
            <span class="vis-label">DISTRIBUTE V</span>
        </div></div>`,

    "Distribute Horizontally": () => `<div class="vis">${visTitleBar('Alignment')}
        <div class="vis-canvas">
            <div style="position:absolute;left:5px;top:30px;width:25px;height:35px;background:#D4532F;border-radius:3px;animation:distributeH 4s ease-in-out infinite;--from-x:5px;--to-x:15px"></div>
            <div style="position:absolute;left:40px;top:30px;width:25px;height:35px;background:#1565C0;border-radius:3px;animation:distributeH 4s ease-in-out infinite;--from-x:40px;--to-x:75px"></div>
            <div style="position:absolute;left:110px;top:30px;width:25px;height:35px;background:#E65100;border-radius:3px;animation:distributeH 4s ease-in-out infinite;--from-x:110px;--to-x:135px"></div>
            <div style="position:absolute;left:50%;bottom:8px;transform:translateX(-50%);font-size:16px;color:#B7472A;animation:visPulse 4s ease-in-out infinite">&#8651;</div>
            <span class="vis-label">DISTRIBUTE H</span>
        </div></div>`,

    "Paste Unformatted Text": () => `<div class="vis">${visTitleBar('Formatting')}
        <div class="vis-canvas">
            <div style="position:absolute;left:15px;top:12px;font-size:6px;color:#888;font-weight:600">BEFORE:</div>
            <div style="position:absolute;left:15px;top:24px;font-size:10px;font-weight:700;font-style:italic;color:#C62828;font-family:Georgia,serif">Fancy Text Here</div>
            <div style="position:absolute;left:50%;top:46px;transform:translateX(-50%);font-size:10px;color:#B7472A">&#8595;</div>
            <div style="position:absolute;left:15px;top:56px;font-size:6px;color:#888;font-weight:600">AFTER:</div>
            <div style="position:absolute;left:15px;top:68px;font-size:9px;font-weight:400;color:#333;font-family:Inter,sans-serif;animation:insertAppear 4s ease-in-out infinite">Fancy Text Here</div>
            <span class="vis-label">UNFORMATTED</span>
        </div></div>`,

    "Shape to Text Box": () => `<div class="vis">${visTitleBar('Shapes')}
        <div class="vis-canvas">
            <div style="position:absolute;left:20px;top:18px;width:55px;height:55px;background:#FDEAE6;border:2px solid #D4532F;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:7px;color:#B7472A">Shape</div>
            <div style="position:absolute;left:50%;top:42px;transform:translateX(-50%);font-size:14px;color:#B7472A">&#10140;</div>
            <div style="position:absolute;right:20px;top:22px;width:70px;height:30px;background:white;border:2px solid #999;border-radius:3px;display:flex;align-items:center;padding-left:6px;animation:insertAppear 4s ease-in-out infinite">
                <div style="width:1px;height:14px;background:#333;animation:visPulse 1s ease infinite"></div>
                <span style="font-size:6px;color:#aaa;margin-left:3px">Text Box</span>
            </div>
            <span class="vis-label">SHAPE &rarr; TEXT</span>
        </div></div>`,

    "Apply Default Text Format": () => `<div class="vis">${visTitleBar('Formatting')}
        <div class="vis-canvas">
            <div style="position:absolute;left:15px;top:12px;font-size:6px;color:#888;font-weight:600">BEFORE:</div>
            <div style="position:absolute;left:15px;top:24px;animation:formatStrip 4s ease-in-out infinite;font-family:Inter,sans-serif">Styled Text Sample</div>
            <div style="position:absolute;left:15px;top:52px;font-size:6px;color:#888;font-weight:600">AFTER:</div>
            <div style="position:absolute;left:15px;top:64px;font-size:9px;color:#333;font-weight:400;font-family:Inter,sans-serif">Styled Text Sample</div>
            <div style="position:absolute;right:15px;top:60px;font-size:14px;color:#B7472A;animation:visPulse 4s ease-in-out infinite">&#8998;</div>
            <span class="vis-label">DEFAULT FORMAT</span>
        </div></div>`,

    "Cycle Accent Colors": () => `<div class="vis">${visTitleBar('Formatting')}
        <div class="vis-canvas" style="display:flex;align-items:center;justify-content:center;gap:10px">
            <div style="width:55px;height:45px;border-radius:6px;animation:colorCycle 4s ease-in-out infinite"></div>
            <div style="text-align:center">
                <div style="font-size:18px;animation:visPulse 2s ease infinite">&#x1F3A8;</div>
                <div style="font-size:6px;color:#888;margin-top:3px">Colors cycle<br>through accents</div>
            </div>
            <span class="vis-label">CYCLE COLORS</span>
        </div></div>`,

    "Insert New Slide": () => `<div class="vis">${visTitleBar('Insert')}
        <div class="vis-canvas">
            <div style="position:absolute;left:15px;top:10px;width:55px;height:40px;background:white;border:1.5px solid #ddd;border-radius:2px;display:flex;align-items:center;justify-content:center;font-size:6px;color:#999">Slide 1</div>
            <div style="position:absolute;left:80px;top:10px;width:55px;height:40px;background:white;border:2px solid #B7472A;border-radius:2px;display:flex;align-items:center;justify-content:center;font-size:6px;color:#B7472A;font-weight:700;animation:insertAppear 4s ease-in-out infinite">+ New</div>
            <div style="position:absolute;left:15px;top:58px;width:55px;height:40px;background:white;border:1.5px solid #ddd;border-radius:2px;display:flex;align-items:center;justify-content:center;font-size:6px;color:#999">Slide 2</div>
            <span class="vis-label">NEW SLIDE</span>
        </div></div>`,

    "Change Font Size": () => `<div class="vis">${visTitleBar('Formatting')}
        <div class="vis-canvas" style="display:flex;align-items:center;justify-content:center">
            <div style="animation:fontGrow 4s ease-in-out infinite;color:#B7472A;font-weight:700;font-family:Inter,sans-serif">Aa</div>
            <span class="vis-label">FONT SIZE</span>
        </div></div>`,

    "Group": () => `<div class="vis">${visTitleBar('Alignment')}
        <div class="vis-canvas">
            <div style="position:absolute;left:20px;top:15px;width:35px;height:28px;background:#D4532F;border-radius:3px"></div>
            <div style="position:absolute;left:45px;top:35px;width:30px;height:25px;background:#1565C0;border-radius:3px"></div>
            <div style="position:absolute;left:28px;top:58px;width:40px;height:20px;background:#E65100;border-radius:3px"></div>
            <div style="position:absolute;left:14px;top:10px;width:68px;height:74px;border:2px dashed #B7472A;border-radius:4px;animation:groupShow 4s ease-in-out infinite"></div>
            <div style="position:absolute;right:20px;top:50%;transform:translateY(-50%);text-align:center">
                <div style="font-size:20px;color:#B7472A;animation:visPulse 4s ease-in-out infinite">&#9744;</div>
                <div style="font-size:6px;color:#888">Group</div>
            </div>
            <span class="vis-label">GROUP</span>
        </div></div>`,

    "Ungroup": () => `<div class="vis">${visTitleBar('Alignment')}
        <div class="vis-canvas">
            <div style="position:absolute;left:20px;top:15px;width:35px;height:28px;background:#D4532F;border-radius:3px;animation:ungroupScatter 4s ease-in-out infinite;--from-x:20px;--from-y:15px;--to-x:8px;--to-y:5px"></div>
            <div style="position:absolute;left:45px;top:35px;width:30px;height:25px;background:#1565C0;border-radius:3px;animation:ungroupScatter 4s ease-in-out infinite;--from-x:45px;--from-y:35px;--to-x:70px;--to-y:15px"></div>
            <div style="position:absolute;left:28px;top:58px;width:40px;height:20px;background:#E65100;border-radius:3px;animation:ungroupScatter 4s ease-in-out infinite;--from-x:28px;--from-y:58px;--to-x:15px;--to-y:72px"></div>
            <div style="position:absolute;left:14px;top:10px;width:68px;height:74px;border:2px dashed #B7472A;border-radius:4px;animation:ungroupHide 4s ease-in-out infinite"></div>
            <div style="position:absolute;right:18px;top:50%;transform:translateY(-50%);text-align:center">
                <div style="font-size:16px;color:#C62828;animation:visPulse 4s ease-in-out infinite">&#10005;</div>
                <div style="font-size:6px;color:#888">Ungroup</div>
            </div>
            <span class="vis-label">UNGROUP</span>
        </div></div>`,

    "Pickup Style": () => `<div class="vis">${visTitleBar('Formatting')}
        <div class="vis-canvas">
            <div style="position:absolute;left:20px;top:20px;width:55px;height:40px;background:#D4532F;border:2px solid #8B2F1A;border-radius:4px;display:flex;align-items:center;justify-content:center;animation:stylePickup 4s ease-in-out infinite">
                <span style="font-size:7px;color:white;font-weight:700">Styled</span>
            </div>
            <div style="position:absolute;left:85px;top:25px;font-size:22px;animation:visPulse 4s ease-in-out infinite">&#128065;</div>
            <div style="position:absolute;left:50%;bottom:10px;transform:translateX(-50%);font-size:6px;color:#888">Style copied to clipboard</div>
            <span class="vis-label">PICKUP</span>
        </div></div>`,

    "Apply Style": () => `<div class="vis">${visTitleBar('Formatting')}
        <div class="vis-canvas">
            <div style="position:absolute;left:20px;top:25px;width:45px;height:35px;background:#D4532F;border:2px solid #8B2F1A;border-radius:4px;font-size:6px;color:white;display:flex;align-items:center;justify-content:center;font-weight:700">Source</div>
            <div style="position:absolute;left:50%;top:38px;transform:translateX(-50%);font-size:12px;color:#B7472A">&#10140;</div>
            <div style="position:absolute;right:20px;top:25px;width:45px;height:35px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:6px;font-weight:700;color:white;animation:styleApply 4s ease-in-out infinite">Target</div>
            <div style="position:absolute;left:50%;bottom:10px;transform:translateX(-50%);font-size:6px;color:#888">Style applied to target</div>
            <span class="vis-label">APPLY STYLE</span>
        </div></div>`,

    "Green Print": () => makePrintVisual(1),
    "Green Print Two Slides": () => makePrintVisual(2),
    "Green Print Four Slides": () => makePrintVisual(4),

    "Insert Footnote": () => `<div class="vis">${visTitleBar('Insert')}
        <div class="vis-canvas">
            <div style="position:absolute;left:15px;top:8px;width:120px;height:55px;background:white;border:1px solid #ddd;border-radius:3px;padding:6px">
                <div style="font-size:6px;color:#333;line-height:1.5">Presentation content goes here<br>with important details<sup style="color:#B7472A;font-weight:700">1</sup></div>
            </div>
            <div style="position:absolute;left:15px;top:68px;width:120px;border-top:1px solid #ccc;padding-top:4px;animation:insertAppear 4s ease-in-out infinite">
                <div style="font-size:5px;color:#666"><sup style="color:#B7472A;font-weight:700">1</sup> This is the footnote text</div>
            </div>
            <span class="vis-label">FOOTNOTE</span>
        </div></div>`,

    "Increase List Level": () => `<div class="vis">${visTitleBar('Lists')}
        <div class="vis-canvas" style="padding:10px 15px">
            <div style="font-size:6.5px;color:#333;margin-bottom:4px">&#8226; First item</div>
            <div style="font-size:6.5px;color:#B7472A;font-weight:600;animation:indentRight 4s ease-in-out infinite">&#8226; Second item</div>
            <div style="font-size:6.5px;color:#333;margin-bottom:4px">&#8226; Third item</div>
            <div style="position:absolute;right:15px;top:50%;transform:translateY(-50%);font-size:16px;color:#B7472A;animation:visPulse 4s ease-in-out infinite">&#8618;</div>
            <span class="vis-label">INDENT +</span>
        </div></div>`,

    "Decrease List Level": () => `<div class="vis">${visTitleBar('Lists')}
        <div class="vis-canvas" style="padding:10px 15px">
            <div style="font-size:6.5px;color:#333;margin-bottom:4px">&#8226; First item</div>
            <div style="font-size:6.5px;color:#B7472A;font-weight:600;animation:indentLeft 4s ease-in-out infinite">&#8226; Second item</div>
            <div style="font-size:6.5px;color:#333;margin-bottom:4px">&#8226; Third item</div>
            <div style="position:absolute;right:15px;top:50%;transform:translateY(-50%);font-size:16px;color:#B7472A;animation:visPulse 4s ease-in-out infinite">&#8617;</div>
            <span class="vis-label">INDENT -</span>
        </div></div>`,

    "List Line Spacing": () => `<div class="vis">${visTitleBar('Lists')}
        <div class="vis-canvas" style="padding:10px 15px">
            <div style="font-size:6.5px;color:#333;animation:spacingExpand 4s ease-in-out infinite">
                &#8226; First item<br>
                &#8226; Second item<br>
                &#8226; Third item<br>
                &#8226; Fourth item
            </div>
            <div style="position:absolute;right:15px;top:50%;transform:translateY(-50%);font-size:16px;color:#B7472A;animation:visPulse 4s ease-in-out infinite">&#8693;</div>
            <span class="vis-label">LINE SPACING</span>
        </div></div>`,

    "Bring to Front": () => makeOrderVisual('front'),
    "Bring Forward": () => makeOrderVisual('forward'),
    "Send to Back": () => makeOrderVisual('back'),
    "Send Backward": () => makeOrderVisual('backward')
};

// ===== VISUAL HELPER GENERATORS =====

function makeAlignVisual(direction) {
    const tb = visTitleBar('Alignment');
    const shapes = [
        { color: '#D4532F', w: 35, h: 25 },
        { color: '#1565C0', w: 30, h: 30 },
        { color: '#E65100', w: 40, h: 20 }
    ];
    // Scattered start positions
    const starts = [
        { x: 20, y: 12 },
        { x: 80, y: 40 },
        { x: 45, y: 72 }
    ];

    let anim, label, arrow;
    const canvasW = 160, canvasH = 100;

    switch (direction) {
        case 'left':
            anim = starts.map((s, i) => `position:absolute;left:${s.x}px;top:${s.y}px;width:${shapes[i].w}px;height:${shapes[i].h}px;background:${shapes[i].color};border-radius:3px;animation:alignL 4s ease-in-out infinite;--from-x:${s.x}px`);
            label = 'ALIGN LEFT'; arrow = '&#8612;';
            break;
        case 'right':
            anim = starts.map((s, i) => {
                const toX = canvasW - shapes[i].w - 12;
                return `position:absolute;left:${s.x}px;top:${s.y}px;width:${shapes[i].w}px;height:${shapes[i].h}px;background:${shapes[i].color};border-radius:3px;animation:alignR 4s ease-in-out infinite;--from-x:${s.x}px;--to-x:${toX}px`;
            });
            label = 'ALIGN RIGHT'; arrow = '&#8614;';
            break;
        case 'center':
            anim = starts.map((s, i) => `position:absolute;left:${s.x}px;top:${s.y}px;width:${shapes[i].w}px;height:${shapes[i].h}px;background:${shapes[i].color};border-radius:3px;animation:alignCX 4s ease-in-out infinite;--from-x:${s.x}px`);
            label = 'ALIGN CENTER'; arrow = '&#8596;';
            break;
        case 'top':
            anim = starts.map((s, i) => `position:absolute;left:${s.x}px;top:${s.y}px;width:${shapes[i].w}px;height:${shapes[i].h}px;background:${shapes[i].color};border-radius:3px;animation:alignT 4s ease-in-out infinite;--from-y:${s.y}px`);
            label = 'ALIGN TOP'; arrow = '&#8613;';
            break;
        case 'bottom':
            anim = starts.map((s, i) => {
                const toY = canvasH - shapes[i].h - 8;
                return `position:absolute;left:${s.x}px;top:${s.y}px;width:${shapes[i].w}px;height:${shapes[i].h}px;background:${shapes[i].color};border-radius:3px;animation:alignB 4s ease-in-out infinite;--from-y:${s.y}px;--to-y:${toY}px`;
            });
            label = 'ALIGN BOTTOM'; arrow = '&#8615;';
            break;
        case 'middle':
            anim = starts.map((s, i) => `position:absolute;left:${s.x}px;top:${s.y}px;width:${shapes[i].w}px;height:${shapes[i].h}px;background:${shapes[i].color};border-radius:3px;animation:alignMY 4s ease-in-out infinite;--from-y:${s.y}px`);
            label = 'ALIGN MIDDLE'; arrow = '&#8597;';
            break;
    }

    return `<div class="vis">${tb}<div class="vis-canvas">
        ${anim.map(a => `<div style="${a}"></div>`).join('')}
        <div style="position:absolute;right:15px;top:50%;transform:translateY(-50%);font-size:16px;color:#B7472A;animation:visPulse 4s ease-in-out infinite">${arrow}</div>
        <span class="vis-label">${label}</span>
    </div></div>`;
}

function makePrintVisual(slidesPerPage) {
    const tb = visTitleBar('Print');
    let slides = '';
    if (slidesPerPage === 1) {
        slides = `<div style="width:70px;height:50px;background:white;border:1.5px solid #B7472A;border-radius:2px;display:flex;align-items:center;justify-content:center;font-size:7px;color:#B7472A">Slide 1</div>`;
    } else if (slidesPerPage === 2) {
        slides = `<div style="display:flex;flex-direction:column;gap:4px">
            <div style="width:65px;height:24px;background:white;border:1px solid #B7472A;border-radius:2px;font-size:6px;display:flex;align-items:center;justify-content:center;color:#B7472A">Slide 1</div>
            <div style="width:65px;height:24px;background:white;border:1px solid #B7472A;border-radius:2px;font-size:6px;display:flex;align-items:center;justify-content:center;color:#B7472A">Slide 2</div>
        </div>`;
    } else {
        slides = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:3px">
            ${[1,2,3,4].map(n => `<div style="width:32px;height:22px;background:white;border:1px solid #B7472A;border-radius:1px;font-size:5px;display:flex;align-items:center;justify-content:center;color:#B7472A">${n}</div>`).join('')}
        </div>`;
    }
    return `<div class="vis">${tb}<div class="vis-canvas" style="display:flex;align-items:center;justify-content:center;gap:12px">
        <div style="width:85px;height:90px;background:#f9f9f9;border:1.5px solid #ddd;border-radius:3px;display:flex;align-items:center;justify-content:center;animation:insertAppear 4s ease-in-out infinite">
            ${slides}
        </div>
        <div style="text-align:center">
            <div style="font-size:20px;color:#B7472A">&#128424;</div>
            <div style="font-size:6px;color:#888;margin-top:3px">${slidesPerPage} per page</div>
        </div>
        <span class="vis-label">PRINT</span>
    </div></div>`;
}

function makeOrderVisual(direction) {
    const tb = visTitleBar('Ordering');
    const isFront = direction === 'front' || direction === 'forward';
    const label = direction === 'front' ? 'BRING FRONT' : direction === 'forward' ? 'BRING FWD' : direction === 'back' ? 'SEND BACK' : 'SEND BKWD';

    const highlightColor = isFront ? '#D4532F' : '#EF5350';
    const animName = isFront ? 'bringFront' : 'sendBack';

    return `<div class="vis">${tb}<div class="vis-canvas">
        <div style="position:absolute;left:25px;top:18px;width:50px;height:40px;background:#CFD8DC;border:1.5px solid #B0BEC5;border-radius:3px;z-index:2"></div>
        <div style="position:absolute;left:45px;top:28px;width:50px;height:40px;background:#90A4AE;border:1.5px solid #78909C;border-radius:3px;z-index:3"></div>
        <div style="position:absolute;left:65px;top:38px;width:50px;height:40px;background:${highlightColor};border:2px solid ${isFront ? '#8B2F1A' : '#C62828'};border-radius:3px;animation:${animName} 4s ease-in-out infinite;display:flex;align-items:center;justify-content:center">
            <span style="font-size:7px;color:white;font-weight:700">&#9733;</span>
        </div>
        <div style="position:absolute;right:15px;top:20px;font-size:${isFront ? '18' : '16'}px;color:${isFront ? '#B7472A' : '#C62828'};animation:visPulse 4s ease-in-out infinite">${isFront ? '&#8593;' : '&#8595;'}</div>
        <div style="position:absolute;right:10px;top:42px;font-size:6px;color:#888">${isFront ? 'To front' : 'To back'}</div>
        <span class="vis-label">${label}</span>
    </div></div>`;
}

// Render a visual for a given shortcut title
function renderVisual(title) {
    const gen = VISUALS[title];
    if (gen) return gen();
    // Fallback: show the category icon
    const shortcut = SHORTCUTS.find(s => s.title === title);
    const cat = shortcut ? shortcut.category : 'Tools';
    return `<div class="vis">${visTitleBar(cat)}<div class="vis-canvas" style="display:flex;align-items:center;justify-content:center">
        <div style="text-align:center;color:#888"><div style="font-size:24px;margin-bottom:4px">&#9881;</div><div style="font-size:7px">${title}</div></div>
        <span class="vis-label">${cat.toUpperCase()}</span>
    </div></div>`;
}

// ===== STATE =====
let state = {
    progress: {},
    streak: 0,
    bestSpeed: 0,
    currentCard: 0,
    cardDeck: [],
    practiceIndex: 0,
    practiceQueue: [],
    practiceCorrect: 0,
    practiceWrong: 0,
    practiceAnswered: false,
    quizQuestions: [],
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    speedScore: 0,
    speedTimer: null,
    speedTimeLeft: 60,
    activeCategory: null
};

// ===== INIT =====
function init() {
    loadProgress();
    addSVGDefs();
    setupNav();
    setupDashboard();
    setupLearn();
    setupPractice();
    setupQuiz();
    setupSpeed();
    updateHeaderStats();
}

function addSVGDefs() {
    const svg = document.querySelector('.progress-ring');
    if (svg) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.id = 'progressGradient';
        gradient.setAttribute('x1', '0%'); gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%'); gradient.setAttribute('y2', '100%');
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%'); stop1.setAttribute('stop-color', '#B7472A');
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%'); stop2.setAttribute('stop-color', '#E8845A');
        gradient.appendChild(stop1); gradient.appendChild(stop2);
        defs.appendChild(gradient); svg.insertBefore(defs, svg.firstChild);
    }
}

// ===== PERSISTENCE =====
function loadProgress() {
    try {
        const saved = localStorage.getItem('pptx-shortcut-master');
        if (saved) {
            const data = JSON.parse(saved);
            state.progress = data.progress || {};
            state.streak = data.streak || 0;
            state.bestSpeed = data.bestSpeed || 0;
        }
    } catch (e) { /* ignore */ }
    SHORTCUTS.forEach(s => {
        if (!state.progress[s.title]) {
            state.progress[s.title] = { status: 'new', correctStreak: 0, lastSeen: 0 };
        }
    });
}

function saveProgress() {
    try {
        localStorage.setItem('pptx-shortcut-master', JSON.stringify({
            progress: state.progress, streak: state.streak, bestSpeed: state.bestSpeed
        }));
    } catch (e) { /* ignore */ }
}

function resetAllProgress() {
    if (confirm('Reset all progress? This cannot be undone.')) {
        state.progress = {};
        state.streak = 0;
        state.bestSpeed = 0;
        SHORTCUTS.forEach(s => {
            state.progress[s.title] = { status: 'new', correctStreak: 0, lastSeen: 0 };
        });
        saveProgress();
        setupDashboard();
        updateHeaderStats();
    }
}

// ===== HELPERS =====
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getFilteredShortcuts() {
    if (!state.activeCategory) return [...SHORTCUTS];
    return SHORTCUTS.filter(s => s.category === state.activeCategory);
}

function getMasteredCount() { return Object.values(state.progress).filter(p => p.status === 'mastered').length; }
function getLearningCount() { return Object.values(state.progress).filter(p => p.status === 'learning').length; }
function getNewCount() { return Object.values(state.progress).filter(p => p.status === 'new').length; }

function updateHeaderStats() {
    document.getElementById('masteredCount').textContent = getMasteredCount();
    document.getElementById('streakCount').textContent = state.streak;
}

function markCorrect(title) {
    const p = state.progress[title];
    p.correctStreak++;
    p.lastSeen = Date.now();
    if (p.correctStreak >= 3) p.status = 'mastered';
    else if (p.status === 'new') p.status = 'learning';
    state.streak++;
    saveProgress(); updateHeaderStats();
}

function markWrong(title) {
    const p = state.progress[title];
    p.correctStreak = 0;
    p.lastSeen = Date.now();
    if (p.status === 'new') p.status = 'learning';
    state.streak = 0;
    saveProgress(); updateHeaderStats();
}

// ===== NAVIGATION =====
function setupNav() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchView(btn.dataset.mode));
    });
    document.querySelectorAll('.mode-card[data-launch]').forEach(btn => {
        btn.addEventListener('click', () => switchView(btn.dataset.launch));
    });
}

function switchView(mode) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-btn[data-mode="${mode}"]`);
    if (activeNav) activeNav.classList.add('active');
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const view = document.getElementById(mode);
    if (view) view.classList.add('active');
    if (mode === 'learn') initLearnDeck();
    if (mode === 'practice') initPractice();
    if (mode === 'quiz') initQuiz();
    if (mode === 'speed') initSpeed();
    if (mode === 'dashboard') setupDashboard();
}

// ===== DASHBOARD =====
function setupDashboard() {
    updateProgressRing();
    renderCategoryChips();
    renderShortcutTable();
    document.getElementById('resetProgress').onclick = resetAllProgress;
}

function updateProgressRing() {
    const mastered = getMasteredCount();
    const total = SHORTCUTS.length;
    const percent = Math.round((mastered / total) * 100);
    document.getElementById('progressPercent').textContent = percent + '%';
    document.getElementById('newCount').textContent = getNewCount();
    document.getElementById('learningCount').textContent = getLearningCount();
    document.getElementById('masteredCountDash').textContent = mastered;
    const ring = document.getElementById('progressRingFill');
    const circumference = 2 * Math.PI * 70;
    ring.style.strokeDashoffset = circumference - (mastered / total) * circumference;
}

function renderCategoryChips() {
    const container = document.getElementById('categoryChips');
    container.innerHTML = '';
    const allChip = document.createElement('button');
    allChip.className = 'category-chip' + (!state.activeCategory ? ' active' : '');
    allChip.textContent = `All (${SHORTCUTS.length})`;
    allChip.addEventListener('click', () => { state.activeCategory = null; renderCategoryChips(); renderShortcutTable(); });
    container.appendChild(allChip);
    CATEGORIES.forEach(cat => {
        const count = SHORTCUTS.filter(s => s.category === cat).length;
        const chip = document.createElement('button');
        chip.className = 'category-chip' + (state.activeCategory === cat ? ' active' : '');
        chip.textContent = `${cat} (${count})`;
        chip.addEventListener('click', () => { state.activeCategory = cat; renderCategoryChips(); renderShortcutTable(); });
        container.appendChild(chip);
    });
}

function renderShortcutTable(filter = '') {
    const tbody = document.getElementById('shortcutTableBody');
    tbody.innerHTML = '';
    let shortcuts = getFilteredShortcuts();
    if (filter) {
        const lf = filter.toLowerCase();
        shortcuts = shortcuts.filter(s => s.title.toLowerCase().includes(lf) || s.key.toLowerCase().includes(lf) || s.category.toLowerCase().includes(lf));
    }
    shortcuts.forEach(s => {
        const p = state.progress[s.title];
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${s.title}</td><td><span class="shortcut-key">${s.key}</span></td><td><span class="category-badge">${s.category}</span></td><td><span class="status-badge ${p.status}">${p.status}</span></td>`;
        tbody.appendChild(tr);
    });
    const searchInput = document.getElementById('searchInput');
    searchInput.removeEventListener('input', handleSearch);
    searchInput.addEventListener('input', handleSearch);
}

function handleSearch(e) { renderShortcutTable(e.target.value); }

// ===== LEARN (FLASHCARDS) =====
function setupLearn() {
    document.getElementById('flashcard').addEventListener('click', flipCard);
    document.querySelectorAll('.recall-btn').forEach(btn => {
        btn.addEventListener('click', () => handleRecall(btn.dataset.recall));
    });
    document.getElementById('prevCard').addEventListener('click', prevCard);
    document.getElementById('skipCard').addEventListener('click', skipCard);
}

function initLearnDeck() {
    const filtered = getFilteredShortcuts();
    const newAndLearning = filtered.filter(s => state.progress[s.title].status !== 'mastered');
    const mastered = filtered.filter(s => state.progress[s.title].status === 'mastered');
    state.cardDeck = [...shuffle(newAndLearning), ...shuffle(mastered)];
    if (state.cardDeck.length === 0) state.cardDeck = shuffle(filtered);
    state.currentCard = 0;
    showCard();
}

function showCard() {
    const deck = state.cardDeck;
    if (deck.length === 0) return;
    const idx = state.currentCard % deck.length;
    const card = deck[idx];
    document.getElementById('cardFrontText').textContent = card.title;
    document.getElementById('cardBackText').textContent = card.key;
    document.getElementById('cardProgress').textContent = `${idx + 1} / ${deck.length}`;
    document.getElementById('cardProgressFill').style.width = ((idx + 1) / deck.length * 100) + '%';
    // Show visual on flashcard front
    const visContainer = document.getElementById('cardVisual');
    if (visContainer) visContainer.innerHTML = renderVisual(card.title);
    // Reset flip
    document.getElementById('flashcardInner').classList.remove('flipped');
    document.getElementById('recallButtons').style.display = 'none';
}

function flipCard() {
    const inner = document.getElementById('flashcardInner');
    inner.classList.toggle('flipped');
    if (inner.classList.contains('flipped')) {
        document.getElementById('recallButtons').style.display = 'flex';
    }
}

function handleRecall(level) {
    const deck = state.cardDeck;
    const idx = state.currentCard % deck.length;
    const card = deck[idx];
    if (level === 'easy') {
        markCorrect(card.title);
    } else if (level === 'hard') {
        markWrong(card.title);
        deck.push(card);
    } else {
        const p = state.progress[card.title];
        if (p.status === 'new') p.status = 'learning';
        p.lastSeen = Date.now();
        saveProgress();
    }
    state.currentCard++;
    showCard();
}

function prevCard() { if (state.currentCard > 0) state.currentCard--; showCard(); }
function skipCard() { state.currentCard++; showCard(); }

// ===== PRACTICE (TYPE SHORTCUT) =====
function setupPractice() {
    document.getElementById('showAnswer').addEventListener('click', showPracticeAnswer);
    document.getElementById('nextPractice').addEventListener('click', nextPracticeQuestion);
}

function initPractice() {
    state.practiceQueue = shuffle(getFilteredShortcuts());
    state.practiceIndex = 0;
    state.practiceCorrect = 0;
    state.practiceWrong = 0;
    state.practiceAnswered = false;
    document.getElementById('practiceCorrect').textContent = '0';
    document.getElementById('practiceWrong').textContent = '0';
    showPracticeQuestion();
    startKeyListener();
}

function showPracticeQuestion() {
    const q = state.practiceQueue;
    if (q.length === 0) return;
    const idx = state.practiceIndex % q.length;
    const shortcut = q[idx];
    document.getElementById('practiceAction').textContent = shortcut.title;
    // Show visual
    const visContainer = document.getElementById('practiceVisual');
    if (visContainer) visContainer.innerHTML = renderVisual(shortcut.title);
    document.getElementById('keyDisplay').innerHTML = '<span class="key-placeholder">Press the shortcut keys...</span>';
    document.getElementById('keyDisplay').className = 'key-display listening';
    document.getElementById('practiceFeedback').textContent = '';
    document.getElementById('practiceFeedback').className = 'practice-feedback';
    state.practiceAnswered = false;
}

function startKeyListener() {
    document.removeEventListener('keydown', handlePracticeKey);
    document.addEventListener('keydown', handlePracticeKey);
}

function handlePracticeKey(e) {
    const practiceView = document.getElementById('practice');
    if (!practiceView.classList.contains('active')) return;
    if (state.practiceAnswered) return;
    e.preventDefault();
    const parts = [];
    if (e.ctrlKey || e.metaKey) parts.push('Ctrl');
    if (e.altKey) parts.push('Alt');
    if (e.shiftKey) parts.push('Shift');
    const keyMap = { 'ArrowLeft':'Left Arrow', 'ArrowRight':'Right Arrow', 'ArrowUp':'Up Arrow', 'ArrowDown':'Down Arrow', 'BracketRight':']', 'BracketLeft':'[', ' ':'Space', 'Space':'Space' };
    let key = e.key;
    if (keyMap[key]) key = keyMap[key];
    else if (keyMap[e.code]) key = keyMap[e.code];
    else if (key.length === 1) key = key.toUpperCase();
    if (['Control', 'Alt', 'Shift', 'Meta'].includes(key)) {
        document.getElementById('keyDisplay').innerHTML = `<span style="color:var(--accent)">${parts.join('+') + '+...'}</span>`;
        return;
    }
    parts.push(key);
    const pressed = parts.join('+');
    const display = document.getElementById('keyDisplay');
    display.innerHTML = `<span>${pressed}</span>`;
    const q = state.practiceQueue;
    const idx = state.practiceIndex % q.length;
    const correct = q[idx].key;
    if (normalizeKey(pressed) === normalizeKey(correct)) {
        display.className = 'key-display correct';
        document.getElementById('practiceFeedback').textContent = 'Correct!';
        document.getElementById('practiceFeedback').className = 'practice-feedback correct';
        state.practiceCorrect++;
        document.getElementById('practiceCorrect').textContent = state.practiceCorrect;
        markCorrect(q[idx].title);
        state.practiceAnswered = true;
    } else {
        display.className = 'key-display wrong';
        document.getElementById('practiceFeedback').innerHTML = `Wrong — the answer is <strong>${correct}</strong>`;
        document.getElementById('practiceFeedback').className = 'practice-feedback wrong';
        state.practiceWrong++;
        document.getElementById('practiceWrong').textContent = state.practiceWrong;
        markWrong(q[idx].title);
        state.practiceAnswered = true;
    }
}

function normalizeKey(k) {
    return k.toLowerCase().replace(/\s+/g, '')
        .replace('arrowleft', 'leftarrow').replace('arrowright', 'rightarrow')
        .replace('arrowup', 'uparrow').replace('arrowdown', 'downarrow');
}

function showPracticeAnswer() {
    const q = state.practiceQueue;
    const idx = state.practiceIndex % q.length;
    const correct = q[idx].key;
    document.getElementById('keyDisplay').innerHTML = `<span style="color:var(--accent)">${correct}</span>`;
    document.getElementById('keyDisplay').className = 'key-display';
    document.getElementById('practiceFeedback').textContent = 'Answer revealed';
    document.getElementById('practiceFeedback').className = 'practice-feedback';
    state.practiceAnswered = true;
}

function nextPracticeQuestion() { state.practiceIndex++; showPracticeQuestion(); }

// ===== QUIZ =====
function setupQuiz() {
    document.getElementById('quizNext').addEventListener('click', nextQuizQuestion);
    document.getElementById('retakeQuiz').addEventListener('click', initQuiz);
}

function initQuiz() {
    const pool = shuffle(getFilteredShortcuts());
    state.quizQuestions = pool.slice(0, Math.min(10, pool.length));
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;
    document.getElementById('quizResults').style.display = 'none';
    document.querySelector('.quiz-area').style.display = 'block';
    showQuizQuestion();
}

function showQuizQuestion() {
    if (state.quizIndex >= state.quizQuestions.length) { showQuizResults(); return; }
    const current = state.quizQuestions[state.quizIndex];
    document.getElementById('quizAction').textContent = current.title;
    // Show visual
    const visContainer = document.getElementById('quizVisual');
    if (visContainer) visContainer.innerHTML = renderVisual(current.title);
    document.getElementById('quizProgressText').textContent = `Question ${state.quizIndex + 1} / ${state.quizQuestions.length}`;
    document.getElementById('quizScoreText').textContent = `Score: ${state.quizScore}`;
    document.getElementById('quizProgressFill').style.width = ((state.quizIndex + 1) / state.quizQuestions.length * 100) + '%';
    document.getElementById('quizNext').style.display = 'none';
    state.quizAnswered = false;
    const correctKey = current.key;
    const wrongPool = SHORTCUTS.filter(s => s.key !== correctKey);
    const wrongOptions = shuffle(wrongPool).slice(0, 3).map(s => s.key);
    const options = shuffle([correctKey, ...wrongOptions]);
    const container = document.getElementById('quizOptions');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = opt;
        btn.addEventListener('click', () => handleQuizAnswer(btn, opt, correctKey, current.title));
        container.appendChild(btn);
    });
}

function handleQuizAnswer(btn, selected, correct, title) {
    if (state.quizAnswered) return;
    state.quizAnswered = true;
    document.querySelectorAll('.quiz-option').forEach(b => b.classList.add('disabled'));
    if (selected === correct) {
        btn.classList.add('selected-correct');
        state.quizScore++;
        markCorrect(title);
    } else {
        btn.classList.add('selected-wrong');
        markWrong(title);
        document.querySelectorAll('.quiz-option').forEach(b => { if (b.textContent === correct) b.classList.add('reveal-correct'); });
    }
    document.getElementById('quizScoreText').textContent = `Score: ${state.quizScore}`;
    document.getElementById('quizNext').style.display = 'block';
}

function nextQuizQuestion() { state.quizIndex++; showQuizQuestion(); }

function showQuizResults() {
    document.querySelector('.quiz-area').style.display = 'none';
    document.getElementById('quizResults').style.display = 'flex';
    const total = state.quizQuestions.length;
    const correct = state.quizScore;
    const wrong = total - correct;
    const accuracy = Math.round((correct / total) * 100);
    document.getElementById('resultCorrect').textContent = correct;
    document.getElementById('resultWrong').textContent = wrong;
    document.getElementById('resultAccuracy').textContent = accuracy + '%';
    if (accuracy >= 80) { document.getElementById('resultsTitle').textContent = 'Excellent!'; document.getElementById('resultsSubtitle').textContent = `You scored ${correct} out of ${total}!`; }
    else if (accuracy >= 60) { document.getElementById('resultsTitle').textContent = 'Good Effort!'; document.getElementById('resultsSubtitle').textContent = `You scored ${correct} out of ${total}. Keep practicing!`; }
    else { document.getElementById('resultsTitle').textContent = 'Keep Learning!'; document.getElementById('resultsSubtitle').textContent = `You scored ${correct} out of ${total}. Review the flashcards and try again.`; }
    const missedContainer = document.getElementById('resultsMissed');
    missedContainer.innerHTML = '';
    if (wrong > 0) {
        const missed = state.quizQuestions.filter(q => state.progress[q.title].status !== 'mastered');
        if (missed.length > 0) {
            missedContainer.innerHTML = '<h4>Review These:</h4>';
            missed.slice(0, wrong).forEach(m => {
                const div = document.createElement('div');
                div.className = 'missed-item';
                div.innerHTML = `<span>${m.title}</span><span class="shortcut-key">${m.key}</span>`;
                missedContainer.appendChild(div);
            });
        }
    }
}

// ===== SPEED RUN =====
function setupSpeed() {
    document.getElementById('startSpeed').addEventListener('click', startSpeedRun);
    document.getElementById('retrySpeed').addEventListener('click', initSpeed);
}

function initSpeed() {
    document.getElementById('speedPre').style.display = 'block';
    document.getElementById('speedGame').style.display = 'none';
    document.getElementById('speedResults').style.display = 'none';
    document.getElementById('bestScore').textContent = state.bestSpeed;
    if (state.speedTimer) clearInterval(state.speedTimer);
}

function startSpeedRun() {
    state.speedScore = 0;
    state.speedTimeLeft = 60;
    document.getElementById('speedPre').style.display = 'none';
    document.getElementById('speedGame').style.display = 'block';
    document.getElementById('speedResults').style.display = 'none';
    document.getElementById('speedScore').textContent = '0';
    document.getElementById('speedTimer').textContent = '60';
    document.getElementById('speedTimer').className = 'speed-timer';
    showSpeedQuestion();
    startSpeedTimer();
}

function startSpeedTimer() {
    state.speedTimer = setInterval(() => {
        state.speedTimeLeft--;
        const timerEl = document.getElementById('speedTimer');
        timerEl.textContent = state.speedTimeLeft;
        if (state.speedTimeLeft <= 10) timerEl.className = 'speed-timer danger';
        else if (state.speedTimeLeft <= 20) timerEl.className = 'speed-timer warning';
        if (state.speedTimeLeft <= 0) { clearInterval(state.speedTimer); endSpeedRun(); }
    }, 1000);
}

function showSpeedQuestion() {
    const pool = getFilteredShortcuts();
    const current = pool[Math.floor(Math.random() * pool.length)];
    document.getElementById('speedAction').textContent = current.title;
    // Show visual in speed mode
    const visContainer = document.getElementById('speedVisual');
    if (visContainer) visContainer.innerHTML = renderVisual(current.title);
    const correctKey = current.key;
    const wrongPool = SHORTCUTS.filter(s => s.key !== correctKey);
    const wrongOptions = shuffle(wrongPool).slice(0, 3).map(s => s.key);
    const options = shuffle([correctKey, ...wrongOptions]);
    const container = document.getElementById('speedOptions');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'speed-option';
        btn.textContent = opt;
        btn.addEventListener('click', () => handleSpeedAnswer(btn, opt, correctKey, current.title));
        container.appendChild(btn);
    });
}

function handleSpeedAnswer(btn, selected, correct, title) {
    if (selected === correct) {
        btn.classList.add('flash-correct');
        state.speedScore++;
        document.getElementById('speedScore').textContent = state.speedScore;
        markCorrect(title);
        setTimeout(showSpeedQuestion, 200);
    } else {
        btn.classList.add('flash-wrong');
        markWrong(title);
        document.querySelectorAll('.speed-option').forEach(b => { if (b.textContent === correct) b.classList.add('flash-correct'); });
        setTimeout(showSpeedQuestion, 600);
    }
}

function endSpeedRun() {
    document.getElementById('speedGame').style.display = 'none';
    document.getElementById('speedResults').style.display = 'block';
    document.getElementById('speedFinalScore').textContent = state.speedScore;
    const newBestEl = document.getElementById('speedNewBest');
    if (state.speedScore > state.bestSpeed) {
        state.bestSpeed = state.speedScore;
        saveProgress();
        newBestEl.style.display = 'block';
    } else { newBestEl.style.display = 'none'; }
}

// ===== BOOTSTRAP =====
document.addEventListener('DOMContentLoaded', init);
