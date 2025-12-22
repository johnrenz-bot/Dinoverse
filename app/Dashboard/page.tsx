import Sidebar from "./components/sidebar";
import Header from "./components/header";


export default async function Dashboard() {
 
    await new Promise((resolve) => {
setTimeout(() => {
    resolve("intentional delay");
    }, 1000);
    });


    return (
        <main className="w-full h-screen flex">

            <Sidebar />

            <div className="flex-1 h-full flex flex-col">

                <div className="w-full h-[10%] ">

                    <Header />
                </div>

                <div className="w-full h-[90%] ">

                </div>

            </div>
        </main>
    );
}
