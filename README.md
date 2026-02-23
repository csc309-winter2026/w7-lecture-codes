# Running TypeScript Code

## Prerequisites

### Install ts-node

Install globally:

```bash
npm install -g ts-node typescript
```

Or install locally in your project:

```bash
npm install --save-dev ts-node typescript
```

### Configure tsconfig.json

Create or update `tsconfig.json` in your project root:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Running Code

### Using ts-node

Run globally installed ts-node:

```bash
ts-node src/file.ts
```

Or run locally installed ts-node:

```bash
npx ts-node src/file.ts
```

### Using VS Code Extension

1. Install the [vs-code-runner](https://marketplace.visualstudio.com/items?itemName=HarryHopkinson.vs-code-runner) extension
2. Press the keyboard shortcut:
   - **macOS/Linux**: `Ctrl + Alt + N`
   - **Windows**: `Ctrl + Option + N`
