# What is TAVP?

**T**ailwind CSS + **A**lpine.js + **V**olt + **P**halcon = **TAVP**

TAVP is a curated tech stack for building high-performance PHP web applications. It combines Phalcon's performance with modern developer experience.

## TAVP Components

### [Tailwind CSS](https://tailwindcss.com)
Utility-first CSS framework. Write CSS without leaving your HTML.

```html
<button class="bg-blue-500 text-white px-4 py-2 rounded">
  Click me
</button>
```

### [Alpine.js](https://alpinejs.dev)
Lightweight JavaScript framework. Interactive UI without complex setup.

```html
<div x-data="{ count: 0 }">
  <button @click="count++">Count: <span x-text="count"></span></button>
</div>
```

### [Phalcon PHP](https://phalconphp.com)
C-extension PHP framework. Compiled, not interpreted.

### Volt (TAVP)
Template engine compiled to PHP. Not [Laravel Volt](https://laravel.com/docs/volt) which is Livewire-based.

```volt
{% for user in users %}
  <h2>{{ user.name }}</h2>
{% endfor %}
```

## Performance

| Metric | TAVP |
|--------|------|
| Requests/sec | 12,000+ |
| Memory per worker | 8MB |
| P95 Latency | <5ms |

## Next

- [Why TAVP?](/en/guide/why-tavp)
- [Installation](/en/guide/installation)
