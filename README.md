# nextjs-utils-hooks

> A collection of useful React hooks and utilities built specifically for **Next.js App Router**.

[![npm version](https://img.shields.io/npm/v/nextjs-utils-hooks.svg)](https://www.npmjs.com/package/nextjs-utils-hooks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dw/nextjs-utils-hooks.svg?color=purple)](https://www.npmjs.com/package/nextjs-utils-hooks)

## 📦 Installation

```bash
npm install nextjs-utils-hooks
```

or

```bash
yarn add nextjs-utils-hooks
```

or

```bash
pnpm add nextjs-utils-hooks
```

## ✨ Features

- 🚀 Built specifically for **Next.js 15+ App Router**
- 🎯 TypeScript support out of the box
- 🪝 Collection of commonly used hooks
- 📦 Tree-shakeable
- 🔧 Zero configuration required
- ⚡ Lightweight and performant

## 🎯 Hooks

### `useIsClient`

Detect if code is running on the client side. Useful for preventing hydration mismatches.

```tsx
import { useIsClient } from "nextjs-utils-hooks";

function MyComponent() {
  const isClient = useIsClient();

  return <div>{isClient ? "Running on client" : "Running on server"}</div>;
}
```

### `useDebounce`

Debounce any value with a customizable delay. Perfect for search inputs and API calls.

```tsx
import { useDebounce } from "nextjs-utils-hooks";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    // API call with debounced value
    if (debouncedSearch) {
      fetchResults(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

**Parameters:**

- `value: T` - The value to debounce
- `delay?: number` - Delay in milliseconds (default: 300)

### `useQueryParam`

Manage URL query parameters with ease. Get and set query params with automatic URL updates.

```tsx
import { useQueryParam } from "nextjs-utils-hooks";

function FilterComponent() {
  const [category, setCategory] = useQueryParam("category");

  return (
    <div>
      <p>Current category: {category || "none"}</p>
      <button onClick={() => setCategory("electronics")}>
        Set Electronics
      </button>
    </div>
  );
}
```

**Returns:** `[value: string | null, setValue: (val: string) => void]`

### `useWindowSize`

Track window dimensions with automatic updates on resize.

```tsx
import { useWindowSize } from "nextjs-utils-hooks";

function ResponsiveComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>
        Window size: {width} x {height}
      </p>
      {width < 768 ? <MobileView /> : <DesktopView />}
    </div>
  );
}
```

**Returns:** `{ width: number, height: number }`

### `usePageLoad`

Track page loading state during navigation. Combines loading state with React transitions.

```tsx
import { usePageLoad } from "nextjs-utils-hooks";

function LoadingIndicator() {
  const isLoading = usePageLoad();

  return isLoading ? <Spinner /> : null;
}
```

**Returns:** `boolean` - `true` when page is loading

### `useRouteChange`

Listen to route changes in Next.js App Router with customizable callbacks.

```tsx
import { useRouteChange } from "nextjs-utils-hooks";

function MyLayout({ children }) {
  useRouteChange({
    onStart: (url) => {
      console.log("Navigation started to:", url);
      // Show loading indicator
    },
    onComplete: (url) => {
      console.log("Navigation completed to:", url);
      // Hide loading indicator, track analytics, etc.
    },
  });

  return <div>{children}</div>;
}
```

**Parameters:**

- `onStart?: (url: string) => void` - Called when route change begins
- `onComplete?: (url: string) => void` - Called when route change completes (with 100ms delay)

### `useServerAction`

Manage server action state with loading and error handling. Perfect for forms and server mutations.

```tsx
import { useServerAction } from "nextjs-utils-hooks";
import { submitForm } from "./actions";

function FormComponent() {
  const { runAction, loading, error } = useServerAction(submitForm);

  const handleSubmit = async (formData: FormData) => {
    await runAction(formData);
  };

  return (
    <form action={handleSubmit}>
      <input name="email" type="email" />
      <button disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
      {error && <p className="error">{error.message}</p>}
    </form>
  );
}
```

**Returns:**

- `runAction: (...args: Parameters<T>) => Promise<void>` - Execute the server action
- `loading: boolean` - Loading state
- `error: Error | null` - Error object if action fails

## 🔧 Requirements

- **Next.js**: 15.0.0 or higher
- **React**: 19.0.0 or higher

## 📝 TypeScript

This package is written in TypeScript and includes type definitions out of the box. No need for `@types/*` packages.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [Ahmed Hashem](https://github.com/yourusername)

## 🐛 Issues

Found a bug? Please [open an issue](https://github.com/yourusername/nextjs-utils-hooks/issues) on GitHub.

## 📚 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for details on releases.

---

Made with ❤️ for the Next.js community
