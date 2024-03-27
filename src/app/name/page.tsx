"use client";
import { useAmp } from "next/amp";
import { useRouter } from "next/navigation";
function GiveName(){ 
    const router=useRouter();
    return <div>My name is iqrasaleem
        <br />
        <button type="button" onClick={()=>router.push("/name/address")}>get address</button>

    </div>
}
export default GiveName;


