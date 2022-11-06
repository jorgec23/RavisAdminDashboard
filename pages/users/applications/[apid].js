import styles from "../../../styles/users/applicationDetails.module.scss";

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

    console.log(applicationData);
    const{ applicationPhotoCopiesModels} = applicationsModel;
    console.log("application details", applicationDetails);
    console.log("photocopy detail objects", applicationPhotoCopiesModels);



    return (
        <div>jflkdjfladsj;;fl</div>
    )

}