//#region Import
import { memo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ICreateStudent, IStudentFormProps, IUpdateStudent } from '../../interface/modules/student/student.interface'
//#endregion

//#region Validation Schema
const validationSchema = yup.object({
    studentNumber: yup
        .string()
        .matches(/^[0-9]{2}-2023-[0-9]{4}$/, 'Invalid student number!')
        .required("Student number is required!"),
    studentName: yup
        .string()
        .min(10, 'Please provide a value that is at least 4 characters long.')
        .required("Student name is required!"),
    class: yup
        .string()
        .min(3, "Please provide a value that is at least 4 characters long.")
        .required('Class is required!')
})
//#endregion

type FormikType<T> = T extends true ? IUpdateStudent : ICreateStudent;

const StudentForm = memo(({ onSubmit, studentData, formRef }: IStudentFormProps) => {

    //#region Formik
    const isUpdating = studentData === undefined ? false : true
    const studentFormik = useFormik<FormikType<typeof isUpdating>>({
        initialValues: {
            ...(isUpdating ? { _id: studentData?._id } : {}),
            studentName: studentData ? studentData.studentName : '',
            studentNumber: studentData ? studentData.studentNumber : '',
            class: studentData ? studentData.class : '',
            level: studentData ? studentData.level : 'Grade 6',
            admissionDate: studentData ? new Date(studentData.admissionDate) : new Date
        },
        validationSchema: validationSchema,
        onSubmit: onSubmit
    })
    //#endregion

    return (
        <div className='mt-10 mx-auto max-w-6xl'>
            <div className='mx-auto mb-10 max-w-6xl'>
                <form onSubmit={studentFormik.handleSubmit} ref={formRef}>
                    {/* Basic Information */}
                    <p className='text-3xl font-bold text-gray-900 dark:text-white'>
                        Student Information
                    </p>
                    <div className='mt-6 grid gap-4 sm:grid-cols-3 sm:gap-6 text-sm'>
                        <div className='w-full'>
                            <label className='block mb-2 font-medium text-gray-900 dark:text-white'>
                                {`Student Number (00-2023-0000)`}
                            </label>
                            <input
                                name='studentNumber'
                                type='text'
                                onChange={studentFormik.handleChange}
                                placeholder='00-2023-00001'
                                value={studentFormik.values.studentNumber}
                                className={`block w-full py-2 pl-5 pr-5 rtl:pr-11 rtl:pl-5 text-sm placeholder-gray-400/70 bg-gray-50 border rounded-lg focus:outline-none focus:ring-1 focus:ring-opacity-20
                                        ${studentFormik.touched.studentNumber &&
                                        Boolean(studentFormik.errors.studentNumber)
                                        ? 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-300 dark:border-red-400 dark:bg-gray-800 dark:text-red-400 dark:focus:border-red-300'
                                        : 'border-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-500 focus:ring-gray-900 dark:focus:ring-gray-500'
                                    }
                                        `}
                            />
                            {
                                studentFormik.touched.studentNumber && Boolean(studentFormik.errors.studentNumber) ?
                                    (
                                        <div className='mt-1'>
                                            <span className='text-red-500 text-xs'>{studentFormik.errors.studentNumber}</span>
                                        </div>
                                    ) : ""
                            }
                        </div>
                        <div className='sm:col-span-2'>
                            <label className='block mb-2  font-medium text-gray-900 dark:text-white'>
                                {`Student Name (Surname, First Name Middle Name.)`}
                            </label>
                            <input
                                name='studentName'
                                type='text'
                                onChange={studentFormik.handleChange}
                                placeholder='Dela Cruz, Juan S.'
                                value={studentFormik.values.studentName}
                                className={`block w-full py-2 pl-5 pr-5 rtl:pr-11 rtl:pl-5 text-sm placeholder-gray-400/70 bg-gray-50 border rounded-lg focus:outline-none focus:ring-1 focus:ring-opacity-20
                                ${studentFormik.touched.studentName &&
                                        Boolean(studentFormik.errors.studentName)
                                        ? 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-300 dark:border-red-400 dark:bg-gray-800 dark:text-red-400 dark:focus:border-red-300'
                                        : 'border-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-500 focus:ring-gray-900 dark:focus:ring-gray-500'
                                    }
                                `}
                            />
                            {
                                studentFormik.touched.studentName && Boolean(studentFormik.errors.studentName) ?
                                    (
                                        <div className='mt-1'>
                                            <span className='text-red-500 text-xs'>{studentFormik.errors.studentName}</span>
                                        </div>
                                    ) : ""
                            }
                        </div>
                        <div className='w-full'>
                            <label className='block mb-2 font-medium text-gray-900 dark:text-white'>
                                {`Class (Section)`}
                            </label>
                            <input
                                name='class'
                                type='text'
                                onChange={studentFormik.handleChange}
                                placeholder='Indigo'
                                value={studentFormik.values.class}
                                className={`block w-full py-2 pl-5 pr-5 rtl:pr-11 rtl:pl-5 text-sm placeholder-gray-400/70 bg-gray-50 border rounded-lg focus:outline-none focus:ring-1 focus:ring-opacity-20
                                ${studentFormik.touched.class &&
                                        Boolean(studentFormik.errors.class)
                                        ? 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-300 dark:border-red-400 dark:bg-gray-800 dark:text-red-400 dark:focus:border-red-300'
                                        : 'border-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-500 focus:ring-gray-900 dark:focus:ring-gray-500'
                                    }
                                `}
                            />
                            {
                                studentFormik.touched.class && Boolean(studentFormik.errors.class) ?
                                    (
                                        <div className='mt-1'>
                                            <span className='text-red-500 text-xs'>{studentFormik.errors.class}</span>
                                        </div>
                                    ) : ""
                            }
                        </div>
                        <div className='w-full'>
                            <label className='block mb-2 font-medium text-gray-900 dark:text-white'>
                                Level
                            </label>
                            <select
                                name="level"
                                className='custom-select block w-full py-2 pl-5 text-gray-700 placeholder-gray-400/70 bg-gray-50 border rounded-lg focus:outline-none focus:ring-1 focus:ring-opacity-5 border-gray-400 focus:border-gray-900 focus:ring-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:border-gray-500 dark:focus:ring-gray-300'
                                onChange={studentFormik.handleChange}
                                defaultValue={studentFormik.values.level}
                            >
                                <option value='Grade 1'>Grade 1</option>
                                <option value='Grade 2'>Grade 2</option>
                                <option value='Grade 3'>Grade 3</option>
                                <option value='Grade 4'>Grade 4</option>
                                <option value='Grade 5'>Grade 5</option>
                                <option value='Grade 6'>Grade 6</option>
                                <option value='Grade 7'>Grade 7</option>
                                <option value='Grade 8'>Grade 8</option>
                                <option value='Grade 9'>Grade 9</option>
                                <option value='Grade 10'>Grade 10</option>
                                <option value='Grade 11'>Grade 11</option>
                                <option value='Grade 12'>Grade 12</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <label className='block mb-2 font-medium text-gray-900 dark:text-white'>
                                Admission Date
                            </label>

                            <input
                                name='admissionDate'
                                type='date'
                                min={new Date().toISOString().substr(0, 10)}
                                onChange={(event) => {
                                    const selectedDate = event.target.value;
                                    const dateParts = selectedDate.split('-');
                                    const admissionDate = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]) + 1);
                                    studentFormik.setFieldValue('admissionDate', admissionDate);
                                }}
                                value={studentFormik.values.admissionDate.toISOString().substr(0, 10)}
                                className='block w-full py-2 pl-5 pr-5 text-gray-700 placeholder-gray-400/70 bg-gray-50 border rounded-lg focus:outline-none focus:ring-1 focus:ring-opacity-5 border-gray-400 focus:border-gray-900 focus:ring-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:border-gray-500 dark:focus:ring-gray-300'
                            />
                        </div>
                    </div>
                    {/* End  */}
                </form>
            </div>
        </div>
    )
})

export default StudentForm
