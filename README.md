# Delivery-Pricing-Backend

Express app with mongo database, JWT authentication and typescript.

### Development Setup

First run.

```
npm install
```

While installing setup your ".env" file as shown in ".env.example" with necessary values.
After the installing is done and your env setup is done run.

```
npm run dev
```

### Type-safe .env

To type-safe variables from .env and generate .env.example

```
npx gen-env-types .env -o src/types/env.d.ts -e .
```
