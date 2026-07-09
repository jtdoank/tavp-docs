# Authentication

TAVP provides a complete authentication system.

## OTP Authentication

### Send OTP

```php
POST /api/auth/otp/send
{
    "email": "user@example.com"
}
```

### Verify OTP

```php
POST /api/auth/otp/verify
{
    "email": "user@example.com",
    "code": "123456"
}
```

## JWT API Auth

### Login

```php
POST /api/auth/login
{
    "email": "user@example.com",
    "password": "secret"
}

// Response
{
    "token": "eyJ0eXAiOiJKV1Q...",
    "expires_in": 900
}
```

### Use Token

```bash
Authorization: Bearer eyJ0eXAiOiJKV1Q...
```

## Social OAuth

### Google

```php
GET /api/auth/google/redirect
GET /api/auth/google/callback
```

### Apple

```php
GET /api/auth/apple/redirect
GET /api/auth/apple/callback
```

## Magic Link

```php
// Send magic link
POST /api/auth/magic-link
{
    "email": "user@example.com"
}

// Verify
GET /api/auth/magic-link/verify?token=abc123
```

## Links

- [tavpid](/en/ecosystem/tavpid)
