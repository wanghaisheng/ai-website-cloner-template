# Design Language Analysis

## 🎨 设计系统概览

### 设计原则
- **简洁性**: 清晰的视觉层次，减少认知负担
- **一致性**: 统一的组件样式和交互模式
- **可访问性**: 符合WCAG AA标准，支持键盘导航
- **响应式**: 移动优先，渐进增强
- **性能**: 优化加载速度和用户体验

### 视觉特征
- **现代扁平化**: 简洁的界面，无过度装饰
- **蓝白主调**: 专业、可信赖的视觉印象
- **卡片式布局**: 信息模块化，易于浏览
- **渐变背景**: 增加视觉层次和现代感

## 🎨 颜色系统

### 主色调
```css
:root {
  /* 主色 - 蓝色 */
  --color-primary-50: #eff6ff;    /* 最浅蓝 - 背景渐变 */
  --color-primary-100: #dbeafe;  /* 浅蓝 - 徽章背景 */
  --color-primary-200: #bfdbfe;  /* 中浅蓝 - 悬停状态 */
  --color-primary-300: #93c5fd;  /* 中蓝 - 辅助色 */
  --color-primary-400: #60a5fa;  /* 中深蓝 - 强调色 */
  --color-primary-500: #3b82f6;  /* 标准蓝 - 主色 */
  --color-primary-600: #2563eb;  /* 深蓝 - 链接色 */
  --color-primary-700: #1d4ed8;  /* 深蓝 - 悬停链接 */
  --color-primary-800: #1e40af;  /* 最深蓝 - 按钮悬停 */
  --color-primary-900: #1e3a8a;  /* 最深蓝 - 强调 */
}
```

### 中性色
```css
:root {
  /* 灰色系 */
  --color-gray-50: #f9fafb;    /* 最浅灰 - 区块背景 */
  --color-gray-100: #f3f4f6;   /* 浅灰 - 输入框背景 */
  --color-gray-200: #e5e7eb;   /* 中浅灰 - 边框 */
  --color-gray-300: #d1d5db;   /* 中灰 - 次要文字 */
  --color-gray-400: #9ca3af;   /* 中深灰 - 占位符 */
  --color-gray-500: #6b7280;   /* 深灰 - 描述文字 */
  --color-gray-600: #4b5563;   /* 深灰 - 辅助文字 */
  --color-gray-700: #374151;   /* 最深灰 - 深色边框 */
  --color-gray-800: #1f2937;   /* 最深灰 - 深色背景 */
  --color-gray-900: #111827;   /* 最深灰 - 主要文字 */
}
```

### 语义色
```css
:root {
  /* 成功色 */
  --color-success: #059669;
  --color-success-light: #d1fae5;
  
  /* 警告色 */
  --color-warning: #ca8a04;
  --color-warning-light: #fed7aa;
  
  /* 错误色 */
  --color-error: #dc2626;
  --color-error-light: #fee2e2;
  
  /* 信息色 */
  --color-info: #0891b2;
  --color-info-light: #cffafe;
}
```

### 颜色使用规则

#### 背景色
- **主背景**: `#ffffff` (白色)
- **区块背景**: `#f9fafb` (浅灰色)
- **渐变背景**: `linear-gradient(to bottom right, #eff6ff, #e0e7ff)`
- **深色背景**: `#111827` (页脚)

#### 文字色
- **主要文字**: `#111827` (深灰色)
- **次要文字**: `#6b7280` (中灰色)
- **辅助文字**: `#9ca3af` (浅灰色)
- **链接文字**: `#2563eb` (蓝色)
- **悬停文字**: `#ffffff` (白色)

#### 边框色
- **标准边框**: `#e5e7eb` (浅灰色)
- **深色边框**: `#374151` (深灰色)
- **焦点边框**: `#3b82f6` (蓝色)

## 🔤 字体系统

### 字体族
```css
:root {
  --font-family-sans: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-family-mono: ui-monospace, SF Mono, Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace;
}
```

### 字体大小
```css
:root {
  --font-size-xs: 0.75rem;     /* 12px */
  --font-size-sm: 0.875rem;    /* 14px */
  --font-size-base: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;    /* 18px */
  --font-size-xl: 1.25rem;     /* 20px */
  --font-size-2xl: 1.5rem;     /* 24px */
  --font-size-3xl: 1.875rem;   /* 30px */
  --font-size-4xl: 2.25rem;    /* 36px */
  --font-size-5xl: 3rem;       /* 48px */
  --font-size-6xl: 3.75rem;    /* 60px */
}
```

### 字重
```css
:root {
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### 行高
```css
:root {
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

### 字体层级应用

#### 标题层级
- **H1 (主标题)**: 3.75rem, 700, tight
- **H2 (区块标题)**: 2.25rem, 600, normal
- **H3 (卡片标题)**: 1.25rem, 600, normal
- **H4 (小标题)**: 1.125rem, 600, normal

#### 正文层级
- **大正文**: 1.125rem, 400, normal
- **标准正文**: 1rem, 400, normal
- **小正文**: 0.875rem, 400, normal
- **微正文**: 0.75rem, 400, normal

#### 特殊文字
- **按钮文字**: 1rem, 500, normal
- **标签文字**: 0.875rem, 500, normal
- **代码文字**: 0.875rem, 400, normal (monospace)

## 📐 间距系统

### 基础间距
```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### 间距使用规则

#### 区块间距
- **标准区块**: 4rem (64px)
- **小区块**: 3rem (48px)
- **大区块**: 5rem (80px)

#### 组件间距
- **卡片间距**: 1.5rem (24px) - 2rem (32px)
- **列表项间距**: 0.5rem (8px) - 1rem (16px)
- **标题间距**: 1rem (16px) - 2rem (32px)

#### 内边距
- **卡片内边距**: 1.5rem (24px)
- **按钮内边距**: 0.5rem 1rem (8px 16px)
- **输入框内边距**: 0.5rem 1rem (8px 16px)
- **标签内边距**: 0.25rem 0.75rem (4px 12px)

## 🎭 圆角系统

### 圆角大小
```css
:root {
  --radius-none: 0;
  --radius-sm: 0.125rem;    /* 2px */
  --radius-base: 0.25rem;   /* 4px */
  --radius-md: 0.375rem;    /* 6px */
  --radius-lg: 0.5rem;      /* 8px */
  --radius-xl: 0.75rem;     /* 12px */
  --radius-2xl: 1rem;       /* 16px */
  --radius-full: 9999px;    /* 完全圆形 */
}
```

### 圆角应用规则

#### 按钮圆角
- **标准按钮**: 0.375rem (6px)
- **小按钮**: 0.25rem (4px)
- **大按钮**: 0.5rem (8px)

#### 卡片圆角
- **标准卡片**: 0.5rem (8px)
- **小卡片**: 0.375rem (6px)
- **大卡片**: 0.75rem (12px)

#### 输入框圆角
- **标准输入**: 0.375rem (6px)
- **搜索框**: 0.5rem (8px)
- **标签输入**: 0.25rem (4px)

#### 特殊圆角
- **标签徽章**: 9999px (完全圆形)
- **头像**: 9999px (完全圆形)
- **社交图标**: 50% (圆形)

## 🌊 阴影系统

### 阴影层级
```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
```

### 阴影使用规则

#### 默认状态
- **卡片**: `--shadow-sm` (浅阴影)
- **按钮**: 无阴影
- **输入框**: 无阴影

#### 悬停状态
- **卡片**: `--shadow-md` (中等阴影)
- **按钮**: `--shadow-sm` (浅阴影)
- **输入框**: 无阴影

#### 焦点状态
- **输入框**: 蓝色轮廓 (无阴影)
- **按钮**: `--shadow-sm` (浅阴影)

#### 特殊状态
- **模态框**: `--shadow-lg` (深阴影)
- **下拉菜单**: `--shadow-lg` (深阴影)
- **弹出框**: `--shadow-xl` (最深阴影)

## 🎬 动画系统

### 过渡时长
```css
:root {
  --duration-fast: 0.1s;
  --duration-normal: 0.2s;
  --duration-slow: 0.3s;
  --duration-slower: 0.5s;
}
```

### 缓动函数
```css
:root {
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 动画类型

#### 过渡动画
- **颜色过渡**: `color 0.2s ease`
- **背景过渡**: `background-color 0.2s ease`
- **阴影过渡**: `box-shadow 0.2s ease`
- **变换过渡**: `transform 0.2s ease`

#### 关键帧动画
- **淡入**: `fadeIn 0.3s ease-in-out`
- **滑入**: `slideIn 0.3s ease-out`
- **缩放**: `scale 0.2s ease-in-out`
- **旋转**: `rotate 0.2s ease-in-out`

### 动画应用规则

#### 悬停效果
- **卡片**: `transform: translateY(-2px)` + `box-shadow`
- **按钮**: `transform: scale(1.05)` + `box-shadow`
- **链接**: `color` 变化 + `transform: translateX(4px)`

#### 加载动画
- **骨架屏**: `shimmer 1.5s infinite`
- **加载器**: `spin 1s linear infinite`
- **脉冲**: `pulse 2s infinite`

#### 进入动画
- **页面**: `fadeIn 0.3s ease-in-out`
- **卡片**: `fadeIn 0.3s ease-in-out` + `stagger`
- **模态框**: `fadeIn 0.2s ease-in-out` + `scale(0.95)`

## 🎯 组件设计规范

### 按钮系统
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;
}

.btn-primary {
  background-color: var(--color-primary-500);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-primary-600);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-primary-600);
  border-color: var(--color-primary-600);
}

.btn-secondary:hover {
  background-color: var(--color-primary-600);
  color: white;
}
```

### 卡片系统
```css
.card {
  background-color: white;
  border: 1px solid var(--color-gray-200);
  border-radius: 0.5rem;
  box-shadow: var(--shadow-sm);
  padding: 1.5rem;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
```

### 输入框系统
```css
.input {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-gray-200);
  border-radius: 0.375rem;
  background-color: white;
  color: var(--color-gray-900);
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

## 📱 响应式设计规范

### 断点系统
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### 响应式规则
- **移动优先**: 基础样式针对移动端
- **渐进增强**: 大屏幕添加更多功能
- **断点合理**: 基于常见设备尺寸
- **布局适应**: 内容重排而非缩放

## 🎨 品牌一致性

### 视觉识别
- **主色**: 蓝色系 (#3b82f6)
- **辅助色**: 灰色系 (#f9fafb - #111827)
- **强调色**: 蓝色变体
- **背景色**: 白色 + 浅灰渐变

### 语音语调
- **专业**: 使用标准术语，避免口语化
- **清晰**: 简洁明了的表达
- **友好**: 积极正面的语调
- **可信**: 基于事实的描述

### 交互模式
- **一致性**: 相同功能使用相同的交互方式
- **可预测**: 用户能够预期交互结果
- **反馈**: 及时的视觉和状态反馈
- **容错**: 错误处理和恢复机制
