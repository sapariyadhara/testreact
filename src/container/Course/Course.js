// import React from 'react';
import CourseForm from './CourseForm';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { addData, getData } from '../../redux/action/course.action';


function Course(props) {
    const dispatch = useDispatch()
    const courseData = useSelector(state => state.course)
    console.log(courseData);

    React.useEffect(() => {
        dispatch(getData())
    })

    const handleSubmit = (data) => {
        console.log(data , 'hrfg');
        dispatch(addData(data))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Course name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'action', headerName: 'Action', width: 130 
        
    },
       
    ];

    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];

    return (
        <>
            <h1>Course Data</h1>
            <CourseForm  onhandleSubmit={handleSubmit}/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={courseData.course}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>

        </>
    );
}

export default Course;