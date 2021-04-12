// TEM token
export function getTEMAddress(chainId) {
    switch (chainId) {
        case 1:
            return  '0xae95dC56a480ba3B1830cB760B43633D3f87Aa17'
        case 3:
            return  '0xD80455C491567dA9f25EEF7aD0dd5AD9637E005F'
        default:
            return '0xae95dC56a480ba3B1830cB760B43633D3f87Aa17'
    }
}

// TOTEM NFT
export function getTotemNFTAddress(chainId) {
    switch (chainId) {
        case 1:
            return  '0x6655928F8137B5044d48Aa6D767028E69e81DF59'
        case 3:
            return  '0xf628865afA28e74EbA3B5de744ee802710066Ab4'
        default:
            return '0x6655928F8137B5044d48Aa6D767028E69e81DF59'
    }
}

// TOTEM Auction
export function getTotemAuctionAddress(chainId) {
    switch (chainId) {
        case 1:
            return  '0x962857e3D73B3c520336DC6C5F12d114cDdD3B1e'
        case 3:
            return  '0x3790260932AC279746b1246cDf375ab2eB68F0b0'
        default:
            return '0x962857e3D73B3c520336DC6C5F12d114cDdD3B1e'
    }
}

