# Mail

Multi-driver email service untuk TAVP. Mendukung 6 driver: SMTP, Mailgun, SendGrid, Amazon SES, Postmark, dan Gmail.

## Supported Drivers

| Driver | Package | Description |
|--------|---------|-------------|
| `smtp` | Built-in | Raw SMTP socket (default, works with Mailpit in dev) |
| `mailgun` | `mailgun/mailgun-php` | Mailgun API |
| `sendgrid` | `sendgrid/sendgrid` | SendGrid API |
| `ses` | `aws/aws-sdk-php` | Amazon SES API |
| `postmark` | `wildbit/postmark-php` | Postmark API |
| `gmail` | `phpmailer/phpmailer` | Gmail SMTP |

## Configuration

### Environment Variables

```env
# Driver selection
CMS_MAIL_DRIVER=smtp

# SMTP settings
CMS_MAIL_HOST=smtp.yourdomain.com
CMS_MAIL_PORT=587
CMS_MAIL_USERNAME=noreply@yourdomain.com
CMS_MAIL_PASSWORD=your_password
CMS_MAIL_ENCRYPTION=tls

# Mailgun
CMS_MAILGUN_DOMAIN=mg.yourdomain.com
CMS_MAILGUN_SECRET=key-xxxx

# SendGrid
CMS_SENDGRID_API_KEY=SG.xxxx

# Amazon SES
CMS_SES_KEY=AKIAxxxx
CMS_SES_SECRET=xxxx
CMS_SES_REGION=us-east-1

# Postmark
CMS_POSTMARK_TOKEN=xxxx

# From address (shared across all drivers)
CMS_MAIL_FROM=noreply@yourdomain.com
```

### Config File

```php
// config/cms.php
'mail' => [
    'driver' => env('CMS_MAIL_DRIVER', 'smtp'),
    
    // SMTP
    'host'       => env('CMS_MAIL_HOST', '127.0.0.1'),
    'port'       => (int) env('CMS_MAIL_PORT', 1025),
    'username'   => env('CMS_MAIL_USERNAME', ''),
    'password'   => env('CMS_MAIL_PASSWORD', ''),
    'encryption' => env('CMS_MAIL_ENCRYPTION', 'tls'),
    
    // Mailgun
    'mailgun_domain' => env('CMS_MAILGUN_DOMAIN', ''),
    'mailgun_secret' => env('CMS_MAILGUN_SECRET', ''),
    
    // SendGrid
    'sendgrid_api_key' => env('CMS_SENDGRID_API_KEY', ''),
    
    // Amazon SES
    'ses_key'    => env('CMS_SES_KEY', ''),
    'ses_secret' => env('CMS_SES_SECRET', ''),
    'ses_region' => env('CMS_SES_REGION', 'us-east-1'),
    
    // Postmark
    'postmark_token' => env('CMS_POSTMARK_TOKEN', ''),
    
    // From address
    'from' => env('CMS_MAIL_FROM', 'noreply@example.com'),
],
```

## Usage

### Direct Usage

```php
use Tavp\Core\Auth\MailService;

$mailer = new MailService(config('cms.mail'));

$mailer->send(
    'user@example.com',
    'Welcome!',
    'Plain text body',
    '<h1>HTML body</h1>'
);
```

### CMS OTP Authentication

The CMS admin panel uses MailService automatically for OTP emails:

```php
// AuthController.php
private function sendOtpEmail(string $email, string $code): bool
{
    $mailer = new MailService(config('cms.mail'));
    
    return $mailer->send(
        $email,
        "Your sign-in code",
        "Your code is: {$code}",
        $html
    );
}
```

## Driver Setup

### SMTP (Default)

```env
CMS_MAIL_DRIVER=smtp
CMS_MAIL_HOST=smtp.yourdomain.com
CMS_MAIL_PORT=587
CMS_MAIL_USERNAME=noreply@yourdomain.com
CMS_MAIL_PASSWORD=your_password
CMS_MAIL_FROM=noreply@yourdomain.com
```

**Features:**
- STARTTLS support (port 587)
- AUTH LOGIN support
- Works with Mailpit in development

### Mailgun

```bash
composer require mailgun/mailgun-php
```

```env
CMS_MAIL_DRIVER=mailgun
CMS_MAILGUN_DOMAIN=mg.yourdomain.com
CMS_MAILGUN_SECRET=key-xxxx
CMS_MAIL_FROM=noreply@yourdomain.com
```

### SendGrid

```bash
composer require sendgrid/sendgrid
```

```env
CMS_MAIL_DRIVER=sendgrid
CMS_SENDGRID_API_KEY=SG.xxxx
CMS_MAIL_FROM=noreply@yourdomain.com
```

### Amazon SES

```bash
composer require aws/aws-sdk-php
```

```env
CMS_MAIL_DRIVER=ses
CMS_SES_KEY=AKIAxxxx
CMS_SES_SECRET=xxxx
CMS_SES_REGION=us-east-1
CMS_MAIL_FROM=noreply@yourdomain.com
```

### Postmark

```bash
composer require wildbit/postmark-php
```

```env
CMS_MAIL_DRIVER=postmark
CMS_POSTMARK_TOKEN=xxxx
CMS_MAIL_FROM=noreply@yourdomain.com
```

### Gmail

```bash
composer require phpmailer/phpmailer
```

```env
CMS_MAIL_DRIVER=gmail
CMS_MAIL_USERNAME=your@gmail.com
CMS_MAIL_PASSWORD=your_app_password
CMS_MAIL_FROM=your@gmail.com
```

**Note:** Use App Password, not your regular Gmail password.

## Error Handling

```php
use Tavp\Core\Auth\MailService;

try {
    $mailer = new MailService(config('cms.mail'));
    $mailer->send($to, $subject, $body, $html);
} catch (\RuntimeException $e) {
    // Log error
    error_log('Mail failed: ' . $e->getMessage());
    
    // Show user feedback
    echo 'Failed to send email: ' . $e->getMessage();
}
```

## Check Available Drivers

```php
use Tavp\Core\Auth\MailService;

$drivers = MailService::getAvailableDrivers();
// Returns: ['smtp' => true, 'mailgun' => false, ...]
```

## Link

- [Authentication](/features/authentication)
- [Configuration](/reference/configuration)
