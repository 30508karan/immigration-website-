<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.23-FF0080?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

<h1 align="center">🌍 Trident Global</h1>

<p align="center">
  <strong>Your Trusted Partner for Worldwide Visit & Work  Visas</strong>
</p>

<p align="center">
  <em>A modern, responsive visa and immigration consultancy website built with React, TypeScript, and Tailwind CSS</em>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-pages">Pages</a> •
  <a href="#-services">Services</a>
</p>

---

## ✨ Features

<table>
  <tr>
    <td align="center">🎨</td>
    <td><strong>Modern UI/UX</strong></td>
    <td>Beautiful, responsive design with smooth animations and transitions</td>
  </tr>
  <tr>
    <td align="center">📱</td>
    <td><strong>Fully Responsive</strong></td>
    <td>Optimized for mobile, tablet, and desktop devices</td>
  </tr>
  <tr>
    <td align="center">⚡</td>
    <td><strong>Lightning Fast</strong></td>
    <td>Built with Vite for optimal performance and quick load times</td>
  </tr>
  <tr>
    <td align="center">🎭</td>
    <td><strong>Smooth Animations</strong></td>
    <td>Elegant animations powered by Framer Motion</td>
  </tr>
  <tr>
    <td align="center">💬</td>
    <td><strong>WhatsApp Integration</strong></td>
    <td>Direct communication with pre-filled messages</td>
  </tr>
  <tr>
    <td align="center">📝</td>
    <td><strong>Contact Form</strong></td>
    <td>Fully validated contact form with service and country selection</td>
  </tr>
  <tr>
    <td align="center">🧭</td>
    <td><strong>Smart Navigation</strong></td>
    <td>Scroll-aware navbar with mobile hamburger menu</td>
  </tr>
  <tr>
    <td align="center">🎯</td>
    <td><strong>SEO Friendly</strong></td>
    <td>Semantic HTML structure with proper heading hierarchy</td>
  </tr>
</table>

---

## 🛠 Tech Stack

| Category | Technology | Version |
|:---------|:-----------|:--------|
| **Language** | TypeScript | 5.9.x |
| **Framework** | React | 19.2.x |
| **Build Tool** | Vite | 7.2.x |
| **Styling** | Tailwind CSS | 4.1.x |
| **Routing** | React Router DOM | 7.9.x |
| **Animations** | Framer Motion | 12.23.x |
| **Icons** | Lucide React | 0.555.x |
| **Linting** | ESLint | 9.39.x |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aswinsaipalakonda/infiniti-global.git
   cd infiniti-global
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

### Available Scripts

| Command | Description |
|:--------|:------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (TypeScript + Vite) |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

---

## 📁 Project Structure

```
infiniti-global/
├── 📄 index.html              # HTML entry point
├── 📄 package.json            # Dependencies and scripts
├── 📄 vite.config.ts          # Vite configuration
├── 📄 tsconfig.json           # TypeScript configuration
├── 📄 tailwind.config.js      # Tailwind CSS configuration
├── 📄 eslint.config.js        # ESLint configuration
├── 📂 public/                 # Static assets
└── 📂 src/
    ├── 📄 App.tsx             # Main app with routing
    ├── 📄 main.tsx            # Application entry point
    ├── 📄 App.css             # Global styles
    ├── 📄 index.css           # Tailwind imports
    ├── 📂 assets/             # Images and static files
    ├── 📂 components/
    │   ├── 📄 Navbar.tsx          # Navigation component
    │   ├── 📄 Hero.tsx            # Hero section
    │   ├── 📄 Countries.tsx       # Countries component
    │   ├── 📄 CountriesShowcase.tsx
    │   ├── 📄 Services.tsx        # Services component
    │   ├── 📄 WhyChooseUs.tsx     # Features section
    │   ├── 📄 Testimonials.tsx    # Client reviews
    │   ├── 📄 CTA.tsx             # Call to action
    │   ├── 📄 Footer.tsx          # Footer component
    │   ├── 📄 PageLoader.tsx      # Loading animation
    │   └── 📂 icons/
    │       └── 📄 WhatsAppIcon.tsx
    └── 📂 pages/
        ├── 📄 Home.tsx            # Home page
        ├── 📄 About.tsx           # About page
        ├── 📄 Services.tsx        # Services page
        ├── 📄 Countries.tsx       # Countries page
        └── 📄 Contact.tsx         # Contact page
```

---

## 📄 Pages

### 🏠 Home Page
The main landing page featuring:
- **Hero Section** - Eye-catching banner with CTA buttons and trust indicators
- **Countries Showcase** - Featured destination countries
- **Why Choose Us** - Company differentiators
- **Services Overview** - Quick look at service offerings
- **Testimonials** - Client reviews and success stories
- **Call to Action** - Engagement section

### ℹ️ About Page
Company information including:
- Parallax hero with company introduction
- Mission and vision statements
- Core values with animated icons
- Animated statistics counters
- Team member profiles
- Company timeline and milestones

### 💼 Services Page
Comprehensive service listings:
- Student Visas
- SOP & LOR Writing
- Admission Counseling
- Financial Documentation
- Visit/Tourist Visas
- Visa Slot Booking
- Travel & Accommodation Support

### 🌍 Countries Page
Destination countries featuring:
| Country | Visa Types |
|:--------|:-----------|
| 🇺🇸 United States | F1 Student Visa, B1/B2 Visit Visa |
| 🇬🇧 United Kingdom | Student Route Visa, Visitor Visa |
| 🇨🇦 Canada | Work  Permit, Visitor Visa |
| 🇦🇺 Australia | Student Visa Subclass 500, Visitor Visa |
| 🇩🇪 Germany | Student Applicant Visa, Work -Ready Pathways |
| 🇪🇺 Schengen Region | Tourist Visa, Family Visit |

*Additional countries: Italy, France, Spain, Netherlands, Ireland, Singapore, Malaysia, Turkey, New Zealand, Switzerland, Portugal, Austria*

### 📞 Contact Page
- Validated contact form with multiple fields
- WhatsApp direct integration
- Email contact
- Google Maps embed
- Social media links

---

## 🎨 Design System

### Color Palette

| Color | Usage | Preview |
|:------|:------|:--------|
| **Navy** | Primary text, headers | 🔵 |
| **Gold** | Accents, CTAs, highlights | 🟡 |
| **White** | Backgrounds | ⚪ |
| **Gray** | Secondary text, borders | 🔘 |

### Responsive Breakpoints

| Breakpoint | Size | Layout |
|:-----------|:-----|:-------|
| 📱 Mobile | < 640px | Single column, hamburger menu |
| 📱 Tablet | 640px - 1024px | Adjusted grid layouts |
| 💻 Desktop | > 1024px | Full multi-column layouts |

---

## ⚡ Performance

| Metric | Target |
|:-------|:-------|
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| Lighthouse Score | > 90 |
| Mobile Responsiveness | 100% |

---

## 📞 Contact Information

| Channel | Details |
|:--------|:--------|
| 📱 WhatsApp | +91 XXXXX |
| 📧 Email | test@example.com |
| 📍 Office | Karnal, India |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is private and proprietary.

---

<p align="center">
  Made with ❤️ by <strong>Trident Global</strong>
</p>

<p align="center">
  <em>Go Abroad Like a Pro! 🌍✈️</em>
</p>
#   i m m i g r a t i o n - w e b s i t e -  
 #   i m m i g r a t i o n - w e b s i t e -  
 #   i m m i g r a t i o n - w e b s i t e -  
 