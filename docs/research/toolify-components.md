# Toolify.ai Component Specifications

## Phase 2: Component Inventory

### 1. Header Navigation

#### Component Details
- **Name**: Navigation Header
- **Structure**: 
  ```html
  <header class="fixed top-0 left-0 right-0 z-50">
    <div class="container">
      <nav class="flex items-center justify-between h-16">
        <div class="flex items-center"> <!-- Logo -->
        <div class="hidden md:flex items-center space-x-8"> <!-- Desktop Nav -->
        <div class="hidden md:block"> <!-- CTA Button -->
        <div class="md:hidden"> <!-- Mobile Menu Button -->
      </nav>
    </div>
  </header>
  ```

#### Variants
- **Logo**: Text-based "Toolify" (32px height)
- **Navigation Links**: Text with dropdown indicators
- **Dropdown Menus**: Hover-triggered, white background
- **CTA Button**: Primary blue style
- **Mobile Menu**: Hamburger icon (3 lines)

#### States
- **Default**: White background, gray text
- **Hover**: Blue text, dropdown appears
- **Active**: Blue text for current page
- **Mobile**: Hamburger menu, slide-out drawer

#### Responsive Behavior
- **Desktop**: Full horizontal navigation
- **Tablet**: Hidden some items, hamburger appears
- **Mobile**: Hamburger only, full-screen drawer

#### Interactions
- **Hover**: Dropdown menus appear
- **Click**: Navigation links, mobile menu toggle
- **Keyboard**: Tab navigation, Enter to activate

#### Animations
- **Dropdown**: Fade in, slide down (0.2s ease)
- **Mobile Drawer**: Slide from right (0.3s ease)
- **Hover States**: Color transitions (0.2s)

### 2. Hero Section

#### Component Details
- **Name**: Hero Section
- **Structure**:
  ```html
  <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
    <div class="container">
      <div class="text-center max-w-4xl mx-auto">
        <h1> <!-- Main Heading -->
        <p> <!-- Subheading -->
        <div class="max-w-2xl mx-auto mb-12"> <!-- Search Bar -->
        <div class="flex flex-wrap justify-center gap-8"> <!-- Stats Row -->
      </div>
    </div>
  </section>
  ```

#### Variants
- **Heading**: 4xl (mobile) → 5xl (tablet) → 6xl (desktop)
- **Search Bar**: Large input with search icon button
- **Stats**: Counter animations with numbers

#### States
- **Default**: Gradient background, centered content
- **Loading**: Skeleton placeholders for stats
- **Error**: Search error states

#### Responsive Behavior
- **Mobile**: Single column, smaller text
- **Tablet**: Medium text, adjusted spacing
- **Desktop**: Full width, large text

#### Interactions
- **Search**: Input typing, button click
- **Stats**: Intersection observer triggers animation

#### Animations
- **Fade In**: Staggered entrance (0.3s intervals)
- **Counter**: Number counting animation
- **Search**: Focus border color change

### 3. Category Grid Section

#### Component Details
- **Name**: Category Grid
- **Structure**:
  ```html
  <section class="py-16 bg-gray-50">
    <div class="container">
      <div class="text-center mb-12"> <!-- Section Header -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> <!-- Category Cards -->
      <div class="text-center mt-12"> <!-- Load More Button -->
    </div>
  </section>
  ```

#### Variants
- **Category Card**: Icon + name + tool count
- **Grid Layout**: Responsive columns (1→2→3→4)
- **Load More**: Secondary button style

#### States
- **Default**: White cards, gray borders
- **Hover**: Shadow, lift effect, blue text
- **Loading**: Skeleton cards
- **Error**: Error message display

#### Responsive Behavior
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3-4 columns

#### Interactions
- **Hover**: Card lift, shadow change
- **Click**: Navigate to category page
- **Load More**: Fetch more categories

#### Animations
- **Hover**: Transform translateY(-2px)
- **Entrance**: Staggered fade-in
- **Loading**: Skeleton pulse

### 4. Featured Articles Section

#### Component Details
- **Name**: Featured Articles Grid
- **Structure**:
  ```html
  <section class="py-16 bg-white">
    <div class="container">
      <div class="text-center mb-12"> <!-- Section Header -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Article Cards -->
      <div class="text-center mt-12"> <!-- View All Button -->
    </div>
  </section>
  ```

#### Variants
- **Article Card**: Image placeholder + category badge + title + meta + excerpt + read more
- **Category Badge**: Small pills with colors
- **Meta**: Date + read time

#### States
- **Default**: White cards, shadows
- **Hover**: Shadow increase, title color change
- **Loading**: Image skeletons, text placeholders

#### Responsive Behavior
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns

#### Interactions
- **Hover**: Card shadow, title color, arrow movement
- **Click**: Navigate to article
- **Category Tags**: Filter by category

#### Animations
- **Hover**: Transform scale(1.02)
- **Entrance**: Staggered fade-in
- **Arrow**: TranslateX on hover

### 5. Midjourney Prompts Section

#### Component Details
- **Name**: Midjourney Prompts Showcase
- **Structure**:
  ```html
  <section class="py-16 bg-gray-50">
    <div class="container">
      <div class="text-center mb-12"> <!-- Section Header -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <!-- Prompt Cards -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Feature Cards -->
    </div>
  </section>
  ```

#### Variants
- **Prompt Card**: SREF code + style tags + link
- **Style Tag**: Blue pills, clickable
- **Feature Card**: Icon + title + description

#### States
- **Default**: Gray cards, blue tags
- **Hover**: Tag background change
- **Active**: Selected tag state

#### Responsive Behavior
- **Mobile**: 1 column for prompts, 1 for features
- **Tablet**: 1 column for prompts, 2-3 for features
- **Desktop**: 2 columns for prompts, 3 for features

#### Interactions
- **Tag Click**: Filter or navigate
- **Card Click**: Navigate to prompt details
- **Hover**: Tag color change

#### Animations
- **Entrance**: Staggered fade-in
- **Hover**: Tag background transition
- **Grid**: Responsive layout changes

### 6. Footer

#### Component Details
- **Name**: Footer
- **Structure**:
  ```html
  <footer class="bg-gray-900 text-gray-300">
    <div class="container py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- Link Columns -->
      <div class="border-t border-gray-800 mt-12 pt-8"> <!-- Newsletter & Social -->
      <div class="border-t border-gray-800 mt-8 pt-8"> <!-- Copyright -->
    </div>
  </footer>
  ```

#### Variants
- **Link Columns**: Company, Products, Resources, Legal
- **Newsletter**: Email input + subscribe button
- **Social Icons**: Circular buttons with brand colors

#### States
- **Default**: Dark background, gray text
- **Hover**: White text on links
- **Focus**: Button outline on inputs

#### Responsive Behavior
- **Mobile**: Stacked columns
- **Tablet**: 2 columns
- **Desktop**: 4 columns

#### Interactions
- **Link Hover**: Color change
- **Newsletter**: Email validation, submit
- **Social**: Hover effects

#### Animations
- **Hover**: Color transitions
- **Newsletter**: Focus ring

### 7. Search Bar Component

#### Component Details
- **Name**: Search Bar
- **Structure**:
  ```html
  <div class="relative max-w-2xl mx-auto">
    <input type="text" placeholder="Search..." class="input text-lg pr-12">
    <button class="absolute right-2 top-1/2 transform -translate-y-1/2 p-2">
      <svg> <!-- Search Icon -->
    </button>
  </div>
  ```

#### Variants
- **Size**: Large (hero), medium (navigation)
- **Style**: With or without button

#### States
- **Default**: Gray border, placeholder text
- **Focus**: Blue border, shadow ring
- **Loading**: Spinner icon
- **Error**: Red border, error message

#### Responsive Behavior
- **Mobile**: Full width, smaller text
- **Desktop**: Fixed max-width, larger text

#### Interactions
- **Typing**: Real-time search suggestions
- **Submit**: Search execution
- **Clear**: Reset search

#### Animations
- **Focus**: Border color change
- **Loading**: Icon rotation

### 8. Button Components

#### Component Details
- **Name**: Button System
- **Variants**:
  - **Primary**: Blue background, white text
  - **Secondary**: White background, blue border
  - **Ghost**: Transparent, blue text
  - **Link**: Blue text, underline on hover

#### Structure
```html
<button class="btn btn-primary"> <!-- or btn-secondary, btn-ghost -->
  <span>Button Text</span>
  <svg> <!-- Optional icon -->
</button>
```

#### States
- **Default**: Base styles
- **Hover**: Darker background, shadow
- **Active**: Pressed state
- **Disabled**: Grayed out, no hover
- **Loading**: Spinner, disabled state

#### Sizes
- **Small**: 2rem height
- **Medium**: 2.5rem height (default)
- **Large**: 3rem height

#### Interactions
- **Click**: Action execution
- **Keyboard**: Enter, Space activation
- **Focus**: Visible focus ring

#### Animations
- **Hover**: Background color transition
- **Active**: Scale transform
- **Loading**: Icon rotation

### 9. Card Components

#### Component Details
- **Name**: Card System
- **Variants**:
  - **Category Card**: Icon + content
  - **Article Card**: Image + text
  - **Prompt Card**: Code + tags
  - **Feature Card**: Icon + description

#### Structure
```html
<div class="card">
  <div class="card-image"> <!-- Optional -->
  <div class="card-content">
    <h3 class="card-title">
    <p class="card-description">
    <div class="card-meta">
  <div class="card-actions">
</div>
```

#### States
- **Default**: Base shadow, border
- **Hover**: Increased shadow, lift effect
- **Loading**: Skeleton placeholders
- **Error**: Error message display

#### Responsive Behavior
- **Mobile**: Full width, stacked content
- **Desktop**: Fixed width, varied layouts

#### Interactions
- **Hover**: Visual feedback
- **Click**: Navigation or action
- **Focus**: Keyboard accessibility

#### Animations
- **Hover**: Transform and shadow
- **Entrance**: Fade-in animation
- **Loading**: Skeleton pulse

### 10. Input Components

#### Component Details
- **Name**: Form Inputs
- **Variants**:
  - **Text Input**: Single line text
  - **Email Input**: With validation
  - **Search Input**: With icon button
  - **Textarea**: Multi-line text

#### Structure
```html
<input type="text" class="input" placeholder="Enter text">
<textarea class="input" placeholder="Enter message"></textarea>
```

#### States
- **Default**: Gray border
- **Focus**: Blue border, shadow ring
- **Error**: Red border, error message
- **Disabled**: Gray background, no interaction

#### Sizes
- **Small**: 2rem height
- **Medium**: 2.5rem height (default)
- **Large**: 3rem height

#### Interactions
- **Typing**: Real-time validation
- **Focus**: Visual feedback
- **Submit**: Form submission

#### Animations
- **Focus**: Border color transition
- **Error**: Shake animation
- **Success**: Checkmark icon

### 11. Dropdown Menu Component

#### Component Details
- **Name**: Dropdown Menu
- **Structure**:
  ```html
  <div class="relative group">
    <button class="dropdown-trigger"> <!-- Trigger button -->
    <div class="dropdown-menu"> <!-- Menu items -->
      <a href="#" class="dropdown-item">Menu Item</a>
    </div>
  </div>
  ```

#### Variants
- **Navigation**: Header dropdowns
- **Action**: Context menus
- **Filter**: Selection dropdowns

#### States
- **Closed**: Hidden menu
- **Open**: Visible menu with shadow
- **Hover**: Highlighted item

#### Interactions
- **Hover**: Open menu
- **Click**: Select item
- **Keyboard**: Arrow navigation

#### Animations
- **Open**: Fade in, slide down
- **Close**: Fade out
- **Hover**: Item background change

### 12. Modal Component

#### Component Details
- **Name**: Modal Dialog
- **Structure**:
  ```html
  <div class="modal-overlay">
    <div class="modal-content">
      <div class="modal-header">
      <div class="modal-body">
      <div class="modal-footer">
    </div>
  </div>
  ```

#### Variants
- **Small**: 400px width
- **Medium**: 600px width
- **Large**: 800px width

#### States
- **Open**: Visible with overlay
- **Closed**: Hidden
- **Loading**: Content loading state

#### Interactions
- **Close Button**: Click to close
- **Overlay**: Click to close
- **Escape**: Keyboard close

#### Animations
- **Open**: Fade in, scale up
- **Close**: Fade out, scale down

### 13. Badge Component

#### Component Details
- **Name**: Badge/Tag
- **Variants**:
  - **Category**: Blue background
  - **Status**: Green/yellow/red
  - **Count**: Gray background

#### Structure
```html
<span class="badge badge-primary">Badge Text</span>
```

#### States
- **Default**: Base colors
- **Hover**: Darker background
- **Active**: Selected state

#### Sizes
- **Small**: 0.75rem height
- **Medium**: 1rem height
- **Large**: 1.25rem height

#### Interactions
- **Click**: Selection/filter
- **Hover**: Visual feedback

#### Animations
- **Hover**: Background transition
- **Selection**: Scale effect

### 14. Avatar Component

#### Component Details
- **Name**: Avatar/User Badge
- **Structure**:
  ```html
  <div class="avatar">
    <img src="user.jpg" alt="User Name">
  </div>
  ```

#### Variants
- **Image**: User photo
- **Initial**: Fallback initials
- **Icon**: Default user icon

#### Sizes
- **Small**: 32px
- **Medium**: 48px
- **Large**: 64px

#### States
- **Default**: Circular with border
- **Online**: Green status dot
- **Offline**: Gray status dot

#### Interactions
- **Click**: User profile
- **Hover**: Border color change

#### Animations
- **Hover**: Border color transition
- **Status**: Pulse animation

### 15. Statistic Component

#### Component Details
- **Name**: Statistic/Counter
- **Structure**:
  ```html
  <div class="stat">
    <div class="stat-number">
    <div class="stat-label">
  </div>
  ```

#### Variants
- **Large**: Hero section stats
- **Medium**: Card stats
- **Small**: Inline stats

#### States
- **Default**: Static number
- **Animating**: Counting up animation
- **Loading**: Skeleton placeholder

#### Interactions
- **Viewport**: Trigger animation
- **Hover**: Highlight effect

#### Animations
- **Counting**: Number increment
- **Highlight**: Background flash
- **Entrance**: Fade in effect

## Responsive Breakpoints

### Breakpoint System
- **xs**: 0px - 639px (Mobile)
- **sm**: 640px - 767px (Large Mobile)
- **md**: 768px - 1023px (Tablet)
- **lg**: 1024px - 1279px (Small Desktop)
- **xl**: 1280px - 1535px (Desktop)
- **2xl**: 1536px+ (Large Desktop)

### Layout Changes
- **Navigation**: Horizontal → Hamburger
- **Grid**: 4→3→2→1 columns
- **Typography**: Scale down on mobile
- **Spacing**: Reduced on smaller screens

## Animation System

### Timing Functions
- **Ease**: `cubic-bezier(0.4, 0, 0.2, 1)` (default)
- **Ease In**: `cubic-bezier(0.4, 0, 1, 1)`
- **Ease Out**: `cubic-bezier(0, 0, 0.2, 1)`
- **Ease In Out**: `cubic-bezier(0.4, 0, 0.2, 1)`

### Durations
- **Fast**: 0.15s
- **Normal**: 0.2s
- **Slow**: 0.3s
- **Extra Slow**: 0.5s

### Common Animations
- **Fade In**: `opacity: 0 → 1`
- **Slide Up**: `translateY(20px) → translateY(0)`
- **Scale**: `scale(0.95) → scale(1)`
- **Lift**: `translateY(-2px)` on hover

## Interaction Patterns

### Hover States
- **Buttons**: Background color change
- **Cards**: Shadow increase, lift
- **Links**: Color change, underline
- **Images**: Scale or zoom effect

### Focus States
- **Inputs**: Blue border, shadow ring
- **Buttons**: Outline ring
- **Links**: Dotted outline

### Loading States
- **Skeletons**: Pulse animation
- **Spinners**: Rotation animation
- **Placeholders**: Gray boxes

### Error States
- **Inputs**: Red border, error message
- **Cards**: Error icon, message
- **Forms**: Validation feedback

## Accessibility Considerations

### Keyboard Navigation
- **Tab Order**: Logical flow
- **Focus Indicators**: Visible outlines
- **Skip Links**: Jump to content
- **ARIA Labels**: Screen reader support

### Color Contrast
- **Text**: WCAG AA compliance
- **Icons**: Sufficient contrast
- **States**: Clear differentiation

### Screen Readers
- **Alt Text**: Descriptive images
- **ARIA Roles**: Proper semantics
- **Announcements**: Dynamic content
