import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TAVP Stack',
  description: 'Tailwind CSS + Alpine.js + Volt + Phalcon = TAVP',
  outDir: '../dist',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }]
  ],
  locales: {
    root: {
      label: 'Bahasa Indonesia',
      lang: 'id'
    },
    en: {
      label: 'English',
      lang: 'en'
    }
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide/what-is-tavp' },
      { text: 'Ecosystem', link: '/ecosystem/overview' },
      { text: 'Features', link: '/features/authentication' },
      { text: 'GitHub', link: 'https://github.com/tavp-stack' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'What is TAVP?', link: '/guide/what-is-tavp' },
            { text: 'Why TAVP?', link: '/guide/why-tavp' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' },
            { text: 'Project Structure', link: '/guide/project-structure' }
          ]
        }
      ],
      '/ecosystem/': [
        {
          text: 'Ecosystem',
          items: [
            { text: 'Overview', link: '/ecosystem/overview' },
            { text: 'TAVP Core', link: '/ecosystem/tavp-core' },
            { text: 'TAVP CLI', link: '/ecosystem/tavp-cli' },
            { text: 'Tavpid', link: '/ecosystem/tavpid' },
            { text: 'TavpKit', link: '/ecosystem/tavpkit' },
            { text: 'TavpHub', link: '/ecosystem/tavphub' },
            { text: 'TavpBlocks', link: '/ecosystem/tavpblocks' },
            { text: 'TavpHive', link: '/ecosystem/tavphive' },
            { text: 'Tavp Marketplace', link: '/ecosystem/tavp-marketplace' },
            { text: 'Tavp Cloud', link: '/ecosystem/tavp-cloud' },
            { text: 'Tavp Installer', link: '/ecosystem/tavp-installer' },
            { text: 'Tavp Analytics', link: '/ecosystem/tavp-analytics' },
            { text: 'Tavp Starter', link: '/ecosystem/tavp-starter' }
          ]
        }
      ],
      '/features/': [
        {
          text: 'Features',
          items: [
            { text: 'Authentication', link: '/features/authentication' },
            { text: 'ORM', link: '/features/orm' },
            { text: 'Migrations', link: '/features/migrations' },
            { text: 'Routing', link: '/features/routing' },
            { text: 'Middleware', link: '/features/middleware' },
            { text: 'Views', link: '/features/views' },
            { text: 'Cache', link: '/features/cache' },
            { text: 'Queue', link: '/features/queue' },
            { text: 'Mail', link: '/features/mail' },
            { text: 'Storage', link: '/features/storage' },
            { text: 'Search', link: '/features/search' },
            { text: 'Events', link: '/features/events' },
            { text: 'Broadcasting', link: '/features/broadcasting' },
            { text: 'Validation', link: '/features/validation' },
            { text: 'Security', link: '/features/security' }
          ]
        }
      ],
      '/tutorials/': [
        {
          text: 'Tutorials',
          items: [
            { text: 'Overview', link: '/tutorials/overview' },
            { text: 'Database', link: '/tutorials/database' },
            { text: 'Deployment', link: '/tutorials/deployment' },
            { text: 'Authentication', link: '/tutorials/authentication' },
            { text: 'API', link: '/tutorials/api' }
          ]
        }
      ],
      '/runtimes/': [
        {
          text: 'Runtimes',
          items: [
            { text: 'Overview', link: '/runtimes/overview' },
            { text: 'PHP-FPM', link: '/runtimes/php-fpm' },
            { text: 'TAVP Coil', link: '/runtimes/coil' },
            { text: 'TAVP Relay', link: '/runtimes/relay' }
          ]
        }
      ],
      '/integrations/': [
        {
          text: 'Integrations',
          items: [
            { text: 'Flutter', link: '/integrations/flutter' },
            { text: 'Laravel Migration', link: '/integrations/laravel-migration' },
            { text: 'WordPress Migration', link: '/integrations/wordpress-migration' }
          ]
        }
      ],
      '/deployment/': [
        {
          text: 'Deployment',
          items: [
            { text: 'Overview', link: '/deployment/overview' },
            { text: 'Docker', link: '/deployment/docker' },
            { text: 'Kubernetes', link: '/deployment/kubernetes' },
            { text: 'Terraform', link: '/deployment/terraform' },
            { text: 'DigitalOcean', link: '/deployment/digitalocean' },
            { text: 'AWS', link: '/deployment/aws' },
            { text: 'cPanel', link: '/deployment/cpanel' }
          ]
        }
      ],
      '/ai/': [
        {
          text: 'AI Features',
          items: [
            { text: 'Overview', link: '/ai/overview' },
            { text: 'AI Coder', link: '/ai/ai-coder' },
            { text: 'AI Content', link: '/ai/ai-content' },
            { text: 'AI Assistant', link: '/ai/ai-assistant' }
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Overview', link: '/examples/overview' },
            { text: 'Blog', link: '/examples/blog' },
            { text: 'Todo', link: '/examples/todo' },
            { text: 'E-Commerce', link: '/examples/e-commerce' },
            { text: 'SaaS Starter', link: '/examples/saas-starter' },
            { text: 'Real-time Chat', link: '/examples/real-time-chat' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'CLI Commands', link: '/reference/cli-commands' },
            { text: 'Configuration', link: '/reference/configuration' },
            { text: 'Helpers', link: '/reference/helpers' },
            { text: 'API Reference', link: '/reference/api-reference' },
            { text: 'FAQ', link: '/reference/faq' },
            { text: 'Troubleshooting', link: '/reference/troubleshooting' },
            { text: 'Performance', link: '/reference/performance' }
          ]
        }
      ],
      '/community/': [
        {
          text: 'Community',
          items: [
            { text: 'Contributing', link: '/community/contributing' },
            { text: 'Changelog', link: '/community/changelog' },
            { text: 'Roadmap', link: '/community/roadmap' }
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
