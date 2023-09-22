import axios from "axios";
import BASE_URL from "../api_url";
axios.defaults.baseURL = BASE_URL;

const DateDifference = (date1, date2) => {


    //console.log(date1, date2);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    //console.log(Difference_In_Time);
    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

    //console.log(Difference_In_Days);

    return Difference_In_Days;
}

const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    //console.log(result);
    return result;
}

export const getuserearn = async () => {

    // var userDetails;
    // var Investment_amount;
    // var accumulated_income
    // var today_income

    // await axios.post(`/get_user`, { user_id: localStorage.getItem('uid') }).then(async ({ data: document }) => {
    //     if (document) {
    //         userDetails = document;
    //         //console.log(document);

    //         if (document.plans_purchased.length > 0) {
    //             var earn = 0;
    //             var ia = 0, ai = 0, ti = 0;
    //             var temp = document.plans_purchased.map((element) => {
    //                 ia += element.plan_amount;

    //                 var days = DateDifference(new Date(element.date_till_rewarded), new Date(Math.min(new Date(), addDays(new Date(element.date_purchased), element.plan_cycle))));
    //                 var days2 = DateDifference(new Date(element.date_till_rewarded), addDays(new Date(element.date_purchased), element.plan_cycle));
    //                 //console.log(days);
    //                 if (element.product_type > 0) {
    //                     if (days === element.plan_cycle) {
    //                         ti += element.plan_daily_earning;
    //                         ai += (days * element.quantity * element.plan_daily_earning);
    //                         earn = (days * element.quantity * element.plan_daily_earning);
    //                         return {
    //                             ...element,
    //                             date_till_rewarded: new Date(Math.min(new Date(), addDays(new Date(element.date_purchased), element.plan_cycle))).toDateString()
    //                         }
    //                     } else {
    //                         return {
    //                             ...element
    //                         }
    //                     }
    //                 }

    //                 if (days > element.plan_cycle) {
    //                     return {
    //                         ...element
    //                     }
    //                 }
    //                 if ((DateDifference(new Date(element.date_purchased), new Date(element.date_till_rewarded))) >= 1) {
    //                     ti += element.plan_daily_earning;
    //                 }
    //                 ai += DateDifference(new Date(element.date_purchased), new Date(element.date_till_rewarded)) * element.quantity * element.plan_daily_earning;
    //                 //console.log(ai);
    //                 earn = earn + (days * element.quantity * element.plan_daily_earning);
    //                 return {
    //                     ...element,
    //                     date_till_rewarded: new Date(Math.min(new Date(), addDays(new Date(element.date_purchased), element.plan_cycle))).toDateString()
    //                 }
    //             });

    //             Investment_amount = ia;
    //             accumulated_income = ai;
    //             today_income = ti;


    //             await axios.post(`/update_earning`, {
    //                 earn: earn,
    //                 temp: temp,
    //                 user_id: localStorage.getItem('uid')
    //             })
    //                 .then(() => console.log('Reward successfully updated'))
    //                 .catch(error => console.log('Some error Occured'));
    //         }
    //     } else {
    //         console.log('Data not found');
    //     }
    //     // setLoading(false);

    // }).then(() => {
    //     //console.log('This is working');
    // })
    //     .catch(error => console.log('Some error occured', error));

    var plans_purchased = []
    var earn = 0;
    const today = new Date();

    await axios.post(`/get_user`, { user_id: localStorage.getItem('uid') }).then(async (responce) => {
        plans_purchased = responce.data.plans_purchased;
        var temp = plans_purchased.map((plans, index) => {


            if (index === 3) {
                console.log(new Date(today.setHours(0, 0, 0, 0)) === new Date(plans.fullTime));
            }


            if (today < new Date(plans.fullTime) && today > new Date(plans.date_till_rewarded)) {
                return {
                    ...plans, date_till_rewarded: today.toDateString()
                }
            }
            if (today > new Date(plans.fullTime)) {
                return { ...plans }
            }
            if (new Date(today.setHours(0, 0, 0, 0)) === new Date(plans.fullTime) && today > new Date(plans.date_till_rewarded)) {
                earn += plans.plan_daily_earning * plans.plan_cycle * plans.quantity
                return {
                    ...plans,
                    date_till_rewarded: today.toDateString()
                }

            }

            return {
                ...plans,
                date_till_rewarded: today.toDateString()
            }


        })
        await axios.post(`/update_earning`, {
            earn: earn,
            temp: temp,
            user_id: localStorage.getItem('uid')
        })
            .then(() => console.log('Reward successfully updated'))
            .catch(error => console.log('Some error Occured'));
    }).catch(error => {
        console.log('data not find');
    });


};