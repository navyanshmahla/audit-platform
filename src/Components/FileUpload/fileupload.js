import {useState} from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import './fileupload.css'
import {Link, useNavigate} from 'react-router-dom';


export const FileUpload = ({onSuccess}) => {
    const token = localStorage.getItem('access_token')
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);

    const onInputChange = (e) => {
        setFiles(e.target.files)
    };


    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }



        axios({
            url: 'https://2790923bff8c99.lhr.life/uploadfile',
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`,
                //"Access-Control-Allow-Origin": "true",
                //Origin: "localhost:3000",
                //"Access-Control-Request-Method": "POSE",
            },
            data: data
        }).then((response)=>{
            toast.success('Upload Success');
            onSuccess(response.data)
            console.log(response.data)
            localStorage.setItem("response_data", response.data)
        }).catch((err)=>{
            toast.error('Upload Error')
        })
        navigate("/result")
        
    };
        

    return (
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div className="form-group files">
                <label>Upload Your Smart contract </label>
                <input type="file" accept='.sol'
                       onChange={onInputChange}
                       className="form-control"
                       multiple/>
            </div>

            <button>Submit</button>
        </form>
    )
};
export default FileUpload