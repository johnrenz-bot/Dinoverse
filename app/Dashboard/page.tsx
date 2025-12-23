import Main from "./Dashboard-components/Main/main"
import SideMain from "./Dashboard-components/Main/sidemain"

export default async function Dashboard() {

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 1000);
  });


  return (
    <div className="w-full h-full flex">

      <div className="h-full w-[70%] ">
          <Main />
      </div>



      <div className="h-full w-[30%] ">
          <SideMain />
      </div>
    </div>
  );
}
