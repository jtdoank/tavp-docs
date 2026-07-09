# Views

Volt templates for TAVP.

**Note:** Volt in TAVP is a compiled template engine. Not [Laravel Volt](https://laravel.com/docs/volt) which is Livewire-based.

## Basic Views

```volt
<!DOCTYPE html>
<html>
<head>
    <title>{{ title }}</title>
</head>
<body>
    <h1>{{ greeting }}</h1>
</body>
</html>
```

## Layouts

```volt
<!-- resources/views/layouts/app.volt -->
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}TAVP{% endblock %}</title>
</head>
<body>
    {% block content %}{% endblock %}
</body>
</html>
```

## Extending Layouts

```volt
{% extends 'layouts/app.volt' %}

{% block title %}Home - TAVP{% endblock %}

{% block content %}
<h1>Welcome to TAVP</h1>
{% endblock %}
```

## Conditionals

```volt
{% if user %}
    <p>Welcome, {{ user.name }}!</p>
{% else %}
    <p>Please login.</p>
{% endif %}
```

## Loops

```volt
<ul>
{% for user in users %}
    <li>{{ user.name }}</li>
{% endfor %}
</ul>
```

## Filters

```volt
{{ name | upper }}
{{ price | number_format(2) }}
{{ date | date('Y-m-d') }}
```

## Links

- [Routing](/en/features/routing)
