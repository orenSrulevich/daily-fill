import axios from 'axios';

export default {
    getTodayWork:()=>{

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                //"Access-Control-Allow-Origin": "*",
                'Authorization' : 'Basic Qp57azEp5nycsSvAYUcX6700'
            }
        };

        axios.post("https://toluna.atlassian.net/rest/auth/latest/session",{
            username:"oren.srulevich@toluna.com",
            password:"7u8i(O)P"
        },axiosConfig)



        //
        // axios.get('https://toluna.atlassian.net/rest/api/latest/search?jql=text~"AWS"',{},axiosConfig)
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    },
    setTodayWork:()=>{
        return new Promise((res, rej) => {
                setTimeout(() => res(
                    "PS-10446\n" +
                    "Sampling: Error on trying to reserve in Haifa dev\n" +
                    "\n" +
                    "PS-10328\n\n" +
                    "Haifa DEV - Test survey link does not work\""), 2000)
            }
        )
    }
}