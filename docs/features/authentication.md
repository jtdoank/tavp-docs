# Authentication

TAVP menyediakan authentication system yang lengkap.

## OTP Authentication

### Kirim OTP

```php
POST /api/auth/otp/send
{
    "email": "user@example.com"
}
```

### Verifikasi OTP

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

### Gunakan Token

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
// Kirim magic link
POST /api/auth/magic-link
{
    "email": "user@example.com"
}

// Verifikasi
GET /api/auth/magic-link/verify?token=abc123
```

## Link

- [tavpid](/ecosystem/tavpid)
