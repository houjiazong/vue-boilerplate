import Firebase from 'firebase/app'
import Database from 'firebase/database'

const config = {
  databaseURL: 'https://hacker-news.firebaseio.com'
}

Firebase.initializeApp(config)

const version = '/v0'
const api = Firebase.database().ref(version)

const fetch = (child) => {
  console.log(`fetching ${child}...`)
  return new Promise((resolve, reject) => {
    api.child(child).once('value', snapshot => {
      const val = snapshot.val()
      // mark the timestamp when this item is cached
      if (val) val.__lastUpdated = Date.now()
      console.log(`fetched ${child}.`)
      resolve(val)
    }, reject)
  })
}

export const fetchIdsByType = (type) => {
  return fetch(`${type}stories`)
}

export const fetchItem = (id) => {
  return fetch(`item/${id}`)
}

export const fetchItems = (ids) => {
  return Promise.all(ids.map(id => fetchItem(id)))
}

export const fetchUser = (id) => {
  return fetch(`user/${id}`)
}

export const watchList = (type, cb) => {
  let first = true
  const ref = api.child(`${type}stories`)
  const handler = snapshot => {
    if (first) {
      first = false
    } else {
      cb(snapshot.val())
    }
  }
  ref.on('value', handler)
  return () => {
    ref.off('value', handler)
  }
}
