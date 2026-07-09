# AI Overview

AI-powered features di TAVP.

## Features

| Feature | Description |
|---------|-------------|
| [AI Coder](/ai/ai-coder) | Generate code snippets |
| [AI Content](/ai/ai-content) | Generate text content |
| [AI Assistant](/ai/ai-assistant) | AI-powered support |

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

## Link

- [AI Coder](/ai/ai-coder)
