# NESTJS MESSAGES PROJECT

## CLI commands

- `nest new my-nest-project` creates a new project
- `nest generate module messages` - creates a new module with name messages
- `nest generate controller messages/messages --flat` - created a new controller called messages within messages folder
  - `--flat` - avoids creating extra folders for controllers

## Decorators to access HTTP request data

- `@Headers()` - used to access the request header
- `@Body()` - used to access the request body
- `@Param('id')` - used to access url parameters
- `@Query()` - used to access query string

## Data Validation

- `pipes` - validates data before it reaches a route handler
  - `ValidationPipe` - built nestJs pipe to make data validation
  - `app.useGlobalPipes(new ValidationPipe())` - add validation pipes at global level to the app instance
