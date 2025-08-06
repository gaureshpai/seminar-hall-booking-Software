# 🎯 HallGrid – Enigma's Seminar Hall Booking System

A centralized and efficient web-based platform to manage **seminar hall bookings** at **AJIET**.  
HallGrid allows students to book seminar halls with ease, while admins manage approvals and view availability — all in real-time.

🔗 **Live Site**: [ajietseminarbook.netlify.app](https://ajietseminarbook.netlify.app)  
📁 **GitHub Repo**: [github.com/Enigma-CSE/seminar-hall-booking-Software](https://github.com/Enigma-CSE/seminar-hall-booking-Software)

## ✨ Key Features

✅ Real-time Booking Fetch & Updates  
📅 View and Book Available Halls  
🔐 Secure Login via **NextAuth.js**  
📂 Admin Approval Panel for Booking Requests  
📬 Automated Email Notifications on Request Status  
⚡ Built with Fast, Scalable Technologies  
🎨 TailwindCSS for a clean, responsive UI  

## 🧱 Tech Stack

| Tech          | Purpose                                |
|---------------|----------------------------------------|
| **Next.js**   | Frontend + Backend Framework           |
| **MongoDB**   | Booking Data Storage                   |
| **NextAuth.js** | User Authentication                  |
| **TailwindCSS** | UI Styling                           |
| **Nodemailer** | Email Notifications              |

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Enigma-CSE/seminar-hall-booking-Software.git
cd seminar-hall-booking-Software
````

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env.local` file in the root directory and include your values for:

* MongoDB connection
* NextAuth configuration
* Nodemailer email config

```env
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

EMAIL_USER=smtp://username:password@smtp.provider.com
EMAIL_PASS=XYZ
EMAIL_FROM=your_email@example.com
```

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🔮 Roadmap & Upcoming Features

* 📱 Mobile-first PWA Design
* 📊 Admin Dashboard with Booking Insights
* 📆 Calendar-Based Drag-and-Drop UI
* ⏳ Time-slot Conflict Detection
* 📌 QR Code for Check-In System

## 👥 Contributors

<div align="center">
<a href="https://github.com/Enigma-CSE/seminar-hall-booking-Software/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Enigma-CSE/seminar-hall-booking-Software" />
</a>
</div>

## 📢 A Final Note

**HallGrid** isn’t just a project — it’s a real-time solution tailored for the daily needs of AJIET’s academic ecosystem.
Designed with usability, performance, and scalability in mind — and made with 💡 by the **Enigma CSE** team.