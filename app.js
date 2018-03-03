(function () {
  var entity = {
    meta: {
      id: 'example',
      label: 'Example table',
      attributes: [
        {
          id: 'name',
          label: 'Name'
        },
        {
          id: 'age',
          label: 'Age'
        }
      ]
    },
    items: [
      {
        name: 'Connor',
        age: 37
      },
      {
        name: 'Mark',
        age: 27
      },
      {
        name: 'Tommy',
        age: 30
      }
    ]
  }

  Vue.component('DynamicTemplate', {
    functional: true,
    template: '#dynamic-template',
    props: ['template', 'entity'],
    render: function (h, context) {
      return h({
        template: context.props.template,
        data: function () {
          return {
            entity: JSON.parse(context.props.entity)
          }
        }
      })
    }
  })

  new Vue({
    el: '#app',
    data: {
      template: '<div id="template-container">{{entity}}</div>',
      entity: JSON.stringify(entity)
    }
  })
})()