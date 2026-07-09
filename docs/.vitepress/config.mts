import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TAVP Stack',
  description: 'Tailwind CSS + Alpine.js + Volt + Phalcon = TAVP',
  outDir: '../dist',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide/what-is-tavp' },
      { text: 'GitHub', link: 'https://github.com/tavp-stack' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'What is TAVP?', link: '/guide/what-is-tavp' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tavp-stack' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 TAVP Stack'
    },
    search: {
      provider: 'local'
    }
  }
})
