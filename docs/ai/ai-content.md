# AI Content

AI-powered content generation untuk TAVP.

## Usage

```php
use Tavp\Support\Facades\AiContent;

// Generate post
$content = AiContent::post('The future of PHP development');

// Generate meta description
$meta = AiContent::metaDescription($content);

// Summarize
$summary = AiContent::summarize($content);
```

## CLI

```bash
# Generate post
tavp ai:post "PHP performance tips"

# Generate meta
tavp ai:meta src/content/post.md
```

## Link

- [AI Assistant](/ai/ai-assistant)
