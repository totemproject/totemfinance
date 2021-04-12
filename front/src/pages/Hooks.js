import {useState, useEffect} from 'react';
import TotemToken from '../web3/contracts/TotemToken.json'
import TotemNFT from '../web3/contracts/TotemNFT.json'
import {getContract, useActiveWeb3React} from "../web3";
import {getTEMAddress, getTotemNFTAddress} from "../web3/address";


export const useTEMBalance = () =>{
    const {account, active, library, chainId} = useActiveWeb3React()
    const [ temBalance, setTEMBalance] = useState()

    useEffect(()=>{ 
        if(active){
            try{
                const contract = getContract(library, TotemToken.abi, getTEMAddress(chainId))
                contract.methods.balanceOf(account).call().then(res =>{
                    console.log('balance:',res)
                    setTEMBalance(res) 
                })
            }catch (e) {
                console.log('load balance error:',e)

            }

        }
    },[active])

    return {temBalance} 
}

export const useTOTEMsup = () =>{
    const {library, chainId} = useActiveWeb3React()
    const [ totemSup, setTOTEMsup] = useState()
   

   
    
       
            try{
                const contract = getContract(library, TotemNFT.abi, getTotemNFTAddress(chainId))
                contract.methods.totalSupply().call().then(res =>{
                    
                    setTOTEMsup(res) 
                
                })
            }catch (e) {
                console.log('load TOTEM sup error:',e)

            }

       
   

    return {totemSup}
}


export const useTOTEMownersNow = () =>{
    const {account, active, library, chainId} = useActiveWeb3React()
    const [ totemOwnersNow, setTOTEMownersNow] = useState()

    useEffect(()=>{ 
        if(active){
            try{
                const contract = getContract(library, TotemNFT.abi, getTotemNFTAddress(chainId))
                contract.methods.totemOwnersNow().call().then(res =>{
                    
                    setTOTEMownersNow(res) 
                })
            }catch (e) {
                console.log('load owners error:',e)

            }

        }
    },[active])

    return {totemOwnersNow}
}

export const useIsTOTEMowner = () =>{
    const {account, active, library, chainId} = useActiveWeb3React()
    const [ isTOTEMowner, setIsTOTEMowner] = useState()

    useEffect(()=>{ 
        if(active){
            try{
                const contract = getContract(library, TotemNFT.abi, getTotemNFTAddress(chainId))
                contract.methods.isTotemOwner(account).call().then(res =>{
                    
                    setIsTOTEMowner(res) 
                })
            }catch (e) {
                console.log('load check Totem owner error:',e)

            }

        }
    },[active])

    return {isTOTEMowner}
}

export const useTEMsup = () =>{
    const {account, active, library, chainId} = useActiveWeb3React()
    const [ temSup, setTEMSup] = useState()

    useEffect(()=>{ 
        if(active){
            try{
                const contract = getContract(library, TotemToken.abi, getTEMAddress(chainId))
                contract.methods.totalSupply().call().then(res =>{
                    
                    setTEMSup(res) 
                })
            }catch (e) {
                console.log('load TEM sup error:',e)

            }

        }
    },[active])

    return {temSup}
}

export const useTEMBurned = () =>{
    const {account, active, library, chainId} = useActiveWeb3React()
    const [ temBurned, setTEMBurned] = useState()
    const burnAddress = '0x000000000000000000000000000000000000000d'

    useEffect(()=>{ 
        if(active){
            try{
                const contract = getContract(library, TotemToken.abi, getTEMAddress(chainId))
                contract.methods.balanceOf(burnAddress).call().then(res =>{
                    
                    setTEMBurned(res) 
                })
            }catch (e) {
                console.log('load TEM burned error:',e)

            }

        }
    },[active])

    return {temBurned}
}

export const useTotalFees = () =>{
    const {account, active, library, chainId} = useActiveWeb3React()
    const [ totalFees, setTotalFees] = useState()

    useEffect(()=>{ 
        if(active){
            try{
                const contract = getContract(library, TotemToken.abi, getTEMAddress(chainId))
                contract.methods.totalFees().call().then(res =>{
                    
                    setTotalFees(res) 
                })
            }catch (e) {
                console.log('load TEM total fees error:',e)

            }

        }
    },[active])

    return {totalFees}
}

export const useAccountRewards = () =>{
    const {account, active, library, chainId} = useActiveWeb3React()
    const [ accountRewards, setAccountRewards] = useState()

    useEffect(()=>{ 
        if(active){
            try{
                const contract = getContract(library, TotemToken.abi, getTEMAddress(chainId))
                contract.methods.accountRewards(account).call().then(res =>{
                    
                    setAccountRewards(res) 
                })
            }catch (e) {
                console.log('load TEM rewards error:',e)

            }

        }
    },[active])

    return {accountRewards}
}



