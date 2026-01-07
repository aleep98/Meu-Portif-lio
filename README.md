# Alexandre's Portfolio

Welcome to my personal portfolio repository! This project is a modern, responsive web application built to showcase my skills as a **Back-end Developer**, my projects, and my professional journey.

It features a clean UI developed with **Next.js** and **TypeScript**, utilizing **Tailwind CSS** and **Material UI** for styling.

## 🚀 Tech Stack

This project leverages the following technologies:

- **Framework:** Next.js 16 (App Router / Pages)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 & Material UI
- **Icons:** Lucide React & React Icons
- **Deployment:** Vercel

## 📂 Key Sections

- **Intro:** Hero section with social media integration.
- **About:** Professional summary focusing on backend architecture and scalability.
- **Skills:** Visual grid of technical competencies (Node.js, React, SQL, etc.).
- **Projects:** A showcase of developed applications with links to repositories and live demos.

## 🛠️ Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/aleep98/seu-repositorio.git
cd seu-repositorio
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Environment Variables:**

Create a `.env.local` file in the root directory to configure your social links. This prevents hardcoding sensitive or changeable data.

```env
NEXT_PUBLIC_GITHUB_PROFILE=https://github.com/seu-usuario
NEXT_PUBLIC_LINKEDIN_PROFILE=https://linkedin.com/in/seu-usuario
NEXT_PUBLIC_INSTAGRAM_PROFILE=https://instagram.com/seu-usuario
```

4. **Run the development server:**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

### Configuring Environment Variables on Vercel

Since `.env.local` is not committed to the repository, you must configure the environment variables in the Vercel dashboard:

1. Go to your project settings on Vercel.
2. Navigate to **Environment Variables**.
3. Add the keys (`NEXT_PUBLIC_GITHUB_PROFILE`, etc.) and their corresponding values.
4. Redeploy the application for the changes to take effect.

Check out the Next.js deployment documentation for more details.
