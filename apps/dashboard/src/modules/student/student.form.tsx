//#region Import
import { memo } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ICreateStudent, IStudentFormProps, IUpdateStudent } from '@interface/modules/student/student.interface'
import TextInput from '@/components/text-input/text-input.component'
import Select from '@/components/select/select.component'
//#endregion

//#region Validation Schema
const validationSchema = yup.object({
    studentNumber: yup
        .string()
        .matches(/^[0-9]{2}-2023-[0-9]{4}$/, 'Invalid student number!')
        .required("Student number is required!"),
    studentName: yup
        .string()
        .min(4, 'Please provide a value that is at least 4 characters long.')
        .required("Student name is required!"),
    class: yup
        .string()
        .min(3, "Please provide a value that is at least 4 characters long.")
        .required('Class is required!')
})
//#endregion

//#region Constant Value
const levelArr = [
    { value: 'Grade 1', name: 'Grade 1' },
    { value: 'Grade 2', name: 'Grade 2' },
    { value: 'Grade 3', name: 'Grade 3' },
    { value: 'Grade 4', name: 'Grade 4' },
    { value: 'Grade 5', name: 'Grade 5' },
    { value: 'Grade 6', name: 'Grade 6' },
    { value: 'Grade 7', name: 'Grade 7' },
    { value: 'Grade 8', name: 'Grade 8' },
    { value: 'Grade 9', name: 'Grade 9' },
    { value: 'Grade 10', name: 'Grade 10' },
    { value: 'Grade 11', name: 'Grade 11' },
    { value: 'Grade 12', name: 'Grade 12' }
]
//#endregion

type FormikType<T> = T extends true ? IUpdateStudent : ICreateStudent;

const StudentForm = memo(({ onSubmit, studentData, formRef }: IStudentFormProps) => {

    //#region Formik

    /**
    * @description dynamic interface for formik
    * if isUpdate = true, the interface will be IUpdateStudent else ICreateStudent
    */
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
                            <TextInput
                                name='studentNumber'
                                ariaLabel='txtStudentNumber'
                                type='text'
                                className='block w-full'
                                onChange={studentFormik.handleChange}
                                placeholder='00-2023-00001'
                                value={studentFormik.values.studentNumber}
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
                            <TextInput
                                name='studentName'
                                ariaLabel='txtStudentName'
                                type='text'
                                className='block w-full'
                                onChange={studentFormik.handleChange}
                                placeholder='Dela Cruz, Juan S.'
                                value={studentFormik.values.studentName}
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
                            <TextInput
                                name='class'
                                ariaLabel='txtClass'
                                type='text'
                                onChange={studentFormik.handleChange}
                                placeholder='Indigo'
                                value={studentFormik.values.class}
                                className='block w-full'
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
                            <Select
                                name="level"
                                ariaLabel='slctLevel'
                                className='block w-full'
                                onChange={studentFormik.handleChange}
                                value={studentFormik.values.level}
                                items={levelArr}
                            />
                        </div>
                        <div className='w-full'>
                            <label className='block mb-2 font-medium text-gray-900 dark:text-white'>
                                Admission Date
                            </label>

                            <TextInput
                                name='admissionDate'
                                ariaLabel='txtAdmissionDate'
                                type='date'
                                min={new Date().toISOString().substr(0, 10)}
                                onChange={(event) => {
                                    const selectedDate = event.target.value;
                                    const dateParts = selectedDate.split('-');
                                    const admissionDate = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]) + 1);
                                    studentFormik.setFieldValue('admissionDate', admissionDate);
                                }}
                                placeholder='Indigo'
                                value={studentFormik.values.admissionDate.toISOString().substr(0, 10)}
                                className='block w-full'
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
