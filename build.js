require('esbuild').buildSync({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    loader: { ".ts": "ts" },
    minify: true,
    sourcemap: true,
    target: ['es2016'],
    outfile: "./dist/index.js"
});

