import App from '../Components/App'
import Example from '../Components/Example/Example'
import Episodes from '../Components/Example/Episodes/Episodes'
import ExampleLayout from './../Components/Layouts/ExampleLayout'
export default [
  {
    path: '/',
    exact: true,
    component: App
  },
  {
    path: '/example',
    component: ExampleLayout,
    routes: [
      {
        path: '/example',
        component: Example,
        exact: true
      },
      {
        path: '/example/episodes',
        component: Episodes,
        exact: true
      }
    ]
  }
]
