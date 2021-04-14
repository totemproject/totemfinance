import {useState, useEffect} from 'react';
import {getContract, useActiveWeb3React} from "../../web3";
import {
  getTotemAuctionAddress,
  getTEMAddress,
  getTotemNFTAddress
} from "../../web3/address";
import BigNumber from "bignumber.js";

import TotemAuction from "../../web3/contracts/TotemAuction.json";
import TotemNFT from "../../web3/contracts/TotemNFT.json";
import TotemToken from "../../web3/contracts/TotemToken.json";

export async function queryNFTInfo (id){
  try {
    const res = await fetch(`https://raw.githubusercontent.com/totemproject/nftstore/main/id_${id}.json`)
    return await res.json()
  }catch (e){
    return null
  }

}


export const MyTotems = () =>{
  const {active, account, library, chainId} = useActiveWeb3React()
  const [totems, setTotems] = useState([])
  
  async function queryTotems() {
    const contractNFT = getContract(library, TotemNFT.abi, getTotemNFTAddress(chainId))

    contractNFT.methods.totalSupply().call().then( async totalsupply =>{

    
      let totemList = []
      if (totalsupply == 0) { return }
      for (let i = 0; i < totalsupply; i++) {
      const id = i + 1;
      const TotemOwner = await contractNFT.methods.ownerOf(id).call()
      if (TotemOwner.toLowerCase() === account.toLowerCase()) {
        console.log('my own Totem, TokenID:',id)
      const totem = {}
      totem.id = id 
      const poolInfo = await queryNFTInfo(id)
      totem.name = poolInfo? poolInfo.name: ''
      totem.image = poolInfo? poolInfo.image: ''
      totem.description = poolInfo? poolInfo.description: ''
      totem.tokenID = poolInfo? poolInfo.tokenID: ''
      totem.role = poolInfo? poolInfo.role: ''
      totemList = totemList.concat(totem)
      setTotems(totemList)
      }
        }
          }) 
  }

  useEffect(()=>{
    if(active){
      queryTotems()
    }
  },[active])

  return {totems}

}





     
 
