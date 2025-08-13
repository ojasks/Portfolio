// import { useRef } from "react";
// import Card from "../components/Card";
// import { Globe } from "../components/Globe";
// import CopyEmailButton from "../components/CopyEmailButton";
// import { Frameworks } from "../components/FrameWorks";

// const About = () => {
//   const grid2Container = useRef();
//   return (
//     <section className="c-space section-spacing sm:px-10 px-5 lg:px-15  min-h-screen mt-20 md:mt-30" id="about">
//       <h2 className="text-heading font-bold text-3xl md:text-4xl font-bold text-3xl md:text-4x">About Me</h2>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
//         {/* Grid 1 */}
//         <div className="flex items-end grid-default-color grid-1 row-span-2 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200 p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl">
//           <img
//             src="assets/coding-pov.png"
//             className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
//           />
//           <div className="z-10">
//             <p className="headtext mt-2 mb-2 text-xl">Hi, I'm Ojas Kumar Singh</p>
//             <p className="subtext text-neutral-400 text-sm md:text-base text-pretty">
//               Over the last 4 years, I developed my frontend and backend dev
//               skills to deliver dynamic and software and web applications.
//             </p>
//           </div>
//           <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
//         </div>
//         {/* Grid 2 */}
//         <div className="grid-default-color grid-2 row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200 p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl
// }">
//           <div
//             ref={grid2Container}
//             className="flex items-center justify-center w-full h-full"
//           >
//             <p className="flex items-end text-5xl text-gray-500">
//               CODE IS CRAFT
//             </p>
//             <Card
//               style={{ rotate: "75deg", top: "30%", left: "20%" }}
//               text="GRASP"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "-30deg", top: "60%", left: "45%" }}
//               text="SOLID"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
//               text="Design Patterns"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "-45deg", top: "55%", left: "0%" }}
//               text="Design Principles"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "20deg", top: "10%", left: "38%" }}
//               text="SRP"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "30deg", top: "70%", left: "70%" }}
//               image="assets/logos/csharp-pink.png"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "-45deg", top: "70%", left: "25%" }}
//               image="assets/logos/dotnet-pink.png"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "-45deg", top: "5%", left: "10%" }}
//               image="assets/logos/blazor-pink.png"
//               containerRef={grid2Container}
//             />
//           </div>
//         </div>
//         {/* Grid 3 */}
//         <div className="grid-black-color grid-3 row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200 p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl  p-6 bg-gradient-to-tl from-[#3A3A3A] via-[#242424] to-[#3A3A3A] rounded-2xl">
//           <div className="z-10 w-[50%]">
//             <p className="headtext mt-2 mb-2 text-xl">Time Zone</p>
//             <p className="subtext text-neutral-400 text-sm md:text-base text-pretty">
//               I'm based in Mars, and open to remote work worldwide
//             </p>
//           </div>
//           <figure className="absolute left-[30%] top-[10%]">
//             <Globe />
//           </figure>
//         </div>
//         {/* Grid 4 */}
//         <div className="grid-special-color grid-4  row-span-1 md:col-span-2 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200 p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl">
//           <div className="flex flex-col items-center justify-center gap-4 size-full p-6 bg-gradient-to-b from-royal to-lavender rounded-2xl">
//             <p className="text-center headtext mt-2 mb-2 text-xl">
//               Do you want to start a project together?
//             </p>
//             <CopyEmailButton />
//           </div>
//         </div>
//         {/* Grid 5 */}
//         <div className="grid-default-color grid-5 row-span-1 md:col-span-4 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200 p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl">
//           <div className="z-10 w-[50%]">
//             <p className="headText mt-2 mb-2 text-xl">Teck Stack</p>
//             <p className="subtext text-neutral-400 text-sm md:text-base text-pretty">
//               I specialize in a variety of languages, frameworks, and tools that
//               allow me to build robust and scalable applications
//             </p>
//           </div>
//           <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
//             <Frameworks />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();

  return (
    <section
      className="sm:px-10 px-5 lg:px-[3.75rem] min-h-screen mt-20 md:mt-[7.5rem]"
      id="about"
    >
      <h2 className="font-bold text-3xl md:text-4xl">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end row-span-2 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200 p-6 bg-gradient-to-b from-[#282b4b] to-[#1f1e39] rounded-2xl">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="mt-2 mb-2 text-xl">Hi, I'm Ojas Kumar Singh</p>
            <p className="text-neutral-400 text-sm md:text-base">
              Over the last 4 years, I developed my frontend and backend dev
              skills to deliver dynamic and software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-[#1f1e39]" />
        </div>

        {/* Grid 2 */}
        <div className="row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200 p-6 bg-gradient-to-b from-[#282b4b] to-[#1f1e39] rounded-2xl">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200 p-6 bg-gradient-to-tl from-[#3A3A3A] via-[#242424] to-[#3A3A3A] rounded-2xl">
          <div className="z-10 w-[50%]">
            <p className="mt-2 mb-2 text-xl">Time Zone</p>
            <p className="text-neutral-400 text-sm md:text-base">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="row-span-1 md:col-span-2 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <div className="flex flex-col items-center justify-center gap-4 size-full p-6 bg-gradient-to-b from-[#5c33cc] to-[#7a57db] rounded-2xl">
            <p className="text-center mt-2 mb-2 text-xl">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="row-span-1 md:col-span-4 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200 p-6 bg-gradient-to-b from-[#282b4b] to-[#1f1e39] rounded-2xl">
          <div className="z-10 w-[50%]">
            <p className="mt-2 mb-2 text-xl">Tech Stack</p>
            <p className="text-neutral-400 text-sm md:text-base">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
