export default {
    getCellData: () => {
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
    },
    GetEmailTemplateData: () => {
        return new Promise((res, rej) => {
                const data = [
                    {
                        name: "Carmel",
                        text : "deploy new data push tyo codebook prod COD-576 Staging very slow with IP .\n" +
                        "PS-10687\n" +
                        "Soft Launch - MC (Multi Country) - Apply to all checkbox is not showing\n" +
                        "PS-10569\n" +
                        "NPD/Rocky - no available panelists in Random mode for out-go quota\n" +
                        "deep learning feasiiblity"
                    },
                    {
                        name: "Danny",
                        text : "deploy new data push tyo codebook prod COD-576 Staging very slow with IP .\n" +
                        "PS-10687\n" +
                        "Soft Launch - MC (Multi Country) - Apply to all checkbox is not showing\n" +
                        "PS-10569\n" +
                        "NPD/Rocky - no available panelists in Random mode for out-go quota\n" +
                        "deep learning feasiiblity"
                    },
                    {
                        name: "Barak",
                        text : "deploy new data push tyo codebook prod COD-576 Staging very slow with IP .\n" +
                        "PS-10687\n" +
                        "Soft Launch - MC (Multi Country) - Apply to all checkbox is not showing\n" +
                        "PS-10569\n" +
                        "NPD/Rocky - no available panelists in Random mode for out-go quota\n" +
                        "deep learning feasiiblity"
                    },
                    {
                        name: "Oren",
                        text : "deploy new data push tyo codebook prod COD-576 Staging very slow with IP .\n" +
                        "PS-10687\n" +
                        "Soft Launch - MC (Multi Country) - Apply to all checkbox is not showing\n" +
                        "PS-10569\n" +
                        "NPD/Rocky - no available panelists in Random mode for out-go quota\n" +
                        "deep learning feasiiblity"
                    }
                ];
                setTimeout(() => res(data), 2000)
            }
        )
    }
}