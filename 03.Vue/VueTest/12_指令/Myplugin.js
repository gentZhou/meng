const MyPlugin = {};

MyPlugin.install = function (Vue) {
    Vue.globalMethod = function () {
        console.log('globalMethod')
    }
    Vue.fliter = function () {

    }
    Vue.directive("upper-case", function (el, binding) {
        el.ContentText = binding.value.toUppercase();
    })


}