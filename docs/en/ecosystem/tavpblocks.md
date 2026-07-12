---
title: TavpBlocks
---

# TavpBlocks — UI Components

60+ real UI components with Tailwind CSS. Each component renders clean HTML.

## Interactive Components

- **Button** — primary/secondary/danger/ghost
- **Modal** — dialog with confirm/cancel
- **Tabs** — tab navigation (Alpine.js)
- **Dropdown** — dropdown menu
- **Toggle** — toggle switch
- **Accordion** — collapsible sections
- **Tooltip** — hover tooltip
- **CopyButton** — copy to clipboard
- **BackToTop** — back to top button

## Data Display

- **Card** — content card with title, body, footer
- **StatCard** — statistics with trend
- **Datatable** — data table with search
- **Badge** — status badges
- **StatusBadge** — status indicator
- **Chip** — chip/tag
- **Avatar** — user avatar (image/initials)
- **Rating** — rating component
- **StarRating** — star rating
- **FileSize** — file size display
- **Countdown** — countdown timer
- **QRCode** — QR code generator

## Navigation

- **Navbar** — navigation bar
- **Breadcrumb** — navigation breadcrumb
- **Pagination** — page navigation
- **Stepper** — wizard/stepper
- **TableOfContents** — table of contents

## Feedback

- **Alert** — alert messages (info/success/error/warning)
- **AlertBanner** — alert banner
- **LoadingSpinner** — loading spinner
- **ProgressBar** — progress indicator
- **Skeleton** — loading skeleton
- **EmptyState** — empty state with action
- **NotificationBell** — notification bell with count

## Forms

- **SearchBar** — search input
- **DatePicker** — date picker
- **TimePicker** — time picker
- **ColorPicker** — color picker
- **RangeSlider** — range slider
- **CheckboxGroup** — checkbox group
- **RadioGroup** — radio group
- **SelectWithSearch** — select with search
- **TagInput** — tag input
- **RichTextEditor** — rich text editor

## Layout

- **Divider** — divider line
- **KeyValue** — key-value pair
- **DescriptionList** — description list
- **Timeline** — event timeline
- **Comment** — comment component

## Media

- **ImageGallery** — image gallery
- **VideoPlayer** — video player
- **AudioPlayer** — audio player
- **MapPlaceholder** — map placeholder

## Code

- **CodeBlock** — code block with syntax highlighting

## Chart.js Components

All Chart.js chart types available via `ChartJsComponent` base class:

- **Chart** — bar/line/horizontal (legacy)
- **PieChart** — pie chart
- **LineChart** — line chart (smooth/fill)
- **BarChart** — bar chart (vertical/horizontal/stacked)
- **RadarChart** — radar/spider chart
- **DoughnutChart** — doughnut chart
- **PolarAreaChart** — polar area chart
- **BubbleChart** — bubble chart (x, y, r)
- **ScatterChart** — scatter chart (x, y)
- **Gauge** — circular progress indicator

## Usage in PHP

```php
use Tavp\Blocks\BlockRegistry;

$registry = new BlockRegistry();

// Button
$button = $registry->make('Button', [
    'label' => 'Save',
    'variant' => 'primary',
    'href' => '/save'
]);
echo $button->render();

// Stat Card
$stat = $registry->make('StatCard', [
    'label' => 'Total Users',
    'value' => 1234,
    'trend' => '+12%',
    'trendColor' => 'green'
]);
echo $stat->render();

// Data Table
$table = $registry->make('Datatable');
$table->addColumn('name', 'Name');
$table->addColumn('email', 'Email');
$table->addRow(['name' => 'John', 'email' => 'john@example.com']);
echo $table->render();
```

## Chart.js Usage

```php
use Tavp\Blocks\Components\BarChart;
use Tavp\Blocks\Components\LineChart;
use Tavp\Blocks\Components\PieChart;

// Bar Chart
$barChart = new BarChart('Monthly Sales');
$barChart->setLabels(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'])
         ->addDataset('Sales', [120, 190, 300, 500, 200, 300], [
             'backgroundColor' => 'rgba(59, 130, 246, 0.5)',
             'borderColor' => 'rgb(59, 130, 246)',
             'borderWidth' => 1,
         ]);
echo $barChart->render();

// Line Chart
$lineChart = new LineChart('Revenue Trend');
$lineChart->setLabels(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'])
          ->addDataset('Revenue', [1000, 1200, 900, 1500, 1800, 2000], [
              'borderColor' => 'rgb(34, 197, 94)',
              'backgroundColor' => 'rgba(34, 197, 94, 0.1)',
          ])
          ->setSmooth(true)
          ->setFill(true);
echo $lineChart->render();

// Pie Chart
$pieChart = new PieChart('Market Share');
$pieChart->addSegment('Product A', 35, 'rgba(59, 130, 246, 0.8)')
         ->addSegment('Product B', 25, 'rgba(34, 197, 94, 0.8)')
         ->addSegment('Product C', 20, 'rgba(251, 191, 36, 0.8)')
         ->addSegment('Product D', 20, 'rgba(239, 68, 68, 0.8)');
echo $pieChart->render();

// Doughnut Chart
$doughnutChart = new DoughnutChart('Expenses');
$doughnutChart->addSegment('Marketing', 30, 'rgba(59, 130, 246, 0.8)')
              ->addSegment('Development', 40, 'rgba(34, 197, 94, 0.8)')
              ->addSegment('Operations', 20, 'rgba(251, 191, 36, 0.8)')
              ->addSegment('Admin', 10, 'rgba(239, 68, 68, 0.8)')
              ->setCutout('60%');
echo $doughnutChart->render();

// Radar Chart
$radarChart = new RadarChart('Skills Assessment');
$radarChart->setLabels(['PHP', 'JavaScript', 'SQL', 'CSS', 'DevOps'])
           ->addDataset('Developer A', [90, 80, 85, 70, 60])
           ->addDataset('Developer B', [70, 90, 75, 85, 80]);
echo $radarChart->render();

// Stacked Bar Chart
$stackedBar = new BarChart('Quarterly Revenue', true);
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
