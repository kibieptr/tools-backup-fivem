
# Tool For Automatic Backup of FiveM Server Files


This tool provides an easy way to automatically back up your FiveM server files, ensuring that you have regular backups of your server's data. The backup process is simple, and the tool creates a timestamped ZIP archive of the server's data directory.

## Features

- Automatically creates backups of the FiveM server files.
- The backup is compressed into a ZIP file.
- Backup file names are timestamped for easy tracking.
- It checks if the backup directory exists and creates it if necessary.
- Easy-to-use and minimal configuration required.

## Installation

### 1. Install Node.js and npm

Ensure that Node.js and npm (Node Package Manager) are installed on your system. If they are not installed, you can download and install them from the [official Node.js website](https://nodejs.org/).

To check if Node.js and npm are already installed, run the following commands in your terminal or command prompt:

```bash
node -v
npm -v
```

If both commands return versions, it means Node.js and npm are already installed.

### 2. Set Up the Project

1. Create a new directory for the project and navigate into it:

    ```bash
    mkdir tools-backup-fivem
    cd tools-backup-fivem
    ```

2. Initialize a new Node.js project by running:

    ```bash
    npm init -y
    ```

This will create a `package.json` file in your project directory.

### 3. Install Dependencies

This tool uses built-in Node.js modules (`fs`, `path`, and `child_process`), so there are no additional npm packages to install for the script itself. However, you need to ensure that the `zip` utility is available on your system.

#### For Linux or macOS:
If you don't already have `zip` installed, you can install it using the following commands:

- **Linux (Debian/Ubuntu):**

    ```bash
    sudo apt-get install zip
    ```

- **macOS (using Homebrew):**

    ```bash
    brew install zip
    ```

#### For Windows:
Make sure you have a tool like **7-Zip** installed, or that you have `zip` available in your system's path.

### 4. Download or Clone the Project

Clone or download this repository to your server:

```bash
git clone https://github.com/kibieptr/tools-backup-fivem.git
```

Alternatively, if you're just using a local file, make sure to save the `backupFile.js` script to your project folder.

### 5. Configure the Directories

Open the `backupFile.js` file and set the following variables to the appropriate paths on your system:

- `sourceDir`: The directory where your FiveM server data is stored.
- `backupDir`: The directory where you want to store the backup files.

For example:

```javascript
const sourceDir = '/path/to/your/fivem/server-data';  // Replace with your FiveM server data directory
const backupDir = '/path/to/your/backups';  // Replace with your backup directory
```

### 6. Run the Script

After configuring the directories, run the script using Node.js:

```bash
node backupFile.js
```

The script will create a backup of your FiveM server data and save it as a ZIP file in the backup directory with a timestamped filename.

### 7. Scheduling Automatic Backups (Optional)

If you'd like to schedule the backup to run automatically at regular intervals, you can set up a cron job (on Linux/macOS) or use Task Scheduler (on Windows).

#### Linux/macOS (using cron job):

1. Open the crontab file:

    ```bash
    crontab -e
    ```

2. Add a new cron job to run the backup script at a specific time. For example, to run the backup every day at 2 AM:

    ```bash
    0 2 * * * /usr/bin/node /path/to/your/project/backupFile.js
    ```

Make sure to replace `/path/to/your/project/backupFile.js` with the correct path to your `backupFile.js`.

#### Windows (using Task Scheduler):

1. Open **Task Scheduler** and choose "Create Basic Task."
2. Follow the steps to schedule the `backupFile.js` script to run at your preferred interval.

## Example Output

Once the backup process is complete, you should see output similar to the following:

```bash
Backup sedang dibuat: server-backup-2025-03-22T10-30-00.000Z.zip
Backup berhasil dibuat: server-backup-2025-03-22T10-30-00.000Z.zip
```

## Additional Information

- This tool uses the `zip` command-line utility to create backups. Make sure you have it installed on your system.
- You can schedule this backup to run at regular intervals using cron jobs or other task scheduling tools.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Contact

If you encounter any issues or need further assistance, feel free to reach out to the developer:

- **Nagasaki Dev** (Publisher)
- **Kibieptr** (Creator & Developer)
```
