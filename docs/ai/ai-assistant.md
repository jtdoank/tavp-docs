# AI Assistant

AI-powered development assistant untuk TAVP.

## Usage

```php
use Tavp\Support\Facades\AiAssistant;

// Chat
$response = AiAssistant::chat('How do I create a migration?');

// Get suggestions
$suggestions = AiAssistant::suggest($code);

// Auto-complete
$completed = AiAssistant::complete($partialCode);
```

## CLI

```bash
# Interactive chat
tavp ai:chat

# Get help
tavp ai:help "How to deploy to production?"

# Suggest
tavp ai:suggest src/Controllers/
```

## Link

- [Examples](/examples/overview)
