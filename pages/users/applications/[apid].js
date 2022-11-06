import styles from "../../../styles/users/applicationDetails.module.scss";
import ApplicationFormInput from "../../../components/forms/applications/ApplicationFormInput";

export async function getServerSideProps(context){
    const applicationId = context.params.apid;
    const res = await fetch(`${process.env.singleApplicationEndpoint}?${process.env.singleApplicationKeyword}=${applicationId}`);
    const applicationData = await res.json()
   
    if (!applicationData) {
        return{
            notFound: true,
        }
    }
    return {
        props: {applicationData},
    }   
}


export default function ApplicationDetails({applicationData}) {
    // console.log(JSON.stringify(applicationData));

    const {applicationsModel} = applicationData;

    const applicationDetails = (({id, status, businessName, businessStreetAddress, businessCity,
        businessState, businessZipcode, businessEmail, ownerFirstName, ownerLastName, ownerDriverLicenseNo,
        ownerDriverLicenseState, ownerDriverLicenseExpir, office_phone, cell, createdAt}) => 
        ({id, status, businessName, businessStreetAddress, businessCity,
        businessState, businessZipcode, businessEmail, ownerFirstName, ownerLastName, ownerDriverLicenseNo,
        ownerDriverLicenseState, ownerDriverLicenseExpir, office_phone, cell, createdAt}))(applicationsModel)

//    console.log(applicationData);
    const{ applicationPhotoCopiesModels} = applicationsModel;
//    console.log("application details", applicationDetails);
//    console.log("photocopy detail objects", applicationPhotoCopiesModels);

    // so now I need to iterate through the objects and display the information into components
    // or a form of some sort, the problem with a form is that the number of fields present depends on the 
    // information provided, so cant necessarily do a fixed grid structure

    // actually, grid will auto place items without specifying grid-column and grid-row, if overflow, 
    // implicity rows are created, you can also insert sizing to specific elements and the rest will just 
    // wrap around it, pretty neat!

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainTitleContainer}>{`${applicationDetails.ownerFirstName} ${applicationDetails.ownerLastName}`}</div>
            <div className={styles.formInputsContainer}>
                {Object.entries(applicationDetails).map( ([key, value], index) => {
                    return ApplicationFormInput(key, value);
                    })
                }
            </div>
        </div>
        
    )
}