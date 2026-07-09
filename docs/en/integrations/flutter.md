# Flutter Integration

Integrate TAVP with Flutter mobile apps.

## Tavpid Package

```yaml
# pubspec.yaml
dependencies:
  tavpid: ^1.0.0
```

## Configuration

```dart
import 'package:tavpid/tavpid.dart';

final tavp = Tavpid(
  baseUrl: 'https://api.yourapp.com',
  apiKey: 'your-api-key',
);
```

## Fetch Data

```dart
// GET
final response = await tavp.get('/users');
final users = response.data;

// POST
final response = await tavp.post('/users', data: {
  'name': 'John',
  'email': 'john@example.com',
});
```

## Authentication

```dart
// Login
await tavp.login(email: 'john@example.com', password: 'secret');

// Check auth
if (tavp.authenticated) {
  // User is logged in
}

// Logout
await tavp.logout();
```

## Links

- [Laravel Migration](/en/integrations/laravel-migration)
