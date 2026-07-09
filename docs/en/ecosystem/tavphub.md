# tavphub

Admin panel for TAVP.

## Features

- Auto-generated CRUD
- Table builder (sortable, searchable, filters)
- Form builder (field types, validation)
- Dashboard widgets
- Sidebar navigation
- Responsive design

## Install

```bash
composer require tavp/hub
tavp hub:install
```

## Usage

### Create Resource

```bash
tavp hub:make:resource Post
```

### Resource Definition

```php
<?php
namespace App\Hub;

use Tavp\Hub\Resource;

class PostResource extends Resource
{
    protected $model = \App\Models\Post::class;
    
    protected $columns = ['id', 'title', 'status', 'created_at'];
    
    protected $form = [
        'title' => ['type' => 'text', 'required' => true],
        'content' => ['type' => 'textarea'],
        'status' => ['type' => 'select', 'options' => ['draft', 'published']],
    ];
}
```

### Access Admin Panel

```
http://your-app.com/admin
```

## Links

- [GitHub](https://github.com/tavp-stack/tavphub)
