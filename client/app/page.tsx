"use client";

import { Button } from "@/components/ui/button";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";

import useStoreUserEffect from "@/hooks/useStoreUserEffect";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { StickyNavbar } from "@/components/ui/sticky-navbar";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <StickyNavbar />
      <main className="container flex gap-8 pt-10">
        <div className="flex-col max-w-[33rem]">
          <h1 className="text-[3.75rem] font-extrabold my-8 leading-[5rem]">
            We Help To Build
            <span className="flex justify-end">
              <svg
                width="260"
                height="16"
                viewBox="0 0 260 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M225.202 13.037C226.655 12.8808 229.657 12.1708 232.52 11.7347C238.083 10.8873 243.877 11.3007 249.353 9.84615C255.757 8.14488 223.035 7.57647 215.802 7.55844C207.234 7.54041 197.194 7.57448 184.19 7.49733C159.374 7.35707 125.586 7.27392 92.0512 7.98123C82.1387 8.19863 72.2202 8.38697 62.3459 8.72962C58.637 8.86187 54.9218 8.99613 51.2128 9.12836C44.7067 9.36981 38.2049 9.61226 31.697 9.82768C26.1862 10.01 19.3986 10.9337 13.4612 10.8586C6.6911 10.7724 1.97481 9.21152 0.504511 6.212C-0.0408511 5.12198 -0.394467 3.52593 0.802756 2.59723C2.00637 1.6655 2.67531 1.4 3.40599 1.14955C5.16991 0.560449 7.34923 0.102611 8.38667 0.0855814C22.7002 -0.105773 38.6755 0.0605336 51.4894 0.225842C61.5464 0.360092 71.6252 0.486317 84.8737 0.492344C100.749 0.608559 148.288 1.0093 164.158 1.01733C174.678 1.02334 185.174 1.4341 195.638 1.96509C204.345 2.40592 213.147 2.87178 222.097 3.39473C230.753 3.89266 235.895 3.92571 244.647 4.49878C246.01 4.58194 247.617 4.6651 249.353 4.76529C250.799 4.83042 252.674 4.94763 254.086 4.99071C255.505 5.02277 258.496 5.31676 259.614 8C260.986 11.2898 258.495 13.1142 255.355 14.3264C253.81 14.9225 252.172 14.9325 251.252 15.0076C247.72 15.3733 244.411 15.4875 241.921 15.3062C240.245 15.183 235.219 15.5567 230.822 15.8312C227.575 16.0466 225.733 16.0796 220.697 15.7901C218.047 15.4665 217.979 14.5087 221.068 13.7042C222.446 13.4117 224.024 13.1623 225.202 13.037Z"
                  fill="#FFBC11"
                />
              </svg>
            </span>
            Your Dreams.
          </h1>
          <Authenticated>
            <SignedInContent />
          </Authenticated>
          <Unauthenticated>
            <p className="text-lg">
              We research, create and build workplaces with the fusion of
              design, technology and innovation. Let our interior architecture
              team help you create a better business.
            </p>

            <div className="flex gap-28 mt-8">
              <Button className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded w-52 h-10">
                Request a Project
              </Button>

              <Button className="w-52 h-10 text-[#3755EE] rounded bg-gradient-to-br from-white to-gray-300 shadow-custom">
                Play Demo
              </Button>
            </div>

            <div className="flex justify-end pt-8">
              <svg
                width="102"
                height="40"
                viewBox="0 0 102 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.2204 10.6344C11.5514 13.6461 13.2155 16.6573 15.2123 19.669C15.878 21.1746 17.209 22.6808 15.878 24.9394C14.8797 26.445 12.5503 26.445 11.2188 24.9394C8.88948 20.4221 6.22699 15.9048 3.89767 11.0113C2.89931 9.50571 2.23354 7.99951 1.23518 6.49395C0.569412 4.9884 -0.761551 3.4822 0.569412 1.22355C1.90038 -0.658882 3.56449 0.0942183 5.56122 0.470446C9.88727 1.22355 18.8725 1.22355 23.8641 1.59977C28.1901 1.59977 28.1901 5.74086 26.1934 7.62264C25.5276 7.99886 24.5293 7.99886 23.1983 7.99886C21.2016 7.99886 19.2049 7.62264 16.8755 7.62264C17.2081 8.37574 23.5315 12.893 24.1967 13.2693C26.526 15.1517 28.8559 17.0335 31.1852 18.9159C33.8477 21.1746 42.4998 29.0799 46.493 29.4561C45.4946 26.4443 41.1686 21.5508 39.1718 15.5279C37.1751 9.50506 41.1686 3.85843 45.162 1.59977C54.4799 -3.67064 67.4583 6.87018 72.7839 11.3875C79.7724 17.7872 91.1434 26.1575 94.7751 29.7934C97.4637 32.4849 99.5486 34.4029 101.26 37.2417C102.756 39.7245 101.759 40.4693 100.262 39.7245C98.2403 38.7182 96.6959 37.4522 94.2763 35.752C85.7964 29.7934 78.442 23.8094 70.7875 17.7866C65.7956 13.2693 50.4879 0.470767 45.1623 9.88129C41.8346 15.9042 54.4802 25.3157 52.8166 32.0919C52.1508 35.1037 49.4889 36.233 46.1607 35.8561C41.5014 35.4799 36.177 30.9626 33.1819 28.704C32.1836 27.9509 11.8848 11.3878 10.2204 10.6344Z"
                  fill="#FFBC11"
                />
              </svg>
            </div>
          </Unauthenticated>
        </div>
        <div className="flex-col">
          <Image
            src="/casa.svg"
            width={800}
            height={800}
            alt={"Landing Image"}
            className=""
          />
        </div>
      </main>
    </div>
  );
}


function SignedInContent() {
  const store = useStoreUserEffect();
  const userName = useQuery(api.user.userName) || null;
  if (store === null) {
    return <div>Storing user...</div>;
  }

  return (
    <>
      <p>Welcome {userName || null}!</p>
    </>
  );
}