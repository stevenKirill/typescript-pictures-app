import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BurgersPage from '../pages/BurgersPage';
import { FileUploadPage } from '../pages/FileUploadPage';
import { SearchPhotosPage } from '../pages/SearchPhotosPage';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/upload" element={<FileUploadPage/>}/>
            <Route path="/search" element={<SearchPhotosPage/>}/>
            <Route path="/burgers" element={<BurgersPage/>}/>
        </Routes>
    )
}
