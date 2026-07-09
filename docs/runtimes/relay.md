# TAVP Relay

RoadRunner-based runtime untuk TAVP.

## Usage

```bash
# Start
tavp relay:start --workers=4

# Stop
tavp relay:stop

# Status
tavp relay:status
```

## Performance

- Requests/sec: ~10,000
- Memory: ~10MB per worker
- Latency: <7ms

## Best For

- Balanced performance
- Long-running applications
- Queue workers

## Configuration

```yaml
# relay.yml
server:
  command: "php relay-worker"
  relay:
    http: true
    queue: true
    websocket: true
```

## Link

- [Integrations](/integrations/flutter)
