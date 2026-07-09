# tavphive

Billing & payments for TAVP.

## Features

- Subscription management
- Payment gateways (Stripe, Midtrans, Xendit, PayPal)
- Invoice generation
- Webhook handling
- Usage tracking

## Supported Gateways

| Gateway | Status |
|---------|--------|
| Stripe | ✅ Ready |
| Midtrans | ✅ Ready |
| Xendit | ✅ Ready |
| PayPal | ✅ Ready |

## Usage

### Create Subscription

```php
use Tavp\Hive\SubscriptionService;

$subscription = SubscriptionService::create($user, [
    'plan' => 'pro',
    'payment_method' => 'stripe',
]);
```

### Create Invoice

```php
use Tavp\Hive\InvoiceService;

$invoice = InvoiceService::create($user, [
    'items' => [
        ['name' => 'Pro Plan', 'price' => 29000],
    ],
]);
```

## Links

- [GitHub](https://github.com/tavp-stack/tavphive)
