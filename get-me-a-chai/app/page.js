import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4">
        <div className="flex gap-2 justify-center items-center">
          <p className="font-bold text-5xl mt-6">Buy Me a Chai</p>
          <img src="source.gif" width={120} alt="chai-gif" />
        </div>
        <p>
          A crowdfunding paltform for creators. Get funded by your fans and
          followers. Start now!
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="bg-white opacity-10 h-1"></div>

      <div className="text-white container mx-auto py-16">
        <h2 className="text-2xl font-bold text-center capitalize">
          Your fans can buy you a Chai
        </h2>
        <div className="flex gap-5 justify-around my-8">
          <div className="item flex flex-col items-center justify-center">
            <img
              className="rounded-md"
              src="man.gif"
              width={150}
              alt="working-man"
            />
            <div className="min-h-[2vh]"></div>
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item flex flex-col items-center justify-center">
            <img
              className="rounded-md"
              src="coin.gif"
              width={150}
              alt="working-man"
            />
            <div className="min-h-[2vh]"></div>
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item flex flex-col items-center justify-center">
            <img
              className="rounded-md"
              src="group.gif"
              width={150}
              alt="working-man"
            />
            <div className="min-h-[2vh]"></div>
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white opacity-10 h-1"></div>

      <div className="text-white container mx-auto py-16 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center capitalize mb-5">
          learn more about us
        </h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ey18PDiaAYI?si=2ilwiR9xuxFTInvJ&amp;start=8679" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}
