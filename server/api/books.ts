import type { User } from '~/types'

const customers: User[] = [{
  id: 1,
  name: '基礎から始める',
  email: 'alex.smith@example.com',
  avatar: {
    src: ''
  },
  status: 'subscribed',
  location: 'New York, USA'
}, {
  id: 2,
  name: 'Jordan Brown',
  email: 'jordan.brown@example.com',
  avatar: {
    src: ''
  },
  status: 'unsubscribed',
  location: 'London, UK'
}]

export default eventHandler(async () => {
  return customers
})
