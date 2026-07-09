# Validation

Form validation for TAVP.

## Basic Usage

```php
$rules = [
    'name' => 'required|string|max:255',
    'email' => 'required|email|unique:users',
    'password' => 'required|string|min:8|confirmed',
];

$this->validate($rules);
```

## Form Request

```php
<?php
namespace App\Http\Requests;

use Tavp\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8',
        ];
    }
}

// Use in controller
public function store(StoreUserRequest $request)
{
    $validated = $request->validated();
}
```

## Available Rules

| Rule | Description |
|------|-------------|
| required | Field is required |
| string | Must be a string |
| email | Must be a valid email |
| unique:table | Must be unique |
| min:n | Minimum length |
| max:n | Maximum length |
| confirmed | Must match confirmation |

## Links

- [Security](/en/features/security)
