/* 
 _  _    __     ___    __    ___    __    _  _  ____      ____   ____  _  _ 
( \( )  /__\   / __)  /__\  / __)  /__\  ( )/ )(_  _)    (  _ \ ( ___)( \/ )
 )  (  /(  )\ ( (_-. /(  )\ \__ \ /(  )\  )  (  _)(_      )(_) ) )__)  \  / 
(_)\_)(__)(__) \___/(__)(__)(___/(__)(__)(_)\_)(____)    (____/ (____)  \/   
*/

/* 
░▒█▀▀▄░▒█░░▒█░░░▒█░▄▀░▀█▀░▒█▀▀▄░▀█▀░▒█▀▀▀░▒█▀▀█░▀▀█▀▀░▒█▀▀▄
░▒█▀▀▄░▒▀▄▄▄▀░░░▒█▀▄░░▒█░░▒█▀▀▄░▒█░░▒█▀▀▀░▒█▄▄█░░▒█░░░▒█▄▄▀
░▒█▄▄█░░░▒█░░░░░▒█░▒█░▄█▄░▒█▄▄█░▄█▄░▒█▄▄▄░▒█░░░░░▒█░░░▒█░▒█
*/

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const sourceDir = '/path/to/your/fivem/server-data';
const backupDir = '/path/to/your/backups';

if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
}

const timestamp = new Date().toISOString().replace(/:/g, '-');
const backupFileName = `server-backup-${timestamp}.zip`;
const backupPath = path.join(backupDir, backupFileName);

function createBackup() {
    console.log(`Backup sedang dibuat: ${backupFileName}`);
    
    const zipCommand = `zip -r ${backupPath} ${sourceDir}`;

    exec(zipCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Terjadi kesalahan saat membuat backup: ${error.message}`);
            return;
        }
        console.log(`Backup berhasil dibuat: ${backupFileName}`);
        console.log(stdout);
    });
}

createBackup();