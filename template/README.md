# The Squirrel Starter Kit 🐿️

A production-ready Next.js starter kit with Tailwind CSS, Shadcn UI components, and essential tools for rapid web development.

## Features

- ⚡️ Next.js 15 with App Router
- 🎨 Tailwind CSS with custom theme
- ✨ Shadcn UI components
- 🧉 Pre-configured API routes
- 🔒 Authentication pages (Login/Register)
- 🛆 Zustand for state management
- 📝 React Hook Form with Zod validation
- 🛠️ Pre-configured ESLint and PostCSS
- 🫥 Path aliases with `@/*` for cleaner imports

## Getting Started

1. Create a new project:
   ```
   npx create-squirrel-app my-app
   ```

2. Navigate to your project:
   ```
   cd my-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

```
my-app/
├── app/
│   ├── (site)/ # Main site pages
│   ├── auth/ # Authentication pages
│   ├── api/ # API routes
│   └── layout.js # Root layout
├── components/
│   ├── ui/ # Shadcn UI components
│   ├── forms/ # Form components
│   └── navbar.jsx # Navigation bar
├── lib/ # Utility functions
├── constants/ # Constants and data
├── store/ # Zustand state management
└── public/ # Static assets
```

## Included Packages

- **UI**: Shadcn UI, Lucide Icons
- **State Management**: Zustand
- **Forms**: React Hook Form, Zod
- **Styling**: Tailwind CSS, Tailwind Merge
- **HTTP**: Axios
- **Routing**: Next.js App Router

## Customization

### Tailwind Configuration
Edit `tailwind.config.mjs` to customize your theme.

### API Routes
Example API route with CRUD operations.

### State Management
Pre-configured Zustand store.

## Deployment

Deploy your application to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo&project-name=my-app&repository-name=my-app)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by The Squirrel Team