import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';

// Direktori yang akan dibackup
const sourceDir: string = '/path/to/your/fivem/server-data';
const backupDir: string = '/path/to/your/backups';

// Membuat direktori backup jika belum ada
if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
}

// Waktu saat ini untuk nama file backup
const timestamp: string = new Date().toISOString().replace(/:/g, '-');
const backupFileName: string = `server-backup-${timestamp}.zip`;
const backupPath: string = path.join(backupDir, backupFileName);

// Fungsi untuk membuat ZIP archive
function createBackup(): void {
    console.log(`Backup sedang dibuat: ${backupFileName}`);
    
    // Perintah untuk membuat ZIP archive
    const zipCommand: string = `zip -r ${backupPath} ${sourceDir}`;

    exec(zipCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Terjadi kesalahan saat membuat backup: ${error.message}`);
            return;
        }
        console.log(`Backup berhasil dibuat: ${backupFileName}`);
        console.log(stdout);
    });
}

// Mulai proses Backup
createBackup();
