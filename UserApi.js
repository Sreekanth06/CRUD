import axios from 'axios' 
 


const axiosInstance = axios.create({
    baseURL: "http://localhost:5000"
})



const UserApi = {
    getAll: ()=> {
        return axiosInstance.request({
            url: "/users",
            method: "GET"
        })
    },
    getById: (id)=> {
        return axiosInstance.request({
            url:`/users/${id}`,
            method: "GET"
        });
    },
    create: (user) => {
        return axiosInstance.request({
            url:'/users',
            method: "POST",
            data: user
        })
    },
    update: (user,id) => {
        return axiosInstance.request({
            url: `/user/${id}`,
            method: "PUT",
            data: user
        })
    },
    delete: (id) => {
        return axiosInstance.request({
            url: `/users/${id}`,
            method: "delete"
        })
    }
};


export default UserApi;