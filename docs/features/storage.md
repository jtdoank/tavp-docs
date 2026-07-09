# Storage

File storage untuk TAVP.

## Usage

```php
use Tavp\Support\Facades\Storage;

// Put file
Storage::put('file.txt', 'contents');

// Get file
$contents = Storage::get('file.txt');

// Check exists
if (Storage::exists('file.txt')) {
    // exists
}

// Delete
Storage::delete('file.txt');

// Get URL
$url = Storage::url('file.txt');
```

## File Upload

```php
$file = $this->request->getUploadedFile('avatar');
$path = $file->store('avatars');
```

## Link

- [Search](/features/search)
