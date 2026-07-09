# Apa itu TAVP?

**T**ailwind CSS + **A**lpine.js + **V**olt + **P**halcon = **TAVP**

TAVP adalah curated tech stack untuk membangun web application PHP yang高性能. TAVP menggabungkan performa Phalcon dengan developer experience yang modern.

## Komponen TAVP

### [Tailwind CSS](https://tailwindcss.com)
Utility-first CSS framework. Tulis CSS tanpa meninggalkan HTML.

```html
<button class="bg-blue-500 text-white px-4 py-2 rounded">
  Click me
</button>
```

### [Alpine.js](https://alpinejs.dev)
Lightweight JavaScript framework. Interaktif tanpa complex setup.

```html
<div x-data="{ count: 0 }">
  <button @click="count++">Count: <span x-text="count"></span></button>
</div>
```

### [Phalcon PHP](https://phalconphp.com)
C-extension PHP framework. compiled, bukan interpreted.

### Volt (TAVP)
Template engine yang di-compile ke PHP. Bukan [Laravel Volt](https://laravel.com/docs/volt) yang Livewire-based.

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

- [Kenapa TAVP?](/guide/why-tavp)
- [Installation](/guide/installation)
