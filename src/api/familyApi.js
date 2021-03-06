import apiUrl from '../apiConfig'
import axios from 'axios'

export const createFamily = (family, members, user) => {
  console.log(family, members, user)
  return axios({
    method: 'POST',
    url: apiUrl + '/families/',
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: {
      family: {
        name: family,
        members: members
      }
    }
  })
}

export const indexFamilies = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/families/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const showFamily = (user, familyPk) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/families/${familyPk}`,
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const deleteFamily = (user, familyPk) => {
  return axios({
    url: apiUrl + `/families/${familyPk}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const updateFamily = (data, user, familyPk) => {
  return axios({
    url: apiUrl + `/families/${familyPk}/`,
    method: 'PATCH',
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: {
      family: {
        name: data.name,
        members: data.members
      }
    }
  })
}
