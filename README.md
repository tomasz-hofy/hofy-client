# Hofy - Client

### Project structure and naming conventions

Project has been divided into 3 layers `services`, `store`, `view`.
Generally lower layer should not access components from upper layers.

```
src
  ├── app
  │   ├── store // data hooks for particular views / groups of components
  │   ├── services // data access layer, api calls
  │   ├── views  // business pages
  │   ├── index.tsx
  │   └── index.ejs
  ├── components // reusable visual components, not related to any view
  └── helpers // helpers reusable  in whole app
```

## Git conventions

### Branch names

Please use the following branch names

- Improvement branches `improvement/FINAVIA-XXX-branch-name`
- Feature branches `feature/FINAVIA-XXX-branch-name`
- Bugfix branches `bugfix/FINAVIA-XXX-branch-name`
- Release branches `release/FINAVIA-XXX-branch-name`
- Hotfix branches `hotfix/FINAVIA-XXX-branch-name`

