import styles from "./ApplicationPhotoCopySection.module.scss";
import ApplicationFormInput from "./ApplicationFormInput";
import Image from 'next/image';
import Link from 'next/link';


export default function PhotoCopySection(photoCopyModel){
    // some destructuring ...
    const {url} = photoCopyModel;
    const photoCopyBasicDetails = (({id, comment, updatedAt, createdAt, number, expirationDate})=>
        ({id, comment, updatedAt, createdAt, number, expirationDate}))(photoCopyModel)
    const {applicationPhotoTypeModel, applicationStatusTypeModel} = photoCopyModel;

    // creating display names for the application fields
    const photoCopyBasicDetailsTags = { 
        id: "ID", comment: "Comments", updatedAt: "Updated At", createdAt: "Created At",
        number:"Number", expirationDate: "Expiration Date"}
    const applicationPhotoTypeModelTags = {
        id: "Type ID", type: "Photo Type"
    }
    const applicationStatusTypeModelTags = {
        id: "Status ID", type: "Status Type"
    }

    // // color setting
    // const colorOptions = [
    //     'rgb(222, 240, 207)',
    //     'rgb(189,224,159)',
    //     'rgb(155,209,112)',
    //     'rgb(122,193,64)',
    //     'rgb(89,178,16)',
    // ];

    // const setColor = (index) => {
    //     return colorOptions[index%colorOptions.length];
    // }

    const photoCopyDetailsSpans = {
        updatedAt: "span 2",
        createdAt: "span 2",
        number: "span 2",
    }
    const setSpan = (key) => {
        return (key in photoCopyDetailsSpans)?photoCopyDetailsSpans[key]:'';
    }

    const setImageSize = (photoCopyType) => {
        if (photoCopyType === 'driver license') {
            return {
                width: '500',
                height: '300'}
        } else{
            return {
                width: '600',
                height: '800'
            }
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.photoCopyTitle}>{`Photo Copy: ${applicationPhotoTypeModel.type}`}</div>
            <div className={styles.mainDetailsContainer}>
                <div className = {styles.photoCopyImage}>
                    {(applicationPhotoTypeModel.type === 'application')?
                    <Link href={url}><button type='button' className={styles.pdfButton}>Download Signed Application</button>
                    </Link>:
                    <Image src ={url}
                        width={setImageSize(applicationPhotoTypeModel.type).width}
                        height={setImageSize(applicationPhotoTypeModel.type).height}
                        alt="Photo Copy Image"
                    />}
                </div>
                <div className={styles.photoCopyDetails}>
                    {Object.entries(photoCopyBasicDetails).map( ([key, value], index) => {
                        return ApplicationFormInput(photoCopyBasicDetailsTags[key], value, setSpan(key), index)
                    })}
                </div>
            </div>
        </div>
    )
}