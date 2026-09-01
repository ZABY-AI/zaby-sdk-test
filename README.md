# Zaby SDK

A lightweight TypeScript SDK that returns "Hello, World!".

## Features

- Fully written in **TypeScript** with complete `.d.ts` type declarations and source maps.
- Supports both **functional** (`getHelloWorld()`) and **class-based** (`new ZabySDK()`) interfaces.
- Structured response support (`getHelloData()`).
- Zero runtime dependencies.

## Installation

```bash
npm install zaby-sdk
```

## Quick Start (TypeScript)

### 1. Functional Import
```typescript
import { getHelloWorld, getHelloData } from 'zaby-sdk';

// String response
console.log(getHelloWorld()); 
// Output: "Hello, World!"

// Structured JSON-style response
const data = getHelloData();
console.log(data);
// Output: { message: 'Hello, World!', timestamp: '2026-09-01T10:58:00.000Z' }
```

### 2. Class Instance Import
```typescript
import { ZabySDK } from 'zaby-sdk';

const sdk = new ZabySDK();
console.log(sdk.getHelloWorld()); 
// Output: "Hello, World!"
```

## Development & Build

```bash
# Install dependencies
npm install

# Build TypeScript to dist/
npm run build

# Run unit tests
npm test

# Run example
npm run example
```
