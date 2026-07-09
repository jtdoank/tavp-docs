# AI Overview

AI-powered features in TAVP.

## Features

| Feature | Description |
|---------|-------------|
| [AI Coder](/en/ai/ai-coder) | Generate code snippets |
| [AI Content](/en/ai/ai-content) | Generate text content |
| [AI Assistant](/en/ai/ai-assistant) | AI-powered support |

## Configuration

```php
// config/ai.php
return [
    'default' => 'openai',
    'providers' => [
        'openai' => [
            'key' => env('OPENAI_API_KEY'),
            'model' => 'gpt-4',
        ],
    ],
];
```

## Links

- [AI Coder](/en/ai/ai-coder)
