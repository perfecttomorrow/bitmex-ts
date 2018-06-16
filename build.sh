cd `dirname $0`

tsc ./src/index.ts -module commonjs -target es6 -d --removeComments -outDir dist