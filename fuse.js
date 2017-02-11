const fsbx = require('fuse-box');

const fuseBox = fsbx.FuseBox.init({
    homeDir: 'src/',
    sourceMap: {
        bundleReference: 'app.js.map',
        outFile: './dist/app.js.map'
    },
    outFile: './dist/app.js',
    plugins: [
        fsbx.SVGPlugin(),
        fsbx.CSSPlugin(),
        fsbx.TypeScriptHelpers(),
        fsbx.JSONPlugin(),
        fsbx.HTMLPlugin({useDefault: false})
    ]
});

// fuseBox.bundle({
//     "dist/vendor.js": "+react +react-dom",
//     "dist/lazy.js": "> lazy.ts"
// });

fuseBox.devServer('>index.tsx', {
    port: 4446,
    httpServer: false
});