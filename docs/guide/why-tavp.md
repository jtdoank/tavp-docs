# Kenapa TAVP?

TAVP hadir untuk developer yang membutuhkan performa tinggi tanpa mengorbankan developer experience.

## Untuk siapa TAVP?

### Developer yang butuh speed
- Web application dengan traffic tinggi
- API yang harus fast response
- Real-time application

### Developer yang ingin productive
- CLI tools untuk code generation
- 40+ UI components siap pakai
- Authentication built-in (OTP, JWT, OAuth)

### Bisnis yang butuh scalable
- SaaS application
- E-commerce
- Marketplace

## Keunggulan TAVP

### 1. Performa Tinggi
```bash
# Benchmark results
Requests/sec: 12,000+
Memory: 8MB per worker
P95 Latency: <5ms
```

### 2. Developer Experience
```bash
# Generate model + controller + view + migration
tavp make:scaffold Post

# Start development server
tavp serve

# Run migrations
tavp migrate
```

### 3. Authentication Built-in
```bash
# OTP via Email
POST /api/auth/otp/send
{"email": "user@example.com"}

# OTP via SMS (Twilio)
POST /api/auth/otp/send
{"phone": "+62812xxxx", "channel": "sms"}

# JWT API Auth
POST /api/auth/login
{"email": "user@example.com", "password": "secret"}
```

### 4. 40+ UI Components
```volt
{{ component('button', ['type' => 'primary']) }}
  Click me
{{ endcomponent }}

{{ component('card') }}
  <h2>{{ post.title }}</h2>
  <p>{{ post.content }}</p>
{{ endcomponent }}
```

### 5. AI Integration
```bash
# Generate module with AI
tavp ai "buatkan module blog dengan CRUD"

# Improve content
tavp ai:content improve --text="..."
```

## Next

- [Installation](/guide/installation)
- [Quick Start](/guide/quick-start)
