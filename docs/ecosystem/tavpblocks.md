# TAVPblocks

40+ UI components untuk TAVP.

## Components

### Basic
- Button
- Input
- Select
- Textarea
- Toggle
- Checkbox
- Radio

### Layout
- Card
- Modal
- Dropdown
- Tabs
- Accordion
- Container
- Grid
- Stack

### Navigation
- Breadcrumb
- Pagination
- Tabs

### Feedback
- Alert
- Toast
- Badge
- Tooltip
- Spinner
- Skeleton
- Empty State

### Data
- Table
- Datatable
- Stat Card
- Chart

### Form
- Form Group
- Date Picker
- File Upload

## Usage

```volt
{{ component('button', ['type' => 'primary']) }}
  Click me
{{ endcomponent }}

{{ component('card') }}
  <h2>{{ title }}</h2>
  <p>{{ content }}</p>
{{ endcomponent }}

{{ component('modal', ['id' => 'myModal']) }}
  <p>Modal content</p>
{{ endcomponent }}
```

## Link

- [GitHub](https://github.com/tavp-stack/tavpblocks)
