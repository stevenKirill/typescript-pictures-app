import React, { useState, useEffect } from 'react';
import { Button, LinearProgress, Input, IconButton, Typography, Divider, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';
import { PhotoCamera } from '@mui/icons-material';
import styles from './upload.module.css';
// import image from '../uploads/lljhj.jpg';

interface IFile {
    fileName: string;
    filePath: string;
};

export const FileUploadPage:React.FC = () => {
    const [file,setFile] = useState<Blob | string>('');
    const [fileName,setFileName] = useState<string>('');
    const [progress,setProgress] = useState<any>(null);
    const [err,setErr] = useState<string>('');
    const [uploadedFile,setUploadedFile] = useState<IFile>({
        fileName: '',
        filePath: '',
    });
    const [loaded,setLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (err !== '') {
            setTimeout(() => {
                setErr('');
            },3000);
        };
    },[err]);

    useEffect(() => {
        if (loaded) {
            setTimeout(() => {
                setProgress(null);
                setLoaded(false);
            },2000);
        }
    },[loaded]);

    const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLInputElement;
        // @ts-ignore
        const file = target.files[0];
        setFile(file);
        setFileName(file.name);
    };

    const send = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const formData = new FormData();
        formData.append('file',file);
        try {
            const response = await axios.post('http://localhost:5000/upload-file',formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': '*',
                },
                onUploadProgress: progressEvent => {
                    setProgress(
                        Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    );
                  }
            });
            const { data } = response;
            const { fileName, filePath } = data;
            setUploadedFile({
                fileName,
                filePath,
            });
            setLoaded(true);
            setFileName('');
            setFile('');
        } catch (error) {
            console.error(error);
            setErr("Server error");
            setProgress(null);
            setLoaded(false);
        };
    };

    const renderImage = () => {
        const { fileName } = uploadedFile;
        return (
            <div style={{ marginTop: '20px' }}>
                <Divider/>
                <Card>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={`../uploads/${fileName}`}
                        alt="Uploaded photo"
                    />
                    <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Uploaded photo
                    </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    };

    return (
        <div className={styles.uploader}>
            <Typography align="center" fontSize={24}>
                Upload file
            </Typography>
            {progress &&
            <div style={{ marginTop: '20px' }}>
                <LinearProgress value={parseInt(progress)}/>
            </div>
            }
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
            <Divider/>
            <div className={styles.footer}>
                <Button 
                    variant="contained"
                    onClick={send}
                >
                    Submit
                </Button>
            </div>
            {err !== '' &&
                <Typography align="center" fontSize={24} color="tomato">
                {err}
                </Typography>
            }
            {uploadedFile.filePath !== '' ? renderImage() : null}
        </div>
    );
};
