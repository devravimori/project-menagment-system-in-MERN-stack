import React, { useState } from 'react'
import { Popover } from '@headlessui/react'
import axios from "axios"
import toast from 'react-hot-toast'
import AddProjectModal from './AddProjectModal'

const ProjectDropdown = ({ id, navigate }) => {
    const [isModalOpen, setModalState] = useState(false)
    const handleDelete = async () => {
        try {
            const data = await axios.delete(`http://localhost:9000/project/${id}`)
            if (data.data.deletedCount > 0) {
                toast.success('Record deleted successfully')
                navigate('/')
                const customEvent = new CustomEvent('projectUpdate');
                document.dispatchEvent(customEvent);
            } else {
                toast.error('Record is already deleted')
            }

        } catch (e) {
            toast.error('Something went wrong')
        }

    }

    const closeModal = () => {
        setModalState(false)
    }


    return (
        <>
            <Popover className={`relative`}>
                <Popover.Button className=" duration-75 rounded-sm focus:outline-none" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={16} className="text-slate-500/90" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" /></svg>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 left-0">
                    <div className="w-48 bg-white rounded-md border shadow select-none p-1 divide-y">
                        <div className='py-[3px]'>
                            <button onClick={() => setModalState(true)} className='transition-colors duration-75 flex w-full items-center rounded-md px-2.5 py-2 text-sm space-x-2.5 text-slate-500 hover:bg-indigo-500 hover:text-gray-100'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width={15} viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                                <h2 className='leading-none text-sm '>Edit</h2>
                            </button>
                            {/* <button className='transition-colors duration-75 flex w-full items-center rounded-md px-2.5 py-2 text-sm space-x-2.5 text-slate-500 hover:bg-indigo-500 hover:text-gray-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width={15} viewBox="0 0 512 512"><path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z" /></svg>
                            <h2 className='leading-none text-sm '>Clone</h2>
                        </button> */}
                        </div>
                        <div className='py-[3px]'>
                            <button onClick={handleDelete} className='transition-colors duration-75 flex w-full items-center rounded-md px-2.5 py-2 text-sm space-x-2 text-slate-500 hover:bg-red-500 hover:text-gray-100'>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width={15} viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" /></svg> */}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width={15} viewBox="0 0 448 512"><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z" /></svg> */}

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={17} viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>

                                <h2 className='leading-none text-sm '>Delete</h2>
                            </button>
                        </div>
                    </div>
                </Popover.Panel>
            </Popover>
            <AddProjectModal isModalOpen={isModalOpen} closeModal={closeModal} edit={true} id={id} />
        </>
    )
}

export default ProjectDropdown