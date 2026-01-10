import Main from "./components/main"
import About from "./components/about"
import Footer from "./components/footer"
import Dinos from "./components/Dinos"


export default async function Home() {

    await new Promise((resolve) => {
setTimeout(() => {
    resolve("intentional delay");
    }, 1000);
    });


  return (
    <div className="relative ">


<section className=" min-h-screen bg-zinc-50 dark:bg-black">
   <Main /> 
</section>
       

<section className=" min-h-screen bg-zinc-50 dark:bg-black">
   <About /> 
</section>
       

       <section className=" min-h-screen bg-zinc-50 dark:bg-black">
   <Dinos /> 
</section>
       

<section className="h-[7vh] bg-zinc-50 dark:bg-black">
   <Footer /> 
</section>
       
</div>
  );
}
