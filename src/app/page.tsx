import Image from "next/image";
import styles from "@/app/ui/styles/home.module.css";
import imgone from "./assets/download.png";
import imgtwo from "./assets/7769624.jpg";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="container mx-auto p-4 relative">
          <div className="bg-white border-2 border-purple-100 rounded-lg p-6 grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              <h1 className={`text-4xl font-bold mb-4 ${styles.text_green}`}>
                Welcome to the Blog
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                esse quibusdam, vero at voluptate hic sit nisi porro ipsum, eius
                nemo, reprehenderit doloremque harum iste impedit laborum
                voluptas veniam. Unde
              </p>
              <a
                href="/blog/posts"
                className={`outline outline-1 outline-offset-2 border-emerald-300 text-emerald-500 hover:text-white py-2 px-4 rounded hover:bg-emerald-500 md:w-auto ${styles.fit_content}`}
              >
                Read
              </a>
            </div>
            <div className="relative flex justify-center items-center">
              <Image
                src={imgone}
                width={1000}
                height={760}
                className="hidden rounded-lg md:block z-10"
                alt="Sample Image"
              />
              <Image
                src={imgtwo}
                width={560}
                height={620}
                className="block rounded-md md:hidden"
                alt="Sample Image"
              />
            </div>
          </div>
          <div className="text-4xl text-purple-700 font-bold mb-4">
            Get in Touch
          </div>
          <div>
            <a
              href="mailto:pallavigupta.inbox98@gmail.com"
              className="text-purple-500 hover:text-purple-700 mr-4"
            >
              Email: pallavigupta.inbox98@gmail.com
            </a>
          </div>
          <div>
            <a
              href="https://yourwebsite.com"
              className="text-purple-500 hover:text-purple-700"
            >
              Website: yourwebsite.com
            </a>
          </div>
        </div>
        <div
          className={`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 ${styles.bg_green}`}
        ></div>
      </main>
    </>
  );
}
