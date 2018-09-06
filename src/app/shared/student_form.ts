export class stdForm
{
    rollNo : string;        //RollNo. No of the student

    collegeID : string;     //College ID of the student - Will Have to select from a list

    collegeName : string;   //College Name of the student - Automatically filled from collegeID

    dept : string;          //Department Name of the student in a specific college

    year : string;

    name : string;          //Name of the student

    imgUrl : string;

    email : string;         //Email Addr. of the student

    password : string;

    phoneNo : string;       //Phone No of the student

    skills : string[];      //Skills array of the student

    hobbies : string[];     //Hobies array of the student
}

export const Years = ['1st', '2nd', '3rd', '4th'];
