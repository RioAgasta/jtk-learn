# jtk-learn
### Setup Instructions
Start by cloning the project repository to your local machine:
```bash
git clone https://your-repository-url.git
cd your-repository-folder
```

## Backend
This is the backend API built with **Express.js** that includes user authentication, JWT-based login, and logout functionality. It uses a **PostgreSQL** database for data storage.
### Prerequisites
Before running the backend, make sure you have the following installed:
- **Node.js** (version 14 or above)
- **npm** or **yarn**
- **PostgreSQL** (for the database)
### Setup Instructions
#### 1. Open backend folder
Start by open backend folder
```bash
cd backend
```
#### 2. Install dependencies
```bash
npm install
```
#### 3. Copy .env copy to .env (adjust with the right db name and password)
```bash
copy "./.env copy" .env
```
#### 4. Create db in postgre
```bash
CREATE DATABASE jtk_learn_db_dev;
```
#### 5. Run migration and seeder
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
#### 6. Create random char to jwt secret key and copy to env
```bash
openssl rand -base64 32
```
### Running Project Backend
```bash
npm start
```
### Example Command Adding Migrations and Seeder
#### 1. Adding migrations
```bash
npx sequelize-cli migration:generate --name nama_migration
```
#### 2. Adding seeders
```bash
npx sequelize-cli seed:generate --name nama_seeder
```
