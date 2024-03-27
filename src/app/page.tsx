import Link from "next/link";
function HomePage(){ 
 
  return <div>homepage
   
    <br /> 
    <Link href="/name">click to check name</Link>
    <br />
    <Link href="/information"> click to get information</Link>
    <br />
    
  
    </div>
}
export default HomePage;
