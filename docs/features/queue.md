# Queue

Job queue untuk TAVP.

## Create Job

```php
<?php
namespace App\Jobs;

use Tavp\Queue\Job;

class ProcessOrder extends Job
{
    public function handle(): void
    {
        // Process the order
    }
}
```

## Dispatch Jobs

```php
use App\Jobs\ProcessOrder;

// Dispatch immediately
ProcessOrder::dispatch($order);

// Dispatch later
ProcessOrder::dispatch($order)->delay(now()->addMinutes(5));

// Dispatch to specific queue
ProcessOrder::dispatch($order)->onQueue('emails');
```

## Run Workers

```bash
# Process all queues
tavp queue:work

# Process specific queue
tavp queue:work --queue=emails

# Process once
tavp queue:work --once
```

## Link

- [Mail](/features/mail)
