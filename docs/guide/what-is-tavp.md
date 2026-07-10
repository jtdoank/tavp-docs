---
title: "Apa itu TAVP?"
description: "TAVP (Tailwind + Alpine + Volt + Phalcon) adalah curated PHP tech stack untuk membangun web application berperforma tinggi."
---

# Apa itu TAVP?

**T**ailwind CSS + **A**lpine.js + **V**olt + **P**halcon = **TAVP**

**TAVP is a curated PHP tech stack — not a framework.** TAVP menggabungkan Phalcon (C-extension PHP, compiled bukan interpreted) dengan developer experience modern: Tailwind CSS untuk styling, Alpine.js untuk interaktivitas, dan Volt untuk templating.

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
C-extension PHP framework. Compiled, bukan interpreted. Karena di-compile ke native code, performanya sangat tinggi.

### Volt (TAVP)
Template engine yang di-compile ke PHP. **Bukan** [Laravel Volt](https://laravel.com/docs/volt) yang Livewire-based. TAVP Volt adalah template engine standalone.

```volt
{% for user in users %}
  <h2>{{ user.name }}</h2>
{% endfor %}
```

## Performance

Benchmarked on a 2-core VPS with 2GB RAM:

| Metric | TAVP |
|--------|------|
| Requests/sec (PHP-FPM) | 5,000+ |
| Requests/sec (Coil/Swoole) | 12,000+ |
| Memory per worker | <15MB |
| P95 Latency | <5ms |

## Next

- [Kenapa TAVP?](/guide/why-tavp)
- [Installation](/guide/installation)
- [Runtimes](/runtimes/overview)
- [FAQ](/reference/faq)
