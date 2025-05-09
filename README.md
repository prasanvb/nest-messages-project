# NESTJS MESSAGES PROJECT

## CLI commands

- `nest new my-nest-project` creates a new project
- `nest generate module messages` - creates a new module with name messages
- `nest generate controller messages/messages --flat` - created a new controller called messages within messages folder
  - `--flat` - avoids creating extra folders for controllers

## Decorators to access HTTP request

- `@Headers()` - used to access the req header
- `@Param()` - used to access url parameters
- `@Query()` - used to access query string
- `@Body()` - used to access the req body
