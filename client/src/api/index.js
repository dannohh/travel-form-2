export default () => ({
  async addTravel(newTravel) {
    const res = await fetch('http://localhost:5000/travels/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTravel)
    })
    return await res.json()
  },
  async deleteAllTravels() {
    const res = await fetch('http://localhost:5000/travels/delete', {
      method: 'DELETE'
    })
    return await res.json()
  },
  async getTravels(emailObj) {
    const res = await fetch('http://localhost:5000/travels/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailObj)
    })
    return await res.json()
  }
})
