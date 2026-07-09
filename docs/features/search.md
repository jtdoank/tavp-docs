# Search

Full-text search untuk TAVP.

## Usage

```php
use Tavp\Support\Facades\Search;

$results = Search::search('users', 'John');
```

## Model Search

```php
<?php
namespace App\Models;

use Tavp\Database\Model;
use Tavp\Search\Searchable;

class User extends Model
{
    use Searchable;
    
    protected $searchable = ['name', 'email'];
}

// Search
$users = User::search('John')->get();
```

## Drivers

| Driver | Description |
|--------|-------------|
| database | LIKE queries (default) |
| meilisearch | Meilisearch |
| elasticsearch | Elasticsearch |

## Link

- [Events](/features/events)
