import {useState} from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import './fileupload.css'
import {Link} from 'react-router-dom';


export const FileUpload = ({onSuccess}) => {
    
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

        axios.post('//localhost:8000/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                onSuccess(response.data)
            })
            .catch((e) => {
                toast.error('Upload Error')
            })
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

            <Link to="/result"><button>Submit</button></Link>
        </form>
    )
};
export default FileUpload