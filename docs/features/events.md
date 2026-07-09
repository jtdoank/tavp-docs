# Events

Event system untuk TAVP.

## Create Event

```php
<?php
namespace App\Events;

use Tavp\Events\Event;

class UserRegistered extends Event
{
    public $user;
    
    public function __construct($user)
    {
        $this->user = $user;
    }
}
```

## Create Listener

```php
<?php
namespace App\Listeners;

use App\Events\UserRegistered;

class SendWelcomeEmail
{
    public function handle(UserRegistered $event): void
    {
        // Send email
    }
}
```

## Register Events

```php
// config/events.php
return [
    \App\Events\UserRegistered::class => [
        \App\Listeners\SendWelcomeEmail::class,
    ],
];
```

## Dispatch Events

```php
event(new UserRegistered($user));
```

## Link

- [Broadcasting](/features/broadcasting)
