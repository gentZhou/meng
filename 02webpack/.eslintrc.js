module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        // "ecmaFeatures": {
        //     "jsx": true
        // }
    },
    env: {
        browser: true,
    },
    extends: 'airbnb-base',//启动eslint默认配置
    rules: {
        // "semi": "error"
        "no-var": "error",
    },
}