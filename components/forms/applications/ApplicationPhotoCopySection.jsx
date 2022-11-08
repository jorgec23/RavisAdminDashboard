import styles from "./ApplicationPhotoCopySection.module.scss";
import ApplicationFormInput from "./ApplicationFormInput";
import Image from 'next/image';


export default function PhotoCopySection(photoCopyModel){
    // some destructuring ...
    const {url} = photoCopyModel;
    const photoCopyBasicDetails = (({id, comment, updatedAt, createdAt, number, expirationDate})=>
        ({id, comment, updatedAt, createdAt, number, expirationDate}))(photoCopyModel)
    const {applicationPhotoTypeModel, applicationStatusTypeModel} = photoCopyModel;
//     console.log("application photo type model",applicationPhotoTypeModel);
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
        return (key in photoCopyDetailsSpans)?photoCopyDetailsSpans[key]:'';
    }

    const setImageSize = (photoCopyType) => {
        if (photoCopyType === 'driver license') {
            return {
                width: '400',
                height: '250'}
        } else{
            return {
                width: '500',
                height: '600'
            }
        }
    }



//     Object.entries(photoCopyModel).map(([detail, value], index) =>{
//         return ApplicationFormInput(applicationTags[key], value, setColor(index), setSpan(key))
//     })

    return (
        <div className={styles.mainContainer}>
            <div className={styles.photoCopyTitle}>{`Photo Copy: ${applicationPhotoTypeModel.type}`}</div>
            <div className={styles.mainDetailsContainer}>
                <div className = {styles.photoCopyImage}>
                    {(applicationPhotoTypeModel.type === 'application')?
                    <iframe src={url} frameborder="0" title='application' height='400' width='200'/>:
                    <Image src ={url}
                        width={setImageSize(applicationPhotoTypeModel.type).width}
                        height={setImageSize(applicationPhotoTypeModel.type).height}
                        alt="Photo Copy Image"
                    />}
                </div>
                <div className={styles.photoCopyDetails}>
                    {Object.entries(photoCopyBasicDetails).map( ([key, value], index) => {
                        return ApplicationFormInput(photoCopyBasicDetailsTags[key], value, setColor(index), setSpan(key))
                    })}
                </div>
            </div>
        </div>
    )
}