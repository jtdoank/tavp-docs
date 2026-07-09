# Mail

Email sending untuk TAVP.

## Create Mailable

```php
<?php
namespace App\Mail;

use Tavp\Mail\Mailable;

class WelcomeEmail extends Mailable
{
    public $user;
    
    public function __construct($user)
    {
        $this->user = $user;
    }
    
    public function build()
    {
        return $this->view('emails.welcome')
                    ->subject('Welcome to TAVP!');
    }
}
```

## Send Email

```php
use App\Mail\WelcomeEmail;
use Tavp\Support\Facades\Mail;

Mail::to($user->email)->send(new WelcomeEmail($user));
```

## Link

- [Storage](/features/storage)
