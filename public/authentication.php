<?php

declare(strict_types=1);

/**
 * TAVP Stack — Authentication Guide
 */

echo <<<'EOF'
# Authentication Guide

TAVP Stack uses OTP (One-Time Password) authentication via email.

## How It Works

1. User enters email address
2. System sends a 6-digit OTP code via email
3. User enters the OTP code
4. System validates and creates a session

## Configuration

### .env Settings

```ini
MAIL_MAILER=log
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USERNAME=your@email.com
MAIL_PASSWORD=secret
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@example.com
MAIL_FROM_NAME="TAVP Stack"
```

## Usage

### Login

```php
use Tavp\Core\Auth\AuthService;

$auth = new AuthService($db, $config);

// Send OTP
$auth->sendOtp('user@example.com');

// Verify OTP
$token = $auth->verifyOtp('user@example.com', '123456');
```

### Protected Routes

Use the `auth` middleware:

```php
$router->addGet('/dashboard', [DashboardController::class, 'index'])
    ->addMiddleware(new Authenticate());
```

### Guest Routes

Use the `guest` middleware:

```php
$router->addGet('/login', [AuthController::class, 'showLogin'])
    ->addMiddleware(new RedirectIfAuthenticated());
```

## API Authentication

### JWT Tokens

TAVP uses JWT for API authentication.

```bash
# Login and get token
curl -X POST https://api.example.com/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","otp":"123456"}'

# Use token in requests
curl https://api.example.com/api/user \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Token Expiration

Default token lifetime: 24 hours

Override in config:

```php
return [
    'auth' => [
        'token_lifetime' => 3600, // 1 hour
    ],
];
```
EOF;
