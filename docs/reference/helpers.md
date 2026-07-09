# Helpers

Helper functions yang tersedia di TAVP.

## String

```php
str('hello world')->title(); // Hello World
str('hello')->contains('ell'); // true
str('hello')->slug(); // hello
```

## Array

```php
arr([1, 2, 3])->map(fn($i) => $i * 2); // [2, 4, 6]
arr([1, 2, 3])->filter(fn($i) => $i > 1); // [2, 3]
arr([1, 2, 3])->first(); // 1
```

## Path

```php
base_path('config');
storage_path('logs');
public_path('uploads');
```

## URL

```php
url('/users');
route('users.index');
asset('css/app.css');
```

## Debug

```php
dump($variable);
dd($variable); // dump and die
```

## Link

- [API Reference](/reference/api-reference)
