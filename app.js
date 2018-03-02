(function () {
    console.log('Hello App!');

    var Loading = {
        template: '<div>Loading...</div>'
    };

    var dynamic = {
        functional: true,
        template: '#dynamic',
        props: ['template'],
        render: function (h, context) {
            const myTemplate = context.props.template;
            const component = myTemplate ? { template: myTemplate } : Loading;
            return h(component)
        }
    };

    new Vue({
        el: "#app",
        data: {
            html: '<div id="mount-point"><span>First template</span></div>',
            index: 0
        },
        components: {
            dynamic: dynamic
        }
    });
})();