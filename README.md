# 🎶 Vinyl Wrapped — Your Spotify Wrapped Style App

A web application that displays your **top Spotify tracks** in a vinyl-inspired design.  
Built with **Next.js (frontend)** and **Express.js (backend)**, integrated with **Spotify Web API**.  
This project replicates the concept of *Spotify Wrapped*, allowing users to view and export their favorite tracks.

> ⚠️ This app is not affiliated with Spotify AB.

---

## 🚀 Features

- Spotify OAuth2 Login
- Fetch user’s top tracks via Spotify API
- Vinyl-style UI with card design
- Export design as image using `html2canvas`
- Refresh token handling
- Backend separated via Express and deployed on Railway

---

## 🛠️ Tech Stack

| Layer      | Technology                |
|------------|----------------------------|
| Frontend   | [Next.js 14+](https://nextjs.org/) + TypeScript |
| Styling    | CSS + Tailwind (partially) |
| Backend    | [Express.js](https://expressjs.com/) |
| API Auth   | [Spotify Web API](https://developer.spotify.com/documentation/web-api) |
| Image      | [html2canvas](https://www.npmjs.com/package/html2canvas) |
| Hosting    | Frontend: Vercel<br>Backend: Railway |

---

## Preview

![Vinyl Wrapped Preview](./public/preview.png)  
*(You can update this with your own screenshot)*

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/fahsaifst/vinyl-wrapped.git
cd vinyl-wrapped
