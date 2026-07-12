---
title: TavpBlocks
---

# TavpBlocks — UI Components

60 real UI components with Tailwind CSS. Each component renders clean HTML.

## Components

| Component | Category | Description |
|-----------|-------------|
| **Button** | Interactive button (primary/secondary/danger/ghost) |
| **Card** | Content card with title, body, footer |
| **Alert** | Alert messages (info/success/error/warning) |
| **Badge** | Status badges (gray/green/red/yellow/blue) |
| **Modal** | Dialog modal with confirm/cancel |
| **Tabs** | Tab navigation (Alpine.js powered) |
| **Pagination** | Page navigation |
| **StatCard** | Statistics card with trend |
| **Datatable** | Data table with search |
| **Skeleton** | Loading skeleton |
| **Breadcrumb** | Navigation breadcrumb |
| **Accordion** | Collapsible sections |
| **ProgressBar** | Progress indicator |
| **Tooltip** | Hover tooltip |
| **Avatar** | User avatar (image or initials) |
| **EmptyState** | Empty state with action |
| **LoadingSpinner** | Loading spinner |
| **SearchBar** | Search input with icon |
| **NotificationBell** | Notification bell with count |
| **Timeline** | Event timeline |
| **AlertBanner** | Alert banner |
| **Chip** | Chip/tag |
| **Divider** | Divider line |
| **Dropdown** | Dropdown menu |
| **Toggle** | Toggle switch |
| **Navbar** | Navigation bar |
| **CopyButton** | Copy to clipboard button |
| **StatusBadge** | Status badge |
| **FileCard** | File card |
| **Comment** | Comment component |
| **Rating** | Rating component |
| **Stepper** | Stepper/wizard |
| **CodeBlock** | Code block |
| **TableOfContents** | Table of contents |
| **KeyValue** | Key-value pair |
| **DescriptionList** | Description list |
| **ImageGallery** | Image gallery |
| **VideoPlayer** | Video player |
| **AudioPlayer** | Audio player |
| **MapPlaceholder** | Map placeholder |
| **QRCode** | QR code |
| **StarRating** | Star rating |
| **DatePicker** | Date picker |
| **TimePicker** | Time picker |
| **ColorPicker** | Color picker |
| **RangeSlider** | Range slider |
| **CheckboxGroup** | Checkbox group |
| **RadioGroup** | Radio group |
| **SelectWithSearch** | Select with search |
| **TagInput** | Tag input |
| **RichTextEditor** | Rich text editor |
| **FileSize** | File size display |
| **Countdown** | Countdown timer |
| **Clipboard** | Clipboard component |
| **ShareButtons** | Share buttons |
| **BackToTop** | Back to top button |
| **Chart** | Chart (bar/line/horizontal) |
| **Gauge** | Gauge/meter |
| **PieChart** | Pie chart |
| **LineChart** | Line chart |
| **BarChart** | Bar chart |
| **RadarChart** | Radar chart |
| **DoughnutChart** | Doughnut chart |
| **PolarAreaChart** | Polar area chart |
| **BubbleChart** | Bubble chart |
| **ScatterChart** | Scatter chart |

## Chart.js Components

All Chart.js chart types are available via the `ChartJsComponent` base class:

| Component | Type | Description |
|-----------|------|-------------|
| **Chart** | bar/line/horizontal | Generic chart (legacy) |
| **PieChart** | pie | Pie chart |
| **LineChart** | line | Line chart with smooth/fill options |
| **BarChart** | bar | Bar chart (vertical/horizontal/stacked) |
| **RadarChart** | radar | Radar/spider chart |
| **DoughnutChart** | doughnut | Doughnut chart with cutout |
| **PolarAreaChart** | polarArea | Polar area chart |
| **BubbleChart** | bubble | Bubble chart (x, y, r) |
| **ScatterChart** | scatter | Scatter chart (x, y) |

### Usage in PHP

```php
use Tavp\Blocks\BlockRegistry;

$registry = new BlockRegistry();

// Create a button
$button = $registry->make('Button', [
    'label' => 'Save',
    'variant' => 'primary',
    'href' => '/save'
]);
echo $button->render();

// Create a stat card
$stat = $registry->make('StatCard', [
    'label' => 'Total Users',
    'value' => 1234,
    'trend' => '+12% this month',
    'trendColor' => 'green'
]);
echo $stat->render();

// Create a data table
$table = $registry->make('Datatable');
$table->addColumn('name', 'Name');
$table->addColumn('email', 'Email');
$table->addRow(['name' => 'John', 'email' => 'john@example.com']);
echo $table->render();

// Create a bar chart
$barChart = $registry->make('BarChart', ['title' => 'Monthly Sales']);
$barChart->setLabels(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'])
         ->addDataset('Sales', [120, 190, 300, 500, 200, 300], [
             'backgroundColor' => 'rgba(59, 130, 246, 0.5)',
             'borderColor' => 'rgb(59, 130, 246)',
             'borderWidth' => 1,
         ]);
echo $barChart->render();

// Create a line chart with smooth curves
$lineChart = $registry->make('LineChart', ['title' => 'Revenue Trend']);
$lineChart->setLabels(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'])
          ->addDataset('Revenue', [1000, 1200, 900, 1500, 1800, 2000], [
              'borderColor' => 'rgb(34, 197, 94)',
              'backgroundColor' => 'rgba(34, 197, 94, 0.1)',
          ])
          ->setSmooth(true)
          ->setFill(true);
echo $lineChart->render();

// Create a pie chart
$pieChart = $registry->make('PieChart', ['title' => 'Market Share']);
$pieChart->addSegment('Product A', 35, 'rgba(59, 130, 246, 0.8)')
         ->addSegment('Product B', 25, 'rgba(34, 197, 94, 0.8)')
         ->addSegment('Product C', 20, 'rgba(251, 191, 36, 0.8)')
         ->addSegment('Product D', 20, 'rgba(239, 68, 68, 0.8)');
echo $pieChart->render();

// Create a doughnut chart
$doughnutChart = $registry->make('DoughnutChart', ['title' => 'Expenses']);
$doughnutChart->addSegment('Marketing', 30, 'rgba(59, 130, 246, 0.8)')
              ->addSegment('Development', 40, 'rgba(34, 197, 94, 0.8)')
              ->addSegment('Operations', 20, 'rgba(251, 191, 36, 0.8)')
              ->addSegment('Admin', 10, 'rgba(239, 68, 68, 0.8)')
              ->setCutout('60%');
echo $doughnutChart->render();

// Create a radar chart
$radarChart = $registry->make('RadarChart', ['title' => 'Skills Assessment']);
$radarChart->setLabels(['PHP', 'JavaScript', 'SQL', 'CSS', 'DevOps'])
           ->addDataset('Developer A', [90, 80, 85, 70, 60])
           ->addDataset('Developer B', [70, 90, 75, 85, 80]);
echo $radarChart->render();

// Create a stacked bar chart
$stackedBar = $registry->make('BarChart', ['title' => 'Quarterly Revenue', 'stacked' => true]);
$stackedBar->setLabels(['Q1', 'Q2', 'Q3', 'Q4'])
           ->addDataset('Product A', [100, 150, 200, 180], [
               'backgroundColor' => 'rgba(59, 130, 246, 0.8)',
           ])
           ->addDataset('Product B', [80, 120, 150, 140], [
               'backgroundColor' => 'rgba(34, 197, 94, 0.8)',
           ]);
echo $stackedBar->render();
```

## Usage in Volt

```php
// Register component helper in ViewFactory
$component = $registry->make('Button', ['label' => 'Click me', 'variant' => 'primary']);
echo $component->render();
```

## Custom Components

Register your own components:

```php
$registry->register('MyButton', \App\Components\MyButton::class);
$button = $registry->make('MyButton', ['label' => 'Custom']);
```
