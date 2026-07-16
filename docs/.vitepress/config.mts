import { defineConfig } from 'vitepress'

const benchmarks = [
  ['req/s', '12,000+', 'Phalcon C-Extension', 'Raw PHP requests per second'],
  ['ms', '<10ms', 'Response Time', 'Average response time'],
  ['modules', '12+', 'Core Modules', 'Modular ecosystem'],
  ['components', '124+', 'UI Components', 'Tailwind + DaisyUI + Chart.js']
]

export default defineConfig({
  title: 'TAVP Stack',
  description: 'TAVP is a curated PHP tech stack combining Tailwind CSS, Alpine.js, Volt, and Phalcon for high-performance web applications. Not a framework — a curated stack.',
  outDir: '../dist',
  ignoreDeadLinks: true,
  appearance: 'dark',
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://docs.tavp.web.id'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }],
    ['meta', { name: 'keywords', content: 'TAVP, Tailwind, Alpine.js, Volt, Phalcon, PHP, tech stack, framework, high performance' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'TAVP Stack — PHP, but fast.' }],
    ['meta', { property: 'og:description', content: 'A curated PHP tech stack: Tailwind CSS + Alpine.js + Volt + Phalcon. Phalcon speed with Laravel-style ergonomics.' }],
    ['meta', { property: 'og:url', content: 'https://docs.tavp.web.id/' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'TAVP Stack',
      description: 'A curated PHP tech stack combining Tailwind CSS, Alpine.js, Volt, and Phalcon for high-performance web applications.',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Linux, macOS, Windows',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      softwareVersion: '1.0.0',
      license: 'https://opensource.org/licenses/MIT',
      url: 'https://docs.tavp.web.id/',
      sameAs: ['https://github.com/tavp-stack', 'https://packagist.org/packages/tavp/core']
    })]
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
      { text: 'Architecture', link: '/architecture/overview' },
      { text: 'Ecosystem', link: '/ecosystem/overview' },
      { text: 'Features', link: '/features/authentication' },
      { text: 'Standards', link: '/standards/overview' },
      { text: 'Reference', link: '/reference/cli-commands' },
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
            { text: 'Project Structure', link: '/guide/project-structure' },
            { text: 'TAVP Box (Dev Environment)', link: '/guide/tavpbox' }
          ]
        }
      ],
      '/architecture/': [
        {
          text: 'Architecture',
          items: [
            { text: 'Overview', link: '/architecture/overview' }
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
            { text: 'Tavp Installer', link: '/ecosystem/tavp-installer' },
            { text: 'Tavp Analytics', link: '/ecosystem/tavp-analytics' },
            { text: 'Tavp Starter', link: '/ecosystem/tavp-starter' },
            { text: 'TAVP CMS', link: '/ecosystem/tavp-cms' }
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
{ text: 'Security', link: '/features/security' },
            { text: 'CMS', link: '/features/cms' },
            { text: 'SEO', link: '/features/seo' },
            { text: 'BREAD Manager', link: '/features/bread' },
            { text: 'TavpHub Admin', link: '/features/tavphub' }
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
            { text: 'TAVP Relay', link: '/runtimes/relay' },
            { text: 'TAVP Weave', link: '/runtimes/weave' }
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
            { text: 'Troubleshooting', link: '/reference/troubleshooting' },
            { text: 'Performance', link: '/reference/performance' }
          ]
        }
      ],
      '/standards/': [
        {
          text: 'Coding Standards',
          items: [
            { text: 'Overview', link: '/standards/overview' }
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
      provider: 'local',
      options: {
        detailedView: true
      }
    }
  }
})
