$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$drive = "Z:"
if (-not (Test-Path "$drive\")) {
  subst $drive $root
}
Set-Location $drive
if (-not (Test-Path "node_modules")) {
  npx --yes pnpm@9.15.4 install
}
npx --yes pnpm@9.15.4 dev
