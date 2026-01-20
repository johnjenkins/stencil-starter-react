# Stencil + React Starter

A minimal reproduction monorepo for testing Stencil components with React output targets.

## Versions

- `@stencil/core`: latest
- `@stencil/react-output-target`: latest
- `react`: ^19.0.0

## Setup
  
```bash
# Install dependencies
pnpm install

# Start development mode (builds stencil first, then watches all)
pnpm start
```

The development server will start at http://localhost:4200/
In watch mode all changes to the Stencil components will automatically rebuild the React wrappers and reload the React app.