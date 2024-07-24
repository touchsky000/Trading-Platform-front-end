"use client";

import { useEffect, useState } from "react";
import { TabsList, Tabs, TabsTrigger, TabsContent } from "../ui/tabs";
import PositionMiningCard from "./positionMiningCard";
import { useToast } from "../ui/toast/use-toast";

export const toNumber = (num: BigInt) => {
  return Number(num) / Number(Math.pow(10, 18))
}
export default function PositionHistoryCard({ liquidityData }: any) {

  const [liquidity, setLiquidity] = useState<any>(0)
  const [margin, setMargin] = useState<any>(0)

  useEffect(() => {

    if (liquidityData === undefined) return

    console.log("Prop => ", liquidityData)
    setMargin(toNumber(liquidityData.marginDelta))
    setLiquidity(toNumber(liquidityData.liquidityDelta))
  }, [liquidityData])

  useEffect(() => {
    console.log("Margin =>", margin);
    console.log("Liquidity =>", liquidity);

  }, [margin, liquidity])
  return (
    <div className="px-9 py-5 text-gray-500 font-normal text-lg">
      <hr className="py-3 border-gray-700" />
      <div className="flex space-x-4 text-lg font-bold">
        <div className="text-primary">Position</div>
        <div className="">History</div>
      </div>

      <div className="grid grid-cols-6 place-items-start mt-4 text-center text-sm">
        <div>
          <div className="">Liquidity</div>
          <div className="text-white pt-3">{liquidity}</div>
        </div>
        <div>
          <div className="">Leverage</div>
          <div className="text-white pt-3">{liquidity / margin}x</div>
        </div>
        <div>
          <div className="">Unrealized PnL</div>
          <div className="text-semantic-success pt-3">120.20</div>
        </div>
        <div>
          <div className="text-gray-500">Risk</div>
          <div className="flex items-center justify-center pt-3 text-white">
            93.95%
          </div>
        </div>
        <div>
          <div className="text-gray-500">Margin</div>
          <div className="text-white pt-3">{margin} USDC</div>
        </div>
        <div className="flex items-center justify-center">
          <button className="px-5 py-2 border rounded-lg">Remove</button>
        </div>
      </div>
    </div>
  );
}
