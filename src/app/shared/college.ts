import { Department } from './dept';

export class College
{
    c_IDNo : string;        //ID No of the College

    c_name : string;        //Name Of the college

    c_imgUrl : string;      //Image Of the college

    c_depts : Department[]; //An array containing all the Departments of a College

    c_clubs : string[];     //Clubs of a college

    c_email : string;       //An Email Addr. of the college

    c_phoneNo : string;     //Contact No. of the college
}