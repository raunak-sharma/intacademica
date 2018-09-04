export class empForm
{
    emp_IDNo : string;          //ID No of the employee

    emp_design : string;        //Designation on the employee - Select From a list

    emp_name : string;          //Name of the employee

    emp_collegeID : string;     //College ID of the employee - Will Have to select from a list

    emp_collegeName : string;   //College Name of the employee - Automatically filled from collegeID

    emp_dept : string;          //Department of the employee in the specific college

    emp_email : string;         //Email Addr. of the employee

    emp_phoneNo : string;       //Phone No. of the employee

    emp_imgUrl : string;

    emp_password : string;
}

export const Designation = ['Professor', 'HOD'];