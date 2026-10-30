import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661775190861-2dc4e2c223fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661583962498-252ca90495cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      tag: 'underfind'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
