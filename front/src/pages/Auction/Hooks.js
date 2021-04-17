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

export const useMyBiddenPool = () =>{
  const {active, account, library, chainId} = useActiveWeb3React()
  const [myBiddenPool, setMyBiddenPool] = useState([])

  async function queryMyBiddenPool (){
    const contract = getContract(library, TotemAuction.abi, getTotemAuctionAddress(chainId))

    //const count = await contract.methods.getMyBidCount(account).call()
    //console.log('my bidden pool',count)
    contract.methods.getTotalAuctions().call().then( async count =>{
      let pools = []
      for (let i = 0; i < count; i++) {
        const id = count - i - 1;
        
        const Bidder = await contract.methods.getCurrentBidOwner(id).call()
        if (Bidder.toLowerCase() === account.toLowerCase()) {
          console.log('my bidden pool',id)
          const pool = {}
          pool.index = id
          pool.currentPrice = await contract.methods.getCurrentBidAmount(id).call()
          pool.isWin = await contract.methods.isFinished(id).call()
          
        if (pool.isWin) {
          pool.status = 'closed'
        } else {
          pool.status = 'live'
        }

        pool.ClaimedNFT = await contract.methods.isClaimedNFT(id).call()

        pool.getEndTime = await contract.methods.getEndTime(id).call()

          const poolInfo = await queryNFTInfo(id + 1)
        pool.name = poolInfo? poolInfo.name: ''
        pool.image = poolInfo? poolInfo.image: ''
        pool.description = poolInfo? poolInfo.description: ''
        pool.tokenID = poolInfo? poolInfo.tokenID: ''
        pool.role = poolInfo? poolInfo.role: ''

          pools = pools.concat(pool)
        setMyBiddenPool(pools)
        console.log('pool:',pools)
        }
        
        }
      })

    
      // pool.claimed = await contract.methods.creatorClaimedP(index-1).call()
      // pool.claimed = await contract.methods.creatorClaimedP(index-1).call()
      // pool.currentBiddenAmount = await contract.methods.currentBidderAmount1P(index-1).call()

    
  }

  useEffect(()=>{
    if(active){
      queryMyBiddenPool()
    }
  },[active])

  return {myBiddenPool}

}

export const usePolls = ()=> {
  const {active, account ,library, chainId} = useActiveWeb3React()
  const [pools, setPools] = useState([])

  async function queryPools() {
    const contract = getContract(library, TotemAuction.abi, getTotemAuctionAddress(chainId))
    const NFTContract = getContract(library, TotemNFT.abi, getTotemNFTAddress(chainId))

    contract.methods.getTotalAuctions().call().then( async count =>{
      let poolList = []
      console.log('pool count:',count)
      for (let i = 0; i < count; i++) {
        const id = count - i - 1;
        const pool = {};
        pool.index = id
        pool.currentPrice = await contract.methods.getCurrentBidAmount(id).call()
        pool.isFinished = await contract.methods.isFinished(id).call()
        if (pool.isFinished) {
          pool.status = 'closed'
        } else {
          pool.status = 'live'
        }
        
        pool.bidcount = await contract.methods.getBidCount(id).call()
        
        
        if (pool.isFinished) {
          pool.winner = await contract.methods.getWinner(id).call()
          pool.CurrentBidder = await contract.methods.getCurrentBidOwner(id).call()
        } else {
          pool.CurrentBidder = await contract.methods.getCurrentBidOwner(id).call()
          pool.winner = ""
        }
        pool.ClaimedNFT = await contract.methods.isClaimedNFT(id).call()

        pool.getEndTime = await contract.methods.getEndTime(id).call()

        const poolInfo = await queryNFTInfo(id + 1)
        pool.name = poolInfo? poolInfo.name: ''
        pool.image = poolInfo? poolInfo.image: ''
        pool.description = poolInfo? poolInfo.description: ''
        pool.tokenID = poolInfo? poolInfo.tokenID: ''
        pool.role = poolInfo? poolInfo.role: ''

        console.log('poolInfo',poolInfo)
        poolList = poolList.concat(pool)
        setPools(poolList)
      }
      console.log('pools',poolList)

    })
  }

  useEffect(()=>{
    if(active){
      queryPools()
    }
  },[active])

  return {pools}
}

export const useBiddenStatus = (index)=>{
  const {active, account, library, chainId} = useActiveWeb3React()
  const [bidden, setBidden] = useState(false)
  const [biddenAmount, setBiddenAmount] = useState(0)
  const [winner, setWinner] = useState('')
  const [claimed, setClaimed] = useState(false)



  function queryStatus(){
    try{
      const contract = getContract(library, TotemAuction.abi, getTotemAuctionAddress(chainId))

      contract.methods.getWinner(index).call().then(res =>{
        setWinner(res)
      })

     contract.methods.isClaimedNFT(index).call().then(res =>{
      
        setClaimed(res)
     })

     contract.methods.getCurrentBidOwner(index).call().then(res =>{
       const Bidder = res
      
       if (Bidder.toLowerCase() === account.toLowerCase()) {     
      
        
       
          setBidden(true)
        
          console.log('bidden')
        
      } else {
          setBidden(false)
         
      }
     })

     
      contract.methods.getCurrentBidAmount(index).call().then(res =>{
        setBiddenAmount(res)
        
      })
     
     
     

    }catch (e){

    }
  }

  useEffect(()=>{
    if(active){
      queryStatus()
    }
  },[active])
  

  return {bidden, biddenAmount, winner, claimed}
}
