# tavpid

Authentication system untuk TAVP.

## Fitur

- **OTP Authentication** — Login tanpa password via Email, SMS, WhatsApp
- **JWT API Auth** — Token-based API authentication
- **OAuth Social** — Login dengan Google, Apple, GitHub
- **Magic Link** — Email magic link login
- **RBAC** — Role & Permission system

## Quick Start

### OTP via Email

```php
// Kirim OTP
POST /api/auth/otp/send
{
    "email": "user@example.com"
}

// Verifikasi OTP
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
// Redirect ke Google
GET /api/auth/google/redirect

// Callback
GET /api/auth/google/callback
```

## Link

- [GitHub](https://github.com/tavp-stack/tavpid)
- [Documentation](/features/authentication)
