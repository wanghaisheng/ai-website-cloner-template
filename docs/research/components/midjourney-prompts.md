# Midjourney Prompts 组件分析

## 📸 视觉参考
![Midjourney Prompts Screenshot](../../design-references/midjourney-prompts.png)

## 🔧 HTML结构
```html
<section class="py-16 bg-gray-50">
  <div class="container">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Master Midjourney Prompts
      </h2>
      <p class="text-lg text-gray-600 mb-6">
        Explore curated Midjourney prompts and style references for stunning AI art
      </p>
      <a href="/midjourney-library" class="btn btn-primary">
        View More
      </a>
    </div>

    <!-- Prompt Showcase Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Prompt Card 1 -->
      <div class="card hover:shadow-lg transition-all duration-200 animate-fade-in" style="animation-delay: 0.1s">
        <!-- SREF Code -->
        <h3 class="text-xl font-semibold text-gray-900 mb-4 font-mono bg-gray-100 px-3 py-2 rounded">
          Master Midjourney Prompts
        </h3>

        <!-- Style Tags Grid -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Dreamy
          </span>
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Surreal
          </span>
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Ethereal
          </span>
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Pointillism
          </span>
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Painterly
          </span>
        </div>

        <!-- View Prompt Link -->
        <a 
          href="/midjourney-library/sref/cosmic-pointillist-dreamscapes" 
          class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          View Prompt Details
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <!-- Prompt Card 2 -->
      <div class="card hover:shadow-lg transition-all duration-200 animate-fade-in" style="animation-delay: 0.2s">
        <!-- SREF Code -->
        <h3 class="text-xl font-semibold text-gray-900 mb-4 font-mono bg-gray-100 px-3 py-2 rounded">
          --sref 4215135847
        </h3>

        <!-- Style Tags Grid -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Dreamy
          </span>
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Surreal
          </span>
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Ethereal
          </span>
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Pointillism
          </span>
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Painterly
          </span>
        </div>

        <!-- Related Prompt -->
        <a 
          href="/midjourney-library/prompt/ghada-amer" 
          class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          Related Prompt: Ghada Amer's painting depicting…
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <!-- Prompt Card 3 -->
      <div class="card hover:shadow-lg transition-all duration-200 animate-fade-in" style="animation-delay: 0.3s">
        <!-- SREF Code -->
        <h3 class="text-xl font-semibold text-gray-900 mb-4 font-mono bg-gray-100 px-3 py-2 rounded">
          Ghada Amer's painting depicting …
        </h3>

        <!-- Style Tags Grid -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Mixed Media
          </span>
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Expressive
          </span>
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Textured
          </span>
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Line art
          </span>
          <span class="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            Contemporary
          </span>
        </div>

        <!-- View Prompt Link -->
        <a 
          href="/midjourney-library/prompt/ghada-amer" 
          class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          View Prompt Details
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <!-- 更多提示卡片... -->
      <!-- 总共7个提示卡片 -->
    </div>

    <!-- Additional Features -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Feature Card 1 -->
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Curated Prompts</h3>
        <p class="text-gray-600">Hand-picked Midjourney prompts from the community</p>
      </div>

      <!-- Feature Card 2 -->
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Style References</h3>
        <p class="text-gray-600">Comprehensive SREF codes and style guides</p>
      </div>

      <!-- Feature Card 3 -->
      <div class="text-center">
        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364-6.364L12 7.636l4.5 4.5z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Community Favorites</h3>
        <p class="text-gray-600">Most loved and used prompts by artists</p>
      </div>
    </div>
  </div>
</section>
```

## 🎨 CSS样式
```css
/* 关键CSS样式 */
.midjourney-section {
  padding: 4rem 0;
  background-color: #f9fafb;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.prompt-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .prompt-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.features-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.font-mono {
  font-family: ui-monospace, SF Mono, Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace;
}

.bg-gray-100 {
  background-color: #f3f4f6;
}

.style-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 9999px;
  color: #1d4ed8;
  background-color: #dbeafe;
  transition: background-color 0.2s ease;
  cursor: pointer;
}

.style-tag:hover {
  background-color: #bfdbfe;
}

.text-blue-600 {
  color: #2563eb;
}

.text-blue-700 {
  color: #1d4ed8;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.feature-icon {
  width: 4rem;
  height: 4rem;
  background-color: #dbeafe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.feature-icon svg {
  width: 2rem;
  height: 2rem;
  color: #2563eb;
}
```

## 📋 组件清单

1. **Name**: Midjourney Prompts Showcase
2. **Structure**: 
   - 根元素: `<section>` (灰色背景)
   - 容器: `<div class="container">` (最大宽度)
   - 标题区: `<div class="text-center mb-12">` (标题、描述、按钮)
   - 提示网格: `<div class="prompt-grid">` (2列网格)
   - 提示卡片: `<div class="card">` (SREF代码 + 风格标签)
   - 特性网格: `<div class="features-grid">` (3列网格)
   - 特性卡片: `<div class="text-center">` (图标 + 标题 + 描述)
3. **Variants**: 
   - 提示网格: 2列布局 (桌面端)
   - 特性网格: 1→3列 (响应式)
   - SREF代码: 不同代码格式
   - 风格标签: 不同颜色和数量
4. **States**: 
   - Default: 灰色卡片，浅灰阴影
   - Hover: 深阴影，向上移动
   - Active: 标签背景变深
   - Loading: 占位符状态
5. **Responsive behavior**: 
   - Mobile: 提示1列，特性1列
   - Tablet: 提示1列，特性2-3列
   - Desktop: 提示2列，特性3列
6. **Interactions**: 
   - Hover: 卡片提升，阴影变化
   - Click: 导航到提示详情
   - Tag Click: 筛选或导航
   - Hover: 标签背景变化
7. **Animations**: 
   - Fade In: 渐入动画 (0.3s ease)
   - Stagger: 0.1s 间隔的错开动画
   - Hover: Transform translateY(-2px)
   - Tag: Background color transition

## 📱 响应式设计

### 提示网格
- **Mobile (< 1024px)**: 1列布局
- **Desktop (≥ 1024px)**: 2列布局
- **间距**: 2rem (32px)

### 特性网格
- **Mobile (< 768px)**: 1列布局
- **Tablet (768px - 1024px)**: 2-3列布局
- **Desktop (≥ 1024px)**: 3列布局
- **间距**: 2rem (32px)

### 卡片尺寸
- **最小宽度**: 自适应
- **内边距**: 1.5rem (24px)
- **圆角**: 0.5rem (8px)

## 🎯 实现要点

### 关键技术点
- 使用 `grid-template-columns` 实现响应式网格
- CSS `font-mono` 实现等宽字体显示SREF代码
- `flex-wrap` 实现标签自动换行
- `border-radius: 9999px` 实现完美圆形标签
- `transition: all 0.2s ease` 平滑过渡效果

### SREF代码样式
- **字体**: 等宽字体 (`font-mono`)
- **背景**: 浅灰色 (`#f3f4f6`)
- **内边距**: `0.75rem` 高度，`1rem` 宽度
- **圆角**: `0.375rem` (6px)
- **字重**: `font-semibold` (600)

### 风格标签系统
- **尺寸**: `0.875rem` 字体，`0.25rem` 高度
- **内边距**: `0.75rem` 高度，`0.75rem` 宽度
- **圆角**: 完全圆形 (`9999px`)
- **颜色**: 蓝色系 (`#1d4ed8`)
- **背景**: 浅蓝色 (`#dbeafe`)

### 特性卡片设计
- **图标**: 4rem × 4rem 圆形图标
- **背景**: 浅蓝色 (`#dbeafe`)
- **颜色**: 蓝色 (`#2563eb`)
- **对齐**: 居中显示
- **间距**: 底部 1rem

### 可访问性考虑
- 语义化HTML5标签 (`<section>`, `<h3>`)
- `font-mono` 提高代码可读性
- 链接使用 `<a>` 标签
- 键盘导航支持 (Tab, Enter)
- 颜色对比度符合WCAG标准

### 性能优化
- CSS硬件加速动画
- Intersection Observer 延迟加载
- 避免布局抖动
- 合理的动画时长

## 📊 提示内容分析

### 7个Midjourney提示
1. **Master Midjourney Prompts**
   - 风格标签: Dreamy, Surreal, Ethereal, Pointillism, Painterly
   - 相关提示: Ghada Amer's painting depicting…

2. **--sref 4215135847**
   - 风格标签: Dreamy, Surreal, Ethereal, Pointillism, Painterly
   - 引用: cosmic-pointillist-dreamscapes

3. **Ghada Amer's painting depicting…**
   - 风格标签: Mixed Media, Expressive, Textured, Line art, Contemporary
   - 艺术家风格: Ghada Amer

4. **Knolling**
   - 风格标签: bird's eye view, Grid, Geometric, Photography, Still Life
   - 概念: 物品排列艺术

5. **--sref 3210822185**
   - 风格标签: Engraved, Illustration, Folk Art, Bold lines
   - 引用: engraved-imaginarium

6. **--sref 2776475560**
   - 风格标签: Black and White, High Contrast, Highly Detailed, Photography, Textured
   - 引用: high-fidelity-monotone

7. **--sref 371907735**
   - 风格标签: Serene, Illustration, Floral, Dreamy, Asian
   - 引用: serene-floral-dreams

### 风格标签统计
- **Dreamy**: 出现在3个提示中
- **Surreal**: 出现在3个提示中
- **Ethereal**: 出现在3个提示中
- **Pointillism**: 出现在2个提示中
- **Painterly**: 出现在2个提示中

## 🎨 设计语言分析

### 颜色使用
- **背景**: `#f9fafb` - 浅灰色
- **卡片背景**: `#ffffff` - 白色
- **边框**: `#e5e7eb` - 浅灰色
- **主标题**: `#111827` - 深灰色
- **副标题**: `#6b7280` - 中灰色
- **SREF代码**: `#f3f4f6` - 浅灰色背景
- **标签文字**: `#1d4ed8` - 深蓝色
- **标签背景**: `#dbeafe` - 浅蓝色

### 字体层级
- **主标题**: 1.875rem → 2.25rem → 3rem
- **副标题**: 1.125rem
- **SREF代码**: 1rem (font-mono)
- **标签**: 0.875rem
- **特性标题**: 1.125rem (font-weight: 600)
- **特性描述**: 1rem (line-height: 1.6)

### 间距系统
- **区块内边距**: 4rem (64px)
- **标题下边距**: 3rem (48px)
- **提示间距**: 2rem (32px)
- **卡片内边距**: 1.5rem (24px)
- **SREF下边距**: 1rem (16px)
- **标签间距**: 0.5rem (8px)
- **特性图标间距**: 1rem (16px)

### 交互状态
- **默认**: 灰色卡片，浅灰阴影
- **悬停**: 深阴影，向上提升
- **标签**: 背景颜色变深
- **链接**: 蓝色文字，箭头移动
- **焦点**: 轮廓指示器

### 视觉层次
1. **SREF代码**: 等宽字体，灰色背景，突出显示
2. **分类标题**: 粗体字重，深灰色
3. **风格标签**: 圆形徽章，蓝色系
4. **链接**: 蓝色文字，带箭头
5. **描述文字**: 灰色文字，常规字重
6. **特性标题**: 粗体字重，深灰色
7. **特性描述**: 灰色文字，常规字重
