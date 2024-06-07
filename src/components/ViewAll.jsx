import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
  return (
    <div>
        <Navbar/>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Publish yaer</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Twilight</th>
      <td>Mark</td>
      <td>2001</td>
      <td>200</td>
    </tr>
    <tr>
      <th scope="row">Good days</th>
      <td>Jacob</td>
      <td>2023</td>
      <td>150</td>
    </tr>
    <tr>
      <th scope="row">My Autobiography</th>
      <td>Sobha</td>
      <td>2016</td>
      <td>150</td>
      </tr>
      <tr>
      <th scope="row">Twilight</th>
      <td>Mark</td>
      <td>2001</td>
      <td>200</td>
    </tr>
    <tr>
      <th scope="row">Good days</th>
      <td>Jacob</td>
      <td>2023</td>
      <td>150</td>
    </tr>
    <tr>
      <th scope="row">My Autobiography</th>
      <td>Sobha</td>
      <td>2016</td>
      <td>150</td>
      </tr>
      <tr>
      <th scope="row">Good days</th>
      <td>Jacob</td>
      <td>2023</td>
      <td>150</td>
    </tr>
    <tr>
      <th scope="row">Good days</th>
      <td>Jacob</td>
      <td>2023</td>
      <td>150</td>
    </tr>
  </tbody>
</table>

                </div>
            </div>
        </div>

    </div>
  )
}

export default ViewAll