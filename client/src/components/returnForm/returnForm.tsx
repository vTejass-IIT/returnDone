// import React, { useEffect, useState } from "react";
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useRef, useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Header from '../reHeader/header';
import {sendEmail} from '../../services/emailService';
import styles from './returnForm.module.scss';
type Name = {
    name: string;
    items: number;
  };

  type Store = {
    storeName: string;
    item: number;
  }

  type FileFields = {
    id: number;
    file: any[] 
  };

type returnSubmitForm = {
    fName: string;
    lName: string;
    email: string;
    phone: number;
    pAddress: string;
    storeName: string;
    name: string;
    sNames: {
        name: string;
        item: number;
        storeType: string;
        receipt: any[] | null;
    }[];
    items: number;
    fields: Array<Store>;
    fileFields: any[];
    date: Date | null;
    timeSlot: string;
    code: string;
    receipt: FileList;
    picture: File;
  };

  interface ReturnFormProps {
    updateStep: any,
    step: number,
    updateSubmitFormData: Function;
  
  }

const ReturnForm:React.FC<ReturnFormProps> = ({updateStep, step, updateSubmitFormData}) =>{

    const validationSchema = Yup.object().shape({
        fName: Yup.string().required('FirstName is required'),
        lName: Yup.string().required('LastName is required'),
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        phone: Yup.string()
          .required('Phone is required')
          .length(10, 'Password must be at least 10 characters'),
        pAddress: Yup.string()
        .required('PickUp Address is required'),
        sNames: Yup.array().of(
            Yup.object().shape({
                name: Yup.string().required('Store Name is required'),
                storeType: Yup.string().required("This field is required"),
                item: Yup.number()
                .typeError("Item must be a number")
                .positive("Item must be a positive number")
                .integer("Item must be an integer")
                .required("Item is required"),
                receipt: Yup
                .mixed()
                .test("fileSize", "No File uploaded", (value:any) => {
                    // console.log(value?.length)
                  if (value.length == 0) return false; // no file provided
                  else return true
                })
                .required("File is required"),
            })
        ),
        date: Yup.string().required("This field is required"),
        timeSlot: Yup.string().required("This field is required"),
      });

      

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        control,
      } = useForm<returnSubmitForm>({

        resolver: yupResolver(validationSchema),
        defaultValues: {
            sNames: [{ name: "",item: 0,
            storeType: ""}],
        }
      });

      const { fields, append, remove } = useFieldArray({
        name: "sNames",
        rules: {
          required: "Please append at least 1 item"
        },
        control,
      });

    //   const { fileFields, appendFile, removeFile } = useFieldArray({
    //     control,
    //     name: "files",
    //   });
      
    let createRandomSequence = ()=>{
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 6) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
        
    }

    const [fileUploadList, setfileUploadList] = useState<any[]>([]);

    let globalFile: any;
    let fileHandler =(index: number)=>(event: any) =>{
        let tempFile =  Array.from(event.target.files ?? []);
        globalFile = event.target.files[0];
        // setfileUploadList({tempFile});
        let fileIndex = 0;
        let tempFileList = [...fileUploadList]
          tempFileList.forEach((item)=>{
          if(index == item.id){
            fileIndex++;
          }
        })
        setfileUploadList(targetFiles =>[
            ...targetFiles,{id:index,fileIndex:fileIndex,file:tempFile}
        ])
    }
    
    let removeUploadFile = (storeIndex: any, fileIndex: any)=>(event:any) =>{
        event.preventDefault();
        console.log(storeIndex,fileIndex)
        let tempFileList = [...fileUploadList];
        tempFileList = tempFileList.filter((file)=>{
            if(file.id == storeIndex && file.fileIndex == fileIndex){
                return false
            }
            return true;
        })
        console.log(tempFileList)
        //updateFileIndex list
        let tempFileIndex = 0
        tempFileList = tempFileList.map((file)=>{
            if(file.id == storeIndex){
                file.fileIndex = tempFileIndex;
                tempFileIndex++;
                return file;
            }
            
            return file;
        })
        setfileUploadList(tempFileList)
    }
  
    let getFileList =(index: number)=>{
        let tempFileList = [...fileUploadList];
        let tempFile: any[] = []
        tempFileList.forEach((files)=>{
            if(files.id == index){
                tempFile.push(files.file[0])
            }
        })
        console.log(tempFile);
        return tempFile;
    }
    let sampleData:any = {
        "timeSlot": "8to10",
        "date": 1679547600000,
        "storeNames": [
          {
            "item": 23,
            "storeType": "on",
            "name": "StoreName"
          }
        ],
        "pickupAddress": "Address",
        "phoneNumber": "3322222222",
        "email": "disale.gita@gmail.com",
        "lastName": "Done",
        "firstName": "Return",
        "code": "AY1BVZ",
        "receipt": [
          
        ]
      }
      const createNewFormData = ()=>{
        const formData:any = new FormData();
        formData.append("Date","1679547600000");
        formData.append( "PickupAddress", "Address");
        formData.append( "Code", "AY1BVZ");
        formData.append( "FirstName","Return");
        formData.append("LastName", "Done");
        formData.append("Email","eli.dasda@gmail.com")
        formData.append("PhoneNumber", "3322222222")
        formData.append('StoreNames[0].item',"23");
        formData.append('StoreNames[0].storeType',"on");
        formData.append('StoreNames[0].name',"StoreName");
        formData.append("TimeSlot","8to10");
        return formData;
      }

      const onSubmit = (data: returnSubmitForm) => {
        let result = createRandomSequence()
        let tempList = []
        data['code'] = result;
        console.log(fileUploadList.length,'fileupload')
        data.sNames.forEach((store,index)=>{
            tempList = getFileList(index);
            data.sNames[index].receipt = tempList;
        })
        sampleData.receipt = data.sNames[0].receipt
        console.log(globalFile);
        let formSample = createNewFormData();
        // let fileT = data.sNames[0].receipt? data.sNames[0]?.receipt : data.sNames[0]?.receipt;
        // @ts-ignore
        formSample.append('Receipt',document.getElementById("reSubmitForm")?.querySelectorAll("input[type=file]")[0]?.files);
        sendEmail(formSample);
        console.log(data.sNames.length)
        console.log(JSON.stringify(data, null, 2));
        console.log('currentStep',step)
        updateStep(2);
        updateSubmitFormData(data);
      };
      
      const newdate = new Date();
      newdate.setDate(newdate.getDate() + 1);
      console.log(newdate)
      
      return (
        <>
            <section className={styles.reFormSubmit}>
                <div className={styles.register_form}>
                        <form onSubmit={handleSubmit(onSubmit)} id="reSubmitForm">
                            <div className={styles.row_group}>
                                <div className={styles.form_group}>
                                    <label htmlFor="reFName">First Name</label>
                                    <input id="reFName"
                                        type="text"
                                        {...register('fName')}
                                        className={`form-control ${errors.fName ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.fName?.message}</div>
                                </div>

                                <div className={styles.form_group}>
                                    <label htmlFor='reLName'>Last Name</label>
                                    <input
                                        id="reLName"
                                        type="text"
                                        {...register('lName')}
                                        className={`form-control ${errors.lName ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.lName?.message}</div>
                                </div>
                            </div>

                            <div className={styles.row_group}>
                                <div className={styles.form_group}>
                                    <label htmlFor='reEmail'>Email</label>
                                    <input
                                        id="reEmail"
                                        type="text"
                                        {...register('email')}
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.email?.message}</div>
                                </div>
                        
                                <div className={styles.form_group}>
                                    <label htmlFor='rePhone'>Phone</label>
                                    <input
                                        id="rePhone"
                                        type="number"
                                        {...register('phone')}
                                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.phone?.message}</div>
                                </div>
                            </div>

                            <div className={styles.row_group}>
                                <div className={`${styles.form_group} ${styles.w_100}`}>
                                    <label htmlFor='reAddress'>PickUp Address</label>
                                    <textarea
                                        id="reAddress"
                                        {...register('pAddress')}
                                        className={`form-control ${errors.pAddress ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.pAddress?.message}</div>
                                </div>
                            </div>

                            <div className={styles.store_group}>
                                {fields.map((field, index) => 
                                    <section className={styles.store_group} key={field.id}>
                                        <div className={styles.store_group_header}>
                                            <h3>Store Details</h3>
                                            {fields.length > 1 &&
                                            <button className={`${styles.btn_link}`} type="button" onClick={() => {
                                                remove(index);}}>
                                                - Remove Store
                                            </button>
                                            }
                                        </div>
                                        <div className={styles.row_group}>
                                            <div className={styles.form_group}>
                                                <label htmlFor={`storeName`+index}>
                                                    Name
                                                </label>
                                                    <input id={`storeName`+index}
                                                    {...register(`sNames.${index}.name`, { required: true, }
                                                    )}
                                                    className={`form-control ${errors.sNames && errors.sNames[index]?.name  ? 'is-invalid' : ''}`}
                                                    />
                                                {errors.sNames && errors.sNames[index]?.name && (
                                                        <div className="invalid-feedback">
                                                            {errors.sNames[index]?.name?.message}
                                                        </div>
                                                    )}
                                            </div>
                                            <div className={styles.form_group}>
                                                <label htmlFor={`noOfItems`+index}>
                                                    No of Items from Store
                                                </label>
                                                    <input
                                                    id={`noOfItems`+index}
                                                    type="number"
                                                        {...register(`sNames.${index}.item`, { required: true, })}
                                                        className={`form-control ${errors.sNames && errors.sNames[index]?.item   ? 'is-invalid' : ''}`}
                                                    />
                                                    {errors.sNames && errors.sNames[index]?.item && (
                                                        <div className="invalid-feedback">
                                                            {errors.sNames[index]?.item?.message}
                                                        </div>
                                                    )}
                                                    
                                            </div>
                                        </div>
                                        <div className={`${styles.storeType_group} ${errors.sNames && errors.sNames[index]?.storeType   ? 'is-invalid' : ''}`}>
                                            <div className={styles.form_group}>
                                                <input
                                                    id={`inStore`+index}
                                                    type="radio"
                                                        {...register(`sNames.${index}.storeType`)}
                                                        className={`form-control ${errors.sNames && errors.sNames[index]?.storeType   ? 'is-invalid' : ''}`}
                                                    />
                                                <label htmlFor={`inStore`+index}>
                                                    InStore Purchase
                                                </label>
                                            </div>
                                            <div className={`${styles.form_group}`}>
                                                <input
                                                    id={`online`+index}
                                                    type="radio"
                                                        {...register(`sNames.${index}.storeType`)}
                                                        className={`form-control ${errors.sNames && errors.sNames[index]?.storeType   ? 'is-invalid' : ''}`}
                                                    />
                                                <label htmlFor={`online`+index}>
                                                    Online Purchase
                                                </label>
                                            </div>
                                            {errors.sNames && errors.sNames[index]?.storeType && (
                                                    <div className="invalid-feedback">
                                                        {errors.sNames[index]?.storeType?.message}
                                                    </div>
                                                )}
                                        </div>  
                                        <div>
                                        <>
                                        <label>
                                                Upload File
                                            <input
                                                type="file"
                                                {...register(`sNames.${index}.receipt`)}
                                                onChange={fileHandler(index)}
                                                className={`form-control ${errors.sNames && errors.sNames[index]?.receipt  ? 'is-invalid' : ''}`}
                                            />
                                            {errors.sNames && errors.sNames[index]?.receipt && (
                                                    <div className="invalid-feedback">
                                                        {errors.sNames[index]?.receipt?.message}
                                                    </div>
                                                )}
                                            </label>
                                            <div>
                                            { fileUploadList.map((item,id) => {
                                                if(item.id == index)
                                                return (
                                                <div className={styles.upload_details}>
                                                    <div>
                                                    {item.file[0].name}
                                                    </div>
                                                    <button
                                                    className={styles.removeFile}
                                                    type="button"
                                                        onClick={removeUploadFile(item.id,item.fileIndex)}
                                                    >-</button>
                                                </div>
                                                );
                                            }) }
                                            </div>
                                        </>
                                        </div>
                                        <p>{errors.sNames?.root?.message}</p>
                                    </section>  
                                )}

                                <button type="button" className={`${styles.btn_link}`} onClick={() => {append(
                                    {
                                        name: "",
                                        item:0,
                                        storeType: "",
                                        receipt: null,
                                    });
                                }}>+ Add Store</button>
                            </div>
                        
                            <div className={styles.form_group}>
                            <label htmlFor="date">Date:</label>
                                <Controller
                                    render={(pickUpDateRef) => (
                                    <DatePicker
                                        selected={
                                        pickUpDateRef.field.value ? new Date(Number(pickUpDateRef.field.value)) : undefined
                                        }
                                        onChange={(date: Date) => pickUpDateRef.field.onChange(date.getTime())}
                                        dateFormat={"MMMM d, yyyy"}
                                        startDate={newdate}
                                        placeholderText="Select"
                                    />
                                    )}
                                    control={control}
                                    {...register('date')}
                                    rules={{ required: true }}
                                />
                                {errors.date &&  (
                                                <div className="invalid-feedback">
                                                    {errors.date?.message}
                                                </div>
                                            )}
                            </div>
                            <div className={`${styles.form_group} ${styles.timeSlot_group} ${errors.timeSlot ? 'is-invalid' : ''}`}>
                                <div className={styles.timeSlot_group_item}>
                                    <input id="8to10" value="8to10" type="radio" {...register('timeSlot')}
                                    className={`form-control ${errors.timeSlot ? 'is-invalid' : ''}`}></input>
                                    <label htmlFor="8to10">    
                                        8:00am to 10:00am
                                    </label>
                                </div>
                                <div className={styles.timeSlot_group_item}>
                                    <input id="10to12" value="10to12" type="radio" {...register('timeSlot')}
                                    className={`form-control ${errors.timeSlot ? 'is-invalid' : ''}`}></input>
                                    <label htmlFor="10to12">    
                                        10:00am to 12:00pm
                                    </label>
                                </div>
                                <div className={styles.timeSlot_group_item}>
                                    <input id="12to2" value="12to2" type="radio" {...register('timeSlot')}
                                    className={`form-control ${errors.timeSlot ? 'is-invalid' : ''}`}></input>
                                    <label htmlFor="12to2">    
                                        12:00pm to 2:00pm
                                    </label>
                                </div>
                                <div className={styles.timeSlot_group_item}>
                                    <input id="2to4" value="2to4" type="radio" {...register('timeSlot')}
                                    className={`form-control ${errors.timeSlot ? 'is-invalid' : ''}`}></input>
                                    <label htmlFor="2to4">    
                                        2:00pm to 4:00pm
                                    </label>
                                </div>
                                <div className={styles.timeSlot_group_item}>
                                    <input id="4to6" value="4to6" type="radio" {...register('timeSlot')}
                                    className={`form-control ${errors.timeSlot   ? 'is-invalid' : ''}`}></input>
                                    <label htmlFor="4to6">    
                                        4:00pm to 6:00pm
                                    </label>
                                </div>
                                <div className={styles.timeSlot_group_item}>
                                    <input id="6to8" value="6to8" type="radio" {...register('timeSlot')}
                                    className={`form-control ${errors.timeSlot   ? 'is-invalid' : ''}`}></input>
                                    <label htmlFor="6to8">    
                                        6:00pm to 8:00pm
                                    </label>
                                </div>
                                {errors.timeSlot &&  (
                                    <div className="invalid-feedback">
                                        {errors.timeSlot?.message}
                                    </div>
                                )}
                            </div>
                            <div className={styles.form_group}>
                            <button type="submit" className={`${styles.primaryButton}`}>
                                Register
                            </button>
                            <button
                                type="button"
                                onClick={() => {console.log(errors);reset()}}
                                className={`${styles.secondaryButton}`}
                            >
                                Reset
                            </button>
                            </div>
                        </form>
                    </div>
            </section>
                
        </>
      );
    };
export default ReturnForm;

// // function index(index: any, files: any) {
// //     throw new Error('Function not implemented.');
// // }
// // function targetFiles(index: (index: any, files: any) => void, targetFiles: any) {
// //     throw new Error('Function not implemented.');
// // }

// // // function index(index: any, files: any) {
// //     throw new Error('Function not implemented.');
// // }
// // function targetFiles(index: (index: any, files: any) => void, targetFiles: any) {
// //     throw new Error('Function not implemented.');
// // }

// // import React, { useState } from "react";
// // import { useForm, useFieldArray } from "react-hook-form";
// // import * as Yup from "yup";
// // import { yupResolver } from '@hookform/resolvers/yup';


// // const schema = Yup.object().shape({
// //   files: Yup.array()
// //     .of(Yup.mixed().test("fileSize", "File size is too large", (value) => {
// //       return value ? value.size <= 1048576 : true; // 1MB
// //     }))
// //     .required("At least one file is required"),
// // });

// // function ReturnForm() {
// //   const [files, setFiles] = useState([]);
// //   const { register, control, handleSubmit, formState: { errors } } = useForm({
// //     resolver: yupResolver(schema),
// //     defaultValues: {
// //       files: [],
// //     },
// //   });
// //   const [files, setFiles] = useState([]);
// //   const { fields, append, remove } = useFieldArray({
// //     control,
// //     name: "files",
// //   });

// //   const handleFileSelect = (event) => {
// //     const fileList = event.target.files;
// //     if (fileList) {
// //       const filesArray = Array.from(fileList);
// //       setFiles(filesArray);
// //       filesArray.forEach((file) => {
// //         append({ value: file }); // <-- Pass the file object as the `value` property
// //       });
// //     }
// //   };

// //   const onSubmit = (data) => {
// //     console.log(data);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit(onSubmit)}>
// //       <div>
// //         <label>Files:</label>
// //         <input type="file" onChange={handleFileSelect} multiple />
// //         {errors.files && <span>{errors.files.message}</span>}
// //         <ul>
// //           {fields.map((field, index) => (
// //             <li key={field.id}>
// //               <span>{field.value.name}</span> {/* Use the `value` property */}
// //               <button type="button" onClick={() => remove(index)}>
// //                 Remove
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }

// // export default ReturnForm;
