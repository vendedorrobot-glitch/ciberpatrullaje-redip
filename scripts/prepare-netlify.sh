#!/bin/sh
set -eu

rm -rf dist
mkdir -p dist/archivos/repositorio dist/archivos/responsables

cp -R proyecto/. dist/
rm -f dist/_script_check.js

for workbook in ./*.xlsx; do
    [ -f "$workbook" ] || continue
    cp "$workbook" dist/archivos/repositorio/
done

cp -R responsables/. dist/archivos/responsables/
