
export default {
    getCellData:()=>{
        return new Promise((res, rej) => {
                setTimeout(() => res("\"Fixed TRN-NPD, found corrupted surveys in DB\n" +
                    "\n" +
                    "PS-10315\n" +
                    "Launch screen - handle a case in which wave on hold and quota on hold and setting the wave back to live\n" +
                    "\n" +
                    "PS-9987\n" +
                    "Allow questions cache refresh, periodic and on demand\""), 2000)
            }
        )
    }
}