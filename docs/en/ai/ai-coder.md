# AI Coder

AI-powered code generation for TAVP.

## Usage

```php
use Tavp\Support\Facades\AiCoder;

// Generate code
$code = AiCoder::generate('Create a User model with name and email fields');

// Fix code
$fixed = AiCoder::fix($code);

// Explain code
$explanation = AiCoder::explain($code);
```

## CLI

```bash
# Generate code
tavp ai:code "Create a REST API for users"

# Fix code
tavp ai:fix src/Models/User.php

# Explain code
tavp ai:explain src/Models/User.php
```

## Links

- [AI Content](/en/ai/ai-content)
