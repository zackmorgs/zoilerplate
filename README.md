# zoilerplate
A ~~stupidly~~ incredibly well-named boilerplate for dotnet/react preferring developers.

<img src="https://github.com/zackmorgs/zoilerplate/blob/main/design/screenshot-main.png?raw=true" width="320px"/>

## Goals
- .NET 10 with C#
- MongoDb
- React 
- `esbuild`
- SCSS with PostCSS
- TailwindCSS
- Goal: Complete authentication handling, with roles (admin, user)
    - OAuth with Google login
    - Regular user authentication, complete with email

## Get Started
1. clone this repository.
2. from its root directory run `chmod +x ./scripts/install.sh`
3. then run `./scripts/install.sh` to install the repo's dependencies (that aren't dotnet 11 and node)
    - lataest lte version of `dotnet` 10 and `node` v24.14.1 must be installed.1