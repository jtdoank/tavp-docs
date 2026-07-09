# Why TAVP?

TAVP is for developers who need high performance without sacrificing developer experience.

## Who is TAVP for?

### Developers who need speed
- High traffic web applications
- APIs that need fast response
- Real-time applications

### Developers who want to be productive
- CLI tools for code generation
- 40+ ready-to-use UI components
- Built-in authentication (OTP, JWT, OAuth)

### Businesses that need scalability
- SaaS applications
- E-commerce
- Marketplaces

## TAVP Advantages

### 1. High Performance
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

### 3. Built-in Authentication
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
tavp ai "create blog module with CRUD"

# Improve content
tavp ai:content improve --text="..."
```

## Next

- [Installation](/en/guide/installation)
- [Quick Start](/en/guide/quick-start)
