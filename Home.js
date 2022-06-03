import React,  { useEffect, useState} from 'react' 
import UserApi from '../Api/UserApi'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom';



export default function Home(props) {

    const [users,setUsers] = useState([]);
    useEffect(() => {
        UserApi.getAll().then(res => {
            console.log('data =', res.data);
        },[]);
    })


    // const delHandler= (id) => {
    //     if(window.confirm(`are you sure to delete user id ${id}?`)) {

    //         UserApi.delete(id).then(res => {
    //             toast.success("user delete successfully ");
    //             window.location.reload();

    //         // })catch (err => 
    //         // toast.success("success"))
    //     };
    //      else {
    //         toast.warning("delete Terminated");
    //     }
    // }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                   <h3 className="display-3 text-secondary">
                       Home
                   </h3>
                </div>
            </div>



            
            <div className="row">
              {
                  users.map((item,key) => {
                      return(
                          <div className="col-md-4 mt-2 mb-2" key={key}> 
                              <div className="card">
                                    <div className=" card-header">
                                        <h4>{item.name}</h4>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            <strong>Email</strong>
                                            <span className="float-end">{item.email}</span>
                                        </p>

                                        <p>
                                            <strong>Mobile</strong>
                                            <span className="float-end">{item.mobile}</span>
                                        </p> 
                                    </div>
                                    <div className="card-footer">
                                        <NavLink to={`/update/${item.id}`} className="btn btn-info">update</NavLink>
                                        <button className="btn btn-danger float-end"> Delete </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                 }
            </div>
        </div>
    )
}