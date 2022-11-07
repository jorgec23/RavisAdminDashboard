import styles from "../../../styles/users/applicationDetails.module.scss";
import ApplicationFormInput from "../../../components/forms/applications/ApplicationFormInput";
import PhotoCopySection from "../../../components/forms/applications/ApplicationPhotoCopySection";

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
        businessZipcode: "Zipcode",
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

    const applicationDetailsSpans = {
        businessEmail: "span 2",
        createdAt: "span 2",
        businessStreetAddress: "span 2",
    }
    const setSpan = (key) => {
        if (key in applicationDetailsSpans){
            return applicationDetailsSpans[key];
        }
        else {
            return ''
        }
    }

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
//    console.log(setColor(8));


    const{ applicationPhotoCopiesModels} = applicationsModel;

    // so now I need to iterate through the objects and display the information into components
    // or a form of some sort, the problem with a form is that the number of fields present depends on the
    // information provided, so cant necessarily do a fixed grid structure

    // actually, grid will auto place items without specifying grid-column and grid-row, if overflow, 
    // implicity rows are created, you can also insert sizing to specific elements and the rest will just 
    // wrap around it, pretty neat!


    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainTitleContainer}>{`Applicant: ${applicationDetails.ownerFirstName} ${applicationDetails.ownerLastName}`}</div>
            <div className={styles.applicationDetailsTitle}>Application Details</div>
            <div className={styles.formInputsContainer}>
                {Object.entries(applicationDetails).map( ([key, value], index) => {
                    return ApplicationFormInput(applicationTags[key], value, setColor(index), setSpan(key));
                    })
                }
            </div>
            <div>
                {applicationPhotoCopiesModels.map((photoCopyModel)=> {
                    return PhotoCopySection(photoCopyModel); })
                }
            </div>

            
        </div>
        
    )
}