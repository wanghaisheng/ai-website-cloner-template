# Toolify.ai Layout Architecture

## Phase 3: Layout Architecture

### Grid System

#### CSS Grid Implementation
Toolify.ai 使用 CSS Grid 和 Flexbox 混合的布局系统：

```css
/* 主容器网格系统 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

/* 响应式网格 */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
}

.grid-fixed {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
}

.grid-2-3-4 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
}

@media (min-width: 768px) {
  .grid-2-3-4 {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-2-3-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

#### Flexbox 组件
```css
/* 导航栏布局 */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

/* 卡片内容布局 */
.card-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

/* 统计数据布局 */
.stats-row {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
}

/* 按钮组布局 */
.button-group {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
}
```

### Column Layout

#### 响应式列布局
```css
/* 页脚列布局 */
.footer-columns {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

@media (min-width: 768px) {
  .footer-columns {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-columns {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* 内容区域布局 */
.content-columns {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

@media (min-width: 1024px) {
  .content-columns {
    grid-template-columns: 2fr 1fr;
    gap: var(--space-xl);
  }
}

@media (min-width: 1280px) {
  .content-columns {
    grid-template-columns: 3fr 1fr;
    gap: var(--space-xl);
  }
}
```

#### 固定宽度列
```css
/* 侧边栏布局 */
.sidebar-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: var(--space-lg);
}

@media (max-width: 768px) {
  .sidebar-layout {
    grid-template-columns: 1fr;
  }
}

/* 内容侧边栏 */
.content-sidebar {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: var(--space-lg);
}

@media (max-width: 1024px) {
  .content-sidebar {
    grid-template-columns: 1fr;
  }
}
```

### 断点系统

#### 响应式断点
```css
/* Tailwind CSS v4 断点 */
@theme {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* 媒体查询断点 */
@media (max-width: 639px) {
  /* Mobile styles */
}

@media (min-width: 640px) and (max-width: 767px) {
  /* Large Mobile styles */
}

@media (min-width: 768px) and (max-width: 1023px) {
  /* Tablet styles */
}

@media (min-width: 1024px) and (max-width: 1279px) {
  /* Small Desktop styles */
}

@media (min-width: 1280px) and (max-width: 1535px) {
  /* Desktop styles */
}

@media (min-width: 1536px) {
  /* Large Desktop styles */
}
```

### 具体布局实现

#### 1. 主页面布局
```html
<!DOCTYPE html>
<html lang="en">
<body class="min-h-full flex flex-col">
  <header> <!-- Navigation -->
  <main class="flex-1 pt-16">
    <!-- Hero Section -->
    <!-- Category Grid -->
    <!-- Featured Articles -->
    <!-- Midjourney Prompts -->
  </main>
  <footer> <!-- Footer -->
</body>
</html>
```

#### 2. 分类网格布局
```html
<section class="py-16 bg-gray-50">
  <div class="container">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <!-- 22个分类卡片 -->
    </div>
  </div>
</section>
```

#### 3. 文章网格布局
```html
<section class="py-16 bg-white">
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- 文章卡片 -->
    </div>
  </div>
</section>
```

#### 4. Midjourney 提示布局
```html
<section class="py-16 bg-gray-50">
  <div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- 提示卡片 -->
    </div>
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- 特性卡片 -->
    </div>
  </div>
</section>
```

#### 5. 页脚布局
```html
<footer class="bg-gray-900 text-gray-300">
  <div class="container py-12">
    <!-- 主要链接列 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- 4列链接 -->
    </div>
    
    <!-- 简报和社交 -->
    <div class="border-t border-gray-800 mt-12 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- 订阅表单 -->
        <!-- 社交媒体图标 -->
      </div>
    </div>
    
    <!-- 版权信息 -->
    <div class="border-t border-gray-800 mt-8 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- 版权文本 -->
        <!-- 返回顶部链接 -->
      </div>
    </div>
  </div>
</footer>
```

### 布局模式

#### 1. 流式布局 (Fluid Layout)
```css
.full-width {
  width: 100%;
  padding-left: 0;
  padding-right: 0;
}

.full-width .container {
  padding-left: var(--space-md);
  padding-right: var(--space-md);
}
```

#### 2. 约束布局 (Contained Layout)
```css
.contained {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}
```

#### 3. 紧凑布局 (Compact Layout)
```css
.compact {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-sm);
}
```

### 间距系统

#### 间距比例
```css
/* 基于 4px 的间距系统 */
:root {
  --space-xs: 0.25rem;  /* 4px */
  --space-sm: 0.5rem;   /* 8px */
  --space-md: 1rem;    /* 16px */
  --space-lg: 1.5rem;  /* 24px */
  --space-xl: 2rem;    /* 32px */
  --space-2xl: 3rem;   /* 48px */
  --space-3xl: 4rem;   /* 64px */
}
```

#### 间距应用
```css
/* 组件间距 */
.section-spacing {
  padding: var(--space-2xl) 0;
}

.card-spacing {
  padding: var(--space-lg);
}

.button-spacing {
  gap: var(--space-sm);
}

/* 响应式间距 */
@media (max-width: 768px) {
  .section-spacing {
    padding: var(--space-xl) 0;
  }
  
  .card-spacing {
    padding: var(--space-md);
  }
}
```

### 对齐系统

#### Flexbox 对齐
```css
/* 水平对齐 */
.align-start {
  justify-content: flex-start;
}

.align-center {
  justify-content: center;
}

.align-end {
  justify-content: flex-end;
  align-items: center;
}

.align-between {
  justify-content: space-between;
  align-items: center;
}

/* 垂直对齐 */
.items-start {
  align-items: flex-start;
}

.items-center {
  align-items: center;
}

.items-end {
  align-items: flex-end;
}

.items-stretch {
  align-items: stretch;
}
```

#### Grid 对齐
```css
/* 网格对齐 */
.grid-start {
  justify-items: start;
}

.grid-center {
  justify-items: center;
  grid-auto-flow: row;
  align-items: center;
}

.grid-end {
  justify-items: end;
  align-items: center;
}

.grid-stretch {
  align-items: stretch;
}
```

### 容器系统

#### 最大宽度容器
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.container-sm {
  max-width: 640px;
}

.container-lg {
  max-width: 1024px;
}

.container-xl {
  max-width: 1280px;
}
```

#### 全宽度容器
```css
.container-fluid {
  width: 100%;
  padding: 0 var(--space-md);
}

.container-fluid-sm {
  padding: 0 var(--space-sm);
}

.container-fluid-lg {
  padding: 0 var(--space-lg);
}
```

### 布局工具类

#### 显示控制
```css
.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline-flex {
  display: inline-flex;
}

.flex {
  display: flex;
}

.hidden {
  display: none;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

#### 定位
```css
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.fixed {
  position: fixed;
}

.sticky {
  position: sticky;
}
```

#### 溢流控制
```css
.overflow-hidden {
  overflow: hidden;
}

.overflow-auto {
  overflow: auto;
}

.overflow-scroll {
  overflow: scroll;
}
```

### 布局最佳实践

#### 1. 移动优先
```css
/* 默认移动端样式 */
.component {
  /* 移动端样式 */
}

@media (min-width: 768px) {
  .component {
    /* 平板和桌面端样式 */
  }
}
```

#### 2. 渐进增强
```css
/* 基础布局 */
.layout {
  display: flex;
  flex-direction: column;
}

/* 增强布局 */
@media (min-width: 1024px) {
  .layout {
    flex-direction: row;
  }
}
```

#### 3. 弹性布局
```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
}

/* 固定列数 */
@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

#### 4. 安全区域
```css
.safe-area {
  padding-top: 4rem; /* 导航栏高度 */
  padding-bottom: 2rem;
}

.max-width-content {
  max-width: 1200px;
  margin: 0 auto;
}
```

### 性能优化

#### 1. 减少重排
```css
/* 使用 CSS Grid 减少重排 */
.layout-grid {
  display: grid;
  grid-template-areas: 
    "header header"
    "main main"
    "sidebar sidebar"
    "footer footer";
  grid-template-columns: 1fr 200px;
  grid-template-rows: auto 1fr auto;
}
```

#### 2. 容器查询
```css
/* 使用容器查询优化布局 */
@container (min-width: 1024px) {
  .layout {
    /* 桌面端布局 */
  }
}

@container (max-width: 768px) {
  .layout {
    /* 移动端布局 */
  }
}
```

#### 3. CSS Containment
```css
/* 使用 contain 属性优化性能 */
.card {
  contain: layout style paint;
}

.image {
  contain: layout size;
}
```

这个布局架构文档为 Toolify.ai 提供了完整的布局系统指导，确保所有组件都能在不同设备上正确显示和响应。
