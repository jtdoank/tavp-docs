# Quick Start

Tutorial ini akan memandu Anda membangun aplikasi pertama dengan TAVP.

## 1. Buat Model

```bash
tavp make:model Post
```

File `app/Models/Post.php` akan terbuat:

```php
<?php
namespace App\Models;

use Tavp\Database\Model;

class Post extends Model
{
    protected $table = 'posts';
    
    protected $fillable = ['title', 'content', 'slug'];
}
```

## 2. Buat Migration

```bash
tavp make:migration create_posts_table
```

Edit `database/migrations/xxx_create_posts_table.php`:

```php
<?php
use Tavp\Database\Schema\Blueprint;
use Tavp\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('content');
            $table->timestamps();
        });
    }
    
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
```

Jalankan migration:

```bash
tavp migrate
```

## 3. Buat Controller

```bash
tavp make:controller PostController
```

Edit `app/Controllers/PostController.php`:

```php
<?php
namespace App\Controllers;

use Tavp\Http\Controller;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return view('posts.index', ['posts' => $posts]);
    }
    
    public function show($id)
    {
        $post = Post::find($id);
        return view('posts.show', ['post' => $post]);
    }
}
```

## 4. Tambah Route

Edit `routes/web.php`:

```php
<?php
use App\Controllers\PostController;

$router->get('/', function () {
    return view('home');
});

$router->get('/posts', [PostController::class, 'index']);
$router->get('/posts/{id}', [PostController::class, 'show']);
```

## 5. Buat View

Buat `resources/views/posts/index.volt`:

```volt
{% extends 'layouts/app.volt' %}

{% block content %}
<h1>Posts</h1>

{% for post in posts %}
<article>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
</article>
{% endfor %}
{% endblock %}
```

## 6. Test

```bash
tavp serve
```

Buka [http://localhost:8000/posts](http://localhost:8000/posts)

## Next

- [Project Structure](/guide/project-structure)
- [ORM Guide](/features/orm)
- [Authentication](/features/authentication)
