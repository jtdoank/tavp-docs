# Broadcasting

Real-time events untuk TAVP.

## Configuration

```php
// config/broadcasting.php
return [
    'default' => env('BROADCAST_DRIVER', 'log'),
    
    'connections' => [
        'pusher' => [
            'driver' => 'pusher',
            'key' => env('PUSHER_APP_KEY'),
            'secret' => env('PUSHER_APP_SECRET'),
        ],
        'soketi' => [
            'driver' => 'soketi',
            'key' => env('SOKETI_APP_KEY'),
            'secret' => env('SOKETI_APP_SECRET'),
        ],
    ],
];
```

## Broadcast Event

```php
use App\Events\NewMessage;

broadcast(new NewMessage($message));
```

## Listen (JavaScript)

```javascript
Echo.channel('messages')
    .listen('NewMessage', (e) => {
        console.log(e.message);
    });
```

## Link

- [Validation](/features/validation)
