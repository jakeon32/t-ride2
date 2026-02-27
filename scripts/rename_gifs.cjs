const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../assets');

const files = fs.readdirSync(assetsDir);

const renameMap = {
    'BTS WORLD TOUR ‘ARIRANG’ IN GOYANG.gif': 'event_bts.gif',
    'CxM ［DOUBLE UP］ LIVE PARTY in INCHEON.gif': 'event_cxm.gif',
    'INSPIRE CONCERT SERIES #7  SEIKO MATSUDA.gif': 'event_seiko.gif',
    'tuki. 1ST ASIA TOUR 2026 IN SEOUL.gif': 'event_tuki.gif',
    '블랙컴뱃 16  EXODUS.gif': 'event_black_combat.gif',
    '호시노 겐 내한공연 〈Gen Hoshino Live in Korea “약속”〉.gif': 'event_hoshino.gif'
};

files.forEach(file => {
    if (renameMap[file]) {
        fs.renameSync(path.join(assetsDir, file), path.join(assetsDir, renameMap[file]));
        console.log(`Renamed ${file} to ${renameMap[file]}`);
    } else {
        // Fallback for weird encoding issues
        Object.keys(renameMap).forEach(key => {
            if (file.includes('BTS') && file.endsWith('.gif')) {
                fs.renameSync(path.join(assetsDir, file), path.join(assetsDir, 'event_bts.gif'));
            } else if (file.includes('CxM') && file.endsWith('.gif')) {
                fs.renameSync(path.join(assetsDir, file), path.join(assetsDir, 'event_cxm.gif'));
            } else if (file.includes('INSPIRE') && file.includes('SEIKO') && file.endsWith('.gif')) {
                fs.renameSync(path.join(assetsDir, file), path.join(assetsDir, 'event_seiko.gif'));
            } else if (file.includes('tuki') && file.endsWith('.gif')) {
                fs.renameSync(path.join(assetsDir, file), path.join(assetsDir, 'event_tuki.gif'));
            } else if (file.includes('블랙컴뱃') && file.endsWith('.gif')) {
                fs.renameSync(path.join(assetsDir, file), path.join(assetsDir, 'event_black_combat.gif'));
            } else if (file.includes('호시노') && file.endsWith('.gif')) {
                fs.renameSync(path.join(assetsDir, file), path.join(assetsDir, 'event_hoshino.gif'));
            }
        });
    }
});
