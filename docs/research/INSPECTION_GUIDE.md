# Website Inspection Guide

## How to Reverse-Engineer Any Website

This guide outlines what to capture when inspecting a target website via Chrome MCP or browser DevTools.

## Phase 1: Visual Audit

### Screenshots to Capture
- [ ] Every distinct page — desktop, tablet, mobile
- [ ] Dark mode variants (if applicable)
- [ ] Light mode variants (if applicable)
- [ ] Key interaction states (hover, active, open menus, modals)
- [ ] Loading/skeleton states
- [ ] Empty states
- [ ] Error states

### Design Tokens to Extract
- [ ] **Colors** — background, text (primary/secondary/muted), accent, border, hover, error, success, warning
- [ ] **Typography** — font family, sizes (h1-h6, body, caption, label), weights, line heights, letter spacing
- [ ] **Spacing** — padding/margin patterns (look for a scale: 4px, 8px, 12px, 16px, 24px, 32px, etc.)
- [ ] **Border radius** — buttons, cards, avatars, inputs
- [ ] **Shadows/elevation** — card shadows, dropdown shadows, modal overlay
- [ ] **Breakpoints** — when does the layout shift? (inspect with DevTools responsive mode)
- [ ] **Icons** — which icon library? custom SVGs? sizes?
- [ ] **Avatars** — sizes, shapes, fallback behavior
- [ ] **Buttons** — all variants (primary, secondary, ghost, icon-only, danger)
- [ ] **Inputs** — text fields, textareas, selects, checkboxes, toggles

## Phase 2: Component Inventory

### 分析方法：截图 + HTML代码段结合

对于每个UI组件，使用以下方法进行全面分析：

#### 1. 视觉截图分析
- **截图工具**: 使用浏览器开发者工具的截图功能
- **截图内容**: 组件在不同状态下的视觉表现
- **截图存储**: `docs/design-references/[component-name].png`

#### 2. HTML代码段分析
- **开发者工具**: Chrome DevTools → Elements 面板
- **代码提取**: 右键 → Copy → Copy outerHTML
- **代码存储**: `docs/research/components/[component-name].html`

#### 3. CSS样式分析
- **计算样式**: Computed 面板查看最终样式
- **样式来源**: Styles 面板追踪CSS来源
- **样式存储**: `docs/research/components/[component-name].css`

### 组件分析模板

对于每个 distinct UI component，按以下结构文档：

#### 📸 视觉分析
```
[截图文件: docs/design-references/[component-name].png]

截图描述：
- 默认状态截图
- 悬停状态截图  
- 激活状态截图
- 响应式截图 (移动端/平板/桌面)
```

#### 🔧 HTML结构分析
```html
<!-- 实际HTML代码段 -->
[从DevTools复制的HTML代码]

结构说明：
- 根元素类型
- 直接子元素
- 嵌套层级
- 语义化标签使用
```

#### 🎨 CSS样式分析
```css
/* 关键CSS样式 */
[从Computed面板提取的关键样式]

样式说明：
- 布局方式 (flex/grid)
- 尺寸和间距
- 颜色和字体
- 动画和过渡
```

#### 📋 组件清单
1. **Name** — 组件名称
2. **Structure** — HTML结构和子组件
3. **Variants** — 尺寸、颜色、状态变体
4. **States** — default, hover, active, disabled, loading, error, empty
5. **Responsive behavior** — 断点响应行为
6. **Interactions** — click, hover, focus, keyboard导航
7. **Animations** — 过渡、进入/退出动画、微交互

### 实施步骤

#### 步骤1: 截图收集
```bash
# 创建截图目录
mkdir -p docs/design-references

# 使用Chrome DevTools截图
# 1. 打开目标网站
# 2. 打开DevTools (F12)
# 3. Elements面板 → 右键组件 → "Capture node screenshot"
# 4. 保存到 docs/design-references/
```

#### 步骤2: HTML代码提取
```bash
# 创建组件代码目录
mkdir -p docs/research/components

# 在DevTools中提取HTML
# 1. Elements面板 → 右键组件 → "Copy" → "Copy outerHTML"
# 2. 保存到 docs/research/components/[component-name].html
```

#### 步骤3: CSS样式分析
```bash
# 提取计算样式
# 1. Elements面板 → 选中组件
# 2. Computed面板 → 复制关键样式
# 3. 保存到 docs/research/components/[component-name].css
```

#### 步骤4: 综合分析文档
```markdown
# 创建组件分析文档
docs/research/components/[component-name].md

包含：
- 截图引用
- HTML代码段
- CSS样式分析
- 交互行为描述
- 响应式设计说明
```

### 常见组件分析目标

#### 🧭 Navigation (top bar, sidebar, bottom bar)
- **截图**: 导航栏在不同屏幕尺寸下的表现
- **HTML**: `<header>`, `<nav>`, `<ul>`, `<li>`, `<a>` 结构
- **CSS**: 固定定位、flex布局、下拉菜单样式
- **交互**: 悬停展开、移动端汉堡菜单

#### 🃏 Cards / list items
- **截图**: 卡片默认、悬停、加载状态
- **HTML**: `<article>`, `<div class="card">`, 内容结构
- **CSS**: 阴影、边框、内边距、悬停效果
- **交互**: 点击跳转、悬停动画

#### 🔘 Buttons and links
- **截图**: 不同按钮样式和状态
- **HTML**: `<button>`, `<a>` 结构
- **CSS**: 背景色、边框、字体、过渡效果
- **交互**: 点击、悬停、焦点状态

#### 📝 Forms and inputs
- **截图**: 输入框默认、焦点、错误状态
- **HTML**: `<form>`, `<input>`, `<label>` 结构
- **CSS**: 边框、内边距、焦点环、验证状态
- **交互**: 输入验证、键盘导航

#### 🪟 Modals and dialogs
- **截图**: 模态框打开/关闭状态
- **HTML**: `<div class="modal">`, `<div class="overlay">` 结构
- **CSS**: 定位、层级、背景遮罩、动画
- **交互**: 打开/关闭、ESC键、点击外部关闭

#### 📋 Dropdowns and menus
- **截图**: 下拉菜单展开/收起状态
- **HTML**: `<div class="dropdown">`, `<ul>`, `<li>` 结构
- **CSS**: 定位、层级、动画、箭头指示器
- **交互**: 悬停展开、键盘导航

#### 📑 Tabs and segmented controls
- **截图**: 标签页不同选中状态
- **HTML**: `<div class="tabs">`, `<button class="tab">` 结构
- **CSS**: 下边框指示器、选中状态、过渡效果
- **交互**: 点击切换、键盘导航

#### 👤 Avatars and user badges
- **截图**: 头像不同尺寸和状态
- **HTML**: `<img>`, `<div class="avatar">` 结构
- **CSS**: 圆形、尺寸、边框、状态指示器
- **交互**: 点击用户资料、悬停效果

#### 💀 Loading skeletons
- **截图**: 骨架屏动画效果
- **HTML**: `<div class="skeleton">` 占位结构
- **CSS**: 渐变背景、动画、占位尺寸
- **交互**: 加载状态、动画循环

#### 🔔 Toast notifications
- **截图**: 通知提示不同类型和位置
- **HTML**: `<div class="toast">` 消息结构
- **CSS**: 固定定位、颜色类型、动画
- **交互**: 自动消失、手动关闭

#### 💡 Tooltips and popovers
- **截图**: 工具提示和弹出框位置
- **HTML**: `<div class="tooltip">`, `<div class="popover">` 结构
- **CSS**: 定位、箭头、层级、动画
- **交互**: 悬停触发、点击触发、延迟显示

### 分析记录模板

```markdown
# [Component Name] 组件分析

## 📸 视觉参考
![Component Screenshot](../../design-references/[component-name].png)

## 🔧 HTML结构
```html
[HTML代码段]
```

## 🎨 CSS样式
```css
[关键CSS样式]
```

## 📋 组件清单
1. **Name**: [组件名称]
2. **Structure**: [HTML结构说明]
3. **Variants**: [变体说明]
4. **States**: [状态说明]
5. **Responsive behavior**: [响应式行为]
6. **Interactions**: [交互说明]
7. **Animations**: [动画说明]

## 📱 响应式设计
[不同屏幕尺寸下的表现]

## 🎯 实现要点
[关键实现细节和注意事项]
```

## Phase 3: Layout Architecture

### 布局分析方法

#### 1. 网格系统分析
- **截图**: 不同屏幕尺寸下的布局截图
- **HTML**: 网格容器的HTML结构
- **CSS**: 网格样式定义 (CSS Grid/Flexbox)

#### 2. 断点分析
- **截图**: 各个断点的布局变化
- **CSS**: 媒体查询断点定义
- **响应式**: 列数变化的CSS规则

#### 3. 间距系统分析
- **截图**: 间距在不同组件中的应用
- **CSS**: 间距变量和使用方式
- **设计**: 间距比例和缩放关系

### 布局分析清单

- [ ] **Grid system** — CSS Grid? Flexbox? Fixed widths?
- [ ] **Column layout** — how many columns at each breakpoint?
- [ ] **Spacing system** — spacing scale and usage
- [ ] **Container system** — max-width and padding
- [ ] **Responsive breakpoints** — exact breakpoint values
- [ ] **Layout patterns** — common layout patterns used

### 布局分析文档模板

```markdown
# Layout Architecture Analysis

## 📸 布局截图
![Layout Screenshot](../../design-references/layout.png)

## 🔧 HTML结构
```html
[布局HTML结构]
```

## 🎨 CSS布局
```css
[布局CSS样式]
```

## 📐 网格系统
[网格系统详细说明]

## 📱 断点系统
[断点定义和响应式行为]

## 📏 间距系统
[间距规则和变量]

## 🎯 实现策略
[布局实现的技术方案]
```
- [ ] **Max-width** — main content area max-width
- [ ] **Sticky elements** — header, sidebar, floating buttons
- [ ] **Z-index layers** — navigation, modals, tooltips, overlays
- [ ] **Scroll behavior** — infinite scroll, pagination, virtual scrolling

## Phase 4: Technical Stack Analysis

- [ ] **Framework** — React? Vue? Angular? Check `__NEXT_DATA__`, `__NUXT__`, `ng-version`
- [ ] **CSS approach** — Tailwind (utility classes), CSS Modules, Styled Components, Emotion, vanilla CSS
- [ ] **State management** — Redux (check DevTools), React Query, Zustand, Pinia
- [ ] **API patterns** — REST, GraphQL (check network tab for `/graphql` requests)
- [ ] **Font loading** — Google Fonts, self-hosted, system fonts
- [ ] **Image strategy** — CDN, lazy loading, srcset, WebP/AVIF
- [ ] **Animation library** — Framer Motion, GSAP, CSS transitions only

## Phase 5: Documentation Output

After inspection, create these files in `docs/research/`:
1. `DESIGN_TOKENS.md` — All extracted colors, typography, spacing
2. `COMPONENT_INVENTORY.md` — Every component with structure notes
3. `LAYOUT_ARCHITECTURE.md` — Page layouts, grid system, responsive behavior
4. `INTERACTION_PATTERNS.md` — Animations, transitions, hover states
5. `TECH_STACK_ANALYSIS.md` — What the site uses and our chosen equivalents
