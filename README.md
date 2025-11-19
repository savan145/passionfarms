# PassionFarms E-Commerce Platform

A modern, full-featured e-commerce platform built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. This application showcases product browsing, categorization, user engagement, and community features.

## 🎯 Project Overview

PassionFarms is an e-commerce platform designed for browsing and managing products. The application emphasizes a clean user interface, responsive design, and intuitive navigation across multiple sections including:
- **Product Catalog** — Browse all available products
- **Product Categories** — Explore products by category
- **Shop** — Dedicated shopping interface
- **Forum** — Community engagement space
- **About & Contact** — Information and support pages

---

## 📁 Project Structure

```
ecomm/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── about/                   # About page
│   ├── categories/              # Categories listing page
│   ├── contact/                 # Contact page
│   ├── forum/                   # Forum page
│   ├── products/                # Products listing/details (dynamic routes)
│   └── shop/                    # Shop page
│
├── components/                  # Reusable React components
│   ├── common/                  # Shared components used across pages
│   │   ├── Button/             # Button component
│   │   ├── Card/               # Card component for content display
│   │   ├── Footer/             # App footer
│   │   ├── Header/             # App header/top bar
│   │   └── Navigation/         # Main navigation menu
│   │
│   ├── home/                   # Home page specific components
│   │   ├── AvailableNow/       # Featured products section
│   │   └── ProductCategories/  # Category showcase section
│   │
│   ├── landing/                # Landing/hero components
│   │   └── Hero/               # Hero banner section
│   │
│   ├── ui/                     # Custom UI components
│   └── index.ts                # Component barrel exports
│
├── lib/                        # Utility functions and helpers
│   ├── types/                 # Shared TypeScript types
│   ├── utils/                 # Utility functions
│   │   ├── cn.ts             # Class name merge helper (clsx + tailwind-merge)
│   │   └── index.ts
│   └── index.ts
│
├── types/                     # Global TypeScript definitions
│   └── globals.d.ts          # Global type declarations
│
├── public/                    # Static assets
│   └── images/               # Image assets organized by section
│       ├── categories/       # Category images
│       ├── hero/            # Hero section images
│       └── products/        # Product images
│
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration (for Tailwind)
├── eslint.config.mjs        # ESLint configuration
├── package.json             # Project dependencies and scripts
└── README.md               # This file
```

---

## 🔄 Application Flow

### 1. **Entry Point**
   - User visits the application
   - `app/layout.tsx` serves as the root layout, wrapping all pages with Header, Navigation, and Footer

### 2. **Home Page** (`/`)
   - Displays featured content via `Hero` component
   - Shows `AvailableNow` — featured/promoted products
   - Displays `ProductCategories` — category cards for quick navigation

### 3. **Navigation Paths**
   - **Shop** (`/shop`) — Full product browsing interface
   - **Products** (`/products`) — Detailed product listings or individual product pages
   - **Categories** (`/categories`) — Organized product categories
   - **Forum** (`/forum`) — Community discussion space
   - **About** (`/about`) — Company/platform information
   - **Contact** (`/contact`) — Contact form and support information

### 4. **Component Architecture**
   - **Common Components** — Reusable across all pages (Button, Card, Footer, Header, Navigation)
   - **Page-Specific Components** — Home page sections (Hero, AvailableNow, ProductCategories)
   - **UI Components** — Custom styled elements for consistent design
   - **Utility Helpers** — Shared functions like `cn()` for class name merging

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/savan145/passionfarms.git
   cd ecomm
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Create environment variables** (if needed)
   ```bash
   cp .env.example .env.local
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot-reload |
| `npm run build` | Build the application for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

---

## 🛠 Tech Stack

- **Framework**: Next.js 16.0.3
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.17 + PostCSS
- **Icons**: Lucide React 0.554.0
- **Ratings**: React Rating Stars Component 2.2.0
- **Utilities**: clsx, tailwind-merge
- **Linting**: ESLint 9
- **Node Version**: 18+

---

## 🎨 Styling & Design

- **Tailwind CSS** for utility-first styling
- **PostCSS** for CSS processing
- **Global styles** defined in `app/globals.css`
- **Utility function** `cn()` in `lib/utils/cn.ts` for intelligent class merging
- **Responsive design** across all components

---

## 📝 Key Features

✅ **Product Catalog** — Browse and explore products  
✅ **Category Navigation** — Filter products by category  
✅ **Responsive Design** — Mobile-first, works on all devices  
✅ **Product Ratings** — Display and interact with product ratings  
✅ **Community Forum** — Engage with other users  
✅ **Clean Architecture** — Component-based and modular structure  
✅ **TypeScript** — Type-safe development  
✅ **Modern React** — React 19 with latest hooks and features  

---

## 🔧 Development Tips

### Adding a New Page
1. Create a new folder in `app/` (e.g., `app/my-page/`)
2. Add `page.tsx` inside
3. Automatically accessible at `/my-page`

### Adding a New Component
1. Create a folder in `components/` with the component name
2. Add `ComponentName.tsx` and `index.ts` for exports
3. Update `components/index.ts` barrel export

### Styling Components
- Use Tailwind CSS classes directly in JSX
- Import the `cn()` utility for conditional classes:
  ```tsx
  import { cn } from '@/lib/utils';
  
  <div className={cn("base-classes", isActive && "active-classes")} />
  ```

---

## 📖 File Naming Conventions

- **Components**: PascalCase (e.g., `ProductCard.tsx`)
- **Utilities/Hooks**: camelCase (e.g., `useProductFilter.ts`)
- **Types**: PascalCase with `.ts` extension
- **Folders**: camelCase (e.g., `lib/utils/`)
- **Pages**: lowercase with optional segments (e.g., `products/page.tsx`)

---

## 🚀 Deployment

This project is optimized for deployment on **Vercel** (recommended for Next.js):

```bash
# Build for production
npm run build

# Start production server locally
npm start
```

For other platforms (Netlify, AWS, etc.), ensure Node 18+ and build output is properly configured in `next.config.ts`.

---

## 📄 License

This project is private and proprietary.

---

## 👨‍💻 Contributing

For internal team members:
1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "Add feature description"`
3. Push branch: `git push origin feature/your-feature`
4. Open a Pull Request

---

## 📞 Support & Questions

For questions or issues, please contact the development team or check the project documentation.

---

**Last Updated**: November 19, 2025
