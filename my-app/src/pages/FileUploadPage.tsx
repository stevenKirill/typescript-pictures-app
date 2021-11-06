import React, { useState } from 'react';
import { Button, LinearProgress, Input, IconButton, Typography, Divider } from '@mui/material';
import axios from 'axios';
import { PhotoCamera } from '@mui/icons-material';
import styles from './upload.module.css';

export const FileUploadPage:React.FC = () => {
    const [file,setFile] = useState<Blob | string>('');
    const [fileName,setFileName] = useState<string>('');
    const [progress,setProgress] = useState<number>(0);

    const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        // const file = target.files[0];
        // console.log(file)
        // setFile(file);
        // setFileName(file.name);
    };

    const send = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const formData = new FormData();
        formData.append('file',file);
        try {
            await axios.post('http://localhost:5000/upload',formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
        } catch (error) {
            
        }
    };

    return (
        <div className={styles.uploader}>
            <Typography align="center" fontSize={24}>
                Upload file
            </Typography>
            <label htmlFor="icon-button-file">
                <Input 
                    id="icon-button-file"
                    type="file"
                    className={styles.hidden} 
                    onChange={upload}
                />
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
            {fileName !== '' && <span>{fileName}</span>}
            <div className={styles.progress}>
            </div>
            <Divider/>
            <div className={styles.footer}>
                <Button 
                    variant="contained"
                    onClick={send}
                >Submit</Button>
            </div>
        </div>
    );
};
