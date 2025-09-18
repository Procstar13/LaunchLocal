# LaunchLocal - Marketing Website

A modern, dark-mode marketing website for web + automation services, built with Next.js and TailwindCSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Deployment**: Vercel
- **Package Manager**: npm (with virtual environment)

## 🎨 Design System

- **Background**: `#0d1117` (Dark)
- **Section Background**: `#161b22` (Darker)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#c9d1d9` (Light Gray)
- **Text Muted**: `#8b949e` (Muted Gray)
- **Accent**: `#3b82f6` (Electric Blue)
- **Fonts**: Poppins (Headings), Inter (Body)

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- Python 3.8+ (for virtual environment)

### Installation

1. **Activate Virtual Environment**
   ```bash
   source venv/bin/activate
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Fill in your actual values (Google Analytics ID, API keys, etc.)

4. **Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/               # Reusable components (to be created)
└── lib/                     # Utility functions (to be created)
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Deployment

The site is configured for Vercel deployment with:
- Automatic builds from Git
- Environment variable support
- Edge functions ready
- Optimized for performance

## 📊 Performance Targets

- **Performance**: >90
- **Accessibility**: >95
- **Best Practices**: >95
- **SEO**: >95

## 🔑 Environment Variables

Create a `.env.local` file with:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form (Future)
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=
FORMSPREE_ACCESS_KEY=
RESEND_API_KEY=

# Database (Future)
DATABASE_URL=
```

## 🎯 Next Steps

1. ✅ Project Setup (Complete)
2. 🔄 Layout & Global Styles
3. 🔄 Hero Section
4. 🔄 Pricing & Services
5. 🔄 Benefits Section
6. 🔄 About Section
7. 🔄 Contact Form
8. 🔄 Final Polish
9. 🚀 Deploy to Vercel

## 📝 Notes

- Dark mode is enabled by default
- Google Analytics is scaffolded and ready for integration
- Contact form API route structure is prepared
- Mobile-first responsive design
- SEO meta tags configured
- Performance optimized with Next.js best practices
