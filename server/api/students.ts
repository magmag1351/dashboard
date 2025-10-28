import type { User } from '~/types'

const customers: User[] = [{
  id: 1,
  name: 'Yoshimi Hatsukade',
  email: 'yoshimi.hatsukade@example.com',
  avatar: {
    src: ''
  },
  status: 'online',
  grade: 'Owner'
}, {
  id: 2,
  name: 'Kenta Uesugi',
  email: 'kenta.uesugi@example.com',
  avatar: {
    src: ''
  },
  status: 'offline',
  grade: 'M1'
}]

export default eventHandler(async () => {
  return customers
})
