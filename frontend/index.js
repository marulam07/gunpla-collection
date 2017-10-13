;(function() {
  $.get("http://localhost:3000", data => {
    console.log(data)

    let gunplaCollection = [
      {
        id: 0,
        model: "DUMMY",
        year: 2000,
        price: 100000
      },
      {
        id: 1,
        model: "Gundam Barbatos",
        year: 2015,
        price: 800000
      },
      {
        id: 2,
        model: "Gundam Unicorn",
        year: 2010,
        price: 1200000
      },
      {
        id: 3,
        model: "Gundam RX",
        year: 2000,
        price: 3200000
      }
    ]

    // console.log(gunplaCollection)

    gunplaCollection.map(item => {
      const id = item.id
      const model = item.model
      const year = item.year
      const price = item.price
      // console.log(id, model, year, price)

      const newRow = `
      <tr>
        <th scope="row">${id}</th>
        <td>${model}</td>
        <td>${year}</td>
        <td>${price}</td>
      </tr>
      `
      // console.log(newRow)

      $("#app-table-body").append(newRow)
    })
  })
})()
