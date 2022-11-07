import styles from "./ApplicationPhotoCopySection.module.scss";
import ApplicationFormInput from "./ApplicationFormInput";
import Image from 'next/image';


export default function PhotoCopySection(photoCopyModel){
    // some destructuring ...
    const {url} = photoCopyModel;
    const photoCopyBasicDetails = (({id, comment, updatedAt, createdAt, number, expirationDate})=>
        ({id, comment, updatedAt, createdAt, number, expirationDate}))(photoCopy)
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

    // color setting
    const colorOptions = [
        'rgb(222, 240, 207)',
        'rgb(189,224,159)',
        'rgb(155,209,112)',
        'rgb(122,193,64)',
        'rgb(89,178,16)',
    ];

    const setColor = (index) => {
        return colorOptions[index%colorOptions.length];
    }

    const photoCopyDetailsSpans = {
        updatedAt: "span 2",
        createdAt: "span 2",
        number: "span 2",
    }
    const setSpan = (key) => {
        if (key in applicationDetailsSpans){
            return applicationDetailsSpans[key];
        }
        else {
            return ''
        }
    }



    Object.entries(photoCopyModel).map(([detail, value], index) =>{
        return ApplicationFormInput(applicationTags[key], value, setColor(index), setSpan(key))
    })

    return (
        <div className={styles.mainContainer}>
            <div className={styles.photoCopyTitle}>{`Photo Copy: ${applicationPhotoTypeModel[type]}`}</div>
            <div className={styles.mainDetailsContainer}>
                <div className = {styles.photoCopyImage}>
                    <Image src ={url} width={200} alt="Photo Copy Image"/>
                </div>
                <div className={styles.photoCopyDetails}>
                    {Object.entries(photoCopyModel).map(([detail, value], index) =>{
                        return ApplicationFormInput(photoCopyBasicDetailsTagsTags[detail], value, setColor(index), setSpan(detail))
                    })}
                </div>
            </div>
        </div>
    )
}