# 📘 nextjs-app

A modern web application built with Next.js, TypeScript, and Tailwind CSS. This project leverages Radix UI components, Framer Motion animations, and Turbopack for high-performance development. Ideal for scalable, accessible, and responsive front-end experiences.

---

## 🚀 Features

- ⚡ Blazing-fast development with **Next.js** and **Turbopack**
- ✨ Clean, scalable styling using **Tailwind CSS**
- 🧩 Interactive and accessible components via **Radix UI**
- 🎬 Smooth transitions and animations using **Framer Motion**
- 🧠 Built-in hooks from **usehooks-ts**
- 🗂️ Dynamic routes and content pages
- 💅 Strict code formatting with **Prettier** and **ESLint**
- 🔤 Type safety with **TypeScript**

---

## 🏗️ Project Structure
```bash
├── app/
│ ├── about/ 
│ ├── activities/[slug]/
│ ├── gallery/ 
│ ├── partnership/
│ ├── layout.tsx 
│ ├── page.tsx 
│ ├── not-found.tsx
│ └── globals.css 
├── components/ 
├── constants/
├── hooks/ 
├── lib/ 
├── public/ 
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
```

---

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/nextjs-app.git

# Navigate into the project directory
cd nextjs-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

##  Scripts
- npm run dev — Start development server (Turbopack)

- npm run build — Create a production build

- npm run start — Start production server

- npm run lint — Run ESLint for code quality

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.