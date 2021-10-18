const CompressionPlugin = require("compression-webpack-plugin");
const { whenProd } = require("@craco/craco");

module.exports = {
    typescript: {
        enableTypeChecking: false
    },
    eslint: {
        enable: false
    },
    ...whenProd(() => ({
        webpack: {
            plugins: {
                add: [new CompressionPlugin({
                    algorithm: "gzip"
                })]
            }
        }
    }), {})
};
