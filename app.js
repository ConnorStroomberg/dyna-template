(function () {
    console.log('Hello App!');

    var Loading = {
        template: '<div>Loading...</div>'
    };

    var dynamic = {
        functional: true,
        template: '#dynamic',
        props: ['template', 'template-data'],
        render: function (h, context) {
            const myTemplate = context.props.template;
            const myData = context.props.templateData;
            console.log(myData.name)
            if(!myTemplate) {
                return h(Loading)
            } else {
                return h({
                    template: myTemplate,
                    data: function () {
                        return myData
                    }
                })
            }
        }
    };

    new Vue({
        el: "#app",
        data: {
            html: '<div id="mount-point"><span>First template</span><div>{{name}}</div><div>{{age}}</div></div>',
            person: {
                name: 'Connor',
                age: 37
            }
        },
        components: {
            dynamic: dynamic
        }
    });
})();