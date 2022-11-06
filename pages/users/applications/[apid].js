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
    
    const applicationTags = {
        id: "Application ID",
        status: "Status",
        businessName: "Business",
        businessStreetAddress: "Address",
        businessCity: "City",
        businessState: "State",
        busiessZipcode: "Zipcode",
        businessEmail: "Email",
        ownerFirstName: "First Name",
        ownerLastName: "Last Name",
        ownerDriverLicenseNo: "License Number",
        ownerDriverLicenseState: "License State",
        ownerDriverLicenseExpir: "Expiration Date",
        office_phone: "Office Phone Number",
        cell: "Cell Phone Number",
        createdAt: "Created At",
    };
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

    // try a flexbox approach with no gaps, widths based on the length of the string???
    // or to standardize a bit, just have three sizes, or three flex grows?

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainTitleContainer}>{`Current Applicant: ${applicationDetails.ownerFirstName} ${applicationDetails.ownerLastName}`}</div>
            <div className={styles.formInputsContainer}>
                {Object.entries(applicationDetails).map( ([key, value], index) => {
                    return ApplicationFormInput(applicationTags[key], value);
                    })
                }
            </div>
        </div>
        
    )
}