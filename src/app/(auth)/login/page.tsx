"use client"
import Button from "@/components/atom/button";
import { formSignInSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { Imprima } from "next/font/google";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";



export default function Login(){

  const router = useRouter()
  // const href = () => router.push('/')
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSignInSchema),
  })

  const onSubmit = async (body: any) => {
    const authenticated = await signIn("credentials", {
      ...body,
      redirect: false,
    })
// console.log(authenticated)
 

  if(!body.username && !body.password){
    alert('kosong')
    
  }
  else if (authenticated?.error) {
    console.log("Login gagal, username atau password salah!")
    alert("Login gagal, username atau password salah!")
    } 
  else {

  alert("Login berhasil")
  setTimeout(async () => {
  
    await router.push("/")
  },  2000)
    }

  }

    return (
      <>
        {/* Navbar */}
        <nav className="py-10">
          <div className="flex justify-around">
            <div className="flex justify-center gap-8 w-[80%]">
              <h1 className="border-b-2 border-blue-500 ">Home</h1>
              <h1>About Us</h1>
              <h1>How to use</h1>
            </div>
            <div className="flex gap-8 w-[20%]">
              <div>
                <button className="text-blue-500">Sign In</button>
                <hr className="w-8 border-b border-blue-500 my-0 mx-auto" />
              </div>
              <div>
                <button className="rounded-md bg-blue-500 text-white px-3 py-1">
                  Register
                </button>
              </div>
            </div>
          </div>
        </nav>
        {/* main content*/}
        <main className="py-10 px-8 relative">
          <div className="w-96 h-96 bg-blue-200 blur-3xl rounded-full fixed -bottom-10 left-40 -z-10 "></div>
          <div className="flex justify-between">
            <div className="m-10">
              <h1 className="text-3xl font-bold">
                Sign In to <br />
                fall detection
              </h1>
              <h1 className="text-xl">
                if you dont have an account <br /> you can{" "}
                <span className="text-blue-500">Register Here!</span>
              </h1>
            </div>
            <div>
              <h1 className="text-3xl italic font-bold text-center pb-4">
                Welcome
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 relative">
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="bg-gray-200 p-3 w-80 rounded-md"
                    {...register("username")}
                  />
                  <img
                    src="/public/close.svg"
                    alt="close"
                    className="w-[1.2rem] absolute right-4 top-3 z-10"
                  />
                </div>
                <div className="mb-3 relative">
                  <input
                    type="password"
                    placeholder="********"
                    className="bg-gray-200 p-3 pt-4 w-80 rounded-md"
                    {...register("password")}
                  />
                  <img
                    src="/public/eye-off.svg"
                    alt="close"
                    className="w-[1.2rem] absolute right-4 top-4 z-10"
                  />
                </div>
                <h1 className="text-right text-gray-400 py-3">
                  Recover Password ?
                </h1>
                {/* <a href="/" className="bg-blue-700 w-full rounded-md px-4 py-2 text-white shadow-2xl" >
                  Sign In
                </a> */}
                <Button title="Sign In" cls="bg-blue-700 w-full rounded-md px-4 py-2 text-white shadow-2xl"  />

              </form>
            </div>
          </div>
        </main>
      </>
    )
}
  


