# tavpid

Authentication system for TAVP.

## Features

- **OTP Authentication** — Passwordless login via Email, SMS, WhatsApp
- **JWT API Auth** — Token-based API authentication
- **OAuth Social** — Login with Google, Apple, GitHub
- **Magic Link** — Email magic link login
- **RBAC** — Role & Permission system

## Quick Start

### OTP via Email

```php
// Send OTP
POST /api/auth/otp/send
{
    "email": "user@example.com"
}

// Verify OTP
POST /api/auth/otp/verify
{
    "email": "user@example.com",
    "code": "123456"
}
```

### JWT Auth

```php
// Login
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

### Social OAuth

```php
// Redirect to Google
GET /api/auth/google/redirect

// Callback
GET /api/auth/google/callback
```

## Links

- [GitHub](https://github.com/tavp-stack/tavpid)
- [Documentation](/en/features/authentication)
