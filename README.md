# Sveltekit - Issue - Form Actions - Return Non-POJOs

This is a MVP trying to replicate issues associated with issue [#8523](https://github.com/sveltejs/kit/issues/8523).

## Steps

| #   | Description                                                    | Working | Note                                              |
| --- | -------------------------------------------------------------- | ------- | ------------------------------------------------- |
| 1   | Initialize project with `npm create svelte@latest new-project` | ✔️      |                                                   |
| 2   | Install dependencies with `npm i`                              | ✔️      |                                                   |
| 3   | Add +page.server.js form action                                | ❌      | Vite showed `new dependencies optimized: devalue` |
