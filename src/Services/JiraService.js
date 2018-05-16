
export default {
    getTodayWork:()=>{
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