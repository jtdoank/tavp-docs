# tavp-analytics

Analytics & fraud detection untuk TAVP.

## Fitur

- User behavior tracking
- Page views
- Events
- Fraud detection
- Analytics dashboard

## Usage

### Track Events

```php
use Tavp\Analytics\Facades\Analytics;

Analytics::track('user.registered', [
    'user_id' => $user->id,
    'method' => 'email',
]);
```

### Track Page Views

```php
Analytics::pageView('/home', [
    'user_id' => $user->id,
]);
```

## Link

- [GitHub](https://github.com/tavp-stack/tavp-analytics)
